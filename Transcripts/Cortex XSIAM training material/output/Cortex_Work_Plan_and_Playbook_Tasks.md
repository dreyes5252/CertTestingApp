# Cortex: Work Plan and Playbook Tasks

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Work Plan Overview

Work plans are a part of issues, and contains the playbooks that are slated to be run for that issue. Playbooks are used to consistently perform and document security monitoring, orchestration, and response activities.

### Viewing Work Plans

The Automation pane, on the Cases page, displays all the issues that have playbooks—either completed, are pending an action, or have failed. It also provides any playbook recommendations the system may have.

*[Screenshot: Cases page Automation pane showing four playbooks — two recommended (orange), two complete (green checkmarks).]*

To view a work plan and associated playbook for an issue, first navigate to the **Cases & Issues > Cases** section, then locate the specific case you wish to view, and ensure the Overview tab is selected. Within the Automation section, click the playbook.

Clicking the playbook will open the Work Plan view, which displays the associated playbook and its contents, allowing you to consistently perform and document the prescribed security monitoring, orchestration, and response activities.

*[Screenshot: Work Plan view showing playbook flow diagram with tasks connected by arrows.]*

---

## Work Plan Options

Click the arrows for more information about the options for monitoring and managing a playbook. Click the images to enlarge them.

### Change the Playbook

If needed, you can change the assigned playbook for an event. You can select a playbook to run on a case from the playbook menu. Changing a playbook will remove all completed tasks and cannot be undone.

*[Screenshot: WildFire Malware issue Work Plan tab showing playbook task list on left and playbook flow diagram on right, with playbook name dropdown highlighted.]*

### Follow a Playbook

Selecting the Follow checkbox allows you to see the playbook running in real time.

*[Screenshot: Work Plan view with "Follow" checkbox highlighted in orange on the toolbar.]*

### Run Again

Click the Run Again button to rerun the currently assigned playbook. Sometimes a temporary condition, such as an intelligence service outage or a query rate limit for an API key, causes one or more automated steps to fail. You can run a playbook as many times as you need to.

*[Screenshot: Work Plan view showing a failed task (red) in the playbook flow with Run Again button highlighted.]*

### Zoom

Use the zoom-in, zoom-to-fit, and zoom-out buttons to resize the display of the playbook. To move the page horizontally and vertically, click and drag any open area in the playbook display pane.

*[Screenshot: Work Plan view toolbar with zoom controls highlighted.]*

### Export Playbook

Click the Picture icon to download an image of the assigned playbook in PNG format.

*[Screenshot: Work Plan view toolbar with Picture/Export icon highlighted.]*

---

## Playbook Management

Playbook management in Cortex involves the strategic oversight and administration of playbooks, encompassing various features and functionalities to optimize case response and automation processes.

### Playbook Management

Click the arrows for more information about key aspects of playbook management, including sub-playbook loops, playbook polling, playbook debugger, and issue field management. Click the images to enlarge them.

#### Sub-Playbook Loops

As an advanced feature, sub-playbook loops involve the creation of loops within a parent playbook using sub-playbooks. The parent playbook can be configured to exit the loop based on conditions like "For Each Input" or "Built-in." This feature is instrumental for iterating over a set of tasks multiple times, enhancing automation capabilities.

#### Playbook Polling

Playbook polling is employed when waiting for a process to conclude on a remote host. The GenericPolling playbook periodically polls the status of a process, ensuring the completion of the playbook once the remote action concludes. This feature is especially useful for tasks that require waiting for external processes.

*[Screenshot: TASK DETAILS panel showing polling task configuration with fields:*
- *Ids\*: Joe.Analysis.WebID*
- *PollingCommandName\*: joe-analysis-info*
- *PollingCommandArgName\*: webid*
- *Interval\*: inputs.interval*
- *Timeout\*: inputs.Timeout*
- *dt\*: Joe.Analysis(val.Status Is 'finished').WebID]*

#### Issue Field Management

Creating issue fields in a playbook is an iterative process. The set issue script in a playbook task plays a crucial role in setting and updating issue fields during investigations, providing a dynamic approach based on evolving needs and available information.

*[Screenshot: TASK DETAILS panel showing Set Issue task — Task Type icons, task name "Set Issue", Attributes field, Scripts: setIssue (BuiltIn), tabs: Inputs / Outputs / Mapping / Advanced / Details / On Error, with "+ Set optional parameters" link.]*

