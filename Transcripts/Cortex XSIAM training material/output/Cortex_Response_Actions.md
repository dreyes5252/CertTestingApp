# Cortex: Response Actions

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cortex Actions

You can initiate three types of actions from the Cortex management console: response, investigation, and maintenance.

### Instant Response

You can immediately respond to malicious activities on an endpoint by quarantining a file or terminating a process. Alternatively, you can completely isolate an endpoint from its network. To respond to malicious network activities, you can use the external dynamic list (EDL) response action, which adds the malicious domains or IP addresses to the block lists to be consumed by next-generation firewalls (NGFWs).

### Further Investigation

To further investigate incidents and alerts, you can initiate a Live Terminal session to remotely connect to an endpoint. You can also utilize the extensive remote capabilities of Live Terminal to quickly respond to malicious activities.

### Maintenance and Administration

For management of your Cortex deployment, you can perform maintenance actions, such as uninstalling and upgrading the Cortex XDR agents.

---

## Targets of Response Actions

The response actions can impact three different components: processes and files, endpoints, and networks.

| Target | Description |
|---|---|
| **Processes and Files** | Actions such as quarantining a file or terminating a process directly target individual processes or files. All the remaining files or processes remain intact. |
| **Endpoints** | Some actions can act on the entire endpoint. For example, the Isolate Endpoint action disconnects the endpoint from its network. |
| **Networks** | The EDL action can impact network activities by maintaining block lists of IP addresses and domain names that are enforceable by your NGFWs. |

---

## Server-Initiated Actions

Cortex uses WebSocket to send actions to the Cortex XDR agents, which has more benefits compared to the Hypertext Transfer Protocol (HTTP) protocol.

### Speed

Cortex immediately sends critical actions to agents over WebSocket.

### Live Sessions

WebSocket establishes live, stateful sessions between instances and agents.

### Failover to HTTP Option

A WebSocket protocol can fail over to HTTP-based agent-initiated heartbeats. If a WebSocket session fails, the action will be sent at the next agent heartbeat.

*[Diagram: Cortex server-initiated actions include (8 actions shown in oval badges): Quarantine a file, Terminate a process, Isolate an endpoint, Initiate Live Terminal, Set Endpoint Proxy, Retrieve endpoint files, Retrieve alert data and analyze, Retrieve support files]*

---

## Initiating Actions in the Management Console

You can initiate response actions from the management console in a variety of ways.

### From the Action Center Page

Go to **Investigation and Response > Response > Action Center > + New Action** and choose the action you want to take.

*[Screenshot: "Define an Action" wizard showing list of action types including: File Retrieval, Retrieve Support File, Malware Scan, Abort Malware Scan, Isolate, Run Endpoint Script, Add to Block List, Add to Allow List, Import Hash Exceptions, Agent Upgrade, Agent Uninstall]*

### From the Shortcut Menu

Hover the cursor over a row in the endpoints table and take the required action from the available options.

*[Screenshot: All Endpoints table showing endpoint rows with a shortcut menu appearing on hover, offering quick action buttons]*

---

## Limiting Access to Actions

You can restrict access to the actions that users can perform in the management console using Cortex roles.

To access the Cortex roles for the current instance, go to **Setting > Configurations > Access Management > Roles**. Click the image to enlarge it.

To verify your role, click your Customer Support Portal (CSP) username and click **About**. Click the image to enlarge it.

---

## Initiating Actions in the Action Center

Action Center hosts lists of objects modified by the successfully completed actions, such as the lists for quarantined files, blocked and allowed files, and isolated endpoints.

You can take the following actions in the Action Center:

- **Initiating New Actions** — You can initiate new actions on one or multiple files or endpoints in bulk directly from the Action Center.
- **Tracking New Actions** — Track the progress of all the actions initiated from various action buttons and shortcut menus on the Cortex management console.
- **Accessing Currently Applied Actions** — Access the Currently Applied Actions lists (e.g., File Quarantine and Block List).
- **Accessing Agent Script Library** — Access the Agent Script Library to run scripts remotely on endpoints.
- **Archiving Actions** — To archive any action listed under the Action Center, right-click it and select **Archive**.

---

## Actions in the Action Center

Here is a list of the actions that you can initiate from the Action Center. Be aware, the availability of some actions may vary based on license.

