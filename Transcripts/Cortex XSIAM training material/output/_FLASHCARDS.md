# Flashcards — Cortex / XSIAM Study Set

> Q/A pairs compiled from every knowledge-check item across transcribed files,
> de-duplicated. Answer keys taken from the green "Correct answer" cue. Currently
> covers the two sample files; will grow as the remaining files are processed.

## Automation Foundations

Q: What is the primary purpose of automation in Cortex?
A: Streamlining security operations.

Q: What happens when you detach a script from its Marketplace Content Pack?
A: It stops receiving future content pack updates.

Q: Where can users explore, install, and manage content packs in Cortex?
A: The Marketplace.

Q: Which three steps are part of the playbooks and case management?
A: Design use case, Issue handling, and Define logical flow.

Q: Why is it crucial to review details before installing a content pack in Cortex?
A: To understand content dependencies and version history.

Q: What is the significance of the version history tab in content packs?
A: It provides a comprehensive view of installed versions and updates.

Q: How does automation contribute to reducing alert fatigue in Cortex?
A: By automating case triage.

Q: How do Parsing Rules contribute to the effectiveness of security operations?
A: By enhancing data quality and streamlining analysis.

Q: Which automation workflow step involves running scripts to analyze malware before invoking sub-playbooks?
A: Task and sub-playbook execution.

Q: Which feature is a one-stop destination for enhancing the capabilities of your security operations?
A: The Marketplace. (Note: "Playbooks" is a common distractor — the Marketplace is the one-stop destination.)

Q: What is the primary purpose of content pack updates in Cortex?
A: Addressing bugs and enhancing functionality.

Q: Which feature lets users extract, manipulate, and present data in JSON format during case response?
A: Filters and Transformers.

Q: Which component serves as the core automation engine within the Cortex system?
A: Playbooks.

Q: What is the fundamental role of Playbooks in Cortex's incident case response strategy?
A: Automating workflows.

## Advanced Response Actions

Q: What is a prerequisite for performing remediation suggestion actions in Cortex?
A: Enhanced endpoint data collection (enabled).

Q: What is the purpose of the EDL service?
A: To block harmful IP addresses and domain names.

Q: What type of executable instructions can be uploaded and run on endpoints using Cortex?
A: Python scripts (Python v3.7).

Q: What is a key requirement for running remote scripts in Cortex?
A: Specific permissions for script execution.

Q: Which log or data type is required by the Remediations Suggestions action?
A: Enhanced endpoint data.

Q: What is an "entry point" in the context of Cortex Remote Script Executions?
A: The function name.

Q: Which statement about the Scripts Execution action is true?
A: You can run Python scripts only.

Q: What settings can be edited on the "Integrations > External Dynamic List Integration" page?
A: Authentication.

Q: Which entity best represents a typical consumer of the Cortex EDL service?
A: A PAN-OS NGFW device.

Q: Where can the Remediation Suggestions action be found?
A: The Causality Instance (Causality View).

Q: Which type of Cortex profile has a key setting that can affect how the Remediations Suggestions action works?
A: Agent Settings.

Q: On which operating system is the Remediation Suggestions action available?
A: Windows only.

Q: From which path is the global Cortex EDL service configured (one-time task)?
A: Settings > Configurations > Integrations > External Dynamic List Integration.

---

# Flashcards — Remaining 38 Files

## Cortex_Alerting_and_Detection

Q: What are the three rules that play a key role in Cortex threat detection and response?
A: Indicators of compromise (IOCs), Behavioral indicators of compromise (BIOCs), and Correlation Rules

Q: What are two useful Cortex analytics use cases?
A: Advanced threat detection and Insightful threat hunting

Q: What Cortex feature involves the use of data, advanced algorithms, and machine learning to proactively detect, analyze, and respond to security threats and anomalies?
A: Analytics

Q: (Question 1 of 7) How does Cortex accommodate organizations' growth and changing needs?
A: By adapting to the organization's dynamic nature

Q: (Question 2 of 7) What is the primary purpose of Behavioral Indicators of Compromise (BIOCs)?
A: To focus on the behavior and actions of attackers

Q: (Question 3 of 7) What is the key difference between Issues and Cases in Cortex?
A: Issues represent individual security events, while cases group related issues

Q: (Question 4 of 7) Which of the following is an example of an Indicator of Compromise (IOC)?
A: A specific malware hash value

Q: (Question 5 of 7) Which aspect of threat detection does Cortex primarily focus on?
A: Lateral movement

Q: (Question 6 of 7) What is the main purpose of Threat Intelligence in the context of Cortex?
A: Ensuring organizations can defend against evolving threats

Q: (Question 7 of 7) How does Cortex use behavioral analytics and machine learning for threat detection?
A: It identifies abnormal activities and deviations

## Cortex_Analysis_and_Collaboration

Q: Which statement describes the Case War Room?
A: There is a unique Case War Room for each available active case.

Q: Which CLI command symbol do you use to run commands?
A: ! (exclamation mark)

Q: Which data format does Cortex use to store context data?
A: JSON

Q: (Question 1 of 5) Which format is context data stored in?
A: JSON

Q: (Question 2 of 5) Which symbol is used to run automation scripts or commands in the CLI?
A: ! (exclamation mark)

Q: (Question 3 of 5) Which of the following is a War Room available in Cortex?
A: Issue War Room

Q: (Question 4 of 5) Which of the following is a place you can find the Command Line Interface (CLI)?
A: The bottom of the Case War Room

Q: (Question 5 of 5) Which of the following is a use for context data?
A: Capture issue and command data in structured format

## Cortex_Analyzing_Issue_Causality

Q: What causes the "Open Timeline" right-click action options of an issue to be disabled (grayed out)?
A: Issue is not stitched.

Q: What does the number inside the circle of a Process node on the CI graph indicate?
A: Number of child processes

Q: (Question 1 of 5) What does the color red indicate for a process node in the causality instance graph?
A: Malware

Q: (Question 2 of 5) In which data structure are the nodes in the causality instance chain interconnected?
A: Tree

Q: (Question 3 of 5) When an issue isn't stitched, which right-click action option will be disabled?
A: Investigate in Timeline

Q: (Question 4 of 5) When a node is right-clicked, which of the following information is available? (Choose two)
A: Expand Tree; Search File on All Endpoints

Q: (Question 5 of 5) Which three node types can a causality instance chain contain? (Choose three.)
A: User, Issues, Process

## Cortex_Basic_Rules

Q: Which type of Cortex rule causes Detection type alerts to be generated?
A: BIOC

Q: Which attribute is among the attributes of an IOC rule?
A: Reputation

Q: What functionality does Cortex provide for managing lookup datasets through correlation rules?
A: Adding entries to lookup datasets

Q: (Question 1 of 5) Which of the following is a scope for IOC/BIOC Suppression Rules?
A: Specific BIOC

Q: (Question 2 of 5) What is the function of the correlations_auditing dataset?
A: Monitor the results of correlation rules.

Q: (Question 3 of 5) Which type of Cortex rule can use threat indicators from trusted threat intelligence streams?
A: IOC

Q: (Question 4 of 5) Which attribute uniquely identifies an IOC rule in the IOC Rules table?
A: Indicator

Q: (Question 5 of 5) Which Cortex dataset can BIOC rules be checked against?
A: cloud_audit_log

## Cortex_Bring_Your_Own_Keys_(BYOK)

Q: What are the two services being utilized to encrypt tenant data in BYOK?
A: BigQuery and Other services

Q: What is the requirement when importing an encryption key for BYOK?
A: 32-byte, symmetric, and unencoded key in binary format

Q: (Question 1 of 5) What capabilities does BYOK have that benefits organizations in terms of compliance?
A: Supports key rotation and audit logs

Q: (Question 2 of 5) Why is BYOK considered beneficial for organizations in regulated industries?
A: Enhances control over data encryption

Q: (Question 3 of 5) How does the architecture of BYOK reduce external risks for organizations?
A: By utilizing a dedicated key management system (KMS)

Q: (Question 4 of 5) What is the recommended number of symmetric keys to generate during the activation of BYOK?
A: 2

Q: (Question 5 of 5) When disabling keys, which statement is true?
A: It renders the tenant inaccessible and non-operational

## Cortex_Building_and_Managing_Queries

