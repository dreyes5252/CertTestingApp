# Cortex: Introduction to XQL

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## XQL Overview

CorteX Query Language (XQL) is designed for use with XML data in Cortex. It allows users to query and manipulate XML data in a flexible and extensible manner that makes querying easy and intuitive.

Here are some key aspects of XQL:

- XQL has similarities with SQL but is not identical. For example, both use the functions join and union.
- XQL allows you to form complex queries against data stored in Cortex in a wide variety of ways.
- XQL supports everything from simple queries to more complex ones using joins, unions, and aggregations.
- XQL is primarily authored from the Query Builder.
- XQL offers pre-defined data grouping methods to streamline common query operations, such as presets.
- In order to use XQL productively, you should access and make use of the XQL Language Reference and the XQL Schema Reference documents available on the Palo Alto Networks website.

*[Screenshot: Query Builder showing an example XQL query:]*

```
dataset = xdr_data
fields event_type
| filter event_type = ENUM.PROCESS
| comp count(_time) as PROC_EXECUTIONS
by event_type
```

---

## Why Use XQL?

Knowing how to create XQL queries is important for a variety of critical tasks in Cortex. This includes both reactive tasks, like doing case investigations, and proactive tasks, like creating detection rules.

With the ability to query data sources, you can perform investigation and response tasks that can lead to preventing or resolving security issues. Additionally, you can use XQL queries in order to build effective dashboards and widgets as well as detection rules.

*[Diagram: "Use XQL to" flowchart branching to: Query Data Sources Datasets/Presets → Correlate Logs and Alerts → Lead Investigations → Create Dashboards and Widgets; also → Visualize/Conclude Results → Aid Investigation And Response Outcomes; → Build Detection Rules (i.e., BIOCs) → Threat Hunt Use Cases.]*

---

## Investigating Potential Threats with XQL

Potential threats are investigated via threat hunting and the identification of leads. XQL queries allow you to perform complex searches on datasets to inspect events and add preventative measures.

### Threat Hunting

Threat hunting, also called lead investigation, is when analysts use Cortex investigation tools to find unknown threats hidden in datasets. You can use the tools in the Cortex management console for threat hunting. Here's an example of a typical process from lead investigation to creating detection rules.

*[Diagram: Three-step process:]*
1. **Query Builder** — Search for a lead using Query Builder and determine suspicious, attack-intended events in datasets.
2. **Causality and Timeline** — Further inspect those events using Causality and Timeline to determine impacted resources (e.g., file or registry keys) and attributes (e.g., timestamp).
3. **BIOCs** — Create XSIAM Rules such as Behavioral Indicators of Compromise (BIOCs) to generate alerts based on determined attributes.

---

## Query Builder

The Query Builder is a powerful tool that aids in the detection of threats by allowing you to search for indicators of compromise and suspicious patterns within data sources. It assists in expanding case investigations by identifying related events and entities, such as activities associated with specific user accounts or network lateral movement. The Query Builder enables data analytics on suspected threats, helping organizations analyze large volumes of data to identify trends, anomalies, and correlations that may indicate potential security issues.

### Query Builder Usage

There are multiple usages of Query Builder in Cortex:

- Investigate any lead quickly
- Expose the root cause of an issue
- Perform damage assessment
- Hunt for threats from data sources
- Build complex queries for entities and entity attributes

---

## Query Builder Search Options

Depending on your level of comfort with writing XQL code and the complexity of the search, you have the options of using the XQL Editor, search fields, or search templates.

### XQL Editor

The query editor in Cortex is a key tool for security analysts. It is designed to help you create and run queries that retrieve and analyze data from different sources like logs and events. The query editor isn't just about writing commands; it enables you to search, filter, and correlate data. This is crucial when investigating security incidents, looking for potential threats, or identifying patterns in your data that could indicate risks. By using the query editor effectively, you can streamline your investigations and pinpoint issues more quickly.

**Open the XQL Editor**

Click below the Query Language box to open the editor in Cortex.

**Enter the XQL Code**

Start typing in the XQL code. The editor will show attribute options for the XQL command. Additionally, the XQL Helper at the bottom will display useful information about the command. Then select **Run**. You also have the option to save the search.

You can also choose from predefined time ranges, such as the last 24 hours, last 7 days, or last month as well as the option to set custom date ranges, giving you flexibility to tailor the analysis to specific needs.

---

## A Typical XQL Query

Every XQL query is built using a series of stages. A stage as a step in a process where data is refined and filtered until you get the results you need. A query can have one or more stages, depending on the complexity of the analysis you're performing.

By combining stages, you can create a powerful and targeted query that efficiently retrieves and processes the data you need. This structure allows you to adapt and refine your queries based on the specific security questions you want to answer.

*[Diagram: Annotated XQL query with callout explanations:]*

```
dataset = xdr_data
| fields actor_process_image_name, event_type,
  event_sub_type as SUBTYPE
| filter actor_process_image_name =
  "powershell.exe"
| dedup event_type, SUBTYPE by asc _time
| limit 4
```

