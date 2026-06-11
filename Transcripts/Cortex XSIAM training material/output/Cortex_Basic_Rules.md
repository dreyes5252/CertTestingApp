# Cortex: Basic Rules

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Rules Based on Custom Threat Indicators

You can create your own Cortex rules by specifying the characteristic of threat indicators as rule criteria. Note that one way to identify threat indicators is to search for leads in Cortex datasets. Alternatively, threat indicators can be obtained from reliable threat intelligence streams.

Cortex checks incoming log streams against these rules. When a match is found, Cortex generates a detection issue. The issue inherits attributes such as name, category, and severity generated from the matching rule definition. In addition to live streams, Cortex can compare rules against historical datasets, for example, during rule testing to adjust rule parameters.

A detection issue is when an attack is detected and rule is matched. Examples include issues triggered by IOCs, BIOCs, and Correlation Rules. The XDR agent can block attacks against endpoints; however, Cortex server-side rules can detect attacks on either agents or servers.

*[screenshot: Issues table showing two detection issues raised from IOC rules — "These rules define the criteria for detecting specific threats. When a threat matching these criteria is detected, an issue is generated. Most of the issue fields, except for the Case ID, are inherited from the underlying rule's definition."]*

---

## Cortex Rule Types

There are different types of Cortex rules that you can create depending on your needs.

Click the tabs for more information about each rule type.

### IOCs Tab

IOC rules in Cortex define the static properties of threats, such as filenames, paths, file hashes, IP addresses, and domain names.

The purpose of IOC rules is to detect known, simple malware.

### BIOCs Tab

BIOC rules define the behavioral characteristics of threats, such as the tactics, techniques, and procedures used during the attack cycle. For example, during the attack period, such advanced attacks can write files, create processes, open network ports, and change registry key values, all of which remain traces that make up behavioral features.

BIOC rules are intended to detect advanced persistent threats such as fileless attacks.

### Correlation Rules Tab

Correlation Rules can be used to identify complex behavioral threat patterns across your network, which may include multiple BIOC characteristics. It is defined by creating Cortex Query Language (XQL) queries against multiple events and datasets that are scheduled to run at certain times.

---

## Datasets and Rule Matching

Rule matching is based on two components: rule condition and incoming log streams stored in datasets.

The following describes how different datasets are being used by the XDR rule engine:

- The Cortex rule engine constantly checks if the incoming log streams match rule conditions. Incoming logs are eventually stored in Cortex datasets.
- Some datasets are created to store only the logs created by the Cortex components, such as the XDR agents. Others store third-party logs.
- BIOC rules are checked against the datasets `xdr_data` and `cloud_audit_log`, whereas Correlation Rules are checked against all datasets, including third-party log sources.
- The dataset `xdr_data` contains endpoint logs and alerts that would be stitched with next-generation firewall (NGFW) traffic logs, if integration is provided.

---

## Working with IOCs

Cortex IOC rules are intended to detect known, simple malware. On the management console, you can create and manage IOC rules from the **Threat Management > Detection Rules > IOC** page.

On the IOC page, you can add a single IOC rule or upload IOCs in bulk by clicking the **+ Add IOC** button. To manage a rule, use its context (right-click) menu to take actions, such as Edit, Disable, and Delete.

Alternatively, the quickest way to create multiple IOC rules is to import IOCs from other reliable threat intelligence sources into your Cortex instance.

