# Cortex XQL: Dataset Joins

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Join Stage Overview

In Cortex XQL, the join stage combines data from multiple sources based on a specified condition or key. By defining the joining condition, you can consolidate and correlate data from different sources, enabling more comprehensive analysis, data enrichment, and contextual insights.

### Consolidating and Correlating Data

To illustrate consolidating and correlating data with joins, we will combine two datasets with a matching condition on a comparable field value.

**Dataset 1: XDR_DATA**
The built-in XDR_DATA dataset contains event-related records.

| EVENT_TYPE | HOSTNAME       |
|------------|----------------|
| REGISTRY   | 1122-winpoint1 |
| REGISTRY   | DESKTOP-HFAW3O |
| PROCESS    | 0022-abkdp01   |

**Dataset 2: MY_EVENT_DESC**
Custom dataset that contains descriptions of event types.

| TYPE | DESC         |
|------|--------------|
| 1    | Desc PROCESS |
| 2    | Desc NETWORK |
| 3    | Desc FILE    |

**Goals with join:**
- Compare XDR_DATA.EVENT_TYPE and MY_EVENT_DESC.TYPE and determine if they are equal.
- Associate MY_EVENT_DESC.DESC with the event record in XDR_DATA.

### Join Stage Query Example

XQL provides the join stage for such correlation operations. An XQL query example that includes a join stage appears as follows:

```
dataset = xdr_data
    | join (dataset = my_event_desc) as e e.type = event_type
```

In an XQL query with a join, two dataset stages are used. Such a query contains an embedded query, and the join stage comes with its own XQL query, such as `join(dataset=my_event_desc)`.

**Expected results table columns:**

| EVENT_TYPE | HOSTNAME       | DESC           |
|------------|----------------|----------------|
| INJECTION  | msft-w10       | Desc INJECTION |
| REGISTRY   | 1122-winpoint1 | Desc REGISTRY  |
| INJECTION  | 0002-winpoint1 | Desc INJECTION |

## XQL Join Stage

The XQL join stage associates different datasets. The join stage combines the result sets into a single result set. This combined set is then used in subsequent stages of the main query.

### XQL Similarities To SQL

The terminology used in XQL mainly comes from SQL jargon. When using join stages, options such as "type is left" or "conflict_strategy is right" are available. In SQL, the term "left" refers to the main result set, while "right" refers to the join result set created by the join stage itself by executing its own query.

> **Note:** It's important to note that the result sets are in an intermediate state, created during the execution of the main query. Additionally, there has been a change in terminology. Previously, when we referred to a "result set," we referred to the "result set" that remained after the query execution.

---

## Join Stage Clauses

Clauses are building blocks or constituent components of stages; clauses can be required or optional.

### Synopsis of XQL Join Stage

There are five clauses in XQL join. The synopsis of the XQL join stage is given as follows:

```
Join [type = inner | left | right]
[conflict_strategy = both | left | right]
(<inner xql query>)
as <execution_name>
<boolean_expr>
```

### Example Query

Examples of clauses in an XQL join stage:

```
| join
Join type: type=right
Name conflict strategy: conflict_strategy=right
Join query: (dataset = lookup1 | filter type > 4 | fields f*)
Join result table alias: as rtbl
Join match condition: rtbl.id in (1,2,4) and rtbl.type = event_type
```

### More on Join Stage Clauses — Tab: Join Type

The join type specifies how two result sets are combined. There are three "type" options: inner, left, and right. The type setting can affect how the records of the two sets are combined.

### More on Join Stage Clauses — Tab: Name Conflict Strategy

In addition to rows (records), the join stage combines the columns (fields) of the two result sets. However, result sets can have fields with the same name, possibly with different values; therefore, a name conflict may occur during the merge. The conflict_strategy clause is to resolve the name conflict in different ways. Possible values are both, left, and right. For example, if both sets have fields with name FLD:

- **Left:** Combined set shows only FLD of the main result set.
- **Right:** Combined set shows only FLD of the join result set. The default conflict_strategy is right.
- **Both:** Both fields are copied to the combined set, which shows the FLD of the main set as is and the FLD of the join set under the name JOIN(\_FLD).

### More on Join Stage Clauses — Tab: Join Query

This is any valid XQL query enclosed in parentheses () whose execution result will be combined with the main query.

### More on Join Stage Clauses — Tab: Join Result Set Alias

The result set alias is a name that refers to the join result set (also known as the right set) in the remainder of the main query flow. An alias for the right set is required to separate its fields from those of the left set, which is the result set of the main query. For example, in the join stage below, the "as rt" clause assigns an rt alias to the join result set so that you can reference the rt fields with the dot operator (.), as rt.type:

```
join (dataset = my_event_desc) as rt rt.type = event_type
```

