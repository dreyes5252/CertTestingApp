param(
  [int]$Port = 8787
)

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
$RootPath = (Resolve-Path -LiteralPath $Root).Path
$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add("http://localhost:$Port/")
$Listener.Prefixes.Add("http://127.0.0.1:$Port/")

function Get-ContentType {
  param([string]$Path)
  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8"; break }
    ".css" { "text/css; charset=utf-8"; break }
    ".js" { "text/javascript; charset=utf-8"; break }
    ".json" { "application/json; charset=utf-8"; break }
    ".md" { "text/markdown; charset=utf-8"; break }
    default { "application/octet-stream"; break }
  }
}

function Send-Text {
  param($Response, [int]$StatusCode, [string]$Text)
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
  $Response.StatusCode = $StatusCode
  $Response.ContentType = "text/plain; charset=utf-8"
  $Response.ContentLength64 = $bytes.Length
  $Response.OutputStream.Write($bytes, 0, $bytes.Length)
}

$Listener.Start()
Write-Host "Serving $RootPath at http://localhost:$Port/app/"

try {
  while ($Listener.IsListening) {
    $context = $Listener.GetContext()
    $response = $context.Response

    try {
      $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "app/index.html"
      }

      $relativePath = $requestPath.Replace("/", "\")
      $targetPath = Join-Path $RootPath $relativePath
      if (Test-Path -LiteralPath $targetPath -PathType Container) {
        $targetPath = Join-Path $targetPath "index.html"
      }

      $resolved = Resolve-Path -LiteralPath $targetPath -ErrorAction SilentlyContinue
      if (-not $resolved) {
        Send-Text $response 404 "Not found"
        continue
      }

      $resolvedPath = $resolved.Path
      if (-not $resolvedPath.StartsWith($RootPath, [System.StringComparison]::OrdinalIgnoreCase)) {
        Send-Text $response 403 "Forbidden"
        continue
      }

      $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
      $response.StatusCode = 200
      $response.ContentType = Get-ContentType $resolvedPath
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      Send-Text $response 500 $_.Exception.Message
    } finally {
      $response.OutputStream.Close()
    }
  }
} finally {
  $Listener.Stop()
}
