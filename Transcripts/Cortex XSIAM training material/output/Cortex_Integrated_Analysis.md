# Cortex: Integrated Analysis

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Issues and Logs

When data is sent to a Cortex instance, it comes in two types: issues and logs. Each type serves a specific purpose and provides different insights into potential security threats.

### Issues

Issues are instantly created to capture details of suspicious activities and are immediately uploaded to a Cortex instance. However, due to their quick creation and processing, issues may not capture all activity details, such as process-resource interactions, making them insufficient for behavioral threat analysis on their own.

The issues table in the management console displays a minimum set of attributes, such as a timestamp, severity, and issue name.

### Logs

Logs can be any type of data, not necessarily attack-related information, and are periodically uploaded to the Cortex instance. Unless associated with issues, logs alone may not provide enough information for behavior analysis. Examples of log types include enhanced endpoint data, firewall traffic logs, and authentication logs.

As a wide variety of log types can be sent to Cortex, the management console may not provide a dedicated table for logs. However, it does offer tables for viewing audit logs, including Management Audit, Agent Audit, and XDR Collector Audit within the Settings menu. For the remaining logs, users can access them using Cortex Query Language (XQL) search queries or create Cortex Correlation rules based on the logs.

---

## Issues Correlated with Logs

Cortex can correlate issues and logs, which is also known as log-stitching. This merging process results in enhanced issues with more attributes (fields) containing information about the attack details.

The analysis of a stitched issue can reveal:

### Causality Chains

Cortex can regenerate causality information that displays the attack-related process-resource interactions in hierarchical causal graphs.

### Timelines

Cortex can display the timeline of when those attack-related process executions were invoked.

---

## Enhanced Endpoint Data Collection

The Cortex XDR Pro Endpoints agents, also known as Pro Agents, can collect enhanced endpoint data (EED) logs on endpoints. The XDR agent also performs these ongoing tasks, including operating system (OS) monitoring, data sampling, collecting (saving locally), compressing, and uploading. The collected logs are uploaded every five minutes to the Cortex instance that the agent is connected to. To directly access the collected data, you can build search queries using the management console's Query Builder or leverage XQL.

### What Data Is Collected?

Enhanced endpoint data includes several log types.

**Process Operations**

These logs capture events related to operating system resources such as files, processes, networks, and registry activities. Examples include file read and write operations and child process creations.

**Network Operations**

These logs capture endpoint events related to network activity, such as accept, connect, and listen events. Examples include failed connections or the source and destination IP address and port.

### Enable EED Collection

The EED collection capability can be enabled or disabled in the XDR Pro Endpoints section of a Agents Settings profile.

*[Screenshot: XDR Pro Endpoints section — Enable the Cortex XDR Pro agent capabilities including enhanced data collection, advanced res[ponse]. XDR Pro Endpoints Capabilities: Enable / Use Default [Disabled]. Monitor and Collect Enhanced Endpoint Data: Enable / Use Default [Enabled].]*

---

## Extended Threat Hunting Data

By default, agents with a Cortex XDR Pro per Endpoint license apply limits to network, file, and registry logs. The Extended Threat Hunting (XTH) add-on is required to expand these capabilities. The add-on enables the collection of RPC calls, system calls, and event logs on Windows, and it enables file activity and event logs on Mac and Linux.

---

## Stitched Issues in the Issues Table

You can identify stitched issues in the Issues table by checking attributes related to causality, such as Causality Group Owner (CGO) Name, CGO Signer, and Causality ID (CID), which shows the stitching status.

Most causality-related attribute names begin with the CGO prefix. Any non-blank causality-related attribute indicates that the issue has been stitched.

The green dot in the first column does not indicate the stitching status of an issue. It signifies that the issue is eligible for analysis in the Causality View.

*[Screenshot: Issues table showing rows with green dots in first column, CGO Name, CGO Signer columns populated — indicating stitched issues.]*

---

## Stitched Issue Actions

A stitched issue provides advanced investigation and visualization actions: Open Card and Open Timeline.

### Open Card

Open Card displays the entire process execution chain that triggered the issue in the Causality View.

### Open Timeline

Open Timeline displays stages of the attack lifecycle and all the issues, including informational-severity issues in the Timeline View.

