# Cortex: Cortex Platform Portfolio Overview

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Palo Alto Networks Cortex XDR

Cortex XDR enhances security capabilities through its unique features, such as breaking down data silos and utilizing global analytics for threat detection.

Click the tabs for more information about the key features of Cortex XDR.

### Breaking Down Data and Product Silos

Cortex XDR combines prevention, detection, and response across all data sources, offering powerful network visibility and custom network-based detection rules for Next-Generation Firewall (NGFW) customers.

### Global Analytics and Network Traffic Analysis

Cortex XDR leverages global analytics and network traffic analysis to detect stealthy attacks, such as supply chain attacks, by comparing anomalous behavior against peer environments.

The following describes how Cortex XDR can benefit organizations:

**Detecting Threats**
Cortex XDR employs behavioral analytics with machine learning, customizable detection utilizing agent telemetry, and vulnerability assessment for accurate threat detection. The platform stitches data together for a unified "story" analysis enriches with machine learning and behavioral analytics, and speeds up investigations with cross-data insights and issue grouping.

**Blocking Attacks**
Cortex XDR provides market-leading endpoint security with next-generation antivirus, device control, disk encryption, and host firewall capabilities. Furthermore, Cortex XDR provides artificial intelligence (AI)-driven local and behavioral analysis to block malware via the Cortex XDR Agent.

**Investigating Threats**
Cortex XDR enables root cause and timeline analysis, threat hunting, and integrated threat intelligence for quick and efficient investigations. The platform offers powerful network visibility and custom network-based detection rules for Next-Generation Firewall (NGFW) customers, helping analysts to investigate threats using cross-data analytics and network visibility.

---

## Cortex XDR Core Functions and Capabilities

Cortex XDR has the capability to stop modern attacks by integrating data from any source and leveraging expert-driven detection to protect your organization.

Cortex XDR is designed to provide a comprehensive security solution. Its primary goals are to:

*[Diagram: Three core goals shown as green highlighted boxes in a row:*
*1. **Prevent Known and Unknown Threats** — Proactively block threats before they can cause harm.*
*2. **Detect Advanced Threats** — Identify stealthy attacks using pre-built detection rules and advanced analytics.*
*3. **Reduce Investigation Time** — Significantly speed up the incident investigation process by up to 95 percent.]*

### Preventing Known Threats and Responding to the Unknown

Cortex XDR uses a powerful and multi-layered prevention stack to secure your environment against a wide range of attacks. Click the arrows for more information about Cortex XDR's threat prevention capabilities.

**The Cortex XDR Agent**
At the heart of the prevention capability is the Cortex XDR agent. This agent is designed to block various types of attacks directly on the endpoint, including:
- Exploits
- Malware
- Ransomware
- Fileless attacks

**Behavioral Threat Protection**
The platform's prevention capability is driven by a sophisticated Behavioral Threat Protection engine. Instead of focusing on individual files or processes, it examines the behavior of multiple related processes simultaneously, uncovering complex attacks as they unfold.

**WildFire Malware Prevention**
Cortex XDR is fully integrated with WildFire, Palo Alto Networks' cloud-based malware prevention service. WildFire is the industry's largest, most integrated malware prevention engine, utilizing patented machine-learning models to provide real-time detection of previously unseen, targeted malware and advanced persistent threats. An adaptive, AI-driven local analysis engine continuously learns to counter new attack techniques, including those used by adversaries.

---

## Detecting Advanced Threats

For attacks that manage to bypass initial prevention layers, Cortex XDR employs advanced analytics and AI to detect stealthy and subversive threats within your environment.

**Analytics and AI**
The platform uses analytics and artificial intelligence (AI) to identify threats that may otherwise go unnoticed. This is demonstrated through analytics alerts that can pinpoint suspicious activity.