#### Playbook Debugger

The playbook debugger is an indispensable tool for building and troubleshooting playbooks. It allows for real-time insights into task results, conditions, and inputs/outputs. Debugger features include setting breakpoints, overriding inputs and outputs, skipping tasks, and viewing context data and indicators.

*[Screenshot: DEBUGGER PANEL showing Context tab with "Test data: New Mock Issue", search box "Search in JSON context data...", Collapse / Expand controls, and:*
```
1  issue: {}
```
*]*

---

## What Are Playbook Tasks?

Playbooks are composed of tasks which are the fundamental building blocks. Playbook tasks encompass various types, including standard tasks, conditional tasks, data collection, and section headers. Depending on the task type, playbooks feature inputs and outputs crucial for task execution. Sub-playbooks, categorized as parent or child playbooks, provide modularity and reusability in playbook development.

---

## Playbook Task Management Features

You can manage playbook tasks more efficiently by using features such as metadata and version control.

### Metadata

Understanding playbook metadata helps in troubleshooting system performance issues. By accessing playbook metadata, users can analyze playbook task inputs and outputs, storage usage, and task types.

Navigate to the **Case War Room** on the **Cases** page and run the following command:

`!getInvPlaybookMetaData caseid=<case ID> minSize=<size of the data you want to return in KB. Default is 10>`

For example, to view the playbook metadata that is used in case number 2465, enter:

`!getInvPlaybookMetaData caseid="2465" minSize="0".`

### Version Control

Version control allows users to save different versions of a playbook, each annotated with meaningful comments for reference. Reverting to a previous version is possible, ensuring flexibility in playbook development.

*[Screenshot: Version History dialog — "Version History for Get Original Email - Generic v2" with search box. Two entries:*
- *"Install pack Phishing at version 3.5.29" | Modify Oct 28th 2023 12:56:43 | By: DBot | Restore*
- *"Install pack MITRE ATT&CK at version 1.1.23" | Insert Oct 20th 2023 14:04:30 | By: DBot | Restore]*

---

## Task Execution and Management

Playbooks are executed when cases are ingested, automatically running through their predefined workflows.

Users can view and update playbooks associated with cases or issues in the Work Plan section.

Searching for specific playbooks is facilitated through the Playbooks page, employing free text search.

General playbook settings, including name, editing permissions, and Quiet Mode, can be managed through the **Investigation & Response > Automation > Playbooks** interface.

*[Screenshot: Playbooks page showing a playbook flow diagram with multiple task nodes.]*

---

## Task Types and Fields

There are several types of playbook tasks and fields within Cortex.

Task types include standard tasks, conditional tasks, data collection, and section headers, each serving specific purposes in playbook execution. Task fields vary depending on the task type selected, covering manual task settings, advanced settings, details, timers, error handling, and timing. These fields play a crucial role in configuring tasks according to specific requirements.

*[Screenshot: TASK DETAILS panel showing Task Type icons (automation, conditional, communication, section header), Manual task settings tab active, Default assignee field, "Only the assignee can complete the task (blocks following tasks until completed)" checkbox, Task SLA (Weeks / Days / Hours / Minutes), "Set task Reminder at" link.]*

### Authentication for Communication Tasks

Ensuring secure access to forms is paramount in playbook execution. Communication Task Authentication provides a mechanism for authenticating external users through single sign-on (SSO). Organizations can configure this feature by setting up dedicated groups of external users in their identity provider (IdP) such as Okta. Parameters such as Single Sign-On URL, Audience URI (Unified Resource Identifier), and IdP SSO URL are specified to establish a secure authentication process.

*[Screenshot: Authentication Settings panel showing Communication Task Authentication configuration with SSO Integration section, fields for SSO URL, Audience URI, IdP Mapping.]*

---

## Task Icons and Colors

Now that you are familiar with the Work Plan page, let's look at what the icons within a playbook task can tell us about each task. Some of the tasks, within playbooks, display color-coded icons to indicate the status or other attributes of the task.

