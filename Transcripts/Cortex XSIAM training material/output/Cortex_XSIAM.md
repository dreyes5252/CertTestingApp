# Cortex XSIAM

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What is Cortex XSIAM?

Cortex XSIAM merges eight siloed security products into a single product capable of performing functions within all eight discrete spaces, creating a whole that is greater than the sum of its parts.

Cortex XSIAM, or extended security intelligence and automation management, is a cloud-delivered, integrated SOC platform that unifies key functions, including EDR, SIEM, SOAR, ASM, UEBA, TIP, CDR, and NTA. XSIAM customers can consolidate multiple products into a single, integrated platform, which can help cut costs, improve operations, and increase analyst productivity. XSIAM delivers an intelligent data foundation that can easily integrate telemetry from any source, providing unified security operations across any hybrid IT architecture.

*[Diagram: Circular XSIAM hub graphic showing eight capability segments arranged around the Cortex XSIAM logo: Communication & Automation, Endpoint Protection & Intelligence, Threat Intel Management, Reporting & Compliance, Data Foundation & Detection Analytics, Attack Surface Management, Network Detection & Response (NDR), and UEBA. Illustrates convergence of eight SOC disciplines into one platform.]*

The following are the key differentiators of the Cortex XSIAM platform.

### Converged Platform

- The convergence of SOC capabilities such as XDR, SOAR, and SIEM into a single platform is a game-changer for security operations.
- It eliminates the hassle of console switching, providing a streamlined experience. The platform offers broad integration support, making it easier to onboard various data sources without the need for extensive engineering and infrastructure work. This allows SOCs to effortlessly ingest more data, enhancing their analytical capabilities.
- The platform ensures continuous collection, stitching, and normalization of raw data, going beyond just alerts. This empowers SOC teams with superior security analytics, enabling them to proactively identify and mitigate threats effectively.

### Stop Threats At Scale with AI-Driven Outcomes

- The out-of-the-box precision AI models go beyond traditional methods, connecting events across various data sources and offering a comprehensive overview of incidents in a single location. This empowers organizations to enhance their detection, analysis, and response capabilities.
- By leveraging alert grouping and AI-driven incident scoring, XSIAM seamlessly connect low-confidence events, transforming them into high-confidence incidents. This prioritization is based on the overall risk, enabling security teams to focus their efforts efficiently.

### Accelerate Incident Remediation with an Automation-First Approach

- Organizations can optimize the way tasks are performed using the hundreds of tried and tested content packs in the Cortex Marketplace.
- By automating previously manual tasks, these packs save time and effort. Organizations will have the flexibility to add, customize, or modify automations according to their specific needs.
- The platform features alert-specific playbooks that trigger automatically, ensuring security tasks are executed promptly, even before an analyst gets involved.

---

## XSIAM Product Components

The XSIAM product comprises several components, setting it apart from some competitors who offer only a subset of these components. Click the tabs to learn more.

Cortex XSIAM can improve efficiencies that security leaders are concerned about.

### Tab: Improve analyst experience and increase productivity by eliminating security silos

### Tab: Uncover advanced attacks with behavioral analytics and industry-leading threat intelligence

### Tab: Easily onboard new data sources

### Tab: Connect tools and orchestrate response with 600+ product integrations

### Tab: Speed up investigations with intelligent alert grouping and SmartScore

### Tab: Lower risk with attack surface management and internal asset discovery

### Tab: Take the guesswork out of response with remediation suggestions

### Tab: Extend detection, monitoring, and investigation to the cloud

---

## Consolidation, Integration, and Efficiency

### Consolidation

XSIAM customers can consolidate multiple products into a single, integrated platform, cutting costs, improving operations, and increasing analyst productivity.

### Integration

XSIAM delivers an intelligent data foundation that can easily integrate telemetry from any source, providing unified security operations across any hybrid IT architecture.

### Efficiency

XSIAM delivers a transformation in detection and response, analyst experience, and continuous risk reduction.

---

## Inefficient vs. Efficient SOC Model

