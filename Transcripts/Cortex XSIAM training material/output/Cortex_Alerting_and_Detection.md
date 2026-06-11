# Cortex: Alerting and Detection

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cortex Threat Protections

As a cybersecurity threats consistently evolve and grow in complexity, a powerful threat detection strategy is essential for organizations to safeguard their digital assets. Cortex plays a pivotal role in reinforcing an organization's ability to detect and respond to security threats effectively by combining endpoint protection, network security, and advanced threat intelligence. It serves as the cornerstone of a modern threat detection strategy, allowing organizations to proactively identify, investigate, and mitigate a wide range of cybersecurity threats.

Cortex provides a foundation that links security applications in Cortex XSIAM and comprehension of threat detection standards.

### Threat Visibility

Cortex provides organizations with visibility into their most critical environments, offering real-time data insights into the activities and behaviors of devices, applications, and users on their enterprise networks. This visibility allows security teams to detect any suspicious activities or security threats promptly, and it helps them monitor the health and status of all endpoints and tools within their environment.

### Behavioral Analytics

Cortex incorporates advanced behavioral analytics to assess user and machine activities, using machine learning algorithms that look for anomalies in user behavior and machine operations, to enhance threat detection and alert security teams when there are deviations from baselines, when users attempt to access sensitive resources at unusual times, or engage in suspicious behaviors. It makes it easier to spot hidden threats that endpoints alone may not be able to.

### Endpoint Protection

Cortex offers endpoint protection by collecting, protecting, and analyzing a wide range of device or appliances. A device or appliance is any networked hardware that plays a critical role in maintaining your security posture. Cortex can detect malware across multiple endpoint types to protect organizations from today's widest array of cybersecurity threats, enabling thorough threat assessment and facilitating swift response to contain the latest threat combinations.

### Network Security Integration

While Cortex seamlessly integrates with Palo Alto Networks network-security solutions, it also can ingest events, issues, and logs from almost any network device. This provides a unified defense-in-depth approach. It correlates network and endpoint data to detect lateral movement, command-and-control communications, and other indicators of advanced threats.

### Incident Investigation

In the event of a security incident, Cortex simplifies the investigation process with detailed forensics and threat-hunting capabilities. Security teams can analyze incidents, determine the scope of the threat, and take immediate action to remediate.

### Threat Intelligence

Palo Alto Networks continuously feeds Cortex with the latest threat intelligence (TI), ensuring that organizations are equipped to defend against evolving threats. This threat intelligence is derived from global sensors, threat research teams, and industry partnerships. Cortex also integrates and manages threat intelligence from almost any trusted TI source.

### Scalability

Cortex is designed to scale with the organization's needs, whether it's a small business or a large enterprise. It adapts to the dynamic nature of modern networks and accommodates growth.

### Attack Surface Management

Cortex provides an add-on attack surface management (ASM) with capabilities that provide an attacker's view of your organization along with asset discovery, vulnerability assessment, and risk management.

---

## Coverage of MITRE ATT&CK Tactics

Cortex covers multiple vulnerability areas that malicious actors might attempt to target.

The following vulnerability areas fit into the MITRE ATT&CK framework. These do not cover the entire MITRE framework.

### Execution

Attackers, once inside the network, deploy various methods to run malicious code on local or remote endpoints; the Cortex app counters this by detecting malware through network activity analysis, the Pathfinder data collector, Cortex agent data, and the evaluation of suspicious files using WildFire.

### Persistence

Attackers aim to maintain network or endpoint access for malicious actions, employing tactics like system restarts or configuration changes; this requires the endpoint to restart a remote access tool or open a back door for the attacker, which the app identifies.

### Discovery

Attackers with network access use discovery techniques to locate subnets, servers, and services on endpoints, seeking vulnerabilities; the app spots these tactics by monitoring internal network traffic for changes in connectivity patterns and unusual connection sites.

### Lateral Movement

