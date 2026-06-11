# Cortex Enterprise Multi-Tenant Operations

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Multitenancy Capabilities

Parent tenants have key capabilities with respect to their child tenants, specifically, visibility and security configuration. Visibility allows the parent tenants to view, query, and investigate security issues in their child tenants. Security configuration is the ability of the parent tenant to apply security configurations in the child tenants as needed.

## Parent to Child Visibility and Security

Note the following areas where parent tenants have visibility and can apply security configurations on child tenants.

### Parent to Child Visibility Areas

- Incidents
- Alerts
- Query Builder
- Query Center and Results
- Causality and Timeline View
- Forensics

### Parent to Child Security Configurations

- Behavioral indicator of compromise (BIOC)
- Rules and Exceptions
- Starred Alert Policies
- Alert Exclusions
- Endpoint Prevention Profiles
- Allow and Block Lists

*[Diagram: A security operations center (SOC) admin/analyst figure at top connects down to a "Parent Tenant" node. The Parent Tenant has two outward-facing capabilities labeled "Visibility" (left circle) and "Security" (right circle). Below the parent, three "Child Tenant" boxes are shown, indicating the parent can view and apply security configurations to multiple child tenants simultaneously.]*

### XDR and XSIAM Multi-Tenant Features

This course will only refer to XSIAM for describing certain processes to remain brief. However, XSIAM is interchangeable with XDR where mentioned in this course. Both products offer multitenancy capabilities.

### Child Security Configuration Flexibility

A managed security service provider (MSSP) might have specific reasons to apply security configurations on their managed child tenants. It could be to support regional or regulatory requirements or to support different industry verticals such as healthcare. They might want to specify the security strictness such as low, medium, high or relaxed versus strict.

They have the option to create a individual security configuration for each client or apply configurations at scale to multiple child tenants.

## Multitenancy Operational Benefits

MSSPs may want to investigate security issues on child tenants without having to log into the child tenant directly. XSIAM multitenancy visibility offers the benefit of being able to view information on one or more tenants from the parent. Additionally, parent tenants can apply and lock down specific security configurations across some or all of the managed child tenants.

---

## Visibility Benefits and Security Benefits

### Visibility Benefits

This example of a parent view shows how the parent tenant can filter by the child to have visibility into its incidents. Click the image to enlarge it.

*[screenshot: Parent tenant Incidents view filtered by child tenant name, showing mirrored incident list]*

### Security Benefits

This example shows a BIOC Rules view of a child that is being managed by the parent. Note the read-only mode message and the inability to make edits to the rules. Click the image to enlarge it.

*[screenshot: BIOC Rules view in child tenant showing "Managed by [Parent]" banner and read-only state with greyed-out controls]*

---

## Viewing Pairing and Security Management Status

When a pairing is first established, the five security areas have a default value of unmanaged and there are no security configurations applied to the child. To initiate security actions on your child tenant, you need to create a security configuration. Security actions are managed by configurations you create in Cortex XSIAM and then assigned to each of the child tenants. Each configuration requires its own configuration and allocation to a child tenant.

### Unmanaged Child Security Configurations

From the **Settings > Configurations > Tenant Management** view, you can determine if the five security configurations are managed or unmanaged in the child tenant. This example shows two child tenants. The child tenant in the first row is unpaired and grayed out. The child tenant in the second row is now paired and all five security configurations are unmanaged.

*[screenshot: Tenant Management table with columns: ACCOUNT NAME, PAIRING STATUS, BIOC RULES & EXCEPTIONS, STARRED ALERTS POLICIES, ALERT EXCLUSIONS, PROFILES, ALLOW/BLOCK LISTS. Row 1: SE Demo Corporation — Paired — Unmanaged | Unmanaged | Unmanaged | Unmanaged | Unmanaged. Row 2 shows an unpaired/grayed-out tenant.]*

---

## Using Multitenancy with Playbooks and Layouts

