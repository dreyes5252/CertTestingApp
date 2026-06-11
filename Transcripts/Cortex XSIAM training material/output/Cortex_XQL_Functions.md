# Cortex XQL: Functions

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## XQL Functions in Queries

Functions in XQL perform actions on their arguments and return a value as a result. They provide a level of abstraction for the callers, making complex operations simpler. In programming languages, functions can be seen as an extension of operators, which themselves can be considered as specialized functions.

The general syntax for XQL functions is as follows:

```
<return-value> = func_name([<comma-separated-argument-list>])
```

## XQL Functions Examples

The following are three-stage commands in Cortex XQL that demonstrate the use of various functions to manipulate and filter data effectively. These examples showcase how to extract the day from the current time, divide a data field by a specific value and round the result, and filter records based on the length of a field. Click the tabs for more information about each example.

### Tab: extract_time() and current_time()

In this example, the alter stage command is used to perform an assignment using the built-in functions. The `current_time()` function returns the current time, and the `extract_time()` function is then used with the "DAY" parameter to extract the day of the month from the current time. The result is assigned to the `timeDay` field.

```xql
alter timeDay = extract_time(current_time(), "DAY")
```

### Tab: round() and divide()

In this example, the alter stage command is used to perform an assignment with the built-in `divide()` and `round()` functions. The `divide()` function converts the dataUp value from bytes to kilobytes by dividing it by 1024, and the `round()` function is then used to round the result to the nearest whole number. Note the appearance of the `dataUp` variable on both the left and right sides of the assignment.

```xql
alter dataUp = round(divide(dataUp, 1024))
```

### Tab: len()

*(Content visible from tab label; function filters records based on the length of a field.)*

---

## Advanced XQL Functions

### Data Manipulation and Filtering Functions

Some generic XQL functions are designed for data manipulation and filtering, and can be used with the filter and alter stage commands. In contrast, the comp stage command is specifically for data aggregation and can only utilize aggregation functions such as `avg()`, `count()`, `first()`, and `last()`.

In the given example, the `to_integer()` function is correctly used with the alter stage command in line three. However, using `to_integer()` with the comp stage command in line four is incorrect, as it is not an aggregation function. As a result, the XQL compiler returns a syntax error.

*[Diagram: Two-line query example. Line 5: `alter x = to_integer(CNT)` — correct usage with alter stage. Line 6: `comp to_integer(CNT) as TOTAL by ID, PROD` — incorrect; causes syntax error.]*

### Any and All Array Functions

XQL supports the following array functions:

- The `array_all()` function: Returns true/false whether or not all elements in the array are matching the condition
- The `array_any()` function: Returns true/false whether or not at least 1 element is matching the condition

*[Screenshot: XQL-QUERY-42 — two-query example showing `filter any_labels` with `alter` using `array_any()` and `filter` with a `"pElement"` = "network" condition; `| limit 100`]*

```xql
dataset = xdr_data
| filter any_labels
| alter dns_labels = array_any(dns_labels, "pElement" = "network")
| filter dns_labels
| limit 100
```

### Windowcomp Functions

The `<</>>` stage provides functions calculating statistics. The functions compute values over a group of rows and returns a single result for each row for all records that contain matching values for the fields identified using a combination of the by clause, sort, and range. Some of the windowcomp functions are: `rank`, `first_value`, `stddev`, `sample`, `avg`, and `median`.

*[Screenshot: XQL-QUERY-42 showing `windowcomp count()` with `ord asc _product`]*

```xql
dataset = xdr_data
| filter product
| windowcomp count() ord asc _product
```

---

## XQL Function Arguments

In XQL, function arguments, also known as parameters, are specified as a comma-separated list enclosed in parentheses. These arguments can be either required or optional, and some functions may accept a variable number of arguments. When a function supports both required and optional argument types, the required arguments must be placed before the optional ones.

### Required and Optional Arguments

In this code snippet example, the alter stage command is used to modify the data by creating a new array called `ret`. The `arraycreate()` function is utilized to generate the array with a varying number of arguments, represented by `<arg1>` (required argument), `<arg2>` (optional), and so on.

```xql
alter ret = arraycreate(<arg1> [<arg2> [, ...]])
```

*[Diagram: Annotated function call showing labels — "Argument 1 (required)", "Function name", "Argument 2 (optional)", "Argument n (optional)"]*