To expand within a network, attackers can attempt to gain control over additional data access, detected by the Analytics Engine through hunting of administrative operations, the share access, and non-common and credential usage.

### Command and Control

Attackers employ various commands to exfiltrate or update and control of the malice artifact; the Analytics Engine identifies by flagging the Doman Name System (DNS) traffic, and processes with distinct ports (like 1921/3998) behavioral communication patterns in compressed DNS behavior.

### Exfiltration

Exfiltration tactics involve stealing data from a network, with the app identifying these attacks by monitoring outbound connections, particularly focusing on data transfer volumes, with increases indicating potential data exfiltration.

---

## Detection Rules and Analytics Use Cases

Detection rules can identify specific threat indicators and patterns of malicious activity. They typically consist of a set of conditions that must be met for a potential threat to be identified. For example, a detection rule may trigger an issue if a user attempts to access a sensitive resource outside of business hours.

### Detection Rule Use Cases

#### Threat Detection

Detection rules can be created to identify specific threat indicators or patterns of malicious activity. For instance, you can create rules to detect known malware signatures, anomalous network traffic, or suspicious behavior on endpoints.

#### Insider Threat Detection

Detection rules can help in identifying any suspicious activity or data exfiltration attempts by insiders. By monitoring user behavior and enforcing policies, you can create rules to flag any unauthorized access or unusual data transfers.

#### Compliance Monitoring

Detection rules can be used to ensure compliance with industry regulations or internal security policies. For example, you can create rules to detect unauthorized access attempts, insecure configuration settings, or data breaches.

#### Case Response

Detection rules play a crucial role in case response by rapidly identifying and alerting on potential security incidents. By monitoring for specific indicators or attack patterns, you can quickly detect and respond to security breaches or anomalies.

---

## Issues Versus Cases

To understand alerting and detection in Cortex, it is important to know the difference between issues and cases.

### Issues

In Cortex, issues are notifications generated when specific security events or conditions are detected such as potential security threats or anomalies. They serve as early indicators of security issues or unusual activity in your environment, highlighting events that deviate from regular behavior. When an issue is triggered, it can initiate an investigation process, with security analysts tasked to assess its significance and determine whether it signifies a genuine security threat or is an informational event. Issues can have various statuses (e.g., open, acknowledged, or resolved), allowing for tracking of the investigation's progress.

### Cases

Cases can be seen as a higher-level classification of security events. These cases often encompass multiple related issues and address more extensive security issues. Their primary function is to group and coordinate related issues or events that together constitute a significant security breach or problem. Cases represent broader and more complex security challenges, necessitating a coordinated and structured response. When a collection of related issues forms a case in Cortex, it triggers a more comprehensive response strategy that may include containment and eradication efforts. A well-defined case response plan guides actions in this context, and cases may also have various statuses (e.g., open, active, resolved) to monitor and manage the case response process effectively.

---

## Similarities and Differences

While issues and cases have some similarities, the differences within Cortex are notable. Click the tabs to compare issues and cases.

### Similarities Tab

- Both are integral components of the system's security monitoring and response framework.
- Both necessitate some human involvement, with security analysts playing a central role in investigating issues, validating cases, and coordinating appropriate responses. To be most effective, Cortex should be used to reduce human involvement as much as possible through artificial intelligence (AI), machine learning (ML), and automation.

### Differences Tab

- In terms of scope, issues represent individual security events or conditions, whereas cases aggregate multiple related issues to address more extensive and complex security challenges.
- The response intensity varies; issues in Cortex often involve validating the issues themselves, whereas cases demand a comprehensive and structured response that may require the coordination of multiple teams and a range of actions.
- Cortex's documentation for cases is more detailed, covering aspects such as the breach's origin, impact assessment, containment strategies, recovery plans, and lessons learned.
- Cortex may offer aggregation functionality, enabling the grouping of multiple related issues into cases when they indicate a shared security issue.

---

## What Is a Use Case?