Q: What is a "lead" in the context of Cortex threat management?
A: A potential indicator of a threat that requires further investigation (as opposed to an issue, which is an immediate, readily available notification).

Q: What are the three sources from which a lead can be obtained in Cortex?
A: Issue (from a non-Palo Alto Networks system), Threat Information (online articles or external threat intelligence), and Users and Endpoint (users or endpoints reported as acting abnormally).

Q: What are the three tools used in order during threat hunting in Cortex?
A: 1) Query Builder (search for a lead), 2) Causality and Timeline (further inspect events and impacted resources), 3) BIOCs (create XDR rules/Behavioral Indicators of Compromise).

Q: What two methods does Query Builder provide for creating queries?
A: Template-based queries and XQL (Cortex Query Language) queries.

Q: What is the default dataset used by the Basic Query template?
A: xdr_data

Q: What does the "Continue in XQL" button in a template-based query do?
A: It transfers the template-generated query into an editable XQL field, allowing more advanced or complex queries to be built.

Q: What fields does the Endpoint template provide?
A: Host Name, IP Address, File\Process Name, and File\Process Hash.

Q: In the Legacy Query Builder, what is an "entity"?
A: A specific type of data that you can query, such as Process, File, Network, Image Load, Registry, Event Log, Network Connections, Authentications, and All Actions.

Q: What actions are available for the PROCESS entity type in the Legacy Query Builder?
A: Execution and Injection.

Q: What actions are available for the REGISTRY entity type in the Legacy Query Builder?
A: All, create_registry_key, delete_registry_key, rename_registry_key, delete_registry_value, set_registry_value.

Q: What actions are available for the NETWORK entity type in the Legacy Query Builder?
A: All, incoming, outgoing, failed, raw_packet.

Q: How do you limit a Legacy Query Builder process query to specific endpoints?
A: Click "+ HOST Add Host to your search" from the Process entity to specify endpoint attributes (host name, IP address, MAC address, host OS, installation type).

Q: How is the Query Center accessed in the Cortex management console?
A: Investigation & Response > Search > Query Center.

Q: What is the Execution ID in the Query Center?
A: A unique identifier generated each time a query runs (not when it is created). It uniquely identifies query runs/executions.

Q: What is the Query ID in the Query Center?
A: An identifier generated when the query is created (not when it runs).

Q: What are the possible Query Status values shown in the Query Center?
A: Queued, Running, Failed, or Completed.

Q: When you rerun a query from the Query Center, what happens to the Query ID and Execution ID?
A: The new query gets the same Query Name as the source query, a new Query ID (timestamp-based), and a new Execution ID.

Q: Where can you find queries that are scheduled to run later but have not yet started?
A: The Scheduled Queries page (not yet visible in Query Center until the first run executes).

Q: What uniquely identifies a scheduled query in the Scheduled Queries table vs. the Query Center table?
A: The Query ID uniquely identifies entries in the Scheduled Queries table; the Execution ID uniquely identifies entries in the Query Center table.

Q: What is the primary function of the Query Builder in Cortex?
A: To search for unknown threats in Cortex datasets using form-based and XQL queries.

Q: What type of queries can be created using the Query Builder?
A: Simple form-based queries and XQL queries.

Q: If a query is not displayed in Query Center after being built in Query Builder, what is the most likely cause?
A: The query is scheduled and has not run yet.

Q: What is a function of the Legacy Query Builder?
A: Searching on specific entities like files and processes.

Q: On which Cortex management console page can you rerun a query?
A: Query Center.

## Cortex_Cloud_Features_Graph_Search

Q: What is the primary purpose of Cortex Cloud Graph Search?
A: To provide a single, intuitive platform to visualize the full-stack security posture and simplify risk management across interconnected cloud environments.

Q: What are the four core capabilities of Cortex Cloud Graph Search?
A: Trace Attack Paths, Identify Hidden Risks, Perform Threat Hunting, and Enhance Operational Efficiency.

Q: What are the three primary components of the Graph Search graph?
A: Nodes (fundamental entities — assets or findings), Relationships (links/connections/edges between nodes), and Query Builder (interactive UI for constructing graph queries).

Q: What shape are Asset Nodes displayed as in Graph Search?
A: Circles (color and icon depend on asset category and class type).

Q: What shape are Finding Nodes displayed as in Graph Search?
A: Diamonds (color and icon depend on finding type selected).

Q: What are examples of asset nodes in Graph Search?
A: Virtual machines (EC2 instances), container images, S3 buckets, IAM roles, AI model data, Code, Identities.

Q: What are examples of finding nodes in Graph Search?
A: Vulnerabilities (CVEs, Log4Shell), malware presence, configuration issues, posture findings, identity findings.

Q: What does the single normalized data model in Graph Search provide?
A: Cloud agnostic, data source agnostic, and unified visualization — abstracting away underlying cloud provider specifics and normalizing data regardless of origin.

Q: What RBAC permissions are required to use Graph Search?
A: View and Edit RBAC permissions for Query Center and the Personal Query Library (same as required for XQL).

Q: What are the three Core components of Graph Search?
A: Graph Database, Nodes and Relationships, and Query Builder.

Q: What are the three Conditional components of Graph Search?
A: Query Library, Node Picker, and Specific Node Categories.

Q: What is the difference between a Core and Conditional component in Graph Search?
A: Core components are essential for all Graph Search operations; Conditional components provide additional value but are not essential to core functionality.

Q: What are the three fundamental operators used in custom Graph Search queries?
A: FIND (defines the initial node type), WHERE (filters nodes by attributes/conditions), and THAT (defines the relationship to the next set of nodes).

Q: What are Out-of-the-Box (OOTB) queries in Graph Search?
A: Pre-built queries provided by Palo Alto Networks in the Query Library that address common security use cases and best practices; every user has access to them.

Q: What are the two viewing formats for Graph Search results?
A: Graph (default — displays matched paths as a visual graph) and Table (each row represents a different path through the matching nodes).

Q: Under what conditions are nodes automatically grouped in Graph Search results?
A: When there are at least five nodes that share: not being a root node, an identical path, the same class and category type (assets), or the same category type (findings).

Q: What are the four stages of the Graph Search Data Lifecycle?
A: 1) Data Ingestion (from Unified Inventory and Finding Table), 2) Graph Database Mapping (assets and findings become interconnected nodes), 3) Query and Visualization (analyst queries the Graph Database via Query Builder), 4) Action and Iteration (results used to improve security posture).

Q: Where is asset information ingested from in the Graph Search data lifecycle?
A: The Unified Inventory.

Q: Where are security findings ingested from in the Graph Search data lifecycle?
A: The Finding Table.

Q: What is the primary benefit of using a single, normalized data model in Cortex Cloud's Graph Search?
A: It simplifies investigations by making the underlying data source and cloud provider agnostic.

Q: What is the key visual distinction between an Asset Node and a Finding Node in Graph Search?
A: Asset nodes are visualized as circles, while finding nodes are visualized as diamonds.

Q: Which is a Core component of the Graph Search feature (vs. Conditional)?
A: The Graph Database, which is essential for storing nodes and relationships.

Q: How do you navigate to Graph Search in Cortex Cloud?
A: Investigation & Response > Query Builder > select the Graph Search option/tab.

## Cortex_Compliance_in_CyberSecurity

Q: Which entity enforces compliance regulations?
A: Certified auditors

Q: Where can you download the compliance content?
A: Marketplace

Q: True or False? Auditor determines what evidence is acceptable and it is important to note that evidence collected by one auditor may not meet the needs of another.
A: True

Q: What are three possible consequences for not following compliance regulations? (Choose three.)
A: Fines and penalties; Potential jail time; Forced leadership departure

Q: How does the PCI DSS audit practice determine what level of scrutiny is needed?
A: Number of credit card transactions per year

Q: Which certified entities enforce compliance regulations?
A: Auditors

Q: Where can customers submit a form to receive a security compliance report about Palo Alto Networks?
A: Enterprise Portal

## Cortex_Components

Q: What is the primary role of the Cortex Management Console?
A: Investigating security incidents, managing policies, updating agents, and generating reports.

Q: What is the main function of the Customer Support Portal (CSP)?
A: Managing user authentication, authorization, support tasks, and asset management.

Q: Where do you activate new Cortex instances?
A: Cortex Gateway.

