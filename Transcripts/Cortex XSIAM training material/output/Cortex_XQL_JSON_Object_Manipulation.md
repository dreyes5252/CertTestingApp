# Cortex XQL: JSON Object Manipulation

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Page 1 — Sources of JSON Fields and Variables

### Sources of JSON Fields and Variables

There are two sources for JSON (JavaScript Object Notation) objects in XQL queries: JSON fields in digested datasets (collected logs) and JSON-type variables explicitly created in XQL queries.

#### JSON Fields in Digested Datasets

Digested datasets can have JSON fields. For example, XDR_DATA has many JSON fields including action_file, device_info, agent_interface_map, http_data, login_data. For example, the following query retrieves agent_interface_map that is not null:

```xql
dataset = xdr_data
| filter agent_interface_map != null
| fields agent_interface_map
```

*[Screenshot: XDR_DATA Schema viewer showing "Found 61 out of 821 results" with TYPE filter active. Visible JSON fields: ssl_data (json, IS ARRAY: yes), http_data (json, IS ARRAY: yes), login_data (json, IS ARRAY: no), action_location (json, IS ARRAY: no), dst_action_location (json, IS ARRAY: no), action_as_data (json, IS ARRAY: no), dst_action_as_data (json, IS ARRAY: no). Below: "Expanded View" dialog with JSON VIEW / TREE VIEW tabs.]*

#### JSON Type Variables Created in XQL Queries

Some XQL functions can also return JSON type variables. These functions are object_create(), json_extract(), and to_json_string(). For example, object_create() can create a JSON object and return its reference, as given in the example:

```xql
alter jsonObj1 = object_create("user", "SAR", "pass", "MER")
```

Before XDR_DATA JSON fields can be used as JSON type variables in XQL, they must be converted using to_json_string().

```xql
| alter map = to_json_string(agent_interface_map)
| alter ip2 = json_extract_scalar(map, "$[0].ipv4[1]")
```

---

## Page 2 — JSON Data Types

### JSON Data Types

JSON is a file format consisting of all serializable, human readable attribute-value pairs. The amount of metadata is minimized, making it popular for data transmission.

#### JSON Attributes

JSON attributes can be of the following data types: null, number, string, Boolean, JSON object, and an array of other types. JSON provides a way to organize and represent data in a hierarchical and readable format.

#### Colors and Commas

An attribute is separated from its value by a colon (:), for example, `"attr1":value1"` — Commas separate two attribute-value pairs.

#### Curly Braces

When a collection of comma-separated attribute-value pairs is enclosed in curly braces ({}), it is called an object or JSON object, such as `{"attr1":value1, attr2:value2}`. An object can also be the value of another attribute, such as `"attr3":{"attr1":value1, attr2:value2}`.

#### Square Brackets

The array elements are separated by a comma and enclosed in square brackets ([ ]).

### JSON Data Type Example

The graphic is an example of a JSON data type. The "lastName" is a string type attribute, "phones" is an array type whose elements are of type JSON object, and "children" is also an array with string values. In this example, "spouse" is a string type with "null." In JSON, "spouse" can also have a direct null value, such as "spouse": null. In the current version of XSIAM, importing a JSON file with a null type will generate an error. That's why "null" is preferred over null.

*[Screenshot: JSON Data Type Example — annotated JSON object with green callout boxes.]*

```json
"root": [
  {
    "firstName": "Priam",
    "lastName": "Atlas",
    "isAlive": true,
    "age": 54,
    "address": {
      "street": "Republic Street",
      "city": "Halikarnas",
      "postalCode": "57215"
    },
    "phones": [
      { "type": "home",
        "number": "212-314 5677"},
      { "type": "office",
        "number": "216-512 2113"}
    ],
    "children": [
      "Jasmine", "Electra", "Helenus"
    ],
    "spouse": "null"
  }
]
```

