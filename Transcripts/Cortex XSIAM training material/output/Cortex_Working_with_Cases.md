# Cortex: Working with Cases

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cases Overview

A case represents a single, self-contained attack. Because of its unique nature, it includes various components that originate from the same root cause, such as attackers, tools, processes, and a combination of malware and exploits.

### Incident Components

Components of an incident:

**Case**
A case is a container object that groups related issues, assets, and artifacts—all of which originate from the same root cause. Each case requires a separate and independent investigation.

**Issues**
Issues are notification objects that report suspicious activity or events. These issues help in identifying potential threats and initiating the investigation process.

**Assets**
Assets refer to the names of affected endpoints and users. They help in pinpointing the exact targets of the case.

**Artifacts**
Artifacts are attributes of attacking objects, such as filenames, file signers, processes, domains, and IP addresses. These attributes help in understanding the nature and scope of the attack.

### Case Management

The Cortex management console allows a case or issue to be assigned to a single investigator, ensuring focused and dedicated investigation. However, it is best practice to assign cases to investigators who would then own the attached issues rather than assigning each issue individually.

---

## Case ID in the Issues Table

Each issue is associated with an issue ID; so, related issues are grouped in the same case. Cortex relates issues based on their attributes that are simply security-related attribute types. For example, issues within the same causality instance are related, and they are placed in the same case because causality instance ID (CID column in the Issues table) is a type of cyber attribute.

Notice that the Case ID of these two issues is the same: 2594.

*[Screenshot: Issues table showing "Found 2 out of 3,881 results" with filter "Issue Id = 6453,6439,6425,6322..6453" OR "Issue Id Contains 6439". Two rows shown: Issue ID 6453, Case IDs 2594, CVE-2023-26136 vulnerability in tough-c..., Critical severity; Issue ID 6439, Case IDs 2594, CVE-2023-26136 vulnerability in tough-c..., Critical severity.]*

---

## Binding Issues to Matching Cases

An issue's cyber attributes are security-related or attack-related attributes and include causality ID, IP address, domain, and name of the file and process. Each issue category has its own set of cyber attributes with varying weights.

Cortex binds issues to cases when an issue has just arrived. The linking process relies on complex, proprietary algorithms that use machine learning. The basic issue-binding process is as follows:

| Step | Description |
|---|---|
| **Extract** | Extract cyber attributes of the issue. These are security-related issue attributes. |
| **Search** | Search for a matching case using cyber attributes. Note that similar to issues, each case is also associated with some cyber attributes. |
| **Bind** | If a case is found, bind the issue to the matching case. |
| **Create** | If a case is not found, create a new case. The issue cyber attributes automatically become cyber attributes of the instance. |

### Issue Matching

Cortex matches issues within a case based on their cyber attributes; such issues are therefore related. Those cyber attributes also automatically become the cyber attributes of the case. The procedure can be thought of as the averaging of all the in-case issue cyber attributes and assigning them to the case.

### Dispatch and Weights

The dispatch of a newly arrived issue to a case is based on the degree of match between the cyber attributes of the new issue and those of the case. Cortex uses weights when multiple matching cases are found for the same issue.

---

## Creating New Cases

Cortex creates a new case regardless of whether there is a matching case is found or not.

Cortex creates a new case in either of the following conditions:

### Match Found

Cortex generates a new case when the case has too many issues limited to a predefined threshold.

### No Match Found

Cortex generates a new case to bind with a new issue when no matching case is found.

---

## Case Generated from Issues

Click the tabs for more information about issues that lead to case creation.

### Cases with Many Issues

Cases that have more issues are more likely to match than cases that have fewer issues. Therefore, Cortex auto-limits the number of issues in a case to prevent starvation of the other cases. Starvation occurs when a case collects all the new issues which doesn't allow other cases to get issues. This limit is 1,000 issues per case, which is subject to change in updates. Note that the limit has no effect when you manually move issues between cases.