Q: What is the purpose of the Cortex Gateway?
A: Managing Cortex roles, instance activation, and RBAC-based authorization.

Q: In which communication protocol does each request occur independently, without any information about previous requests?
A: Stateless.

Q: In which two locations is instance admin rights granted for Cortex products?
A: Cortex Gateway and Cortex Console.

Q: Which condition is required to access a Cortex instance?
A: Access to the Cortex Gateway has been established.

Q: Which URL do you use to access the Cortex Gateway to view or activate your tenants?
A: https://cortex-gateway.paloaltonetworks.com/signin/

Q: What are the three ways users can interact with their Cortex XDR instances?
A: The management console, the API, and external integrations.

Q: What is a primary function of the Customer Support Portal (CSP)?
A: Manage support cases, licenses, and software downloads.

Q: What is the main purpose of the Cortex Gateway?
A: Activate instances and manage user roles via RBAC.

## Cortex_Console_Management

Q: What are the four tasks users access the Cortex Management Console to perform?
A: Investigate (incidents and alerts), Manage (security on endpoints via policy and profiles), Create (update agents and create agent installation packages), and View (dashboards and generate reports).

Q: How long is a SAML session valid before requiring re-authentication?
A: Eight hours.

Q: What are the main sections of the Cortex navigation pane?
A: Dashboards & Reports, Cases & Issues, Investigation & Response, Threat Management, Posture Management, Inventory, Modules, Marketplace.

Q: Where do you configure session security settings in the Cortex console?
A: Settings > Configurations > General > Security Settings.

Q: What does the "Session Expiration" setting control?
A: The session timeout for all signed-in users (User Login Expiration) and a separate timeout for the dashboard page (Dashboard Expiration).

Q: What does the "Allowed Sessions" security setting do?
A: Restricts users based on their client systems; only CSP users from approved domains and IP addresses can connect to the management console.

Q: What does the "User Expiration" security setting do?
A: Allows deactivation of inactive users after a configurable inactivity period.

Q: What are the five components of Dashboards & Reports?
A: Dashboard, Reports, Dashboards Manager, Reports Template, Widget Library.

Q: How do you create a custom XQL widget in the Widget Library?
A: Click the plus (+) icon, enter a name and optional description, write an XQL query, preview results, define visualization type, then save.

Q: What are the three ways to filter entries in a Cortex management console table?
A: By column using the filter icon next to a field heading; by building a filter query using the filter builder; by pivoting from the contents of a cell.

Q: What is the primary function of the Cortex management console?
A: Accessing and navigating dashboards, reports, incident responses, detection rules, asset management, and endpoint management.

Q: Which tab allows you to hide or display selected columns in a management console table?
A: Layout.

Q: Which is the default landing page when opening the Cortex Management Console?
A: Dashboard.

Q: In the Session Security Settings, what does the "Allowed Sessions" feature control?
A: Restricts user access by IP address or domain.

Q: What is one of the methods mentioned for filtering entries within a management console table?
A: Pivoting from the contents of a specific data cell.

Q: How are new custom widgets created for a dashboard in the Cortex console?
A: By creating and saving an XQL Search query.

Q: What console feature allows you to create a shortcut to a frequently visited page in the navigation pane?
A: Adding the page to the Favorites section.

## Cortex_Cortex_Infrastructure_and_Access_Management

Q: What is the geographical deployment requirement for a Cortex instance and its associated infrastructure services?
A: They must be bound to the same specific region to ensure data locality.

Q: How are scopes managed in Cortex SBAC?
A: Tags

Q: Which regional service does Cortex use to receive organizational units?
A: Cloud Identity Engine

Q: Which of the following actions does an Instance Administrator have to configure the tenant?
A: Assign Cortex roles to user accounts.

Q: Which management interface allows a user to manage Cortex roles and permissions for multiple Cortex instances linked to the same CSP account?
A: Cortex Gateway

## Cortex_Cortex_Platform_Portfolio_Overview

Q: Which Cortex XSOAR use case provides the most value to Security Operations Center (SOC) teams?
A: Automating phishing responses

Q: Which statement describes the main challenge that most Security Operations Centers (SOC) face when using traditional SOC tools?
A: Sorting through multiple data silos manually to identify threats

Q: What is the most notable way in which Cortex XSIAM uses machine learning (ML) and artificial intelligence (AI)?
A: Applies pattern recognition on large amounts of ingested data and positions the analyst to make important high-level decisions

Q: Which Cortex XDR function has the largest impact in reducing investigation time of security incidents?
A: Stitches data from multiple sources together to form a unified story

Q: Which statement best describes how Cortex XSIAM can help save costs for organizations?
A: Consolidates multiple security products into a single platform

## Cortex_Creating_and_Managing_Jobs

Q: Which type of job can be used to create a list of indicators at the end of each day?
A: Time-triggered

Q: Which Jobs page option is used to stop a running job?
A: Abort

Q: Which view of the Jobs page shows information about any cases created by the job?
A: Detailed View

Q: What type of job would you use to monitor a vulnerability feed for new vulnerabilities?
A: Feed triggered

Q: Which type of job do you create to perform regular checks on the health status of the system?
A: Time triggered

Q: When you create a new job, in which section of the configuration panel can you specify a playbook?
A: Basic Information

Q: Which option can you use to halt a running job?
A: Pause

## Cortex_Dashboards_and_Reports

Q: Which is a component of the Dashboards & Reports section of Cortex?
A: Widget Library

Q: What can be used to create new widgets?
A: XQL queries

Q: Which component can view existing reports that have been run?
A: Reports

Q: Which component is where to set the default dashboard?
A: Dashboard Manager

Q: Which component is used to edit custom widgets?
A: Widget Library

Q: Which component contains widgets that summarize information about endpoints in graphical or table format?
A: Dashboards

Q: Which component is used to edit templates?
A: Reports Template

## Cortex_Enterprise_Multi-Tenant_License_Management

Q: Which statement about Cortex XSIAM multitenancy is most accurate?
A: It is a software architecture that allows a central main tenant to manage the security operations of one or more child tenants.

Q: How is the Cortex Gateway used during the Cortex XSIAM tenant pairing process?
A: It is a webpage used to initiate the pairing process.

Q: Which statement describes a valid operation between a Cortex XSIAM main tenant and its child tenant?
A: The main tenant administrator can manage configurations such as setting user roles of the child tenants.

Q: What is a benefit of the central licensing model from the perspective of a large enterprise using the Cortex XSIAM multi-tenant environment?
A: It provides a way for the enterprise administrators to dynamically allocate the central license across multiple subsidiaries.

Q: Which organization is most likely to purchase and manage a parent tenant of Cortex XSIAM?
A: A managed security service provider

## Cortex_Enterprise_Multi-Tenant_Operations

Q: True or False? Child visibility is the primary security capability of parent tenants.
A: False. Security configuration is the primary security capability; visibility is a separate (but key) capability.

Q: What state changes in a child tenant when a security configuration becomes managed?
A: The area becomes read-only for a child.

Q: What is the primary function of a parent tenant in the Cortex XSIAM platform?
A: To oversee operational functions for child tenants.

Q: What are some of the specific security configurations that can be applied from parent tenants to child tenants?
A: BIOC rules, alert policies, endpoint prevention profiles, and allow/block lists.

Q: What field may be added to XQL result views when querying multiple child tenants to differentiate them better?
A: Tenant.

Q: How can security configurations for child tenants be managed from the parent tenant?
A: As managed or unmanaged.

Q: Which of the following child tenant areas can parent tenants view?
A: Incidents, alerts, causality graphs, queries, and forensics.

Q: What are the five security areas visible in the Tenant Management pairing view?
A: BIOC Rules & Exceptions, Starred Alert Policies, Alert Exclusions, Profiles (Endpoint Prevention), Allow/Block Lists.

Q: What are the two required steps to configure security actions on behalf of a child tenant?
A: (1) Create a security configuration from the parent tenant. (2) Apply (assign) it to the child tenant via Edit Configurations in Tenant Management.

Q: What happens to the dot next to a child tenant name when a security configuration is being synced?
A: It turns yellow while syncing and turns green when the child is synced.

Q: Name the six parent-to-child visibility areas.
A: Incidents, Alerts, Query Builder, Query Center and Results, Causality and Timeline View, Forensics.