**Built-in Detection Rules (BIOC)**
Cortex XDR comes with hundreds of Behavioral Indicators of Compromise (BIOC) rules that are automatically updated. This ensures your defenses are always current without the need for any manual intervention. The rules are based on more critical focus. The system can detect activities such as:
- Uncommon and group separations
- Unsigned processes injecting into system binaries
- Suspicious disabling of the Windows Firewall
- Suspicious local user account creation

---

## Reduced Investigation Time

One of the most powerful features of Cortex XDR is its ability to dramatically simplify and accelerate incident investigations.

**Automated Data Correlation**
Cortex XDR automatically stitches together data from endpoints, networks, the cloud, and identity services. This creates a complete picture of an attack without requiring manual correlation.

**Integrated Threat Intelligence**
Threat intelligence from WildFire and VirusTotal is automatically integrated into the incident view. This enriches the data available to analysts, saving them time and reducing the need for manual lookups.

**Incident Grouping**
Instead of overwhelming analysts with thousands of individual alerts, Cortex XDR groups related alerts into a single incident. This can reduce the number of items to review by up to 98%. Each incident provides a comprehensive overview, including:
- Key artifacts involved in the attack
- Threat intelligence details
- A visual attack timeline

---

## Palo Alto Networks Cortex XSOAR

Cortex XSOAR is a security orchestration, automation, and response (SOAR) platform that unifies case management, automation, real-time collaboration, and threat intel management to serve security teams across the case lifecycle.

With Cortex XSOAR, security teams can standardize processes, automate repetitive tasks, and manage cases across their security products to improve response time and analyst productivity.

Cortex XSOAR ingests aggregated issues and indicators of compromise (IoCs) from detection sources, such as SIEM solutions, network security tools, threat intelligence feeds, and mailboxes. After data ingestion, Cortex XSOAR can execute automatic, process-driven playbooks to enrich and respond to these cases. These playbooks coordinate across technologies, security teams, and external users for centralized data visibility and action.

*[Diagram: Cortex XSOAR architecture showing 1,000+ integrations feeding in from the left (various product logos), flowing into the XSOAR central platform, which outputs to collaboration tools and case management on the right.]*

### Why Cortex XSOAR

Cortex XSOAR offers a comprehensive solution for organizations facing the challenges of modern cybersecurity operations. The platform is designed to enhance the efficiency, effectiveness, and scalability of SOCs.

Key benefits:

**Improve SOC Efficiency by Automating Case Response**
Automated case response workflows from a centralized multi-tenant SOAR can join integrations and playbooks to orchestrate case response across an organization's SOC, network security, secure access service edge (SASE), and cloud environments.

**Enterprise-Ready Performance and Scalability**
- Cloud-native XSOAR auto-scales to support future growth
- Rapid deployment accelerates return on investment (ROI)
- Delivery from a unified interface that integrates across the Cortex platform for best-in-class workflow management

**Ingest, Search, and Query all Security Issues**
Unify issues, cases, and indicators from any source into a single platform for lightning-quick analyst investigation and response.

**Speed Remediation with Integrated Case Management**
Built-in collaboration functions such as War Room for every case, ChatOps, and integrations with customer success management (CSM) tools enables teams to manage the full case lifecycle in a single location.

**Operationalize Threat Intelligence**
Unify aggregation, scoring, and sharing threat intelligence with playbook-driven automation with native threat intelligence management.

---

## Common Cortex XSOAR Use Cases

The following are common use cases where Cortex XSOAR may provide the most value to SOC teams.

| Use Case | Description |
|---|---|
| **Phishing Enrichment and Response** | Reduce false positives and standardize responses, giving analysts time to address priority attacks to and avoid material financial damage. |
| **Malware Investigation and Remediation** | Ingest data from enriched cases, terminate malicious processes, and update databases with new indicators to eliminate repeat offenses. |
| **Vulnerability Issue Management** | Automate vulnerability enrichment and redirect an analyst's time from executing repetitive tasks to making critical decisions. |
| **Threat Intelligence Management** | Operationalize access to and sharing of threat intelligence on enrichment, analysis, and distribution. |
| **Network Security** | Orchestrate actions across the network security stack and other security tools, streamlining operations and facilitating communication. |
| **Cloud Security** | Unify processes across infrastructures to provide a single console to execute case responses. |

