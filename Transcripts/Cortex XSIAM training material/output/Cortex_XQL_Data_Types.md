# Cortex XQL: Data Types

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Multivalued Fields

What are multivalued fields (MVFs), and why is their support in XSIAM datasets so important? MVFs are fields that can store multiple values. For instance, consider a situation where you want to store endpoints' IP addresses in a database table. An endpoint can have one or more IP addresses because each network card has a separate TCP/IP stack.

### Three Field-Design Options

Your field-design options for an IP table in the database would be:

| Option | Description |
|--------|-------------|
| **Separate Fields** | Use a separate field for each IP address. With this option, you do not know the exact number of IP addresses in advance. |
| **Strings** | Use a string containing all IP addresses separated by a delimiter. |
| **Databases** | Use databases that can have multivalued fields. |

### Relational Databases

Traditional relational databases (DBs) cannot have multivalued fields. Table cells that are fields are atomic; they cannot contain more than one value. In other words, fields cannot contain separate values that can be uniquely addressed — for example, for a query. SQL is the standard language for data access and data manipulation for relational databases.

### Non-Relational Databases

Non-relational DBs can have multivalued fields. Such a field can contain multiple values, each uniquely addressable, such as an array of strings or a JSON object. Data in such DBs is stored in a nontabular form. Therefore, a query execution results in a "result set" that may or may not be tabular. The "result table" is just one type of view of the result set. Non-relational DBs are also known as NoSQL (Not only SQL) DBs.

---

## XSIAM Datasets

XSIAM datasets contain security-related data such as alerts and logs, as opposed to well-structured data such as data about books in a library. Alerts and logs come from many different sources. Before storing the data, XSIAM normalizes values and field names.

XSIAM datasets are non-relational (NoSQL) databases that store data in nontabular forms. Hence, a field in a dataset can contain multiple values and is known as a multivalued field. XQL can access each such value in a multivalued field using the JSON data type and arrays. Also, fields are known as attributes.