Q: What does XSIAM multitenancy allow an MSSP to do without logging into each child tenant?
A: Investigate security issues on child tenants and apply/lock down security configurations across some or all managed child tenants.

## Cortex_Exclusions_and_Exceptions

Q: What is a key difference between an exclusion and an exception in Cortex?
A: Exclusions suppress issues but maintain protection, while exceptions disable protection entirely.

Q: What happens when an Advanced Analysis exception is created due to a benign verdict?
A: The Endpoint Protection Manager (EPM) that terminated the process is disabled.

Q: What is the purpose of the Cortex External Dynamic List (EDL) service?
A: To block harmful IP addresses and domain names.

Q: What is a global exception in Cortex?
A: An exception that applies universally across all endpoints and agents.

Q: How can you apply a specific exception to all Cortex instance endpoints?
A: Create the exception in Global Exceptions.

Q: Which type of exception is received in JSON files?
A: Support Exception.

Q: Which management console object type is often confused with issue exceptions?
A: Issue Exclusions.

Q: In which way can you create an Issue Exclusion? (Quiz Q1 of 5)
A: Create a new exclusion rule.

Q: How do you create an issue Exception? (Quiz Q2 of 5)
A: Right-click on an issue and select Create Issue Exception.

Q: If an application on a single endpoint is crashing due to one of the Cortex XDR protection modules, which action would resolve it? (Quiz Q3 of 5)
A: Create an Exception Rule in that Endpoint's Exception Policy.

Q: Which option describes an Issue Exclusion? (Quiz Q4 of 5)
A: Suppressing issues while maintaining protection.

Q: Which option describes an Issue Exception? (Quiz Q5 of 5)
A: Suppressing issues while disabling protection.

## Cortex_Forensics

Q: For a deep dive on specific endpoints gathering full file listings and registry hives, which collection type should you use? (Quiz Q1 of 10)
A: Triage collection.

Q: How do you save forensic data from a completed investigation for long-term retention? (Quiz Q2 of 10)
A: Export the data using the available download or export icons.

Q: What time zone setting is recommended for forensic investigations to avoid timeline issues such as daylight savings? (Quiz Q3 of 10)
A: Coordinated Universal Time (UTC).

Q: Which collection type is best for searching a specific activity across a large number of hosts? (Quiz Q4 of 10)
A: Hunt collection.

Q: After closing an investigation in Cortex, what happens to it? (Quiz Q5 of 10)
A: It enters a 'closed pending' status and will be automatically deleted after 24 hours, but you have the option to reopen it during this grace period.

Q: What must be enabled to set up user permissions in Cortex Forensics? (Quiz Q6 of 10)
A: Scope-Based Access Control (SBAC).

Q: In a Triage collection status view, what does the 'Status' field primarily indicate? (Quiz Q7 of 10)
A: The ingestion status and whether the action timed out, failed, or succeeded.

Q: How do you flag a suspicious artifact for other analysts collaborating on a Forensics investigation? (Quiz Q8 of 10)
A: Right-click the item and choose "add to investigation timeline" to flag it with a tag.

Q: Why might the option to create a new investigation be unavailable in Cortex Forensics? (Quiz Q9 of 10)
A: You do not have a role with forensics permissions set to view or edit.

Q: Which tabs in the investigation view consolidate flagged artifacts, timeline, and key findings across all collections? (Quiz Q10 of 10)
A: The Issues, Timeline, and Key Assets and Artifacts tabs.

## Cortex_Integrated_Analysis

Q: What is the purpose of log stitching in Cortex?
A: To collect and correlate issues and logs to create comprehensive event timelines.

Q: What term describes the units used by the Analytics Engine to organize its behavioral analytics activities?
A: Detectors.

Q: What type of data does Enhanced Endpoint Data (EED) provide in Cortex?
A: Detailed endpoint data for deeper analysis.

Q: How does Cortex use machine learning in its Analytics Engine?
A: To model data and detect abnormalities.

Q: Which log type can Cortex-enhanced endpoint data contain? (Quiz Q1 of 5)
A: Endpoint network activities.

Q: Which element is a building block of the Cortex Analytics Engine? (Quiz Q2 of 5)
A: Detectors.

Q: Where does Cortex store the enhanced endpoint data log? (Quiz Q3 of 5)
A: The Cortex Instance.

Q: What type of logs can be viewed directly from the Cortex management console? (Quiz Q4 of 5)
A: Management audit logs.

Q: Which action is found under the Investigate Causality Chain right-click menu of stitched issues? (Quiz Q5 of 5)
A: Open Timeline.

Q: What two JSON attributes should you check to verify log stitching status?
A: matching_status (correlation status with enhanced endpoint data) and agent_data_collection_status (whether EED upload was enabled when the issue was created).

Q: What does the green dot in the first column of the Issues table indicate?
A: That the issue is eligible for analysis in the Causality View (not that it is stitched).

Q: What are the two data collection requirements for enabling Cortex Analytics?
A: (1) Data collected from at least 30 endpoints over a minimum of two weeks must be available in storage. (2) For cloud audit logs, a minimum of five days of collection is required.

Q: What MITRE ATT&CK tactic does "Recurring Rare IP Access" correspond to, and which data sources detect it?
A: Command and Control; detected by Palo Alto Networks Firewall Traffic, Check Point/Cisco/Fortinet Firewall Traffic, GlobalProtect and Prisma Access, and Cortex XDR Agent Endpoint Data.

Q: What MITRE ATT&CK tactic does "Possible Domain Controller Sync" correspond to, and which data source detects it?
A: Credential Access; detected only by Windows Event Collector.

## Cortex_Introduction_to_XQL

Q: What is the primary function of the Query Builder in Cortex?
A: To investigate incidents, search for unknown threats, and create detection rules.

Q: What is a "stage" in an XQL query?
A: A step in a process where data is refined and filtered until you get the results you need.

Q: What is the primary dataset used for XQL queries in Cortex?
A: xdr_data (Raw EDR and stitched events).

Q: What type of queries can be created using the Query Builder?
A: Simple form-based queries and XQL queries.

Q: Name 5 other XQL datasets besides xdr_data.
A: panw_xdrc_raw (XDR Collectors logs), vpn_logs (VPN activity/GlobalProtect), aws_s3_raw (AWS CloudTrail/CloudWatch), google_cloud_logging_raw (GCP logs), microsoft_windows_raw (Windows event logs).

Q: What is the difference between a Regular Preset and a Story Preset?
A: Regular presets organize fields by specific areas of network/endpoint activity for efficient analysis. Story presets organize fields into narratives ("stories") that correlate related events and highlight sequences, relationships, and cause-and-effect scenarios.

Q: What does the `| limit` stage do in XQL?
A: Restricts the output to a specified number of results — useful for sampling a subset of data for quick analysis.

Q: What does the `| dedup` stage do in XQL?
A: Removes duplicate entries, keeping only unique combinations of specified fields, optionally sorted by a field.

Q: What are the two XQL query running options in the Query Builder?
A: Run (immediate foreground task, blocks navigation until complete) and Scheduled Query (periodic or non-periodic automated execution).

Q: What are the three Query Result view options?
A: Table View, Graph View, and Exporting Results (CSV).

Q: What is the three-step threat hunting process in XQL?
A: (1) Query Builder — search for a lead; (2) Causality and Timeline — inspect impacted resources and attributes; (3) BIOCs — create Behavioral Indicators of Compromise to generate alerts.

Q: Write the example "Typical XQL Query" from the course.
A: 
```
dataset = xdr_data
| fields actor_process_image_name, event_type, event_sub_type as SUBTYPE
| filter actor_process_image_name = "powershell.exe"
| dedup event_type, SUBTYPE by asc _time
| limit 4
```

Q: Write the Query Builder overview example query shown on page 1.
A:
```
dataset = xdr_data
fields event_type
| filter event_type = ENUM.PROCESS
| comp count(_time) as PROC_EXECUTIONS
by event_type
```

## Cortex_Network_Asset_Discovery_and_Management

Q: Which application or device can use the IP Address Ranges defined in the Cortex management console?
A: Broker VM Network Mapper

Q: Which component is needed for Cortex Vulnerability Assessment to be enabled?
A: Host Insights add-on

Q: How often does the Cortex Vulnerability Assessment correlate CVE databases with the application and kernel patch lists to detect new vulnerabilities?
A: Every four hours