A use case can be anything that adds security value, starting with prevention as the most important goal and ending with telemetry data that provides insight. When we talk about traditional security information and event management (SIEM), that technology is designed to alert when the policies, guidelines, or security controls are circumvented, allowing a potential attack to happen. The use case is the description of what it is that the SIEM should be alerting on.

Use cases can be specific or at a higher level. For example:

- **High Level:** Protecting against insider threats
- **Specific:** A specific action covers more specific amounts of data to outside networks that are outside of normal parameters

High-level use cases are often used to better understand what specific security topics you should be creating multiple use cases around. It can also help users understand the SIEM's scope of protection. Often, the high-level use cases are more of a business case and need to be further understood through more granular use cases.

### Why Is a Use Case Important for Traditional SIEM?

A use case is important for traditional SIEM for the following reasons:

**Defining:** They ultimately define what the SIEM is trying to protect and alert against.

**Customization:** Security teams can customize their SIEM to protect against what they perceive to be their biggest threats, using use cases as a way of defining those.

**Simplicity:** It allows security teams to explain complex matters in a simple way that all stakeholders can understand, regardless of their technical capabilities.

---

## What Is Pseudocode?

Pseudocode is a high-level, informal programming language or notation used by programmers and software developers to plan and outline algorithms or program logic. It is not meant to be executed by a computer; it serves as a way to express the logic of a program in a more human-readable and structured form before actually writing the code in a specific programming language.

Pseudocode uses plain language mixed with some programming constructs to describe the steps and operations a program needs to perform. It is particularly useful during the initial stages of program design and helps programmers think through their logic and design without getting bogged down in the syntax details of a particular programming language.

*[Diagram: pseudocode example showing SET / FOR / IF / THEN / RETURN / END IF / END FOR structure]*

### How Pseudocode Is Used in Cortex

Creating effective rules to safeguard against identified user cases is an essential aspect of protecting your assets. Pseudocode is one of the many tools available to professionals in cybersecurity to see how and why these rules work. The key is to write rules at a high enough stage to find all relevant threats without triggering false positives so that there are no problems in managing the use cases. The goal is to create rules that are highly precise and are meant to be understood by non-technical personnel to serve as an assessment tool.

---

## What Is XQL?

Cortex Query Language (XQL) is a query language for querying data ingested into Cortex. It's used for investigating and analyzing network and endpoint security events. XQL forms queries in stages, where each stage performs a specific query operation, and stages are separated by a pipe character (|). XQL can be used to query data from the Cortex Data Model (XDM) or specific datasets.

### When Is XQL Used?

XQL is primarily used in the context of security analytics and investigation. It's employed for analyzing security events and logs to detect and investigate potential security threats. It can be used for a wide range of tasks, including threat hunting, case response, and forensic analysis. XQL is used when there is a need to query and analyze large volumes of security-related data for potential security cases.

### How Is XQL Used?

XQL queries are created in the Query Builder within Cortex, allowing security analysts to interactively construct and run queries. Queries can be used to search data within the XDM or specific datasets, depending on the specific use case. XQL queries can include various components such as data filters, field selection, data transformation, and aggregation. The XQL query interface provides suggestions, auto-suggestions, and features like saving and sharing queries for collaboration.

---

## Components of XQL

Click the tabs for more information about the components of XQL.

### Stages Tab

Stages perform certain operations in evaluating queries. For example, the dataset stage specifies a dataset on which to run the query. Commonly used stages include `dataset`, `fields`, `filters`, `join`, and `sort`.

*[Inset code box: `dataset, fields, filters, join, sort`]*

### Functions Tab

Some stages can call functions to convert the data to a desired format. For example, `current_time()` returns the current timestamp, while `extract_time()` can obtain the hour information in the timestamp. Functions may or may not need input parameters. The filter and alter stages are the two stages that can use functions for data transformations.

*[Inset code box: `timepart = extract_time(current_time(), "HOUR")`]*

