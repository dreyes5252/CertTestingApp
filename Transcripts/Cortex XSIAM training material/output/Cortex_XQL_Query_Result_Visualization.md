# Cortex XQL: Query Result Visualization

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Page 1 — Display Modes

### Display Modes

The XQL Search page provides three display modes on the Query Results tab: Table, Graph, and Advanced.

*[Diagram: Three-button toggle bar showing the three modes: **Table** (currently selected/active, dark background), **Graph**, and **Advanced**.]*

### Log Format

Both Table and Advanced modes can display rows of the results table in different log formats. You can use the Layout section under the ellipsis (⋯) menu to select a log format to display the rows of the results table. The supported formats are RAW, JSON, and TREE, as labeled in the management console.

*[Screenshot: Layout panel showing:*
- *Layout / Restore default layout*
- *VIEW CONFIGURATION: > -< | ←→ | <-> | (split icon) | (table icon) | (rows icon) | (compact icon)*
- *LOG FORMAT: RAW | JSON | TREE (TREE is highlighted/selected with orange border)]*

#### Tree Format

The screenshot here shows the results table when the Log Format is set to Tree. Notice the expand-collapse action images at the beginning of each row in the table. The benefit of the Tree format is that displaying log records in table rows can limit your analysis when the results of a query contain too many columns; you may have to scroll left and right many times. The Tree format provides an alternative view by listing each field on a separate line.

*[Screenshot: Results table in Tree format with two columns: **_TIME** and **EVENT**.*
- *Row 1 expanded — Apr 4th 2022 11:45:24:*
  - *_time: 1649065524309*
  - *process: "svchost.exe"*
  - *event_type: "STORY"*
  - *_vendor: "PANW"*
  - *insert_timestamp: 1649065854751*
  - *_product: "Fusion"*
  - *[Show more]*
- *Row 2 collapsed — Apr 4th 2022 11:51:26:*
  - *_time: 1649065886827*
  - *[Show more]]*

---

## Page 2 — Graph Display

### Graph Display

The Graph mode displays query results in one of several chart types available.

In Graph mode, you use the Chart Editor to specify chart parameters, including Graph Type, Header, Data, Color, Font, and Legend. For Graph Type, you can choose from a variety of chart formats such as Column, Line, Map, and Pie. Header is the title of your chart. In Data, you specify fields for X-axis and Y-axis.

*[Screenshot: Chart Editor panel:*
- *Header: **Chart Editor** | Restore default | Add to query*
- *MAIN section:*
  - *Graph Type: Pie (dropdown) — highlighted with orange border*
  - *Subtype: (three subtype icons)*
  - *Header: Actor Process Counts — highlighted with orange border*
  - *Show Callouts: (checkbox, checked)*
  - *Show Callouts Names: (checkbox, checked)*
  - *Show Percentages: (checkbox, checked)*
- *DATA section:*
  - *\* X-axis: process (dropdown)*
  - *\* Y-axis: cnt (dropdown)]*

---

### Query Example

Let's take an example to illustrate showing query results in charts using the following query. The query obtains the country code associated with the IP address in the action_remote_ip field and then counts the occurrences of events per country.

```xql
config timeframe = 12mo
| dataset = xdr_data
| filter action_remote_ip != null
| iploc action_remote_ip loc_country as country
| fields country
| comp count() as cnt by country
| sort desc cnt | limit 15
```

### Graph Type: Map

Chart types offer alternatives based on the data types returned in your query. In the current example, one of the two columns contains country codes; therefore, a map would be an appropriate chart type. The screenshot shows the same result set as in the column graph type example, but this time using the map chart type.

*[Screenshot: Map chart titled "Log Entries Per Country" showing a world map with country-level shading. Chart Editor panel visible on right showing: MAIN → Graph Type: Map, Log Entries; DATA → \* X-axis: country, \* Y-axis: cnt (cnt)]*

### Graph Type: Column

Settings in the Chart Editor are divided into categories such as MAIN and DATA. The Graph Type setting in MAIN determines which chart type is displayed, such as a column or a pie. DATA expects two important settings—the fields you associate with the X-axis and Y-axis. In the example, country maps to the X-axis, while cnt maps to the Y-axis.

