# Cortex: Cortex Infrastructure and Access Management

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Cortex Instance Requirements

A Cortex instance requires infrastructure services that must be bound to specific regions.

A Cortex instance requires cloud-based included and optional Cortex infrastructure services from Palo Alto Networks.

**Note:** The following instances are cloud-based:

**WildFire**
WildFire is an included service that provides threat intelligence in the form of real-time threat analysis for unknown files and ready-to-use models for known files.

**Cloud Identity Engine (CIE)**
CIE is also an optional service, which provides identity information to Cortex by pulling organizations' directory information.

### Service Capabilities

Some services require activation, while others do not. For example, WildFire instances are not created directly; instead the available WildFire instance in your region is shared. However, custom instances of CIE service can be created. WildFire and CIE do not require any licenses. Instances of the infrastructure services must be paired with the associated Cortex instance, and this pairing is sometimes automated. For example, the WildFire service is automatically integrated with new Cortex instances.

Cortex is a regional, cloud-based product; a Cortex instance and instances of its infrastructure services must be bound to the same specific region. The regional cloud architecture ensures that all Cortex-related data collected from users of a specific region remain in that region. WildFire ﬁle uploads remain in the region where a Cortex instance is activated. When a new install region for Cortex is announced, a regional WildFire could not yet readily be available.

**Note:** A Cortex instance activation requires selecting an installation region. Refer to the Cortex product documentation for a complete list of supported regions.

*[Screenshot: Cortex management console UI showing instance settings panel with orange configuration elements.]*

---

## Managing Cortex Infrastructure Services

Cortex infrastructure services can be managed using several tools such as Customer Support Portal (CSP), Cortex Gateway, and the Palo Alto Networks Hub.

The Cortex Gateway and CSP are used to manage most infrastructure services. Managing includes tasks such as creating new service instances, assigning roles to CSP users per instance, and accessing the instances. Click the image to enlarge it.

The Palo Alto Networks Hub is the user interface for the hub is primarily used to manage the CIE cloud service.

Access to the hub requires CSP user credentials. The hub's home page displays any applications and services authorized for the logged-in CSP user. The CSP username and default CSP account name are displayed in the top right of the hub page. You can switch to any of the applications and services on another authorized CSP account. Click the image to enlarge it.

*[Screenshot: Cortex Gateway management UI showing instance list, left navigation.]*

*[Screenshot: Palo Alto Networks Hub UI with application tiles and user account view.]*

---

## Cloud Identity Engine

CIE, formerly known as Directory Sync Service, is a cloud service for read-only access to an on-premises directory information of organizations. The directory can be Azure Active Directory (AD). The service is used by a Cortex instance to access identity data.

This service provides AD domain objects to the Cortex instance to easily construct policy rules with criteria made up of the domain objects. A Cortex instance pairs with a single CIE instance, which can connect to multiple AD domains.

A CIE deployment consists of two components: a cloud-based CIE instance and on-premises Windows agents connected to domain controllers. The Windows instances periodically push a full snapshot of all the attributes for the objects, such as computers, groups, users, and organizational units. The agents send domain data every 4, 12, or 24 hours to the CIE instance. The frequency of the uploads is configurable from the web interface of the CIE instance.

This flow chart shows an on-premises CIE deployment. DC stands for Domain Controller. A single CIE instance can access multiple AD domains.

*[Diagram: On-premises CIE deployment flow. Shows cloud-based CIE instance at top connected downward to on-premises Windows agents, which connect to multiple Domain Controllers (DC1, DC2, etc.) within one or more AD domains. Direction of data flow is from on-premises agents up to CIE cloud instance.]*

### Pairing with Cortex

A CIE instance and a Cortex instance are paired from the Cortex management console by navigating to **Settings > Integrations > Cloud Identity Engine**. Click **Edit** or **Change** to drop-down to start a pairing. The interface shows the integration status, including confirming that DirS (Directory Sync Service) is the old name of the CIE service.

*[Screenshot: Cortex management console — Cloud Identity Engine integration panel showing pairing status and Edit/Change controls.]*

---

## Cortex Role Management

Roles are managed via Cortex Gateway or the Cortex management console. Both provide pages and actions to manage roles and permissions, but they have differences.

**Cortex Gateway**
Roles and permissions can be managed for multiple Cortex instances linked to the same CSP account.

