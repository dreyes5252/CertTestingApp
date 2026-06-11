# Cortex: Building and Managing Queries

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is a Lead?

A lead refers to the first contact with a potential threat. A lead can be obtained from the following sources:

- **Issue** — An issue from a non-Palo Alto Networks system relevant to endpoints or firewalls.
- **Threat Information** — Well-defined threat information from online articles or external threat intelligence.
- **Users and Endpoint** — Users or endpoints that have been reported as acting abnormally.

### Distinguishing Between Issues and Leads

In the realm of cybersecurity, it's crucial to distinguish between issues and leads for effective threat management. Here's a breakdown of each:

| Issue | Lead |
|-------|------|
| An issue is an immediate notification that is readily available to you. Cortex excels in precisely detecting and presenting these issues, allowing for swift action. | A lead, however, is a potential indicator of a threat that requires further definition. Cortex provides integrated tools to help you locate and define these leads, which can then be escalated to issues once validated. |

## Threat Hunting

Threat hunting, also called lead investigation, is when analysts use Cortex investigation tools to find unknown threats hidden in Cortex datasets. You can use the tools in the Cortex management console for threat hunting. The tools should be used in the following order:

*[Diagram: Three-step threat hunting workflow flowing left to right with arrows:*
*1. **Query Builder** — Search for a lead using Query Builder and determine suspicious, attack-intended events in datasets.*
*2. **Causality and Timeline** — Further inspect those events using Causality and Timeline to determine impacted resources (e.g., file or registry key) and attributes (e.g., timestamp).*
*3. **BIOCs** — Create XDR rules such as Behavioral Indicator of Compromise (BIOCs) to create alerts based on determined attributes.]*

---

## Types of Queries

Query Builder provides two ways to create queries: using query templates and using the Cortex Query Language (XQL).

### Tab: Template-Based Queries

Use Query Builder templates to create effective queries without using XQL. The templates are configured to run on specific datasets and with predefined filtering fields and fieldsets (groups of related fields) that are specific to the template type.

### Tab: XQL Queries

You can search for any log attributes available in datasets as well as correlate logs using XQL.

---

## Query Templates

Query templates include predefined fields and fieldsets based on your selected template. You can specify values for these fields and can add other fields to refine their search. To get started with queries, you can build an empty template query with no values specified. The query results will include all of the fields in the template-specific fieldset. You can refine the query and run subsequent queries to narrow down your search.

### Basic Query

To create a basic query, enter the IP Address, Host Name, User Name, and Domain into the Basic Query template. Add a time frame. Click **Add Field** to add additional predefined fields to the query.

For each field, you can specify what the field should match (+) or not match (x), and whether to include empty values for the field in the search results. To add another option to match the field, click the **+** icon to the right of the field entry.

You can choose whether to use a default dataset or search against all datasets.

### Datasets

If you choose Default datasets, hover over the adjacent question mark to see the datasets used for your chosen template. In this case, for the Basic template, the dataset is `xdr_data`.

*[Screenshot: Basic Query template UI showing fields: IP ADDRESS, HOST NAME, USER NAME, DOMAIN, with "Run on: Default datasets" dropdown. A callout shows "Default Datasets include: xdr_data".]*

### Query Builder Helper

To learn more about what the search fields mean and how to use them, click **Query builder helper** in the lower left of the template. For example, in this image, the helper gives a complete explanation of how to use the IP address field.

*[Screenshot: Help Center panel showing IP address field usage examples, alongside the query template with USER NAME field and "Query builder helper" link highlighted.]*

### XQL Helper

To make a more advanced or complex query starting from a template, click the **Continue in XQL** button at the bottom right of the template.

Cortex will show the XQL generated in an editable field, and provide explanations and syntax examples of relevant XQL statements to enhance your template-based query.

*[Screenshot: XQL editor with "Continue in XQL" button highlighted, showing autocomplete suggestions including functions like replace, json_extract, arrayexpand.]*

### Endpoint Template