Callout annotations:
- `"lastName"` → **"lastName" is a string value.**
- `"phones"` array (orange box) → **"phones" is an object array.**
- `"children"` array (orange box) → **"children" is a string array.**

---

## Page 3 — Methods to Access JSON in XQL

### Methods to Access JSON in XQL

In XQL, you can access JSON objects using one of two alternative methods: specialized XQL functions for JSON processing and native XQL syntax in syntactic sugar format.

Click the tabs for more information about how you can access JSON in XQL.

### JSON Processing Functions

The main operation in accessing a JSON object in XQL is to extract certain parts of the object. Relevant parts can be of type string, array, or an inner JSON object. XQL provides JSON extract functions for each type, json_extract_scalar(), json_extract_array(), and json_extract() respectively. As for other functions, object_create() creates a JSON object in XQL, and to_json_string() converts its parameter to a JSON object.

| Function |
|---|
| `json_extract_scalar()` |
| `json_extract_array()` |
| `json_extract()` |
| `object_create()` |
| `to_json_string()` |

### Syntactic Sugar Format

The "syntactic sugar" notation in XQL provides alternative methods to JSON extract functions for accessing parts of JSON objects. There are three syntactic sugar notations, one for each type of JSON part accessed: string, array, and object types. Let jsonObj be a variable (or, equivalently, a field) in XQL and jsonPath be the path to an element of jsonObj. Then, the sugar format is created by binding the variable and path using "->" like jsonObj->jsonPath.

A JSON path is an expression that uniquely identifies a particular element of a JSON object. It encodes the transition from the root element to the desired element of the JSON object. An analogy would be breadcrumbs for individual menu items in menu structures.

A JSON path can address a scalar value, an array, or an embedded JSON object. A scalar value can be a type number, string, Boolean, or null. You add brackets to the end of the syntactical sugar format to indicate the type of element the path points to. Square brackets ([ ]) are used for JSON arrays, while curly braces ({ }) are for JSON objects. Scalar does not need such brackets. The three formats are listed as follows:

| Format | Meaning |
|---|---|
| `jsonObj -> jsonScalarPath` | Access a scalar value |
| `jsonObj -> jsonArrayPath[]` | Access a JSON array |
| `jsonObj -> jsonObjPath{}` | Access a JSON object |

The "->" characters are called the "arrow operator" in C++. They are used to access a member of a compound object by address.

### JSONPath

JSONPath is a set of expressions defining paths to JSON objects' elements. JSONPath is a language with a defined grammar and is very similar to XPath of XML.

#### JSONPath Notations

JSONPath offers two different types of notation: dot notation with the dot operator (.) and bracket notation with square brackets ([ ]). For both notations, the root element (also called the root node) is denoted by a dollar sign ($). Then, the remainder of the path to the target element is formed by adding the dot or bracket operator to the root node along with the element names between the root node and the targeted node.

---

## Page 4 — JSONPath Notations and XQL JSON Extraction

### Dot Notation

A path is created in dot (.) notation by separating the element names with a dot (.) starting from the root element denoted by $. The basic syntax is `$.parentElement.element...childElement`; for example, `$.address.city` and `$.phones[1].number`. In the second case, `$.phones` is of array type.

The dot-notation path examples presented here are based on the JSON object in the graphic. The node named "root" is the reference point for the relative paths. In other words, "$" is considered to point to the body of the "root" node. Click the image to enlarge it.

*[Diagram: Dot notation path diagram. A nested JSON tree is shown with the following annotated paths and their target values:*
- *`$` (the path to the root node) → root object*
- *`$.A` → scalar node with the value "10"*
- *`$.B` (a composite node with an embedded JSON node) → nested object*
- *`$.B.C` → scalar node with the value "20"*
- *`$.B.D` (a composite node with a JSON array node) → array node*
- *`$.B.D[1].E` → scalar node with the value 40*
- *`$.B.F[2]` → scalar node with the value 70]*

### Bracket Notation