| Action | Description |
|---|---|
| Files Retrieval | Download up to 20 files from each targeted endpoint. |
| Retrieve Support File | Download all logs, memory dumps, etc., in a zip file to work with Technical Support. |
| Malware Scan | Scan endpoints for Portable Executable (PE) files and Office files with macros. |
| Abort Malware Scan | Cancel an ongoing scan activity. |
| Isolate | Isolate an endpoint from its network. |
| Run Endpoint Script | Run Python scripts on endpoints. |
| Add to block list | Add hashes to block list. |
| Add to allow list | Assign a Malware verdict to files to override WildFire and Local Analysis verdicts. |
| Import Hash Exceptions | Import hash exceptions (block lists and allow lists) from CSV files. |
| Agent Upgrade | Initiate a Cortex XDR agent version software upgrade on endpoints. |
| Agent Uninstall | Uninstall the Cortex XDR agents from endpoints. |
| File Search | Search files by file SHA256, path or path with wildcard. |
| Destroy file | Find and destroy all instances of a file on an endpoint by using file path or hash. |
| Memory Collection | Collect a memory image from a Windows endpoint. |

### Agent Isolation (Linux)

When isolating a Linux endpoint, you can cancel the option to isolate an agent if the connection with the managing server has lost connection after a defined period of time.

Settings are found within **Endpoints > Policy Management > Prevention > Profiles**. Once in the profiles menu, select **Agent Settings** within the Linux profiles section.

---

## Tracking Actions Status

You can track the status of your actions in the Status column of the All Actions table. Tracking the status of an action is especially important for actions that may not be completed immediately and for bulk actions taken on multiple endpoints.

The following are the different action statuses:

| Status | Description |
|---|---|
| **Pending** | There are no endpoints that have started to run the action. |
| **In Progress** | At least one endpoint has started to run the action. |
| **Expired** | The action expired before an endpoint could start running it. |
| **Canceled** | The action was canceled before any endpoint started performing it. |
| **Completed Successfully** | The action was successfully completed on all the endpoints. |
| **Completed with Partial Success** | The action was successfully completed on some endpoints. |
| **Failed** | The action has failed on all the endpoints. |

*[Screenshot: All Actions table showing rows with statuses including: Completed Successfully, Completed with Partial Success, Failed. Columns include CREATION TIME, ENDPOINTS, ACTION TYPE, DESCRIPTION, STATUS, ACTION LAST UPDATE.]*

---

## Follow-Up Actions

You can take follow up actions on an already-performed action from its shortcut menu, such as restore, move to allow list, and cancel isolation.

### Restore

Use the Restore action to restore a file.

*[Screenshot: File Quarantine Details — "Found 6 results, 1 Selected (Clear Selection)" — table with columns ENDPOINT NAME, DOMAIN, HASH. Rows show XSIAM endpoints with hashes: 7caa9dbcf37b0e60c287101f57c15de8b334ebbbcb4a4710b8f945b3cc2e11b4, 1d5751c668a032d557325a00e528dc9331fd518089258bdac3dc5b3beaa99822, 7df99bd728c657a1ce6d560534f840614af2c81667559c964ae6087dd0e2307c, d74f55056e5cc26a2db046fe3d2c86b77457222cbf91df9e817bee1e8de1c6533. Right-click context menu open showing: "Restore all files by SHA256", Copy text to clipboard, Copy entire row, Show rows with 'XSIAM-...', Hide rows with 'XSIAM-...']*

### Move to Allow List

*[Tab flattened — content behind tab not visible at render resolution]*

### Cancel Endpoint Isolation

*[Tab flattened — content behind tab not visible at render resolution]*

---

## Isolate and Cancel Isolation Endpoints Response Actions

You can isolate a malicious endpoint from its network, allow certain processes on it while it is still in isolation, and cancel its isolation.

### Isolating an Endpoint

You can use an endpoint's shortcut menu to initiate the isolate action on the endpoint. The endpoint will be completely isolated from the rest of the network when this action is complete. However, the agent can still connect to the Cortex instance.

*[Screenshot: "ISOLATE ENDPOINTS" confirmation dialog — "You are about to isolate XSIAM-[redacted]" — warning text in red: "Isolation will block endpoint network access, except for traffic to Cortex XDR" — checkbox "I agree" — comment field "Your comment here..."]*

### Allowing Processes on an Isolated Endpoint

On an isolated endpoint, certain processes can be allowed to connect to specific IPv4 or IPv6 addresses using the Response Actions setting in the applied Agent Settings Profile. For each entry in the allow list, specify process names with wildcard (*) and IPv4 or IPv6 addresses.