---

## What Is Cortex XSIAM?

In addition to what you have learnt about Cortex XDR and Cortex XSOAR (in this course), you may also be familiar with a number of other security product categories, such as Attack Surface Management (ASM) and Threat Intel Management (TIM). Cortex XSIAM merges all the key components used in the modern SOC, providing a single platform to manage all the security needs of an organization.

Cortex XSIAM is a cloud-delivered, integrated SOC platform that unifies key functions, including EDR, XDR, SOAR, ASM, user and entity behavior analytics (UEBA), TIM, and SIEM. XSIAM customers can consolidate multiple products into a single, integrated platform, which can help cut costs, improve operations, and increase analyst productivity. XSIAM defines an intelligent data foundation that can easily integrate telemetry from any source, providing unified security operations across any hybrid IT architecture.

*[Screenshot: Cortex XSIAM platform icon — circular green Cortex logo centered, with "CORTEX XSIAM" text below, surrounded by connection lines representing converged product capabilities. "Cortex Cloud" label visible at side.]*

### The Cortex XSIAM Solution

Cortex XSIAM centralises all the security data of the organisation and uses machine-learning data models designed specifically for security analysis. XSIAM automates data integration, analysis, and response actions. This leaves the most important, actionable cases for the analysts to handle.

The following are the key differentiators of the Cortex XSIAM platform.

---

## XSIAM Use Cases

Cortex XSIAM technology merges the following capabilities and features into a single cohesive experience. It can autonomously handle an enormous number of issues and allows analysts to perform most of their work from within a single product.

Key features and capabilities of XSIAM technology:

**Security Information and Event Management (SIEM)**
Delivers all common SIEM functions, including log management, correlation and alerting, reporting, and long-term data retention.

**Extended Detection and Response (XDR)**
Provides telemetry from any source for unrivaled detection coverage and accuracy, with the highest number of technique-level detections in the 2022 MITRE ATT&CK evaluations.

**Attack Surface Management (ASM)**
Provides embedded attack surface management (ASM) capabilities for an attacker's view of your organization, with asset discovery, vulnerability assessment, and risk management.

**Security Orchestration, Automation, and Response (SOAR)**
Automates virtually any use case with hundreds of built-in playbooks and offers customization with a visual drag-and-drop editor.

**Threat Intelligence Platform (TIP)**
Aggregates, scores, and distributes threat intelligence data, including the industry-leading Unit 42 threat feed, to provide early tools and enriches issues for faster investigations.

**Endpoint Protection Platform (EPP)**
Prevents endpoint attacks with a proven endpoint agent that blocks exploits, malware, and fileless attacks and prevents ransomware to deliver the industry's best protection.

**Management, Reporting, and Compliance**
Simplifies operations, centralizing all configuration, monitoring, and reporting functions, including endpoint policy management, orchestration, and response.

### Converged Platform

- The convergence of SOC capabilities such as XDR, SOAR, and SIEM into a single platform is a game changer for security operations.
- It eliminates the hassle of console switching, providing a streamlined experience. The platform offers broad integration support, making it easier to onboard various data services without the need for extensive engineering and infrastructure work. This allows SOCs to effortlessly ingest more data, enhancing their analytical capabilities.
- The platform ensures continuous collection, enriching, and normalization of raw data, going beyond just issues. This empowers SOC teams with superior security analytics, enabling them to proactively identify and mitigate threats effectively.

### Stop Threats at Scale with AI-Driven Outcomes