- **`dataset = xdr_data`** — Defining the dataset that you want to analyze. In this case, it is xdr_data which includes various logs and records collected by XSIAM.
- **`| fields actor_process_image_name, event_type, event_sub_type as SUBTYPE`** — Specifying which fields to include in the output. We are pulling out the event_type and renaming event_sub_type as SUBTYPE. This helps focus on specific details while keeping the output clean and organized.
- **`| filter actor_process_image_name = "powershell.exe"`** — This stage filters the data and narrows it down to events where the actor_process_image_name is specifically powershell.exe.
- **`| dedup event_type, SUBTYPE by asc _time`** — This stage is used for deduplication. It ensures that we only keep unique combinations of event_type and SUBTYPE, sorted by the _time field in ascending order.
- **`| limit 4`** — This limit stage restricts the output to just 4 results. This is particularly useful when we only want a sample or a subset of data for quick analysis.

---

## XQL Query Running Options

The Query Builder provides two running options for executing a query.

### Run

With Run, you can immediately run your query as a foreground task, which blocks you from going to the other pages of the management console. The Run option opens the Results table page when the search completes.

### Scheduled Query

Another option is the scheduled query. Scheduled queries are incredibly useful for ongoing data analysis or monitoring tasks. They enable you to automate your processes, ensuring that you regularly review the data without having to initiate the queries manually each time.

The two types of scheduled queries are periodic and non-periodic scheduled queries. A non-periodic scheduled query runs once at a single point in time. A periodic scheduled query runs periodically at a specified frequency.

*[Screenshot: Scheduled Query dialog showing "Creates a new scheduled query" option, with "Run this task every [interval]" setting. Callout: "Runs and gets notified when the query runs." Periodic / Non-Periodic radio options.]*

---

## Query Result View Options

The Query Results view provides you with several options to view the results.

### Table View

This table view allows for easy filtering, sorting, and quick scanning of results, making it ideal for detailed analysis where we need to look closely at each data point.

### Graph View

The graph view is useful for identifying trends and patterns that might not be immediately apparent in raw data. Users can choose from various graph types, such as bar charts, line graphs, or pie charts, depending on the nature of the data and the insights we're seeking.

### Exporting Results

If you want to take your analysis further or create reports, you can export the results in various formats, such as comma-separated values (CSV). This capability is essential for sharing insights with team members or integrating findings into other tools.

### Filters

Like with other management console tables, you can create filters on columns, change the table layout by hiding some columns, export the table content, and take action on one or more rows of the Results table.

### Columns and Shortcut menus

The columns and shortcut menu actions depend on the type of search entity given in the query definition. For example, the columns for a File query are different from those of a Process query, while entity types can also have many common columns.

### Other Views

You can also open the causality or timeline views to further investigate using the open card and open timeline actions, respectively, in the search results.

---

## Regular and Story Presets

There are two types of presets in Cortex: regular and story. They refer to different types of preset configurations designed to assist security analysts in performing targeted analysis of security data.

### Regular Presets

**Definition**

Regular presets are predefined configurations that organise fields relevant to specific areas of network or endpoint activity and focus on providing a comprehensive set of fields necessary for analysing common security use cases, such as investigating network traffic, endpoint events, authentication activities, or system logs.

**Contain Attributes**

Regular presets typically include essential attributes such as source and destination IP addresses, user identities, timestamps, event types, severity levels, and other relevant metadata associated with security events.

**Efficient**

Regular presets are designed to streamline the analysis process by presenting analysts with a curated selection of fields tailored to their investigative needs and help analysts quickly access and examine critical data points relevant to their analysis tasks, thereby facilitating efficient threat detection and case response.

### Story Presets

**Definition**

Story presets are specialised configurations that organise fields into common schemas or narratives known as "stories." These stories correlate related security events and contextual information to provide a cohesive view of specific security cases, attack patterns, or behavioural trends observed within the network or endpoint environment.

**Difference from Regular Presets**

Unlike regular presets, which focus on organising fields based on general categories of security data, story presets emphasise storytelling by presenting data in a narrative format that highlights the sequence of events, relationships between entities, and potential cause-and-effect scenarios.

**Data Presentation**

Story presets aim to contextualise security events within a broader narrative framework, enabling analysts to understand the progression of a case, identify attack tactics and techniques, and extract actionable insights from complex security data. By presenting data in a story-driven format, these presets enhance analysts' ability to comprehend and respond effectively to security cases.

---

## Dataset Overview

Every XQL dataset query begins by identifying a data source that the query will run against. Each data source has a unique name, and a series of fields. The query specifies the data source, and then provides stages that identify fields of interest and perform operations against those fields.

### Dataset Options

