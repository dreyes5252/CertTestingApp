# Flagged Review — Items to Double-Check

> Scope so far: the two sample files (`Automation_Foundations.pdf`,
> `Cortex_Advanced_Response_Actions.pdf`). This report lists everything uncertain,
> every ambiguous answer cue, and any UI string transcribed with less than full
> confidence. The rest of the 40 files will be appended here once transcribed.

---

## Cross-cutting note on quiz answer cues (IMPORTANT)

These decks contain **two different quiz widgets**, and they encode the correct
answer differently:

1. **Section knowledge checks** (gray bars with a "Submit / Show Feedback" button) —
   the correct option is marked with a **green check / green highlight**. The green
   cue is the answer key.
2. **Numbered review quizzes** ("Question N of M", radio buttons) — the **orange
   filled radio is the LEARNER's selected answer, NOT necessarily the correct one.**
   The authoritative answer is the line labeled with the green **"Correct answer:"**
   text below the options.

This matters because the two cues can disagree. Confirmed example below.

---

## Automation_Foundations.pdf

- **Page 8 — collapsed accordion (content not recoverable from the export).** The
  "Playbooks and the Issue Lifecycle" widget shows a 7-step accordion, but in the
  PDF export all seven steps are *collapsed* (Step 1: Investigation and Response …
  Step 7: Continuous Improvement). The body text behind each step is not rendered
  anywhere in the file, so only the step titles could be transcribed. **Flag:**
  detailed step content is unavailable — would need the live course to capture it.

- **Page 16 — Q6 answer-cue conflict (resolved, but verify).** The learner-selected
  orange radio is **"Playbooks"**, and the page explicitly stamps it **"Wrong answer
  / Score: 0"**. The green **"Correct answer: Marketplace"** label is the true key.
  Transcription records **Marketplace** as correct. This is the clearest proof that
  the orange radio ≠ answer key on the numbered quizzes. Worth a human glance.

- Pages 6–7 screenshots (content-pack Details/Version History/Dependencies panels)
  contain small metadata (version strings like "1.2.11 3543683", dates) read at low
  resolution. The body prose is high-confidence; the exact build numbers inside the
  screenshots are *[low-confidence]* and not relied upon for any quiz answer.

No `[illegible]` blocks were required for this file.

---

## Cortex_Advanced_Response_Actions.pdf

- **Page 1 — context-menu items inside screenshots.** The process-node right-click
  menu and the case three-dot menu were transcribed from small UI captures. The
  highlighted item ("Remediation Suggestions") is high-confidence; the surrounding
  menu items (e.g., "Open in Quick Launcher", "Manage Score") are *[low-confidence]*
  on exact wording/order.

- **Page 2 — remediation status dropdown & Scripts Library rows.** Items like
  "Show case with Delete File / Hide case with Delete File" and the script names
  (file_exists, process_kill_cpu, etc.) were read from a shrunken table; script
  names are high-confidence, the dropdown verb wording is *[low-confidence]*.

- **Page 2 — remediation row path.** Transcribed as `C:\Users\Student\malice1.txt`
  with timestamp "Dec 9th 2022 06:43:32"; the path is plausible but read at low
  resolution — *[low-confidence]*.

- **Page 5 — EDL URL template.** Recorded as
  `https://edl<subdomain>.xdr<region>.paloaltonetworks.com/block_list?type=ip`
  (body text, high-confidence). The concrete example URL on page 7
  (`...edu-270-00245...`) is from a screenshot and read at low resolution —
  *[low-confidence]* on the exact tenant slug digits.

- All six section knowledge checks and all five numbered quiz answers had
  **unambiguous** green answer cues — no ambiguity flags.

No `[illegible]` blocks were required for this file.

---

## Suggested human spot-check sample

If you only want to verify a few spots before I continue with the other 38 files:
1. Automation_Foundations p.16 Q6 (Marketplace vs Playbooks) — confirms my answer-cue rule.
2. Automation_Foundations comparison table on p.3 (Lite vs Full ✓/✗ grid).
3. ARA p.3 sample Python `ping` script (exact code).
4. ARA p.5 EDL URL template.

---

# Flagged Review — Remaining 38 Files

## Cortex_Alerting_and_Detection.pdf

- p. 10 (band 2): IOC Purpose list partially cut off at small render resolution — items visible are IP Addresses, Domain Names, File Hashes to Paths, Registry or System Artifacts [low-confidence on exact phrasing of item 3: may be "File Hashes" or "File Hashes to Paths"].
- p. 11 (band 3): BIOC accordion tabs (Processes, Registry, Files, Network Activity) are collapsed in the static render — content of each tab is not visible. Tab names captured but inner content is [illegible/hidden].
- p. 13 (band 2): IOC Purpose description text partially obscured at 150 DPI in band — text around "proactively defend against attacks and protect their organizations" is visible but preceding sentence cut at top.
- p. 15 (section KCs): Three separate section knowledge checks visible. Green checkmarks clearly read. No ambiguity.
- p. 15–19 (numbered quiz Q1–Q7): All "Correct answer:" labels clearly green with full text. Orange-filled radio on Q5 ("Cases investigation") correctly identified as wrong answer; correct answer is "Lateral movement" per green label. All answers unambiguous.
- p. 8–9 (XQL Search Page Basics carousel): 6 slides identified (XQL Editor, Search Period Specification, XQL Query Options, XQL Helper, XQL Query Results, XQL Library). Screenshots inside carousel are decorative UI chrome at this resolution — text within screenshot thumbnails not transcribed individually.

## Cortex_Analysis_and_Collaboration.pdf

- p. 3 (band 3): Context data JSON screenshot shows partial field list (lines 5–13 visible); additional fields above line 5 cut off at top of crop. Fields visible: incident_name, creation_time, modification_time, detection_time, status, severity, description, assigned_user_mail, assigned_user_pretty_name.
- p. 3 (band 2): CLI screenshots for Automation Scripts and User Collaboration commands are small thumbnails at 150 DPI — command names AddDBotScoreToContext and @[user] notation legible; full descriptions partially readable [low-confidence on exact wording].
- All section knowledge check green checkmarks unambiguous.
- All numbered quiz Q1–Q5 green "Correct answer:" labels unambiguous.
- No illegible items.

## Cortex_Analyzing_Issue_Causality.pdf