### Function Syntax Symbols

Symbols help provide structure and clarity to the code, making it easier to read and understand. In XQL function syntax, these symbols are used to illustrate the required and optional arguments, as well as the possibility of multiple arguments.

| Symbol | Name | Meaning |
|--------|------|---------|
| `<>` | Angle Brackets | Often used to indicate a placeholder for the actual arguments you will provide when using the function. |
| `[]` | Square Bracket | Indicates an optional element; anything enclosed in `[ ]` is optional. |
| `...` | Ellipsis | The ellipsis symbol indicates the function can take a varying number of arguments separated by commas starting at this ellipsis argument position. |

---

## XQL Function Arguments Examples

In this example, we exemplify parameter types in XQL functions using the function `arraycreate()`.

**Function Syntax**

```xql
alter ret = arraycreate(<arg1> [, <arg2> [, ...]])
```

**Example 1**

This query causes a runtime error because `arraycreate()` requires at least one parameter. `//` is used for commenting.

```xql
alter array0 = arraycreate() //runtime error
```

**Example 2**

This query runs without any error because the required parameter is provided.

```xql
alter array1 = arraycreate(10) //no error
```

**Example 3**

The queries in this example run without any error because the function has an ellipsis argument declaration, so it can take any number of parameters after the required one.

```xql
alter array2 = arraycreate(10, 20) //no error
alter array3 = arraycreate(10, 20, 30, 40, 50) //no error
```

---

## Data Type Checking

Data type checking is crucial in two key aspects when using XQL functions.

These aspects are:

- **Expected Data Types** — Make sure that the data types of the arguments passed to a function match the expected data types.
- **One Value Return** — Check that a function returns a single value of a declared type. The declared type can be a singular type, such as a string or a number, or a container type, such as an array of strings or numbers.

### Runtime Error Example 1

In this example, the query calls `arraycreate()` to create an array. The first argument is of type string, so the function expects comma-separated strings as arguments. However, the third argument is a number, not a string. The runtime environment issues the runtime error for this query, as shown below.

The third argument type must match the first:

```xql
alter array1 = arraycreate("10", "20", 30) //runtime error
Error: Value 30 for function arraycreate is invalid. Expected string but received number.
```

### Runtime Error Example 2

This example is similar to the previous example: the query calls `arraycreate()` to create an array. This time, the first argument is of type integer (a numeric value), so the function expects comma-separated numbers as arguments. However, the second argument is a string.

The second argument type must match the first:

```xql
alter array1 = arraycreate(10, "20", "30") //runtime error
Error: Value 20 for function arraycreate is invalid. Expected number but received string.
```

---

## Mathematical Functions

Mathematical functions in XQL include the basic arithmetic functions; flooring or rounding functions, to the power function; and integer or floating-point number functions.

Mathematical functions in XQL include:

- **Basic Arithmetic** — Basic arithmetic functions in XQL include `add()`, `divide()`, `multiply()`, and `subtract()`.
- **Floor** — `floor()` returns an integer rounded down to the nearest integer. For example, `floor(3.6)` returns the integer 3.
- **Round** — `round()` returns an integer rounded to the nearest integer. For example, `round(3.6)` returns 4.
- **Pow** — The function `pow(x,y)` returns x^y, x to the power of y.

### Integer or Floating-Point Number

All the mathematical functions in XQL take number type arguments and return the resulting number as an integer or floating-point number. For example, the following query fragment can be used to convert number of bytes in the field `upByte` to kilobytes in `upKB`:

```xql
alter upKB = round(divide(upByte, 1024))
```

---

## String Functions

XQL provides many of the string functions found in other programming languages, such as converting strings to lowercase and uppercase, concatenating two strings, and splitting strings into substrings.

### String-Processing Functions

Click the tabs for more information about string-processing functions.

Accordion items (collapsed — content on subsequent pages):
- `len()`
- `string_count()`
- `split()`
- `format_string()`

### String Function Example

This example demonstrates the basic XQL string function usage. Notice how the `STR1_LEN` and `STR1` columns in the result table are created by the following query:

```xql
alter str1 = uppercase(concat("hello ", "world"))
| alter str1_len = len(str1)
```

| STR1_LEN | STR1 |
|----------|------|
| 11 | HELLO WORLD |

### Split() String Function