The primary dataset is xdr_data. It includes raw EDR events from the XDR agent and other relevant telemetry. This dataset offers a wide range of fields for in-depth querying and analysis. There are various other datasets available, depending on your integrations and data sources. These datasets cover a wide range of sources, including network flow logs, authentication logs, cloud platforms like AWS (Amazon Web Services) and GCP (Google Cloud Platform), and security solutions like Palo Alto Networks NGFW (Next Generation Firewall) and Prisma Access. This diverse array of datasets within the XSIAM platform empowers users to conduct detailed and targeted analysis, enhancing their ability to detect and respond to security cases effectively.

**Primary Dataset**

`xdr_data`: Raw EDR and stitched events

**Other Datasets**

Some other datasets are:
- `panw_xdrc_raw`: XDR Collectors logs
- `vpn_logs`: VPN activity, e.g., GlobalProtect
- `aws_s3_raw`: AWS CloudTrail/CloudWatch logs
- `google_cloud_logging_raw`: GCP logs
- `microsoft_windows_raw`: Windows event logs

---

## Preset Datasets

Presets are subsets of the larger dataset available in Cortex. They are curated collections of fields that are particularly relevant for analyzing and investigating specific aspects of security data, such as network traffic, endpoint activity, authentication events, or system logs. They are specialised configurations designed to facilitate efficient and focused analysis of specific areas of network and endpoint activity. Preset can be used in conjunction with datasets and data models.

### More About Presets

While presets include only a subset of fields compared to the entire dataset, they contain all the essential information needed to perform targeted analysis. Presets are tailored to meet the requirements of common security use cases and scenarios encountered by organisations.

### Preset Efficiency Benefits

**Field Groupings**

Each preset comprises a carefully selected grouping of fields that are most useful for analysing the designated area of network or endpoint activity. These fields may include attributes such as source and destination IP addresses, user identities, and more, depending on the specific focus of the preset. By organising fields into logical groupings within presets, Cortex simplifies the analysis process and provides analysts with quick access to the relevant data points needed to investigate security cases or anomalies effectively.

---

## XQL Use Case Scenarios

XQL has a wide variety of use cases in Cortex.

### Threat Hunting (Proactive)

Perform threat hunting exercises by querying historical data to proactively identify potential security risks or vulnerabilities in your environment. Look into logs to define leads and build a use case around the lead.

*[Screenshot: Query Builder with a saved query labelled "XQL-QUERY-1816" — query code illegible at render resolution.]*

### Case Response (Reactive)

Investigate day to day security incidents by correlating different types of security events and logs to understand the scope and impact of an attack. Analysts do day to day work using the query builder to understand more about specific events.

*[Screenshot: Query Builder with a query focused on event correlation — code illegible at render resolution.]*

### Build Custom Widgets

Use XQL to generate data for custom widgets which can be added into reports and dashboards so you can visualise the data from the query data.

*[Screenshot: Query Builder results displayed as a pie chart widget.]*

### Detection and Correlation Rules

Analyse log data to detect anomalous behavior or patterns that may indicate a security breach or insider threat and then create rules to block or kill the action.

*[Screenshot: "Define the Correlation Rule" XQL Search dialog showing:]*

```
config case_sensitive = false
| dataset = xdr_data
| filter event_type = ENUM.PROCESS and event_sub_type = ENUM.PROCESS_START and action_process_signature_vendor contains "anydesk"
| alter category = "Threat Detection"
| fields action_process_signature.*, action_process_image_path, action_process_image_sha256, actor_effective_username, agent_hostname,
  category , causality_actor_causality_id , action_process_image_name , agent_id
```

Alert Suppression — Define whether alerts generated by the Correlation Rule are suppressed by a duration time, field, or both.

### Parsing Rules

Use XQL to create parsing rules during data ingestion.

*[Screenshot: Parsing Rules editor showing "User Defined" / "Default Rules" / "Built" / "Simulate" tabs. A multi-line XQL parsing rule is visible in the code editor. XQL Samples panel on the right shows VENDOR / PRODUCT / RAW LOG columns. Logs output table shows columns: DATASET, VENDOR, PRODUCT, OUTPUT LOGS with sample rows containing apache_httpd_raw, Apache, Httpd, and truncated broker/device/path values.]*

---

## Knowledge Checks

### Section Knowledge Check (gray-bar widget, p.8)

**Q1. What is the primary function of the Query Builder in Cortex?**
- To optimize network bandwidth
- To investigate incidents, search for unknown threats, and create detection rules ✅
- To manage user access permissions
- To automate software updates
- **Correct: To investigate incidents, search for unknown threats, and create detection rules**

**Q2. What is a step in an XQL query where data is refined and filtered until you get the results you need?**
- Sort
- Delimiter
- Command
- Stage ✅
- **Correct: Stage**

**Q3. What is the primary dataset used for XQL queries in Cortex?**
- microsoft_windows_raw
- panw_xdrc_raw
- vpn_logs
- xdr_data ✅
- **Correct: xdr_data**

**Q4. What type of queries can be created using the Query Builder?**
- Hardware diagnostics queries
- Simple form-based queries and XQL queries ✅
- Software version check queries
- User activity tracking queries
- **Correct: Simple form-based queries and XQL queries**