Q: How is an unmanaged asset specifically characterized within Cortex?
A: An endpoint without the Cortex XDR agent installed

Q: What is the consolidated view in Cortex that integrates all on-premises and cloud assets called?
A: Unified Asset Inventory

Q: What specific action does the Network Mapper perform to detect devices within selected IP address ranges?
A: Scans the network to detect unmanaged hosts

Q: In addition to the distributed network scan in the XDR Agent Settings profile, what discovery method is also used by Cortex?
A: Broker VM Network Mapper

## Cortex_Response_Actions

Q: What is one of the primary response actions available in Cortex?
A: Isolating an endpoint from the network

Q: What does the 'Terminate Process' response action do in Cortex?
A: Ends a suspicious or malicious process on an endpoint

Q: What is the purpose of the 'Quarantine File' action in Cortex?
A: Moves a suspicious file to a secure location to prevent execution

Q: What is the function of the 'Block IP' response action in Cortex?
A: Prevents network communication from a specified IP address

Q: When does a response action expire?
A: When an action times out before at least one targeted endpoint starts running the action

Q: On which page in the management console can you verify the signed-in user's Cortex role?
A: The About page

Q: Which action can be taken once a Live Terminal connection is established?
A: Run applications and commands via Command Line.

Q: Which portion of the Cortex management console displays the results of response actions taken?
A: Action Center

Q: Once an Endpoint has had Disable Capabilities initiated, how can it be reversed?
A: Uninstall and reinstall the agent on the Endpoint.

Q: Which Response Action can be taken from the Cortex management console?
A: Isolate Endpoint

Q: Which option is an example of instance-initiated actions available via the Cortex XDR WebSocket?
A: Terminate a process.

## Cortex_Work_Plan_and_Playbook_Tasks

Q: Which type of task can you use to create a decision tree in a playbook?
A: Conditional

Q: Which task type is used to interact with users through a survey?
A: Data Collection

Q: A playbook can be exported from a Work Plan in which file format?
A: PNG

Q: What does the orange user icon on a playbook task mean?
A: Pending

Q: What is the main purpose of using conditional tasks in a playbook workflow?
A: To serve as decision trees

Q: What is the benefit of using field mapping in Cortex playbooks?
A: To populate issue fields with output values

Q: Which option in the Work Plan of a case allows you to re-run the playbook?
A: Run Again

## Cortex_Working_with_Cases

Q: What is the role of a case in Cortex?
A: A container object that groups related issues, assets, and artifacts originating from the same root cause

Q: What are issues in the context of Cortex cases?
A: Notification objects that report suspicious activity or events

Q: In Cortex, what is an artifact?
A: An attribute of attacking objects, such as filenames, file signers, processes, domains, and IP addresses

Q: How does Cortex handle cases with too many issues?
A: It auto-limits the number of issues in a case to prevent starvation of other cases (limit is 1,000 issues per case)

Q: Which incident attribute is read-only?
A: ID

Q: What constitutes insights in Cortex?
A: Informational issues

Q: Which Cortex incident scoring method takes precedence?
A: Manual

Q: Which type of issues are displayed in the Issues table within the Issues & Insights tab?
A: High and medium severity issues

Q: What is the correct action to take to close Cortex cases?
A: Resolve

Q: Which case scoring method in Cortex takes precedence over all others?
A: Manual assignment

Q: In Cortex, what do assets specifically refer to?
A: The names of affected endpoints and users

## Cortex_Working_with_Issues

Q: What is an Issue in Cortex?
A: A notification type of data to report a suspicious activity or an event.

Q: What is a Case in Cortex?
A: A container object to group-related issues as well as other attack-related data.

Q: What is a Log in Cortex?
A: Any data collection of name-value pairs; values may not be atomic but multiple values.

Q: What is a Stitched Issue?
A: An issue enhanced by Cortex, which is automatically correlated with logs to provide better attack visibility.

Q: What is a Causality Group Owner (CGO)?
A: The process identified as root cause of an attack; the initiator.

Q: What is Causality View?
A: A management console page specialized for causality analysis of issues, in particular stitched issues.

Q: What are the key attributes of the Issues table?
A: Category, Issue ID, Status, Observation Time, Updated Issue Fields, Action, Name, Severity, Description.

Q: What does the Category attribute in the Issues table represent?
A: A classification of the suspicious activity that triggered the issue, based on the issue source and type such as malware or exploit.

Q: What does the Issue ID represent?
A: A unique key generated by Cortex during the issue creation to identify the issue.

Q: What are the possible values for the Status attribute of an issue?
A: New, In Progress, or Resolved.

Q: What does the Action attribute in the Issues table show?
A: The action taken by the issue generator when the issue occurred, such as prevented, detected, etc.

Q: What does the Severity attribute display?
A: The severity level of the issue such as Informational, Low, Medium, or High.

Q: Where does an issue's External ID come from?
A: It is generated by the issues source and is external to the Cortex instance. When the source is the Cortex XDR agent, it is known as the prevention ID.

Q: How do you access the issue's attributes in JSON format?
A: Press Alt and right-click the issue in the Issues table to open the shortcut menu, then click Debug issue.

Q: What does the Manage Issue shortcut menu option allow you to do?
A: Create exclusion rule (puts the triggering rule into silent mode) or Exclude Issue (excludes the issue from the investigation).

Q: What are the two Retrieve Additional Data options?
A: Retrieve issue data (retrieves activity data such as process memory dump) and Retrieve related files (retrieves attack-related files, mainly executables).

Q: What is an issue starring rule?
A: A rule to star and prioritize an issue. A starred issue also prioritizes their hosting cases. Added at Cases & Issues > Case Configuration > Starred Issues.

Q: What takes precedence when both a starring rule and an exclusion rule match the same issue?
A: The exclusion rule has precedence.

Q: What are the three Featured Issue Fields?
A: Host, User, and IP Address.

Q: Where do you add new Featured Issue Field values?
A: Cases & Issues > Case Configuration > Featured Fields.

Q: What do the steps to add a featured host value involve?
A: 1. Click Hosts on the left navigation. 2. Click + Add featured Hosts. 3. Select Create New or Upload from File, then click Add.

Q: What are Tags in Cortex?
A: Metadata labels used to organize, categorize, and search cases, issues, and endpoints.

Q: How do you change the status of an issue?
A: Right-click on the issue and select Change Status, then choose New, In Progress, or Resolved.

Q: What is one of the key issue attributes in Cortex?
A: Host (Featured Issue Field).

Q: What action can you perform on issues in Cortex?
A: Investigating causality chains.

Q: What is included in Cortex's issue features?
A: Stitched Issues (available with XDR Pro Endpoints).

Q: How can you access the Issues table in Cortex?
A: Via Cases and Issues or URL path: /issues.

Q: What is the common term between stitched issues and statistics?
A: Correlation.

Q: Which describes the unique identifier for each issue?
A: Issue ID.

Q: Which two options are considered Featured Issue Fields?
A: User and Host.

Q: What is a Causality Group Owner?
A: The process identified as root cause of an attack.

Q: What is the purpose of starring an issue/case?
A: To highlight and prioritize the starred issue/case.

Q: Where does an issue's name come from?
A: The module that triggered the issue, i.e Behavioral Threat.

Q: What is a stitched issue?
A: An enhanced issue automatically correlated with logs.

## Cortex_Working_with_Lists

Q: Lists are located in which group of settings?
A: Object Setup

Q: Which command can you use to append an item to a list?
A: addToList

Q: Which command do you use to append a new item to a list?
A: addToList

Q: What playbook option gives you the ability to create and manage lists in playbooks?
A: Scripts

Q: With a war room page displayed, which command do you use to display the content of a specified list?
A: getList

Q: Which menu option on the Lists page do you use to make changes to a list?
A: Edit

Q: To overwrite the content of a list, which command do you use?
A: setList

## Cortex_XQL_Building_Blocks

Q: What does the "config timeframe = 30D" command indicate in an XQL query?
A: It indicates that only logs included within a specific timeframe will be evaluated.

Q: Which stage allows you to select specific fields from a dataset?
A: Fields

Q: In an XQL query, what does the "dataset" stage refer to?
A: Dataset (the source dataset to query)

Q: When present, in which position must the "config" stage be used in an XQL query?
A: It must be the first stage.

