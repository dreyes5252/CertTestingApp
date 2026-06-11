# Cortex: Console Management

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cortex Management Console

Cortex users use the Cortex management console to interact with the instance. The typical users are security operations center (SOC) operators, SOC analysts, and security engineers.

The users access the management console to perform the following tasks:

- **Investigate** — To investigate incidents and alerts, and respond to threats.
- **Manage** — To manage security on endpoints via policy and profiles.
- **Create** — To update agents and create agent installation packages.
- **View** — To view dashboards and generate reports.

---

## Accessing the Cortex Management Console

You can directly access the Cortex management console from your Cortex Gateway or by using the Fully Qualified Domain Name (FQDN) specified during the instance activation. To authenticate, enter your Customer Support Portal (CSP) username and password and ensure the appropriate Cortex application roles are assigned to you.

Palo Alto Networks sites that require authentication use single sign-on (SSO) based on Security Assertion Markup Language (SAML), which allows users to sign into various web applications based on their sessions created in another context. A SAML session is valid for eight hours. After eight hours, you are required to sign in again.

*[Screenshot: Cortex management console showing Agent Management page with Agent Status Breakdown donut chart, Top Issues (Top 10/Last 30 days), and Score Breakdown columns on the right.]*

---

## Navigation Pane

The main sections of the navigation pane are Dashboard & Reports, Incident Response, Detection Rules, Assets, and Endpoints. Click the tabs for more information about the navigation pane.

The navigation pane stays pinned on the left and can be minimized. You can jump to the default dashboard by clicking the Cortex logo on the top of the navigation pane, even when the pane is minimized.

The main sections of the navigation pane (as shown in the UI) are:

**Dashboards & Reports**
- Cases & Issues
- Investigation & Response
- Threat Management
- Posture Management
- Inventory
- Modules
- Marketplace

---

## Configuration and Session Security Settings

To configure your Cortex instance, go to **Settings > Configurations**. Cortex provides security settings that you can configure to secure the user session when signing into the Cortex management console.

*[Screenshot: Server Settings page showing left navigation with: General, Server Setup, Security Settings, Agent Configuration, Remote Repositories Settings, Notification, Cortex - Analytics, Vulnerability Assessment, Data Broker, Broker VMs, Engines, XDR Collectors: Configuration / Administration / Groups / Installers / Profiles / Policies, Data Classification: Data Policies / Data Profiles. Right panel shows Configurations drop-down. Date format shown: MMM.Dy.YYYY (hh:mm:ss). Example: Aug 4th 2023 10:00:54. Data Policies option visible.]*

### Session Expiration

You can set a session timeout for all signed-in users by selecting a time in the **User Login Expiration** drop-down menu. You can also set a different session timeout for the dashboard page using **Dashboard Expiration**.

Security Settings fields for Session Expiration:
- **Session Expiration** — Configure expiration time period
- **User Login Expiration** — 8 hours
- **Enable Auto Logout** (checkbox)
- **Dashboard Expiration** — As user login expiration (8 hours) / 7 Days

### Allowed Sessions

Allowed Sessions allows you to restrict users based on their client systems; only CSP users from approved domains and IP addresses can connect to the management console.

Security Settings fields for Allowed Sessions:
- **Allowed Sessions** — The following domains and external IPs and ranges are allowed to access the server
- **Approved User Email Domains** (user@domain.com) — Disabled (Default)
- **Approved IP Ranges** — Disabled (Default)

### User Expiration

User Expiration allows you to deactivate inactive users. After enabling the **Deactivate Inactive User** setting, you then set the deactivation period for automatic deactivation.

Security Settings fields for User Expiration:
- **User Expiration** — Disable access for users that haven't logged in for a long period of time
- **Deactivate Inactive User** — Disabled (Default)

---

## Dashboards & Reports Page

The Dashboards & Reports section provides access to out-of-the-box and customization functionality for dashboards and reports.

*[Screenshot: Cortex dashboard example showing "Asset Inventory" with charts: Assets by Class (donut, 88,176 assets), Assets by Category (donut, 88,176 assets), Assets Over Time (line chart). Lower section: Assets by Vendor, Assets by Region, Accounts by Provider — all shown as bar charts with numeric breakdowns.]*