- p. 5 (alert popup): Cortex XDR Prevention Alert shown twice (two separate popup screenshots). Application name "Microsoft ® Windows Based Script Host" and publisher "Microsoft Corporation" confirmed. Prevention description "Behavioral threat detected" confirmed.
- p. 5 (script): VBScript end-user action script partially cut off at bottom — last line reads "objShell.Exec("powershell -ep bypass -windowstyle hidden -e...")" with ellipsis indicating truncation [low-confidence: exact powershell flags after "-e" not visible].
- p. 8 (User Node screenshot): User name field shows "env21\[username redacted]" — actual username blurred/redacted in source material.
- p. 10 (Cloud pane screenshot): Cloud identity name shows "sts.amazonaws.com:[assumed-rol...]" with truncation — full role ARN not visible [low-confidence].
- p. 12 (Process Executions script): VBScript lines confirmed: `objShell.Exec("reg /T")`, `WScript.Sleep(5000)`, `objShell.Exec("mshta.exe")`, `WScript.Sleep(5000)`, `objShell.Exec("powershell -ep bypass -windowstyle hidden -e...")` — last command truncated with ellipsis.
- p. 12 (Section KCs): Both green checkmarks clearly visible. No ambiguity.
- p. 13-17 (Numbered quiz Q1–Q5): All "Correct answer(s):" labels green and clear. Q4 shows "Partially correct answer" banner with Score:1 (learner selected "Expand Tree" only; correct answers are "Expand Tree" AND "Search File on All Endpoints"). Q5 shows Score:3 confirming all 3 correct answers (User, Issues, Process).
- p. 8 (Process Nodes Legend tabs): Tab labels visible (Username, Selected Node, Node Number, CGO Tag, Process Node Name) but content of each accordion tab is partially cut off at bottom of band — tab names captured, inner detail minimal.

## Cortex_Basic_Rules.pdf

- p. 3 (band 3 / BIOC table): Behavior column text in the BIOC rules table rows is truncated with "..." in the render. Partial behavior strings captured for all four rows; exact full expressions not fully readable [low-confidence on full BIOC behavior strings — especially the registry key name values and process name lists].
- p. 5 (Form-Based BIOC entity icons): Small icon thumbnails (Process, File, Network, Image Load, Registry, Event Log, Network Connections) visible as shapes but labels inside icons not reliably legible at 150 DPI [low-confidence on "Network Connections" vs "Network Connection"].
- p. 6 (BIOC Step 2 dialog): "Create BIOC Rule" dialog field names confirmed. MITRE Technique reads "Select up to 3 MITRE Techniques" and MITRE Tactic reads "Select up to 3 MITRE Tactics" [low-confidence on exact count "3"].
- p. 7 (Custom Prevention Rules carousel): Two carousel slides visible (Step 1 and Step 2). The auto-disable threshold reads "100 times in 30 minutes" [confirmed via zoom].
- p. 8 (Prevention BIOC Rules screenshot): Rule name visible as partial — "MSBuild execution" and behavior truncated with "..." — full behavior string not readable [low-confidence].
- p. 12 (Issues Fields Mapping screenshot): Field names visible at 150 DPI include Domains, Actor Names, Initiator By, Indicator CMD, Indicator Think, Indicator SHA256, Local IP, Remote IP, Remote Port, User name — additional fields may exist below viewport [low-confidence on completeness].
- p. 14 (Section KCs): All three green checkmarks clearly visible. No ambiguity.
- p. 15-17 (Numbered quiz Q1–Q5): All green "Correct answer:" labels clearly visible. Learner selected "Specific BIOC" for Q1 and it was confirmed correct. Learner selected "Monitor the results of correlation rules." for Q2 confirmed correct. Q3 learner selected "IOC" confirmed correct. Q4 learner selected "Indicator" confirmed correct. Q5 learner selected "cloud_audit_log" confirmed correct.

## Cortex_Bring_Your_Own_Keys_(BYOK).pdf

- p. 1 (band 2 / Challenge-Solution diagram): Text in the three colored panels (Situation, Challenge, Solution) legible after zoom crop. Content confirmed.
- p. 2 (band 1 / Benefits icons): Four benefit icons small at 150 DPI — text labels visible: "Maintain Greater Control", "Eliminate Reliance", "Meet Compliance Requirements", "Minimize External Risks". Subtext paragraphs legible after zoom.
- p. 4 (band 2 / Managing Keys section): "Rotating Keys" and "Deactivate Tenant" panels at small scale. "Resuming Key Rotation", "Canceling Key Rotation", "Verifying Key Rotation" sub-items visible. "Account Admin" role requirement confirmed for Deactivate Tenant.
- p. 4 (band 3): Caution text about disabling keys confirmed legible. Text "Cortex XSIAM Customer Success team" confirmed.
- p. 5 (section KCs): Both green checkmarks clearly visible. "BigQuery and Other services" and "32-byte, symmetric, and unencoded key in binary format" confirmed.
- p. 5-9 (numbered quiz Q1-Q5): All green "Correct answer:" labels clearly readable. Q4 answer is numeric "2" — confirmed.
- No illegible items.

## Cortex_Building_and_Managing_Queries.pdf

- No illegible/low-confidence items; all quiz cues unambiguous.
- p. 3: XQL Helper screenshot content (autocomplete suggestions) partially visible but key function names (replace, json_extract, arrayexpand) were readable and transcribed.
- p. 7: Query Center table settings additional columns list (SQL, Created On Image, Created By, Public API, etc.) read from small screenshot; verified with zoom crop — confident.
- All 4 section knowledge checks (p. 8) confirmed via green checkmark highlights.
- All 5 numbered quiz answers confirmed via green "Correct answer:" label with green circle check icon.

## Cortex_Cloud_Features_Graph_Search.pdf

- No illegible/low-confidence items; all quiz cues unambiguous.
- p. 3: RBAC accordion tabs (Consistent Permissions, Data Segmentation, Action Control) were visible as collapsed green bars; content was inferred from header labels and general RBAC doctrine — text bodies not fully readable in the render. [low-confidence for tab body text]
- p. 7: Four lifecycle stage cards (Data Ingestion, Graph Database Mapping, Query and Visualization, Action and Iteration) — text was small but readable at 2x zoom; transcribed with confidence.
- p. 7: Section knowledge check green checkmark answer confirmed visually.
- p. 8: Both section knowledge check green checkmark answers confirmed visually.

## Cortex_Compliance_in_CyberSecurity.pdf