The XQL `split()` function splits a string into multiple substrings using a delimiter (also known as a separator). It returns an array containing the substrings. The delimiter is optional. If it is not specified, a space (" ") is used as the separator by default.

**Split Function Syntax**

```xql
split (<string-value> [, <delimiter>])
```

**Split Function Example**

In this example, the `split()` function separates the string value "192.168.1.20" using the separator "." and it stores the found substrings in a string array. The alter stage adds the variable `ip_octets` to the result set.

```xql
dataset = xdr_data
| alter ip_octets = split("192.168.1.20", ".")
| fields ip_octets
| limit 1
```

---

## Data Type Conversion Functions

Functions and operators in programming languages expect correct data types for their arguments. Most scripting languages can implicitly cast data types, while others, such as C/C++ and Java, require explicit type casting. XQL provides functions for type conversions. Examples include `to_boolean()`, `to_float()`, and `to_string()`.

The following functions are used for data type conversion:

| Function | Function | Function |
|----------|----------|----------|
| `to_boolean()` | `to_json_string()` | `to_timestamp()` |
| `to_float()` | | |
| `to_number()` | `to_integer()` | `to_string()` |

---

## Array-Processing Functions

Cortex XSIAM datasets are not relational databases. Therefore, fields are not "atomic," and they can contain multiple values. These type of fields are also called multivalued fields.

### Array-Processing Function Examples

In the first example, `arraycreate()` returns an array with two IP addresses. In the second example, `array_length()` returns 2, the length of the array argument ips, as shown in the results table.

```xql
alter ips = arraycreate("92.168.1.20", "92.168.1.30")
alter ips_len = array_length(ips)
```

| IPS_LEN | IPS |
|---------|-----|
| 2 | 192.168.1.20 + 1 More |

### List of Array-Processing Functions

Cortex XQL, the data access language of Cortex XSIAM, offers numerous array-manipulation functions for working with multivalued fields:

| | | | |
|--|--|--|--|
| `Arraycreate()` | `Arraydistinct()` | `Arraylength()` | `Arrayrange()` |
| `Arrayconcat()` | `Arrayindex()` | `Arraymap()` | `Arraystring()` |

---

## Arrayindex()

The XQL `arrayindex()` function returns the value stored at a specific array location specified by the index argument. In XQL, array indexes start with 0. That is, the first location is 0, the second is 1, and so on. The return type of `arrayindex()` is the type of the stored value.

The `arrayindex()` function syntax is as follows:

```xql
arrayindex(<array>, <index>)
```

### Arrayindex() Example

Given that the alter stage uses the `split()` function to parse an IP address as in the first row of the table, the function `arrayindex()` returns the string values shown in the second and third rows of the table based on the index parameter, which is the second argument of `arrayindex()`.

**Note:** The quotation marks at "192" are to indicate that the return value is a string type. You may need to convert this value to a number if you want to do some numerical calculations or numerical comparisons.

| | |
|--|--|
| Given | `alter ip_octets = split("192.168.1.20", ".")` |
| String Value | `"192"` = `arrayindex(ip_octets, 0)` |
| String Value | `"20"` = `arrayindex(ip_octets, 3)` |

---

## JSON-Processing Functions

JSON processing is an important area where XQL provides native syntax such as "syntactic sugar" notation, and specialized functions.

### JSON-Handling XQL Functions

Here is the list of XQL functions that can handle JSON type data:

| | | |
|--|--|--|
| `object_create()` | `json_extract_array()` | `to_json_string()` |
| `json_extract()` | `json_extract_scalar()` | |

### JSON-Processing Functions Example and Results Table

In the following query, the interesting point is the use of syntactic sugar formatting. Here the syntax `ax1->user{}` is called "syntactic sugar" format. Syntactic sugar is a programming language feature that is designed to make things easier to express. There are more such formats in XQL, like the format for array fields in JSON.

**JSON-Processing Functions Example**

The `"ax1->user{}"` is in syntactic sugar format.

```xql
dataset = xdr_data
| alter ax1 = object_create("user","Sar", "pass", "Mer")
| alter ax3 = ax1->user{}
| fields ax* | limit 1
```

**Results Table**

| AX3 | AX1 |
|-----|-----|
| "Sar" | user: "Sar" / pass: "Mer" |

---

## Other XQL Functions

