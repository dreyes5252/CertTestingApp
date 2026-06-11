# Cortex: Creating and Managing Jobs

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Introduction to Jobs

Jobs are a crucial feature on the Cortex platform, enabling automation and orchestration of diverse security operations tasks. By configuring a job, you can execute a playbook in response to specific events or time triggers.

### Cortex Job View

The Jobs view provides the ability to create new jobs, view current job status, and perform actions on jobs like run now, abort, and delete.

*[Screenshot: Cortex Jobs page. Left navigation shows: Investigation & Response > Search (Query Builder, Query Center, Scheduled Queries), Automation (Playbooks, Scripts, **Jobs** highlighted in orange, Playground, Automation Rules), Response (Action Center, Live Terminal, EDL). Main panel shows "Jobs" heading with a chart panel at top displaying status counts: RUNNING: 0, WAITING: 0, ERROR: 1, DISABLED: 0, TIME TRIGGERED: 1, EVENT TRIGGERED: 0. Action bar below chart shows: Edit, Run now, Disable, Enable, Pause, Resume, Abort, Delete buttons. Table columns: NAME, JOB STATUS, LAST RUN STAT…, LAST RUN, NEXT…, DESCRIPTION, PLAYBOOK. One job row visible: "Trigger after TO…", Idle, Error (Jul 1st 2025 10:51:48), N/A, "A Successful login from…". Two callout arrows point to: "Status of jobs" (chart panel) and "Job actions options" (action bar).]*

### Job Types

There are two types of jobs.

**Time-Triggered Jobs**
A time-triggered job allows you to schedule the execution of tasks at a pre-determined time or regular intervals. By specifying the desired time and playbook, you can utilize a time-triggered job to automate task execution.

**Feed-Triggered Jobs**
A job can be triggered by changes or updates in a feed, allowing you to automate the execution of a playbook. This type of job can be utilized to execute a playbook, either when changes occur in all feeds or specific feeds of your choice.

---

## Jobs Use Case Examples

The following are use cases for when jobs are used in Cortex:

**Creating Indicators List**
Use time-triggered jobs to create a list of high-risk or benign indicators at the end of each day.

**Vulnerability Management**
Use a feed-triggered job to monitor a vulnerability feed for new vulnerabilities to run a playbook for remediation.

**Indicators Enrichment**
A job can be created to run an indicator enrichment playbook whenever there is any update in the threat intelligence feeds.

**System Health Check**
Create a time-triggered job to regularly check the system health status, generating alerts or notifications when system resources are excessively utilized.

**Generating Summary Reports**
Create a job to produce a summary report of incident statuses and send it regularly to the appropriate team member.

---

## Jobs Page Views

You can keep track of jobs in the Jobs Page by using the Chart Panel, Table view, and Summary view. In this view, you can check the job status, the last and next run, as well as additional details.

Click the images to enlarge them.

### Chart Panel

The Jobs page has a Chart Panel at the top, which displays graphical information related to jobs. The Chart Panel displays the number of jobs running, waiting, error, disabled, time triggered, and event triggered.

Click Hide Chart Panel or Show Chart Panel to toggle the display.

To switch to the Detailed view, select the table icon in the upper-right corner.

### Table View

Table view shows job information in columns by name, job status, details, and other important information.

To customize the column information, use the gear icon at the top right of the Table view, then check or uncheck columns to display or remove them as required.

*[Screenshot: Jobs Table View. Columns visible: NAME, JOB STATUS, LAST RUN STAT…, LAST RUN, NEXT RUN, DESCRIPTION, PLAYBOOK. One job row highlighted in orange: "Trigger after TO…", Idle, Error (Jul 1st 2025 10:51:48), N/A, "A Successful login from…".]*

### Detailed View

The Detailed view has two panels. The left panel lists all jobs, and the right panel displays information about incidents created by the job, playbook, last run, next run, and incident status.

*[Screenshot: Jobs Detailed View. Left panel lists jobs with status icons. Right panel shows details for selected job "Trigger after TOR login" including: Error status, "4 Successful logins from TOR" description, Last Run: Jul 1st 2025 10:51:48, Next Run: N/A, Trigger: Once. Job Runs section shows a table with columns RUN ID, LAST RUN STATUS, CREATED, CLOSER. One row visible with a Run ID link, Error status (red triangle), and Run button.]*

---

## Job Management Options

You can manage jobs in Cortex using multiple options in the Table and Summary views. In the Table view, the options are visible when you select a job from the list to manage.

### Job Action Options

The following actions can be performed on selected jobs:

| Action | Description |
|---|---|
| **Edit** | Click the Edit option to make changes in the selected job's configuration. |
| **Run Now** | Click the Run now option to start running an aborted or completed job. |
| **Disable** | Click the Disable option to stop the job from running next time. It will not impact the job already running. |
| **Enable** | Click the Enable option to continue running the job next time. |
| **Pause** | Click the Pause option to halt a running job. |
| **Resume** | Click the Resume option to continue running any paused job. |
| **Abort** | Click the Abort option to stop any running job. |
| **Delete** | Click the Delete option to remove the job from the table. |

*[Screenshot: Jobs action bar in Table View showing all eight action buttons: Edit, Run now, Disable, Enable, Pause, Resume, Abort, Delete.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray bar style)

**Which type of job can be used to create a list of indicators at the end of each day?**
- Playbook-triggered
- Feed-triggered
- Time-triggered ✅
- Script-triggered
- **Correct: Time-triggered**

**Which Jobs page option is used to stop a running job?**
- Terminate
- Stop
- Halt
- Abort ✅
- **Correct: Abort**

---

### Quiz Questions

**Q1. Which view of the Jobs page shows information about any cases created by the job?**
- Table View
- Chart Panel
- Detailed View ✅
- Summary View
- **Correct: Detailed View**

**Q2. What type of job would you use to monitor a vulnerability feed for new vulnerabilities?**
- Feed triggered ✅
- Time triggered
- Case triggered
- Command triggered
- **Correct: Feed triggered**

**Q3. Which type of job do you create to perform regular checks on the health status of the system?**
- Feed triggered
- Time triggered ✅
- Case triggered
- Command triggered
- **Correct: Time triggered**

**Q4. When you create a new job, in which section of the configuration panel can you specify a playbook?**
- Triggers
- Custom Fields
- Queue Handling
- Basic Information ✅
- **Correct: Basic Information**

**Q5. Which option can you use to halt a running job?**
- Halt
- Abort
- Break
- Pause ✅
- **Correct: Pause**
