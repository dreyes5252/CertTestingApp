# Cortex Cloud Features: Graph Search

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Core Capabilities and Benefits

An organization's security data is often fragmented across various systems like unified inventory, case management, and issue trackers, making a holistic view of the security landscape challenging. Cortex Cloud Graph Search provides a single, intuitive platform to visualize the full-stack security posture and simplify risk management. The graph helps users prioritize remediation efforts, such as fixing vulnerabilities on internet-exposed virtual machines (VM).

The Graph Search's main purpose is to simplify a complex security environment enabling security teams to:

- **Trace Attack Paths** — It allows security analysts to efficiently follow the potential propagation of an attack across interconnected systems, from core infrastructure to cloud and network environments.
- **Identify Hidden Risks** — By visualizing relationships between assets and findings, it uncovers toxic combinations or indirect risks that might otherwise remain hidden in traditional, siloed views (e.g., using inventory lists, case management systems, or issue trackers).
- **Perform Threat Hunting** — It empowers security teams to proactively search for vulnerabilities, misconfigurations, and malicious activities by exploring relationships in a flexible, continuous, and expansive manner.
- **Enhance Operational Efficiency** — By simplifying complex visualizations, it enables quicker, more informed decision-making, leading to a stronger security posture and improved operational efficiency.

---

## Key Components of the Graph

The Graph Search feature visualizes your security environment as a network of interconnected elements.

The primary components are:

| Component | Description |
|-----------|-------------|
| **Nodes** | These are the fundamental entities within the graph. Each node represents a specific asset or a security finding. |
| **Relationships** | These are the links or connections between nodes. In graph-based systems, relationships are also defined as edges. They define how different assets and findings interact or are associated with each other. For example, a relationship might indicate that a virtual machine hosts a container image, or that a service account can be impersonated by an identity. |
| **Query Builder** | This is the interactive user interface where you construct your graph queries. It allows you to specify what nodes you are looking for, apply filters, and define the relationships you want to explore. |

---

## Single Normalized Data Model

One of the most significant advantages of Cortex Cloud Graph Search is its foundation on a single, normalized data model.

This unified approach simplifies complex multi-cloud environments, allowing security teams to focus on relationships and risks rather than data normalization challenges. This means:

- **Cloud Agnostic** — It doesn't matter if your infrastructure runs on Amazon Web Services (AWS), Google Cloud Platform (GCP), or Azure. The Graph Search feature abstracts away the underlying cloud provider specifics.
- **Data Source Agnostic** — Regardless of where your security data is ingested from, the system normalizes it into a consistent format.
- **Unified Visualization** — Users see assets and security findings visualized in a uniform format, regardless of their origin. This eliminates the need to understand different data schemas or contexts for various cloud environments, providing a truly unified security view.

---

## Navigation to Graph Search

Since Graph Search uses the same logic as the Query Builder, users can easily transition to its visual exploration capabilities.

Let's walk through how to access Graph Search in Cortex Cloud:

1. Log in to your Cortex Cloud platform. Navigate to the **Investigation & Response** section.

   *[Screenshot: Cortex Cloud management console showing the Investigation & Response navigation and a graph visualization with node connections.]*

2. Select the **Query Builder**. Within the Query Builder, you will find a dedicated option or box labeled **Graph Search**.

   *[Screenshot: Query Builder page showing template options: Basic, Free text, Asset Inventory, Identify, Endpoint, Network, Cloud, Graph Search (highlighted in orange/selected), XQL. The Graph Search panel shows "Start Exploring" with a node graph centered on screen.]*

---

## Getting Started with Graph Search

Graph Search requires View and Edit Role-Based Access Control (RBAC) permissions for Query Center and the Personal Query Library, which are the same permissions required for Cortex Query Language (XQL).

### RBAC

RBAC provides a vital security layer that governs access and permissions within the platform. It ensures users can only view and interact with data and features for which they are authorized, which is essential for maintaining data security and operational integrity.

Key RBAC functions (accordion tabs):

#### Consistent Permissions
RBAC ensures that the same permissions apply consistently across all features within Cortex Cloud, meaning that if a user has access to Query Center and can execute XQL queries, they will have the same level of access when using Graph Search.

#### Data Segmentation
RBAC allows for data segmentation, ensuring that users only see data relevant to their role or responsibilities. This prevents unauthorized access to sensitive information.

#### Action Control
RBAC controls what actions a user can perform within the platform, such as viewing, creating, or editing queries, ensuring that users only have the capabilities appropriate for their role.

---

## Roles of the Key Components

Understanding the function and necessity of each core and conditional component is key to grasping how Graph Search's architecture and flexibility are designed.

### Core Components

The following are the core elements essential for all Graph Search operations:

