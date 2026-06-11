# Cortex: Advanced Response Actions

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened;
> UI screenshots transcribed; knowledge-check items captured with correct answers
> flagged from visual cues. For the multiple-choice quizzes the authoritative answer
> is the one labeled with the green "Correct answer:" text (not the learner's
> orange-selected radio); section knowledge checks use a green highlight on the
> correct option.

---

## Advanced Response Action Requirements

Some Cortex response actions require additional licenses, authorization, and configuration. These actions include remediation suggestions, remote script executions, and EDL.

Requirements for Cortex advanced response actions include:

| Requirement | Detail |
|---|---|
| **Authorization** | Script execution requires roles with specific permissions, such as run high-risk scripts and script collection. |
| **Additional Configuration** | Remediation suggestions require enhanced endpoint data collection. |
| **Operation System Support** | Remediation suggestions action is available only for Windows. |

## Remediation Suggestion Actions

Cortex enables the reversion of changes made by malicious processes. For example, you can revert maliciously changed files and registry keys. Also, note that enhanced endpoint data collection must be enabled.

There are different places within the management console to perform remediation suggestion actions:

- **Right-click menu of a process node** — context menu includes options such as Show Parent, Investigate a timeline, Search File On All Endpoints, Quarantine, **Remediation Suggestions** (highlighted), Open in WarRoom, Open Item View, and Open in Quick Launcher.
- **Actions menu of Causality View.**
- **Three-dot menu of a case** — menu includes Open in new tab, Change Status, Change Severity, Create Exclusion, Manage Score, Merge Cases, and **Remediation Suggestions** (highlighted).

---

## Suggested Remediations

The Suggested Remediation column shows possible remediation actions, including manual remediation for cases where Cortex can't provide a remediate action.

Here are a few Cortex remediation suggestions:

- Delete, Restore, or Rename File
- Delete or Restore Registry Value
- Terminate Causality
- Manual Remediation

The Remediation Status table displays the status of the remediation action.

*[screenshot: "Remediation Suggestions" table — columns ORIGINAL EVENT TIMESTAMP, SUGGESTED REMEDIATION, SUGGESTED REMEDIATION DESCRIPTION, REMEDIATION STATUS. Header note: "Remediation suggestion include reverting file and registry keys to a Windows endpoint along with enhanced data collection enabled (Cortex XDR agent version 7.3 or higher)". A row shows Dec 9th 2022 06:43:32 / Delete File / "fix path: C:\\Users\\Student\\malice1.txt". A right-click dropdown shows: Remediate, Copy text to clipboard, Copy entire row, Show case with Delete File, Hide case with Delete File.]*

## Scripts Library

To streamline and enhance your security operations, you can run scripts from the Scripts Library in Cortex. You can upload and remotely run Python v3.7 scripts from **Investigation & Response > Response > Action Center > Agent Scripts Library**.

### Upload Ready-to-Use Python Scripts
The library displays ready-to-use Python scripts written by Palo Alto Networks, as indicated by the Created By column. Only roles with sufficient permissions will be able to run scripts on endpoints.