*[Screenshot: Response Actions tab in Agent Settings Profile showing "ALLOW LIST OF NETWORK ISOLATION IPs" section with XDR Cloud field showing IPv4 127.0.0.1, with "Set 'to allow all ips'" link.]*

### Canceling Endpoint Isolation

You can cancel an endpoint isolation in two ways: using the Cancel Endpoint Isolation action from the Action Center (shown in the example) or using the Cytool app with the isolate stop command option.

*[Screenshot: Endpoint Isolation table — "Found 1 result, 1 Selected (Clear Selection)" — columns ENDPOINT NAME, ENDPOINT ISOLATED, ISOLATION DATE. Right-click context menu showing: Edit Isolation Comment, Cancel Endpoint Isolation, Copy text to clipboard, Copy entire row.]*

---

## Follow-Up Actions: Additional Data

When viewing completed actions, you can click **Additional data** to view supplemental information such as file paths for quarantined files or operating systems for agent upgrades.

For example, you can use the additional data menu for a Retrieve Issue Data action to review when that action was completed. You can also right click on the action in that menu and select **Download files** to download data associated with the action.

*[Screenshot: Detailed Results - Retrieve Issue Data (ID 12) showing Action: Retrieve Issue Data, Creation Time: Jul 27th 2025 13:06:17, Status: Completed Successfully, Action Parameters — Issue Name: Process Creation.]*

*[Screenshot: All Actions table with "Additional data" context menu visible on an action row, showing "Download files" option highlighted.]*

---

## Block List Hash Override

Cortex allows you to define an optional setting to terminate hashes on an endpoint regardless of the malware profile settings.

Even though the profile is set to Report, Cortex will still block items from the block list regardless of the report status if the Override Report mode option is enabled. Click the image to enlarge it.

From the **Investigation & Response > Response > Action Center > Block List** page, you can enable the Override Report Mode. Click the image to enlarge it.

*[Screenshot: Block List page with "Override Report Mode" button visible. Pop-up dialog: "Are you sure?" — "Enabling this setting will cause all hashes on the list to be blocked by the agent, regardless of its malware profile setting." — Cancel / Yes buttons.]*

---

## Live Terminal Response Action

To respond to and further investigate an alert associated with an endpoint, initiate a Live Terminal session that establishes a stateful connection to the endpoint.

Live Terminal provides four interfaces for performing several operating system-specific tasks remotely on an endpoint:

### Task Manager

Use Task Manager to investigate and manage processes, such as performing terminate, suspend, or resume processes.

### File Explorer

Use File Explorer to investigate and manage files and perform tasks, such as renaming, moving, and deleting files or folders.

### Command Line

Use Command Line to run non-interactive, non-web interface applications or commands.

### Python

You can initiate Python 3 commands, or load and run a Python script file without installing Python. You can save the session report in text when you disconnect the session.

*[Screenshot: Live Terminal interface showing connected endpoint "xdr-[redacted]" with Disconnect button and side panel listing: Task Manager (selected), File Explorer, Command Line, Python, PowerShell (partially visible)]*

---

## Task Manager and File Explorer Provisions

Task Manager and File Explorer provide remote process management and file management on a connected endpoint respectively.

### Task Manager

The tree icon, located on the header of the process table, is used to toggle between the flat view and tree view of the process hierarchy.

Open the shortcut menu of a process in the table to perform a process-specific action, such as Terminate process, Suspend process, Get WildFire verdict, or Open hash view (shown in the image).

*[Screenshot: Task Manager view in Live Terminal showing process hierarchy with toggle between flat and tree view. Shortcut menu for a selected process showing: Terminate process, Suspend process, Get WildFire verdict, Open hash view, Add SHA256 to IOC, Download Binary, Mark as interesting, Copy value. "Applicable actions for the cortex.exe process" annotation.]*

### File Explorer

File Explorer provides remote file management on a connected endpoint. The right pane on File Explorer is the directory tree, which is used to remotely manage files and folders on a connected endpoint.

To display action options for a file or folder, use its shortcut menu.

*[Screenshot: File Explorer view showing directory tree on right, file list on left. Shortcut menu for a selected file showing: Rename, New, Copy File / Directory, Download directory, Delete. "Applicable actions for the selected file" annotation.]*

---

## Disabling Endpoint Capabilities

Cortex allows you to disable endpoint capabilities, such as Live Terminal, File Retrieval, and Script Execution from its shortcut menu.