| Component | Description |
|-----------|-------------|
| **Graph Database** | The graph database serves as the underlying technology that stores and manages all nodes and relationships. |
| **Nodes and Relationships** | These are the basic data entities and their connections that form the graph. They are the core data elements, and the relationships are meticulously mapped in the database to enable the powerful visualizations. |
| **Query Builder** | Graph Search queries are created using the built-in query interface embedded in the Query Builder. This is the essential user interface for constructing and executing queries. It acts as a translator, converting your security questions into structured queries that the graph engine can understand. The intuitive Find, Where, and That operators allow for the construction of highly complex multi-level graph queries in a user-friendly manner. |

### Conditional Components

The following components provide additional value or context, but are not essential to the core graph functionality. Their use may depend on the specific environment:

| Component | Description |
|-----------|-------------|
| **Query Library** | Graph Search contains a Query Library for saving and managing your own queries, queries shared with you, and built-in Graph Search queries provided by Palo Alto Networks. While highly beneficial for efficiency and sharing, it is not strictly necessary for core functionality. A user could build every query manually without it. |
| **Node Picker** | The Node Picker is essential for building graph queries. It's the only way to select the initial nodes for a query. |
| **Specific Node Categories** | The list of available asset and finding categories is comprehensive and remains consistent. This means the full range of options will be visible, regardless of whether a customer has those specific assets in their environment. |

---

## Building and Understanding Graph Queries

Graph Search queries are built using the Query Builder. They're composed of assets, findings, and the relationships that connect them, all represented as nodes and edges. The paths are determined by contextual data. Queries are structured to use a specific pattern and include default data objects that you define.

### Initiating a Graph Search

There are two primary methods for starting a search within the Graph Search interface. Organizations can either create a custom query from scratch using the FIND, WHERE, and THAT operators for maximum flexibility, or they can use pre-built queries from the Query Library to quickly address common security use cases.

### Tab: Custom Queries

This option provides maximum flexibility, allowing you to build queries from scratch. Every custom graph query is composed of three fundamental operators:

- **FIND**: This operator defines the initial type of asset or finding node you want to start your search with.
  - Example: `find virtual machines`
- **WHERE**: This operator helps you filter the nodes you've selected with find based on specific attributes or conditions.
  - Example: `where Internet exposed equals true`
  - (finding virtual machines that are internet-exposed)
- **THAT**: This operator defines the relationship between the current set of nodes and the next set of nodes you want to explore. It allows you to traverse the connected entities.
  - Example: `that host container images`
  - (finding container images hosted on the previously filtered virtual machines)

By chaining these operators, complex, multi-level queries can be constructed.

### Tab: Out-of-the-Box (OOTB) Queries

Cortex Cloud provides a Query Library with a collection of pre-built, out-of-the-box queries designed by Palo Alto Networks to address common security use cases and best practices.

- **Access**: Every user has access to this query library.
- **Benefits**: They offer a quick starting point for investigations, saving time and ensuring that common high-risk scenarios are easily identifiable.
- **Customization**: While pre-defined, these queries can often serve as a basis for further customization, allowing you to adapt them to your specific needs.

---

## Saving and Sharing Custom Queries

Users can save their custom-built queries in the library, fostering knowledge sharing and consistency within security teams.

To save a query to the Query Library, follow these steps:

1. Click the **Save Query** button.
2. Enter a unique **Query Name**.
3. Add a **Query Description** (Optional).
4. Add a **Label** to help find the query later. A new label can be created or an existing one can be selected (Optional).
5. Choose whether to keep the query private or **Share with others** in your tenant.
6. Click the **Save** button.

A notification appears confirming that the query was saved successfully to the library, and closes on its own after a few seconds. The Graph Search query that you added is now listed as the first entry in the Query Library.

*[Screenshot: "Save Query to Library" dialog showing fields: Query Name, Query Description, Labels (Add Label...), Share with others toggle, Cancel and Save buttons.]*

---

## Graph Search Query Results

Once the query is completed, you can search for your query results. The results displayed are dependent on your data.

### Viewing Formats

You can view the Graph Search query results in two formats:

#### Graph (Default)

Displays the paths on the graph that matched the node types and conditional attributes in the query. Each result is a full path of the matching query.

*[Screenshot: Graph Search results in graph view showing nodes: Internet → docker → Vulnerability Findings (70). Query bar shows filters: Virtual Machine | Internet Exposed = True | Right | No. Vulnerability Finding.]*

#### Table

Displays the results in a table, where each row in the table represents a different path in the graph that goes through all the matching node types and attributes as they appear in the Graph Search query. Every asset and finding table shows different default columns.

*[Screenshot: Graph Search results in table view showing tabular data with columns for each node type in the query path.]*

---

## Graph Output

Graph Search displays a list of all native types that are supported based on the nodes and conditional attributes you selected in the query. To make the graph visually intuitive, Cortex Cloud uses distinct shapes for two different types of nodes. This visual distinction helps users quickly differentiate between their infrastructure components and associated security issues.

### Tab: Asset Nodes

In the graph, each asset node is shown as a circle. The node's color and icon depend on the asset category and class types you select. Each asset category offers multiple class types. Once you select a type in the node picker dialog box and hover over it, a list of all available asset types will appear. These assets represent physical or virtual resources in the environment. A grouped node icon is displayed as a duplicate node.