### More on Join Stage Clauses — Tab: Join Match Condition

The join match condition is a Boolean expression that specifies how the records of the two sets are matched. A Boolean expression here is just like those specified in a filter stage. For example, in the following join stage, rt.type = event_type is the condition that any two records must meet to be considered "matched."

```
join (dataset = my_event_desc) as rt rt.type = event_type
```

### Required and Optional Join Clauses

The XQL join syntax has required and optional clauses. A minimal join stage should include a query for the join, an as clause, and a condition clause (also known as the join predicate).

If you omit required clauses, the XQL compiler raises error messages. For example, omitting the as clause will give the error message "as is missing" and similarly, "expression is missing" if you omit the join condition.

*[Diagram: Error messages shown — red X icon + "as is missing"; red X icon + "expression is missing"]*

---

## XQL Query Examples

XQL join queries can vary in complexity, with some having minimal join stages, while others are more elaborate.

### Minimum Join Query

This example shows an XQL query with a minimal join stage. As described earlier in this section, three clauses are required: query, as, and condition. The join query is `(dataset = my_event_desc)`, the as clause is as e, and the join condition is `e.type = event_type`.

```
dataset = xdr_data
    | join (dataset = my_event_desc) as e e.type = event_type
```

In this query, you see a join query clause with three stages: dataset, filter, and fields:

```
| join (dataset = my_event_desc | filter type > 4 | fields *)
```

### Typical Join Query

The entire XQL query is as follows:

```
dataset = xdr_data  |  fields event_type
    | join (dataset = my_event_desc | filter type > 4 | fields *)
          as e e.type = event_type
    | dedup event_type
```

### Join Stage With All Options

This example shows a join stage with all required and optional clauses; setting the join type to the right will ensure that the result set has all the records in the join query result set (also known as the right result set).

```
join type=right conflict_strategy=right
    (dataset = my_event_desc) as e e.event_id = event_type
```

---

## Flow of XQL Query Execution

The XQL flow stage encompasses various steps, which include executing, retrieving, and presenting the query results.

### XQL Flow Stages

Conceptually, XQL stages execute sequentially, but physical implementation can vary. The result-set generation starts at the beginning of query execution. As the stages progress, the XQL runtime engine updates the intermediate result set. The result set found by partial execution of the main query from the startup to the join stage is called the left result set or only the left set. It is also called the parent result set. The XQL join stage combines specific elements. To illustrate, consider the given XQL query with six stages. The join is stage 4 in the query.