**Note:** Disabling capabilities on an endpoint is an irreversible action. To enable a capability, you must uninstall and reinstall the agent. The reinstallation is required as a security precaution.

To disable an endpoint's capabilities, navigate to **Inventory > Endpoints > All Endpoints**. Then, right click an endpoint and select **Endpoint Control > Disable Capabilities**. On the pop-up window that appears, select the capability you want to disable and then click Set.

*[Screenshot: All Endpoints table with right-click context menu on an endpoint showing: Open in inspection mode, Actions dropdown, Endpoint Dashboard, Change Endpoint Alias, Copy text to clipboard, Copy entire row, Show rows with 'XSIAM-...', Hide rows with 'XSIAM-...', Disable Capabilities (highlighted), Freeze Endpoint Protection, Assign Endpoint Tags. Disable Endpoint Capabilities dialog showing checkboxes for: Live Terminal, File Retrieval, Script Execution. Note: "Disabling capabilities on an endpoint is irreversible. To restore the capability, you must reset or reinstall the agent."]*

---

## Automated Response Capabilities

Some of the response capabilities are available with simple automation, where customers can automate:

- **Isolating endpoints**
- **Running scripts**
- **Conducting forensics**
- **Performing malware scans**

---

## Knowledge Checks

### Section Knowledge Checks (Gray Bar / Submit-Show Feedback)

**What is one of the primary response actions available in Cortex?**
- Scheduling software updates for endpoint security
- Generating system health reports for endpoint diagnostics
- Isolating an endpoint from the network ✅
- Monitoring user activity and access logs
- **Correct: Isolating an endpoint from the network**

**What does the 'Terminate Process' response action do in Cortex?**
- Logs user login attempts and failures
- Ends a suspicious or malicious process on an endpoint ✅
- Updates the device firmware automatically
- Generates a detailed network traffic report
- **Correct: Ends a suspicious or malicious process on an endpoint**

**What is the purpose of the 'Quarantine File' action in Cortex?**
- Manages endpoint updates and software patches
- Creates network rules for traffic management
- Moves a suspicious file to a secure location to prevent execution ✅
- Configures cloud storage settings for data management
- **Correct: Moves a suspicious file to a secure location to prevent execution**

**What is the function of the 'Block IP' response action in Cortex?**
- Prevents network communication from a specified IP address ✅
- Updates software licenses and renewal information
- Logs user session details for monitoring activities
- Schedules hardware diagnostics and performance checks
- **Correct: Prevents network communication from a specified IP address**

**When does a response action expire?**
- When at least one endpoint completes the action
- When all but one endpoint completes the action
- When an action times out before at least one targeted endpoint starts running the action ✅
- When an action times out after the endpoints have started running the action
- **Correct: When an action times out before at least one targeted endpoint starts running the action**

**On which page in the management console can you verify the signed-in user's Cortex role?**
- The Endpoints page
- The Cortex Gateway
- The Cortex Documents Portal
- The About page ✅
- **Correct: The About page**

---

### Numbered Quiz (5 Questions)

**Q1. Which action can be taken once a Live Terminal connection is established?**
- Install Updates via Updater.
- Shut down Endpoint via Power Management.
- Reboot Endpoint via Power Management.
- Run applications and commands via Command Line. ✅
- **Correct: Run applications and commands via Command Line.**

**Q2. Which portion of the Cortex management console displays the results of response actions taken?**
- Action Center ✅
- Response Center
- Audit logs
- Response logs
- **Correct: Action Center**

**Q3. Once an Endpoint has had Disable Capabilities initiated, how can it be reversed?**
- Navigate to the Cortex management console and uncheck the Disable Capabilities box in All Endpoints.
- Open the agent UI on the endpoint, then click "Check in Now."
- Uninstall and reinstall the agent on the Endpoint. ✅
- Open a Live Terminal to the Endpoint and uncheck the Disable Capabilities box.
- **Correct: Uninstall and reinstall the agent on the Endpoint.**

**Q4. Which Response Action can be taken from the Cortex management console?**
- Shell Terminal
- Isolate Endpoint ✅
- Reboot Endpoint
- Reimage Endpoint
- **Correct: Isolate Endpoint**

**Q5. Which option is an example of instance-initiated actions available via the Cortex XDR WebSocket?**
- Edit a file.
- Initiate a process.
- Terminate a process. ✅
- Send a file to an endpoint.
- **Correct: Terminate a process.**