*[Diagram: Two icons side by side — "Single Node" (solid dark blue circle) and "Group" (overlapping circle and half-circle in dark blue).]*

Examples of asset nodes include:
- Virtual machines (Elastic Compute Cloud (EC2) instances)
- Container images
- S3 buckets
- Identity and Access Management (IAM) roles
- Artificial Intelligence (AI) model data
- Code
- Identities

### Tab: Finding Nodes

In the graph, each finding node is shown as a diamond. The node's color and icon depend on the finding type you select. Unlike asset nodes, there's only one category type for each finding. These nodes represent security-related observations or issues detected in your environment. A grouped node icon is displayed as a duplicate node.

*[Diagram: Two diamond icons side by side — "Single Node" (solid red diamond) and "Group" (overlapping red diamonds).]*

Examples of finding nodes include:
- Vulnerabilities (e.g., Common Vulnerabilities and Exposures (CVEs), Log4Shell)
- Malware presence
- Configuration issues
- Posture findings
- Identity findings

---

## Grouped Nodes

In the resulting query, nodes are automatically grouped together to keep the graph looking cleaner and less busy. Nodes are grouped together when there are at least five nodes that meet the following conditions:

- The node isn't a root node.
- The path is identical.
- For asset nodes, the nodes have the same class and category type.
- For finding nodes, the nodes have the same category type.

---

## Interacting with Graph Search Results

Interacting with the graph results is easy. Selecting a node, or hovering over it and choosing More Info, displays additional information in a dialog box. Clicking View Details allows for a deeper look, showing more information depending on the data collected for that specific asset or finding node. Vulnerability finding nodes automatically show a breakdown of severity beneath the node.

*[Screenshot: Graph node detail dialog for an EC2 Instance showing: Asset Category: VM Instance, Provider: AWS, Cloud Region: ap-southeast-2, First Seen: Jul 25th 2022 12:12:44, Last Seen: Aug 13th 2025 13:44:05. Buttons: View Details, + More Info.]*

---

## Data Lifecycle

The journey of data within the Cortex Cloud Graph Search follows a continuous process, transforming raw security information into actionable insights.

### Graph Search Data Lifecycle

Through a four-stage lifecycle, data is ingested, mapped, queried, and ultimately presented to the user:

| Stage | Description |
|-------|-------------|
| **Data Ingestion** | The process begins with the ingestion of data from two key sources. Asset information, including details on virtual machines, containers, and identities, is continuously ingested from the Unified Inventory. Concurrently, security findings such as vulnerabilities, malware detections, and misconfigurations are ingested from the Finding Table. |
| **Graph Database Mapping** | As data is ingested, it populates the Graph Database. This is where assets and security findings become interconnected nodes, and the relationships between them are automatically identified and mapped in real-time. The resulting graphical illustration helps provide a unified and comprehensive view of complex relationships between assets, security findings, and contextual data that tie them together, which is crucial for building the visual graph. |
| **Query and Visualization** | A security analyst initiates an investigation using the Query Builder. This query is executed against the Graph Database, retrieving the relevant nodes and their relationships. The results are then presented to the user as an interactive, visual graph for analysis. |
| **Action and Iteration** | Without a clear visual representation in the form of a model, the data alone can be difficult to understand. The graph results can help better grasp the full stack of an organization's posture and the associated risks it drives, including attack paths and discovering hidden risks. These results can be used to make informed decisions in less time to improve security posture and operational efficiency. |

---

## Knowledge Checks

### Section Knowledge Checks (p. 7)

**Q1. What is the primary benefit of using a single, normalized data model in Cortex Cloud's Graph Search?**
- It allows for the use of custom, non-standard query languages.
- It simplifies investigations by making the underlying data source and cloud provider agnostic. ✅
- It eliminates the need for any security permissions or access control (RBAC).
- It ensures that the platform is only compatible with AWS and GCP.
- **Correct: It simplifies investigations by making the underlying data source and cloud provider agnostic.**

### Section Knowledge Checks (p. 8)

**Q2. In the Graph Search visualization, what is the key visual distinction between an Asset Node and a Finding Node?**
- Asset nodes are visualized as circles, while finding nodes are visualized as diamonds. ✅
- Asset nodes are animated, while finding nodes are static.
- Asset nodes are always a single color, while finding nodes are multi-colored.
- Asset nodes are represented as triangles, while finding nodes are squares.
- **Correct: Asset nodes are visualized as circles, while finding nodes are visualized as diamonds.**

**Q3. Which of the following describes a Core component of the Graph Search feature, as opposed to a Conditional component?**
- The Query Library, which provides pre-built queries
- The custom queries created and saved by a user
- The Node Picker, which is essential for building graph queries
- The Graph Database, which is essential for storing nodes and relationships ✅
- **Correct: The Graph Database, which is essential for storing nodes and relationships**