*[screenshot: Scripts Library table — entries include file_exists ("Check if file exists on the endpoint"), list_directories, process_get, process_kill_cpu, process_kill_mem, process_kill_name, registry_delete, registry_get, registry_set, status_package, test_xxx. A script's shortcut/context menu shows: Run, Download script, Download definitions file, View, Save as new, Copy text to clipboard, Copy entire row, Show rows with…, Hide rows with….]*

### Add a New Script
Click **+New Script** to upload your script. Open a script's shortcut menu to run, edit, or delete it. You can download the source code and definition of a script in the library using the Download actions on the script's shortcut menu. The script definition is a JSON formatted file.

---

## Input/Output Mapping Illustrated

This section illustrates the input/output mapping of a script using a simple script source code.

Notice how Cortex parses the script source to get the entry point that is the function ping along with its parameter internet protocol (IP), and the function output (the return value). Also, compare the runtime screens with the definition and the source code.

**Source — A sample source code:**

```python
import os
import sys

def ping(ip):
    rep = os.system("ping " + ip)
    if rep == 0:
        return("Connected to " + ip)
    else:
        return("Failed connect to " + ip)
```

**Upload (definition) — You specify these definition parameters to upload the script:**
- Input: "Define how you want the script to run on endpoints, or choose to not run it." Options: *Just run* / *Run by entry point*. Entry point: `ping`; parameter type: String.
- Output: "Add or choose a dictionary output which allows you names and types. Otherwise, the return value is sent." Output Type: Auto Detect.

**Runtime — You specify these runtime parameters to run the script:**
- SCRIPT PARAMETERS: `ip` (String) = `192.168.1.2`
- Script Results: Completed by → "Connected to 192.168.1.2".

## Running Scripts

Below are the steps to run a script in the Scripts Library.

**Step 1: Run Script** — Right-click a script in the Scripts Library and select **Run** to run the script.

**Step 2: Enter Input** — In the Choose step, enter the input for your script as defined during the upload and click **Next**. In this specific example, IP (STRING) is the parameter of the function, the entry point of the script, and 192.168.1.2 is the value of this IP parameter.

**Step 3: Select Endpoints** — In the Target step, select one or more endpoints to run the script on platform types that are compatible with the script's specified Supported OS field and click **Next**.

**Step 4: Review Selections** — Summarize your selections and click **Run**.

**Step 5: Track Execution** — Track the Endpoint Script Execution action from All Actions of Action Center. Check out the All Actions table columns for ACTION TYPE: Endpoint Script Execution and STATUS: Completed Successfully. Select the **Additional data** action from the right-click menu of a script execution action to get details such as Return Value, which is the output of your script.

**Step 6: View Details** — The Additional data dialog shows the general script execution parameters at the top and the execution results table at the bottom listing each of the targeted endpoints. The general script execution parameters include:

- Script name
- Entry Point as the name of the function called
- Action Parameters as function parameters

---

## External Dynamic Lists

EDLs are instrumental in blocking potentially harmful IP addresses and domain names. An EDL is a type of block list where each entry on a new line represents an IP address or hostname to be blocked.

### EDL Services Provided by Cortex
Cortex instances can serve two types of block lists over Hypertext Transfer Protocol Secure (HTTPS): IP addresses and domain names. Domain names may also include hostnames in fully qualified domain name (FQDN) form. In this context, Cortex's role is to provide a block list service, and each instance offers its own EDL service to consumers, typically Next-Generation Firewalls (NGFWs) PAN-OS.

## EDL Service Tasks

The Cortex EDL service has a global configuration located in **Settings > Configurations > Integrations > External Dynamic List Integration**. This one-time task involves globally enabling the Cortex's EDL service.

### Ongoing Administrator Tasks
After setting the global EDL parameter, administrators have two ongoing tasks:

- **Adding IP Addresses and Domains** — Malicious IP addresses and domains can be added to the EDL lists from multiple pages in the management console: *Investigation & Response > Response > Action Center > Currently Applied Actions > External Dynamic List* or *Investigation & Response > Response > EDL > Add to EDL*, and from Cortex CoPilot, or Quick Launcher, and then selecting IP View.
- **Managing the EDL Lists** — Management of the EDL lists can be done through *Action Center > Currently Applied Actions > External Dynamic List*. Tasks include viewing the lists, searching for specific list items, and deleting items from the lists.

### EDL Global Configuration
The global settings for Cortex's EDL service include:

- **Authentication Settings** — Settings to connect to the EDL service provided by this Cortex instance.
- **Enable/Disable Button** — A button to enable or disable the EDL service.
- **EDL URLs** — URLs for the two EDL lists: IP addresses EDL and domain names EDL. For the IP address list, the URL is in the form: `https://edl<subdomain>.xdr<region>.paloaltonetworks.com/block_list?type=ip`

*[screenshot: "External Dynamic List Integration" settings — External Dynamic List Credential (Username, Password); "Enable External Dynamic List" toggle (PAN-OS); and "External Dynamic List - Generic Integration".]*

---

## Adding IP Addresses and Hosts to EDLs

You can add malicious IP addresses and domains to the EDL lists.

There are four ways to add an IP address to the EDL:

1. **Action Center > External Dynamic List**
2. **Action Center > New Action > Add to EDL**
3. **Cortex Copilot after IP address search**
4. **Actions Menu within IP View**

---

## EDL Management in Action Center

As you add malicious IP addresses and domains to the EDL lists from multiple pages, Cortex keeps your additions in two lists accessible from **Investigation & Response > Response > Action Center > Currently Applied Actions > External Dynamic List**.

From this page, you can view, search, and delete EDL entries. To delete a list item, right-click an IP address or domain and then click **Delete**. You can select multiple items and delete them in bulk.

*[screenshot: "External Dynamic List" page. IP Addresses (Found 2 results, 1 Selected), URL: `https://edl-cortex-xsiam-edu-270-00245.xdr.us.paloaltonetworks.com/block_list?type=ip` — entries 192.168.5.25 and 5.135.76.18 (selected, with a Delete context menu). Domain Names (Found 1 results), URL: `https://edl-cortex-xsiam-edu-270-00245.xdr.us.paloaltonetworks.com/block_list?type=domain` — entry dl.steampowered.ru. Note banner: "Make sure EDL list sizes don't exceed your firewall model limit."]*

---

## Knowledge Checks

### Section Knowledge Checks (correct option shown by green highlight)

**Q1. What is a prerequisite for performing remediation suggestion actions in Cortex?**
- Device performance optimization
- User activity monitoring
- Enhanced endpoint data collection ✅
- Network traffic analysis
- **Correct: Enhanced endpoint data collection**

**Q2. What is the purpose of the EDL service?**
- To block harmful IP addresses and domain names ✅
- To provide endpoint backup solutions
- To manage software update schedules
- To monitor device temperature
- **Correct: To block harmful IP addresses and domain names**

**Q3. What type of executable instructions can be uploaded and run on endpoints using Cortex?**
- SQL queries
- JavaScript files
- Python scripts ✅
- HTML code
- **Correct: Python scripts**

**Q4. What is a key requirement for running remote scripts in Cortex?**
- Software license verification
- Network bandwidth monitoring
- Device firmware updates
- Specific permissions for script execution ✅
- **Correct: Specific permissions for script execution**

**Q5. Which log or data type is required by the Remediations Suggestions action?**
- Host inventory data
- Enhanced endpoint data ✅
- XDR collector logs
- Windows event logs
- **Correct: Enhanced endpoint data**

**Q6. What is an entry point in the context of Cortex Remote Script Executions?**
- Action rule name
- Function name ✅
- Targeted endpoint name
- Script file name
- **Correct: Function name**

### Final Quiz (5 questions)

**Q1 of 5. Which statement about the Scripts Execution action is true?**
- You can run Python scripts only. ✅
- Python script support is limited to versions 2.2 to 3.5.
- Scripts run on endpoints under the running user's authority.
- Scripts are first checked by WildFire before running on endpoints.
- **Correct: You can run Python scripts only.**

**Q2 of 5. What settings can be edited on the "Integrations > External Dynamic List Integration" page in the management console?**
- Enumeration
- Authorization
- Authentication ✅
- Generic integration
- **Correct: Authentication**

**Q3 of 5. Which entity best represents a typical consumer of Cortex EDL service?**
- Third-party subscriber
- Cortex XSOAR device
- PAN-OS NGFW device ✅
- Other Cortex XDR instance
- **Correct: PAN-OS NGFW device**

**Q4 of 5. Where can the Remediation Suggestions action be found?**
- Incident Overview
- Action Center
- Key Assets & Artifacts
- Causality Instance ✅
- **Correct: Causality Instance**

**Q5 of 5. Which type of Cortex profile has a key setting that can affect how the Remediations Suggestions action works?**
- Malware
- Exceptions
- Limitations
- Agent Settings ✅
- **Correct: Agent Settings**
