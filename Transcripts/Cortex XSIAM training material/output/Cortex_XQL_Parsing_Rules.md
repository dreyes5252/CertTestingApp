# Cortex XQL: Parsing Rules

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Overview of Parsing Rules

The topic of parsing rules is not directly in the XQL domain. However, because their syntax is derived from XQL, we give a brief introduction to parsing rules here.

### Parsing Rule Definition

A parsing rule parses a raw log entry, applies rule logic to the parse input log fields, and then prepares and returns one or more new rows to add to the datasets.

By this definition, parsing rules are not in the XQL domain: for example, you cannot use a parsing rule to query datasets. Instead, the parsing rules are a component in the XSIAM data-ingestion flow.

### Parsing Rule Requirements

To work with parsing rules in the Cortex XSIAM management console, a user needs the highest possible authorization levels; they must have Cortex XSIAM account administrator or instance administrator privileges. Otherwise, the management console hides related items, such as the Parsing Rules page, from unauthorized users.

---

## Purpose of Parsing Rules

The purpose of parsing rules is to remove irrelevant parts from incoming raw logs. It is beneficial to organize and clean logs before storing them for two reasons. Firstly, it reduces data and saves storage space. Secondly, it improves XQL query performance by minimizing and effectively organizing datasets. This organization involves creating only the required fields and splitting a long log entry into multiple smaller rows in the datasets. Parsing rules can also label logs and data by tagging.

Note that Palo Alto Networks generally suggests using parsing rules for two specific purposes. The first is adding or normalizing timestamps when the source is not sending them. The second is stripping invalid characters from logs. Removing fields at parsing prevents them from ever being available and cannot be corrected retroactively. Palo Alto Networks recommends to use parsing for reducing log size unless there are no other options available.

---

## Syntax of Parsing Rules

Although XSIAM has its own unique parsing rules, its syntax shares similarities with XQL, as one part of the parsing-rule syntax is derived from XQL.

### Parsing Rule Sections

The subset of XQL used in parsing rules is called XQLP, which stands for XQL for parsing. The XQL stages that can be used in parsing rules are also: fields, filter, join, and call.

Parsing rules are organized around high-level components called sections. These sections collectively manage how an incoming raw log is parsed, processed, and targeted to a dataset.

These sections are INGEST, COLLECT, CONST, EXTEND, and RULE; where INGEST is the only required section. The rest are optional. Capitalizing section names helps differentiate them from XQL syntax. Lowercase section names are also valid and don't give compiler errors.

### Query Example

The example shows a parsing rule with an INGEST section. The INGEST section sets the targeted dataset on which the preprocessed log will be ultimately stored. In this particular case, the dataset is `pa_ed_raw`. The parsing rule applies to logs from vendor "pa" and product "ed". Also, the `no_hit` attribute with the value `drop` tells the processing component to drop the raw log if a condition exists and the condition is not met.

```
[INGEST: vendor ="pa", product ="ed", target_dataset ="pa_ed_raw",
no_hit =drop]

alter protocol = arrayindex(regextract(_raw_log, "
(UDP|TCP|ICMP|IGMP)"),0),

src = arrayindex(regextract(_raw_log, "src\s+
(\d+\.\d+\.\d+\.\d+)V(\d+)"),0),

dst = arrayindex(regextract(_raw_log, "dst\s+
(\d+\.\d+\.\d+\.\d+)V(\d+)"),0)
```

---

## Working with Parsing Rules

You can work with parsing rules in the Cortex XSIAM management console. The Parsing Rules page is under the **Configurations > Data Management > Parsing Rules** menu. Note that the menu item only becomes visible if the user has the required roles.

*[Diagram: Screenshot of the Parsing Rules page in the XSIAM management console, showing four tabs: User Defined, Default Rules, Both, and Simulate. The Default Rules tab is active, displaying a code editor with the following content:]*

```
/*  . . . . . . . . . . . . . . . . . . . . . . .
    ----- Automatic (Default) Rules -----
    . . . . . . . . . . . . . . . . . . */

[INGEST:vendor="PANs", product="Network Mapper", target_dataset="panw_network_mapper_raw", no_hit=drop]
[INGEST:vendor="px", product="p1", target_dataset="px_p1_raw", no_hit=drop]
[INGEST:vendor="pan", product="edu", target_dataset="pan_edu_raw", no_hit=drop]
[INGEST:vendor="unknown", product="unknown", target_dataset="unknown_unknown_raw", no_hit=drop]
```

*(Save button visible bottom-right.)*

### User Defined

The User Defined tab displays the rule editor to write your own custom parsing rules that can override default rules.

### Default Rules

The Default Rules tab displays parsing rules provided by Palo Alto Network. Note that you cannot edit these out-of-the-box parsing rules; you can only view them.

### Both Tab

The Both tab displays the contents of the first two tabs, User Defined and Default Rules, side by side. The net benefit is to easily edit user-defined (custom) rules while viewing ready-to-use rules all at once in a single window.

---

## Ingestion Flow Components

You can attach multiple Broker VM instances and XDR Collector instances to the same single XSIAM instance. Each such instance can collect logs from applications that send logs. Multiple instances of the same type are required for load balancing and avoiding having a single point of failure.

As shown in the figure, the Broker VM, XDR Collector, and Cortex XSIAM itself are three of the ingestion flow components. What makes these ingestion flow components relevant is that it is these components that actually run the parsing rules.

Parsing rules are compiled on the Cortex XSIAM instance and then are passed to the connected Broker VM and XDR Collector instances. When such an instance receives a log entry, it parses the log according to parsing rules, then preprocesses the logs accordingly.

*[Diagram: Simplified Cortex XSIAM ingestion flow. Two tiers are shown: Cloud (top) and On-premises (bottom). In the Cloud tier: a single box labeled "Cortex XSIAM". Below it in the On-premises tier: three Broker VM boxes (Broker VM1, Broker VM2, Broker VMn) on the left, and three XDR Collector boxes (XDR Collector 1, XDR Collector 2, XDR Collector 2 [low-confidence: may be XDR Collector n]) on the right. Lines connect Cortex XSIAM down to all Broker VMs and XDR Collectors, showing the compiled rules distribution flow.]*

---

## Knowledge Checks

**Q1. Which two Cortex XSIAM roles can access the Parsing Rules page in the management console? (Choose two)**
- Account Administrator ✅
- Instance Administrator ✅
- Privileged IT Administrator
- Security Administrator
- **Correct: Account Administrator, Instance Administrator**

**Q2. What are three possible reasons to use XSIAM parsing rules? (Choose three)**
- Saving storage space ✅
- Adjusting log time ✅
- Labeling data ✅
- Detecting attacks as early as possible
- Preparing raw data for SIEM
- **Correct: Saving storage space, Adjusting log time, Labeling data**

**Q3. Which three XQL stages are supported in XQLP? (Choose three)**
- Alter ✅
- Fields ✅
- Filter ✅
- Dataset
- Divide
- **Correct: Alter, Fields, Filter**

**Q4. Which Parsing Rules section is required?**
- INGEST ✅
- COLLECT
- CONST
- RULE
- **Correct: INGEST**

**Q5. Which two components can run XSIAM parsing rules? (Choose two)**
- Broker VM ✅
- XDR Collector ✅
- XDR Agent
- Network Mapper
- **Correct: Broker VM, XDR Collector**