*[Diagram: Stylized hexagonal database icon with green outline, representing XSIAM's non-relational NoSQL dataset storage architecture.]*

---

## Dataset Schemas

A schema is data about a dataset, which is stored in another dataset. A schema dataset basically provides a description of all the fields for a given dataset. So, each dataset in XSIAM is associated with a schema dataset. To open the schema dataset of a dataset, go to the Schema tab on the XQL Search page.

### Schema Table

We can call the schema dataset a schema table because it does not contain any multivalued fields; the columns of a schema table are dataset, field name, type, array, and description. The schema table definition is fixed for all the datasets.

*[Screenshot: XQL Search page showing the Schema tab. Table columns: DATASET, FIELD NAME, TYPE, IS ARRAY, DESCRIPTION. Sample rows:*
- *xdr_data | \_time | datetime | no | system field: ent...*
- *xdr_data | dfe\_labels | string | yes | Story label*
- *xdr_data | story\_id | string | no | ID of the story]*

### Search Page

The XQL Search page of the management console is always associated with a dataset. If you just open the XQL Search page, the associated dataset is the default dataset, and the Schema table shows the description of this default dataset.

Depending on the dataset stage in your XQL queries, the Schema table will be populated accordingly for the current dataset in your last query. Remember that in a newly activated XSIAM instance, the default dataset is xdr\_data, and you can change the default from the Configurations page.

### Fields

A field in XSIAM datasets can store single or multiple values of the following types: boolean, datetime, enum, float, int, json, and string. The data type of a field is shown under the TYPE column in the Schema table.

A dataset field can also store multiple values of each type. The IS ARRAY column in the Schema table indicates whether a field stores multiple values; IS ARRAY has a yes or no value, as shown in the screenshot.

*[Screenshot: Schema tab with IS ARRAY column highlighted in green, showing "IS ARRAY indicates array fields." dfe\_labels row shows yes; \_time and story\_id show no. Right filter panel shows type options: boolean, datetime, enum, float, int, json, string.]*

---

## Equal Sign (=) in XQL

XQL uses the equal sign (=) for assignment and comparison in the alter and filter stages, respectively.

Here are syntactic structures that show how the equal sign (=) is used for assignment and comparison:

### Assignment

```xql
alter <variable> = <expression>
```

### Comparison

```xql
filter <expression_1> = <expression_2>
```

---

## Variables Versus Expressions

### Variables

A variable is a symbolic name for memory locations to hold some values. So, a variable name is evaluated to a relative memory address at some point in compiling a programming logic.

### Expressions

An expression is a combination of programming objects that evaluates to a value. These objects can be values (literals), variables, function calls, and supported operators. An expression is evaluated to a value before any actual assignment or comparison takes place.

### Variables Versus Expressions Example

In the example, the expression has three string-valued components that are concatenated:

```
"Hello" + Concat(" World", "field1") + var1->a.b[1]
   ^              ^                         ^
String value   Function returning a string   A string value of a JSON variable
```

---

## Assignment in Alter Stage

In XQL query, the alter stage is used to create and update variables and fields by assigning new values or modifying existing ones.

### Alter Stage

The alter stage creates or updates variables as shown in the first row example. In addition, two alter stages can be combined into a single stage, as shown in the second row example.

```xql
alter <var1> = <value1>, [<var2> = <value2> [, ...]]

alter f1 = 25, f2 = 30
```

### Supported Data Types

In XQL, you can use the following data types on the left-hand side of an assignment: Boolean, int, float, string, json, and datetime. Enum types are only for comparisons in the filter stage.

| Type | Example Assignment |
|------|--------------------|
| Int, Float | `alter n1 = 20, n2 = 30.5` |
| String | `alter s1 = "hello"` |
| Boolean | `alter b1 = false` |
| JSON | `alter obj1 = object_create()` |
| Datetime | `alter dt1 = current_time()` |

### Fields and Variables

Fields and variables are the same in XQL, and these two terms are interchangeable. To create a new field, you can specify a new variable name on the left-hand side of an assignment. All fields of the effective dataset can be used as variables.

The dataset stage of an XQL query returns all fields in the specified dataset to the query as XQL variables. You can put the name of an existing field on the left-hand side to change its value. Nonexistent names are created as new variables.

### Result Sets

All query variables newly created or retrieved from datasets become potential fields of result sets. Potential fields are subject to field stage restrictions before being placed in result sets.

**Note:** The fields that you change using the alter stage can be existing or nonexisting. Existing fields are updated, whereas nonexisting fields are newly created and added to the intermediate result set.

### Notes on Backend Datasets

XQL queries never update backend datasets. All operations, such as alter stage assignments, occur in intermediate result sets that are in-memory copies of the datasets. The updated and newly created fields are displayed in the result sets of the executed queries. The "intermediate" result set is meant to indicate a temporary phase of the finalized result set.

XQL is a data-access language, not a data-manipulation language. There is an exception with modifying backend data stores; the target stage can override or add a result set to an existing dataset, thus modifying the backend data that way.

---

## Creating New Variables (Fields)

You can create new variables of some types by either assigning literals to them or using some XQL functions.

### Types Created by Direct Literal Assignment

New variables of some types can be created by assigning literals to them. Note that a literal is a value. For these simple types, the XQL compiler does not require a type declaration in XQL syntax; instead, the compiler can infer types from simple markers in values.

For example, double quotes around a set of characters denote a string type; character groups consisting of digits are integers, and digit groups with a decimal point symbol (.) are floats. Keywords like "true" and "false" are Boolean values, while null is an untyped value.

### Types Created Using Some XQL Functions

More complex types, such as json and datetime, can only be created using related XQL functions. JSON-valued functions include `object_create()` and `json_extract()`; datetime-valued functions include `current_time()`, `parse_timestamp()`, and `to_timestamp()`. Note that the enumeration type can not be contained in an assignment in alter stages; this type is only for comparisons in filter stages.

---

## Arrays in XQL

XQL uses arrays to store multivalued fields in digested datasets. You can also explicitly create arrays in XQL using array-valued functions, such as `arraycreate()`, `split()`, and `json_extract_array()`.

### Example Query

In the example, the first alter stage calls `split()`, which returns an array of strings (also shown as string[]). The second alter calls `arraycreate()`, which stores each of its parameters in a separate array location.

```xql
| alter octets = split("192.168.1.20", ".")
| alter nums = arraycreate("1", "2", "3", "4")
```

**Result table** (This image shows the query results in the Table.):

| OCTETS | NUMS |
|--------|------|
| 192 + 3 More | 1 + 3 More |

*Arrow annotation shows expanded values: 168, 1, 20 for OCTETS and 1, 2, 3, 4 for NUMS.*

---

## Data Types in Filter Stage (Comparison)

In the filter stage, the equal sign (=) tests the equality of values on its left and right sides. Therefore, the equal sign in the filter stage is a Boolean operator that returns true or false.

### Evaluating Expressions

The XQL engine evaluates the expressions for each record (or row) in the specified dataset. In the filter stage, only rows with "true" filter values are selected to advance to the next step.

You can use expressions on either side of the equality operator (=) instead of values. This is because expressions are evaluated to values before checking for equality, as shown in the syntax below. Additionally, the values of expressions in the filter stage can be of any type, including enums.

```xql
filter <expression_1> = <expression_2>
```

### Filter Stage Comparisons

These examples are atypical and only meant for educational purposes to illustrate the concept. Typically, comparison are not used with expressions on the left-hand side, as the filter stage evaluates expressions to values before checking for equality. However, in these examples, the filter stages evaluate to true values.

```xql
filter (add(2,4) = 5) and (5 = add(2,3))
filter "2"+"3" = concat("2", "3")
filter object_create("q","2") = object_create("q","2")
```

**Note:** To check for any Boolean expression, you can use the `if()` function, as shown in the example below.

---

## Autocomplete Feature for Enum Types

An enum type (also called an enumerated or enumeration type) is a data type that consists of a set of predefined values in dataset schemas. In other words, all possible values for an enum field are known in advance, and these values can be enumerated.

### Enum Types

You can use enum type in the filter stage for comparisons. However, you cannot use enum type in the alter stage for assignment. For example, the event\_type field in xdr\_data is of type enum, meaning that event\_type can only have predefined values, including AGENT\_STATUS, DEVICE, and FILE. For example, you may want to view logs with the FILE event\_type. The filter stage can be as follows:

```xql
| filter event_type = ENUM.FILE
// equivalently:
| filter event_type = FILE
```

When an enumeration type field appears in a comparison in filter stages, the autocomplete feature displays all possible field values for your selection. In the example, autocomplete will automatically show all possible event\_type values.

*[Screenshot: XQL Query Builder showing autocomplete dropdown for `dataset = xdr_data | filter event_type =`. Dropdown list shows enum values:*
- *ENUM.AGENT\_STATUS — enum*
- *ENUM.CLOUD\_AUDIT\_LOGS — enum*
- *ENUM.DEVICE — enum*
- *ENUM.EMAIL\_DATA — enum*
- *ENUM.EVENT\_LOG — enum*
- *ENUM.FILE — enum*
- *ENUM.GAP — enum (partially visible)]*

### Supported Syntax for Enum

When using fields of type ENUM, the following syntax formats are supported:

```xql
filter event_type in (ENUM.FILE, ENUM.NETWORK, ENUM.PROCESS)
filter event_type in (FILE, NETWORK, PROCESS)
```

Note the Boolean operators "in" and "or". These queries return the same result:

```xql
filter event_type in (FILE, NETWORK, PROCESS)
filter event_type=FILE or event_type=NETWORK or event_type=PROCESS
```

---

## Knowledge Checks

### Section Knowledge Checks (gray bar / Submit style)

**KC1. Given that the DS1 dataset has 20 fields, how many columns do you see in the result table of the query below? (Ignore columns that are automatically added to the result set like \_time.)**

```xql
Query: dataset = DS1 | fields fld1 |
alter var1 = json_extract(fld1, "$.type") |
filter fld1 != null | limit 4
```

- 4
- 2 ✅
- 20
- 22
- **Correct: 2**

> The `fields fld1` stage selects only fld1; the subsequent `alter var1` adds one variable, giving 2 columns in output (fld1 and var1).

---

**KC2. Which two data types require special functions to create new variables? (Choose two.)**

- Datetime ✅
- JSON ✅
- Enum
- Array
- **Correct: Datetime and JSON**

---

### Numbered Quiz (Questions 1–5 of 5)

**Q1. Which two data types can be used in alter stages for assignment? (Choose two)**
- boolean ✅
- json ✅
- enum
- array
- **Correct: boolean, json**

> Note: Enum cannot be used in alter stage for assignment — only in filter stage for comparisons.

---

**Q2. Which value is known as an untyped constant in XQL?**
- null ✅
- 0
- True
- true
- **Correct: null**

---

**Q3. Which feature on the XQL Search page of the Cortex XSIAM console displays the enum values for enum fields?**
- Autocomplete ✅
- Schema
- XQL Helper
- Query Library
- **Correct: Autocomplete**

---

**Q4. Given that the DS1 dataset is not empty, which value appears in column F1 in the result table? Query: dataset = DS1 | alter f1 = "ABC" | filter f1 = "AB" | alter f1 = "ABCD"**
- null ✅
- AB
- ABC
- ABCD
- **Correct: null**

> The filter `f1 = "AB"` evaluates after `alter f1 = "ABC"`, so f1 = "ABC" ≠ "AB" — no rows pass the filter. Result is empty/null.

---

**Q5. Given that the DS1 dataset has 20 fields, how many columns are in the result table of the query below? (Ignore columns automatically added to the result set, such as \_time.) Query: dataset = xdr_data | fields fld1, fld2 | fields * | limit 4**
- 2 ✅
- 4
- 20
- 22
- **Correct: 2**

> `fields fld1, fld2` selects 2 fields and erases all others. `fields *` then selects all fields currently available — which is just those 2.