### Operators Tab

XQL queries can use operators (equal to, not equal to) to analyze certain data (variables and/or values). XQL operators are comparison operators: Boolean, relational, and range operators, and a logging operator. For example, `in` is for an enumeration, and `~=` is the "like" operator that returns a Boolean value that returns a Boolean true if true.

*[Inset code box: `union_local_port in {192, 1882}`]*

---

## XQL Language Features

XQL is a query language that allows you to query for information contained in a wide variety of data sources. Out of the box, you can query your Cortex XDR logs using the `xdr_data` dataset. You can also ingest data from third-parties and then query against those datasets as well.

XQL is similar to other query languages, and it uses some of the same functions as can be found in many structured query language (SQL) implementations, but it is not SQL. XQL forms queries based on stages. Each stage performs a specific query operation. Stages are delimited by pipes (|). XQL supports:

- Simple queries
- Joins and Unions
- Aggregations
- Filters that identify a subset of records to return in the result set

- Queries against standard datasets
- Queries against custom-imported datasets
- Queries against presets, which are collections of information that are specific to a given type of network or endpoint activity such as authentication or file transfers

---

## Useful XQL Commands

When working with XQL, you will begin to develop your own set of useful commands such as the *alter* command that allows users to create their own fields in queries. Another useful option is using the same command multiple times using commas. For example: *|alter X="example one", B="example two"*. This example demonstrates multiple uses of *alter* under the same stage and within the same command usage, separated by a comma.

---

## Accessing the XQL Development Environment

You can access the XQL development environment in the management console in different ways.

**From the Query Builder:** To access the XQL development page from the Query Builder, go to **Investigation & Response > Query Builder**.

**From the Query Center:** To access the XQL development page from the Query Center, go to **Query Center** and then click the **+New XQL Query** button.

**Using the Browser:** To access the development page from the browser, type */xql* after the base URL in the address bar.

**Using the Quick Launcher:** To access the XQL development page from the Quick Launcher, click the **Quick Launcher**, type */XQL*, press **Enter**, and click the path that pops up.

---

## XQL Search Page Basics

Click the arrows to learn more about how to manage your XQL queries. Click the images to enlarge them.

### XQL Editor

The XQL query editor is in the top pane where you can write your XQL queries. The query editor provides features to color code and autocomplete the XQL code. It also shows syntax errors as you type.

*[screenshot: XQL editor pane showing query editor with XQL-QUERY-597 label]*

### Search Period Specification

In XQL, "search period specifications" refer to the time frame or period for which you want to query or search for data within the Cortex platform. These specifications allow you to narrow down your search to specific time intervals. This is crucial in security analytics and investigation because you often need to examine events or data within a particular timeframe to identify and respond to security threats.

*[screenshot: Search Period Specification panel]*

### XQL Query Options

There are different options to run your query, including Run, Run in background, and Save as. The Run button executes the query in the foreground, which means you cannot work with the browser until a result set is generated. You can also run your query later at a specific time. Save as > Correlation Rule is also a convenient way to save queries as correlation rules.

*[screenshot: XQL query options showing XQL-QUERY-597 label with Run in background option]*

### XQL Helper

XQL Helper provides XQL meanings and syntax.

*[screenshot: XQL Helper panel showing dataset, filter, limit, and other keyword hints]*

### XQL Query Results

XQL Query Results allows you to switch between table and graph. Additionally, you can use Export to file to save the result to a file.

*[screenshot: XQL Query Results panel showing XQL-QUERY-3040 with table/graph toggle]*

### XQL Library

XQL Library allows you to see pre-defined queries.

*[screenshot: XQL Library panel showing list of pre-defined queries]*

---

## IOCs, BIOCs, and Correlation Rules

This lesson describes the differences between indicators of compromise (IOCs) and behavioral indicators of compromise (BIOCs). This lesson also describes how Correlation Rules can improve threat detection analysis and the key considerations involved when creating and managing these rules.