*[Diagram: Six-stage XQL query flow showing numbered stages. Left side shows the query:*
```
1.  dataset = xdr_data
2.  | fields a*, b*, event*
3.  | limit 10
4.  | join type=right (dataset = etd | fields …)
        as e e.id = id
    Remaining stages are executed on the combined table:
5.  | dedup event_type
6.  | sort asc event_type | limit 10
```
*Right side shows a flow: "Left set" (cylinder) + "Right set" (cylinder, produced by step 4's embedded query) → "Merged set" (cylinder). Stages 5–6 execute on the merged/combined set.]*

### Join at Stage 4

During Stage 4 of the join process, the join stage has its own XQL query enclosed in parentheses (). This embedded query is commonly referred to as a join query. Afterward, the join query is executed, and the result set is temporarily stored. This result set is known as the right (result) set or the join (result) set.

### Join Fully Executed

When the join stage is fully executed, right before Stage 5, the left set and right set are combined by the join stage, becoming the main query's new intermediate result set. So, the left and right qualifiers in the join stages do not directly refer to the main and join datasets. Instead, they refer to the intermediate result sets created or updated during query execution.

---

## Using Joins in Query Languages

Joins combine data from multiple tables based on related columns. Cross-joins operations like this, also known as Cartesian joins, are useful in XQL for analyzing data from different tables.

### Join Variations

Understanding Cartesian product is key to understanding join types in XQL. In this context, the term "product" is the result of multiplication and has nothing to do with consumer products. Click each item for more information about Cartesian product and join types in query languages.

#### Cartesian Product

Given two sets A={1, 2, 3} and B={X, Y, Z}, the Cartesian product of these two sets includes all possible combinations of elements from A and B:

| | X | Y | Z |
|-|---|---|---|
| **1** | {X,1} | {Y,1} | {Z,1} |
| **2** | {X,2} | {Y,2} | {Z,2} |
| **3** | {X,3} | {Y,3} | {Z,3} |

**A × B**

#### Join Types in Query Languages

Joins combine data from multiple tables based on related columns. Cross-join operations like this, also known as Cartesian joins, are useful in XQL for analyzing data from different tables.

#### Differences Between Q Join Types

*(Content covered in subsequent sections on Inner, Left, Right join types.)*

---

## Query Datasets

To understand the XQL join types, let's consider the two simple datasets described below.

**Left Table (LT):** LT, which stands for the left table, is the dataset that will act as the main dataset in our XQL query. It has four rows and two columns with L1 and L2 names.

**Right Table (RT):** RT, which stands for the right table, is the dataset that will act as the join query dataset. It has three rows and two columns, R1 and R2.

### Associating Two Datasets

The idea of joins is associating two datasets using some fields with comparable values. In the example, columns in LT and RT have comparable values that enable joins.

An example join condition would match columns RT.R1 and LT.L1; these columns have the values LT.L1 = (2, 3, 4, 5) and RT.R1=(1, 2, 3).

Note the use of the dot operator (.) in full column names. Also note that the two datasets described here are used in the examples in the next sections.

**LT table:**

| L1 | L2 |
|----|----|
| 2  | B  |
| 3  | C  |
| 4  | D  |
| 5  | E  |

**RT table:**

| R1 | R2 |
|----|----|
| 1  | A  |
| 2  | B  |
| 3  | C  |

### Cartesian Join

Given two tables, LT and RT, the Cartesian join is created by pairing each row of table LT with all rows of table RT. If two tables have n and m rows, the Cartesian join has n\*m rows.

In this example, LT and RT have four and three rows; hence, the Cartesian join has 12 rows, as shown in the table. By default, XQL result tables show the fields of the join set (also known as the right table or RT) first on the left.

There are 4\*3=12 rows. What makes a Cartesian join different from a typical join is the join condition, which is made up of Boolean expressions used in the filter stages. In a Cartesian join, the join condition is hardcoded as "true."

**Cartesian join result (R1, R2, L1, L2):**

| R1 | R2 | L1 | L2 |
|----|----|----|-----|
| 1  | A  | 2  | B  |
| 2  | B  | 2  | B  |
| 3  | C  | 2  | B  |
| 1  | A  | 3  | C  |
| 2  | B  | 3  | C  |
| 3  | C  | 3  | C  |
| 1  | A  | 4  | D  |
| 2  | B  | 4  | D  |
| 3  | C  | 4  | D  |
| 1  | A  | 5  | E  |
| 2  | B  | 5  | E  |
| 3  | C  | 5  | E  |

---

## Venn Diagrams

Understanding the differences between XQL join types can be very complex. A popular way to compare join types is to visualize them using Venn diagrams. The first diagram shows a Cartesian join of LT and RT. The second Venn diagram shows the inner join. Note the visual difference between the two diagrams.

*[Diagram: Two Venn diagrams side by side. Top diagram: Cartesian join — two fully overlapping filled circles labeled LT and RT (complete overlap, entire area shaded). Bottom diagram: Inner join — two partially overlapping circles labeled LT and RT with only the intersection shaded.]*

---

## XQL Join Types

There are three join types in the XQL join stage: inner, left, and right.

### Join Query Examples

As in the above examples, you specify a type using the type clause as in type=inner or type=left. The type is an optional argument for the join. If you do not specify it, type defaults to inner.

Similarly, the right set in XQL comes from the dataset specified at the top of the join stage. We also use the terms "main set" and "join set" to refer to the left and right sets, respectively.

The examples with a hardcoded true condition are extreme cases that are not typically used in queries. They are presented here solely to explain the join types.

**Join Predicates:** If the join predicate (also known as the join condition) evaluates to true, as in the Boolean expression "true=true", the type has no effect. All the following XQL queries generate the same result table, varying in sort order when the query execution is completed.

Remember, the true condition does not discard any records from the Cartesian join, so the final table is a Cartesian product.

```
dataset = LT | join type=LEFT  (dataset = RT) as RT2 (true=true)
dataset = LT | join type=INNER (dataset = RT) as RT2 (true=true)
dataset = LT | join type=RIGHT (dataset = RT) as RT2 (true=true)
```

---

## Inner Type Join

An inner type join returns all records that match values in both left and right result sets. The Venn diagram illustrates the inner type as the intersection of two sets. XQL inner join is equivalent to SQL JOIN (also known as INNER JOIN).

*[Diagram: Venn diagram — two partially overlapping circles labeled LT and RT; only the intersection/overlap area is shaded green.]*

### Inner Join with Hardcoded False

To better understand the inner type, consider the following XQL query, which has a deterministic false condition, meaning that the condition is hardcoded false:

```
dataset = LT | join type=INNER (dataset = RT) as RT2 (true=false)
```

The join predicate for this query is "(true=false)", which should read as "is true equal to false?". The predicate is not correct; therefore, this Boolean expression evaluates to false for each record of the Cartesian join. So, no records are selected, and the combined result set becomes an empty set, as shown in the Venn diagram.

### Inner Join Example

Consider the following inner join example:

```
dataset = LT | join type=INNER (dataset = RT) as RT2 (RT2.R1 = L1)
```

In this example, the join condition (RT2.R1 = L1) is evaluated as true or false depending on the field values of the current row being processed. Two matching rows per condition are copied to the final results table.

For the inner join type, the priorities of the left and right tables are equal. There is no additional processing, and the join stage stops here. In this example, the combined result table has two rows.

---

## Left Type Join

A left type join returns all records in the left set, as well as matching records in the right set. The Venn diagram shows the left join type as the entire left set. XQL left join is equivalent to SQL LEFT OUTER JOIN (also known as LEFT JOIN).

*[Diagram: Venn diagram — two partially overlapping circles labeled LT and RT; the entire left circle (LT) is shaded green, including the intersection.]*

### Left Join with Hardcoded False

Consider the following XQL query, which has a deterministic, hardcoded false condition:

```
dataset = LT | join type=LEFT (dataset = RT) as RT2 (true=false)
```

The join predicate is false for all records processed; therefore, all records in the Cartesian join are discarded. However, because the join type is left join, the records in the left set are added to the combined result set. So, the number of rows in the combined table is equal to the number of rows in the left table.

### Left Join Example

Consider the following left join example:

```
dataset = LT | join type=LEFT (dataset = RT) as RT2 (RT2.R1 = L1)
```

The final result table is created by following the two links shown as 1 and 2 in the figure. Link 1 shows the matching rows where the join condition RT2.R1 = L1 turns out to be true. Link 2 shows the remaining rows in the left table; for the left join type, the priority is on the left table; so, all the values in the left table are preserved and copied to the final table. The number of rows in the final results table for this example is four.

---

## Right Type Join

A right type join returns all records in the right set, as well as matching records in the left table. The Venn diagram shows the right join type as the entire right set. XQL right join is equivalent to SQL RIGHT OUTER JOIN (also known as RIGHT JOIN).

*[Diagram: Venn diagram — two partially overlapping circles labeled LT and RT; the entire right circle (RT) is shaded green, including the intersection.]*

### Right Join with Hardcoded False

Consider the following XQL query, which has a deterministic, hardcoded false condition:

```
dataset = LT | join type=RIGHT (dataset = RT) as RT2 (true=false)
```

The join predicate is false for all rows processed; therefore, all rows in the Cartesian product table are discarded. However, because the join type is right join, the records in the right set are added to the combined result set. So, the number of rows in the combined table equals the number of rows in the right table.

### Right Join Example

Let's take the following right join example:

```
dataset = LT | join type=RIGHT (dataset = RT) as RT2 (RT2.R1 = L1)
```

The final result table is created by following the links 1 and 2 in the figure. Link 1 shows the matching rows where the join condition RT2.R1 = L1 is true. Link 2 shows the remaining rows in the right table; these rows are preserved and added to the final table because the join type in the example is a right join type. For this example, there are three rows in the final results table.

### Section Knowledge Check — Right Join Row Count

**How many rows does the following XQL query return?**

```
dataset = A | limit 3 | join type=right (dataset = B | limit 4) as B true=true
```

- 10
- **12** ✅
- 4
- 5

**Correct: 12**

---

**How many rows does the following XQL query return?**

```
dataset = A | limit 3 | join type=right (dataset = B | limit 2) as B true=false
```

- **2** ✅
- 3
- 6
- 5

**Correct: 2**

---

## Knowledge Checks

### Quiz — Question 1 of 5

**Q1. How many rows does the following XQL query return?**

```
dataset = A | limit 4 | join type=inner  (dataset = A | limit 3) as A2 (true=false)
```

- 0 ✅
- 1
- 3
- 4

**Correct: 0**

---

### Quiz — Question 2 of 5

**Q2. How many rows does the following XQL query return?**

```
dataset = A | limit 4 | join type=right  (dataset = A | limit 3) as A2 (true=true)
```

- 12 ✅
- 7
- 4
- 3

**Correct: 12**

---

### Quiz — Question 3 of 5

**Q3. How many rows does the following XQL query return?**

```
dataset = A | limit 3 | join type=left  (dataset = A ) as A2 (A2.ID = ID)
```

- 3 ✅
- 2
- 5
- 6

**Correct: 3**

---

### Quiz — Question 4 of 5

**Q4. How many rows does the following XQL query return?**

```
dataset = A | limit 3 | join type=right  (dataset = A ) as A2 (A2.ID = ID)
```

- 10 ✅
- 15
- 5
- 3

**Correct: 10**

---

### Quiz — Question 5 of 5

**Q5. How many rows does the following XQL query return?**

```
dataset = A | limit 3 | join type=right  (dataset = A ) as A2 (true=true)
```

- 30 ✅
- 15
- 10
- 5

**Correct: 30**