Q: Which stage erases all the fields and variables defined before it?
A: Fields

## Cortex_XQL_Call_Function_Usage

Q: Which of the following is true regarding the use of a CALL command on RULES?
A: You cannot call a RULE section that exists in Default Rules from the User Defined Rules Section.

Q: Which functions support using CALL functions in the JOIN stage? (Choose 3)
A: CONST, INGEST, RULE

Q: Which of the following is the correct syntax for a CALL command?
A: | join (call "30 day agent") as averager agent_id = averager.agent_id

Q: Which of the following best describes the CALL command?
A: A way to insert a saved search query as if it were in-line in the active query.

Q: Which of the following is true when using the CALL command?
A: The query must already exist in the Query Library.

## Cortex_XQL_Data_Types

Q: What are multivalued fields (MVFs) in XSIAM?
A: Fields that can store multiple values. XSIAM datasets are non-relational (NoSQL) and support MVFs, accessible via the JSON data type and arrays in XQL.

Q: What columns does the Schema table have?
A: dataset, field name, type, array (IS ARRAY), and description.

Q: What does the IS ARRAY column in the Schema table indicate?
A: Whether a field stores multiple values (yes or no).

Q: What are the supported data types for fields in XSIAM datasets?
A: boolean, datetime, enum, float, int, json, and string.

Q: How is the equal sign (=) used differently in alter vs. filter stages?
A: In alter stage: assignment (alter variable = expression). In filter stage: comparison/equality test (Boolean operator returning true or false).

Q: What is the difference between a variable and an expression in XQL?
A: A variable is a symbolic name for a memory location. An expression is a combination of values, variables, function calls, and operators that evaluates to a value before assignment or comparison.

Q: Which data types can be created by direct literal assignment in XQL?
A: int, float, string, boolean (using literals like numbers, "strings", true/false). JSON and datetime require special XQL functions.

Q: Which XQL functions create JSON and datetime variables?
A: JSON: object_create(), json_extract(). Datetime: current_time(), parse_timestamp(), to_timestamp().

Q: What functions can create arrays in XQL?
A: arraycreate(), split(), and json_extract_array().

Q: Can enum types be used in the alter stage for assignment?
A: No. Enum types are only for comparisons in the filter stage, not for assignment in alter stages.

Q: What syntax formats are supported for filtering enum fields?
A: filter event_type in (ENUM.FILE, ENUM.NETWORK, ENUM.PROCESS) OR filter event_type in (FILE, NETWORK, PROCESS) OR filter event_type=FILE or event_type=NETWORK or event_type=PROCESS

Q: What feature on the XQL Search page displays enum values for enum fields?
A: Autocomplete — it automatically shows all possible enum values when an enum field appears in a filter comparison.

Q: Do XQL queries update backend datasets?
A: No. All alter stage operations occur in intermediate in-memory result sets (copies of datasets). The target stage is the only exception — it can override or add a result set to an existing dataset.

Q: [Section KC1] Given DS1 has 20 fields, how many columns are in the result table of: dataset = DS1 | fields fld1 | alter var1 = json_extract(fld1, "$.type") | filter fld1 != null | limit 4?
A: 2 (fld1 selected by fields stage, then var1 added by alter — two columns total).

Q: [Section KC2] Which two data types require special functions to create new variables?
A: Datetime and JSON.

Q: [Quiz Q1] Which two data types can be used in alter stages for assignment? (Choose two)
A: boolean and json.

Q: [Quiz Q2] Which value is known as an untyped constant in XQL?
A: null

Q: [Quiz Q3] Which feature on the XQL Search page of the Cortex XSIAM console displays the enum values for enum fields?
A: Autocomplete

Q: [Quiz Q4] Given DS1 is not empty, which value appears in column F1? Query: dataset = DS1 | alter f1 = "ABC" | filter f1 = "AB" | alter f1 = "ABCD"
A: null (filter f1 = "AB" filters out all rows since f1 was set to "ABC", so no rows pass)

Q: [Quiz Q5] Given DS1 has 20 fields, how many columns are in: dataset = xdr_data | fields fld1, fld2 | fields * | limit 4?
A: 2 (fields fld1, fld2 selects 2 and erases all others; fields * then selects all currently available = 2)

## Cortex_XQL_Dataset_Joins

Q: How many rows does `dataset = A | limit 4 | join type=inner (dataset = A | limit 3) as A2 (true=false)` return?
A: 0 — the hardcoded false condition discards all Cartesian pairs; inner join adds nothing back.

Q: How many rows does `dataset = A | limit 4 | join type=right (dataset = A | limit 3) as A2 (true=true)` return?
A: 12 — right join with true=true is a Cartesian product; 4 × 3 = 12.

Q: How many rows does `dataset = A | limit 3 | join type=left (dataset = A) as A2 (A2.ID = ID)` return?
A: 3 — left join preserves all rows of the left set; only 3 records in the left set.

Q: How many rows does `dataset = A | limit 3 | join type=right (dataset = A) as A2 (A2.ID = ID)` return?
A: 10 — right join with a real join condition on a 10-row dataset returns 10.

Q: How many rows does `dataset = A | limit 3 | join type=right (dataset = A) as A2 (true=true)` return?
A: 30 — right join with true=true is a Cartesian product; 3 × 10 = 30.

Q: Section check — How many rows does `dataset = A | limit 3 | join type=right (dataset = B | limit 4) as B true=true` return?
A: 12 — Cartesian product; 3 × 4 = 12.

Q: Section check — How many rows does `dataset = A | limit 3 | join type=right (dataset = B | limit 2) as B true=false` return?
A: 2 — right join with false condition discards all matches but preserves all right-set rows; right set has 2 rows.

Q: What are the three XQL join types?
A: inner, left, right.

Q: What SQL join is XQL inner join equivalent to?
A: SQL JOIN (also known as INNER JOIN).

Q: What SQL join is XQL left join equivalent to?
A: SQL LEFT OUTER JOIN (also known as LEFT JOIN).

Q: What SQL join is XQL right join equivalent to?
A: SQL RIGHT OUTER JOIN (also known as RIGHT JOIN).

Q: What is the default join type if type is not specified in XQL?
A: inner.

Q: What is the default conflict_strategy if not specified in XQL join?
A: right.

Q: What does conflict_strategy=both do when two result sets have a field with the same name (e.g., FLD)?
A: Both fields are copied — the main set's FLD stays as FLD; the join set's FLD is renamed JOIN(_FLD).

Q: In XQL join syntax, what are the three required clauses?
A: The inner XQL query (in parentheses), the as clause (alias for the right/join result set), and the Boolean join condition.

Q: What error does omitting the "as" clause from a join stage produce?
A: "as is missing"

Q: What error does omitting the join condition (boolean expression) produce?
A: "expression is missing"

Q: In SQL/XQL join terminology, what does "left" refer to?
A: The main result set (the parent/main query result set).

Q: In SQL/XQL join terminology, what does "right" refer to?
A: The join result set created by the join stage executing its own embedded query.

Q: What is a Cartesian join, and how does it differ from a typical join?
A: A Cartesian join pairs every row of the left table with every row of the right table (n×m rows). Unlike a typical join whose condition uses Boolean field comparisons, the Cartesian join's condition is hardcoded as "true."

Q: How many rows does a Cartesian join of a 4-row table and a 3-row table produce?
A: 12 (4 × 3).

## Cortex_XQL_Functions

Q: What is the general syntax for XQL functions?
A: `<return-value> = func_name([<comma-separated-argument-list>])`

Q: What do angle brackets `<>` indicate in XQL function syntax?
A: A placeholder for the actual argument you provide when using the function.

Q: What do square brackets `[]` indicate in XQL function syntax?
A: An optional element — anything enclosed in `[]` is optional.

Q: What does the ellipsis `...` indicate in XQL function syntax?
A: The function can take a varying number of arguments separated by commas starting at that ellipsis position.

Q: What stage command can use both data manipulation AND aggregation functions in XQL?
A: Only `alter` can use both. The `comp` stage can only use aggregation functions (avg, count, first, last).

Q: What is the syntax for the split() function?
A: `split(<string-value> [, <delimiter>])`

Q: What happens if you do not specify a delimiter in split()?
A: A space (" ") is used as the separator by default.