| Task Type | Icon Description | Meaning |
|---|---|---|
| **Standard Automated Task** | Word script underneath | Any task with the word script underneath it indicates a standard automated task. Automated tasks require no analyst intervention. |
| **Manual Task** | Blue arrow alone | The blue arrow alone indicates a standard manual task. The analyst needs to mark the task as completed manually. |
| **Conditional Task** | White diamond on violet square | The white diamond on a violet square indicates a conditional task. Conditional tasks are used as decision trees in your playbook. |
| **Data Collection** | White speech bubble on aqua square | The white speech bubble on an aqua square indicates a data-collection task. This task collects data through a multi-question survey. |
| **Completed Task** | Green square with white icon | A green square indicates a completed task. The white icon shows the type of action. |
| **Pending Manual Task** | White arrow on orange square | A white arrow on an orange square indicates that further progress in the playbook is pending intervention by an analyst. The associated task requires an analyst to open it and manually mark it as complete. |
| **Failed Task** | Small red triangle | Any task with a small red triangle indicates that the associated task has failed to complete as expected and requires inspection and troubleshooting. When a task fails due to a third-party service outage, API overage, or other temporary access condition, the solution might be to rerun the task or playbook. |
| **Sub-Playbook Task** | Sub-playbook icon in square | The sub-playbook icon in a square indicates that the task is a playbook nested within the parent playbook. |

---

## Playbook Task Actions

You can manage a task in a playbook workflow using the action links in Task details. These links enable you to take appropriate actions based on the task type.

### Add Comment

Click Add comment to add a comment to a task. It is available in all task types.

*[Screenshot: WildFire Malware issue Work Plan tab with task details panel showing "Add comment" link.]*

### Default Assignee

Click the Default assignee option to assign an analyst or a team member from the drop-down list to the task.

*[Screenshot: Playbooks debugger panel showing task details with Manual task settings tab — Default assignee field highlighted with orange border, "Only the assignee can complete the task (blocks following tasks until completed)" checkbox, Task SLA (Weeks / Days / Hours / Minutes), "Set task Reminder at" link.]*

### Set Reminder at

You can set a reminder to complete the task by clicking Set Reminder at and then selecting the desired timeframe.

*[Screenshot: Same task details panel with "Set task Reminder at" link highlighted with orange border, showing Weeks / Days / Hours / Minutes SLA fields.]*

### Mark Completed

The Mark Completed button will change the status of a task to completed and display a green check mark icon. Click Mark Completed for manual tasks as well as tasks with errors.

*[Screenshot: Task details showing COMPLETE TASK section with "Completion note:" text area and Mark Completed button.]*

### Reopen Task

Click Reopen task to start a completed task again to make changes or troubleshoot.

*[Screenshot: WildFire Malware issue task detail panel for "#1 Get Endpoint Details from Issue" with "Add comment" and "Reopen task" links at the bottom.]*

### Open Sub-Playbook

Click Open sub-playbook under task details to display all tasks in a sub-playbook.

*[Screenshot: "Potentially Dangerous Tool - 827285235" case, Work Plan tab, task #122 "Endpoint Investigation Plan" panel showing:*

*Hide description*

*This playbook handles all the endpoint investigation actions available with Cortex XSIAM, including the following tasks:*
- *Pre-defined MITRE Tactics*
- *Host fields (Host ID)*
- *Attacker fields (Attacker IP, External host)*
- *MITRE techniques*
- *File hash (currently, the playbook supports only SHA256)*

*Note: The playbook inputs enable manipulating the execution flow; read the input descriptions for details.*

*Playbook: 'Endpoint Investigation Plan' | [Open sub-playbook] button]*

---

## Adding an Ad-Hoc Task

Within the work plan, you can create tasks for a specific iteration of a playbook. The task type can be an automation or another playbook. For example, within a manual task, you might need to enrich some data when running an investigation playbook.

### Step 1

On the **Cases** page, select a case to add an ad-hoc task.

*[Screenshot: Cases page with a case selected, showing list of issues in the case.]*

### Step 2

In the **Issues & Insights** tab, hover over the issue to which you want to add the task, and then click the **Show Workplan** icon.

*[Screenshot: Cases page Issues & Insights tab with "Show Workplan" icon highlighted on hovered issue row.]*

### Step 3

In the playbook, hover over the task where you want to add a new task and click the **+** sign at the bottom right-hand corner of the task. The ad-hoc task is added after the task you clicked.

