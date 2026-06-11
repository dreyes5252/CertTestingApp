# Cortex: Network Asset Discovery and Management

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Unified Asset Inventory

Cortex provides a unified asset inventory that combines all of your on-prem and cloud assets in one place. Cortex collects assets from multiple sources. This data is then stitched and normalized to create an aggregated asset, showing you a consolidated view of all the data sources that belong to a single asset. You can view asset inventory by navigating to **Inventory > All Assets**.

### Viewing All Assets and Other Asset Groupings

You can view all your organization's assets from the All Assets view. Additionally, you can view different groupings of assets such as All Cloud Assets, External Surface, and Network.

*[Screenshot: Left navigation panel showing Asset Inventory with sub-items: Inventory, Assets (with sub-items: All Assets, Groups, Network Configuration, Asset Rules Configuration, Asset Score)]*

### All Assets Charts and Table

The All Assets view provides three charts that are customizable to the type of assets that you want to visualize data for. Below the charts is a table of all assets that can be sorted and filtered.

*[Screenshot: All Assets view showing donut charts for asset statistics and a table below with columns including asset name, platform type, identity, and scope/location. Sample rows visible show assets categorized by AWS/On-Prem, with identity types including External Surface, Other, and Human Identity, and scope columns showing "global".]*

---

## Endpoints Inventory

The Inventory view also provides a variety of ways to view and manage endpoints.

### All Endpoints

The All Endpoints view displays a list of all endpoints that can be filtered or sorted.

*[Screenshot: All Endpoints view — "Found 24 out of 19 results" — with filter "Endpoint Status = Connected, Disconnected". Table columns: ENDPOINT NAME, ENDPOINT TYPE, ENDPOINT STATUS, OPERATING SYSTEM, AGENT VERSION. Sample rows: ORG-20345 / Kubernetes Node / Connected / Ubuntu 24.04 LTS / 8.8.0.13395; DC-20361 / Server / Connected / Windows Server 2022 / 8.8.0.10422]*

### Other Endpoints Inventory

There are other endpoint views that allow you to not only track and get information on endpoints but also perform actions. In this example of the Agent Installations view, you can create and download agent installers.

*[Screenshot: Agent Installations view — "Found 7 results" — table with columns: CREATION TIME, STATUS, NAME, DESCRIPTION, ENDPOINT TAGS, TYPE, PLATFORM. Sample rows show entries with status "Completed" for names like standalone-vc2, standalone-kubernetes, CCE 47 test, XSIAM-Engineer-Windows, q-win-87523079, XSIAM-Engineer-Windows (x2), XSIAM-Engineer-Kubernetes. Types are "Standalone Installer" or "Kubernetes Installer". Platforms: Linux or Windows.]*

*[Screenshot: Left navigation panel showing sub-menu under Endpoints expanded to show: All Endpoints, Groups, Installations, Host Inventory, Host Firewall, Device Control Violations, Disk Encryption Visibility, File Integrity Monitoring]*

---

## Network Assets

A network asset is any IP addressable node in a computer network. A host computer and a router are examples of network assets.

### Network Asset Subtypes

A network asset is at minimum an IP-capable device on your network. There are a variety of assets; for example, apps on an endpoint can be considered host assets. In this lesson, assets refer to network assets. There are two subtypes of network assets: managed and unmanaged entities.

*[Diagram: Two side-by-side boxes. Left box (green border, green header): **Managed Assets** — "Managed assets are network assets on which Cortex XDR agents are installed." Right box (green border, green header): **Unmanaged Assets** — "Unmanaged assets are also network assets, but without the Cortex XDR agent."]*

---

## Network Assets Discovery

Cortex discovers all your network assets in your internal network. It combines user-defined network configuration with auto-discovery results from analysis of collected network logs.

### 1. Manual (User-Defined) Network Configurations

From the management console Network Configuration, define IP address ranges and domain names for your internal or external network.

*[Screenshot: Network Configuration panel showing IP Address Ranges section with sub-items: Internal IP Address Ranges, External IP Address Ranges, Internal Domain Suffixes]*

### 2. Automated Node Discovery

Cortex automatically extracts IP addresses and their IP networks from specific logs, including:

- Cortex XDR agent logs
- ARP cache
- Broker VM Network Mapper
- Windows DHCP Collector
- Pathfinder Data Collector
- Endpoint detection and response (EDR) data collected from firewall logs

**Note:** These log sources require different settings or configurations. For example, the Broker VM Network Mapper must be configured and enabled to send such logs used for network discovery.

---

## IP Address Ranges

The IP Address Ranges page in the management console allows you to define your IP address ranges in your internal network or external network. The IP Address Ranges table automatically includes well-known private IPv4 ranges and the Automatic Private IP Addressing (APIPA) range. When you add a new IP address range, the number of active assets and active managed assets will be automatically populated for that new range. Only IPv4 address ranges are supported. You can also load a range list from a file. A sample CSV file is provided in the Upload from File dialog.

### IP Address Range Key Attributes

Key attributes for an IP Address Range object includes:

| Attribute | Description |
|---|---|
| **Active Assets** | The number of all assets discovered in this IP range. |
| **Active Managed Assets** | The number of all managed assets discovered in this IP range. |

---

## Broker VM Network Mapper Configuration

This section shows how to configure the Broker VM Network Mapper to scan your user-defined IP address range.

### Configuration

The first step is to define your IP Address Ranges and then select one or more of your defined ranges during Network Mapper configuration.

*[Screenshot: Internal IP Address Ranges table showing columns RANGE NAME, FIRST IP ADDRESS, LAST IP ADDRESS. Rows include: 255.255.255.255 / 255.255.255 (highlighted); Documented Private Network / 240/0.0 / 254.252... ; IP Multicast / 224.0.0.0 / 239.255.255.255. "Configure Network Mapper" dialog open on the right with "Broker VM Settings" button highlighted, showing: Scan Method (ICMP echo / TCP SYN / Abort port), Scan Requests Per Second (Optional) field set to 1000, Scanning Schedule options (Run daily at time, Run weekly on a certain day and time, Run monthly on a certain date and time), Scanned Ranges field with "From asset 1026.1932.192.168.0.1/24" entered.]*

### Runtime

The Network Mapper scans your network to detect unmanaged hosts per IP address range selected. These unmanaged assets detected by Network Mapper are then displayed in the All Assets table.

---

## What Is the Vulnerability Assessment Feature?

Vulnerability Assessment is a component in the Host Insights add-on. This component finds Common Vulnerabilities and Exposures (CVEs) that may exist on installed applications and operating system (OS) kernels. Additionally, there is an Enhanced Vulnerability add-on license. The limitation of the standard Vulnerability Assessment for Windows is that it only scans the operating system kernel, not Windows applications. For Linux, both OS kernels and apps are scanned for CVEs.

The Vulnerability Assessment in the management console creates an alert when a new CVE is detected. View the following additional information about vulnerability assessments.

### CVE DB Updates

The CVE Database (DB) is a vulnerability and exposure database hosted by the National Institute of Standards and Technology (NIST) that is publicly available and updated regularly. Microsoft also maintains a CVE DB in Microsoft Security Response Center.

### CVE DB Periodical Search

The Cortex Vulnerability Assessment periodically searches CVE DBs for version numbers of applications and operating system kernels detected through the Host Insights component. The Cortex Vulnerability Assessment correlates the CVE DBs and the application/kernel patch list every four hours. If a new CVE is detected, the Cortex Vulnerability Assessment creates an alert only once per new CVE type.

### Report Potential Impact

The Cortex Vulnerability Assessment also reports the potential impact of each CVE using a standard vulnerability metric system known as the Common Vulnerability Scoring System (CVSS).

---

## Access Vulnerability Assessment Page

The Vulnerability Assessment page is under the Assets top menu in the management console. Note that there are two Vulnerability Assessments in the management console menu system. To access the Vulnerability Assessment page, navigate to **Posture Management > Vulnerability Management**.

*[Screenshot: Left navigation showing Posture Management expanded to: Vulnerability Management (selected), Compliance, Rules & Policies. Under Vulnerability Management sub-items highlighted: Vulnerability Issues, Vulnerable Assets, Vulnerabilities by CVE, Vulnerability Intelligence, Emerging Vulnerabilities]*

---

## Enhanced Vulnerability Assessment

