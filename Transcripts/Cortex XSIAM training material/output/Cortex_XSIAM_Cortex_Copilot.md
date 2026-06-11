# Cortex XSIAM: Cortex Copilot

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## The Cortex Copilot Architecture

Click the arrows to see how Cortex Copilot's architecture brings LLM accessibility together with the Cortex backend to help users address complex security tasks quickly.

### Backend Responses

Because Cortex Copilot is directly linked to the Cortex backend, it can do more than a LLM can do on its own. It can utilize information from the Cortex Data Layer, take actions, and submit support cases.

*[Diagram: Architecture flow diagram showing left-to-right data flow. Steps: (1) User → user's prompt → (2) Copilot → Translate to API → (3) Cortex Backend (center, inside a dashed orange border). The Cortex Backend connects upward to "Cortex Data Lake" (cloud shape, labeled "Profiles, alerts, raw data") with a bidirectional "Data collection" arrow. From the Cortex Backend, arrows also go to "Live Sensors" (labeled "Response actions & forensic data"), "Submit a Support Case", and "Query the Cortex Help Center". The diagram conveys that Copilot is not a standalone LLM — it is wired directly into the XSIAM backend for real data access and action execution.]*

---

## Designed for Security Needs

Cortex Copilot responds to a number of common security operations pain-points because analysts can perform Cortex XSIAM actions and access Help Center information using plain language prompts directly in the unified Cortex XSIAM interface. Here is how Cortex Copilot can help analysts.

### Speed Up Investigations

Cortex Copilot speeds investigation and response times by allowing analysts to quickly enrich investigation data and take actions on infrastructure assets and investigation artifacts.

### Optimize Workflows

Because Cortex Copilot is directly integrated in the Cortex XSIAM interface, it speeds security workflows by enabling analysts to perform actions quickly and intuitively without having to switch contexts.

### Democratize Threat Hunting

Cortex Copilot lowers the skill barrier for engaging in effective threat hunting by providing analysts contextualized investigation suggestions and response options.

---

## Responsible AI

Built into Cortex Copilot's design are ethical and responsible AI principles of security, privacy, and explainability. Cortex Copilot's design ensures users understand the AI's behavior and can only take actions they are authorized to take.

### Security

Cortex Copilot emphasizes security by ensuring all actions users take are intentional and authorized. Any actions that change the XSIAM environment will require the user's confirmation. All user actions are constrained by the user's Role-Based Access Control (RBAC) permissions.

### Privacy

Cortex Copilot protects the privacy of user and customer data. No customer data is used to train the Cortex Copilot model. Only the user's prompts are sent to Cortex Copilot, not data, and the user controls the Cortex Copilot interaction logs. Conversation logs persist if the user closes their browser or creates new tabs, but the user can delete interaction logs at any time.

### Explainability

Cortex Copilot responses build in accountability and allow users to provide feedback. Cortex Copilot can explain the logic for the answers and suggestions it provides. Users can also give "thumbs up" or "thumbs down" responses to Cortex Copilot answers, responses which are used to further train Cortex Copilot.

---

## Licensing and Feature Availability

Cortex Copilot requires an XSIAM Enterprise or XSIAM Enterprise Plus license. Access to Copilot features is determined by region-based default settings and users' RBAC permissions.

### Regional Support

Support of Cortex Copilot capabilities depends on the region in which your Cortex tenant is located. The following explains these regional differences. See the Cortex Copilot documentation to determine what capabilities your region currently supports.

#### Supported Regions

In supported regions:
- Copilot chat features are enabled by default.
- Chat-based access to Help Center information is enabled by default.
- Prompt responses are calculated on systems within the region.

Users can manually toggle both chat-based access to Help Center features and Cortex Copilot on or off.

#### Unsupported Regions

In unsupported regions:
- Copilot chat features are enabled by default.
- Chat-based access to Help Center information is disabled by default.
- If Help Center features are enabled, Help Center prompts may be calculated on systems outside the region.

Users can manually toggle both chat-based access to Help Center features and Cortex Copilot on or off.

---

## RBAC Controls

Cortex Copilot inherits the user permissions already defined by the XSIAM environment and these permissions determine what users see and what they can do when working with Copilot. Examine the following information to learn more about how Copilot RBAC controls promote security.

### Tailored Information and Suggestions

The information provided to users on assets and artifacts in an environment is controlled by the user's existing RBAC permissions. The actions and remediation options Copilot suggests are also controlled by RBAC permissions.

### Action Restrictions

If a user uses Cortex Copilot to take an action they are not authorized to take, Copilot will not take the action and will inform the user they lack the appropriate permission to execute the action.

---

## Cortex Copilot Feature Settings

Cortex users can choose to enable or disable Cortex Copilot and Help Center features at any time. These settings may be useful for users who want to control where their Cortex Copilot prompts may be calculated.

### Locating Cortex Copilot Settings

Click the arrows to view how to enable and disable Cortex Copilot features in the **Server Settings** area of the XSIAM settings menu. Click the images to enlarge them.

#### Locate Settings Menu

Begin by locating the **Settings** menu in the XSIAM interface. The **Settings** menu can be located by clicking the small gear icon in the bottom-left corner of the XSIAM interface. After you click the gear icon, select the **Configurations** option.

*[Screenshot: XSIAM Command Center interface showing the left navigation sidebar with items: Dashboards & Reports, Incident Response, Detection & Threat Intel, Assets, Apps, Endpoints, Managed Services. At the bottom of the sidebar: Copilot, Settings (highlighted with orange border), Threat Navigator, Notifications, Help. A flyout menu from Settings shows items: Cortex XSIAM License, Management Audit Logs [low-confidence], Agent Audit Logs, XDR Collector Audit Logs, Health Alerts, Exceptions Configuration, Data Sources, Configurations (highlighted with orange border). A green button reads "Settings > Configurations". The main dashboard area shows "Good Afternoon," with metrics: 2,522 Alerts, 105 Incidents, 86 Automated, 92 Resolved Incidents, 19 Manual, 13 Open Incidents. Bottom stats: Events Ingestion 41 to Date, Data Ingestion 65 to Date, Total Open Incidents 13, 286.1K.]*

---

## The Cortex Button and Overlay

The Cortex Copilot button enables users to access the Cortex Copilot overlay and Cortex Copilot's LLM chat interface.

### Accessing the Cortex Copilot Overlay with the Cortex Copilot Button

The Cortex Copilot button, found at the bottom-right corner of the Cortex XSIAM interface, offers a quick way to use Cortex Copilot and its chat-based interaction capabilities. Click the images to enlarge them.

#### Cortex Copilot Button

Clicking the Cortex Copilot Icon in the bottom-left of the Cortex XSIAM interface opens the Cortex Copilot Overlay.

*[Screenshot: XSIAM interface showing a green "Cortex Copilot Button" label in the bottom-left area of the dashboard.]*

#### Cortex Copilot Overlay

The Cortex Copilot overlay completely preserves the XSIAM context beneath while also providing access to the Cortex Copilot chat bar. This bar offers an intuitive way to interact with Cortex XSIAM and the Cortex knowledge base through natural language commands and questions.

*[Screenshot: XSIAM interface with the Cortex Copilot overlay open. Shows "Good Afternoon," greeting at top with a green "Cortex Copilot chat bar" label. Dashboard metrics visible beneath the overlay: 147 (with sparkline), 169, 13, and a fourth metric tile.]*

---

## The Cortex Copilot Hotkey

Users can access Cortex Copilot at any time by pressing the Cortex Copilot hotkey, which is **Ctrl+Shift+X** on Windows or **CMD+Shift+X** on macOS.

### Cortex Copilot Hotkey Uses and Settings

By pressing the Cortex Copilot hotkey, users can quickly open the Cortex Copilot Overlay. Users can also highlight text in the Cortex XSIAM interface, such as asset names or artifact hashes, and hit the Cortex Copilot hotkey to enter that text into a Cortex Copilot chat prompt. Users can change the Cortex Copilot hotkey by accessing **Keyboard Shortcuts** menu at **Settings > Configurations > Server Settings**.

*[Screenshot: Server Settings panel showing Keyboard Shortcuts section with two entries:
- **Artifact and Asset Views** — Select shortcut to open artifact and asset views of hash or IP address values — **Ctrl + Shift + E**
- **Cortex Copilot** — Select shortcut to open Cortex Copilot — **Ctrl + Shift + X** (highlighted with orange border)]*

---

## Cortex Daily Recap and Help Center

Users can quickly access a daily summary of security information and material from the Cortex knowledge base by opening the Cortex Copilot overlay with the Cortex Copilot button.

### The Cortex Daily Recap

The Daily recap screen provides users a summary of the incidents logged that day, as well as the automated playbooks triggered risks and the data sources monitored by XSIAM. Each of the blue items in the Daily Recap summary directs users to additional information on incidents, contextualized information, and suggestions on individual incidents, data sources, or alert responses.

*[Screenshot: XSIAM Cortex Copilot Daily Recap screen showing "Good Afternoon," greeting. Text reads: "In the last 24 hours, Cortex XSIAM detected 165 new incidents, based on 4.35 GB of ingested data from 11 data sources. 227 playbooks were triggered to remediate the risk automatically." Green button: "Daily Recap summary". Dashboard metrics tiles: 159/165 Incidents Resolved Automatically, 227 Playbooks Triggered, 14 Average Incidents Score, 4x Top Data Sources.]*

---

## AI-Assisted Investigation and Support Ticket Creation

Cortex Copilot makes it easier for users to assemble information for support tickets and can guide users as they are conducting investigations in the XSIAM environment.

### Accelerating Investigations with Cortex Copilot's Core Capabilities

Cortex Copilot's core capabilities accelerate incident investigations and make useful information more accessible to analysts.

#### Asset and Artifact Insights

Examining an asset or artifact using Cortex Copilot or searching for a file hash, hostname, domain, Internet Protocol (IP) address, or user name rapidly collects and provides insights into that object or entity. Copilot can also quickly search across the XSIAM environment to collect information, such as all incidents connected to a specific hostname or locations where the hash of a specific file is found.

#### Investigation Paths

The Investigate menu for XSIAM artifacts and assets offers users suggestions on first steps and alternate lines of inquiry they can take in an investigation process. Cortex Copilot can also dramatically speed up investigations by translating user questions into queries composed in XQL.

#### Response Options

Examining an asset or artifact involved in an incident using Cortex Copilot provides users a list of suggested response actions. For example, users can quickly destroy all instances of a file hash found in the environment or connect to a remote machine. Cortex Copilot can also help analysts respond quickly to incidents by helping them scan systems for malware or run scripts to remediate problems.

---

## Contextualized Support Ticket Creation

Cortex Copilot users can quickly create a support ticket by clicking the Submit a Support Case option in the Cortex Copilot Overlay.

Copilot can assist a user by automatically attaching troubleshooting information in the Cortex Copilot Support Case Wizard. This information can include tenant and license details, XDR Agent information, Copilot interaction logs, and user-provided screen recordings. For example, when a user selects they are having an issue with an endpoint, Copilot can automatically attach the relevant endpoint data.

Click the images to enlarge them.

*[Screenshot: Submit Support Case wizard — Step 1 "Case Information" (active) → Step 2 "Console Recording". Fields visible: Describe the Issue (text area, placeholder "I have an issue with my agent"), Enter your preferred contact number (text field), Enter 4-40 characters. Character counter shown.]*

*[Screenshot: Submit Support Case wizard — Step 1 "Case Information" (active), Step 2 "Console Recording". Fields visible: Enter your preferred contact number (pre-filled: 12345678910), Enter 4-40 characters; Issue frequency (Select dropdown); Must recent issue start date & time (Select date and time).]*

---

## Knowledge Checks

### Section Knowledge Check A — XSIAM Copilot Advantage (Page 6)

**Q1. What is one advantage Cortex Copilot has over other LLM-based AI security assistants?**
- It uses a proprietary foundation model which is more complex than those found in other LLMs.
- Cortex Copilot is directly linked to Cortex XSIAM's Backend. ✅
- The Cortex Copilot language model is frequently retrained using a combination of customer and user data.
- All Cortex Copilot chat responses are manually reviewed to fine-tune the Copilot model.

**Correct: Cortex Copilot is directly linked to Cortex XSIAM's Backend.**

---

### Section Knowledge Check B — Deactivating Help Center Features (Page 6)

**Q2. Why would a user, who needs their Copilot data to stay within a single region, choose to deactivate Cortex Copilot's Help Center features?**
- Cortex Copilot prompts are stored by Cortex Copilot using a region-redundant configuration by default.
- Cortex user data and Cortex Copilot prompts are stored by Cortex Copilot using a region-redundant configuration by default. ✗ (incorrect — red X shown)
- Cortex Copilot prompts may be calculated outside of the Cortex tenant region in both Cortex Copilot supported and unsupported regions. ✅
- Cortex Copilot prompts may be calculated outside of the Cortex tenant region in Cortex Copilot unsupported regions.

**Correct: Cortex Copilot prompts may be calculated outside of the Cortex tenant region in both Cortex Copilot supported and unsupported regions.**

---

### Numbered Quiz — Question 1 of 5 (Page 7)

**Q3. (Question 1 of 5) What Cortex Copilot feature is deactivated by default in unsupported regions?**
- Chat-based Help Center access ✅
- Asset and artifact insights
- Contextualized response options
- Contextualized support ticket creation

**Correct: Chat-based Help Center access** *(Score: 1)*

---

### Numbered Quiz — Question 2 of 5 (Page 8)

**Q4. (Question 2 of 5) What conditions are required for Cortex Copilot to execute an action in the XSIAM backend?**
- The user must have the Cortex Copilot permissions to perform the action.
- The user must have the Active Directory permissions to perform the action.
- The user must confirm the action and the user must have the Cortex Copilot permissions to perform the action.
- The user must confirm the action and the user must have the XSIAM Rule-Based Access Control permissions to perform the action. ✅

**Correct: The user must confirm the action and the user must have the XSIAM Rule-Based Access Control permissions to perform the action.** *(Score: 1)*

---

### Numbered Quiz — Question 3 of 5 (Page 9)

**Q5. (Question 3 of 5) In which of the following ways can Cortex Copilot speed incident investigation or response?**
- Cortex Copilot can automatically compose and send status updates during an incident.
- Cortex Copilot can automatically and independently isolate endpoints when they are involved in an incident.
- Cortex Copilot can help users generate Cortex Query Language (XQL) queries for incident investigation. ✅
- Cortex Copilot can automatically and independently destroy all instances of unsafe file hashes identified in an incident.

**Correct: Cortex Copilot can help users generate Cortex Query Language (XQL) queries for incident investigation.** *(Score: 1)*

---

### Numbered Quiz — Question 4 of 5 (Page 10)

**Q6. (Question 4 of 5) What suggestion categories will Cortex Copilot provide when users examine an asset or artifact?**
- Research, Respond, and Report
- Investigate, Respond, and Report
- Research, Respond, and Navigate
- Investigate, Respond, and Navigate ✅

**Correct: Investigate, Respond, and Navigate** *(Score: 1)*

---

### Numbered Quiz — Question 5 of 5 (Page 11)

**Q7. (Question 5 of 5) How can a Cortex Copilot user access the Cortex Copilot Daily Recap screen?**
- By entering "Show me the Daily Recap" in the Cortex Copilot chat bar
- By enabling the Daily Recap option in the Dashboard Manager menu
- By opening the Cortex Copilot overlay using the Cortex Copilot button in the XSIAM interface ✅
- By selecting the Daily Recap option from the Dashboards and Reports menu in the XSIAM interface

**Correct: By opening the Cortex Copilot overlay using the Cortex Copilot button in the XSIAM interface** *(Score: 1)*