The other templates are used similarly to the Basic template. In the image, the Endpoint template guides you to provide Host Name, IP Address, File\Process Name, and File\Process Hash fields.

*[Screenshot: ENDPOINT template UI showing HOST NAME, IP ADDRESS, FILE\PROCESS NAME, FILE\PROCESS HASH fields, TIME set to LAST 24H, with "Query builder helper" and "Continue in XQL" links.]*

---

## Querying Processes and Endpoints

In Cortex, you can investigate connections among processes, child processes, and endpoints by building a query. For example, you can build a query to search for processes that have been executed on a specific endpoint. There are several ways to build such a query. You can use the Endpoint template to search by processes, host names, and files. You can use XQL to build a complex query that searches specific datasets containing process information. Or, you can use the Legacy Query Builder.

### Legacy Query Builder

In the Legacy Query Builder, an entity is a specific type of data that you can query, such as Process, File, Network, Image Load, Registry, Event Log, Network Connections, Authentications, and All Actions. You create queries for these entities, and specify a type of action to search for within that entity. For example, when building a file query, you can specify the file activity type, such as create, read, or delete. For a registry query, you can select actions such as Key Create or Value Set.

*[Diagram: The image shows available actions on some entity types:*
*- **PROCESS**: Execution, Injection*
*- **FILE**: All, create, read, rename, delete, write*
*- **REGISTRY**: All, create_registry_key, delete_registry_key, rename_registry_key, delete_registry_value, set_registry_value*
*- **NETWORK**: All, incoming, outgoing, failed, raw_packet]*

---

## Process Entity in Legacy Query Builder

To investigate connections among processes, child processes, and endpoints in the Legacy Query Builder, you can use the process query to define search criteria for process actions, process attributes, acting (parent) process, endpoints, and endpoint attributes. Click the images to enlarge them.

### Process Entity Search Criteria

Search criteria are specified via attributes. For example, process actions can be specified as process execution or injection into another process. Acting (parent) process attributes limit the scope of the search to a specific parent process using attributes such as hashes, user name, signer, or PID.

### Endpoint Attributes in Process Entity

From the Process entity, click **+ HOST Add Host to your search** to specify endpoint attributes. Endpoint attributes limit the scope of a search to those endpoints matching host criteria such as host name, host IP address, host MAC address, host OS, and host installation type.

*[Screenshot: Process query UI showing PROCESS entity node connected to HOST entity, with attributes panel showing INSTALLATION TYPE and HOSTING SERVICE fields.]*

---

## All Actions Entity in New Query Builder

You can also search for endpoints and processes across all endpoint activity, including file events, network events, registry events, process events, and event logs.

### Select All Actions Entity

From the Legacy mode of the Query Builder, select the **All Actions** entity.

*[Screenshot: Query Builder showing entity icons — Process, File, Network, Image Load, Registry, Event Log, and All Actions highlighted. A query panel shows QUERY-1793483.]*

### Process and Endpoint Attributes

To limit the scope to specific acting processes, select **+Process Add Process to your search**. This will enable you to search across causality and OS actors as well. To limit the scope to specific endpoints, select **+Host Add Host to your search** and specify attributes for the host, such as Host Name, IP address, or Host OS. (Host and Endpoint are used interchangeably throughout Palo Alto Networks documentation and user interface.)

In the Legacy Query Builder, once you have specified all entities to match, specify a search time period. Then you can run or schedule your query.

*[Screenshot: Query Builder with QUERY-1793483 shown. Entity scope: FILE, NETWORK, REGISTRY, EVENT LOG, IMAGE LOAD AND PROCESS — All actions. PROCESS "Add Process to your search" and HOST "Add Host to your search" buttons visible. TIME: Search will include Last 24H / Last 7D / Last 1M / Custom.]*

---

## Query Center Page

The Query Center page of the management console displays a table of executed queries. Here is where you can manage your queries. The Query Center is accessed via **Investigation & Response > Search > Query Center**.

In this table, you can right-click the executed queries and obtain a context-sensitive menu that includes: Show results, Copy query URL, Rename, Save as a new query, Schedule, Remove, and other options.