XSIAM Multitenancy is designed to allow for parent tenants to run child tenant playbooks as well as view child tenant layouts.

### Running Child Playbooks from the Parent Tenant

View this example of how a playbook from a child tenant can be run from the parent. Click the images to enlarge them.

A playbook is created by the child tenant.

*[screenshot: Child tenant Playbooks view showing a playbook tagged "Managed by SE Demo Corporation" in the task library with options for Scripts, Manual Tasks, and Playbooks; a "Create Task" button is visible.]*

From the parent tenant, we can run the child playbook on a child alert.

*[screenshot: Parent tenant Alerts view showing alert "NTLM Credential dumping via RpcPing..." with a Run Playbook dialog open; options shown include "Child Playbook" and "Child Require More" selections.]*

---

## Viewable Child Security Areas

In the Cortex XSIAM management console, the parent tenant has access to child tenant views and data. Child tenants have full control over security configurations unless explicitly set to a managed state by the parent tenant in the tenant management settings.

### Parent Viewable Areas

These are the security areas that the parent tenant can view for a child:

| Area | Area |
|---|---|
| Incidents | Alerts |
| Query Builder | Query Center |
| Causality View | Timeline View |
| Forensics | Playbooks |

### Parent/Child Mirrored Views

Child incidents and alerts are fully viewable from the parent. For example, if you open the same incident in the parent and child, you will see that it is a mirrored view except that the parent is limited in making some changes. The idea here being that the parent should have visibility into the child tenants rather than allowing changes to be made on a child from it.

### Viewing Child Incidents

This example is from the Incidents view of a parent with one child. By using the filter feature and selecting Tenant Name, you can choose one or more child tenants in order to view all the incidents for those child tenants. The parent view provides access to all child tenant incidents. Click the image to enlarge it.

*[screenshot: Parent tenant Incidents view with Tenant Name filter applied, showing 56 incidents from child tenant; a "Child View" label highlights the child tenant filter dropdown.]*

### Viewing Child Alerts

For viewing child tenant alerts, you can either use the filter or you can select a drop-down at the top of the page and choose the child tenant or tenants that you want to view the alerts for. Click the image to enlarge it.

*[screenshot: Parent tenant Alerts view with child tenant selector dropdown at top, listing multiple child tenants to filter by.]*

### Viewing Additional Child Information

Cortex XSIAM allows you to view incidents and alerts at the same depth level as the child. This example shows how the Investigate feature for Alerts is accessible from the parent tenant. Click the image to enlarge it.

*[screenshot: Parent tenant alert detail/investigation view showing the same depth of information available in the child tenant, with an "Investigate" button visible.]*

---

## Viewing Child Causality and Timeline Views

XSIAM provides additional depths of visibility into client alerts and incidents. For example, you can even drill down into the child tenant's causality chain and timeline views to investigate potential threats. It also provides an URL option that copies a direct link to the view which can be added to tickets or other tracking applications. Click the image to enlarge it.

*[screenshot: Child tenant causality chain view accessible from parent, showing process tree with nodes and connections. A callout bubble reads "Option to copy the URL of the causality chain."]*

## Viewing Child Forensics

If the child tenants are licensed for forensics, the parent tenant will be able to see them. This example shows a forensic test in process and is viewable from the parent tenant. Click the image to enlarge it.

*[screenshot: Forensic Test view labeled "xfir / 3 Tenants" showing test results table with columns NAME, STATUS, TOTAL, STATUS bar, ITEMS, and LAST MODIFIED. Two rows visible: "Onboarded EDR" with 60 items and "Avast Test" with 2000 items.]*

---

## Child Control on Unmanaged Areas

The child tenant has full control for unmanaged areas. This example shows the BIOC Rules and Exception field is set to unmanaged in the parent tenant. In the child tenant, the + Add BIOC button is enabled and the child tenant user can make whatever changes they want to make to the BIOC Rules for this tenant. Click the image to enlarge it.