*[Screenshot: Column chart titled "Log Entries Per Country" showing vertical bars for countries. The highest bar is for "US" with approximately 200,000+ entries. Chart Editor panel on right shows: MAIN section collapsed; DATA → \* X-axis: country, \* Y-axis: cnt; Axis Ranges and Default Zero Limit fields visible.]*

---

### Query Codes with Graph Type and View Stage

This XQL example explores the utilization of query codes alongside the Graph type and View Stage.

#### Query Codes with Graph Type

In this XQL example, notice the view stage and how it encodes the Graph parameters. When you run this query, you do not have to go to the Graph mode because the Query Results tab will automatically turn it on.

```xql
config timeframe between "2022-04-04 09:00:00" and "2022-04-04 10:00:00"
| dataset = xdr_data | fields actor_process_image_name as process
| filter process != null
| comp count() as cnt by process
| sort desc cnt
| limit 5
| view graph type = pie subtype = full
header = "Actor Process Counts" show_callouts = `true`
xaxis = process yaxis = cnt
```

*[Diagram: Pie chart titled "Actor Process Counts" showing five process segments with callout percentages and legend:*
- *mscorsvw.exe (12,856) — largest slice, dark blue, ~64.4%*
- *ngen.exe (4,694) — teal/green, ~23.5%*
- *svchost.exe (1,379) — purple, ~6.91%*
- *MRT.exe (533) — dark/black, ~2.67%*
- *System (483) — small slice, ~2.42%]*

---

## Page 3 — Query Codes with View Stage / Advanced Mode

### Query Codes with View Stage (continued)

#### Query Codes with View Stage — View Highlight

In this example, the query is the same as the one used in the previous example, except that the view stage is used to highlight options in the result table.

```xql
| view highlight fields = process values = "chrome", "explorer"
```

When you run this query, the specified values (i.e., chrome and explorer) be highlighted each time they appear in the results table, as shown in the screenshot.

Note also that the Graph mode is turned on automatically when a query includes both view graph and view highlight.

*[Screenshot: Results table with two columns PROCESS and CNT, sorted by CNT descending. Rows visible:*

| PROCESS | CNT |
|---|---|
| MRT.exe | 533 |
| System | 483 |
| **chrome**.exe *(highlighted in orange)* | 382 |
| WmiPrvSE.exe | 242 |
| lsass.exe | 200 |
| **explorer**.exe *(highlighted in orange)* | 185 |
| GoogleUpdate.exe | 177 |
| vmtoolsd.exe | 170 |
| WmiApSrv.exe | 101 |

*]*

---

### Advanced Mode

The Advanced display mode is identical to the Table mode except for one difference. In Advanced, the rows of the result table are converted to a log-like format. Field names and field values are concatenated and delimited by a colon. All name-value pairs are then placed in a comma-separated list. This list is displayed in a column named EVENT in the results table. The results table also shows the time information in the _TIME column.

The net benefit of displaying results in comma-separated lists of name-value pairs is the ease of porting results between different log-analysis platforms. Remember that Cortex XSIAM datasets store security-related log and alert data, so rows in the results table of an XQL query should be considered enriched security log entries and further scrutinized.

---

### Table Display Versus Advanced Display

To understand the differences between the Table and Advanced displays, let's look at an example. Here, the filter stage in the query explicitly names the fields that should appear in the results table.

```xql
config timeframe = 12mo |
| dataset = xdr_data
| fields actor_process_image_name as process,
event_type, action_upload
| filter process != null and action_upload > 0
| dedup process, event_type
```

---

## Page 4 — Table/Advanced/Copy-Paste/Log Format

### Table Display Mode

The Table display mode shows the query results in a table with columns for all the fields specified by the filter stage in the query. Note that the results table contains additional columns for automatically added fields such as _time. Click the image to enlarge it.

