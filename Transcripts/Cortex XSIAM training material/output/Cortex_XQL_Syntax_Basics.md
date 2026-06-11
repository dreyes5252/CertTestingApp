# Cortex XQL: Syntax Basics

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Components of XQL Queries

XQL is used to search datasets for logs. XQL language syntax is concerned with the grammar or language elements that make up an XQL query. XQL language elements include stages, functions, and operators. For this lesson, we will be referring to the `xdr_data` dataset. While this dataset applies to both XDR and XSIAM, XSIAM also offers a datamodel syntax which can be used to map logs into a single, unified data model following the Cortex Data Model Schema. Please refer to the marketplace for the appropriate pack, which will install the data model rules for the ingested logs.

### Stages
Stages perform certain operations in evaluating queries. For example, the dataset stage specifies a dataset on which to run the query. Commonly used stages include dataset, fields, filters, join, and sort.

```
dataset, fields, filters, join, sort
```

### Functions
Some stages can use functions to convert the data to a desired format. For example, `current_time()` returns the current timestamp, while `extract_time()` can obtain the hour information in the timestamp. Functions may or may not need input parameters. The filter and alter stages are the two stages that can use functions for data transformations.

```
alter timepart = extract_time(current_time(), "HOUR")
```

### Operators
Operators in programming languages are function-like constructs but differ syntactically and semantically. In general, you can write the sum of the numbers x and y using an addition (x,y) function or using the x+y operator. Operators are specific types of functions for relating operands. XQL queries can use operators usually to relate some data (variable and/or values). XQL operators are comparison operators, Boolean operators, array and range operators, and a tagging operator. `in` in the example below is a range operator that returns a Boolean value.

```
filter action_local_port in (1024,9999)
```

---

## A Typical XQL Query

XQL queries are composed of XQL stages, making stages the fundamental components of an XQL query.

The XQL stages in this query example are dataset, filter, fields, dedup, and limit. Each stage serves a specific purpose in query evaluation. The limit stage, for instance, ensures a maximum of four records in the results table. In XQL queries, stages are separated by pipes (`|`).

Stage syntax differs based on the specific stage. The dataset stage requires an assignment, the fields stage necessitates a comma-separated list of fields, and the limit stage requires an integer.

The following is an example XQL query:

```
dataset = xdr_data
| filter actor_process_image_name = "powershell.exe"
| fields event_type, event_sub_type as SUBTYPE
| dedup event_type, SUBTYPE by asc _time
| limit 4
```

## Datasets

XQL queries are executed against datasets, which are referred to as data sources in XQL. Each query operates on one or more datasets. It is essential for the query datasets to already exist during the design phase to ensure successful query compilation.

### Explicit and Implicit Datasets
Datasets can be specified either implicitly or explicitly in XQL queries. To explicitly declare a dataset in a query, you would use the dataset stage, as shown in the example provided. Alternatively, a query can implicitly use a dataset. If you omit the dataset stage, the XQL query compiler will not generate an error. Instead, the XQL query engine will run the query against the default dataset.

```
dataset = xdr_data
```

### xdr_data
The built-in default dataset, `xdr_data`, is available in all Cortex XSIAM license types. You can change the default dataset in **Configurations > Dataset Management** from the Cortex XSIAM management console. In the example below, both queries will return the same result set, given that the out-of-box default dataset `xdr_data` has not changed in the Cortex XSIAM instance where the queries are running.

```
dataset = xdr_data
| fields actor_process_image_name as actProcess
```
```
fields actor_process_image_name as actProcess
```

---

## Line Breaks in XQL

There is no restriction on the number of stages in an XQL query, allowing for potentially complex queries. The XQL query compiler ignores line breaks, enabling you to format your query using line breaks for improved readability.

**One Line Break**
```
dataset = xdr_data | filter actor_process_image_name = "powershell.exe"
| fields event_type, event_sub_type as SUBTYPE | dedup event_type, SUBTYPE by asc _time
```

**Two Line Breaks**
```
dataset = xdr_data | filter actor_process_image_name = "powershell.exe"
| fields event_type, event_sub_type as SUBTYPE | dedup event_type, SUBTYPE by asc _time
```