*[screenshot: Two-panel view. Top panel (Child View): BIOC Rules screen with "+ Add BIOC" button active/enabled. Bottom panel (Parent View): Tenant Management table showing "xsiam-mssp-demo-child / SE-Demo Corporation / Paired / Unmanaged" with the Unmanaged status highlighted in orange.]*

---

## Viewing Child Queries

In addition to viewing alerts and incidents views in tenant children, XSIAM Multitenancy also allows you to query data sets in the child tenants.

### Querying a Child Tenant

1. Navigate to the Query Builder.
2. Click the drop down at the top and select the checkboxes for the tenants that you want to query. You have the option to query for any combination of child tenants that you want, including all of them. Querying multiple child tenants will result in all child tenants data being stitched together in one result set.

If you run a query against multiple child tenants and you want to see the results for each child tenant, add the Tenant column to the query results and filter on the child tenant name.

*[screenshot: Query Builder view with a child tenant selector dropdown at the top. Callouts read: "Select the child tenants that you want to query on" and "Add the Tenant field to the result set if you are querying on more than one child."]*

### Scheduled Queries on Child Tenants

Scheduled queries can be run on child tenants periodically. This might be a useful ability for an MSSP as they may want to run scheduled queries against all the tenants in given intervals and have a single place to view them.

---

## Child Security Configuration Process

Determining what level of control the parent tenant asserts on the child should be part of the initial multitenancy setup and child security configurations should be evaluated on a regular basis.

### Child Security Configuration Process

View the following steps that an MSSP might follow in determining how to configure security on a child tenant:

*[Diagram: Five-step left-to-right arrow/chevron flow diagram in green:*
*1. "Determine whether child tenants need to be managed by the parent tenant."*
*2. "Review the security configuration and identify configurations that should be applied."*
*3. "Create security configurations."*
*4. "Apply security configurations to the specific area."*
*5. (Final destination circle with green checkmark) "Child Tenant Security"]*

---

## Security Configurations

There are two required steps to perform when configuring security actions on behalf of a child tenant. The first is to create an action configuration and the second is to apply it to the child tenant. Let's start with how you create security configurations.

### Creating Security Configurations

From the parent tenant, navigate to one of the security areas that can be applied to a child tenant. Click the arrows to view how to perform these actions on each area.

#### Create a New or Edit an Existing BIOC Rules and Exceptions Configuration

1. Navigate to **Detection Rules > BIOC**.
2. A side panel will show in the BIOC Rules view where you can view, edit, or create a configuration.
3. Select **+ Create New** to create a new configuration.
4. Give the configuration a name and an optional description.
5. Select **Create**.

*[screenshot: BIOC Rules side panel in parent tenant showing "+ Create New" option with name/description fields.]*

#### Modify the BIOC Rules and Exceptions Configuration

1. Locate the newly created (or existing configuration) and select it.
2. Make the specific changes to the existing rules. In this example, we are disabling one of the rules.
3. Approve the confirmation dialog.

*[screenshot: BIOC Rules configuration edit view with a rule being toggled/disabled.]*

#### Configuring Child Starred Alerts

1. Navigate to **Incident Response > Starred Alerts**.
2. As with other tenant configurations, a side panel will show.
3. Add a new configuration or modify an existing one.
4. Select **Alert Inclusions**.
5. Add, modify, or remove a starred alerts.
6. Approved the confirmation dialog.

*[screenshot: Starred Alerts configuration panel in parent tenant with Alert Inclusions section visible.]*

#### Configure Child Alert Exclusions

1. Navigate to **Settings > Exception Configurations > Alert Exclusions**.
2. As with other tenant configurations, a side panel will show.
3. Add a new configuration or modify an existing one.
4. Select **Alert Exclusions**.
5. Add, modify, or remove an alert exclusion.
6. Approve the confirmation dialog.

*[screenshot: Alert Exclusions configuration panel.]*

