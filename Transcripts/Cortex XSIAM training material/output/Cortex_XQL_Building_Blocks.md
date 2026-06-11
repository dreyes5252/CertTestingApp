# Cortex XQL: Building Blocks

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is XQL?

XQL (Xpanse Query Language) is a query language used in Cortex XSIAM to search and analyze security data stored in datasets. XQL queries are composed of a series of stages that filter, transform, and aggregate data.

---

## The XQL Query Structure

An XQL query is made up of stages. Each stage performs a specific operation on the data, and stages are chained together using the pipe (`|`) character.

### Config Stage

The `config` stage is used to set query-wide settings such as the time frame. When present, it **must be the first stage** in an XQL query.

**Synopsis:**

```xql
config timeframe = <timeframe_value>
```

**Example:**

```xql
config timeframe = 30D
```

Common timeframe values: `1H`, `1D`, `7D`, `30D`.

---

## Stages Overview

*[Diagram: XQL query pipeline — stages are chained left to right with the pipe `|` operator. Data flows: dataset → filter → fields → alter → comp → sort → limit → fields (output). Each stage narrows or transforms the intermediate result set.]*

The core stages are:

| Stage | Purpose |
|-------|---------|
| `dataset` | Specifies the source dataset to query |
| `filter` | Filters rows based on a Boolean condition |
| `fields` | Selects which fields to include in the result; **erases all fields and variables defined before it** |
| `alter` | Creates or updates variables/fields |
| `comp` | Computes aggregate statistics (count, sum, avg, min, max) |
| `sort` | Orders results ascending (`asc`) or descending (`desc`) |
| `limit` | Restricts the number of rows returned |
| `config` | Sets query-wide configuration (timeframe); must be first stage when used |

---

## Dataset Stage

The `dataset` stage specifies which dataset to query. It is always the starting point (after `config` if present).

**Synopsis:**

```xql
dataset = <dataset_name>
```

**Example:**

```xql
dataset = xdr_data
```

---

## Fields Stage

The `fields` stage selects specific fields to include in the result set. Importantly, the `fields` stage **erases all the fields and variables defined before it** — only the fields listed are kept.

**Synopsis:**

```xql
| fields <field1>, <field2>, [...]
```

**Example:**

```xql
dataset = xdr_data
| fields event_id, agent_hostname, action_file_name
```

---

## Filter Stage

The `filter` stage retains only rows that satisfy the specified condition.

**Synopsis:**

```xql
| filter <condition>
```

**Examples:**

```xql
| filter agent_hostname = "WIN10"
| filter action_file_size > 1000
| filter event_type in (FILE, NETWORK, PROCESS)
| filter agent_hostname ~= ".*WIN.*"
```

Logical operators `and`, `or`, `not` can combine conditions:

```xql
| filter agent_hostname = "WIN10" and event_type = FILE
```

---

## Alter Stage

The `alter` stage creates new variables or modifies existing ones. It does **not** filter rows.

**Synopsis:**

```xql
| alter <var1> = <expression>, [<var2> = <expression>]
```

**Example:**

```xql
| alter agent_hostname = uppercase(agent_hostname)
```

---

## Comp Stage (Aggregate)

The `comp` stage computes aggregate functions across groups of rows.

**Synopsis:**

```xql
| comp <agg_function>(<field>) as <alias> by <group_field1>, [<group_field2>]
```

**Aggregate functions:** `count`, `sum`, `avg`, `min`, `max`, `values`, `latest`, `earliest`

**Example:**

```xql
dataset = xdr_data
| comp count(event_id) as daily_event_count by agent_id, agent_hostname, _time
```

---

## Sort Stage

The `sort` stage orders the result set.

**Synopsis:**

```xql
| sort asc <field> | sort desc <field>
```

**Example:**

```xql
| sort asc agent_hostname, desc _time
```

---

## Limit Stage

The `limit` stage restricts output to a maximum number of rows.

**Synopsis:**

```xql
| limit <number>
```

**Example:**

```xql
| limit 100
```

---

## Stage Ordering Rules

XQL enforces a strict stage ordering. The valid order is:

1. `config` (optional, must be first if present)
2. `dataset`
3. `filter`
4. `alter`
5. `fields`
6. `comp`
7. `sort` / `limit`

*[Diagram: Two-column "Incorrect vs. Correct" examples showing stage ordering. Left (incorrect): stages out of order cause errors. Right (correct): stages in the prescribed sequence execute successfully.]*

**Incorrect (will error):**

```xql
dataset = xdr_data
| comp count(event_id) as cnt by agent_hostname
| filter agent_hostname = "WIN10"
```

**Correct:**

```xql
dataset = xdr_data
| filter agent_hostname = "WIN10"
| comp count(event_id) as cnt by agent_hostname
```

---

## Screenshots: XQL Query Builder UI

*[Screenshot: Cortex XSIAM Query Builder interface showing the XQL editor panel. Left navigation menu visible with: Dashboards & Reports, Incident Response > Incidents, Investigations, Query Builder (highlighted in orange), Query Center, Scheduled Queries, Forensics, Host Inventory; Response > Action Center, Live Terminal; Automation > Playbooks, Scripts, Jobs, Playground, Incident Configuration. Right panel shows Query Center header with "+ New XQL Query" button and columns: TIMESTAMP, QUERY STATUS, QUERY NAME, QUERY DESCRIPTION. No queries listed.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray bar / Submit style)

*(No gray-bar section knowledge checks were visible on these pages.)*

---

### Numbered Quiz (Questions 1–5 of 5)

**Q1. What does the "config timeframe = 30D" command indicate in an XQL query?**
- It indicates the query will run for 30 days before timing out.
- It indicates that results will be displayed for only 30 days after query execution.
- It indicates that only logs included within a specific timeframe will be evaluated. ✅
- It indicates the query will refresh data every 30 days.
- **Correct: It indicates that only logs included within a specific timeframe will be evaluated.**

---

**Q2. Which stage allows you to select specific fields from a dataset?**
- Filter
- Fields ✅
- Alter
- Comp
- **Correct: Fields**

---

**Q3. In an XQL query, what does the "dataset" stage refer to?**
- The output format of the query results
- The filter conditions applied to the data
- The aggregation functions used in the query
- Dataset ✅
- **Correct: Dataset**

---

**Q4. When present, in which position must the "config" stage be used in an XQL query?**
- It must always follow a Filter stage
- It must be the first stage ✅
- It must always be the final stage
- It must always follow a Field stage
- **Correct: It must be the first stage**

---

**Q5. Which stage erases all the fields and variables defined before it?**
- Config
- Alter
- Fields ✅
- Limit
- **Correct: Fields**

> Note: Learner selected "Alter" for Q5 (Wrong answer, Score: 0). Correct answer confirmed from green "Correct answer:" label.