**Three Line Breaks**
```
dataset = xdr_data
| filter actor_process_image_name = "powershell.exe"
| fields event_type, event_sub_type as SUBTYPE
| dedup event_type, SUBTYPE by asc _time
```

## Comments in XQL

You can add comments in XQL queries using the same methods you would in C/C++ and Java. Comments are ignored by the XQL query compiler. There are two types of comments in XQL: line comments and block comments.

### Line Comments
Insert double slashes (`//`) at a specific point in the line to instruct the XQL query compiler to ignore the rest of the line.
```
// this is an example of a line comment
```

### Block Comments
Enclose comments that span multiple lines using `/*` and `*/`.
```
/* This is
a block comment */
```

### Line and Block Comments Example
The following XQL query demonstrates the use of line and block comments.
```
dataset = xdr_data // the rest of this line is ignored
| filter event_type = NETWORK
/* Here is a multi-line
   comment. */
| fields action_upload as up, action_download as down
```

---

## Case Insensitivity in XQL

Some programming languages like C/C++, Java, Python, and JavaScript are case sensitive, while SQL and XQL are not.

### Case Insensitivity in Action
There is no difference between writing XQL language elements, such as stage names, in all uppercase, all lowercase, or mixed format. In the following example, the two queries are equivalent.
```
filter actor_process_image_name = "powershell.exe"
FILTER actor_PROCESS_image_name = "powershell.exe"
```

### Default Case Sensitivity in String Comparisons
In XQL, string comparisons are case sensitive by default. These two XQL queries are different as the literals "powershell.exe" and "powershell.EXE" do not match as values.
```
filter actor_process_image_name = "powershell.exe"
FILTER actor_process_image_name = "powershell.EXE"
```

### Making String Comparisons Case Sensitive
You can make string comparisons case insensitive using the config stage. For example, in the following query `actor_process_image_name` matches any "powershell.exe", ignoring case sensitivity.
```
config case_sensitive = false
| filter actor_process_image_name = "POWERshell.EXE"
```

---

## XQL Search Page

The XQL Search page in the Cortex XSIAM management console provides all the essentials for creating, editing, compiling, running, and viewing results. In this lesson, this page is called the XSIAM development environment.

The XQL query page has five sections (carousel):

1. **XQL Query Editor** — The XQL query editor is in the top pane where you can write your XQL queries. The query editor provides features to color code and autocomplete the XQL code. It also shows syntax errors as you type.
2. **Search Period Specification** — You can specify a time interval for the search by using the 24H, 7D, 1M, and Custom buttons in the upper-right corner. Except for the custom button, the other buttons belong to the last 24 hours, seven days, and one month. You can specify the start and end of a time range using the Custom button.
3. **Query Results** — Four tabs are displayed in the lower pane. In this example, the Query Results tab is selected. This tab displays the query execution results in a table by default called the Results table. There are other result set display options, such as graphs and a histogram table. You can even create a widget whose data comes from an XQL query and place this widget in a management console dashboard.
4. **Run Options** — There are different options to run your query, including Run and Save as. The Run button executes the query in the foreground, which means you cannot work with the browser until a result set generates. You can also run your query later at a specific time.
5. **Schema** — The Schema tab allows you to view all the fields and their type within the dataset from the query.

## Accessing the XQL Development Environment

You can access the XQL development environment in the management console in different ways.

- **From the Query Builder** — To access the XQL development page from the Query Builder, go to **Incident Response > Query Builder > XQL**.
- **From the Query Center** — To access the XQL development page from the Query Center, go to **Query Center** and then click the **+New XQL Query** button.
- **Using the Browser** — To access the development page from the browser, type the relative path `/xql` in your web browser.
- **Using the Quick Launcher** — To access the XQL development page from the Quick Launcher, click the **Quick Launcher**, type `/XQL`, press **Enter** and click the path that pops up.

## Query Editor

The XSIAM query editor displays the query name, color codes entries, highlights syntax errors, and provides auto-completion options.

### Query Name
Each XQL query has a query name. A name is automatically assigned to an XQL query when the query is successfully compiled and then run. The query name is displayed in the upper-left corner. In the example, the query name is XQL-QUERY-576. You can rename queries in the Query Center, where all search queries are listed in a table.