*[Screenshot: CVE-2022-27925 vulnerability case, Work Plan tab, playbook flow showing "Playbook Starts" → "Triage" → "Get User Identity Details" task, with + button visible on task node.]*

---

## Building Blocks of Playbooks

Playbook tasks are the building blocks of playbooks. You can run automation and sub-playbooks with tasks, communicate with end users, set conditions, and store relevant data.

### The Four Playbook Task Types

There are four playbook tasks that can be used to build a playbook. Click the arrows for more information about each task. Click the images to enlarge them.

#### Standard

Standard tasks range from manual tasks, like creating a case or escalating an existing case, to automated tasks, such as assigning analysts to cases or enriching indicators. You can automate tasks based on scripts that exist in the system.

*[Screenshot: Playbooks page showing a standard task in the flow builder with TASK DETAILS panel open on the right.]*

#### Conditional

Use conditional tasks as decision trees in your flow chart. For example, is the case severity high? If yes, you can have a task to report to a tier-3 analyst; if not, you can determine that the case is not malicious. Or, you can use conditional tasks to check whether a specific integration is available and enabled in your system.

*[Screenshot: Playbooks page showing a conditional task (diamond/violet icon) with TRUE and FALSE branches, and TASK DETAILS panel showing condition configuration.]*

#### Data Collection

You can use a data-collection task to interact with users through a survey. The survey hosted on the external site does not require authentication (so survey recipients can respond without restriction). You can then use survey answers as input for subsequent playbook tasks.

*[Screenshot: Playbooks page showing "Get Severity Survey" data collection task in flow, with TASK DETAILS panel showing Survey Title "Get Severity", Question 1 "WHAT IS THE SEVERITY OF THIS ISSUE?" with Add Question option.]*

#### Section Header

Use section header tasks to manage the flow of the playbook and to help organize tasks efficiently by grouping several related tasks under one heading. These tasks make it easy to identify the playbook's start, various sections, and end.

*[Screenshot: Playbooks page showing section header task in flow with TASK DETAILS panel.]*

---

## Inputs and Outputs in Cortex

Playbooks and tasks rely on inputs and outputs. Inputs are data pieces originating from issues or external integrations. These inputs undergo manipulation and enrichment, resulting in outputs. An example could be extracting user credentials from Active Directory. Outputs serve as inputs for subsequent tasks, creating an interconnected flow within the playbook.

### Playbook Inputs

Playbooks and tasks in Cortex leverage inputs, which are data elements present within the playbook or task. These inputs may originate from the issue itself, determining crucial information like the role responsible for handling the case. Additionally, inputs can be obtained from integrations. This is exemplified by the extraction of a user's credentials through the Active Directory integration.

*[Screenshot: PLAYBOOK SETTINGS panel — Inputs/Outputs tab, "From context data" selected, Inputs sub-tab active, "General (Inputs group)" section showing:*
- *Name: SrcIP*
- *Value: Get / alert.src / Where: No filters applied / Transformers: No transformers applied*
- *Description: The source IP address from which the incident originated.]*

### Playbook Outputs

Outputs play a pivotal role in the Cortex playbook ecosystem, serving as data generated or enriched during the playbook's execution. For instance, a playbook might create a list of endpoint IP addresses or MAC addresses, which can be further enriched or utilized for obtaining additional information in subsequent tasks.

*[Screenshot: PLAYBOOK SETTINGS panel — Inputs/Outputs tab, Outputs sub-tab active, "General (Outputs group)" section showing:*
- *Context path: Account.Email.Address / Description: The email address object associated with the Account / Type: String*
- *Context path: DBotScore / Description: Indicator, Score, Type, Vendor / Type: Unknown]*

---

## Task Cheatsheet

The Task Cheatsheet is a valuable tool for playbook development, offering quick access to the system and custom fields. By clicking on the playbook brackets, developers can efficiently populate task inputs and outputs, simplifying the configuration process and enhancing overall playbook development.

### Viewing Cheat Sheets

1. Navigate to a task.
2. Click the { } icon.
3. Expand the Cheatsheet menu to display the available system and custom fields.
4. Select a field and it populates the task input with the corresponding context key.

*[Screenshot: Playbooks page with Cheatsheet menu expanded showing available fields.]*

---

## Indicator Extraction