**Cortex Management Console**
The Cortex management console allows management of roles and permissions for the current Cortex instance only.

### Cortex Roles

Palo Alto Networks provides predefined Cortex roles, such as Account Admin and Instance Administrator. The Account Admin has full privileges over CSP accounts and can activate new Cortex instances on the account. The Instance Administrator has full privileges over a particular Cortex instance already activated by an Account Admin. Custom Cortex roles can be created. This table shows a comparison of the two roles:

| Roles | Activate a new instance | Can assign roles | Full access to instance data |
|---|---|---|---|
| Account Admin | Y | Y | Y |
| Instance Administrator | N | Y | Y |

### Roles Page: New Roles

Cortex roles can be created in the Create Role page.

To create a new Cortex role, navigate to **Settings > Configurations > Access Management > Roles** and click the **+New Role** button to open the Create Role page. Then enter a role name and select **View** or **View/Edit** permissions to grant to the role. Click **Save** to finalize the action.

*[Screenshot: Create Role page in Cortex management console. Shows a form with fields for role name and role description (highlighted in orange at top), and tabs for Permissions, Allowed Tenants, and Allowed Users. Permission categories listed include: DASHBOARDS & REPORTS (Dashboards, Command Center Dashboards, Ingestion Monitoring, Reports, Cloud Security Command Center, Cloud Security Operations — with View and View/Edit columns), CASES & ISSUES, INVESTIGATION & RESPONSE, THREAT MANAGEMENT, APPS, INVENTORY, MARKETPLACE, CONFIGURATIONS, HELP, CLI TOOLS, POLICIES, CUSTOM URL, APPLICATION SECURITY. Save button shown in orange at bottom right.]*

---

## Scope-Based Access Control (SBAC)

SBAC restricts user access to the functional areas of the management console per scope.

Scope is managed using tags, representing different scoping methods available in the management console. Cortex users previously scoped by endpoint groups are now scoped by the endpoint group tags, without any changes to the scope. Some user access restrictions include:

**Endpoint Administration**
Manage only allowed endpoints.

**Action Center**
Perform and track actions only on the allowed endpoints.

**Dashboards and Reports**
Control access to agent-related widgets for allowed endpoints.

**Cases and Issues**
Control access to individual cases and issues.

### SBAC Configuration

To configure SBAC, go to **Settings > Configurations > Access Management > Users** in the management console. The ENDPOINT SCOPE for a user can be edited or removed by clicking the action icons that appear at the end of the user row when hovering the mouse over the user. This image shows how to search for a user and view their ENDPOINT SCOPE, which in this example is All Endpoints for the user Admin.

*[Screenshot: Cortex management console Users table. Shows a list of users with columns including email/username, role, endpoint scope, and last login date. One user row (Admin) is highlighted in orange, showing the endpoint scope "All Endpoints." Action icons appear at row end. A search/filter bar is visible at top right.]*

---

## Knowledge Checks

**Q1. What is the geographical deployment requirement for a Cortex instance and its associated infrastructure services?**
- They can be deployed globally with data distributed across multiple regions for redundancy.
- The infrastructure services can reside in a different region, but the Cortex instance must be centralized.
- They must be bound to the same specific region to ensure data locality. ✅
- The region is selected only for the Cortex instance, while infrastructure services are globally accessible.
- **Correct: They must be bound to the same specific region to ensure data locality.**

**Q2. How are scopes managed in Cortex SBAC?**
- Tags ✅
- Endpoints
- Groups
- Organizations
- **Correct: Tags**

**Q3. Which regional service does Cortex use to receive organizational units?**
- Active Directory
- Identity Service
- Domain Controller
- Cloud Identity Engine ✅
- **Correct: Cloud Identity Engine**

**Q4. Which of the following actions does an Instance Administrator have to configure the tenant?**
- Create new custom Cortex roles.
- Activate new Cortex instances.
- Full privileges over XDR tenant
- Assign Cortex roles to user accounts. ✅
- **Correct: Assign Cortex roles to user accounts.**

**Q5. Which management interface allows a user to manage Cortex roles and permissions for multiple Cortex instances linked to the same CSP account?**
- Cortex Management Console
- Cortex Gateway ✅
- Palo Alto Networks hub
- Customer Support Portal (CSP)
- **Correct: Cortex Gateway**