### Main Components of Dashboards & Reports

- **Dashboard** — The dashboard contains widgets that summarize information about endpoints in graphical or table format. The selected dashboard, which was set as the default, will automatically display upon logging in to the Cortex XDR console. This can be changed in the Dashboards Manager.
- **Reports** — View existing reports that have been run in the Reports section. Reports can be set to output to email or Slack; however, these outputs are not configured by default.
- **Dashboards Manager** — Use the Dashboards Manager to set the default dashboard or custom-create new ones.
- **Reports Template** — Create new report templates or edit existing ones.
- **Widget Library** — Widget Library displays existing default widgets and custom widgets.

---

## Customize Dashboards Manager and Create a Report Template

Navigate to **Dashboards & Reports > Customize > Dashboards Manager** to view, edit, disable, duplicate, or delete dashboards.

### Manage an Existing Dashboard

To manage an existing dashboard from Dashboards Manager, right-click the dashboard and select the desired action, such as Set as default.

*[Screenshot: Dashboards Manager list of dashboards with right-click context menu visible.]*

### Create a Report Template

You can create a report template in two ways: by saving an existing dashboard report as a template from the Dashboards Manager or by creating a report template from scratch.

To create a report based on a dashboard, select **Dashboards and Reports > Dashboard Manager**. Right-click the dashboard from which you want to generate a report and select **Save as report template**. Then enter a unique Report Name and an optional description of the report and click **Save**.

*[Screenshot: Dashboards Manager with Save as report template option highlighted.]*

### Generate a Report

You can generate a report once a report template is created from a dashboard or from scratch. To generate a report:

Select **Dashboards & Reports > Customize > Reports Templates**.

Right-click on a report and click Generate Report. You can either click Generate Report to run the report on demand, or you can edit the report template to define a schedule.

After your report completes, you can download it from the **Dashboard & Reports > Reports** page.

*[Screenshot: Reports Templates list showing out-of-the-box report templates with names, descriptions, and status columns.]*

---

## Dashboard & Reports: Widget Library

You can search for widgets, create new widgets, and edit custom widgets from XQL Search queries.

Follow the below steps to create a widget from an XQL query:

### Step 1: Create Custom Widget

Click the plus (+) icon to start creating a custom XQL widget.

*[Screenshot: Widget Library landing page showing "Welcome to the Widget Library — To start please select a widget from the left pane." Two options shown: "Create an XQL widget" and "Create scalar widget."]*

### Step 2: Add Name and Description

Enter a widget name and an optional description, then create an XQL query. You can select an XQL Helper to view XQL search and schema examples. Once you create your XQL query, click **Preview** to display the search results.

*[Screenshot: Create Custom XQL Widget form with Name field ("Test 1 Mk"), Description field, XQL query editor. XQL Helper toggle visible. Timeframe: Last 1 day. Preview button shown. Results pane below with Table / Graph / Advanced tabs. XQL-QUERY-1731373 shown in results with columns: TIME, AGENT_HOSTNAME, AGENT_IP_ADDRESSES, MAC, ACTOR_EFFECTIVE_USERNAME, ACTOR_PROCESS_MAC.]*

### Step 3: Save Widget

In the widget section, define how you want to visualize the results and click **Save widget**.

### Step 4: Locate Widget

You can then locate the custom widget that appears in the list of existing widgets.

*[Screenshot: Widget Library showing "Test 1 Mk" custom widget selected, with results table showing columns: TIME, AGENT_HOSTNAME, AGENT_IP_ADDRESSES, MAC, ACTOR_EFFECTIVE_USERNAME, ACTOR_PROCESS. Multiple rows of data with timestamps around Aug 7th-9th 2021, agent names like "oh-28343", IP addresses like 192.168.x.xx, domain entries like "oh-28343\xcur".]*

---

## Tabular Format

Most pages in the Cortex management console present objects such as endpoints, issues, and policies in tabular format. The pages share a common look-and-feel that displays table-related actions such as sorting, filtering, refreshing, and exporting. Not all the pages in the management console present a list. For example, Dashboard displays summary information via widgets.