Indicator extraction is a crucial feature in identifying indicators from various text sources such as email content or war room entries. It operates in different modes, including inline mode for synchronous extraction, and out-of-band for asynchronous extraction. Troubleshooting involves checking the extraction mode and configuring rules for effective indicator extraction.

### Indicator Mode Options

#### None

Indicators are not extracted automatically. Use this option when you do not want to further evaluate the indicators.

#### Inline

Indicators are extracted within the context that indicator extraction runs (synchronously). The findings are added to the context data.

#### Out-of-Band

Indicators are extracted in parallel (asynchronously) to other actions. The extracted data will be available within the issue, however, it is not available for immediate use in task inputs or outputs since the information is not available in real-time.

---

## Indicator Extractor Defaults

The following components are extracted with the specified defaults:

| Component | Default | Description |
|---|---|---|
| **Case Creation** | Default: Inline | Sets the indicator extraction mode for case creation. Extraction values are set to inline, and commands like extractIndicators, tip, and enrichIndicators are used. Choosing extraction modes, such as inline, none, or out-of-band, depends on specific playbook needs. You can change the value when editing a case type, which overrides the system configuration for this case type. |
| **Case Field Change** | Default: Out-of-band | Sets the indicator extraction mode for case field change. You can change the value when editing a case type, which overrides the system configuration for this case type. |
| **Tasks** | Default: none | Applies to the result of the task. You can change the value when editing a task, which overrides the system configuration for this task. |
| **Manual** | Default: Out-of-band | Applies to commands triggered from the CLI (Command Line Interface). You can change the value when using the indicator extraction parameter, which overrides the system configuration for this command. |

---

## Indicator Extraction Rules and Options

Enhancing indicator extraction within tasks involves creating rules for efficient playbook execution. Default extraction values are set to inline, and commands like **extractIndicators**, **tip**, and **enrichIndicators** are used. Choosing extraction modes, such as inline, none, or out-of-band, depends on specific playbook needs.

*[Screenshot: EXTRACTINDICATORS dialog with fields:*
- *entryID: ${File(val.Malicious).MD5}*
- *investigationID: ${File(val.LastAction=='Unblocked').MD5}*
- *text: ${IP}*
- *filePath: (empty)]*

### Creating Indicator Extract Rules for a Playbook Task

A practical use case involves extracting indicators from phishing emails effectively. It is essential to extract the original email used in a phishing attack to ensure accurate extraction. Configuration steps include setting the indicator extraction mode to inline and adjusting rules within specific tasks for optimal performance.

