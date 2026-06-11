# Cortex XQL: Call Function Usage

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is the Call Command?

The `call` stage command initiates a query from the Query Library, effectively incorporating saved queries into active ones.

### Call Stage Syntax

```xql
call "<name of predefined query>" [<param_name1> = <value1> <param_name2> = <value2>,...]
```

### Description of the Call Command

The call stage allows you to reference a predefined query from the Query Library, including your Personal Query Library. If your query contains parameters, you can reference them in the call stage using the following syntax:

```xql
<param_name1> = <value1> <param_name2> = <value2>...
```

When incorporating parameters in the call stage, it is essential to have a pre-existing query that utilizes these parameters. Essentially the call command serves as a dynamic lookup within other queries.

This functionality is useful when your query needs to accommodate multiple time frames.

### Call Command Usage Parameters

The call command can be used in conjunction with the join and union stages to merge data from different datasets. However, the join stage is only supported in the CONST, INGEST, and RULE sections, not in the COLLECT section. Furthermore, the call command cannot reference a RULE section from Default Rules within the User Defined Rules section.

---

## 30-Day Rolling Average Example

Let's consider a scenario where you need to compare today's data against a 30-day rolling average. You would create a query, save it, and then use it within another query. This process showcases the efficiency and effectiveness of the call stage in streamlining data analysis tasks.

In this example, we will demonstrate how to save a query and then use the call stage to call the saved query within another query. Click the images to enlarge them.

### Step 1

Navigate to **Incident Response > Investigation > Query Center** and click **+ New XQL Query**. Alternatively, you can go directly to **Response > Investigation > Query Builder** and click **XQL**.

*[Screenshot: Cortex XSIAM navigation menu showing Incident Response > Investigations > Query Builder and Query Center (highlighted). Right panel shows Query Center with "+ New XQL Query" button. Columns: TIMESTAMP, QUERY STATUS, QUERY NAME, QUERY DESCRIPTION. No queries listed ("There are no queries").]*

### Step 2

Start typing your query in the XQL editor. For this example, you can use the following code snippet to calculate the average number of daily events sent by each XDR agent over the past 30 days.

```xql
//This query calculates the average number of daily events sent by each XDR
//agent over the past 30 days
config timeframe = 30D
| dataset = xdr_data
| fields _time, agent_hostname, _product, recordType, agent_id, event_id
| alter agent_hostname = uppercase(agent_hostname)
| filter _product = "XDR agent"
| bin _time span = 1D
| comp count(event_id) as daily_event_count by agent_id, agent_hostname,
  _time
| comp avg(daily_event_count) as average_daily_events by agent_id,
  agent_hostname
| alter average_daily_events = round(average_daily_events)
| fields agent_hostname, average_daily_events, agent_id
```

### Step 3

Click **Save as** and select **Query to Library**.

*[Screenshot: Save dialog with options: Correlation Rule, Query to Library (highlighted in orange), Widget in Library.]*

---

## Using the Call Stage within Another Query

The call stage can be used to call the saved query into your active query.

In the **Query Builder > XQL**, use the following code to calculate the daily events for each agent and compare the data against the 30-day average of events.

This image depicts what the query should look like in the Query Builder. Notice that line 12 contains the full function, which is used to call the previously saved query.

```xql
dataset = xdr_data
| fields _time, agent_hostname, _product, agent_id, event_id
| alter agent_hostname = uppercase(agent_hostname)
| filter _product = "XDR agent"
//calculate daily events for each agent
| bin _time span = 1D
| alter date = format_timestamp("%b %d %Y", _time)
| comp count(event_id) as daily_event_count by agent_id,
  agent_hostname, date
//compare against the 30 day average of events
//NOTE - query must exist in the query library first
| join (call "30-Day Agent") as averager agent_id = averager.agent_id
| alter delta_from_average =
  subtract(daily_event_count, average_daily_events)
//add information about the agent install date and last seen
| join (dataset = endpoints | fields endpoint_id, install_date, last_seen,
  endpoint_status) as hosts agent_id = hosts.endpoint_id
| fields agent_id, agent_hostname, date, daily_event_count,
  average_daily_events, delta_from_average, endpoint_status, last_seen,
  install_date
| sort asc agent_hostname, desc date
```

*[Screenshot: Query Builder showing the complete combined query with line 12 highlighted — the `call "30-Day Agent"` join statement.]*

---

## Explaining the Effect of the Call Stage

Let's examine what happened during the latest call function after the query was successfully run.

In this instance, the call command incorporated the entire search named "30-Day Agent" into the active query as if it were written in-line. Consequently, the original query operates as if it has 12 extra lines of code.

The following are the advantages of the call stage:

### Flexibility

The call stage allows you to insert other queries with varying time frames into your current query, providing flexibility that is not commonly associated with XQL.

### Object-Oriented Coding

The call stage can be used in a manner similar to object-oriented coding. By inserting a series of call stages into a simpler query, you can execute more complex queries without having to modify the saved queries.

---

## Knowledge Checks

### Numbered Quiz (Questions 1–5 of 5)

**Q1. Which of the following is true regarding the use of a CALL command on RULES?**
- You cannot call a RULE section that exists in Default Rules from the User Defined Rules Section ✅
- You can call a RULE section that exists in Default Rules from the User Defined Rules Section
- You can call a RULE section that exists in User Defined Rules Section from the Default Rules
- You can call a RULE section that exists in Updated Rules Section from the User Defined Rules Section
- **Correct: You cannot call a RULE section that exists in Default Rules from the User Defined Rules Section**

---

**Q2. Which of the following functions support using CALL functions in the JOIN stage? (Choose 3)**
- CONST ✅
- INGEST ✅
- COLLECT
- RULE ✅
- DISTRIB
- **Correct: CONST, INGEST, RULE**

> Note: Learner selected INGEST, COLLECT, RULE (Partially correct answer, Score: 2). COLLECT is not supported; CONST is correct.

---

**Q3. Which of the following is the correct syntax for a CALL command?**
- `| join (call "30 day agent") while averager agent_id = averager.agent_id`
- `| join (call "30 day agent") {averager agent_id = averager.agent_id}`
- `| join (call "30 day agent") (averager agent_id = averager.agent_id)`
- `| join (call "30 day agent") as averager agent_id = averager.agent_id` ✅
- **Correct: `| join (call "30 day agent") as averager agent_id = averager.agent_id`**

---

**Q4. Which of the following best describes the CALL command?**
- A way to insert a saved search query as if it were in-line in the active query. ✅
- A way to rename logical operators within XQL.
- A command used exclusively to unite two datasets.
- A form of role-based XQL searching.
- **Correct: A way to insert a saved search query as if it were in-line in the active query.**

---

**Q5. Which of the following is true when using the CALL command?**
- The query must already exist in the Query Library. ✅
- The query may not exceed 12 lines.
- The query may not access data that is older than 30 days.
- The query must contain at least two JOIN stages.
- **Correct: The query must already exist in the Query Library.**