Cortex XQL also provides a range of versatile functions for various purposes, including time-related data manipulation, conditional logic, and pattern matching.

You can use the `current_time()` function to return a timestamp value representing the current time and `extract_time()` to extract a specific part from the timestamp.

Cortex XQL does not provide the if statement, but you can use the `if()` function to implement similar logic. Pattern matching in strings can be performed using the `regextract(string, pattern)` function, which returns an array containing substrings that match the given regular expression pattern.

**Note:** XQL supports RE2 for regular-expression processing. RE2 is a software library for regular expressions via a finite-state machine using automata theory, in contrast to almost all other regular expression libraries, which use backtracking implementations. It provides a C++ interface.

**Datetime (timestamp) processing functions:**

| | | |
|--|--|--|
| `current_timestamp()` | `format_timestamp()` | `if()` |
| `extract_timestamp()` | `to_timestamp()` | `regextract()` |

### Other XQL Function Examples

Click the tabs for more information about time-related data manipulation, conditional logic, and pattern-matching examples.

### Tab: Time-Related Data Manipulation

The example shows how to calculate the current day of the month. The alter stage uses `current_time()` to return the current timestamp and then `extract_time()` to extract the DAY portion of the current timestamp.

```xql
alter day = extract_time(current_time(), "DAY")
```

### Tab: Conditional Logic

In the example, the `if()` function takes three arguments: the first argument is a Boolean expression; the second and third arguments are string values. If the Boolean expression evaluates to true, the second argument ("first" in this example) is returned. Otherwise, the third argument ("second" in the example) is returned.

```xql
alter ret = if(val > 10, "first", "second")
```

### Tab: Pattern Matching

In this example, the `regextract()` function takes two string parameters, `val` and `exp`. The `exp` parameter, `"a\db"`, specifies the pattern to look for: an "a" followed by a digit (`\d`) and then a "b", such as "a5b". The function identifies two occurrences of this pattern in the `val` parameter: "a4b" and "a5b".

**Note:** The "any digit" pattern is typically represented by `\d`. However, when you directly write `\d` within a string literal in an XQL query, you must use the escape sequence double backslash (`\\`).

In this specific example, using `exp = "a[0-9]b"` would yield the same result.

```xql
alter val = "a4b aaa aa5b ab9 ab4"
| alter exp = "a\db"
| alter ret = regextract(val, exp)
```

*[Result table: RET column shows array value `a4b` + 1 More → `a5b`]*

---

## Knowledge Checks

### Section Knowledge Checks (p. 9)

**Q1. What is the num value when this XQL query is executed?**
```xql
alter num = array_length(split("192.168.1.20", "2."))
```
- 1
- 2 ✅
- 4
- 0

**Correct: 2** *(split by "2." on "192.168.1.20" yields ["19","168.1."] — 2 elements)*

---

**Q2. Which symbol separates the stages?**
- Forward slash (/)
- Pipe (|) ✅
- Semicolon (;)
- Comma (,)

**Correct: Pipe (|)**

---

### Numbered Quiz (Questions 1–5 of 5)

**Q1 of 5. Which two XQL functions return an array? (Choose two)**
- regextract() (disabled) ✅
- split() (disabled) ✅
- arrayindex() (disabled)
- object_create() (disabled)

**Correct: regextract() and split()** *(Score: 2)*

---

**Q2 of 5. Which type of object does object_create() produce?**
- JSON ✅
- Array
- List
- Map

**Correct: JSON** *(Score: 1)*

---

**Q3 of 5. What is the XQL-native format used to access JSON data?**
- Sugar ✅
- JMESPath
- JSONiq
- GraphQL

**Correct: Sugar** *(syntactic sugar notation, e.g., `field->key{}`)* *(Score: 1)*

---

**Q4 of 5. What do brackets ([]) return in an XQL function synopsis?**
- An optional parameter ✅
- A required parameter
- An array position parameter
- Varying number of parameters

**Correct: An optional parameter** *(Score: 1)*

---

**Q5 of 5. Which XQL query would cause a runtime error?**
- `alter ret = arraycreate("10", "20", 30)` ✅
- `alter ret = "a\\b"`
- `alter ret = split("192.168.1.20")`
- `alter ret = len(concat("a", "b"))`

**Correct: `alter ret = arraycreate("10", "20", 30)`** *(mixed types: strings and number)* *(Score: 1)*
