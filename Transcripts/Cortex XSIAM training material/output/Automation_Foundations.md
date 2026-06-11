# Automation Foundations

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened;
> UI screenshots transcribed; knowledge-check items captured with correct answers
> flagged from visual cues (the explicit green "Correct answer" label, **not** the
> learner's orange-selected radio, was used as the answer key).

---

## Detailed Automation Workflow

Automation workflows are highly customizable in Cortex. The following table is a typical automation workflow for most organizations.

| Workflow Step | Definition | Example |
|---|---|---|
| Issue Creation | An issue is ingested into the Cortex platform. | A local analysis of malware triggers the creation of an issue in Cortex. |
| Playbook Triggering | Issues trigger the execution of a playbook in Cortex. | The malware issue triggers a playbook designed for handling and mitigating malware threats. |
| Workflow Execution | Playbook executes predefined tasks as part of the issue response workflow. | The playbook runs tasks like querying local analysis tools to gather more information about the suspicious file. |
| Data Analysis | Cortex performs data analysis on the issue, using filters and transformers. | Data analysis involves using filters to isolate relevant information and transformers to convert timestamps. |
| Collaboration and Communication | Communication tasks within the playbook notify and engage with security analysts. | Communication tasks inform security analysts about the malware issue, seeking their input on further actions. |
| Task and Sub-playbook Execution | Individual tasks and sub-playbooks are executed as defined in the playbook. | Tasks include running scripts to analyze malware behavior or invoking sub-playbooks for specialized analysis. |
| Issue Field Updates | Issue fields are updated based on the results of the executed tasks. | Issue fields are enriched with additional context, such as the severity of the malware and affected systems. |
| Issue Closure or Escalation | Based on the analysis, the issue may be closed or escalated for further investigation. | The playbook may recommend automatic quarantine or escalate the case to human analysts. |
| Logging and Reporting | Cortex logs every action taken during the issue lifecycle for reporting. | Actions taken to resolve the malware issue are logged for post-case reports and compliance documentation. |
| Post-Case Analysis | Cortex continues to analyze data post-issue for patterns and updates to threat intelligence. | Post-issue analysis helps identify patterns in malware behavior, contributing to threat intelligence updates. |

## Automation Components

The following key components are essential for implementing automation in Cortex.

**Marketplace** — The Marketplace is a one-stop destination for enhancing the capabilities of security operations. A wide range of content, including playbooks, integrations, asset types, and more, can be seamlessly installed, deleted, and updated.

**Playbooks** — Playbooks are the core automation engine within Cortex, orchestrating a sequence of tasks, conditions, automations, commands, and loops to streamline and enhance investigation and response processes. This orchestration significantly reduces investigation time.

**Filters and Transformers** — In Cortex, data manipulation is crucial for effective case response. Filters and transformers play a pivotal role in this process by allowing users to extract, manipulate, and present data in JSON format.

**Scripts** — Scripts within Cortex serve as potent tools for executing specific actions through commands.

## Some key benefits of automation include:

- **Rapid Case Response** — Automation allows for real-time detection and immediate response to security cases, reducing the impact and potential damage caused by cyber threats.
- **Consistency** — Automated workflows ensure that case handling procedures are executed consistently, reducing the risk of human error and ensuring compliance with security policies and best practices.
- **Improved Efficiency** — Automation streamlines routine and repetitive tasks, enabling security teams to focus on more complex and strategic activities, ultimately increasing the overall efficiency of security operations.
- **Scalability** — As organizations grow or face increased security threats, automation enables security operations to scale effectively without the need for a linear increase in human resources.
- **Reduction of Issue Fatigue** — Automation can help reduce issue fatigue by automating the initial triage and categorization of security issues, allowing security analysts to prioritize high-priority cases.
- **Resolution/Closure** — Automation can help facilitate the rapid resolution of security cases, swiftly identifying and addressing potential threats in real-time.

---

## Marketplace in Cortex

The Cortex Marketplace is the central hub for managing content packs, which enhance security operations with content such as playbooks, integrations, scripts, and more. It also helps optimize case and asset management.

The Cortex Marketplace functions differently depending on the product. The features and capabilities can be found in the table below.

| Features and Capabilities by Product | Lite Experience | Full Experience |
|---|---|---|
| **Product** | Cortex Cloud or Cortex XDR | Cortex XSIAM |
| **Capabilities** | Manage installed content packs from adopted playbooks or configured scripts/actions in a playbook | Browse and install content packs |
| Integrations | ✓ | ✓ |
| Scripts | ✓ | ✓ |
| Playbooks | ✓ | ✓ |
| Reports | ✓ | ✓ |
| Dashboards | ✓ | ✓ |
| Rules (Correlation, Data Models, and Parsing) | ✗ | ✓ |
| Issue Types, Fields, and Layouts | ✗ | ✓ |
| Classifiers and Mappers | ✗ | ✓ |
| Indicator Types, and Indicator | ✗ | ✓ |

*[screenshot: The Marketplace "Installed Content Packs / Browse" experience, available for Cortex Cloud or Cortex XDR.]*

## Content Pack Features

Cortex provides the full potential of automation through a rich set of features that empower organizations to fortify their security posture and streamline case management. Marketplace Content Pack features include integrations, playbooks, issue types, issue fields, scripts, correlation rules, data model rules, parsing rules, dashboards, and reports.

### Integrations
Integrations connect third-party security and alert management platforms to Cortex. This connection enables these platforms to trigger events, which are then transformed into issues within Cortex, initiating automated security processes.

- **Benefits:** Integrations streamline the flow of information, enabling the ingestion of issues from various external sources. This consolidation of data sources ensures a comprehensive view of the security landscape.
- **Key Aspects:** Cortex offers the ability to define both security orchestration, automation, and response (SOAR) integrations for automation and Collection integrations for gathering raw event data, providing versatility in automation, threat detection, and data collection.

*[screenshot: Integrations panel listing AWS connectors — AWS - AccessAnalyzer (3), AWS - ACM (1), AWS - Athena (Beta) (1), etc.]*

---

## Playbooks and Scripts

In Cortex, playbooks efficiently automate case handling, minimizing response times and ensuring consistency, while scripts provide customized automation tailored to organizational requirements.

### Playbooks
Playbook and script processes are traditionally handled manually, but playbooks automate them efficiently.

- **Benefits:** Playbooks reduce the need for manual intervention, minimizing response times and ensuring consistency in case handling. They address issues with data from various systems, providing comprehensive insights for analysis.
- **Key Aspects:** Playbooks are triggered by ingested issues, enabling the definition of a sequence of actions for specific case types. They offer adaptability and resource allocation optimization.

### Scripts
Scripts are composed of a series of commands that can be employed in playbook tasks and when running commands in the issue War Room.

- **Benefits:** Scripts automate manual tasks, enhancing the efficiency of case response, and ensuring consistent actions are taken during each case.
- **Key Aspects:** Scripts are fundamental for creating customized automation tailored to an organization's specific requirements.

---

## Issue Types and Fields

Issue types are essential for categorizing and prioritizing issues within Cortex. Issue fields provide detailed information about each issue.

### Issue Types
Issue types serve as the first step in classifying issues, determining the most suitable response and actions for each issue.

- **Benefits:** Issue types facilitate systematic issue classification, allowing for efficient response strategies based on the nature and severity of each issue.
- **Key Aspects:** Each issue type corresponds to a specific set of issue fields, ensuring the association of relevant information with each issue, thus supporting accurate analysis and response.

### Issue Fields
Issue fields provide detailed information about each issue, capturing specific data relevant to the corresponding issue type.

- **Benefits:** Issue fields ensure that issue data is structured, organized, and easily accessible for analysis and response.
- **Key Aspects:** Issue fields are customizable, accommodating pertinent information unique to security operations.

---

## Rules

Rules in Marketplace allow for the automation of potential threats as well as normalize and process incoming data. The tabs below provide more information about Marketplace rules.

### Correlation Rules
Correlation Rules analyze multiple events from various sources using the XQL-based engine within Cortex. These rules automate the detection of potential threats, reducing reliance on manual analysis.

- **Benefits:** Correlation Rules facilitate the detection of complex, multi-event patterns that may indicate security cases. They trigger issues based on predefined conditions, enhancing threat detection.
- **Key Aspects:** Correlation Rules are scheduled and utilize the XQL engine, allowing for rule-based threat detection.

### Data Model Rules
Data Model Rules play a pivotal role in data normalization and enrichment. They allow the creation of a standardized schema with predefined data types and the mapping of third-party data to this schema.

- **Benefits:** Data Model Rules simplify the management and analysis of diverse data sources, ensuring consistent data representation.
- **Key Aspects:** Data Model Rules are essential for making data from various sources easily consumable and consistent in format.

### Parsing Rules
Parsing Rules enable the preprocessing of incoming data, allowing for the removal of unnecessary information, data quality improvement, and storage optimization.

- **Benefits:** Parsing Rules reduce data storage costs, enhance data quality, and streamline data analysis processes.
- **Key Aspects:** Parsing Rules ensure that incoming data is clean and prepared for analysis, increasing the effectiveness of security operations.

---

## Dashboards and Reports

Cortex provides features to view and analyze data, including Dashboards and Reports.

### Dashboards
Dashboards provide a visual representation of data, offering real-time monitoring and analysis of key metrics and insights.

- **Benefits:** Dashboards consolidate the view of security operations, enabling prompt decision-making and enhancing situational awareness.
- **Key Aspects:** Customizable widgets within dashboards allow users to tailor the presentation of data according to specific needs.

*[screenshot: DASHBOARDS (1) — Name: HIPAA Compliance Dashboard; Description: Monitor HIPAA controls and produce evidence…]*

### Reports
Reports contain statistical data presented in widget format, allowing for the extraction of insights and analytics for sharing with stakeholders.

- **Benefits:** Reports facilitate data-driven decision-making and the communication of security insights to relevant parties.
- **Key Aspects:** Reports are derived from dashboards, providing a convenient means to extract and share key findings.

*[screenshot: REPORTS (1) — Name: HIPAA Compliance Report; Description: Monitor HIPAA controls and produce evidence…]*

---

## Content Pack Management

Within the Marketplace, users can seamlessly explore, install, and manage content packs comprising playbooks, integrations, and asset types.

Key aspects of content pack management include:

### Search and Navigate
Within the Marketplace, users can install, delete, and update content while fine-tuning searches for specific elements through intuitive filtering options. Whether in pursuit of high-level use cases, integrations, content pack categories, or certified and user-supported resources, the Marketplace equips individuals with the tools to streamline their search for the right solution.

### Updates
Content packs undergo regular updates to address bugs, introduce enhancements, and refine their functionality. Users receive notifications in the Installed Content Packs tab, keeping them informed about the latest developments. **The Marketplace itself undergoes updates every two hours to maintain currency.**

**Updates are not installed automatically; Cortex administrators need to manually select and initiate the update process,** providing them with control over content update preferences.

### Version History
The Version History tab provides a comprehensive view of the installed version, earlier iterations, and available updates for a specific content pack. This feature allows users to revert to a previous version if necessary, ensuring flexibility in managing content.

*[screenshot: "Access Investigation" content pack → Version History tab. Entries: 1.2.12 – 4049458 (Jul 3rd 2025) "Documentation and metadata improvements" with an "Update to 1.2.12" link; 1.2.11 – R3394125 (May 13th 2025) marked INSTALLED with a "Reinstall 1.2.11" link.]*

### Dependencies
Dependencies play a pivotal role in Cortex. Various objects, such as playbooks and issues, may exhibit interdependence. During the installation process, mandatory dependencies, including required content packs, are automatically incorporated. Optional dependencies, such as certain content packs, can be selectively managed in the Cart.

*[screenshot: "Access Investigation" Dependencies tab listing required/optional content packs.]*

### Content Pack Installation
Before installing a content pack, users are encouraged to thoroughly review pertinent details. This includes an examination of the content itself, associated dependencies, version history, and any available user reviews. Once satisfied, users proceed to install the content pack, initiating its inclusion in the Cart for streamlined management.

### Deletion
Deleting a content pack is a significant action, resulting in the removal of all associated content, including detached and customized elements. Caution is advised, especially if other packs are dependent on the content pack slated for deletion.

*[screenshot: "Access Investigation" content pack Details tab — Publisher: Cortex; Status: Update available; Installed version: 1.2.11 3543683; Certification: Certified; Supported by: Cortex; Created: Mar 24th 2025; Last Release: Jul 3rd 2025. Body text describes the pack automating response to unauthorized access incidents and containing the 'Access Investigation - Generic' playbook, a custom Access Incident issue type, layout, and an Access playbook orchestrating across multiple products to extract and enrich IOCs.]*

### Update Content Packs
When updates become available, users can seamlessly transition to the latest version of a content pack. Customizations made by users are automatically integrated into the update, ensuring a cohesive experience. All dependent content packs are updated in tandem.

### Reverting
The ability to revert to an earlier version provides users with a valuable option. However, it's essential to exercise caution, particularly regarding potential impacts on dependent content. This feature offers flexibility while maintaining a balance between innovation and stability.

---

## Playbooks in Cortex

Playbooks serve as the core automation engine within the Cortex system, orchestrating a sequence of tasks, conditions, automations, commands, and loops. The primary purpose of playbooks is to streamline and enhance the efficiency of investigations and response processes, contributing significantly to time savings. Playbooks enable users to automate diverse security processes, from managing investigations to ticket handling.

### Playbooks and the Issue Lifecycle
Playbooks come into play during the investigation and response phase of the issue lifecycle. However, their logical flow is defined during the initial planning stage, aligning with the design of the use case. Creating or updating playbooks involves addressing key considerations, including required actions, conditions, looping, time sensitivity, and criteria for considering an issue as remediated.

*[Diagram: A 7-step accordion titled "Click the tabs to view the steps in the playbooks and case lifecycle." The steps (shown collapsed) are: Step 1: Investigation and Response; Step 2: Design Use Case; Step 3: Create and Update Playbook Lifecycle; Step 4: Issue Handling; Step 5: Define Logical Flow; Step 6: Remediation Criteria; Step 7: Continuous Improvement. The detailed text behind each step is not expanded in the source export — see flagged review.]*

---

## Playbook Types

Playbooks encompass different task types, each designed for specific actions.

| Task Type | Description |
|---|---|
| **Manual Tasks** | Manual tasks involve human intervention for confirmation or escalation. |
| **Conditional Tasks** | Conditional tasks validate conditions based on parameters, steering the playbook workflow accordingly. |
| **Communication Tasks** | Communication tasks facilitate interaction with users. |
| **Automation Tasks** | Automation tasks automatically remediate issues by engaging third-party integrations, ticketing systems, or file detonation using a sandbox. |

### Best Practices
Best practices for optimal playbook performance include using quiet mode, limiting indicator extraction, breaking up large playbooks into sub-playbooks, updating scripts to their most current version, and removing unused playbook tasks. These practices contribute to the efficiency and effectiveness of playbooks within Cortex.

---

## Scripts in Cortex

Scripts within Cortex serve as potent tools executing specific actions through commands.

These scripts, found in the **Investigation & Response > Automation > Scripts** page, are written in JavaScript, Python, or PowerShell and provide access to Cortex application programming interfaces (APIs), including those for issues, investigations, and the War Room. For enhanced security, they can be password-protected and can receive and access arguments for increased flexibility.

*[screenshot: Scripts Library view with a script editor open.]*

### Script Management
Script detachment and attachment are key functionalities. When installed from a content pack, a script is attached by default, making it uneditable. To modify a script, users can detach it or create a duplicate. However, detaching a script from its Marketplace Content Pack prevents it from receiving updates. Alternatively, scripts can be easily enabled or disabled in the settings without requiring detachment or duplication.

#### Script Search and Settings
To efficiently retrieve a script, use the free-text search in the Scripts Library, identifying it by name or tag. Once selected, the Script Settings panel allows configuration of basic information such as name, language type, and description, as well as advanced settings like the timeout, Docker image name, and whether it runs on a separate container.

*[screenshot: Script "AddDBotScoreToContext" code editor — register_module_line('AddDBotScore...'), CONSTANT_PACK_VERSION = '1.10.35', demisto.debug('pack id = CommonScr...'), def main(): indicator = demisto.args().get(...). Script Settings panel shows BASIC section with Name "AddDBotScoreToContext" and Language type "Python Version 2x".]*

#### Leveraging Out-of-the-Box Scripts
Cortex provides out-of-the-box scripts for use in playbooks and commands, primarily within the Base and Common Scripts content packs. Leveraging these common scripts offers reusable functions and variables across scripts and integrations, enhancing API capabilities. For example, CommonServerPython includes over 400 Python functions. These scripts contribute to the versatility of the scripting environment within Cortex.

*[screenshot: Scripts editor showing CommonServerPython with imports — from random import randint; import xml.etree.cElementTree as ET; from collections import OrderedDict; from datetime import datetime, timedelta; from abc import abstractmethod; from distutils.version import LooseVersion; from threading import Lock; from functools import wraps; from inspect import currentframe; import warnings.]*

---

## Knowledge Checks

> **Note on answer keys:** The first four checks (Section knowledge check) mark the correct option with a green ✅ check next to the answer. The final 10-question quiz shows the *learner's* selected answer with an orange radio button, but the authoritative correct answer is the one labeled with the green "Correct answer:" text. These are recorded below.

### Section Knowledge Check

**Q1. What is the primary purpose of automation in Cortex?**
- Enhancing playbooks
- Streamlining security operations ✅
- Managing reports
- Creating dashboards
- **Correct: Streamlining security operations**

**Q2. What happens when you detach a script from its Marketplace Content Pack?**
- The script becomes permanently disabled from use.
- An editable duplicate of the script is created.
- It stops receiving future content pack updates. ✅
- The script becomes uneditable until reattached.
- **Correct: It stops receiving future content pack updates.**

**Q3. Where can users explore, install, and manage content packs in Cortex?**
- Filters and Transformers
- Scripts
- Marketplace ✅
- Playbooks
- **Correct: Marketplace**

**Q4. Which three steps are part of the playbooks and case management?**
- Design use case, Implement cheatsheets, and Define logical flow
- Analyze metadata, Issue handling, and Implement cheatsheets
- Design use case, Issue handling, and Define logical flow ✅
- Analyze metadata, Define logical flow, and implement cheatsheets
- **Correct: Design use case, Issue handling, and Define logical flow**

### Final Quiz (10 questions)

**Q1 of 10. Why is it crucial to review details before installing a content pack in Cortex?**
- To increase content complexity
- To understand content dependencies and version history ✅
- To reduce the frequency of updates
- To bypass the Cart management process
- **Correct: To understand content dependencies and version history**

**Q2 of 10. What is the significance of the version history tab in content packs?**
- Displays recent cases
- Provides a comprehensive view of installed versions and updates ✅
- Manages playbook metadata
- Allows manual task settings
- **Correct: Provides a comprehensive view of installed versions and updates**

**Q3 of 10. How does automation contribute to reducing alert fatigue in Cortex?**
- By increasing human intervention
- By automating case triage ✅
- By slowing down response times
- By minimizing efficiency
- **Correct: By automating case triage**

**Q4 of 10. How do Parsing Rules contribute to the effectiveness of security operations?**
- By increasing data storage costs
- By reducing data quality
- By enhancing data quality and streamlining analysis ✅
- By creating customizable widgets
- **Correct: By enhancing data quality and streamlining analysis**

**Q5 of 10. Which of the following automation workflow steps involves running scripts to analyze malware before invoking sub-playbooks?**
- Data Analysis
- Task and sub-playbook execution ✅
- Issue creation
- Logging and reporting
- **Correct: Task and sub-playbook execution**

**Q6 of 10. Which of the following is a one-stop destination for enhancing the capabilities of your security operations?**
- Marketplace ✅
- Playbooks *(learner-selected — marked wrong)*
- Filters and Transformers
- Scripts
- **Correct: Marketplace**

**Q7 of 10. What is the primary purpose of content pack updates in Cortex?**
- Increasing complexity
- Addressing bugs and enhancing functionality ✅
- Deleting content
- Disabling dependencies
- **Correct: Addressing bugs and enhancing functionality**

**Q8 of 10. Which of the following features plays a pivotal role during case response by allowing users to extract, manipulate and present data in JSON format?**
- Playbook inputs and outputs
- Scripts
- Filter and Transformers ✅
- Indicator extraction
- **Correct: Filter and Transformers**

**Q9 of 10. Which of the following serves as the core automation engine within the Cortex system?**
- Marketplace
- Playbooks ✅
- Filters and Transformers
- Scripts
- **Correct: Playbooks**

**Q10 of 10. What is the fundamental role of Playbooks in Cortex's incident case response strategy?**
- Creating dashboards
- Reducing API quotas
- Operating in isolation
- Automating workflows ✅
- **Correct: Automating workflows**