#### Configuring Child Endpoint Prevention Profiles

1. Navigate to **Endpoints > Policy Management > Profiles**.
2. As with other tenant configurations, a side panel will show.
3. Add a new configuration or modify an existing one.
4. Select **Prevention Profiles**.
5. Add, modify, or remove a prevention profile.
6. Approve the confirmation dialog.

*[screenshot: Prevention Profiles configuration panel.]*

#### Configure Child Allow and Block Lists

1. Navigate to **Incident Response > Response > Action Center > Block / Allow List**.
2. As with other tenant configurations, a side panel will show.
3. Add a new configuration or modify an existing one.
4. Select **Block List** or **Allow List**.
5. Add, modify, or remove a list item.
6. Approve the confirmation dialog.

*[screenshot: Block/Allow List configuration panel.]*

---

## Applying Security Configurations to Child Tenants

The next required step is to apply a previously created security configuration on the child tenant.

The following steps are to apply a security configuration on a child tenant. Click the images to enlarge them.

### Step One: Navigate to the Edit Configurations Modal

1. Navigate to **Settings > Configuration > Tenant Management**.
2. Right click on the desired child and select **Edit Configurations**.

*[screenshot: Tenant Management table with right-click context menu showing "Edit Configurations" option.]*

### Step Two: View the Security Configuration Options

The Edit Configuration modal shows the previously selected configurations for the child tenant. In this example, there are no configurations selected and so they all show unmanaged.

*[screenshot: Edit Configuration modal for a child tenant with all five security area dropdowns showing "Unmanaged."]*

### Step Three: Choose the Desired Security Configuration

1. Select the drop down for the configuration area and choose a previously created configuration. After you have selected the configurations for the desired areas, select **Update**.
2. At the Are You Sure? Prompt, select **Yes**.
3. The dot next to the tenant name will turn yellow while it is syncing with the child and will turn green when the child is synced.

*[screenshot: Edit Configuration modal with a BIOC Rules configuration selected from the dropdown; an "Are You Sure?" confirmation dialog is shown.]*

---

## Knowledge Checks

### Section Knowledge Checks (p. 8)

**Q1. True or False? Child visibility is the primary security capability of parent tenants.**
- True
- False ✅
- **Correct: False**

**Q2. What state changes in a child tenant when a security configuration becomes managed?**
- The area becomes viewable by the child.
- The area becomes unviewable by other child tenants.
- The area becomes read-only for a child. ✅
- The area comes under stricter controls.
- **Correct: The area becomes read-only for a child.**

### Numbered Quiz (Questions 1–5 of 5)

**Q1. What is the primary function of a parent tenant in the Cortex XSIAM platform?**
- To manage their own security settings
- To oversee operational functions for child tenants ✅
- To automatically activate new child tenants
- To monitor external threats to all child tenants
- **Correct: To oversee operational functions for child tenants**

**Q2. What are some of the specific security configurations that can be applied from parent tenants to child tenants?**
- IOC rules and correlations
- BIOC rules, alert policies, endpoint prevention profiles, and allow/block lists ✅
- Endpoints and endpoint groups
- Only user access controls and data encryption methods
- **Correct: BIOC rules, alert policies, endpoint prevention profiles, and allow/block lists**

**Q3. What field may be added to XQL result views when you are querying multiple child tenants to differentiate them better?**
- Tenant ✅
- Severity
- Host
- Alert Source
- **Correct: Tenant**

**Q4. How can security configurations for child tenants be managed from the parent tenants?**
- They cannot be managed from the parent tenant
- As managed or unmanaged ✅
- Using Marketplace packages
- Through playbooks and scripts on the parent
- **Correct: As managed or unmanaged**

**Q5. Which of the following child tenant areas can parent tenants view?**
- Assets
- All Endpoints
- Incidents, alerts, causality graphs, queries, and forensics ✅
- Host Inventories
- **Correct: Incidents, alerts, causality graphs, queries, and forensics**