### Medium, High, or Critical Issues

Only medium, high or critical issues lead to the creation of a new case. In other words, informational issues don't lead to case creation. However, some analytics detectors have an exception: low severity issues created by those analytics detectors also can lead to the case creation.

### Recurring Issues

Recurring issues are created by the same source with the same name; their arrival exceeds a predefined number in a time interval. Recurring issues can easily result in noisy cases that hold multiple issues with almost identical information about the suspicious activity. Cortex eliminates noise in incidents by aggregating recurring issues into one issue.

---

## Viewing Cases

You start investigating Cortex cases from the Cases page in the management console. By default, the page opens in a table view but you also have the option to use a split-pane view.

### Table View

To switch to the split-pane mode, select the icon in the upper-right corner.

*[Screenshot: Cases table view showing columns: CASE DESC., TYPE, STATUS, LAST UPDATED, SEVERITY, SOCS..., CASE DESCRIPTION. Multiple rows showing Posture type cases, all Critical severity, dated Aug 1st 2021, with CVE descriptions.]*

---

## Split-Pane View

This view displays a split-pane mode that consists of two resizable panes: List pane and Details pane. In this view, you can click a case in the Cases List pane (on the left) to work with the selected case in the Details pane (on the right).

*[Screenshot: Cases page in split-pane mode with "List Pane" label on left and "Details Pane" label on right. Left pane shows case list. Right pane shows case ID-2561 overview with 17 Issues, Automation (17 Issues didn't trigger a playbook), Artifacts, Assets (11).]*

### List Pane

The List pane of the split-pane view shows the case list based on filtering options and contains consolidated key incident information. The list is designed to combine and show the most important case properties as part of the list items. The List pane helps an investigator get the most critical attack details as quickly as possible.

You can get a variety of useful information from the list items:

**Starred**
You can click the star icon to star or unstar a case.

**Case Score**
The case score shows the score assigned to the case.

*[Screenshot: List item for ID-2673: 'PPTP Server at 66.253.40.21:1723' along with 1 other issue generated by ASM detected on host 66.253.40.21. Shows H score 40, Security label, Unassigned, New status.]*

**Case ID**
Shows the ID number generated for a case.

**Action Menu**
Allows you to take actions on a case.

**Severity**
Shows the severity assigned to a case.

**Status**
Shows the status of the case.

**Assigned / Unassigned**
You can assign a case to yourself or another investigator.

**Multiselection Checkbox**
Allows you to perform actions in bulk on selected cases.

### Details Pane

The Details pane of the split-pane view shows full details of the selected instance on the List pane.

The Details pane view shows summary information about the case. You can change most of the case attributes shown in the header, including case severity, name, assignee, and status. Note that you can't change the case ID. Click the arrows for more information about the Details pane view.

#### Add Name

Click the pen icon—next to the case ID—to name a case.

*[Screenshot: Case ID-2561 header with "Add case name" placeholder field highlighted in orange, case showing Critical severity, Posture type, 17 Issues, Assigned: Unassigned, Status: New, Open for 2 days. Tabs: Overview, Actions, Key Assets & Artifacts, Issues & Insights, Timeline, Case War Room.]*

#### Change Severity

Change the severity of a case by selecting the desired severity from the drop-down menu—to the left of the star icon.

*[Screenshot: Same case with severity dropdown open showing options: Critical (highlighted), High, Medium, Low.]*

#### Star or Unstar a Case

Click the star icon—next to the incident ID—to star or unstar a case.

#### Take Action

Click the ellipsis menu in the top right to take several actions on a case, such as creating exclusions, managing scores, and merging cases.

*[Screenshot: Case header with ellipsis menu expanded showing options: Open in new tab, Assign to me, Change Status, Change Severity, Create Exclusion, Manage Score, Merge Cases.]*

#### Pin Tab

You can select the pin icon—next to a tab name—to pin the tab. The pinned tab will then be the default tab when the case page is opened.

*[Screenshot: Case page with pin icon highlighted in orange on the "Issues & Insights" tab.]*

#### Identify Issue Source

You can hover over the area next to Sources to identify the source of the issue.

*[Screenshot: Case header with Sources tooltip showing "VULNERABILITY_POLICY".]*

#### Identify Number of Issues

The number of issues shows the total number of issues for the particular cases.

*[Screenshot: Case showing "17 Issues" count highlighted in orange in the header.]*

#### Change Status

Change the status of a case by selecting the desired status from the drop-down menu.

*[Screenshot: Case with Status dropdown showing options: New, In Progress, Resolved.]*

#### Assign a Case

You can assign a case to yourself or another analyst.

*[Screenshot: Case with Assigned dropdown open showing search field and analyst names.]*

---

## Case Detail View Tabs

The Details view organizes case information in specialized tabs. The pinned tab is the default tab when the Cases page is opened. To change the default, hover the cursor over a tab to make the pin icon visible, and then click the icon to pin the tab.

Click the arrows for more information about the detail view tabs. Click the images to enlarge them.

### Key Assets & Artifacts

The Key Assets & Artifacts tab displays lists of key assets, which are hosts and users, as well as the key artifacts. Key artifacts are actors involved in the attack that led to this case, such as filenames and IP addresses.

An artifact can be analyzed and assigned a verdict, such as Malware or Benign. Key assets are affected entities that were likely to be compromised, such as a user account or an endpoint.

#### Key Assets & Artifacts: WildFire Analysis

You can perform two actions in the WildFire Analysis Report dialog: download the report in PDF and report the displayed verdict as incorrect.

The Report Verdict as Incorrect action opens a request form where you can suggest a verdict type for the file from the populated drop-down and enter a reason in the Comment field.

Your email address is automatically included in a read-only field in the form. Click OK to submit your verdict change request.

### Issues & Insights

The Issues & Insights tab displays the issues and insights associated with the case in sub-tabs: Issues and Insights. To work with an issue or an insight in the respective tables, right-click an issue or insight and use actions on the shortcut menu.

Insights are types of issues. The Issues table shows only high and medium severity issues, while the Insights table shows low and informational severity issues.

*[Screenshot: Issues & Insights tab showing "2 Alerts / 5 Insights" sub-tabs, "Issues in this Case Found 2 results, 1 Selected (Clear Selection)". Table columns: ISSUE ID, NAME, SEVERITY, ISSUE DOMAIN. Rows: 6821 / Large Upload (HTTPS) / Low / Security; 5845 / Mythic Age... / High / Security.*

*Right-click context menu on selected row showing:*
- *Change Status →*
- *Change Severity →*
- *Change Assignee*
- *Investigate Causality Chain →*
- *Run Automation →*
- *Manage Issue →*
- *Pivot to views →*
- *Create Case*
- *Copy text to clipboard*
- *Copy entire row*
- *Copy issue URL*
- *Show rows with 'Large Upload (HTTPS)'*
- *Hide rows with 'Large Upload (HTTPS)']*

#### Issues & Insights: Unlinking Issues from Incidents

You can unlink an issue from a case by performing the right-click action on an issue and selecting **Manage Issue > Unlink from case**.

The same action can be performed when working directly on the issue table on the management console page.

### Timeline

The Timeline tab provides a chronological view of case-related issues and actions taken since the case was created. It provides information, such as when a specific issue is added to the incident.

*[Screenshot: Timeline tab showing events:*
- *Aug 4th 03:24 — Large Upload (HTTPS) from xsiam-lh-10004 was added to the case because it matched causality instance...*
- *Additional event shown]*

### Executions

The Executions tab lists all the issue causality chains associated with the case. The chains and causality instance graphs are grouped by the hostname and username categories and are organized in expandable and collapsible sections.

A green icon indicates the host is connected. You can zoom in and out of the graph as well as view more issue details.

*[Screenshot: Executions tab showing causality chain graph with colored nodes connected by lines. Green icons on connected hosts.]*

---

## Prioritizing and Highlighting Cases

You can automatically prioritize and highlight your cases using rules in the Case Configuration page of the management console. All the rules work at the issue level, and not directly at the case level. However, modifying a case's issues also modifies the case itself. For example, when an issue is starred, the case containing the issue is also starred. Alternatively, you can star a case directly on the Cases page.

The four case configuration options are:

| Option | Description |
|---|---|
| **Automation Rules** | You can streamline security operations by automatically responding to security events using automation rules. |
| **Case Scoring** | You can create rules to score cases. |
| **Starred Issues** | You can star cases by starring its issues. |
| **Featured Fields** | Featured Fields contains featured issue fields. |

*[Screenshot: Case Configuration navigation showing Cases & Issues > Cases > Issues > Case Configuration, with sub-options: Automation Rules, Case Scoring, Starred Issues, Featured Fields, Hosts, Users, IP Addresses. Case Scoring is highlighted in orange.]*

---

## Case Scoring

A score is a numeric value assigned to a case to indicate the seriousness or urgency of the case. Case scores help investigators prioritize emergencies. All the case-related management console pages show case scores along with other case attributes.

The graphic shows the case scores in the left and right panes. In this example, the case score is 13. You can view the breakdown of the score or even manually override it.

*[Screenshot: Split-pane list showing case ID-2579 "Mythic Agent Apollo Command and Control Traffic Detection" along with 1 other issue generated by PAN NGFW. Score H 13, Security, Unassigned, New. Detail pane shows Overview, Key Assets & Artifacts tabs, "Case by MITRE ATT&CK: 1 Tactic".]*

---

## Three Case Scoring Methods

There are manual and automatic ways to assign scores to cases. Case scoring methods are prioritized in this order: Manual assignment, Rule-based scoring rules, and Smartscore.

| Method | Description |
|---|---|
| **Manual** | You can manually assign scores directly to cases from the Cases page. |
| **Rule-Based Score** | You can use rule-based case scoring to automatically update case scores when issue are dispatched to cases. Cases Scoring indirectly affects case scores by assigning scores directly to matching issues. |
| **Smartscore** | Smartscore automatically and intelligently calculates case scores based on machine learning and statistical analysis. Similar to scoring rules, Cortex calculates "intelligent" scores for issues when issues are received or generated by Cortex. These smart issue scores make up the score of the case containing them. Smartscore requires Cortex Analytics to be enabled in Settings. |

---

## SmartScore Technology

Cortex's SmartScore is an artificial intelligence (AI)-powered case scoring engine designed to combat alert fatigue in cybersecurity teams. Security teams face an overwhelming volume of issues, making it difficult to distinguish critical threats from false alarms. This alert fatigue leads to reduced productivity and increased risk of overlooking genuine security incidents. Conventional scoring methods, relying on static rules and lacking contextual awareness, fail to evolve with the changing security landscape, resulting in high false positives and inefficient resource allocation.

### SmartScore Solution

SmartScore uses AI and machine learning to generate reliable risk scores for security cases. It considers:

- Context analysis
- Case-level feature evaluation
- Statistical prevalence comparison
- Model-based sub-scores

The system continuously improves by learning from environmental changes and analyst feedback, ensuring ongoing effectiveness as threat landscapes evolve.

### Benefits and Implementation

SmartScore offers several advantages for Security Operations Centers (SOCs):

- Improved focus on critical threats
- Reduced analyst burnout
- Faster incident response times
- Decreased mean-time-to-respond (MTTR)

Users can enable SmartScore through the Cortex console, either alongside existing manual scoring rules or as a replacement. API integration allows incorporation into existing security workflows.

---

## Scoring Rule Hierarchy

New scoring rules are placed in the rule hierarchy to provide finer granularity. Each new rule has a base rule as the parent. When an issue matches to multiple scoring rules, the issue is scored by each matching rule. This principle is also applied to the sub-rules in the hierarchy. If the same issue matches one or more sub-rules, the issue is also scored by each matching sub rule. However, sub-rules are evaluated only if their parent rules are matched.

The topmost rule in the rule hierarchy is predefined as Root.

*[Diagram: Tree structure with Root at top. Root has two children: Rule10 (green) and Rule20 (green). Rule10 has children: Rule11 (white/unmatched) and Rule12 (green/matched). Rule20 has child: Rule21, which has child: Rule21A. Green nodes indicate matched/active rules.]*

In this example, Rule1 is applied only if HOST is winpoint1 and CATEGORY is Malware.

```
• Rule1: base="Root", name="Rule1", score=25, criteria: HOST="winpoint1"
• Rule2: base="Rule1", name="Rule2", score=10, criteria: CATEGORY="Malware"
```

---

## Knowledge Checks

### Section Knowledge Checks (Green-Check Widget)

**Q. What is the role of a case in Cortex?**
- A tracker that logs user activities, monitors behavior, and provides activity reports
- A container object that groups related issues, assets, and artifacts originating from the same root cause ✅
- A tool that monitors network bandwidth usage, analyzes traffic patterns, and detects anomalies
- A log file that stores detailed system performance data and event histories
- **Correct: A container object that groups related issues, assets, and artifacts originating from the same root cause**

**Q. What are issues in the context of Cortex cases?**
- Logs that capture network usage statistics, traffic data, and connection histories
- Files used for deploying software updates, patches, and security fixes
- Records that contain device warranty information, coverage details, and expiration dates
- Notification objects that report suspicious activity or events ✅
- **Correct: Notification objects that report suspicious activity or events**

**Q. In Cortex, what is an artifact?**
- Information related to software licensing details, including license keys and expiration dates
- A record of a user's login timestamp, session duration, and access history
- An attribute of attacking objects, such as filenames, file signers, processes, domains, and IP addresses ✅
- A unique identifier for a device, including its serial number and hardware specifications
- **Correct: An attribute of attacking objects, such as filenames, file signers, processes, domains, and IP addresses**

**Q. How does Cortex handle cases with too many issues?**
- It archives the case to free up resources and ensure long-term data retention
- It merges the case with another similar case to consolidate information and streamline management
- It deletes the excess issues to maintain system performance and storage capacity
- It auto-limits the number of issues in a case to prevent starvation of other case. ✅
- **Correct: It auto-limits the number of issues in a case to prevent starvation of other case.**

**Q. Which incident attribute is read-only?**
- Score
- Severity
- ID ✅
- Name
- **Correct: ID**

**Q. What constitutes insights in Cortex?**
- Informational issues ✅
- Key artifacts
- Execution details
- Attack timelines
- **Correct: Informational issues**

**Q. Which Cortex incident scoring method takes precedence?**
- Asset-based
- Scoring Rules
- Manual ✅
- Smartscore
- **Correct: Manual**

---

### Numbered Quiz (4 Questions)

**Q1. Which type of issues are displayed in the Issues table within the Issues & Insights tab?**
- Informational issues.
- High and medium severity issues. ✅
- Only critical severity issues.
- All issues, regardless of severity.
- **Correct: High and medium severity issues.**

**Q2. What is the correct action to take to close Cortex cases?**
- Close
- Resolve ✅
- Archive
- Stop Investigation
- **Correct: Resolve**

**Q3. Which case scoring method in Cortex takes precedence over all others?**
- Rule-based scoring.
- Smartscore.
- Manual assignment ✅
- Automatic threshold scoring.
- **Correct: Manual assignment**

**Q4. In Cortex, what do assets specifically refer to?**
- The various types of malware and exploits detected.
- The names of affected endpoints and users. ✅
- The tools and processes used by attackers.
- The attributes of attacking objects.
- **Correct: The names of affected endpoints and users.**