*[Screenshot: Query Center table showing columns QUERY NAME, EXECUTION ID, QUERY ID, QUE…, NUM O…, QUERY DESC. Example rows include XQL-QUERY-1775283, XQL-QUERY-1775531, XQL-QUERY-1773283, XQL-QUERY-1728244, XQL-QUERY-1773208, XQL-QUERY-1728208, XQL-QUERY-1773208. Right-click context menu visible showing: Show results, Copy query url, Save query to library, Save query results, Rename, Schedule, Remove, Copy text to clipboard.]*

### Query Actions

There are several actions in the right-click menu that can be performed on queries.

#### Show Results and Rerun Query

By selecting **Show results** from the context-sensitive menu, you can see the query and its result in more detail. From the results page, you can also edit the query, save the query, or run the query again. When you rerun a query, Cortex creates a new query with the same Query Name as the source query. The Query ID of the new query is newly created based on the timestamp its creation.

*[Screenshot: Query results panel for XQL-QUERY-1728244 showing results table with columns: flag, TIME, VERSION, EVENT_ID, RECORD_ID, PROCESS. Row shows Aug 6th 2025 08:00:18, version 0, 4724, 0, 664. Tabs shown: Query Results, XQL Helper, Query Library, Schema.]*

#### Query Scheduling

You can schedule a query to run once or periodically. Every time a scheduled query runs in the background, Cortex creates a new query with the same Query Name and Query ID, but with a different Execution ID. It is the Execution ID attribute that uniquely identifies query runs in Query Center.

*[Screenshot: Right-click menu with "Schedule" highlighted, and a "New Scheduled Query" dialog showing: Schedule Name XQL-QUERY-1775531, MITRE ATT&CK: 0 Tactics and 0 Techniques selected, Schedule Options: Run one time query on a specific date.]*

---

## Queries on a Recurring Schedule

When you create a query and schedule it to run later, you won't immediately see the query in Query Center because the query isn't running yet. You can find this query in the Scheduled Queries page. Once the query starts its schedule with its first run, it will appear in the Query Center table. If it's scheduled to run periodically, a recurring schedule icon appears to its Query Name in the Query Center table. The context-sensitive right-click menu for the query will now allow you to select **Show Scheduled Query** to see the query's schedule and other information in the Scheduled Queries table.

*[Screenshot: Query Center table showing recurring schedule entries for XQL-QUERY-1786185 with options including "Show Scheduled Query" highlighted in context menu.]*

### New XQL Query

Query Center also provides an action button **+ New XQL Query** to create XQL queries; this opens the XQL Query Builder page.

*[Screenshot: XQL Query Builder with autocomplete dropdown showing options: file_search, alter, arrayexpand, bin, call, cold_dataset, comp, config, datamodel, dataset, dedup, fields. Toggle: "Translate to XQL BETA". Time frame: Last 5 day.]*

---

## Query Attributes

The Query Center page shows query attributes in columns. Among other attributes, these include Query Name, Execution ID, Query ID, Query Status, and Num of Results. To specify which columns are shown in a Cortex console table and to change the column order, click the table settings menu in the upper right corner. This table settings menu is represented by three vertical dots.

| Attribute | Description |
|-----------|-------------|
| **Query Name** | The friendly name of the query. |
| **Execution ID** | A unique identifier generated when the query is run. |
| **Query ID** | An identifier generated when the query is created. |
| **Query Status** | Status of the query, such as Queued, Running, Failed, or Completed. |
| **Num of Results** | The number of rows in the results table of the query. |

*[Screenshot: Query Center table settings panel showing available columns: Query Name, Execution ID, Query ID, Query Status, Num of Results, Query Description. ADD COLUMNS section lists: SQL, Created On Image, Created By, Public API, Query Description, Template/Source Limits, Timezone, XQL.]*

