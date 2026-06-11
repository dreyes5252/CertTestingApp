# Cortex: Dashboards and Reports

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Dashboards and Reports View

The Dashboards and Reports view provides access to out-of-the-box (OOTB) and customization functionality for dashboards and reports.

Cortex comes with OOTB dashboards that are not customizable. The example shows the XSIAM Command Center. Other OOTB dashboards can be cloned and edited, or created from new.

*[Screenshot: XSIAM Command Center dashboard — dark-themed UI with the greeting "Good Morning, XDR." Left navigation shows: Dashboards & Reports > Dashboard, Reports, Dashboard Manager, Report Templates, Widget Library. Main area displays an interconnected flow diagram with nodes and metrics, including counters showing values like 10, 7, 1, 2, 0. Additional panels show "Total Ingestion," "Total Alerts," and "XDR Incidents" metric tiles.]*

---

## Customize Dashboards Manager and Create a Report Template

You can view custom and default dashboards in **Dashboards & Reports > Dashboard Manager**. You can edit, disable, duplicate, or delete dashboards from the Dashboard Manager section.

Click the arrows for more information about how you can customize the Dashboard Manager and Report Template. Click the images to enlarge them.

### Manage an Existing Dashboard

To manage an existing dashboard from Dashboard Manager, right-click the dashboard and select the desired action, such as Set as Default.

*[Screenshot: Dashboard Manager page showing a table of dashboards with columns for NAME and DESCRIPTION. Visible dashboard entries include: AI Security, API Security Management, Application Security, ASPM Command Center, Asset Inventory, Cloud Detection and Response (CDR), Cloud Security Assessments, Cloud Security Command Center, Cloud Security Operations, Cloud Vulnerability Management, Compliance Utilities, Cortex Command Center, Data Ingestion. A right-click context menu is open on one dashboard showing options: Edit, Set as default, Clone, Show more (with submenu: Clone with All Tenants, Hide dashboard, Set max with All Tenants), Delete.]*

### Create a Report Template

You can create a report template in two ways: saving an existing dashboard report as a template from the Dashboard Manager or creating a report template from scratch.

- To create a report based on a dashboard, select **Dashboards & Reports > Dashboard Manager**. Right-click the dashboard from which you want to generate a report and select **Save as report template**. Then enter a unique Report Name and an optional description of the report and click **Save**.
- To create a report template from scratch, select **Dashboards & Reports > Report Templates**. Click **+New Template** in the top right-hand corner and follow instructions.

*[Screenshot: Dashboard Manager with a dashboard selected, showing right-click Save as report template option. Adjacent panel shows the Report Template creation form with Name and Description fields and a Save button.]*

### Generate a Report

You can generate a report once a report template is created from a dashboard or from scratch. To generate a report:

1. Select **Dashboards & Reports > Report Templates**.
2. Right-click on a report and click **Generate Report**. You can either generate report to run the report on-demand, or you can edit the report template to define a schedule.
3. After your report completes, you can download it from the **Dashboard & Reports > Reports** page.

*[Screenshot: Report Templates page showing a list of templates with Name and Description columns. A right-click context menu shows options including Generate Report, Edit, Duplicate, and Delete.]*

---

## Dashboard & Reports: Widget Library

You can search for widgets, create new widgets, and edit custom widgets from XQL Search queries.

These are the steps to create a widget from an XQL query. Click the images to enlarge them.

### Step 1: Create Custom Widget

Click the plus icon (+) to start creating a custom XQL widget.

*[Screenshot: Widget Library welcome screen. Left navigation shows Dashboards & Reports section with Widget Library selected. Right panel shows "Welcome to the Widget Library" message with two buttons: "Create an XQL widget" and "Create a script widget."]*

### Step 2: Add Name and Description

Enter a widget name and an optional description, then create an XQL query. You can select an XQL Helper to view XQL search and schema examples, and generate the XQL query to display the search results.

*[Screenshot: Create Custom XQL Widget form. Fields shown: Name (required), Description (optional). XQL query builder panel below with an XQL Helper toggle (blue/active). Schema dropdown shows dataset fields including: xql_query(), xmenuments, mi, cmd_amount, config, allowlist, allowlist, default, Params. A "Preview" button is visible at bottom right.]*

### Step 3: Save Widget

Under the widget section, define how you want to visualize the results and click **Save widget**.

*[Screenshot: Create Custom XQL Widget form completed. Name field shows "Sample XQL Widget," Description shows "Brown." XQL query field shows a partially visible query beginning with `dataset = xdr_data | fields endpoint_id, project_type = page`. Visualization options shown below. "Chat" and "Preview" buttons at bottom right.]*

### Step 4: Locate Widget

After your widget has been created, you can locate the custom widget with the list of existing widgets.

*[Screenshot: Widget Library left navigation panel with search bar at top. Widget Library is selected in the nav. Widget list shows custom widgets: "Sample XQL Widget" (Created by XDR-LRE, Jul 23rd 2021), "Threat Company" (Created by PANW, Mar 8th 2021), "Threat Severity" (Created by PANW, Mar 8th 2021).]*

---

## Exporting and Importing Dashboards and Report Templates

Cortex supports exporting and importing dashboards and report templates in JSON formats. This allows you to easily transfer configurations between different environments, which can be useful for onboarding, migration, backup, and general sharing.

**Export**
Export one or multiple items by selecting **Export** from the right-click menu.

**Import**
Import JSON files by selecting **Import**. Browse and upload the JSON file.

*[Screenshot: Report Templates page. A multi-select export in progress — multiple templates are checked. Top-right shows an "Export" button (green). The page displays template names and descriptions in a table. A right-click context menu would show Export and Import options.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray bar style)

**Which is a component of the Dashboards & Reports section of Cortex?**
- Widget Library ✅
- Report Library
- Dashboard Library
- Custom Library
- **Correct: Widget Library**

**What can be used to create new widgets?**
- LEEF files
- CEF files
- XQL queries ✅
- Snort queries
- **Correct: XQL queries**

---

### Quiz Questions

**Q1. Which component can view existing reports that have been run?**
- Dashboards
- Reports ✅
- Dashboard Manager
- Reports Template
- Widget Library
- **Correct: Reports**

**Q2. Which component is where to set the default dashboard?**
- Dashboards
- Reports
- Dashboard Manager ✅
- Reports Template
- Widget Library
- **Correct: Dashboard Manager**

**Q3. Which component is used to edit custom widgets?**
- Dashboards
- Reports
- Dashboard Manager
- Reports Template
- Widget Library ✅
- **Correct: Widget Library**

**Q4. Which component contains widgets that summarize information about endpoints in graphical or table format?**
- Dashboards ✅
- Reports
- Dashboard Manager
- Reports Template
- Widget Library
- **Correct: Dashboards**

**Q5. Which component is used to edit templates?**
- Dashboards
- Reports
- Dashboard Manager
- Reports Template ✅
- Widget Library
- **Correct: Reports Template**

> **Note:** Q5 — the learner selected "Reports" (orange radio, marked **Wrong answer / Score: 0**). The correct answer per the green "Correct answer:" label is **Reports Template**.