*[Screenshot: Table results with columns: _TIME | PROCESS | EVENT_TYPE | ACTION_UPLOAD | INSERT_TIMESTAMP | _PRODUCT (columns highlighted with orange borders). Data rows:*

| _TIME | PROCESS | EVENT_TYPE | ACTION_UPLOAD | INSERT_TIMESTAMP | _PRODUCT |
|---|---|---|---|---|---|
| Oct 15th 2021 16:48:24 | SIHClient.exe | STORY | 216 | Oct 15th 2021 16:55:36 | Fusion |
| Dec 5th 2021 01:26:28 | dns.exe | NETWORK | 40 | Dec 5th 2021 01:27:49 | XDR agent |

*]*

### Advanced Display Mode

The Advanced display mode shows the same results table, but all the fields except _time are combined into a new field, event, and displayed accordingly. Note that the field name "event" is specific and does not change across queries or datasets. Click the image to enlarge it.

*[Screenshot: Advanced mode table with two columns: TIME | EVENT (highlighted with orange borders). Data rows (EVENT column content is truncated by UI column width):*
- *Oct 15th 2021 16:48:24 — `"_time": 1634309384515, "process": SIHClient.exe, "event_type": STORY, "action_upload": 21[6...]`*
- *Dec 5th 2021 01:26:28 — `"_time": 1638663988775, "process": dns.exe, "event_type": NETWORK, "action_upload": 40, "i[...]`*

*Note: values continue beyond visible column width in the UI screenshot.]*

### Copy-Paste Difference

You can right-click a row in the results table displayed in either Table or Advanced mode, and then click the **Copy entire row** action. The screenshot shows the difference between the paste results of the two modes in a text file.

The first line shows the row copied in the Advanced mode. Note the embedded field names as well as the field values. Also, note that field-value pairs are separated by commas. The second line shows the row copied in the Table mode.

*[Screenshot: Two text rows showing copy-paste output:*
- *Advanced mode row: `Apr 4th 2022 11:45:24   _time: 1649065524309, process: svchost.exe, event_type: STOR[Y...]`*
- *Table mode row: `Apr 4th 2022 11:45:24   svchost.exe   STORY   PANW   Apr 4th 2022 11:50:54`*

*Note: Advanced row content truncated at right edge of screenshot.]*

### Log Format

Both Table and Advanced modes can display rows of the results table in different log formats. You can use the Layout section under the ellipsis (⋯) menu to select a log format to display the rows of the results table. The supported formats are RAW, JSON, and TREE, as labeled in the management console.

*[Screenshot: Layout panel showing:*
- *Layout / Restore default layout*
- *VIEW CONFIGURATION: >-< | ←→ | <-> | (icons)*
- *LOG FORMAT: RAW | JSON | TREE (TREE selected)]*

### Tree Format

The screenshot here shows the results table when the Log Format is set to Tree. Notice the expand-collapse action images at the beginning of each row in the table. The benefit of the Tree format is that displaying log records in table rows can limit your analysis when the results of a query contain too many columns; you may have to scroll left and right many times. The Tree format provides an alternative view by listing each field on a separate line.

*(See also: Tree Format screenshot in Page 1 section for the expanded field listing.)*

---

## Page 5 — JSON View and Tree View / Fields Pane

### JSON View and Tree View

When viewing a row in a dialog, you can switch between two modes: JSON VIEW and TREE VIEW.

Keeping field names and values together may not be sufficient for many log-analysis platforms because these platforms require logs in JSON format—for example, expecting double quotes around field names and values.

For log-format compatibility between log-analysis platforms, the Query Results tab in the management console provides a dialog where you can view and copy a row in the JSON and Tree formats. Click the image to enlarge it.

*[Screenshot: "Expanded View" dialog — JSON VIEW tab selected (active):*
```
1  {
2    "_time": 1634309304515,
3    "process": "SIHClient.exe",
4    "event_type": "STORY",
5    "action_upload": 216,
6    "insert_timestamp": 1634309736645,
7    "_product": "Fusion",
8    "_vendor": "PANW"
9  }
```
*"Copy to clipboard" link at bottom.]*

Screenshots show two view types of the same row. In the dialog, you can switch between the two formats using the JSON VIEW and TREE VIEW buttons.