### IOCs, BIOCs, and Correlation Rules — Overview

In the world of cybersecurity, detecting and mitigating threats is a top priority for organizations. IOCs, BIOCs, and Correlation Rules are three powerful rules that play a crucial role in threat detection and response. By understanding each detection rule's unique strengths and applications, security professionals can effectively defend against attacks and safeguard their organizations with the power of analytics.

*[Diagram: Three columns showing IOCs (specific artifacts/patterns associated with known threats), BIOCs (focus on identifying behavioral indicators of compromise, adding a layer of context to threat identification), and Correlation Rules (provide a more advanced and contextualized approach to threat detection by analyzing correlations among multiple events). The following tools are part of the broader field of analytics, where data-driven insights and intelligent algorithms are leveraged to enhance security.]*

### IOC Purpose

The primary purpose of an IOC is to serve as a response or a "fingerprint" of malicious activity or a state of compromise for a system, network, or device. It is used in cybersecurity to detect and identify threats, allowing security professionals to respond and mitigate the impact of an attack. IOCs can be generated based on various sources, including threat intelligence, security research, and internal analysis.

IOC types include:
- IP Addresses
- Domain Names
- File Hashes to Paths
- Registry or System Artifacts

---

## IOC Rules

Cortex IOC rules are intended to detect known, simple malware.

### Creating an IOC Rule

From the management console, navigate to **Detection Rules > IOC** to create and manage IOC rules. To create an IOC rule, click the **+Add IOC** button in the top right. To manage a rule, use its context (right-click) menu. The quickest way to create multiple IOC rules is to import IOCs from other reliable threat intelligence sources into your Cortex XDR instance. Palo Alto Networks does not provide IOC rules, although it does provide global BIOC rules.

*[screenshot: IOC Rules table with +Add IOC button visible]*

### Managing IOC Rules

Open the context menu of an IOC rule to take actions including Edit, Disable, and Delete. The key attributes of IOC rules are as follows:

| Attribute | Description |
|---|---|
| Indicator | Indicator is the value of the indicator, such as a file name, an IP address, or a hash value. |
| Type | Type is the category of the threat indicator such as Full Path, File Name, Domain, and Hash. |
| Expiration Date | Expiration Date is the date and time at which the IOC will automatically be removed from the Cortex instance. |
| Reputation | Reputation is the level of the IOC rule's reliability, such as Completely Reliable and Unreliable. |

---

## What Are BIOCs?

BIOC rules are designed to identify behavioral indicators of compromise, which encompass various tactics, techniques, and procedures employed by potential threats. By understanding the various types of behavior that BIOC rules can detect, you can effectively configure rules that align with your organization's security objectives. This knowledge enables you to proactively identify and respond to potential threats based on their observable behaviors, rather than relying solely on traditional indicators of compromise like hashes or signatures.

Click the tabs for more information about the types of behavior that BIOC rules can detect.

### Processes Tab

*[Accordion — content not visible in static render; covers process-based behavioral indicators]*

### Registry Tab

*[Accordion — content not visible in static render; covers registry-based behavioral indicators]*

### Files Tab

*[Accordion — content not visible in static render; covers file-based behavioral indicators]*

### Network Activity Tab

*[Accordion — content not visible in static render; covers network-activity-based behavioral indicators]*

---

## Key BIOC Attributes

BIOC rules have specific attributes that allow you to understand key threat details like the type of attack, its behavior, and its severity.