- The out-of-the-box precision AI models go beyond traditional methods, connecting events across various data sources and offering a comprehensive overview of cases in a single location. This empowers organizations to enhance their detection, analysis, and response capabilities.
- By leveraging issue grouping and AI-driven case scoring, XSIAM seamlessly connects low-confidence events, transforming them into high-confidence cases. The prioritization is based on the overall risk, enabling security teams to focus their efforts efficiently.

### Accelerate Case Remediation with an Automation-First Approach

- Organizations can optimize the way tasks are performed using the hundreds of tried and tested content packs in the Cortex Marketplace.
- By automating previously manual tasks, these packs save time and effort. Organizations will have the flexibility to add, customize, or modify automations according to their specific needs.
- The platform features issue-specific playbooks that trigger automatically, ensuring security tasks are executed promptly, even before an analyst gets involved.
- XSIAM learns from manual analyst actions and provides recommendations for future automations. This continuous learning process enhances the platform's ability to automatically resolve cases, improving efficiency and accuracy over time.

---

## Introducing Cortex Cloud

This lesson describes the security challenges SOC analysts face responding to cloud-based attacks, and how Cortex Cloud addresses these challenges with its Application Security, Cloud Posture Security, Cloud Runtime Security, and Cloud SOC functionalities.

### Current Cloud Security Challenges

As businesses move to the cloud and increasingly leverage AI for enhanced productivity, the required infrastructure and processes become more complex. The added complexity introduces numerous new security risks.

These are a few challenges businesses face:

| Challenge | Description |
|---|---|
| **Cloud Adoption Challenges** | As businesses migrate to the cloud for speed and productivity, the reliance on cloud services escalates, posing new security risks that outpace traditional tools. |
| **AI as the Future Driver** | The future of cloud computing hinges on AI, with businesses recognizing it as a key competitive advantage. Compliance and AI are expected to support 85 domains, emphasizing the necessity for enhanced security measures. |
| **Security Vulnerabilities in Cloud Environments** | Cloud environments face a stream of security risks, which evolve monthly, posing challenges for security teams. | 
| **Increased Speed of Attacks vs Response Time** | Adversaries accelerate cyber attacks as security teams lag to respond, taking around 40 hours to resolve issues, leading to critically-limited prevention. Faster detection and response are essential in cloud security. |

*Source: Palo Alto Networks, Cortex Cloud at a Glance, 2025*

### Cortex Cloud Platform

To address the growing security challenges organizations face in the cloud, the Cortex platform offers Cortex Cloud, a unified cloud security platform that integrates the Cortex and Prisma Cloud capabilities to provide comprehensive, real-time security from code to cloud to SOC.

**Unified Cortex Platform**
Palo Alto Networks has transitioned its cloud security capabilities into Cortex, a move aimed at enhancing all aspects of cloud security. With this merging of the Cloud Native Application Protection Platform (CNAPP) and cloud security operations previously known as Prisma Cloud, Cortex Cloud is designed to streamline operations and improve efficiency. Cortex Cloud takes a preventive approach to cloud security, powered by leveraging unified data, artificial intelligence and automation. This enables users to promptly investigate, automate, and mitigate high-priority security issues, ultimately strengthening overall cybersecurity posture.

*[Screenshot: Cortex Cloud platform UI dashboard — dark-themed interface showing cloud resource inventory map, security metrics, and alert panels with green/orange status indicators.]*

---

## Cortex Cloud Core Capabilities

Cortex Cloud defends both cloud and endpoint security with its unified agent. Its AI-ready data and MITRE ATT&CK technique-level detection coverage provides maximum threat visibility. Key capabilities include:

*[Diagram: Four capability pillars shown as circular icons in a row:*
*1. **Application Security** — Detects code and deployment vulnerabilities before they reach production.*
*2. **Cloud Posture Security** — Correlates, automates, and scales cloud security to measurably improve detection, prioritization, and remediation of cloud risks.*
*3. **Cloud Runtime Security** — Prevents known and unknown threats with elite threat intelligence and runtime protection.*
*4. **Cloud SOC** — Speeds up response times, reduces analyst workloads, and enables security teams to act with confidence and precision.]*