Q: What does array_length(split("192.168.1.20", "2.")) return?
A: 2 — splitting "192.168.1.20" by "2." yields ["19", "168.1."] = 2 elements.

Q: Which symbol separates stages in an XQL query?
A: Pipe (|)

Q: Which two XQL functions return an array?
A: regextract() and split()

Q: What type of object does object_create() produce?
A: JSON

Q: What is the XQL-native format used to access JSON data?
A: Sugar (syntactic sugar notation, e.g., field->key{})

Q: What do brackets ([]) indicate in an XQL function synopsis?
A: An optional parameter.

Q: Which XQL query causes a runtime error: arraycreate("10", "20", 30)?
A: Yes — mixed types (strings and a number) cause a runtime error. All arguments must be the same type.

Q: What does floor(3.6) return in XQL?
A: 3 (rounded down to the nearest integer)

Q: What does round(3.6) return in XQL?
A: 4 (rounded to the nearest integer)

Q: What does pow(x, y) return in XQL?
A: x^y — x to the power of y.

Q: What does arrayindex(array, 0) do?
A: Returns the value at index 0 (the first element) of the array.

Q: What are the five JSON-handling XQL functions?
A: object_create(), json_extract_array(), to_json_string(), json_extract(), json_extract_scalar()

Q: What is the "syntactic sugar" format for accessing a JSON field in XQL?
A: field->key{} (e.g., ax1->user{})

Q: What are the six data type conversion functions in XQL?
A: to_boolean(), to_json_string(), to_timestamp(), to_float(), to_number(), to_integer(), to_string()

Q: What are the four array-processing functions for working with multivalued fields (first four)?
A: Arraycreate(), Arraydistinct(), Arraylength(), Arrayrange()

Q: What does the if() function do in XQL?
A: Takes a Boolean expression and two string values; returns the second argument if the expression is true, otherwise returns the third argument. Syntax: if(boolean_expr, true_value, false_value)

Q: What does regextract(val, exp) return?
A: An array containing substrings of val that match the regular expression exp.

Q: What RE library does XQL use for regular expressions?
A: RE2 — a finite-state machine library (not backtracking). Provides a C++ interface.

Q: What are the four Datetime/timestamp processing functions in XQL?
A: current_timestamp(), format_timestamp(), extract_timestamp(), to_timestamp()

Q: What do the windowcomp functions do?
A: Compute values over a group of rows and return a single result for each row (e.g., rank, first_value, stddev, sample, avg, median).

Q: What is array_any() vs array_all()?
A: array_any() returns true if at least 1 element matches the condition; array_all() returns true if all elements match.

## Cortex XQL: JSON Object Manipulation

Q: What are the two sources of JSON objects in XQL queries?
A: (1) JSON fields in digested datasets (collected logs), and (2) JSON-type variables explicitly created in XQL queries using functions like object_create(), json_extract(), or to_json_string().

Q: Before XDR_DATA JSON fields can be used as JSON type variables in XQL, what must be done?
A: They must be converted using to_json_string().

Q: What are the six JSON attribute data types?
A: null, number, string, Boolean, JSON object, and array of other types.

Q: In JSON, why is "null" (string) preferred over null (bare value) in XSIAM?
A: In the current version of XSIAM, importing a JSON file with a null type will generate an error, so the string "null" is preferred over null.

Q: What are the two methods to access JSON objects in XQL?
A: (1) JSON Processing Functions (json_extract_scalar, json_extract_array, json_extract, object_create, to_json_string), and (2) Syntactic Sugar Format using the -> arrow operator.

Q: What are the five JSON processing functions in XQL?
A: json_extract_scalar(), json_extract_array(), json_extract(), object_create(), to_json_string().

Q: What are the three syntactic sugar formats for JSON access?
A: jsonObj -> jsonScalarPath (scalar), jsonObj -> jsonArrayPath[] (array), jsonObj -> jsonObjPath{} (JSON object).

Q: What does the -> operator represent in XQL syntactic sugar?
A: It is the arrow operator (from C-like languages), used to access a member of a compound object by address. It references child elements of a JSON object.

Q: What is JSONPath and what two notations does it support?
A: JSONPath is a set of expressions defining paths to JSON objects' elements, similar to XPath for XML. It supports dot notation (using .) and bracket notation (using ['element']).

Q: In JSONPath, what does the $ symbol represent?
A: The root element (root node) of the JSON object.

Q: Give examples of dot notation and bracket notation for the same path.
A: Dot: $.B.C — Bracket: $['B']['C']. Both refer to the same element.

Q: Are JSON paths case-sensitive in XQL?
A: Yes. For example, "$.A" differs from "$.a".

Q: What does json_extract_scalar() return?
A: A string type value extracted from a scalar JSON element.

Q: What does json_extract_array() return?
A: An XQL array with string values, extracted from a JSON array element.

Q: What does json_extract() return?
A: An XQL variable of type JSON (a JSON object).

Q: In syntactic sugar format, is the $ root symbol included in the path?
A: No. The $ is dropped from the beginning of the path because jsonObj in jsonObj->jsonPath already points to the root element.

Q: Does syntactic sugar support bracket notation JSONPath?
A: No. Only JSONPath with dot notation is supported in syntactic sugar format, not bracket notation.

Q: What is the sugar equivalent of json_extract_scalar(root, "$.A")?
A: root->A

Q: What is the sugar equivalent of json_extract_array(root, "$.B.F")?
A: root->B.F[]

Q: What is the sugar equivalent of json_extract(root, "$.B")?
A: root->B{}

Q: What would be a valid expression addressing the value 30 in { "root": { "B": { "D": [{"E": 30}, {"E": 40}] } } }?
A: root->B.D[0].E

Q: Which two expressions validly address the element D in { "root": { "B": { "D": [{"E": 30}, {"E": 40}] } } }?
A: json_extract_array(root, "$.B.D") and root->B.D[]

Q: Why should you avoid using json_extract() with JSON array paths?
A: The XQL engine can still run such queries, but the extracted values are not useful.

Q: What is the sugar format for referencing scalars in JSON objects?
A: jsonObj->jsonScalarPath (no $ prefix, no brackets at end)

Q: What is the sugar format for referencing arrays in JSON objects?
A: jsonObj->jsonArrayPath[] (square brackets at end of path)

Q: What is the sugar format for referencing JSON child objects?
A: jsonObj->jsonObjPath{} (curly braces at end of path)

## Cortex XQL: Operators

Q: What are XQL operands composed of?
A: XQL variables (fields) and values.

Q: What is the difference between a function and an operator in XQL?
A: Both take arguments (operands), apply an action, and return a result. Operators provide a more natural and intuitive coding style for syntax compared to functions.

Q: What are the four categories of XQL operators?
A: Comparison, Boolean, Range, and String.

Q: What data type do almost all XQL operators return?
A: Boolean.

Q: List all XQL comparison operators and their descriptions.
A: = (Equal), != (Not equal), < (Less than), <= (Less than or equal to), > (Greater than), >= (Greater than or equal to). Note: = and != accept any type; the others require Number (integer or float).

Q: How is the equality operator (=) overloaded in XQL?
A: In the alter stage it acts as an assignment operator; in the filter stage it acts as a comparison operator returning true or false.

Q: Which XQL operator has two different functions that differ depending on the stage in which it is used?
A: The = (equality) operator.

Q: What is the primary XQL stage where XQL operators are used?
A: Filter.

Q: What are the two XQL Boolean operators?
A: And (Boolean and) and Or (Boolean or). Both take Boolean operands and return Boolean.

Q: Is "not" considered a Boolean operator in XQL?
A: No. "Not" is used to negate the results of operators when used with "in" and "not in" expressions, but it is not considered an operator by itself.

Q: What does the "in" range operator do?
A: Tests if a value is a member of the given set (a comma-separated list in parentheses). Applies to String or Number operands; returns Boolean.

Q: What does the "incidr" operator do?
A: Tests if an IPv4 address exists within a CIDR range. Takes a String operand; returns Boolean.

Q: What does the "incidr6" operator do?
A: Tests if an IPv6 address is in a CIDR range or not. Takes a String operand; returns Boolean.

Q: When using the "in" operator inside a dataset stage, do list items require double quotes?
A: No — list items do not require double quotes when the "in" operator is used in a stage (e.g., `dataset in (xdr_data, lookup1)`).

