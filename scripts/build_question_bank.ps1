param(
  [string]$QuestionsRoot = (Join-Path (Split-Path $PSScriptRoot -Parent) "Questions"),
  [string]$JsonPath = (Join-Path (Split-Path $PSScriptRoot -Parent) "data\questions.json"),
  [string]$ReviewPath = (Join-Path (Split-Path $PSScriptRoot -Parent) "data\questions_review.md")
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path $PSScriptRoot -Parent

function Clean-Text {
  param([string]$Value)
  $clean = $Value.Trim()
  $clean = $clean -replace "\s+", " "
  return $clean.Trim()
}

function Is-Noise {
  param([string]$Line)
  $lower = $Line.ToLowerInvariant()
  return (
    $lower -eq "options" -or
    $lower -eq "correct answer" -or
    $lower -eq "wrong answer" -or
    $lower -eq "(disabled)" -or
    $lower.StartsWith("you gave the correct answer") -or
    $lower.StartsWith("you gave the wrong answer") -or
    $Line -match "^Score:\s*\d+$"
  )
}

function Split-QuestionBlocks {
  param([string[]]$Lines)
  $blocks = New-Object System.Collections.Generic.List[object]
  $current = New-Object System.Collections.Generic.List[string]

  foreach ($line in $Lines) {
    if ($line -match "^Question\s+\d+\s+of\s+\d+") {
      if ($current.Count -gt 0) {
        $blocks.Add([string[]]$current)
      }
      $current = New-Object System.Collections.Generic.List[string]
      $current.Add($line)
    } elseif ($current.Count -gt 0) {
      $current.Add($line)
    }
  }

  if ($current.Count -gt 0) {
    $blocks.Add([string[]]$current)
  }
  return $blocks
}

function Get-QuestionnaireNumber {
  param([string]$Name)
  if ($Name -match "questionnaire-(\d+)\.txt$") {
    return [int]$Matches[1]
  }
  return 0
}

function Split-PromptAndOptions {
  param(
    [string[]]$Lines,
    [string[]]$CorrectAnswers
  )

  $marker = $Lines.Count
  for ($i = 0; $i -lt $Lines.Count; $i++) {
    if ($Lines[$i].ToLowerInvariant() -eq "options") {
      $marker = $i
      break
    }
  }

  $useful = @()
  for ($i = 0; $i -lt $marker; $i++) {
    if (-not (Is-Noise $Lines[$i])) {
      $useful += $Lines[$i]
    }
  }

  $maxOptionCount = [Math]::Min(8, $useful.Count)
  $minOptionCount = [Math]::Min(4, $maxOptionCount)
  if ($useful.Count -lt 5) {
    $minOptionCount = [Math]::Min(2, $maxOptionCount)
  }
  $optionCount = $minOptionCount

  for ($count = $minOptionCount; $count -le $maxOptionCount; $count++) {
    $suffix = $useful[($useful.Count - $count)..($useful.Count - 1)]
    $allFound = $true
    foreach ($answer in $CorrectAnswers) {
      if ($suffix -notcontains $answer) {
        $allFound = $false
        break
      }
    }
    if (($useful.Count - $count -ge 1) -and $allFound) {
      $optionCount = $count
      break
    }
  }

  $options = @()
  $promptLines = @()
  if ($optionCount -gt 0) {
    $options = $useful[($useful.Count - $optionCount)..($useful.Count - 1)]
    if ($useful.Count -gt $optionCount) {
      $promptLines = $useful[0..($useful.Count - $optionCount - 1)]
    }
  }

  return @{
    Prompt = (($promptLines -join " ").Trim())
    Options = @($options)
  }
}

$questions = New-Object System.Collections.Generic.List[object]
$warnings = New-Object System.Collections.Generic.List[string]

$categoryDirs = Get-ChildItem -LiteralPath $QuestionsRoot -Directory | Sort-Object Name
foreach ($categoryDir in $categoryDirs) {
  $files = Get-ChildItem -LiteralPath $categoryDir.FullName -Filter "*.txt" | Sort-Object @{ Expression = { Get-QuestionnaireNumber $_.Name } }, Name
  foreach ($file in $files) {
    $rawLines = Get-Content -LiteralPath $file.FullName -Encoding UTF8
    $lines = @($rawLines | ForEach-Object { Clean-Text $_ } | Where-Object { $_ })
    $blocks = Split-QuestionBlocks $lines

    foreach ($block in $blocks) {
      if ($block[0] -notmatch "^Question\s+(\d+)\s+of\s+(\d+)") {
        continue
      }

      $questionNumber = [int]$Matches[1]
      $totalQuestions = [int]$Matches[2]
      $marker = -1
      for ($i = $block.Count - 1; $i -ge 0; $i--) {
        if ($block[$i] -match "^Correct answers?:$") {
          $marker = $i
          break
        }
      }

      if ($marker -lt 0) {
        $warnings.Add("$($file.FullName): question $questionNumber has no correct answer marker")
        continue
      }

      $answers = @()
      for ($i = $marker + 1; $i -lt $block.Count; $i++) {
        if (($block[$i] -notmatch "^Question\s+\d+\s+of\s+\d+") -and -not (Is-Noise $block[$i])) {
          $answers += $block[$i]
        }
      }

      if (-not $answers.Count) {
        $warnings.Add("$($file.FullName): question $questionNumber has no correct answer value")
        continue
      }

      $split = Split-PromptAndOptions $block[1..($marker - 1)] $answers
      foreach ($answer in $answers) {
        if ($split.Options -notcontains $answer) {
          $warnings.Add("$($file.FullName): question $questionNumber answer not found in options: $answer")
        }
      }

      $questionnaireNumber = Get-QuestionnaireNumber $file.Name
      $categorySlug = ($categoryDir.Name.ToLowerInvariant() -replace "[^a-z0-9]+", "-").Trim("-")
      $projectPrefix = ((Resolve-Path -LiteralPath $ProjectRoot).Path.TrimEnd("\") + "\")
      $fullSource = (Resolve-Path -LiteralPath $file.FullName).Path
      if ($fullSource.StartsWith($projectPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        $relativeSource = $fullSource.Substring($projectPrefix.Length).Replace("\", "/")
      } else {
        $relativeSource = $fullSource.Replace("\", "/")
      }

      $questions.Add([ordered]@{
        id = "$categorySlug-$questionnaireNumber-$questionNumber"
        module = "Quiz Bank"
        source_type = "quiz_export"
        category = $categoryDir.Name
        source_file = $relativeSource
        source_quiz = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        questionnaire_number = $questionnaireNumber
        question_number = $questionNumber
        total_questions = $totalQuestions
        question = $split.Prompt
        options = @($split.Options)
        correct_answers = @($answers)
        answer_type = $(if ($answers.Count -gt 1) { "multiple" } else { "single" })
        correct_answer = $(if ($answers.Count -eq 1) { $answers[0] } else { $null })
      })
    }
  }
}

New-Item -ItemType Directory -Force -Path (Split-Path $JsonPath -Parent), (Split-Path $ReviewPath -Parent) | Out-Null

$questionArray = @($questions.ToArray())
$categories = @($questionArray | ForEach-Object { $_.category } | Sort-Object -Unique)

$payload = [ordered]@{
  generated_by = "scripts/build_question_bank.ps1"
  question_count = $questions.Count
  categories = $categories
  modules = @($questionArray | ForEach-Object { $_.module } | Sort-Object -Unique)
  questions = $questionArray
}

$payload | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $JsonPath -Encoding UTF8

$review = New-Object System.Collections.Generic.List[string]
$review.Add("# XSIAM Question Bank Review")
$review.Add("")
if ($warnings.Count -gt 0) {
  $review.Add("## Parser Warnings")
  $review.Add("")
  foreach ($warning in $warnings) {
    $review.Add("- $warning")
  }
  $review.Add("")
}

$currentCategory = ""
$currentModule = ""
$currentSource = ""
foreach ($question in $questions) {
  if ($question.module -ne $currentModule) {
    $currentModule = $question.module
    $currentCategory = ""
    $currentSource = ""
    $review.Add("## $currentModule")
    $review.Add("")
  }
  if ($question.category -ne $currentCategory) {
    $currentCategory = $question.category
    $currentSource = ""
    $review.Add("### $currentCategory")
    $review.Add("")
  }
  if ($question.source_file -ne $currentSource) {
    $currentSource = $question.source_file
    $review.Add("#### $currentSource")
    $review.Add("")
  }
  $review.Add("##### Question $($question.question_number)")
  $review.Add("")
  $review.Add($question.question)
  $review.Add("")
  foreach ($option in $question.options) {
    $marker = if ($question.correct_answers -contains $option) { "[x]" } else { "[ ]" }
    $review.Add("$marker $option")
  }
  $review.Add("")
  $review.Add("Correct: $($question.correct_answers -join '; ')")
  $review.Add("")
}

$review | Set-Content -LiteralPath $ReviewPath -Encoding UTF8

Write-Host "Parsed questions: $($questions.Count)"
Write-Host "Warnings: $($warnings.Count)"
Write-Host "Wrote JSON: $JsonPath"
Write-Host "Wrote review: $ReviewPath"