Note that the basic structure of the JSON format is as in the `{"field_name_1":"field_value_1","field_name_2":"field_value_2",...}` pattern. Click the image to enlarge it.

*[Screenshot: "Expanded View" dialog — TREE VIEW tab selected (active):*
- *Search values here... (search box)*
- *_time: 1634309104515 [low-confidence on exact value]*
- *process: "SIHClient.exe"*
- *event_type: "STORY"*
- *action_upload: 216*
- *insert_timestamp: 1634309736445 [low-confidence on exact value]*
- *_product: "Fusion"*
- *_vendor: "PANW"*
*]*

---

### Fields Pane

The main use of the Fields pane is to analyze the values of a field using a histogram. The Fields pane is available in the Table and Advanced views.

#### Histogram

The Fields pane shows all the results table columns in the vertical fields list, but if you click a field of type JSON or if the field contains composite data (array of some types), you will get the following error: "The requested field is not supported".

A histogram simply groups the values of a field to count the number of occurrences. When you click a field in the vertical list of the Fields pane, the management console opens a dialog with a histogram for the selected field. You can use the search input field at the top of the pane to quickly find desired fields in the vertical list.

*[Screenshot: FIELDS pane with search box showing "p" typed (orange border), and field list:*
- *# action_upload*
- *T process (highlighted — selected)*
- *⊙ insert_timestamp*
- *T _product*

*"Click a field to select" tooltip shown in green.]*

---

## Page 6 — Histogram Query Example / Histogram Dialog / Graph Display

### Histogram Query Example

Let's take an example with an XQL query to better understand the concept of histogram. In the query, notice the process field, which is an alias for a long field name. In this example, we will examine the histogram of this field.

```xql
config timeframe between "-12mo" and "-11mo"
| dataset = xdr_data
| filter event_type = ENUM.NETWORK and action_upload > 0
| fields action_upload, actor_process_image_name as process
```

When you run this query, the Table display in the Query Results tab shows rows and columns based on the entity fields. In this example, notice "process" field in the FIELDS pane and the returned values in the PROCESS column with the "System" value greater then 0.