*[Diagram: Two inverted pyramid comparison. Left pyramid labeled "Inefficient" — from bottom to top: Analyst (large yellow layer), Detection, Investigation, Response (yellow), Analytics (AI/ML) (yellow), Automation (small dot at top). Right pyramid labeled "Efficient" — from bottom to top: Automation (large green layer), Analytics (AI/ML) (green), Detection, Investigation, Response (green), Analyst (small dot at top). The contrast illustrates that in an inefficient SOC the human analyst carries most of the load, while an efficient XSIAM-driven SOC inverts the pyramid so automation handles the bulk of work and the analyst focuses only on high-value tasks.]*

---

## Cortex XSIAM Architecture

In order to understand the benefits of Cortex XSIAM, it is important to know how it works from a high-level architectural standpoint.

*[Diagram: High-level architecture diagram. At the top: "Cortex XSIAM" logo with three sub-modules beneath it: "Threat Intel Management", "Automation", and "Attack Surface Management". Below these modules is the "XSIAM Data Layer" (depicted as a cloud). Feeding into the XSIAM Data Layer is the "Cortex Native Data Lake" (another cloud). On the left, a small Cortex icon (labeled with "n") feeds into the XSIAM Data Layer via a dotted arrow. Inside a dashed orange rectangle labeled "PANW Sources" are icons for: XDR agent (Q×), an additional Cortex icon, IoT, NGFW, VM-Series, and GP (GlobalProtect). To the right of the PANW Sources box: "Endpoint" icon and "Third-Party Data" icon, both feeding upward via green dotted arrows into the XSIAM Data Layer.]*

### Log Sources

Some of the potential log sources are inside the XSIAM architecture such as Next-Generation Firewall, GlobalProtect, and Prisma Access which send their logs directly to the Cortex Native Data Lake. However, if there is already an existing Cortex Data Lake, XSIAM is able to ingest logs directly from that.

### XDR Agents

XDR agents will send all endpoint-related telemetry data to the XSIAM data layer.

### Third-Party Data

XSIAM is also capable of collecting third-party data using Broker VM, XDR collector, or HTTP collector. It is also capable of collecting logs from cloud vendors such as Amazon Web Services, Google Cloud Platform, Azure, etc.

### Threat Intel Management (XSIAM Add-On)

Cortex XSIAM automates threat intel management by ingesting and processing indicator sources, such as feeds and lists, and exporting the enriched intelligence data to SIEMs, firewalls, and any other systems that can benefit from the data.

### Attack Surface Management (XSIAM Add-On)

XSIAM enables organizations to analyze their environment from the outside, which enhances the existing internal access to the environment provided with an installed agent. This improves the visibility of their environment by attributing new assets to the organization, identifying which known assets are publicly exposed to the internet, and alerting on risky services that pose a threat to the organization's security posture.

---

## Knowledge Checks

### Section Knowledge Check A — SIEM Capabilities (Choose two.)

**Q1. What are two primary capabilities of SIEM? (Choose two.)**
- Blocking malicious file execution
- Preventing network access
- Event correlation ✅
- Assessing file integrity
- Security monitoring ✅

**Correct: Event correlation; Security monitoring**

---

### Section Knowledge Check B — XSIAM Capabilities (Choose four.)

**Q2. Which four are capabilities of XSIAM? (Choose four.)**
- XDR ✅
- SIEM ✅
- CDR ✅
- SOAR ✅
- Network access control
- Intrusion prevention systems

**Correct: XDR, SIEM, CDR, SOAR**

---

### Section Knowledge Check C — Describe XSIAM (Choose two.)

**Q3. Which two statements best describe XSIAM? (Choose two.)**
- An AI-driven security operations platform ✅
- A robust cyber security solution that adds an extra layer of security
- A security device that protects your internet network by filtering unknown traffic.
- An autonomous SIEM and XDR ✅

**Correct: An AI-driven security operations platform; An autonomous SIEM and XDR**

---

### Numbered Quiz — Question 5 of 10

**Q4. (Question 5 of 10) Which challenge is often associated with a SIEM?**
- It displays a large number of false positives ✅
- The correlation engine constantly requires restarting
- There is too much information on each issue
- It prevents too many processes from running

**Correct: It displays a large number of false positives** *(Score: 1)*