### Hovering Options

When you hover the mouse over an endpoint in the table, available action icons automatically appear at the end of the endpoint row. The graphic shows the action icons for Isolate, Live Terminal, Asset View, and View Related Incidents.

*[Screenshot: All Endpoints table with hover showing action icons at end of row.]*

### Table Actions

Use the ellipsis menu to customize a table, the refresh icon to refresh a page, and the export icon to export a table.

*[Screenshot: All Endpoints table showing ellipsis menu with table customization options.]*

### Single and Multiple Selection Options

To work with an object in the table, right-click the row containing the object to open its shortcut menu and take the desired action. Some tables allow multiple selections. Right-clicking over the selection opens a shortcut menu with actions applicable to all the objects selected. Such an action is applied to all selected objects.

*[Screenshot: All Endpoints table with multi-select highlighted and right-click context menu showing bulk actions.]*

### Filtering Capabilities

The Cortex management console provides a helpful set of filter capabilities to narrow the list of entries in a table. You can filter entries in rows in three ways:

- By column using the filter icon next to a field heading
- By building a filter query for one or more fields using the filter builder
- By pivoting from the contents of a cell (show or hide rows containing the cell value)

After applying a filter, Cortex displays the filter criteria above the results table. You can filter individual columns for specific values using the icon to the right of the column heading. You can also save a custom filter for later use, and make it shareable with other users. Cortex retains filter states across page navigation.

*[Screenshot: All Endpoints table with "Modify filter condition" tooltip visible, showing active filter applied with "Click arrows above filtering on this field. You can click the icon to change the filter setting." Columns: MANAGEMENT TYPE, AGENT VERSION, ALIAS, OPERATING SYSTEM, ENDPOINT NAME, IP ADDRESS, USERS. Sample data rows visible with Windows Server 2012 and Debian 11.0 entries, IP addresses in 192.168.x.x range.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray-bar style)

**Q. What is the primary function of the Cortex management console?**
- Offering comprehensive and scalable cloud storage solutions for secure data management
- Accessing and navigating dashboards, reports, incident responses, detection rules, asset management, and endpoint management ✅
- Hosting, deploying, and managing virtual desktop infrastructures for remote work and collaboration
- Managing the configuration, performance, and security settings of network devices and firewalls
- **Correct: Accessing and navigating dashboards, reports, incident responses, detection rules, asset management, and endpoint management**

**Q. Which tab allows you to hide or display selected columns in a management console table?**
- Settings
- Configuration
- Style
- Layout ✅
- **Correct: Layout**

### Numbered Quiz (Question N of 5)

**Q1. Which is the default landing page when opening the Cortex Management Console?**
- Cases
- Issues
- Reports
- Dashboard ✅
- **Correct: Dashboard**

**Q2. In the Session Security Settings, what does the "Allowed Sessions" feature control?**
- Sets the session timeout duration for users
- Restricts user access by IP address or domain ✅
- Automatically deactivates inactive user accounts
- Enforces multi-factor authentication for logins
- **Correct: Restricts user access by IP address or domain**

**Q3. What is one of the methods mentioned for filtering entries within a management console table?**
- Using natural language processing in the search bar.
- Pivoting from the contents of a specific data cell ✅
- Dragging and dropping columns into a filter zone
- Applying a universal filter across all console pages
- **Correct: Pivoting from the contents of a specific data cell**

**Q4. How are new custom widgets created for a dashboard in the Cortex console?**
- By importing a template from the Marketplace
- By submitting a request to Palo Alto Networks support
- By creating and saving an XQL Search query ✅
- By duplicating and editing an existing default widget
- **Correct: By creating and saving an XQL Search query**

**Q5. What console feature allows you to create a shortcut to a frequently visited page in the navigation pane?**
- Pinning the page to the top of the menu
- Using the Quick Launcher's "Go To" mode
- Creating a custom dashboard with page links
- Adding the page to the Favorites section ✅
- **Correct: Adding the page to the Favorites section**