### Exploration of Cortex Cloud's Capabilities

Let's dive deeper into each of the key Cortex Cloud areas.

---

## Application Security

Modern cloud-native development moves fast, and security must keep pace. Frequent code deployments, decentralized engineering ecosystems, and fragmented security tools make it challenging to detect, prioritize, and remediate risks effectively.

### Build Secure Apps and Prevent Issues Before They Become Threats

Cortex Cloud integrates with engineering ecosystems to secure applications and prevent risks into the lifecycle by combining leading AppSec tools with third-party scanners for full risk context. The following are key benefits of Cortex Cloud Application Security:

**Contextual Visibility**
Application Security Posture Management (ASPM) provides visibility across AppSec tools and third-party scanners for consistent security across the lifecycle.

**Ecosystem Security**
Secure the engineering ecosystem: code, supply chain, and tools from a single platform.

**Agile Guardrails**
Prevent risks from reaching production with agile guardrails that enable developers to automatically apply best practices from within native developer tools.

**Risk Management**
Manage risks with correlated context from code, pipelines, runtime, and applications, prioritizing based on exploitation probability and business impact.

---

## Cloud Posture Security

Modern cloud environments are complex, and security teams struggle with fragmented tools, manual issue management, and slow risk resolution.

### Prioritize and Remediate Risks from Code to Cloud with AI-Powered Cloud Posture

Cortex Cloud leverages Precision AI as a unified inventory of your cloud environment to prioritize risks and identify attack paths. This AI-driven approach enables, consolidated actions for efficient risk mitigation, resulting in a 25x reduction in alerts and remediation workflows.

*[Diagram: Three-step workflow showing: "See everything across your cloud" (icon: cloud grid) → "Prioritize risks and reduce noise with Precision AI" (icon: funnel/filter) → "Remediate all related issues with one fix" (icon: wrench/tools). Bottom banner reads: "25x reduction in alerts and remediation workflows."]*

---

## AI-Driven Security Feature (Cloud Posture)

Cortex Cloud centralizes, automates, and scales cloud security to measurably improve the detection, prioritization, and remediation of cloud risks. Key features include:

| Feature | Description |
|---|---|
| **Comprehensive View** | Gain a full view of your cloud infrastructure: compute, identities, data, and AI components. |
| **Attack Path Detection** | Detect attack paths with correlated misconfigurations, vulnerabilities, identity risks, and more. |
| **Intelligent Risk Correlation** | Consolidates issues into fully contextualized, high-priority cases with AI risk correlation. |
| **Compliance and Reporting** | Eliminate compliance complexity, generate audit-ready reports, and simplify monitoring posture. |
| **Capability Consolidation** | Consolidates capabilities typically found in Cloud Security Posture Management (CSPM), Cloud Infrastructure Entitlement Management (CIEM), Artificial Intelligence Security Posture Management (AI-SPM), and vulnerability management (VM). |

---

## Cloud Runtime Security Features

Cloud Runtime Security offers the following:

**Cloud Workload Protection (CWP)**
CWP enhances cloud visibility, analyzes vulnerabilities, and ensures compliance.

**Web App & API Security (WAAS)**
Cortex's Web Application and API Security features ensure only authorized access, enhanced security beyond firewalls, and protect data.

**Cloud Detection & Response (CDR)**
CDR, enabled by Cortex XDR Agent for Cloud, provides advanced threat detection, automated response, and AI analytics for cloud environments, including threat hunting.

---

## Cloud SOC

In today's rapidly-evolving cybersecurity landscape, organizations face the critical challenge of reducing the mean time to detect and respond to threats in the cloud environment. Currently, the process often spans days to weeks, resulting in potentially detrimental consequences.

