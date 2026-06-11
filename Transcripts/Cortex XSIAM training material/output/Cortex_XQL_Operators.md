# Cortex XQL: Operators

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## XQL Operators Overview

Operators are function-like constructs in programming languages. Like functions, operators take arguments known as operands, apply an action to them, and then return the result of the action to the caller. XQL operands consist of XQL variables (fields) and values.

### Coding Methods with Operators

XQL operators are present in programming languages to provide a more natural and intuitive coding style for the syntax. Click the tabs to compare coding styles using a function and an operator for string concatenation.

### Concatenation with a Function

The following is an example of concatenation using a function.

```xql
str3 = concat(str1, str2)
```

### Concatenation with an Operator

The following is an example of concatenation using an operator.

```xql
str3 = str1 + str2
```

The plus sign (+) is the concatenation operator. Str1 and str2 are the operator's operands. Operators are sensitive to the data types being processed; operands are data types, just like functions.

---

## Operator Categorization

Cortex XQL organizes operators into different groups, making it easier for users to work with various types of operators and conditions in their queries. This categorization enables users to choose the appropriate operators for their specific use cases within the XQL query language.

| Category | Description |
|----------|-------------|
| **Comparison** | Comparison operators compare values and determine their relationship. They evaluate if two values are equal, not equal, greater than, less than, greater than or equal to, or less than or equal to each other. |
| **Boolean** | Boolean (logical) operators perform logical operations and combine conditions. In XQL, operators include logical AND and logical OR. |
| **Range** | Range (membership) operators are used to determine if a value is a member of a specific range or set. Examples of range operators include the "in" operator, which checks if a value is present in a specified set of values, and the "not in" operator, which checks if a value is absent in a specified set of values. |
| **String** | String operators are used for manipulating and comparing string values. Examples of string operators include "Contains" (which checks if a string or array contains another string) and "Not Contains" (which checks if a string or array does not contain another string). |

---

## XQL Comparison Operators

XQL provides basic comparison operators, also known as relational operators, such as equal to (=), less than (<), and less than or equal to (<=).

The table displays a complete list of comparison operators, their operand type, and operator return type. Note that the comparison operators return Boolean values.

| Operator | Description | Operand Type | Return Type |
|----------|-------------|--------------|-------------|
| = | Equal | Any type | Boolean |
| != | Not equal | Any type | Boolean |
| < | Less than | Number (integer or float) | Boolean |
| <= | Less than or equal to | Number (integer or float) | Boolean |
| > | Greater than | Number (integer or float) | Boolean |
| >= | Greater than or equal to | Number (integer or float) | Boolean |

### Equality Operator

In XQL, the equality operator (=) is overloaded based on the stage.

**Equality in the Alter Stage**

When used in the alter stage, the equal sign functions as an assignment operator.

**Equality with the Filter Stage**

When used in the filter stage, the equal sign functions as a comparison operator that returns either true or false.

### Query with Comparison Operators

Consider this use case where you want to show the total number of payload bytes from the source to the destination and select only the records that are greater than or equal to 1 megabyte (MB). You can use this query:

```xql
dataset = xdr_data
| filter action_total_upload >= pow(1024,2) // = 1 MB
| filter action_total_upload
| limit 5
```

---

## XQL Boolean Operators

XQL supports the basic Boolean (logical) operators "and" and "or," which combine two or more Boolean expressions in filter stages.

### Boolean And and Or Operators

Boolean operators in XQL perform operations on Boolean operands and return Boolean values as a result. The operand and return types of these operators remain unchanged. In XQL, the keyword "not" is used to negate the results of operators when used with "in" and "not in" expressions. However, "not" is not considered an operator by itself.

| Operator | Description | Operand Type | Return Type |
|----------|-------------|--------------|-------------|
| And | Boolean and | Boolean | Boolean |
| Or | Boolean or | Boolean | Boolean |

### Boolean Operator Example

In this example, the filter stage limits the amount of action_total_upload from both ends, upper and lower limits, given as:

```
1MB <= action_total_upload <= 10MB
```

Using the AND operator to combine two different Boolean expressions is common. The full query is as follows:

```xql
dataset = xdr_data
| filter action_total_upload >= pow(1024,2)
  AND action_total_upload <= multiply(pow(1024,2),10)
| filter action_total_upload
| limit 5
```

---