*[screenshot: IOC Rules table showing Found 2 out of 2 results, with + Add IOC button and columns: Rule ID, Modification Time, Indicator, Type, Severity, # of Issues, Source, Expiration Date, Comment, Status. Two rules shown with Medium severity, Path type, both Enabled.]*

---

## IOC Actions and Attributes

The key attributes of IOC rules are as follows:

| Attributes | Descriptions |
|---|---|
| Indicator | Indicator is the value of the indicator, such as name of a file, an IP address, or a hash value. |
| Type | Type is the type of the threat indicator, such as Full Path, File Name, Domain, and Hash. |
| Expiration Date | Expiration Date is the date and time when the IOC will automatically be removed from the Cortex XDR instance. |
| Reputation | Reputation is the level of the IOC rule's reliability ranging from **Completely Reliable** to **Reliability Cannot Be Judged**. |

*[Diagram: Green labels for INDICATOR, TYPE, EXPIRATION DATE, REPUTATION on right side pointing to respective table columns.]*

> Note that a Cortex IOC rule does not have a name attribute. The indicator value in the Indicator field ensures the uniqueness of the IOC table. In other words, you cannot add two IOC rules with the same indicator value, such as the same IP address.

---

## Working with BIOCs

BIOC rules are intended to detect advanced threats based on behavioral characteristics.

You can create and manage BIOC rules from **Threat Management > Detection Rules > BIOC** in the management console. Besides adding your custom BIOC rules, there are two other methods to obtain BIOC rules. Click the tabs for more information about each method.

### Import Rules Tab

You can import BIOC rules from a file that was created by exporting the BIOC rules from another Cortex instance. This export-import option enables sharing of BIOC rules between two Cortex deployments.

From the BIOC page, you can import BIOC rules by clicking **Import Rules**.

*[screenshot: BIOC Rules page showing Found 272 out of 272 results, Content up to date checkmark, Analytics BIOC Rules link, Import Rules button, + Add BIOC button. Table columns: Modification Time, Name, Type, Behavior, Exceptions, Severity. Example rows:*
- *Aug 5th 2025 00:45:55 — Active Setup Registry Autostart — Persistence — Registry | action type = create_registry_key, set_registry_value AND registry date = "." AND registry key name = HKEY\_LO... — 0 — Low*
- *Mar 7th 2025 14:19:14 — Manipulation of MMC Registry configuration — Privilege Escalation — Registry | action type = all AND registry key name = "msc\Rules\Fusion\opencommand", "/cde/run/dl/opencommand" | AND... — 0 — Informational*
- *Aug 5th 2025 00:45:55 — The scripting engine executed code from an Alternate Data Stream (ADS) — Evasion — Process | action type = execution AND target process name = rand32.exe, moniject.exe, forfiles.exe, wscript.exe, cscript.ex... — 0 — Informational*
- *Aug 5th 2025 00:45:55 — Web server process drops an executable to disk — Dropper — File | file name = ".exe, ".scr", ".dll", ".sys, ".com", ".bin", ".msi AND action type = create | AND Process | initiated by = w3sip.exe,... — 0 — Informational]*

### Update Rules Via Content Updates Tab

In addition to user-defined BIOC rules, the Palo Alto Networks Research team creates and distributes BIOC rules to all the Cortex instances through content updates. These predefined rules are known as "global" BIOC rules. Cortex periodically updates the global BIOC rules created by the Palo Alto Networks Research team. You can check the latest update information by hovering the pointer over the **Content up to date** button. To manually update, click the button.

---

## Key BIOC Attributes

The key attributes of BIOC rules are as follows:

| Attribute | Description |
|---|---|
| Global Rule ID | A globally unique identification number for the rule. If a rule is not of type Global BIOC rule, this attribute is empty. |
| Name | Name is a unique name that describes the rule. |
| Type | Type outlines the type of the attack event, which is typically the stage in the attack lifecycle. This could include dropper, evasion, lateral movement, or tampering. |
| Behavior | Behavior indicates the search condition to extract this issue from the data stream. |
| Severity | Severity specifies the severity level of the issues created based on the rule definition. |
| # of Issues | Number of Issues represents the number of matches triggered by this rule. |
| Source | Source can be the user who created the BIOC, the name of a file from which it was created, or Palo Alto Networks if it is a global rule. |
| MITRE ATT&CK Tactic | MITRE ATT&CK Tactic is the type of MITRE ATT&CK tactic that this BIOC rule detected. |

### Actions on BIOC Rules

You can use the context menu to take an action on one or more selected rules. The availability of actions depends on the source. For example, editing, deleting, and exporting are not available if the source is Palo Alto Networks. However, you can clone such a rule by performing the Save as new action and then editing the rule criteria to match your needs.

Context menu actions available: **Disable**, **Save as new**, **Open in rule builder**, **Export**, **Delete**, **Edit**

To transfer the BIOC rules to other Cortex instances, you can use the Export action to select a file from a Cortex instance to create a file with the rules. Then, on the other Cortex instance, you can import this file.

---

## Adding a BIOC Rule

Adding a BIOC rule consists of two consecutive steps. First, define the rule condition and set a rule name. Then, specify other rule parameters such as issue-related fields.

### Step 1: Define Rule Condition and Set a Rule Name

In this step, you define the rule condition using threat indicators and a BIOC rule name. This is similar to creating a query search, but with the ability to generate issues. The Cortex rules engine continuously checks log streams for matching rule conditions.

In the management console, click **+ Add BIOC** and you will be presented with two options for specifying the rule condition: using XQL Search or using form-based search queries. Click the tabs for more information about each option. Click the images to enlarge them.

### Using XQL Search Tab

You can use XQL Search to define BIOC rule conditions. Note the two limitations when using XQL Search:
- You cannot use all XQL syntax in BIOC XQL. For example, your XQL can contain only some stages such as filter and alter.
- Only two datasets, `xdr_data` and `cloud_audit_log`, are available for BIOC XQL; therefore, your XQL dataset stage cannot be set to any user-defined or third-party dataset.

### Form-Based BIOCs Tab

Another way to define BIOC rule conditions is to select an entity (resource) type from the provided list and to enter related search parameters. The rule form is basically a search query form. Available entity types are Process, File, Network, Image Load, and Registry. Event Log is the Windows Event Log while Network Connections is the Traffic logs provided by Palo Alto Networks firewalls.

*[Diagram: Form-Based BIOC showing entity type icons: Process, File, Network, Image Load, Registry, Event Log, Network Connections]*

### File Type BIOC Form

Click the tabs for more information about the parameters that you need to specify on a File type BIOC form.

The File Type BIOC form has 7 steps shown in the screenshot:

1. **Rule Name** — Give the BIOC rule a name
2. **Entity Type** — Select the entity type (e.g., File)
3. **Actions** — Choose: All, Create, Copy, Rename, Delete, Write
4. **File(s) Attributes** — Specify: Name, Path, Previous Name, Previous Path, Hash, SHA256, Action File Device Name, File System Type, Action Is VFS, Device Type, Device Serial Number
5. **Actor Process and Location (Host)** — Process and Host fields
6. **Test** — Test the rule
7. **Save** — Save the rule

---

### Step 2: Specify Other Rules Parameters

In this step, you specify the remaining rule parameters related to issues, such as Severity and Type, which will generate issues if a rule match is found. For example, the Type field of the rule is copied to the Category field of the newly created issue, while the name of the BIOC rule becomes the issue name. Note that only Medium and High severity issues will generate cases. Low severity issues will appear in the Issues table, while Informational severity issues are only visible in Insights.

*[screenshot: Create BIOC Rule dialog showing fields: Name (BIOC-13), Type (Select Type dropdown), Severity (Select Severity dropdown), MITRE Technique (Select up to 3), MITRE Tactic (Select up to 3), EXCEPTIONS (No exceptions), Comment]*

---

## Creating Custom Prevention Rules

You can create Custom Prevention Rules in two steps.

**Step 1: Enable Custom Prevention Rules in the Restrictions Profiles**

To create a Custom Prevention Rule, you first need to enable the Custom Prevention Rules setting within your Restrictions profile.

*[screenshot: Profiles / Restrictions - Windows (Default (Copy)) page. Custom Prevention Rules section showing: Action Mode = Enabled, Use Default (Disabled) checkbox. "Auto-disable rules that trigger more than 100 times in 30 minutes on all deployed agents." Message: "There are no custom prevention rules (yet)"]*

**Step 2: Add to Restrictions Profile from the Shortcut Menu of a Rule**

After you have enabled Custom Prevention Rules, locate the BIOC rule you want to add in the BIOC table and then click **Add to restrictions profile** from its shortcut menu. This action opens a dialog box where you can select the Restrictions profile that you enabled earlier. After you click **Add**, your BIOC rule is associated with the requested Restrictions profile.

*[screenshot: Context menu showing: Disable, Edit, Export, Save as new, Delete, Open in rule builder (with submenu arrow), Add to restrictions profile (highlighted), Copy text to clipboard, Copy entire row. Green arrow pointing to "Add to Restrictions Profile" dialog showing macOS profiles 1/1 compatible rules, Windows profiles 1/1 compatible rules (with "Default (Copy)" selected), Linux profiles 1/1 compatible rules.]*

---

## Managing Prevention Separately from Detections

To provide you with more granularity, Cortex enables you to manage detection separately from prevention when disabling a BIOC rule. Click the images to enlarge them.

**Identify a BIOC Rule:** Begin by identifying a BIOC rule tied to a prevention profile.

*[screenshot: Prevention BIOC Rules section showing Go to BIOC Rules link, with one rule "MSBuild execution" having Threat type and action type = execution AND target process name = msbuild...] — # at Risk: 3]*

**Disable BIOC Components:** Navigate to **Threat Management > Detection Rules > BIOC** and select the previously identified BIOC tied to a prevention profile. Right-click on the BIOC rule and click **Disable**. A pop-up window will appear with two choices.

**Disabling an Agent or a Server:**

- Disabling the "Agent" will partially disable the rule by removing prevention (protection), while detection capabilities remain on the server.
- Disabling the "Server" will also partially disable the rule. This time, the server doesn't perform detections, but the prevention stays in place on the prevention profiles associated with the rule.

Best practice is to enter a note regarding the reason for the disabling. Click **Yes** after making your selection.

*[screenshot: "Are you sure?" dialog — "This will disable 'MSBuild execution (Copy)' rule for:" with radio buttons: Agent (Notice: this will apply on 1 profile), Server. Disable Reason text field. Cancel and Yes buttons.]*

---

## Suppression Rules Creation

Suppression rules allow you to suppress IOC and BIOC rules that generate false positives. The Exceptions feature enables you to prevent specific conditions from generating issues based on IOC or BIOC rules.

### Creating Suppression Rule Steps

To create a suppression rule, navigate to **Settings > Exceptions Configuration > IOC/BIOC Suppression Rules**. In the General step, you provide a rule name. In Rule Conditions, you define rule (exception) criteria in terms of process attributes, including hash, name, (file) path, and the authority it runs under (the User Name). All the attribute-value pairs must match for the exception to apply; so, all the specified values are Boolean "and."

You also specify a rule scope, whether the Suppression rule applies to IOCs, BIOCs, or both. For the BIOC scope, you can also specify individual BIOC rules instead of all BIOCs.

*[screenshot: Create New IOC/BIOC suppression rule dialog showing two panes: Left (Rule Conditions) with fields for Process Name, Initiator, Process Path, Signed by Issuer, User Name, Operator, Let Run from, Process SHA2, Actor Path; Right (Scope) showing checkboxes for IOC, BIOC, Specific BIOC, with specific BIOC rule selection list.]*

---

## Understanding Correlation Rules in Cortex

Correlation rules are a powerful feature in Cortex that enable advanced threat detection by analyzing multi-event correlations from multiple data sources. This section covers the basics of correlation rules and their requirements.

Here are the basics of correlation rules and their requirements:

**Rule Purpose:** Correlation rules in Cortex are designed to analyze correlations of multi-events from multiple sources using the Cortex Query Language based engine for creating scheduled rules.

**Licensing Requirements:** Your access to correlation rules features is determined by your Cortex licenses. Users should be aware that future changes to correlation rules offerings may impact licensing agreements.

**Comprehensive Analysis:** Correlation rules can analyze data from multiple sources, allowing for more comprehensive threat detection within a defined time frame and set schedule.

**XQL Foundation:** XQL is the foundation for creating correlation rules, enabling powerful and flexible querying across different data sources.

---

## Correlation Rule Key Capabilities

Here are some key capabilities of correlation rules:

**Flexible Syntax:** XQL enables complex correlation logic.

**Actionable Alerts:** Alerts can trigger notifications, workflows, and more based on correlation results.

**Additional Analysis:** Correlation results can be saved as a dataset for further investigation.

**Drill Down Query:** Rapidly investigate the underlying events after an alert occurs.

**Alert Suppression:** Prevents duplicate alerts by de-duplicating based on fields and time windows.

**MITRE Mapping:** Correlations can be mapped to the MITRE matrix.

**Export and Import:** You can export and import rules and move them between tenants.

---

## Creating and Managing Correlation Rules

Administrators have various options for setting up and maintaining correlation rules in Cortex. Click the arrows for more information about the creation process. Click the images to enlarge them.

**Rule Initiation:** To create a new rule, open the **Add Correlation** editor from either **Threat Management > Detection Rules > Correlations** or an XQL Search. Then, configure the General settings, including the name and description.

**Issue Configuration:** If you want the rule to generate issues, configure the issues settings accordingly. Map issue fields for case enrichment to provide more context to any generated issues.

*[screenshot: New Correlation Rule form showing tabs: General, XQL Search, Add Actions, Schedule, Permissions, Issue Configuration, Additional Settings, Summary. Issue Configuration showing fields: Issue Name, Issue Domain (Domain / Select), Severity (Select), Category (Select), Issue Description, # Drill Down Queries, Add Event Query Time Frame, Generated Issue.]*

---

## Import and Export Correlation Rules

Correlation rules can be imported and exported in JSON format, facilitating easy sharing and backup of rules. Bulk export and import of multiple rules are also supported.

---

## Key Components of Correlation Rules

When setting up a correlation rule, several crucial elements need to be defined. This section delves into the essential components that make up an effective correlation rule. Click the images to enlarge them.

**Time Schedule:** Time Schedule rules can be set to run on different schedules, such as every X minutes, daily, weekly, or custom, depending on the use case and required detection speed.

*[screenshot: New Correlation Rule — Time Schedule dropdown showing options: Every 2-5 Minutes, Every 10 minutes, Every 30 minutes, Hourly, Daily, Weekly, Custom]*

**Issue Suppression Settings:** To prevent issue fatigue, administrators can configure issue suppression for a specified duration and by specific fields after an issue is generated.

*[screenshot: New Correlation Rule — Issue Suppression section showing: Suppress multiple issues that match this Correlation Rule; Duration, Operator; Fields dropdown list showing All Issues, Action File Path, Action Process Image Path, Actor Process Identity Name, Actor Process Identity, etc.]*

**Resulting Actions:** Correlation rules can be configured using one of the following resulting actions:
- Generate issues
- Save data to a dataset (useful for testing and fine-tuning new rules)
- Add or remove data from lookup datasets

*[screenshot: New Correlation Rule — Action section showing radio buttons for Generate Issue, Save to dataset, Update lookup dataset — with corresponding issue fields below]*

**Issues Fields Mapping:** When generating issues, fields can be mapped to enrich the resulting case with relevant information.

*[screenshot: New Correlation Rule — ISSUES FIELDS MAPPING section with fields: Domains, Actor Names, Initiator By, Indicator CMD, Indicator Think, Indicator SHA256, Local IP, Remote IP, Remote Port, User name, and "+Add field" link. Toggle: "Use preconfigured fields"]*

---

## Performance and Monitoring

To ensure optimal performance and effectiveness, correlation rules have certain limitations and monitoring capabilities. This section covers these aspects to help maintain efficient rule operation.

**Automatic Disabling of High-Volume Rules:** To prevent issue overload, Cortex automatically disables correlation rules that reach 5,000 or more hits over a 24-hour period.

**Correlations Auditing Dataset:** You can monitor rule executions using the `correlations_auditing` dataset, which provides insights into rule performance and results, including query initiation times, end times, retry attempts, and failure reasons.

**Query Limitations and Error Handling:** The Correlation Rules page helps identify and resolve errors, displaying the number of errors found and allowing filtering to show only rules with errors. Common error messages include: Invalid query, Query timeout, Dependency correlation did not complete, Unknown error, Delayed rule, and Dataset does not exist.

---

## Rule Management and Maintenance

Ongoing management of correlation rules is essential for maintaining an effective threat detection strategy. This section outlines the various actions available for rule maintenance.

### Viewing and Managing Rules Tab

From the Correlation Rules page, administrators can use the right-click pivot menu to manage existing rules, including:
- Viewing related issues
- Opening in XQL
- Executing rules manually
- Previewing rules
- Saving as new (duplicating)
- Enabling/disabling rules
- Editing rules
- Deleting rules

### Filtering and Searching Rules Tab

The Correlation Rules page offers filtering options to narrow down the list of rules and search for specific rules.

### Monitoring Rule Performance Tab

Regular review of rule performance using the `correlations_auditing` dataset can help identify rules that need adjustment or optimization.

### Updating MITRE ATT&CK Associations Tab

As the MITRE ATT&CK framework evolves, administrators should review and update the associations of rules with tactics and techniques.

---

## Utilizing Lookup Datasets in Correlation Rules

Cortex enables lookup datasets through correlation rules and APIs.

### Update Lookup Datasets Using Correlation Rules

Based on their license, many Cortex users can update lookup datasets directly through correlation rules. This feature allows for the dynamic addition and removal of entries in lookup datasets, enabling users to fine-tune how data from external sources correlates with the events detected in their environment. This capability helps maintain up-to-date information that enhances threat detection and response strategies.

### Update Lookup Datasets Using the API

Cortex supports the management of lookup datasets through a set of robust APIs, making it easier to synchronize and correlate data across different platforms. The supported APIs include:

- `add_data`: Adds or updates entries in a lookup dataset
- `remove_data`: Removes entries from a lookup dataset
- `get_data`: Retrieves entries from a lookup dataset
- `add_dataset`: Creates a new lookup dataset
- `delete_dataset`: Deletes an existing lookup dataset
- `get_datasets`: Lists all available lookup datasets

---

## Knowledge Checks

### Section Knowledge Checks (p. 14)

**Q. Which type of Cortex rule causes Detection type alerts to be generated?**
- BTP
- Custom
- BIOC ✅
- Signature-based
- **Correct: BIOC**

**Q. Which attribute is among the attributes of an IOC rule?**
- Severity
- Vendor
- Reputation ✅
- Name
- **Correct: Reputation**

**Q. What functionality does Cortex provide for managing lookup datasets through correlation rules?**
- Previewing future data entries
- Creating permanent data locks
- Adding entries to lookup datasets ✅
- Accessing real-time data streams
- **Correct: Adding entries to lookup datasets**

### Numbered Quiz (Questions 1–5)

**Question 1 of 5. Which of the following is a scope for IOC/BIOC Suppression Rules?**
- All IOC
- Specific IOC
- Specific BIOC ✅
- Specific Process
- **Correct: Specific BIOC**

**Question 2 of 5. What is the function of the correlations_auditing dataset?**
- Monitor the results of correlation rules. ✅
- Audit the configuration of correlation rules.
- Optimize the performance of correlation rules.
- Audit access changes to correlation rules.
- **Correct: Monitor the results of correlation rules.**

**Question 3 of 5. Which type of Cortex rule can use threat indicators from trusted threat intelligence streams?**
- IOC ✅
- BTP
- BIOC
- Correlation
- **Correct: IOC**

**Question 4 of 5. Which attribute uniquely identifies an IOC rule in the IOC Rules table?**
- File
- Name
- Domain
- Indicator ✅
- **Correct: Indicator**

**Question 5 of 5. Which Cortex dataset can BIOC rules be checked against?**
- host_data
- agent_auditing
- host_inventory
- cloud_audit_log ✅
- **Correct: cloud_audit_log**