*[Screenshot: Causality View showing process execution chain tree on left side; Timeline View on right showing attack lifecycle stages with colored nodes and timeline axis.]*

---

## Checking Stitching Status

You can check the log collection and log stitching status by reviewing the issue attributes displayed in the JavaScript Object Notation (JSON) format.

To view the JSON attributes of an issue, Alt + right-click (Windows) or Opt + right-click (Mac) on an issue to open the actions menu, and then click **Debug issue**. Make sure to check the following attributes:

**`matching_status`** — This is the correlation status of this issue with enhanced endpoint data.

**`agent_data_collection_status`** — This indicates whether the enhanced endpoint data upload was enabled when this issue was created on the endpoint.

---

## CAE = Cortex Analytics Engine

### Behavioral Analytics

The CAE detects and responds to hidden, post-intrusion threats that have evaded network defenses before the attacks ruin the systems.

The process of how the Analytics Engine detects anomalies using behavior analytics is as follows:

**1. Learning Normal Behavior**

The Analytics Engine first uses machine-learning-based analytics to learn the normal behavior of entities such as users, endpoints, and networks. The normal behavior of entities is also known as baselines. To set the baselines, the engine employs unsupervised machine-learning techniques in which no in-advance labeling is required.

**Note:** The setting of baselines is a learning process that is also known as profiling.

**2. Comparing Activities to Normal Behavior**

After learning the normal behavior of entities, the engine compares ongoing activities with the normal behavior and raises issues when suspicious activity is detected.

For example, the engine can detect unexpected changes in connectivity patterns, including increased rates of connections, failed connections, and port scans.

---

## MITRE ATT&CK Tactics

The Analytics Engine can raise an issue for any of the following attack tactics as defined by the MITRE ATT&CK tactics.

Some MITRE ATT&CK tactics are described as follows:

**Execution** — Execution tactics include various techniques to execute malicious code on a local or remote endpoint after gaining access to the network.

**Persistence** — Persistence tactics are techniques to maintain access in a network or on an endpoint.

**Discovery** — Discovery tactics are techniques applied after an initial access to identify further vulnerabilities within the network.

**Lateral Movement** — [icon shown]

**Command-and-Control** — [icon shown]

**Exfiltration** — [icon shown]

---

## Coverage of Analytics Engine

The Cortex Analytics Engine provides full coverage of detected attack tactics as defined by MITRE ATT&CK tactics.

Here are some ways in which the Analytics Engine detects attack tactics:

### Discovery

The engine detects discovery tactics through a search for symptoms in your internal network traffic, such as changes in connectivity patterns that include increased rates of connections, failed connections, and port scans.

### Lateral Movement

The engine detects lateral movement tactics through examination of administrative operations, such as Secure Shell (SSH), Remote Desktop Protocol (RDP), file share access, and user credential usage that is beyond what is normal for your network. The engine looks for activities, such as increased administrative activity, server message block (SMB) usage, and remote code execution.

### Command-and-Control

The engine detects command-and-control tactics through a search for unexplained changes in the periodicity of connections, failed and random domain name system (DNS) lookups, and other symptoms that suggest an attacker has gained initial control of a system.

### Exfiltration

The engine detects exfiltration tactics through examination of outbound connections with a focus on the volume of data being transferred. Increases in this volume are an important indicator of data exfiltration.

---

## Examples of Analytics Issues and Used Data Sources

The issue types that the CAE can raise depend on the data sources (log sources) that you set up. For example, if you use the Cortex XDR agent as the only data source, the Analytics Engine raises only the issues it can detect from the enhanced endpoint data sent by the agents.

The table shows examples of analytics issues and corresponding data source usages. The issues are grouped by the MITRE ATT&CK tactics.

| Issue | Palo Alto Networks Firewall Traffic | Check Point, Cisco, and Fortinet Firewall Traffic | GlobalProtect and Prisma Access | Cortex XDR Agent Endpoint Data | Windows Event Collector |
|---|---|---|---|---|---|
| **Persistence** | | | | | |
| Uncommon Net User | — | — | — | ✓ | — |
| **Discovery** | | | | | |
| High Connection Rate | ✓ | — | ✓ | ✓ | — |
| Port Scan | ✓ | ✓ | ✓ | ✓ | — |
| **Lateral Movement** | | | | | |
| Rare SSH Session | — | — | — | ✓ | — |
| **Command and Control** | | | | | |
| Recurring Rare IP Access | ✓ | ✓ | ✓ | ✓ | — |
| **Exfiltration** | | | | | |
| DNS Tunneling | ✓ | — | ✓ | — | — |
| **Credential Access** | | | | | |
| Possible Domain Controller Sync | — | — | — | — | ✓ |

