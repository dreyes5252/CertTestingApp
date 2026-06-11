# Cortex: Analysis and Collaboration

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cortex War Rooms

War Rooms in Cortex centralize all investigation actions, entries, and collaboration related to playbooks. Think of War Rooms as interactive timelines of your automated case response, capturing every action and decision taken. Analysts can use War Rooms to add comments, collaborate with team members, and even run manual commands via the CLI.

Each case and issue has its own unique War Room. While case War Rooms offer a comprehensive view of the investigation, enabling collaboration and program execution, issue War Rooms provide a more focused perspective, capturing an overview of the case, malicious issues, and related artifacts. The following describes what analysts can do in War Rooms:

| View | Collaborate | Run |
|---|---|---|
| View a timeline of the entries made by the investigation stakeholders. | Collaborate with your team in a controlled and audited environment. | Run security playbooks, scripts, and commands. |

### Case War Room

The Case War Room is used to manage and coordinate the response to confirmed security cases. Some issues create cases, which themselves can create other related issues. Cases also have their own unique War Rooms. The Case War Room provides a centralized space for collaboration among case members, allowing them to share information, manage tasks, track progress, and communicate effectively during the case response. Click the image to enlarge.

*[screenshot: Case War Room UI]*

### Issue War Room

The Issue War Room is designed for initial triage and investigation of security issues. When an issue is triggered, it is routed to its War Room where analysts can review the security information and determine if the issue needs further additional context, investigate related indicators of compromise (IOCs), and decide whether further action is required. Click the arrow (blue arrow icon) to the right of the issue breadcrumb to see the Issue War Room.

*[screenshot: Issue War Room showing CVE-[redacted] Vulnerability at HTTP Server — tabs visible: Overview, War Room, Work Plan; within War Room sub-tabs: Chats, Notes, Files, Issue History, Command and Task results, Tags]*

---

## Filtering War Room Entries

You can filter information using Chats, Notes, Files, Case History, Command and Task results, and by the tags associated with the case.

*[screenshot: Case War Room tab selected, showing filter checkboxes: Chats, Notes, Files, Case History, Commands and Task results, Tags]*

---

## Actions on War Room Entries

After you filter the information in the War Rooms, you can take several actions.

Click the tabs to view additional information about War Room entries. Click the images to enlarge them.

**Actions available:**
- Mark as Note
- View Artifact in New Tab
- Attach to Task
- Download Artifact
- Add Tags

*[screenshot: Actions dropdown menu in War Room showing: Mark as note, View artifact in new tab, Attach to task, Download artifact, Add Tags]*

---

## Accessing the CLI

The graphical CLI feature is located at the bottom of the War Rooms interface. It allows you to execute commands and scripts. The CLI also supports the platform's ChatOps function and is a critical component for testing and debugging activities related to developing custom automations and playbooks.

*[screenshot: War Room bottom bar showing CLI field with placeholder text "Focus on the CLI field using 'ctrl+;'"]*

---

## CLI Commands

The CLI enables you to perform different tasks in the system. You can think of the CLI as an operating system in which you can run commands that execute different actions. CLI commands can be divided into two primary areas.

### Automation Scripts and Integration Commands

To run automation scripts, commands that are supported by the enabled integration, or system commands, use `!` commands.

An analyst can click on the "!" on the left side of the CLI to easily browse through the available commands and run them in a user friendly manner.

*[screenshot: CLI showing !AddDBotScoreToContext command with description "Add DBotScore to context for Indicators with custom vendor, score, reliability, and type"]*

### User Collaboration Commands

To contact other team members to collaborate on a case, use `@` commands.

*[screenshot: CLI showing @[user] command with description "Send a notification to another user or a group of users with a specified role and add them to the team"]*

---

## Displaying Context Data

Context data, often referred to as "context," is stored for each issue and/or case.

The context for an issue/case is a JSON-formatted repository for output data from automation, integration, and playbook commands. The context also stores all data that is associated with the creation of the issue/case.

If an automation or playbook task requires certain data input, the prior automations or tasks that generate the input data must write that data to the context for retrieval by the subsequent automation or task.

To display context data for an issue or case, click the Context Data button (represented by three stacked squares).

*[screenshot: Context Data panel showing JSON-formatted context including fields:*
```
incident_name: ""
creation_time: 1749872018000
modification_time: 1753137965000
detection_time: 0
status: "resolved_auto_resolve"
severity: "high"
description: "UpnpServer"
assigned_user_mail: ""
assigned_user_pretty_name: ""
```
*]*

---

## Benefits of Context Data

Context data serves as a foundation for two essential functions used by analysts, Cortex engineers, playbook tasks, and automation scripts.

Analysts, Cortex engineers, playbook tasks, and automation scripts may use context data as a basis for two basic functions:

**Capture Data:** You can use context data to capture the important structured data from automations and display the data in the case summary.

**Share Data:** You can use context data to pass data between playbook tasks. This is the only way to share data between automations, and it is where inputs come from and where outputs go.

---

## Knowledge Checks

### Section Knowledge Checks (p. 4)

**Q. Which statement describes the Case War Room?**
- A Case War Room can be shared among multiple active cases.
- A Case War Room can be used to run playbooks.
- There is a unique Case War Room for each available active case. ✅
- A Case War Room can be duplicated.
- **Correct: There is a unique Case War Room for each available active case.**

**Q. Which CLI command symbol do you use to run commands?**
- ;
- ! ✅
- &
- /
- **Correct: !**

**Q. Which data format does Cortex use to store context data?**
- XML
- OData
- Protobuf
- JSON ✅
- **Correct: JSON**

### Numbered Quiz (Questions 1–5)

**Question 1 of 5. Which format is context data stored in?**
- LEEF
- CEF
- JSON ✅
- Python
- **Correct: JSON**

**Question 2 of 5. Which symbol is used to run automation scripts or commands in the CLI?**
- ! ✅
- @
- ;
- \#
- **Correct: !**

**Question 3 of 5. Which of the following is a War Room available in Cortex?**
- Investigation War Room
- Issue War Room ✅
- Event War Room
- Breach War Room
- **Correct: Issue War Room**

**Question 4 of 5. Which of the following is a place you can find the Command Line Interface (CLI)?**
- The top of the Case War Room
- The bottom of the Case War Room ✅
- The top of the Event War Room
- The bottom of the Event War Room
- **Correct: The bottom of the Case War Room**

**Question 5 of 5. Which of the following is a use for context data?**
- Create new playbooks
- Run playbooks
- Capture environment configuration data in a structured format
- Capture issue and command data in structured format ✅
- **Correct: Capture issue and command data in structured format**