Enhanced Vulnerability Assessment is an optional component in the Host Insights add-on license and is offered on a promotional basis.

### Enhanced Vulnerability Assessment Details

The Enhanced VA mode is available on Windows endpoints running Cortex XDR agent versions 8.3 and later, and macOS endpoints running Cortex XDR agent version 8.3 and later. This feature is not available for Linux (the standard vulnerability assessment currently scans installed applications for Linux).

- **Only for Windows and macOS** — Enhanced Vulnerability Assessment is only available for Windows and MacOS operating systems.
- **Currently Free with Host Insights** — On a provisional basis, the Enhanced Vulnerability Assessment feature is free with the Host Insights license.
- **Now showing CVEs for Applications** — The single largest change made to Enhanced Vulnerability Assessment is the ability to detect CVEs in installed applications.
- **Agent Requirements** — Enhanced Vulnerability Assessment is supported on 8.3+ Windows Agents and 8.3+ macOS agents.

### Enable Enhanced Vulnerability Assessment

To enable the Enhanced Vulnerability Assessment feature, navigate to **Settings > Configurations > Vulnerability Assessment > Enhanced VA Engine** and select **Enabled**.

*[Screenshot: Vulnerability Assessment settings panel showing "Enhanced Vulnerability Assessment Engine" toggle with description "XSIAM advanced algorithms and comprehensive core databases to do in-depth analysis and narrowed down on CVEs." Enhanced VA Engine toggle set to **Enabled**.]*

### Requirements for Enhanced Vulnerability Assessment

The Enhanced Vulnerability Assessment requires the Cortex XSIAM Host Insights add-on license.

Additionally, as with the normal Vulnerability Assessment, XDR Pro Endpoints Capabilities and Host Insight Capabilities must be enabled on the endpoints via their Agent Settings.

The settings are identical for macOS and Windows, though only Windows is shown here.

*[Screenshot: Agent Settings configuration showing XDR Pro Endpoints Capabilities and Host Insight Capabilities both set to "Use Server Default" with toggles visible.]*

---

## Knowledge Checks

### Section Knowledge Checks (Gray Bar / Submit-Show Feedback)

**Which application or device can use the IP Address Ranges defined in the Cortex management console?**
- Broker VM Network Mapper ✅
- Next Generation Firewall
- Cortex XDR Agent
- XDR Collector
- **Correct: Broker VM Network Mapper**

**Which component is needed for Cortex Vulnerability Assessment to be enabled?**
- Third-party threat intelligence integration
- Broker VM integration
- Host Insights add-on ✅
- Forensic add-on
- **Correct: Host Insights add-on**

---

### Numbered Quiz (5 Questions)

**Q1. The Cortex Vulnerability Assessment component regularly searches Common Vulnerabilities and Exposures (CVE) databases. How often does it correlate these CVE databases with the application and kernel patch lists to detect new vulnerabilities?**
- Every 24 hours
- Every 12 hours
- Every 8 hours
- Every four hours ✅
- **Correct: Every four hours**

**Q2. How is an unmanaged asset specifically characterized within Cortex?**
- A network device that is not actively transmitting data
- An endpoint without the Cortex XDR agent installed ✅
- Any cloud compute instance that lacks proper tagging
- A server operating outside a defined network segment
- **Correct: An endpoint without the Cortex XDR agent installed**

**Q3. What is the consolidated view in Cortex that integrates all on-premises and cloud assets called?**
- Aggregated Asset Overview
- Comprehensive Asset List
- Consolidated Asset Inventory
- Unified Asset Inventory ✅
- **Correct: Unified Asset Inventory**

**Q4. What specific action does the Network Mapper perform to detect devices within selected IP address ranges?**
- Monitors network traffic for suspicious patterns
- Scans the network to detect unmanaged hosts ✅
- Automatically configures new network devices
- Collects DHCP logs for IP address assignments
- **Correct: Scans the network to detect unmanaged hosts**

**Q5. In addition to the distributed network scan in the XDR Agent Settings profile, what discovery method is also used by Cortex?**
- Public internet scanning tools
- SNMP calls
- Broker VM Network Mapper ✅
- DNS reverse lookups
- **Correct: Broker VM Network Mapper**