In brackets ([ ']) notation, a path is created by enclosing the element names in square brackets starting from the root element $. Element names are quoted in the brackets. There is no symbol used to separate two consecutive square brackets.

The basic syntax is: `$['parentElement']['element']...['childElement']`. Some examples include `$['event']['data']['id']` and `$['event'][1]['data']['id']`.

The bracket-notation path example is based on the same JSON object presented in the Dot Notation section. The paths here point to the same elements as in the previous example, but now the paths are in expressions formed by the bracket notation. Click the image to enlarge it.

*[Diagram: Bracket notation path diagram (same JSON structure as dot notation). Annotated paths:*
- *`$` (the path to the root node)*
- *`$['A']` → scalar node with the value "10"*
- *`$['B']` (a composite node with an embedded JSON node)*
- *`$['B']['C']` → scalar node with the value "20"*
- *`$['B']['D']` (a composite node with a JSON array node)*
- *`$['B']['D'][1]['E']` → scalar node with the value 40*
- *`$['B']['F'][2]` → scalar node with the value 70]*

---

### XQL JSON Extraction

XQL supports JSONPath notations in JSON extract functions. The query has multiple alter stages, each with a call to json_extract_scalar(). Variables with names starting with the same letter must have matching values when executing the query.

#### Notations in XQL Query

These variable pairs are set by the json_extract_scalar function, whose first and second parameters are the same with one difference: The first parameter is identical in all cases. In contrast, the second parameter is given first by the dot notation and next by the bracket notation, but both notations point to the same element. For example, in these lines, $.A and $['A'] refer to the same element, so variables a1 and a2 must have the same value when the query is run:

```xql
| alter a1 = json_extract_scalar(root, "$.A")
| alter a2 = json_extract_scalar(root, "$['A']")
```

*[Screenshot: Full XQL query with dataset = 392 and these alter lines (dot notation annotated in green, bracket notation in green):*
```xql
dataset = 392
| alter a1 = json_extract_scalar(root, "$.A")
| alter a2 = json_extract_scalar(root, "$['A']")
| alter c1 = json_extract_scalar(root, "$.B.C")
| alter c2 = json_extract_scalar(root, "$['B']['C']")
| alter e1 = json_extract_scalar(root, "$.B.D[1].E")
| alter e2 = json_extract_scalar(root, "$['B']['D'][1]['E']")
| alter f1 = json_extract_scalar(root, "$.B.F[2]")
| alter f2 = json_extract_scalar(root, "$['B']['F'][2]")
```
*Results table shows: A1=10, A2=10 (orange "Same values" callout), C1=20, C2=10[low-confidence: partially obscured], E1=40[low-confidence: partially obscured], E2=40, F1=70, F2=70.]*

JSON paths are case-sensitive. For example, "$.A" differs from "$.a".

---

## Page 5 — JSON Extraction Functions and Syntactic Sugar Format

### JSON Extraction Functions

JSON extraction functions extract specific data or values from a JSON object. They provide a convenient way to access JSON structures based on specific criteria or paths.

#### Extraction Functions

XQL provides three JSON extraction functions, one for each element type of a JSON object. The three JSON extraction functions are:

| Icon | Type | Signature |
|---|---|---|
| `</>` | **Scalar** | `json_extract_scalar(jsonObj, jsonScalarPath)` returning string |
| `</>` | **Array** | `json_extract_array(jsonObj, jsonArrayPath)` returning array of strings |
| `</>` | **JSON Object** | `json_extract(jsonObj, jsonObjPath)` returning JSON object |

#### Extraction Parameters

There are two JSON extraction function parameters. Click the tabs for more information about the two parameters.

##### First Parameter

*(accordion collapsed — label: "First Parameter")*

##### Second Parameter

*(accordion collapsed — label: "Second Parameter")*

---

### Syntactic Sugar Format

Syntactic sugar is a shorthand notation that simplifies accessing and manipulating JSON objects. The syntactic sugar format allows for easier and more concise handling of array elements within XQL queries.

#### Referencing JSON Objects

XQL provides a syntactic sugar format for natively accessing JSON objects as part of the language syntax. Let jsonObj and jsonPath be a JSON type variable and a string literal for the path, respectively. Then, XQL considers jsonObj->jsonPath as another variable referencing the inner element of jsonObj.

In C-like languages, the characters "->" together are called the arrow operator, which references child elements of a compound object.

In sugar format, the jsonPath's use is relative to the root element. The $ is dropped from the beginning of the path. This is logical because jsonObj in jsonObj->jsonPath already points to the root element. Note that only JSONPath with dot notation is supported, and not JSONPath with bracket notation.

---

## Page 6 — Extracting Scalar Values and Extracting Arrays

### Extracting Scalar Values

Extracting scalar values involves isolating desired values from complex datasets by parsing, filtering, or accessing specific keys. Extracting scalar values helps retrieve individual values for analysis or manipulation.

#### Isolating Desired Values

Extracting scalar values includes identifying and isolating the desired scalar values from complex data structures like arrays, objects, or JSON.

**Query and Results Table**

To access scalar JSON elements, use json_extract_scalar() with scalar JSON paths as the second parameter. The JSON element json_extract_scalar() always returns a string type.

```xql
| alter c1 = json_extract_scalar(root, "$.B.C")
| alter e1 = json_extract_scalar(root, "$.B.D[1].E")
| alter f1 = json_extract_scalar(root, "$.B.F[2]")
```

Results Table:

| C1 | E1 | F1 |
|---|---|---|
| 20 | 40 | 70 |

**JSON Sample**

```json
"root":
{
    "A": "10",
    "B":
    {
        "C": "20",
        "D":
        [
            {"E": 30},
            {"E": 40}
        ],
        "F": [50, 60, 70]
    }
}
```

*Orange-box annotations: `"C"` key (target of $.B.C → 20), `{"E": 40}` element (target of $.B.D[1].E → 40), `70` element (target of $.B.F[2] → 70).*

---

### Extracting Arrays

Extracting arrays allows you to retrieve specific elements or values from arrays within your data. You can extract the necessary information from the array by specifying the index or condition.

#### JSON Extract Array

Use the json_extract_array() function to access JSON elements that are arrays of some scalar type. The second parameter should be a JSON array path. The function returns an XQL array with string values.

The example is based on the JSON object introduced in the previous section. The $.B.F is a JSON path pointing to an array of integers. Next, f1arr is an XQL array you can work with using arrayindex().

```xql
| alter f1arr = json_extract_array(root, "$.B.F")
| alter f1 = arrayindex(f1arr, 2)
```

Results Table:

| F1ARR | F1 |
|---|---|
| 50 + 2 More | 70 |

---

## Page 7 — JSON Extract Array with JSON Extract Scalar; Extracting JSON Child Objects

### JSON Extract Array with JSON Extract Scalar

In this example, the $.B.D JSON array requires more processing because the elements of this JSON array are not scalars. Instead, array elements are JSON objects of smaller size. More extraction is required by json_extract_scalar to reach a scalar value, here $.E:

```xql
| alter arr1 = json_extract_array(root, "$.B.D")
| alter json1 = arrayindex(arr1, 1)
| alter scalar1 = json_extract_scalar(json1, "$.E")
```

Results Table:

| ARR1 | JSON1 | SCALAR1 |
|---|---|---|
| [{"E": 30}, {"E": 40}] | "E": 40 | 40 |
| (Show more) | (Show more) | |

*[JSON Sample — same structure as page 6. Orange box highlights the "D" array containing `{"E": 30}` and `{"E": 40}`.]*

---

### Extracting JSON Child Objects

JSON child objects are nested within other objects, forming a hierarchical structure. XQL allows you to query data from JSON child objects to retrieve specific nested data within a JSON structure.

#### Access Child JSON Elements

Use the json_extract() function to access child JSON elements, which are JSON elements of smaller sizes. In this example, the second parameter is a JSON object path. The function returns an XQL variable of type JSON. Next, using the XQL json_extract_scalar() function, you can retrieve the scalar values contained within the child object.

```xql
| alter bObj = json_extract(root, "$.B")
| alter e2 = json_extract_scalar(bObj, "$.D[1].E")
```

This above example involves two JSON extract functions given only to explain the json_extract(). In practice, you would use json_extract_scalar() directly to get the scalar value.

```xql
| alter e1 = json_extract_scalar(root, "$.B.D[1].E")
```

The variables E1 and E2 in the table are the same as expected from the data type.

#### Avoiding JSON Extract with JSON Array Paths

Avoid using json_extract with JSON array paths. The XQL engine can still run such queries, but extracted values are not useful.

```xql
| alter d1 = json_extract(root, "$.B.D")
| alter f1 = json_extract(root, "$.B.F")
```

Results Table:

| D1 | F1 |
|---|---|
| [{"E":30},{"E":40}] | [50,60,70] |

---

## Page 8 — Syntactic Sugar Format (continued); Syntactic Sugar Format for Scalars

### Syntactic Sugar Format

Syntactic sugar is a shorthand notation that simplifies accessing and manipulating JSON objects. The syntactic sugar format allows for easier and more concise handling of array elements within XQL queries.

#### Referencing JSON Objects

XQL provides a syntactic sugar format for natively accessing JSON objects as part of the language syntax. Let jsonObj and jsonPath be a JSON type variable and a string literal for the path, respectively. Then, XQL considers jsonObj->jsonPath as another variable referencing the inner element of jsonObj.

In C-like languages, the characters "->" together are called the arrow operator, which references child elements of a compound object.

In sugar format, the jsonPath's use is relative to the root element. The $ is dropped from the beginning of the path. This is logical because jsonObj in jsonObj->jsonPath already points to the root element. Note that only JSONPath with dot notation is supported, and not JSONPath with bracket notation.

#### Referencing a Child Element

The example shows two equivalent ways to refer to the child element A. For a simple comparison, root->A = json_extract_scalar(root,"$.A"). Note how the parameters of json_extract_scalar() for the sugar format reference.

*[Diagram: Equivalence box showing:*
- *Left (orange box): `root->A`*
- *`=`*
- *Right (orange box): `json_extract_scalar(root, "$.A")`*
- *Label: "Equivalent" (above arrow), "Note the conversion" (below)]*

---

### Syntactic Sugar Format for Scalars

XQL can use Syntactic Sugar Format to reference scalars in JSON objects. This format specifies the JSON variable/field and path to child element, without the $ root element symbol.

#### Referencing Scalars

The XQL sugar format for referencing scalars in JSON objects is jsonObj->jsonScalarPath.

**Referencing Child Element**

In this example, jsonObj is the variable or field of type JSON, and jsonScalarPath is the path string to the child element. The jsonScalarPath reference does not contain the $ root element symbol. You can compare the two methods of referencing the child element $.A syntactically.

**Referenced Values**

Notice how briefly you can refer to each child element using the sugar notation. Referencing a variable using jsonObj->jsonScalarPath is equivalent to calling the function `json_extract_scalar(jsonObj, jsonScalarPath)`.

```xql
| alter a1 = json_extract_scalar(root, "$.A")
| alter a2 = root->A
| alter c1 = root->B.C
| alter e1 = root->B.D[1].E
| alter f1 = root->B.F[2]
```

XQL Results Table:

| A1 | A2 | C1 | E1 | F1 |
|---|---|---|---|---|
| 10 | 10 | 20 | 40 | 70 |

*[JSON Sample — same structure with orange boxes highlighting: `"A"` key, `"C"` key, second `{"E": 40}` element, and `70` in the F array.]*

---

## Page 9 — Syntactic Sugar Format for Arrays

### Syntactic Sugar Format for Arrays

XQL sugar format simplifies referencing a particular array element within JSON objects using square brackets and a numerical index.

#### Referencing Arrays

The XQL sugar format for referencing arrays in JSON objects is jsonObj->jsonArrayPath[]. The format is: jsonObj->jsonArrayPath[].

**Referencing Child Object**

In this example, jsonObj is a variable or field of JSON type, and jsonArrayPath is the path string to a child element without $. The square brackets ([ ]) at the end of the path string are necessary to indicate that the path is an array path.

**Referenced Values**

Referencing a variable using jsonObj->jsonArrayPath[] is equivalent to calling the function json_extract_array(jsonObj, jsonArrayPath).

```xql
| alter f1Arr = root->B.F[]
| alter f1 = arrayindex(f1Arr, 1)
| alter f2 = root->B.F[1]
```

XQL Results Table:

| F1ARR | F1 | F2 |
|---|---|---|
| 50 + 2 More | 60 | 60 |

*[JSON Sample — same structure. Orange box highlights `"F": [50, 60, 70]` array.]*

---

## Page 10 — Syntactic Sugar Format for JSON Objects

### Syntactic Sugar Format for JSON Objects

The XQL sugar format for referencing child JSON objects is jsonObj->jsonObjPath{}. Here, jsonObj is a variable or field of JSON type and jsonObjPath is the path string to a child element without $. Note that the curly brackets ({ }) at the end of the path string are necessary to indicate that the path is of (JSON) object type. Referencing a variable using jsonObj->jsonScalarPath is equivalent to calling the function `json_extract(jsonObj, jsonObjPath)`.

#### Examples Query

In the first-row example, the first alter stage uses the sugar format to assign the object named B to a JSON variable named b1Obj. In the second step, b1Obj is used in another sugar format to access the scalar E. Note that the same task can be achieved in a single line, as shown in the second row.

```xql
| alter b1Obj = root->B{}
| alter e1 = b1Obj->D[0].E
| alter e2 = root->B.D[0].E
```

XQL Results Table:

| E1 | E2 |
|---|---|
| 30 | 30 |

*[JSON Sample — same structure. Orange box highlights the entire `"B"` object (C, D array with {"E":30},{"E":40}, and F:[50,60,70]).]*

#### Referencing JSON Objects

The XQL sugar format for referencing child JSON objects is jsonObj->jsonObjPath{}.

**Reference Child Object**

In this example, jsonObj is a variable or field of JSON type, and jsonObjPath is the path string to a child element without $. The curly brackets ({ }) at the end of the path string are necessary to indicate that the path is of (JSON) object path.

**Reference Values**

Referencing a variable using jsonObj->jsonScalarPath is equivalent to calling the function `json_extract(jsonObj, jsonObjPath)`.

```xql
| alter b1Obj = root->B{}
| alter e1 = b1Obj->D[0].E
| alter e2 = root->B.D[0].E
```

XQL Results Table:

| E1 | E2 |
|---|---|
| 30 | 30 |

*[JSON Sample — orange box highlights the entire "B" child object.]*

---

## Page 11 — Knowledge Check

### Knowledge Check

**Q1. What would be a valid expression addressing the value 30 for the given JSON object?**

`{ "root": { "B": { "D": [{"E": 30}, {"E": 40] } } }`

- `root->B.D[0].E` ✅
- `root->B.D.E.[0]`
- `root.B.D.E.[0]`
- `root.B.D.E[0]`

- **Correct: `root->B.D[0].E`**

---

**Q2. Which two would be valid expressions addressing the element D for the given JSON object? (Choose two.)**

`{ "root": { "B": { "D": [{"E": 30}, {"E": 40] } } }`

- `json_extract_array(root, "$.B.D")` ✅
- `root.B.D{}`
- `json_extract_array(root, "$.B.D{}")`
- `root->B.D[]` ✅

- **Correct: `json_extract_array(root, "$.B.D")` and `root->B.D[]`**