*[Screenshot: TASK DETAILS panel, Task Type: Standard Automated (#96), task name "Add original email details to context", Scripts: ParseEmailFilesV2, Outputs tab active showing Email section with fields: To, CC, BCC, From, Subject, HTML, Text, Depth, Headers.]*

---

## Extending Context

Extending context in Cortex enhances the platform's capabilities, enabling users to enrich and customize information within playbook tasks or through the command line.

### Advanced Tab

Within a playbook task, the Extend Issue context field in the Advanced tab is the key element. In this context, inputting the desired field name and its corresponding value is crucial. For instance, using the **!ad-get-user** command, parameters like **name="John" attributes=displayname** can be employed to place the user's name in the displayName key.

Multiple fields can be added, providing flexibility in playbook design. Optimize performance by selecting the **Ignore outputs** checkbox to focus on requested values.

*[Screenshot: TASK DETAILS panel, Advanced tab showing:*
- *Using: (instance field)*
- *Extend Issue context: name="John" attributes=displayname*
- *Ignore outputs checkbox*
- *Execution timeout (seconds)]*

---

## Filters and Transformers in Cortex

In Cortex, data manipulation is crucial for effective case response. Filters and transformers play a pivotal role in this process by allowing users to extract, manipulate, and present data in JSON format. Whether applied in playbook tasks or instance mapping, these tools empower users to shape the information according to their specific needs.

### Filters

Filters serve the purpose of extracting relevant data for further use within the platform.

- When dealing with issues containing multiple files of varying types, filters can be applied to select specific files based on attributes like file extension or type.
- Cortex supports the creation of multiple filters, offering flexibility in data extraction.
- It is important to note that filters can be nested, and users have the option to customize the context root.

Source categories available when selecting a source for a filter:
- PLAYBOOK INPUTS (4)
- ISSUE DETAILS (974)
- FILE DETAILS (11)
- MODULES DETAILS (8)
- CHEATSHEET (35)
- LISTS (2)

### Transformers

Transformers play a crucial role in data manipulation by focusing on converting or rendering values.

- A practical illustration involves transforming a date from non-Unix to Unix format or utilizing the count transformer to ascertain the number of elements.
- The order of transformers is significant, allowing users to easily rearrange them to achieve their desired outcomes. This flexibility is instrumental in presenting data in a format that aligns precisely with specific requirements.
- Transformers are further categorized into Date, General, and Custom types:
  - Date transformers specifically handle the conversion of date formats.
  - General transformers provide functionalities such as sorting, splicing, and counting.
  - Users also have the capability to create custom transformers, adding an additional layer of customization to the data transformation process.

*[Screenshot: "FILTERS & TRANSFORMERS FOR forced_encoding" dialog showing three-step workflow:*
*1. Get: forced_encoding*
*2. Filter: (Can connect the data, eg. File.Exe is Path. Filters all of the following as true for:)*
*3. Apply transformers on the field (Optional)*

*Right side shows SELECT SOURCE FOR forced_encoding dialog with categories:*
- *PLAYBOOK INPUTS (4)*
- *ISSUE DETAILS (974)*
- *FILE DETAILS (11)*
- *MODULES DETAILS (8)*
- *CHEATSHEET (35)*
- *LISTS (2)]*

### Application in Playbooks

Both filters and transformers can be seamlessly integrated into playbook tasks. During task creation or modification, users can access the Filters and Transformers options. The process involves specifying the data to be filtered or transformed, setting parameters, and saving the configuration. This capability enables users to tailor their playbooks to handle diverse scenarios effectively.

### Filter Categories and Built-In Filters

#### Filter Categories

Filters in Cortex are categorized based on their functionality. These categories include Boolean, Date, General, String, Number, and Unknown. Each category offers a range of operators tailored to specific data types, providing users with a comprehensive set of tools to extract and manipulate data effectively.

#### Built-In Filters

The platform provides a variety of built-in filters, categorized into General, String, Number, Unknown, and Boolean. These filters offer a wide range of functionalities, such as testing for containment, checking lengths, and evaluating string relationships. This extensive set of built-in filters enhances the adaptability of Cortex to diverse data scenarios.

**General filters:** AnyMatch, Contains, Doesn't Contain, Has length of, In, Is defined, Is empty, Is not empty

**String filters:** Doesn't end with, Doesn't equal, Doesn't include, Doesn't start with, Ends with, Equals, Has length, In list

**Number filters:** Doesn't equal, Equals, Greater or equal, Greater than, InRange, Less or equal, Less than

*[Screenshot: Filter dropdown showing EWS.Items.Extensions Equals exe example, with General / String / Number columns of filters listed, and "Ignore case" checkbox.]*

---

## Knowledge Checks

### Section Knowledge Checks (Green-Check Widget)

**Q. Which type of task can you use to create a decision tree in a playbook?**
- Data Collection
- Section Header
- Standard
- Conditional ✅
- **Correct: Conditional**

**Q. Which task type is used to interact with users through a survey?**
- Conditional
- Section Header
- Data Collection ✅
- Standard
- **Correct: Data Collection**

---

### Numbered Quiz (5 Questions)

**Q1. A playbook can be exported from a Work Plan in which file format?**
- PNG ✅
- JPG
- PDF
- GIF
- **Correct: PNG**

**Q2. What does the orange user icon on a playbook task mean?**
- Active
- Pending ✅
- Completed
- Error
- **Correct: Pending**

**Q3. What is the main purpose of using conditional tasks in a playbook workflow?**
- To create new integrations
- To generate reports automatically
- To serve as decision trees ✅
- To send system notifications
- **Correct: To serve as decision trees**

**Q4. What is the benefit of using field mapping in Cortex playbooks?**
- To encrypt sensitive data
- To generate new tasks automatically
- To populate issue fields with output values ✅
- To create sub-playbook loops
- **Correct: To populate issue fields with output values**

**Q5. Which option in the Work Plan of a case allows you to re-run the playbook?**
- Navigator Pane
- Run Again ✅
- Review
- Follow playbook
- **Correct: Run Again**