*[screenshot: BIOC rule list showing example "Remote file copy" with Type=Lateral Movement, Behavior=Process | action type = execution AND..., Severity=Informational, # of Issues=0, Source=Palo Alto Networks, MITRE ATT&CK Tactic=TA0008 - Lateral Movement]*

The key BIOC rule attributes are as follows:

| Attribute | Description |
|---|---|
| Global Rule ID | A globally unique identification number for the rule. If a rule is not of type Global BIOC rule, this attribute is empty. |
| Name | A unique name that describes the rule. |
| Type | The category of the attack event, which is typically the stage in the attack lifecycle. This could include dropper, evasion, lateral movement, or tampering. |
| Behavior | The search condition to extract this issue from the data stream. |
| Severity | The severity level of the issues created based on the rule definition. |
| # of Issues | The number of matches triggered by this rule. |
| Source | The user who created this BIOC, the name of a file from which it was created, or Palo Alto Networks if it is a global rule. |
| MITRE ATT&CK Tactic | The type of MITRE ATT&CK tactic that this BIOC rule prevented. |

---

## How Are IOCs and BIOCs Different?

IOCs and BIOCs both detect threats, but they differ in terms of the information they represent and how they are used.

While IOCs are specific artifacts or patterns associated with known threats, BIOCs focus on the behavior or actions of attackers. BIOCs involve monitoring activities such as lateral movement, privilege escalation, anomalous network traffic, or unusual user behavior.

IOCs are valuable for quickly detecting known threats based on their unique characteristics, whereas BIOCs provide a more dynamic and behavior-focused approach to identifying malicious activities that may not have a fixed signature. Both IOCs and BIOCs play important roles in a comprehensive cybersecurity strategy, complementing each other to enhance threat detection and response capabilities.

*[Diagram: Venn diagram showing IOCs and BIOCs as overlapping circles — both detect threats but differ in what information they represent]*

---

## What Are Correlation Rules?

Correlation Rules in Cortex help you analyze correlations of multi-events from multiple sources using the XQL-based engine. They allow you to create scheduled rules and trigger issues based on these rules within a defined time frame and schedule. Correlation Rules can be managed and analyzed on the Correlation Rules, Issues, and Cases pages. These rules are also factored into the case count displayed on the dashboard.

### Correlation Rules Benefits

Correlation Rules provide a more advanced and contextualized approach to threat detection and analysis by analyzing multi-event correlations, leveraging a powerful query language, enabling scheduled rule execution, and offering options for issue suppression and MITRE ATT&CK mapping. These capabilities enhance the efficiency and effectiveness of security operations by providing a holistic view of potential threats and enabling proactive responses.

### Correlation Rules Table

The Correlation Rules table provides various details for each rule such as the number of issues triggered, issue categories, datasets, descriptions, drill-down queries, failure reasons, insertion and modification dates, last execution times, MITRE ATT&CK tactics and techniques, severity levels, rule IDs, schedules, suppression settings, and more.

*[screenshot: Correlation Rules table showing multiple rules with columns for Name, Severity, Issues, Last Triggered, etc.]*

---

## Analytics and Cortex

Cortex Analytics, or analytics within Cortex, involves the use of data, advanced algorithms, and machine learning techniques to proactively detect, analyze, and respond to security threats and anomalies in a network environment.

### What Are Analytics?

Analytics, within the context of enterprise security, is a powerful approach that enables organizations to detect, analyze, and respond to threats effectively. It serves as the vigilant guardian of digital assets, continuously monitoring network activities and providing insights that help safeguard against a multitude of cyber threats.

At its core, enterprise security analytics leverages data and sophisticated algorithms to uncover anomalies, deviations, and patterns that may indicate potential security breaches or malicious activities within a network. The proactive approach is essential because cyber threats are constantly evolving and becoming more sophisticated, requiring advanced tools and techniques to stay one step ahead.

*[Diagram: Shows Data + Advanced Algorithms + Machine Learning → Cortex (center) → Detect, Analyze, Response]*

---

## Cortex Analytics Features

Cortex Analytics is applied in network security to continuously monitor network activities and identify deviations from normal behavior, thereby enhancing the overall security posture. This approach encompasses a wide range of functionalities such as recognizing known threats, detecting suspicious behaviors, and providing security professionals with actionable intelligence. It plays a pivotal role in implementing a defense-in-depth strategy, securing networks across multiple layers from the perimeter to the core. Cortex Analytics includes the following features:

**Defense-in-Depth Strategy:** Analytics plays a vital role in a comprehensive defense-in-depth strategy, ensuring that networks are protected through up-to-date software and hardware, including patching vulnerabilities.

**Intrusion Detection and Response:** Analytics is used to detect and respond to intruders who manage to penetrate network defenses, enabling quick evaluation, isolation, and removal of potential threats.

**Cortex Platform:** The Cortex Platform is a powerful tool for efficient and automated abnormal activity detection on a network. It provides detailed information to aid in rapid threat assessment and mitigation.

**Analytics Engine:** The Cortex Platform utilizes its Analytics Engine to analyze data from various sources, including logs from network sensors, to establish activity baselines and identify abnormal behavior.

**Profile Creation:** The Analytics Engine creates profiles for endpoints and users within the network, categorizing them into peer group profiles, temporal profiles, and entity classification profiles. This contextual information is vital for detecting threats.

---

## Knowledge Checks

### Section Knowledge Checks (p. 15)

**Q. What are the three rules that play a key role in Cortex threat detection and response? (Choose three.)**
- MITRE ATT&CK rules
- Analytics rules
- Indicators of compromise ✅
- Behavioral indicators of compromise ✅
- Correlation Rules ✅
- **Correct: Indicators of compromise, Behavioral indicators of compromise, Correlation Rules**

**Q. What are two useful Cortex analytics use cases? (Choose two.)**
- Use case review
- Correlation Rule application
- Pseudocode creation
- Advanced threat detection ✅
- Insightful threat hunting ✅
- **Correct: Advanced threat detection, Insightful threat hunting**

**Q. What Cortex feature involves the use of data, advanced algorithms, and machine learning to proactively detect, analyze, and respond to security threats and anomalies?**
- Scalability
- Pseudocode
- Analytics ✅
- Endpoint protection
- **Correct: Analytics**

### Numbered Quiz (Questions 1–7)

**Question 1 of 7. How does Cortex accommodate organizations' growth and changing needs?**
- By providing static threat detection
- By limiting the number of devices it protects
- By adapting to the organization's dynamic nature ✅
- By focusing on case response only
- **Correct: By adapting to the organization's dynamic nature**

**Question 2 of 7. What is the primary purpose of Behavioral Indicators of Compromise (BIOCs)?**
- To identify known malware strains
- To detect specific threat signatures
- To provide early warning signs of threats
- To focus on the behavior and actions of attackers ✅
- **Correct: To focus on the behavior and actions of attackers**

**Question 3 of 7. What is the key difference between Issues and Cases in Cortex?**
- Issues are more detailed and comprehensive
- Issues require a coordinated and structured response
- Issues represent individual security events, while cases group related issues ✅
- Cases serve as early indicators of security issues
- **Correct: Issues represent individual security events, while cases group related issues**

**Question 4 of 7. Which of the following is an example of an Indicator of Compromise (IOC)?**
- A well-defined case management plan
- An advanced threat detection strategy
- A specific malware hash value ✅
- A network traffic monitoring tool
- **Correct: A specific malware hash value**

**Question 5 of 7. Which aspect of threat detection does Cortex primarily focus on?**
- Data exfiltration
- System restarts
- Lateral movement ✅
- Cases investigation
- **Correct: Lateral movement**

**Question 6 of 7. What is the main purpose of Threat Intelligence in the context of Cortex?**
- Detecting insider threats
- Providing global threat research
- Feeding data to WildFire
- Ensuring organizations can defend against evolving threats ✅
- **Correct: Ensuring organizations can defend against evolving threats**

**Question 7 of 7. How does Cortex use behavioral analytics and machine learning for threat detection?**
- It relies on static signatures
- It monitors network traffic exclusively
- It identifies abnormal activities and deviations ✅
- It relies on user-reported cases
- **Correct: It identifies abnormal activities and deviations**