## XQL Range Operators

Range operators are useful for filtering and performing conditional operations to check if a value falls within a certain range. They provide a concise way to specify sets of values and perform membership checks in Cortex XQL queries.

### Membership Evaluation with Range Operators

A range operator returns true if the left operand is in the list specified as the right operand. Therefore, range operators are Boolean operators and return true or false depending on the membership status.

| Operator | Description | Operand Type | Return Type |
|----------|-------------|--------------|-------------|
| In / Not in | Test if a value is a member of the given set | String or Number | Boolean |
| Incidr / Not incidr | Test if an IPv4 address in CIDR range or not | String | Boolean |
| Incidr6 / Not incidr6 | Test if an IPv6 address in CIDR range or not | String | Boolean |

### Range Operators

XQL includes two primary range operators: "in" and "incidr". Both operators search for an item in the list specified in the right operand based on the item specified in the left operand. Additional range operators are available and are variations of the "in" and "incidr" operators.

The operators "in" and "not in" are used to check if a value is a member of a set. These operators can be used with both numbers and strings.

**In**

To use the "in" operator, you need to specify a list of comma-separated items enclosed in parentheses, for example, (item1, item2, item3).

**Incidr**

The "incidr" operator is a special operator specific to IP address lists. It checks if an IPv4 address exists in the address list given in Classless Inter-Domain Routing (CIDR) notation. Therefore, the right operand of "incidr" is an IPv4 address range, such as "192.168.10.0/24" in CIDR format.

**Other Range Operators**

Other range operators are variations of the "in" and "incidr" operators.
- The "not in" operator is the Boolean negation of the "in" operator. It is used to check if an element does not [exist in the set].

### Query with "IN" operator

In this example, the filter stage tests if the record's actor_process_image_name field value is either powershell.exe or wscript.exe using the "in" operator.

The list members are specified as string-type values. The actor_process_image_name field is also of string type, as the type can be verified from the xdr_data schema.

```xql
filter actor_process_image_name in ("powershell.exe", "wscript.exe")
```

### Query with "NOT IN" operator

The "not in" operator returns true if a record's event_type field value is not in the list given as the right operand.

The list is explicitly created by specifying the comma-separated list members (ENUM.FILE, ENUM.NETWORK, ENUM.PROCESS), as in the Membership In example. Both event_type and the enum values in the list are integer values.

```xql
filter event_type not in (ENUM.FILE, ENUM.NETWORK, ENUM.PROCESS)
```

### Operator "In" in a Stage

This example is an exception in which XQL operators are utilized in a stage other than filtering. The query in this illustration operates on records from two datasets that are presented in a list. The list items do not require double quotes in this scenario.

```xql
dataset in (xdr_data, lookup1)
```

### List Creation with "In" Operator

In this example, you can create a list using XQL fields (or a variable) as comma-separated list items.

```xql
alter s1=10, s2=20, s3=30
| alter bool1 = if (10 in (s1, s2, s3) , true, false)
```

---

## Query IP Addresses

You can use the "incidr" operator to compare an IPv4 address against an IP address range in CIDR format. The operator checks if the IP address falls within the range specified by the CIDR notation.

In this example, the filter stage selects only records with action_remote_ip in the specified CIDR range "192.1.1.1/24".

```xql
filter action_remote_ip incidr "192.1.1.1/24"
```

### Boolean Value Returned By Operator

This example shows how to check the Boolean value returned by an XQL operator. To achieve the desired result, use the if() function in an alter stage. The if() function evaluates a Boolean expression in its first parameter and returns either the second or third parameter depending on the evaluated Boolean value.

The second and third if() parameters are true and false, respectively. The full query is as follows:

```xql
dataset = xdr_data
| alter bool1 = if("192.1.1.1" incidr "192.1.1.1/31", true, false)
| alter bool2 = if("192.1.1.2" incidr "192.1.1.1/31", true, false)
| fields bool1, bool2
| limit 1
```

*[Diagram: Results Values table — BOOL1 column shows "true", BOOL2 column shows "false". Illustrates that 192.1.1.1 is within the /31 range but 192.1.1.2 is not.]*

---

## XQL String Operators

String operators facilitate efficient manipulation and comparison of string values in queries, including pattern matching and information extraction. They offer functionality for pattern matching, regular expression matching, and other operations for analyzing and extracting information.