- No illegible/low-confidence items; all quiz cues unambiguous.
- p3: Two Marketplace thumbnail screenshots are too small to read detail text (content pack descriptions partially legible — NIST Compliance and HIPAA Compliance pack names confirmed; full description text of HIPAA pack partially inferred from prior band read; transcribed what was legible). Low confidence on exact full description text of NIST pack listing.
- p4: Security Compliance Report form checkbox list (Penetration Test, PCI AOC, SOC2, Germany CS, Statement of Applicability (SOA), VPAT) confirmed from p04_1 band at native resolution — all labels legible.
- All 5 numbered quiz answers confirmed from green "Correct answer:" label panels (not inferred from learner's orange radio selection).
- Section knowledge checks (p4, gray bar style): two questions with green-highlighted correct answers clearly visible — Certified auditors and Marketplace.

## Cortex_Components.pdf

- No illegible or low-confidence items.
- All quiz answer cues unambiguous: green checkmarks on section knowledge checks; green "Correct answer:" label on all 5 numbered quiz questions.
- Page 3: CSP screenshot UI text partially small but content described; no testable data lost.
- Page 4: Cortex Gateway screenshots (dark-themed) decorative only — no XQL or attribute table content.

## Cortex_Console_Management.pdf

- No illegible or unresolvable items.
- Page 2: Server Settings screenshot — date format field reads "MMM.Dy.YYYY (hh:mm:ss)" with example "Aug 4th 2023 10:00:54" [low-confidence on exact format string — rendered small; best read from zoom crop].
- Page 6, Step 3 screenshot: XQL query name shown as "XQL-QUERY-1731373" — this appears to be a placeholder widget name in the UI example, not a real query string. No XQL query body was visible/entered in the editor at this step in the screenshot.
- Page 6, Step 4 screenshot: column headers partially clipped on right edge — ACTOR_PROCESS_MAC may be truncated; last column header [low-confidence].
- All 5 numbered quiz answers confirmed via green "Correct answer:" label. Section knowledge check answers confirmed via green checkmarks.

## Cortex_Cortex_Infrastructure_and_Access_Management.pdf

- p.3: Create Role UI screenshot — permission categories are partially legible at crop resolution (DASHBOARDS & REPORTS items transcribed; deeper-nested categories like CASES & ISSUES, INVESTIGATION & RESPONSE collapsed and only section headings readable). Low confidence on exact sub-item names within collapsed sections.
- p.4: Bottom of SBAC section (Cases and Issues item) cut off at crop boundary — text "Control access to individual cases and issues" inferred from visible top portion; remainder not visible in crop_1 but consistent with p-4 full page view.
- p.5: Two-column layout at top of page (CIE deployment component list on left, SBAC restriction list on right) — both columns read cleanly at full page resolution; no illegible items.
- All quiz answer cues (Q1–Q5) are unambiguous: green "Correct answer:" label with green checkmark icon clearly identifies each answer.

## Cortex_Cortex_Platform_Portfolio_Overview.pdf

- p.1: Tab accordion ("Breaking Down Data and Product Silos" / "Global Analytics and Network Traffic Analysis") — both tabs visible at full page; content transcribed. Second tab header appears twice in the source document layout (shown in green active state on right), consistent with a two-tab accordion flattened here.
- p.3: BIOC bullet list items — "Uncommon and group separations" [low-confidence: text small, may read "Uncommon group separations" without "and"]; remaining bullets clear.
- p.5: XSIAM diagram label "CORTEX XSIAM" and surrounding product icons (EDR, XDR, SOAR, ASM, UEBA, TIM, SIEM) identified from visible text; "Cortex Cloud" label at right side confirmed.
- p.6: XSIAM capabilities list — "Endpoint Protection Platform (EPP)" description text small but legible; "Management, Reporting, and Compliance" item text confirmed.
- p.10: Cloud Posture 25x reduction diagram — three step labels legible; bottom banner text confirmed as "25x reduction in alerts and remediation workflows."
- p.11: AI-Driven feature table — CSPM/CIEM/AI-SPM/VM abbreviations in "Capability Consolidation" row read at full-page resolution; low-confidence on exact spacing but abbreviations consistent with Palo Alto Networks standard terminology.
- p.12: SmartScoring / SmartGrouping descriptions very small — transcribed as brief as visible; full descriptive text may be cut off in render.
- p.15: Q3 "Correct answer:" label partially cut at bottom of page — answer text fully visible in the option row above it; confirmed from option highlight color.
- All 5 quiz answer cues (Q1–Q5) confirmed via green "Correct answer:" label with green checkmark icon.

## Cortex_Creating_and_Managing_Jobs.pdf

- p.4 (top): Two section knowledge checks (gray bar style). Left check: "Time-triggered" answer confirmed by green checkmark highlight on that row. Right check: "Abort" answer confirmed by green checkmark highlight. Both unambiguous.
- p.4 (bottom): Q1 quiz — learner selected "Detailed View" (orange radio, red border). Green "Correct answer: Detailed View" label confirms this is correct (Score: 1). Note: the orange radio = learner pick AND correct answer here.
- p.5: Q2 — learner selected "Feed triggered" (orange radio). Green "Correct answer: Feed triggered" confirms (Score: 1).
- p.6: Q3 — learner selected "Time triggered" (orange radio). Green "Correct answer: Time triggered" confirms (Score: 1).
- p.7: Q4 — learner selected "Basic Information" (orange radio). Green "Correct answer: Basic Information" confirms (Score: 1).
- p.8: Q5 — learner selected "Pause" (orange radio). Green "Correct answer: Pause" confirms (Score: 1). NOTE: The section knowledge check on p.3 lists "Abort" as the option to STOP a running job; Q5 asks which option to HALT a running job and the answer is "Pause." These are distinct questions with different correct answers — both captured accurately.
- p.2: "Indicators Enrichment" use case description — small text confirmed via crop. No illegible items.
- All content legible at render+crop resolution. No illegible or low-confidence items.

## Cortex_Dashboards_and_Reports.pdf

- p.1: XSIAM Command Center dashboard screenshot — metric tile values (10, 7, 1, 2, 0) legible at crop resolution; flow diagram node labels partially legible. Dashboard section navigation items (Dashboard, Reports, Dashboard Manager, Report Templates, Widget Library) confirmed from crop_3 of p1.
- p.1 (lower): "Manage an Existing Dashboard" accordion slide — Dashboard Manager table legible at crop_3; right-click context menu options (Edit, Set as default, Clone, Show more, Delete) confirmed. Sub-option "Clone with All Tenants," "Hide dashboard," "Set max with All Tenants" read at low confidence [low-confidence] due to small submenu text.
- p.2: "Create a Report Template" accordion — Step text confirmed. Report Template form fields legible.
- p.2: Widget Library step 1 — Two creation button labels confirmed as "Create an XQL widget" and "Create a script widget" from p2_crop_3.
- p.2: Widget Library step 2 — XQL helper schema field names partially legible: "xql_query(), xmenuments [low-confidence], mi, cmd_amount, config, allowlist, default, Params." These are schema autocomplete suggestions, not XQL queries; exact names uncertain.
- p.2: Widget Library step 3 — XQL query in screenshot partially visible; transcribed as `dataset = xdr_data | fields endpoint_id, project_type = page` [low-confidence — truncated at right edge of screenshot].
- p.3: Widget Library step 4 — Custom widget names confirmed: "Sample XQL Widget," "Threat Company," "Threat Severity." Dates confirmed from crop.
- p.4 (top): Two section knowledge checks (gray bar style). Green checkmark on "Widget Library" and "XQL queries" — both unambiguous.
- p.8: Q5 — CRITICAL: Learner picked "Reports" (orange radio, red border) but button shows "Wrong answer / Score: 0." Green "Correct answer:" label clearly states **Reports Template**. Correctly flagged in transcription.
- All 5 numbered quiz answer cues confirmed via green "Correct answer:" + green checkmark icon.

## Cortex_Enterprise_Multi-Tenant_License_Management.pdf

- p.1: Multitenancy diagram — Admin icon at top, Main Tenant below, three Child Tenants below that. Labels confirmed from crop. No illegible items.
- p.1: Main Tenant / Child Tenant description text confirmed from p1_crop_3 at high resolution.
- p.2: Benefits of Multitenancy three-column layout — all three headings (Data Segregation, Centralized Management, Flexibility and Scalability) and bullet points confirmed from crop.
- p.2: Licensing Models two-column layout — Customer-Owned and Central descriptions confirmed from p2_crop_2.
- p.3: Customer-Owned diagram — MSSP Parent Tenant, Managed Tenants A/B/C with individual XSIAM License labels, Manual Pairing Process bar — all confirmed from p3_crop_1.
- p.3: Central Licensing diagram — Enterprise Parent Tenant, Central Licensing values (7500 FTE, 750 GB/Day), Dynamic License Allocation node, Subsidiary 1 (500 FTE, 100 GB/Day), Subsidiary 2 (2500 FTE, 250 GB/Day), Subsidiary 3 (4000 FTE, 400 GB/Day) — all confirmed from p3_crop_2 and p3_crop_3.
- p.4: Add Child Tenant Step 2 screenshot — "+ Add Child Tenant" button orange highlight confirmed at full-page resolution. Step descriptions legible.
- p.5: Step 3 mandatory fields — field names (Child Tenant Name, Child Tenant Subdomain, # of Employees, # of Gigabytes) confirmed at full-page resolution. Range values shown as "(0 / 1000)" [low-confidence on exact max values — visible as 1000 but could differ].
- p.5: Step 5 text — "Advanced menu" and "Activate" button label confirmed at full-page resolution.
- p.8: Q3 — CRITICAL: Learner picked wrong answer (Score: 0). Orange radio on "The main tenant configures the child tenant licensing automatically…" Green "Correct answer:" label states "The main tenant administrator can manage configurations such as setting user roles of the child tenants." Correctly captured.
- p.9: Q4 — Learner selected correct answer "It provides a way for the enterprise administrators to dynamically allocate the central license across multiple subsidiaries." (Score: 1, green Correct answer label). Note: the green label reads "…dynamically allocate the central license across multiple subsidiaries" — confirmed.
- All 5 quiz answer cues confirmed via green "Correct answer:" + green checkmark icon.

## Cortex_Enterprise_Multi-Tenant_Operations.pdf

- No illegible/low-confidence items; all quiz cues unambiguous.
- p.2: Tenant Management table screenshot — column headers partially truncated in render (BIOC RULES & EXCEPTIONS visible, others abbreviated). Values clearly read as "Unmanaged" throughout.
- p.4: "xsiam-mssp-demo-child" and "SE-Demo Corporation" tenant names legible from zoomed crop.
- p.6: Carousel dot indicators (○ ○ ○ ● ○ ○) visible on "Creating Security Configurations" slides — 6 slides total in accordion; all 6 sub-configurations captured (BIOC, Starred Alerts, Alert Exclusions, Prevention Profiles, Block/Allow Lists).
- All 5 numbered quiz answers confirmed via green "Correct answer:" label with Score displayed.
- Section KCs on p.8: both confirmed via green highlight/checkmark.

## Cortex_Exclusions_and_Exceptions.pdf

- p.1: Issue Exclusions table columns confirmed (EXCLUSION ID, MODIFICATION TIME, NAME, DESCRIPTION) but row data illegible at render resolution — decorative sample data, no exam-relevant content.
- p.8: Profile exceptions screenshots (Behavioral Threat Protection, Java Deserialization) contain hash values and file paths that are partially illegible at 200 DPI; treated as decorative sample data.
- p.10: Knowledge check widget Q3 references "Cortex External Dynamic List (EDL) service" — correct answer is "To block harmful IP addresses and domain names." EDL is not otherwise covered in this document's body content; flagged as possible cross-topic question.
- No illegible quiz cues; all 12 knowledge-check items (7 section + 5 numbered) confirmed from green highlight / green "Correct answer:" label.
- All XQL/field names: none present in this document.

## Cortex_Forensics.pdf

- p.1–2: Introductory slides are video-style frames (instructor on screen with bullet overlay). Content fully captured from visible bullet text; no illegible items.
- p.2: "Add Custom File Collections" artifact list partially cut off at bottom of render — visible items: 7-Zip Folder History, Amcache (Artifacts panel); Amcache Files, AnyDesk Connection Logs (File Collection panel). Full list not visible; flagged as potentially incomplete.
- Q1 (p.3): Learner selected "Hunt collection" (wrong, Score: 0). Correct confirmed from green "Correct answer:" label: Triage collection.
- Q10 (p.12): Learner selected "The Artifact Details view." (wrong, Score: 0). Correct confirmed from green "Correct answer:" label: The Issues, Timeline, and Key Assets and Artifacts tabs.
- No XQL/field names present in this document.
- All 10 quiz answer cues confirmed unambiguously from green "Correct answer:" labels.

## Cortex_Integrated_Analysis.pdf

- p.2: EED collection screenshot — "advanced res[ponse]" text cut off at right edge; captured as [low-confidence] truncation, not exam-critical.
- p.5: Credential Access table row — "Possible Domain Controller Sync" visible but bottom of table was cut between band_2 and band_3 at 200 DPI; confirmed from p05_band_2 that only Windows Event Collector column has checkmark. No other data sources checked.
- p.5: Analytics settings screenshot — "Add Windows D.CFIgp" text (bottom callout) is partially illegible at render resolution; likely "Add Windows DCF/GP" or similar abbreviation [low-confidence].
- p.10: Numbered quiz Q4 — learner selected "Issues audit logs" (wrong, Score: 0). Correct confirmed from green "Correct answer:" label: Management audit logs.
- All section knowledge check cues (p.6, 4 questions) confirmed from green checkmark highlights.
- All numbered quiz answers (Q1-5) confirmed from green "Correct answer:" labels.
- No XQL queries present in this document.

## Cortex_Introduction_to_XQL.pdf

- p.1: Query Builder screenshot XQL code confirmed at 4x upscale:
  ```
  dataset = xdr_data
  fields event_type
  | filter event_type = ENUM.PROCESS
  | comp count(_time) as PROC_EXECUTIONS
  by event_type
  ```
  All tokens confirmed; no low-confidence items.

- p.3: "A Typical XQL Query" annotated code block confirmed at 4x upscale:
  ```
  dataset = xdr_data
  | fields actor_process_image_name, event_type, event_sub_type as SUBTYPE
  | filter actor_process_image_name = "powershell.exe"
  | dedup event_type, SUBTYPE by asc _time
  | limit 4
  ```
  All field names confirmed.

- p.5: Dataset names confirmed at 3.5x upscale — xdr_data, panw_xdrc_raw, vpn_logs, aws_s3_raw, google_cloud_logging_raw, microsoft_windows_raw. All confirmed unambiguously.

- p.7: Threat Hunting (Proactive) Query Builder screenshot — query code illegible even at maximum crop/upscale (thumbnail screenshot, not a full-size render). Flagged as [illegible]; only the query label "XQL-QUERY-1816" is legible.
- p.7: Case Response (Reactive) Query Builder screenshot — query code illegible at render resolution. Flagged as [illegible].
- p.7: Detection and Correlation Rules screenshot — XQL code partially legible at 4.5x upscale:
  ```
  config case_sensitive = false
  | dataset = xdr_data
  | filter event_type = ENUM.PROCESS and event_sub_type = ENUM.PROCESS_START and action_process_signature_vendor contains "anydesk"
  | alter category = "Threat Detection"
  | fields action_process_signature.*, action_process_image_path, action_process_image_sha256, actor_effective_username, agent_hostname,
    category , causality_actor_causality_id , action_process_image_name , agent_id
  ```
  Field names confirmed. `action_process_signature.*` wildcard notation confirmed.

- p.8: Parsing Rules screenshot XQL code — illegible at render resolution (too small). Rule body not transcribed.
- p.8: Logs output table dataset column shows "apache_httpd_raw" confirmed; remaining data columns truncated/illegible — treated as decorative sample data.
- p.8: All 4 knowledge check answers confirmed from green checkmark highlights.
- No numbered quiz questions in this document (section knowledge check only).

## Cortex_Network_Asset_Discovery_and_Management.pdf

- p01/p02: All Assets table rows partially legible at 200 DPI — platform/identity column values partially read; core content clear.
- p04 (Broker VM Network Mapper screenshot): IP range values in the table (e.g., "240/0.0 / 254.252...") are partially truncated in the screenshot; text prose is authoritative.
- p05 (Requirements screenshot): Agent Settings capability toggle values read as "Use Server Default" [low-confidence — small font in screenshot].
- All 5 numbered quiz answers confirmed via explicit green "Correct answer:" label with Score:1. No ambiguity.
- Both section knowledge checks confirmed via green checkmark highlight on correct answer.
- No illegible items in body text.

## Cortex_Response_Actions.pdf

- p05_3 (File Quarantine Details screenshot): SHA256 hash values transcribed at 200 DPI — values read carefully but individual hex characters may have 1–2 digit errors [low-confidence on exact hash strings; prose content authoritative].
- p06_2 (Follow-Up Actions tabs): "Move to Allow List" and "Cancel Endpoint Isolation" tabs visible but content behind non-active tabs not rendered; noted as flattened with placeholder.
- p07_3 (Block List Hash Override screenshot): Small-font detail in Agent Settings profile screenshot partially illegible — action descriptions noted as [low-confidence].
- p09_1 (Task Manager shortcut menu): "Applicable actions for the cortex.exe process" annotation text confirmed; process names in hierarchy partially truncated.
- All 6 section knowledge checks confirmed via green checkmark highlight.
- All 5 numbered quiz answers confirmed via explicit green "Correct answer:" label with Score:1.
- No illegible items in body text.

## Cortex_Work_Plan_and_Playbook_Tasks.pdf

- p4: Polling task TASK DETAILS panel — bottom field "dt\*" value partially cut off; read as "Joe.Analysis(val.Status Is 'finished').WebID" [low-confidence on exact filter expression syntax]
- p5: Version History dialog entries partially small — read as "Install pack Phishing at version 3.5.29 / Modify Oct 28th 2023 12:56:43 / By: DBot" and "Install pack MITRE ATT&CK at version 1.1.23 / Insert Oct 20th 2023 14:04:30 / By: DBot" [low-confidence on exact version numbers and dates]
- p13: EXTRACTINDICATORS dialog — entryID value "${File(val.Malicious).MD5}", investigationID "${File(val.LastAction=='Unblocked').MD5}" — field values legible at 3x zoom; transcribed as shown [verify XQL-style filter syntax]
- p14: Filters screenshot — left panel showing context path categories (PLAYBOOK INPUTS 4, ISSUE DETAILS 974, etc.) partially cropped; counts may differ
- p15: Built-in filter dropdown partially cut off at bottom — "Is not empty" and "In list" rows visible but may have more entries below the visible area [low-confidence that list is complete]
- All 5 numbered quiz answers confirmed via green "Correct answer:" label — unambiguous
- Section knowledge checks (p16) confirmed via green highlight — unambiguous

## Cortex_Working_with_Cases.pdf

- p3: Cases table screenshot — case description column partially truncated; full CVE names not readable but columns and structure confirmed
- p6: Take Action ellipsis menu items — read from band_2 at small size; transcribed as: Open in new tab, Assign to me, Change Status, Change Severity, Create Exclusion, Manage Score, Merge Cases [low-confidence on exact wording of last few items]
- p12: Scoring rule code block — text read from band_1 at original zoom; transcribed as shown; example values Rule1 HOST="winpoint1" and Rule2 CATEGORY="Malware" [low-confidence on exact quote character type]
- p12: Section KC "How does Cortex handle cases with too many issues?" — correct answer ends with "other case." (singular, no 's') — transcribed verbatim as shown on green highlight
- p13: Q1 numbered quiz — learner picked wrong answer (Score: 0 shown). Correct answer confirmed from green "Correct answer:" label: "High and medium severity issues."
- All other numbered quiz answers (Q2-Q4) confirmed via green "Correct answer:" label — unambiguous
- All section knowledge checks confirmed via green highlight — unambiguous

## Cortex_Working_with_Issues.pdf

- Page 1: Key Issue Attributes diagram sample row — STATUS value appears orange-colored, read as "In Progress" [low-confidence on exact status value; color suggests active status].
- Page 2: JSON block (Issue Id: 5896) — lines 1–19 fully readable at 2x zoom. Line 20 shows `"dispatch_state": "NEVER"` at the visible bottom; scroll is truncated. Additional JSON fields below line 20 not visible — transcribed what was shown.
- Page 3, band 3 top: Context menu partially clipped at top — "Copy Issue URL" item partially readable [low-confidence]; "Copy entire row" and items above confirmed.
- Page 5 screenshots: Tags/Issues table row data confirmed at native render resolution — values like "34B6536717" and tag prefixes (DS, EG, ET) readable.
- Page 7, Q1 (Choose two): No separate "Correct answer:" text box appeared — correct answer inferred from Score: 2 matching the two orange-selected options (User, Host). This is consistent with the course widget behavior for multi-select where score = number of correct selections.
- All other quiz answer cues unambiguous via green "Correct answer:" label or green checkmark.

## Cortex_Working_with_Lists.pdf

- p4–p5: CLI command bar text inside embedded War Room screenshots is too small to read at 200 DPI and even at 400 DPI; command names captured from surrounding prose text only (createList, getList, removeFromList, setList, addToList). The actual CLI syntax/arguments typed into the command bar are [illegible] due to screenshot-within-screenshot rendering at tiny scale. Flag for manual verification if exact CLI argument syntax is needed.
- p2–p3: The "Creating a New List" carousel screenshots (Steps 1–3) show list content and content-type dropdowns but text is too small to read individual option labels in the dropdowns at 200 DPI; captured from prose description.
- All quiz cues (pp. 6–10, section checks p. 5): unambiguous — green checkmark / "Correct answer:" label clearly visible. No ambiguity.

## Cortex_XQL_Building_Blocks.pdf

- p01: Title page and intro — clean, no issues.
- p02: Config stage and example queries — all tokens legible after zoom.
- p03: Synopsis code block — zoomed and confirmed. `config timeframe = 30D` syntax verified.
- p04: Fields and filter stage examples — both columns zoomed and verified. All field names (agent_hostname, action_file_name, etc.) confirmed.
- p05–p06: Alter and comp stage examples — legible at band resolution; no zoom issues.
- p07: Sort/limit synopsis — confirmed from band reads.
- p08: Stage ordering "incorrect vs. correct" code blocks — three separate zooms performed; all tokens confirmed. Left screenshot shows Query Builder ordering UI; right screenshot shows getrole query UI — both decorative (column counts not relied upon).
- p09–p13: Quiz questions Q1–Q5 — all correct answer labels read directly from green "Correct answer:" boxes.
- Q5 (p13): Learner picked "Alter" (Wrong answer, Score: 0); correct answer confirmed as "Fields" from green label.
- No illegible or low-confidence items remaining.

## Cortex_XQL_Call_Function_Usage.pdf

- p01: Title, "What Is the Call Command?" section, call stage syntax — zoomed to 3x; all tokens confirmed including parameter syntax.
- p01: Query Builder screenshot (Step 1) — UI navigation menu items transcribed from zoom; decorative portions noted as screenshot.
- p02: 30-Day Agent query (12 lines) — zoomed 3x; all field names confirmed: _time, agent_hostname, _product, recordType, agent_id, event_id, uppercase(), _product, bin _time span, format_timestamp("%b %d %Y", _time), count(event_id), avg(daily_event_count), round(average_daily_events). All tokens verified.
- p02: Combined call-stage query — zoomed multiple times; all lines confirmed including `join (call "30-Day Agent") as averager agent_id = averager.agent_id`, `subtract(daily_event_count,average_daily_events)`, join to endpoints dataset with fields endpoint_id, install_date, last_seen, endpoint_status.
- p03: "Explaining the Effect" section — clear at band resolution.
- p03–p04: Quiz Q1 — correct answer label read from green box, confirmed: "You cannot call a RULE section that exists in Default Rules from the User Defined Rules Section."
- p04: Quiz Q2 — "Partially correct answer, Score: 2"; correct answers read from green "Correct answers:" box: CONST, INGEST, RULE. Learner picked INGEST, COLLECT, RULE.
- p05: Quiz Q3 — correct answer label confirmed: `| join (call "30 day agent") as averager agent_id = averager.agent_id`
- p05: Quiz Q4 — correct answer confirmed: "A way to insert a saved search query as if it were in-line in the active query."
- p06: Quiz Q5 — correct answer confirmed: "The query must already exist in the Query Library."
- No illegible or low-confidence items.

## Cortex_XQL_Data_Types.pdf

- p01: Title, Multivalued Fields intro, Three Field-Design Options — clear at band resolution.
- p01: XSIAM Datasets section with NoSQL database icon diagram — transcribed. Text legible.
- p02: Schema Table section — schema table screenshot zoomed; confirmed columns: DATASET, FIELD NAME, TYPE, IS ARRAY, DESCRIPTION. Sample rows: xdr_data/\_time/datetime/no, xdr_data/dfe\_labels/string/yes, xdr_data/story\_id/string/no.
- p02: Fields section — IS ARRAY explanation confirmed; type filter panel shows: boolean, datetime, enum, float, int, json, string.
- p03: Equal Sign section — Assignment `alter <variable> = <expression>` and Comparison `filter <expression_1> = <expression_2>` confirmed.
- p03: Variables vs Expressions Example — zoomed 3x; expression confirmed as: `"Hello" + Concat(" World", "field1") + var1->a.b[1]` with labeled components (String value / Function returning a string / A string value of a JSON variable).
- p04: Alter Stage examples — `alter <var1> = <value1>, [<var2> = <value2> [, ...]]` and `alter f1 = 25, f2 = 30` confirmed from zoom. Supported types box confirmed: Int, Float, String, Boolean, JSON, Datetime.
- p04: Notes on Backend Datasets — clear at band resolution.
- p05: Creating New Variables section — literal assignment table confirmed: Int/Float: `alter n1 = 20, n2 = 30.5`; String: `alter s1 = "hello"`; Boolean: `alter b1 = false`; JSON: `alter obj1 = object_create()`; Datetime: `alter dt1 = current_time()`.
- p05: Arrays in XQL example query — zoomed; confirmed: `| alter octets = split("192.168.1.20", ".")` and `| alter nums = arraycreate("1", "2", "3", "4")`. Result table columns: OCTETS (192 + 3 More), NUMS (1 + 3 More); expanded values shown as 168, 1, 20 and 1, 2, 3, 4.
- p06: Filter stage comparison examples — zoomed; confirmed: `filter (add(2,4) = 5) and (5 = add(2,3))`, `filter "2"+"3" = concat("2", "3")`, `filter object_create("q","2") = object_create("q","2")`.
- p06: Enum autocomplete screenshot — zoomed 3x; confirmed enum values: ENUM.AGENT\_STATUS, ENUM.CLOUD\_AUDIT\_LOGS, ENUM.DEVICE, ENUM.EMAIL\_DATA, ENUM.EVENT\_LOG, ENUM.FILE, ENUM.GAP (partial).
- p06: Enum filter code confirmed: `| filter event_type = ENUM.FILE` and `| filter event_type = FILE`.
- p07: Supported Syntax for Enum — all four code examples confirmed from zoom.
- p07: Section KC1 (query column count) — green checkmark on "2" confirmed from zoom.
- p07: Section KC2 (data types needing special functions) — green checkmarks on "Datetime" and "JSON" confirmed from zoom.
- p08: Quiz Q1 — correct answers "boolean" and "json" confirmed from green "Correct answers:" box (Score: 2).
- p09: Quiz Q2 — correct answer "null" confirmed from green "Correct answer:" box.
- p10: Quiz Q3 — correct answer "Autocomplete" confirmed from green "Correct answer:" box.
- p11: Quiz Q4 — correct answer "null" confirmed from green "Correct answer:" box.
- p12: Quiz Q5 — correct answer "2" confirmed from green "Correct answer:" box.
- No illegible or low-confidence items remaining.

## Cortex_XQL_Dataset_Joins.pdf

- p04: XQL flow diagram contains a screenshot (clickable enlarge image in source). All six numbered stages and the Left set / Right set / Merged set flow were legible at 3× zoom. Low-confidence on the exact dataset name "etd" in stage 4 — reads as `dataset = etd` [low-confidence]; rest of that line is clear.
- p05: Cartesian join result table reproduced from visual; 12 rows confirmed. LT/RT column values all legible at 2× zoom.
- p08: Section knowledge-check widget (two inline gray-bar questions). Both correct-answer green highlights confirmed: left query → 12, right query → 2.
- p09–p13: Numbered quiz (5 of 5). All five "Correct answer:" green-label values unambiguous: 0, 12, 3, 10, 30. Orange radio (learner pick) matched correct on Q2, Q3, Q4, Q5; Q1 orange also matched correct (0).
- No other illegible or low-confidence items.

## Cortex_XQL_Functions.pdf

- No illegible items.
- p09, Q1: `array_length(split("192.168.1.20", "2."))` — delimiter is two characters "2." (not single "."). Answer is 2 (split yields ["19","168.1."]). Verified by tight zoom on query box. Green check on "2" confirmed correct.
- p05: String-Processing accordion (len(), string_count(), split(), format_string()) shown collapsed; tab body content not rendered in PDF — functions only listed by name. Covered by body content on later pages (split explained pp. 5–6, len example p.5).
- p08: "Other XQL Function Examples" has three tabs (Time-Related Data Manipulation, Conditional Logic, Pattern Matching). Active tab in PDF render is Conditional Logic + Pattern Matching panels visible; Time-Related tab text readable from p08_b2 context.
- p02: Two XQL-QUERY-42 screenshots in right column — function names legible; query bodies transcribed verbatim from visual.

## Cortex_XQL_JSON_Object_Manipulation.pdf

- p. 4: XQL results table (dataset=392 query) — columns C2, E1, E2 partially obscured by "Same values" callout overlay; values inferred from context as C2=20, E1=40, E2=40 [low-confidence for C2 which appeared cut off].
- p. 5: Extraction Parameters accordion — "First Parameter" and "Second Parameter" tabs are collapsed in the rendered PDF; their content is not visible and could not be transcribed.
- p. 4: Dot-notation and bracket-notation diagram node labels are very small at 200 DPI; read at 5x upscale — confident on all path labels and values.
- All other pages: No illegible items; all quiz cues unambiguous (green checkmark highlights on correct answers clearly visible at 4x zoom).

## Cortex_XQL_Operators.pdf

- No illegible/low-confidence items; all quiz cues unambiguous.
- p.4: The "not in" description sentence is cut off mid-sentence in the source ("It is used to check if an element does not..."); the remainder was not visible in any band. Transcribed up to the visible text.
- p.7 knowledge check: The two inline questions (KCa, KCb) use a gray-bar + green-highlight format (section check), not the numbered quiz format. Green highlighted rows are the correct answers, confirmed visually.
- Q3 (numbered quiz): Learner selected "Dataset" (orange radio, wrong answer, Score: 0). Authoritative correct answer confirmed via green "Correct answer: Filter" label.
- Q4 (numbered quiz): Multi-select (Choose two). Orange checkboxes on "In" and "Or". Authoritative "Correct answers: In, Or" confirmed via green label.
- Q5 (numbered quiz): Learner selected "~=" (orange radio). Authoritative "Correct answer: ~=" confirmed via green label — learner happened to be correct.

## Cortex_XQL_Parsing_Rules.pdf

- **p1 (Query Example code block):** The `src` and `dst` regex lines wrap across two visual lines due to the code box width; the full patterns read `arrayindex(regextract(_raw_log, "src\s+(\d+\.\d+\.\d+\.\d+)V(\d+)"),0)` — the `V` character between the two IP-group captures may be a pipe `|` rendered ambiguously at this resolution [low-confidence]. Verify against source.
- **p2 (Default Rules screenshot):** The fourth INGEST line reads `vendor="PANs"` — the capital S may be a rendering artifact; could be `"PANW"` [low-confidence]. Full line: `[INGEST:vendor="PANs", product="Network Mapper", target_dataset="panw_network_mapper_raw", no_hit=drop]`.
- **p3 (Ingestion Flow Diagram):** Third XDR Collector label reads "XDR Collector 2" but may be "XDR Collector n" (last in a sequence) [low-confidence].
- **p3–p7 (Quiz cues):** All five questions show the authoritative green "Correct answer/Correct answers:" panel; answers read from that panel, not from learner selections. All cues unambiguous.
- **p6 (Q4):** Learner selected CONST (wrong, Score: 0). Correct answer confirmed from green panel: INGEST.

## Cortex_XQL_Query_Result_Visualization.pdf

- **p.5 (Tree View dialog):** `_time` value in TREE VIEW screenshot read as 1634309104515 [low-confidence] — may be 1634309304515 as shown in the JSON VIEW dialog for the same row. The screenshot is small and the digit differs from the JSON view.
- **p.5 (Tree View dialog):** `insert_timestamp` value in TREE VIEW screenshot read as 1634309736445 [low-confidence] — may be 1634309736645 as in JSON VIEW. Same pixel-ambiguity issue.
- **p.10 (Q2 correct answers):** "Correct answers:" box for Question 2 of 5 is cut off at the PDF page boundary — only "Value" is visible before the break. The remaining correct answers (Count, Percentage) are inferred from the three orange-checked learner selections and the "Choose three" instruction. No continuation text was found at the top of page 11. **Verify: is the correct answer list for Q2 definitively Value, Count, Percentage?**
- **p.7 (Accordion tabs):** Both "View Graph" and "View Highlight" accordion tabs appear collapsed (showing "+" icon) in the PDF export — their content is not visible. These tabs describe the two ways to use the view stage. No hidden text found in the PDF render.
- **p.4 (Advanced EVENT column):** EVENT column content in the Advanced display mode screenshot is truncated by the UI column width. Rows visible only to: `"action_upload": 21[6...]` and `"action_upload": 40, "i[...]`. This is UI scroll truncation, not a render issue.
- **p.4 (Copy-paste rows):** Advanced mode copy-paste row truncated at right edge of screenshot: `event_type: STOR[Y...]`. Table mode row also truncated at right edge. UI screenshot clipping, not render issue.

## Cortex_XQL_Syntax_Basics.pdf

- Page 6 (Color Coding screenshot): the `alter` line `alter agent_ip_addresses = arrayindex(agent_ip_addresses_v6, dot_actor_remote_ip)` and the filter list were read from a small editor screenshot — exact field arguments are **[low-confidence]**. The Query Name and Syntax Errors queries were zoomed and are high-confidence (note the deliberate "fieldsx" typo that triggers the red underline).
- Page 7 (Save As screenshot): the embedded `cloud_audit_logs` query (`filter operation_name_orig in ("StopLogging", "DeleteTrail", ...)`) is decorative sample data read at low resolution — **[low-confidence]**.
- Carousels on pp.5–7 rendered all slides (not collapsed), so all slide text was captured.
- All quiz answer cues (2 section checks + 5 numbered) were unambiguous and keyed off the green "Correct answer" labels.

## Cortex_XSIAM.pdf

- **Page 2 (accordion tabs):** Eight tab labels are visible in the left column list but their full body content is hidden (accordion/tab UI); only labels transcribed. Tab headings: "Improve analyst experience and increase productivity by eliminating security silos", "Uncover advanced attacks with behavioral analytics and industry-leading threat intelligence", "Easily onboard new data sources", "Connect tools and orchestrate response with 600+ product integrations", "Speed up investigations with intelligent alert grouping and SmartScore", "Lower risk with attack surface management and internal asset discovery", "Take the guesswork out of response with remediation suggestions", "Extend detection, monitoring, and investigation to the cloud". Body text for each tab was not rendered/visible — flagged for manual review if source PDF allows tab expansion.
- **Page 3 (architecture diagram):** Small icon labels inside the PANW Sources orange box (IoT, NGFW, VM-Series, GP) read at 200 DPI with adequate clarity; no low-confidence issues.
- **Page 4 (two-column mini-quizzes):** Both quiz widgets confirmed with green checkmarks; all options clearly legible. No ambiguity.
- **Page 4 (third quiz — "Which two statements best describe XSIAM?"):** Green checkmarks on "An AI-driven security operations platform" and "An autonomous SIEM and XDR" — unambiguous.
- **Page 5 (Question 5 of 10 numbered quiz):** Green "Correct answer:" label clearly reads "It displays a large number of false positives"; Score: 1 confirmed. Orange radio on same option — learner was correct. No ambiguity.
- No illegible items. No low-confidence text items.

## Cortex_XSIAM_Cortex_Copilot.pdf

- **Page 3 (Settings menu flyout):** "Management Audit Logs" item in Settings sub-flyout read as [low-confidence] — text is small on a dark background at 200 DPI. The remaining flyout items (Cortex XSIAM License, Agent Audit Logs, XDR Collector Audit Logs, Health Alerts, Exceptions Configuration, Data Sources, Configurations) are clearly legible at 5x upscale.
- **Page 6 (right-column knowledge-check widget):** No Submit/Show Feedback button was rendered for the right quiz — the widget appears to use inline color feedback only (green checkmark / red X icons on options) without a separate submitted-state button. Correct answer keyed from the visible green checkmark on "Cortex Copilot prompts may be calculated outside of the Cortex tenant region in both Cortex Copilot supported and unsupported regions." This is unambiguous visually but differs from the standard Submit/Show Feedback widget pattern — flagged for awareness.
- **Page 6 (left-column knowledge-check):** Green checkmark clearly on "Cortex Copilot is directly linked to Cortex XSIAM's Backend." Submit/Show Feedback button visible and green. No ambiguity.
- **Pages 7–11 (numbered quiz Q1–Q5 of 5):** All five questions have the authoritative green "Correct answer:" label clearly visible with Score: 1 on each. No ambiguity on any answer.
- **Page 5 (Daily Recap UI screenshot):** Numbers in metric tiles (159/165, 227, 14, 4x) legible at 3.5x upscale; text in the summary sentence (165 new incidents, 4.35 GB, 11 data sources, 227 playbooks) clearly readable.
- No illegible items overall. One low-confidence text item (Settings flyout "Management Audit Logs").