```
config timeframe between "2020-04-01 00:00:00" and "2022-01-31 00:00:00"
| dataset = xdr_data
| filter actor_process_image_name = "powershell.exe"
| limit 1000
```

### Syntax Errors
The query editor highlights syntax errors with red underlining. The editor also shows the line containing errors. Note that the Run actions are disabled if an XQL query contains syntax errors.

```
dataset = xdr_data
| filter event_type = ENUM.GAP
| fieldsx action_upload as up, action_download as down   ← line 3 flagged (misspelled "fieldsx")
```

### Color Coding
The example illustrates color coding. Here, stage names are shown in light green, operators are shown in light blue, and function names are shown in light purple.

```
dataset = xdr_data
| filter actor_process_image_name in ("powershell.exe", "wscript.exe")
| alter agent_ip_addresses = arrayindex(agent_ip_addresses_v6, dot_actor_remote_ip)
```
*(exact field args in the alter line are [low-confidence] — read from a small screenshot.)*

### Auto Completion
The query editor provides auto-completion options as you type your query. The example shows how the query editor automatically displays available datasets (e.g., corrds1, corrrule04ds, ds1_0000, ds1_0001, dsc_0000).

---

## Options for Running Queries

You can run your query either in the foreground or in the background. You can also save your query or schedule it.

- **Run** — With Run, you can immediately run your query as a foreground task, which blocks you from going to the other pages of the management console. The Run option opens the Results table page when the search completes.
- **Schedule a Query** — You can schedule two types of queries: periodic and non-periodic. A non-periodic scheduled query runs once at a single point in time. A periodic scheduled query runs periodically at a specified frequency.
- **Save As** — With Save as, you can save your XQL query for later use as a behavioral indicators of compromise (BIOC) or Correlation rule. Alternatively, you can simply save your query to your query library. *(The Save as menu offers: BIOC Rule, Correlation Rule, Query to Library, Widget to Library.)*

## Query Results

The Query Results display the search results in a tabular format by default, known as the results table. You can also display the results in other formats, such as in graphs.

A results table is like any other table in the management console. All standard actions are available, such as table content download, refresh, in-table search, filtering, and the three-dot menu to change the table layout. You can perform right-click actions on each or selected rows of the results table. For example, you can pivot within a row to causality or timeline view to further investigate the row. The display of columns in the results table depends on the XQL query definition, as it is the fields stage that determines the columns.

As you view the results of your query, check out the fields stage parameters (`fields action_upload as up, action_download as down`) and the column names in the results table. Check if you see other columns in the table that the filters stage doesn't specify.

---

## Knowledge Checks

### Section Knowledge Checks (correct option shown by green highlight)

**Q1. What is the role of the "in" operator in this XQL query fragment? `action_local_port in (1122, 2234)`**
- operator ✅
- function
- range
- operand
- **Correct: operator**

**Q2. Which symbol would represent a separation between query stages?**
- Comma (,)
- Semicolon (;)
- Pipe (|) ✅
- Forward slash (/)
- **Correct: Pipe (|)**

### Final Quiz (5 questions)

**Q1 of 5. Where is the Query Builder located within the Cortex XDR or XSIAM Console?**
- Incident Response > Query Builder ✅
- Incident Response > Action Center > Query Builder
- Endpoints > Reports > Query Builder
- Endpoints > Query Builder > XQL Search
- **Correct: Incident Response > Query Builder**

**Q2 of 5. Which character will create a comment (i.e., the editor will ignore the text)?**
- `*`
- `/`
- `//` ✅
- `**`
- **Correct: //**

**Q3 of 5. Which XQL component handles the grammar and language of its elements?**
- Schema
- Semiotics
- Syntax ✅
- Semantics
- **Correct: Syntax**

**Q4 of 5. Which of the following will result in a run action being disabled?**
- There are one or more syntax errors. ✅
- There is no dataset associated with the query.
- The query has too many lines.
- More than five fields are established within the query.
- **Correct: There are one or more syntax errors.**

**Q5 of 5. Which two are available options for running queries? (Choose two.)**
- Execute
- Run ✅
- Run At [a later time]
- Export
- Schedule Query ✅
- **Correct: Run, Schedule Query**