---

## Building Blocks of the Analytics Engine: Analytics Detectors

The Analytics Engine organizes its behavioral analytics activities by units called detectors. Each detector is specialized for specific attack types and generates one type of analytics issue when anomalies and suspicious behaviors are detected.

To raise issues, each detector creates its own baseline by processing more than 1,000 data dimensions. The consumed data, in terms of logs and issues, and the time needed for training and testing periods vary by detector type. The data sources include Cortex XDR agents, Palo Alto Networks Next-Generation Firewalls, GlobalProtect and Prisma Access, and external syslog sources such as Check Point firewalls.

Detectors constantly update their baselines to align with dynamically changing network topology and usage.

---

## Enabling Cortex Analytics

You can enable the Cortex Analytics Engine in **Settings > Configurations > Cortex – Analytics**.

The following are important data collection requirements when enabling the Analytics Engine:

**Data Storage Minimum** — The data collected from at least 30 endpoints over a minimum of two weeks must be available in the storage.

**Collection Period** — For cloud audit logs, the engine requires a minimum of five days of collection. The Enable button will be greyed out (disabled) until the data requirement is met.

*[Screenshot: Cortex - Analytics panel. Analytics engine is active! Analytics Engine is continuously profiling user and device behavior, triggering Analytics-based issues. Status: Active. Warning: Add Windows D.CFIgp to enhance the Analytics Engine. Featured in Analytics section.]*

---

## Knowledge Checks

### Section Knowledge Check (gray-bar widget, p.6)

**Q1. What is the purpose of log stitching in Cortex?**
- To manage and configure endpoint hardware settings
- To optimize network performance and manage bandwidth
- To collect and correlate issues and logs to create comprehensive event timelines ✅
- To generate detailed monthly security and compliance reports
- **Correct: To collect and correlate issues and logs to create comprehensive event timelines**

**Q2. Which term best describes the units used by the Analytics Engine to organize its behavioral analytics activities?**
- Detectors ✅
- Locators
- Extractors
- Selectors
- **Correct: Detectors**

**Q3. What type of data does Enhanced Endpoint Data (EED) provide in Cortex?**
- Software licensing details and compliance records
- Network traffic logs and connection histories
- Device warranty information and coverage details
- Detailed endpoint data for deeper analysis ✅
- **Correct: Detailed endpoint data for deeper analysis**

**Q4. How does Cortex use machine learning in its Analytics Engine?**
- To generate user activity reports
- To automate software updates
- To manage device power settings
- To model data and detect abnormalities ✅
- **Correct: To model data and detect abnormalities**

### Numbered Quiz (Questions 1–5 of 5, pp.7–11)

**Question 1 of 5. Which log type can Cortex-enhanced endpoint data contain?**
- Browser history
- Cortex instance activity
- Windows Dynamic Host Configuration Protocol
- Endpoint network activities ✅
- **Correct: Endpoint network activities**

**Question 2 of 5. Which element is a building block of the Cortex Analytical engine?**
- Criticality
- Detectors ✅
- Collectors
- Classification
- **Correct: Detectors**

**Question 3 of 5. Where does Cortex store the enhanced endpoint data log?**
- Panorama
- Broker VMs
- XDR Collectors
- The Cortex Instance ✅
- **Correct: The Cortex Instance**

**Question 4 of 5. What type of logs can be viewed directly from the Cortex management console?**
- Policy audit logs
- Issues audit logs (learner's pick — wrong)
- Management audit logs ✅
- Broker VM audit logs
- **Correct: Management audit logs**

**Question 5 of 5. Which action is found under the Investigate Causality Chain right-click menu of stitched issues?**
- Open Response Flow
- Open Timeline ✅
- Open Insights
- Open Process Flow
- **Correct: Open Timeline**