Q: What is the returned result when using the equality (=) sign in an XQL filter query?
A: A Boolean that returns true or false.

Q: Which range operator allows you to compare IPv4 address lists in CIDR format?
A: incidr.

Q: What are the string operators provided by XQL?
A: "contains", "not contains", and "~=" — all return Boolean values.

Q: What does the "contains" operator do?
A: Returns true if its left operand contains the substring given in the right operand. Can also search for a substring in a string array.

Q: What does the "~=" (tilde-equals) operator do?
A: Tests if a string matches a regular expression pattern. Returns true if the left operand matches the regexp in the right operand.

Q: Is there an arithmetic operator in XQL?
A: No. The plus sign (+) in XQL is a string concatenation operator only, not an arithmetic operator. Using it with numbers generates a runtime error: "Expected string but received number."

Q: Which two options are valid XQL operators (from the set: In, Or, Not, Out)?
A: In and Or.

Q: Which operator tests if a string matches a regular expression?
A: ~=

## Cortex_XQL_Parsing_Rules

Q: Which two Cortex XSIAM roles can access the Parsing Rules page in the management console?
A: Account Administrator and Instance Administrator

Q: What are three possible reasons to use XSIAM parsing rules?
A: Saving storage space; Adjusting log time; Labeling data

Q: Which three XQL stages are supported in XQLP (XQL for Parsing)?
A: Alter, Fields, Filter

Q: Which Parsing Rules section is required?
A: INGEST

Q: Which two components can run XSIAM parsing rules?
A: Broker VM and XDR Collector

## Cortex XQL: Query Result Visualization

Q: What are the three display modes available on the Query Results tab in XQL Search?
A: Table, Graph, and Advanced.

Q: What are the three log formats available for Table and Advanced display modes?
A: RAW, JSON, and TREE (selected via the Layout section under the ellipsis menu).

Q: What is the benefit of the Tree log format?
A: It lists each field on a separate line, providing an alternative view when a query contains too many columns that would otherwise require scrolling left and right.

Q: In Graph mode, what section of the Chart Editor specifies which chart type to display (Column, Line, Map, Pie)?
A: The MAIN section — specifically the Graph Type setting.

Q: In Graph mode, what does the DATA section of the Chart Editor specify?
A: The fields to associate with the X-axis and Y-axis.

Q: In the view stage, what two options are available?
A: view graph and view highlight.

Q: What does the `view highlight` stage do?
A: It highlights specified field values each time they appear in the results table. It also automatically turns on Graph mode when used alongside `view graph`.

Q: What does the `Add to query` button in the Chart Editor do?
A: It automatically creates the `view graph` stage in the query using the settings entered in the Chart Editor.

Q: What is the primary use of the Advanced display mode?
A: Easily copying query results as log entities (field names and values are combined into a comma-separated EVENT field for porting to log-analysis platforms).

Q: How does the Advanced display mode differ from the Table display mode?
A: In Advanced, all fields except _time are combined into a single field called "event", displayed as comma-separated name:value pairs. The Table mode shows each field in a separate column.

Q: What two fields does the Advanced display mode show in a results table?
A: _Time and Event.

Q: What field name does Advanced mode always use for the combined log field, and does it change across queries or datasets?
A: "event" — it is specific and does not change across queries or datasets.

Q: What two fields are automatically added to a results table by the Table mode?
A: _product and _insert_time.

Q: What are the two dialog view modes available when viewing a row's expanded details?
A: JSON VIEW and TREE VIEW.

Q: What is the main use of the Fields pane in the Query Results tab?
A: To analyze the values of a field using a histogram.

Q: For which two field types is histogram analysis NOT supported (returns error "The requested field is not supported")?
A: JSON fields and fields containing composite data (arrays of some types).

Q: What three columns does a histogram table show?
A: Value, Count, and Percentage.

Q: Which two field types can you analyze using a histogram on the Query Results tab?
A: String and ENUM.

Q: In which two log formats can the Advanced mode display XQL query results?
A: Tree and JSON.

Q: What XQL stage keyword is used to specify graph chart parameters directly in a query?
A: `view` (e.g., `| view graph type = pie subtype = full header = "..." xaxis = ... yaxis = ...`)

Q: When a query includes a `view graph` stage, what happens automatically when you run it?
A: The Query Results tab automatically switches to Graph display mode — you do not need to navigate to Graph mode manually.

Q: What `iploc` function syntax is used to enrich an IP field with country code?
A: `| iploc <ip_field> loc_country as <alias>` (e.g., `| iploc action_remote_ip loc_country as country`)

## Cortex XQL: Syntax Basics

Q: What three categories of language elements make up an XQL query?
A: Stages, functions, and operators.

Q: What separates stages in an XQL query?
A: The pipe character (|).

Q: What is the default dataset available in all Cortex XSIAM license types?
A: xdr_data.

Q: Where do you change the default dataset in the XSIAM console?
A: Configurations > Dataset Management.

Q: Does the XQL compiler care about line breaks?
A: No — it ignores line breaks; they're only for readability.

Q: How do you write a line comment in XQL?
A: Double slashes (//) — the rest of the line is ignored.

Q: How do you write a block (multi-line) comment in XQL?
A: Enclose it with /* and */.

Q: Is XQL case sensitive?
A: XQL language elements (stage names, etc.) are case INSENSITIVE; but string literal comparisons are case sensitive by default.

Q: How do you make string comparisons case insensitive?
A: Use the config stage: config case_sensitive = false.

Q: What is the role of the "in" operator in a fragment like `action_local_port in (1122, 2234)`?
A: It is an operator (specifically a range operator returning a Boolean).

Q: Which symbol separates query stages?
A: The pipe (|).

Q: Where is the Query Builder located in the Cortex XDR/XSIAM console?
A: Incident Response > Query Builder.

Q: Which character creates a comment the editor ignores?
A: // (double slash).

Q: Which XQL component handles the grammar and language of its elements?
A: Syntax.

Q: What causes the Run action to be disabled in the query editor?
A: One or more syntax errors in the query.

Q: Which two are available options for running queries?
A: Run and Schedule Query.

Q: What are the four ways to access the XQL development environment?
A: Query Builder (Incident Response > Query Builder > XQL); Query Center (+New XQL Query); the browser path /xql; and the Quick Launcher (type /XQL).

Q: What save options does "Save as" offer for an XQL query?
A: Save as a BIOC rule, a Correlation rule, a Query to the library, or a Widget to the library.

## Cortex_XSIAM

Q: What are two primary capabilities of SIEM? (Choose two.)
A: Event correlation; Security monitoring

Q: Which four are capabilities of XSIAM? (Choose four.)
A: XDR, SIEM, CDR, SOAR

Q: Which two statements best describe XSIAM? (Choose two.)
A: An AI-driven security operations platform; An autonomous SIEM and XDR

Q: (Question 5 of 10) Which challenge is often associated with a SIEM?
A: It displays a large number of false positives

## Cortex_XSIAM_Cortex_Copilot

Q: What is one advantage Cortex Copilot has over other LLM-based AI security assistants?
A: Cortex Copilot is directly linked to Cortex XSIAM's Backend.

Q: Why would a user, who needs their Copilot data to stay within a single region, choose to deactivate Cortex Copilot's Help Center features?
A: Cortex Copilot prompts may be calculated outside of the Cortex tenant region in both Cortex Copilot supported and unsupported regions.

Q: (Question 1 of 5) What Cortex Copilot feature is deactivated by default in unsupported regions?
A: Chat-based Help Center access

Q: (Question 2 of 5) What conditions are required for Cortex Copilot to execute an action in the XSIAM backend?
A: The user must confirm the action and the user must have the XSIAM Rule-Based Access Control permissions to perform the action.

Q: (Question 3 of 5) In which of the following ways can Cortex Copilot speed incident investigation or response?
A: Cortex Copilot can help users generate Cortex Query Language (XQL) queries for incident investigation.

Q: (Question 4 of 5) What suggestion categories will Cortex Copilot provide when users examine an asset or artifact?
A: Investigate, Respond, and Navigate

Q: (Question 5 of 5) How can a Cortex Copilot user access the Cortex Copilot Daily Recap screen?
A: By opening the Cortex Copilot overlay using the Cortex Copilot button in the XSIAM interface