*[Screenshot: Query Center table with columns: QUERY NAME, EXECUTION ID, QUERY ID, QUERY STATUS, NUM OF RESULTS. Sample rows: XQL-QUERY-1785655 (Completed, 20), XQL-QUERY-1775531 (Completed, 1000), XQL-QUERY-1773283 (Completed, 1000), XQL-QUERY-1773283 (Completed, 1000), XQL-QUERY-1775531 (Completed, 1000), XQL-QUERY-1773283 (Completed, 1000).]*

---

## Scheduled Queries Page

The Scheduled Queries page displays a table of filtered scheduled queries. Scheduled query attributes are displayed in columns, which can be specified using the table settings menu. The Query ID is the unique identifier for the Scheduled Queries table, and the Execution ID is the unique identifier for the Query Center table.

The image shows the query name, schedule time, next execution, and query ID displayed in the table, and other attributes that can be selected for display.

*[Screenshot: Scheduled Queries table (Found 8 results) showing columns: QUERY NAME, SCHEDULE TIME, NEXT EXECUTION, QUERY ID. Example rows: XQL-QUERY-1786185 (Every Friday at 05:00, Aug 22nd 2025 05:00:00, qc_1755297905_503), XQL-QUERY-1786185 (Daily at 07:00, Aug 16th 2025 07:00:00, qc_1755297763_502), and others. Table settings panel shows available columns: Query Name, Schedule Time, Next Execution, Query ID. ADD COLUMNS section: XQL, Created By, Mitre ATT&CK Tactic, Mitre ATT&CK Technique, Public API, Query Description, Recurrence, XQL.]*

---

## Knowledge Checks

### Section Knowledge Checks (p. 8)

**Q1. What is the primary function of the Query Builder in Cortex?**
- To optimize network bandwidth
- To search for unknown threats in Cortex datasets using form-based and XQL queries ✅
- To automate software updates
- To manage user access permissions
- **Correct: To search for unknown threats in Cortex datasets using form-based and XQL queries**

**Q2. What type of queries can be created using the Query Builder?**
- Simple form-based queries and XQL queries ✅
- Hardware diagnostics queries
- User activity tracking queries
- Software version check queries
- **Correct: Simple form-based queries and XQL queries**

**Q3. What is the purpose of the Execution ID attribute in the Query Center?**
- To label network devices
- To uniquely identify each query execution ✅
- To manage endpoint health status
- To track software licenses
- **Correct: To uniquely identify each query execution**

**Q4. Where can you find queries that are scheduled to run later in Cortex?**
- User Activity page
- Software Updates page
- Device Inventory page
- Scheduled Queries page ✅
- **Correct: Scheduled Queries page**

### Numbered Quiz (Questions 1–5)

**Question 1 of 5. Which of the following best describes a "lead" in the context of threat management?**
- An immediate, verified security notification.
- A potential indicator requiring further investigation. ✅
- A reported issue from a non-Palo Alto Networks system.
- A dataset found through Cortex threat hunting tools.
- **Correct: A potential indicator requiring further investigation.**

**Question 2 of 5. How does Query Builder's template-based approach assist users?**
- It enables complex queries to be built only with XQL.
- It creates queries that can only run on predefined datasets.
- It provides a visual display to assist in building queries.
- It allows users to create effective queries without using XQL. ✅
- **Correct: It allows users to create effective queries without using XQL.**

**Question 3 of 5. If a query is not displayed in the Query Center after you build it in the Query Builder, which condition is the most likely cause for it not to be displayed?**
- The query execution result table is empty.
- The query is scheduled and has not run yet. ✅
- There are required fields to be filled in the query form.
- Query Center is not the correct page to get the query execution results.
- **Correct: The query is scheduled and has not run yet.**

**Question 4 of 5. Which of the following is a function of the Legacy Query Builder?**
- Building queries using templates.
- Correlating logs using XQL statements.
- Searching on specific entities like files and processes. ✅
- Providing a visual interface to build queries from the Query Library.
- **Correct: Searching on specific entities like files and processes.**

**Question 5 of 5. On which Cortex management console page can you rerun a query?**
- Query Center ✅
- Query Builder
- Scheduled Queries
- Query Action Center
- **Correct: Query Center**