*[Screenshot: Query results table showing "Found 12,170 results". FIELDS pane on left shows search "p" with fields: action_upload (#), process (T, highlighted/selected with orange border), insert_timestamp (⊙), _product (T). Results table columns: _TIME | ACTION_UPLOAD | PROCESS (PROCESS column highlighted with orange border). Rows:*

| _TIME | ACTION_UPLOAD | PROCESS |
|---|---|---|
| Sep 23rd 2021 00:39:27 | 50 | System |
| Sep 23rd 2021 00:39:41 | 100 | System |
| Sep 22nd 2021 23:52:29 | 50 | System |
| Sep 22nd 2021 23:53:01 | 400 | System |
| Sep 22nd 2021 23:55:44 | 201 | System |

*]*

---

### Histogram Dialog

A histogram is simply a table of three columns: Value, Count, and Percentage. These histogram columns are the same for all results table fields and do not change. Note that a histogram table is created for the selected field; all three columns relate to this particular field."

Click the tabs for more information about how to read the histogram.

#### Value Column

*[Tab content: the Value column lists the distinct values found in the selected field.]*

#### Count Column

*[Tab content: the Count column shows how many times each value appears in the results.]*

#### Percentage Column

*[Tab content: the Percentage column shows each value's proportion of the total count.]*

*[Screenshot: Histogram dialog for field "process", showing Top 10 filter (× button). Columns: VALUE | COUNT | PERCENTAGE (with proportional blue bar visualization). Rows visible:*

| VALUE | COUNT | PERCENTAGE |
|---|---|---|
| svchost.exe | 8,053 | 66.17% |
| lsass.exe | 1,839 | 15.11% |
| chrome.exe | 1,091 | 8.94% |
| System *(highlighted in orange)* | 895 | 7.35% |
| firefox.exe | 208 | 1.71% |

*Table shows Top 10 values; additional rows below visible cutoff.]*

---

### Graph Display (Review — p.6)

The Graph mode displays query results in one of several chart types available.

In Graph mode, you use the Chart Editor to specify chart parameters, including Graph Type, Header, Data, Color, Font, and Legend. For Graph Type, you can choose from a variety of chart formats such as Column, Line, Map, and Pie. Header is the title of your chart. In Data, you specify fields for X-axis and Y-axis.

*[Screenshot: Chart Editor panel:*
- *MAIN: Graph Type = Pie (dropdown, orange border); Subtype (three icons); Header = Actor Process Counts (orange border); Show Callouts (checked); Show Callouts Names (unchecked); Show Percentages (checked)*
- *DATA: \* X-axis = process; \* Y-axis = cnt; Default Data Limit (checked)*
- *COLOR section header visible]*

### Query Example (Review — p.6)

Let's take an example to illustrate showing query results in charts using the following query. The query obtains the country code associated with the IP address in the action_remote_ip field and then counts the occurrences of events per country.

```xql
config timeframe = 12mo
| dataset = xdr_data
| filter action_remote_ip != null
| iploc action_remote_ip loc_country as country
| fields country
| comp count() as cnt by country
| sort desc cnt | limit 15
```

---

## Page 7 — Graph Types: Map & Column / Embedding Chart Settings

### Graph Type: Map (Detail)

Chart types offer alternatives based on the data types returned in your query. In the current example, one of the two columns contains country codes; therefore, a map would be an appropriate chart type. The screenshot shows the same result set as in the column graph type example, but this time using the map chart type.

Click the image to enlarge it.

*[Screenshot: Map chart titled "Log Entries Per Country". World map with blue bubble markers sized by count, largest bubble over Western Europe/US region. Chart Editor panel on right:*
- *MAIN: Graph Type = Map; Header = Log Entri[es Per Country] (partially visible)*
- *DATA: \* X-axis = country; \* Y-axis = cnt*
- *Legend: cnt (blue circle)]*

### Graph Type: Column (Detail)

Settings in the Chart Editor are divided into categories such as MAIN and DATA. The Graph Type setting in MAIN determines which chart type is displayed, such as a column or a pie. DATA expects two important settings—the fields you associate with the X-axis and Y-axis. In the example, country maps to the X-axis, while cnt maps to the Y-axis.

Click the image to enlarge it.

*[Screenshot: Column chart titled "Log Entries Per Country". Vertical bar chart showing countries on X-axis (US, IE, GB, DE, NL, IN, SG, FR, AU visible), count on Y-axis (0–200,000). Tallest bar is US at ~200,000+. Chart Editor panel on right:*
- *MAIN: (collapsed)*
- *DATA: \* X-axis = country; \* Y-axis = cnt; Axis Ranges = X-min; Default Data Limit (checkbox)*
- *Legend: cnt (blue circle)]*

---

### Embedding Chart Settings into Queries

You can code the Graph mode settings directly in your XQL query using the view stage. Then, when you run your code that includes a view stage, the Graph display mode is automatically turned on.

#### Two Ways to Use the View Stage

The view stage has two options: view graph and view highlight. You can use both options in a query specifying two different view stages. Click the tabs for more information about the two ways to use the view stage.

##### View Graph

*[Accordion tab — collapsed in PDF render; content not visible in export. Tab label: "+ View Graph"]*

##### View Highlight

*[Accordion tab — collapsed in PDF render; content not visible in export. Tab label: "+ View Highlight"]*

#### Add to Query Button

You can use the **Add to query** button in Chart Editor to automatically create the view graph stage using the settings that you entered in Chart Editor.

*[Screenshot: Chart Editor panel header showing "Chart Editor" | "Restore default" | "Add to query" (button highlighted with orange border)]*

---

## Page 8 — Query Codes with View Stage (Review) / Knowledge Check

### Query Codes with Graph Type (Review — p.8)

This XQL example explores the utilization of query codes alongside the Graph type and View Stage.

#### Query Codes with Graph Type

In this XQL example, notice the view stage and how it encodes the Graph parameters. When you run this query, you do not have to go to the Graph mode because the Query Results tab will automatically turn it on.

```xql
config timeframe between "2022-04-04 09:00:00" and "2022-04-04 10:00:00"
| dataset = xdr_data | fields actor_process_image_name as process
| filter process != null
| comp count() as cnt by process
| sort desc cnt
| limit 5
| view graph type = pie subtype = full
header = "Actor Process Counts" show_callouts = `true`
xaxis = process yaxis = cnt
```

*[Diagram: Pie chart "Actor Process Counts" — same data as page 2. Legend: mscorsvw.exe (12,856), ngen.exe (4,694), svchost.exe (1,379), MRT.exe (533), System (483).]*

#### Query Codes with View Stage

In this example, the query is the same as the one used in the previous example, except that the view stage is used to highlight options in the result table.

```xql
| view highlight fields = process values = "chrome", "explorer"
```

When you run this query, the specified values (i.e., chrome and explorer) be highlighted each time they appear in the results table, as shown in the screenshot.

Note also that the Graph mode is turned on automatically when a query includes both view graph and view highlight.

*[Screenshot: Results table PROCESS | CNT columns. Rows: MRT.exe 533, System 483, **chrome**.exe 382 (highlighted orange), WmiPrvSE.exe 242, lsass.exe 200, **explorer**.exe 185 (highlighted orange).]*

---

### Knowledge Check

**Q1. Which two fields are automatically added to a results table by the Table mode? (Choose two.)**

- ✅ _product
- _event
- ✅ _insert_time
- event_time

- **Correct: _product, _insert_time**

---

## Page 9 — Quiz: Question 1 of 5

**Question 1 of 5. What is the primary use of the Advanced display mode on the Query Results tab?**

- ✅ Easily copying query results as log entities *(orange radio — learner selection)*
- Analyzing query results using histograms
- Reducing the size of the results table
- Viewing query results in different log formats

- **Correct: Easily copying query results as log entities**

*(Green "Correct answer:" label with green checkmark icon confirms this answer. Score: 1.)*

---

## Page 10 — Quiz: Question 2 of 5

**Question 2 of 5. Which three columns does a histogram table show in the Fields pane of the Query Results tab? (Choose three.)**

- ✅ Value (disabled) *(orange checkbox — learner selection)*
- ✅ Count (disabled) *(orange checkbox — learner selection)*
- ✅ Percentage (disabled) *(orange checkbox — learner selection)*
- Frequency (disabled)
- Ratio (disabled)

- **Correct answers: Value, Count, Percentage**

*(Green "Correct answers:" label with green checkmark. Score: 3. Note: the "Correct answers:" box in the PDF export shows only "Value" before a page break; Count and Percentage inferred from the three checked/selected options matching the three required answers. Flagged for review.)*

---

## Page 11 — Quiz: Question 3 of 5

**Question 3 of 5. Which two field types can you analyze using a histogram on the Query Results tab? (Choose two.)**

- ✅ String (disabled) *(orange checkbox — learner selection)*
- ENUM (disabled)
- JSON (disabled)
- String array (disabled)
- ✅ Count (disabled) *(orange checkbox — learner selection)*

- **Correct answers: String, ENUM**

*(Green "Correct answers:" label. Score: 1 — partially correct answer shown. The learner selected String and Count, but the correct answers are String and ENUM.)*

---

## Page 12 — Quiz: Question 4 of 5

**Question 4 of 5. Which two fields does the Advanced display mode show in a results table? (Choose two.)**

- ✅ _Time (disabled) *(orange checkbox — learner selection)*
- ✅ Event (disabled) *(orange checkbox — learner selection)*
- Type (disabled)
- _Vendor (disabled)

- **Correct answers: _Time, Event**

*(Green "Correct answers:" label with green checkmark. Score: 2.)*

---

## Page 13 — Quiz: Question 5 of 5

**Question 5 of 5. In which two log formats can the Advanced mode display XQL query results? (Choose two.)**

- ✅ Tree (disabled) *(orange checkbox — learner selection)*
- ✅ JSON (disabled) *(orange checkbox — learner selection)*
- CEF (disabled)
- Syslog (disabled)

- **Correct answers: Tree, JSON**

*(Green "Correct answers:" label with green checkmark. Score: 2.)*