### Contains and Not Contains

XQL provides string operators, including "contains", "not contains", and "~=", all of which return Boolean values.

| Operator | Description | Operand Type | Return Type |
|----------|-------------|--------------|-------------|
| Contains / Not contains | Test if a string is contained in another string or string array or not | String or String [] | Boolean |
| ~= | Test if a string matches a regular expression | String | Boolean |

### Primary XQL String Operators

In XQL, you will primarily use two string operators.

**Contains and Not Contains**

The "contains" operator returns true if its left operand contains the substring given in the right operand. For example, this valid Boolean expression in XQL: arr1 contains "abc". Contains can also search for a substring in a list of strings given as a string array. For example, if arr1 is of type String[] and substr is of type string, the Boolean expression is correct in XQL: arr1 contains substr. The "not contains" operator is the negation of the "contains" operator.

**~=**

The "~=" operator, also known as the regular expression matching operator, checks if a string matches a pattern given as a regular expression. The operator returns true if its left operand matches the regexp pattern in its right operand, for example, name ~= ".\*Testing.\*Law".

The "~=" operator is most useful for handling strings that exhibit some patterns. For example, Windows filenames generate such patterns, the filenames having the well-known three- or four-letter extensions separated by a period (.) from the first part of the name, such as ".exe" or ".docx".

### String Concatenation Operator

You can use the plus (+) symbol as a string concatenation operator in XQL, for example:

```xql
alter str1 = "XSIAM" + " is " + "fun."
```

There is no arithmetic operator in XQL. This means that the plus sign is not defined over the numbers. The following generates a runtime error:

```xql
alter num1 = 4 + 5 // Error: Expected string but received number.
```

### String Matching Regex Pattern

In this "~=" example, the filter stage selects the records with the action_process_image_name field matching the pattern ".\*Test(Dog|Cat).\*\.exe".

The following describes the logic within the query:

**Random Length String** — The pattern expects a filename to begin with a random length string in the example.

**Matching String** — This is coded by ".\*". It then expects to see "TestDog" or "TestCat" in the filename. This is coded with "Test(Dog|Cat)".

**Allow Random Strings** — Any random string is allowed in the filename.

```xql
config timeframe = 12MO
| dataset = xdr_data
|
| filter action_process_image_name ~= ".*Test(Dog|Cat).*\.exe"
| fields action_process_image_name
| dedup action_process_image_name | limit 5
```

---

## XQL Queries with String Operators

Let's explore string operators and some examples of how they are used in XQL.

### String Within a Record

In this example, the filter stage uses the "contains" operator to select records with a field named "actor_process_image_name" that contains the substring "psexec."

```xql
filter lowercase(actor_process_image_name) contains "psexec"
```

### String Within an Array

This example shows how the "contains" operator is used with string arrays. In the result set, bool1 will have the true value because the array contains the substring "ef".

```xql
alter arr1 = arraycreate("abc", "def", "fg")
  | alter bool1 = if ( arr1 contains "ef", true, false)
```

---

## Knowledge Checks

### Section Knowledge Check (p. 7) — Inline Green-Highlight Quiz

**KCa. What is the returned result when using the equality (=) sign in an XQL filter query?**
- Concatenated string text
- A Boolean that returns true or false ✅
- An integer value greater than zero
- An absolute match
- **Correct: A Boolean that returns true or false**

**KCb. Which range operator allows you to compare IPv4 address lists in CIDR format?**
- containsIPv4
- incidr ✅
- is + "IPv4"
- ~=ipv4
- **Correct: incidr**

---

## Numbered Quiz (Question 1–5 of 5)

**Q1. Which data type do almost all XQL operators return?**
- Boolean ✅
- String
- Type of left operand
- Type of right operand
- **Correct: Boolean**

**Q2. Which XQL operator has two different functions that differ depending on the stage in which it is used?**
- = ✅
- +
- ~=
- !=
- **Correct: =**

**Q3. What is the primary XQL stage where XQL operators are used?**
- Filter ✅
- Alter
- Fields
- Dataset
- **Correct: Filter**

**Q4. Which two options are valid XQL operators? (Choose two)**
- In ✅
- Or ✅
- Not
- Out
- **Correct: In, Or**

**Q5. Which operator tests if a string matches a regular expression?**
- ~= ✅
- =~
- !=
- <
- **Correct: ~=**
