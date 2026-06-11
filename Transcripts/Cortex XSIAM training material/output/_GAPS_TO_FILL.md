# Gaps to Fill — Content Missing from the PDF Exports

> This is a clean shopping list of content that is **genuinely absent from the source
> PDFs** — collapsed accordions, hidden tabs, and unexpanded carousels whose body text
> was never rendered into the file. No amount of re-reading the PDFs recovers it; you'd
> need to open the deck in the **live course** (expand each tab/step) and paste the text
> back into the matching `.md`.
>
> Everything else in `_FLAGGED_REVIEW.md` is low-confidence *screenshot* strings (URLs,
> ARNs, timestamps, sample data) that don't affect studying — ignore those.

---

## Priority 1 — Hidden tab/accordion BODIES (real learning content, titles only captured)

These are concept content likely to be tested; only the tab/step **titles** made it in.

| Deck (.md) | Page | What's missing |
|---|---|---|
| Automation_Foundations | p.8 | "Playbooks and the Issue Lifecycle" — 7 steps collapsed. Have: titles (Step 1 Investigation and Response → Step 7 Continuous Improvement). Need: the body text of each step. |
| Cortex_XSIAM | p.2 | 8-tab value-prop accordion. Have: all 8 tab headings. Need: the paragraph under each (analyst experience, behavioral analytics, onboarding data sources, 600+ integrations, alert grouping/SmartScore, attack-surface/asset discovery, remediation suggestions, cloud extension). |
| Cortex_Alerting_and_Detection | p.11 | BIOC tabs — Processes, Registry, Files, Network Activity. Have: tab names. Need: the per-tab body describing each BIOC type. |
| Cortex_XQL_Query_Result_Visualization | p.7 | "View Graph" and "View Highlight" tabs collapsed. Need: the two descriptions of how to use the `view` stage. |
| Cortex_XQL_JSON_Object_Manipulation | p.5 | "Extraction Parameters" accordion — First Parameter / Second Parameter collapsed. Need: what each parameter of the extraction function does. |
| Cortex_Response_Actions | p.6 | "Follow-Up Actions" tabs — "Move to Allow List" and "Cancel Endpoint Isolation" non-active tab bodies not rendered. Need: each tab's description. |

## Priority 2 — Partially-collapsed / low-confidence tab content (some recovered, verify/complete)

| Deck (.md) | Page | What's missing |
|---|---|---|
| Cortex_Cloud_Features_Graph_Search | p.3 | RBAC tabs (Consistent Permissions, Data Segmentation, Action Control) — bodies inferred from headings only; confirm/replace with real text. |
| Cortex_Cortex_Infrastructure_and_Access_Management | p.3 | Create Role permission tree — deeper categories (CASES & ISSUES, INVESTIGATION & RESPONSE) collapsed; only section headings captured. Need: the sub-permission item names. |
| Cortex_XQL_Functions | p.5 | String-Processing accordion (len, string_count, split, format_string) shown collapsed — **mostly covered** by body text later on pp.5–6; just confirm format_string()/string_count() definitions aren't thin. |

## Priority 3 — Truncated sample data (NOT testable — fill only if you want completeness)

These are sample artifacts cut off by the screenshot/page edge, not concept content.
- **Cortex_Forensics p.2** — "Add Custom File Collections" artifact list cut off; full list of collectible artifacts may be incomplete.
- **Cortex_Introduction_to_XQL p.8** — Parsing Rules screenshot XQL too small to read; rule body not transcribed.
- **Cortex_Analyzing_Issue_Causality p.5 & p.12** — VBScript/PowerShell sample malware lines truncated after `-e ...` (sample, not exam material).
- **Cortex_Working_with_Issues p.2** — Issue JSON sample truncated after line 20 (sample data).

---

### How to fill a gap
1. Open the deck in the live course and expand the listed tab/step/carousel slide.
2. Copy the revealed body text.
3. In the matching `<deck>.md`, find the section (it'll have the tab title and often a note like *"content not expanded in the source export"*) and paste the text under it.