### A Single Unified Console

In addition to Runtime Security capabilities, which prevent cloud users from accessing the tenants, the platform utilizes detection to organize issues and automate responses by feeding this information back to the SOC for enhanced visibility and control. Through a single unified strategy, security teams can effectively detect, prioritize, filter, test, and automate responses.

*[Screenshot: Cloud SOC unified console showing a detection/response workflow diagram with MITRE ATT&CK stages across the top. Metrics shown: "2,345" alerts processed, "193" incidents grouped, funnel showing prioritization, automated response actions labeled at right. Key outcome: "Automate response / Reduce MTTx minutes, not days." Additional callout: "Prioritize risk / Focus on the few that matter most."]*

### AI-Powered Prevention and Detection of Attacks

To streamline the process to keep industries, effectively reduce the mean time to detect and respond in the cloud, and transform the SOC into a real-time entity, Cloud SOC speeds up response times, reduces analyst workloads, and enables security teams to act with confidence and precision with features like SmartScoring and SmartGrouping.

**SmartScoring**
SmartScoring helps prioritize the critical cases.

**SmartGrouping**
SmartGrouping aggregates and groups issues from source data to correlate and prioritize remediation.

### Automation-First Response for Cloud Attacks

Cortex Cloud prioritizes automated response to cloud attacks, enabling near real-time security functions. Organizations can instantly deploy over a thousand run-all the-line automations and playbooks, streamlining response to risks in code, cloud, and endpoint environments within minutes. Suggested playbooks simplify security operations and leverage insights from past cases to continuously enhance future automated responses.

*[Diagram: Circular automation lifecycle — "Automate and fix-all with playbooks" → "Continuously suggest and use AI-playbooks to run automation" → "Take actions to remediate risks in code, cloud, or contain runtime threats" → "Learn and adapt from previous threats to improve future automation." Arrows indicate a continuous improvement loop.]*

---

## Knowledge Checks

**Q1. Which Cortex XSOAR use case provides the most value to Security Operations Center (SOC) teams?**
- Replacing IT ticketing solutions
- Automating phishing responses ✅
- Developing new marketplace content
- Orchestrating tasks across multiple clouds
- **Correct: Automating phishing responses**

**Q2. Which statement describes the main challenge that most Security Operations Centers (SOC) face when using traditional SOC tools?**
- Lack of visibility into endpoint behavior in the EDR solution
- Failing to maintain compliance with external security audits
- Sorting through multiple data silos manually to identify threats ✅
- Inability to track insider threats through role-based access controls
- **Correct: Sorting through multiple data silos manually to identify threats**

**Q3. What is the most notable way in which Cortex XSIAM uses machine learning (ML) and artificial intelligence (AI)?**
- Builds new playbooks using Copilot AI to address gaps in the automated remediation steps
- Applies pattern recognition on large amounts of ingested data and positions the analyst to make important high-level decisions ✅
- Generates Cortex Query Language (XQL) commands based on the data gathered from the incident for threat hunting activities
- Gathers data on manual analyst action on an incident and resolves future incidents of similar type by executing the same action automatically
- **Correct: Applies pattern recognition on large amounts of ingested data and positions the analyst to make important high-level decisions**

**Q4. Which Cortex XDR function has the largest impact in reducing investigation time of security incidents?**
- Supports creating custom correlation rules
- Prioritizes alerts based on predefined severity levels
- Stitches data from multiple sources together to form a unified story ✅
- Allows for centralized management of security policies across endpoints
- **Correct: Stitches data from multiple sources together to form a unified story**

**Q5. Which statement best describes how Cortex XSIAM can help save costs for organizations?**
- Automates deduplication of ingested data
- Centralizes reporting of compliance requirements
- Provides In-house Unit 42 threat research and feed
- Consolidates multiple security products into a single platform ✅
- **Correct: Consolidates multiple security products into a single platform**
