# Cortex: Components

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is a Cortex Instance?

A Cortex instance is created per tenant, which can be an organization, a company, or a team. The instance is created in Google Cloud Platform through instance activation. Instance activation and tenant activation refer to the same task.

### An Instance

Organizations often benefit from maintaining multiple instances. A common best practice is to create separate instances for test and production environments. Additionally, multinational companies can manage data privacy compliance by creating instances in different regions.

### Instance Activation

A Cortex instance activation requires a license in the form of a serial number. The activation is a one-time task, which can take up to an hour. During the activation, several software components are instantiated and spun up in Google Cloud Platform, such as middle-tier services and databases. Most of the components are visible only to the Cortex DevOps team, a dedicated team who can directly access those components upon request.

### Interactions

Cortex users can interact with their Cortex instances using the Cortex management console, the Cortex application programming interface (API), and external integrations.

---

## Managing A2 for Instance Access

Authentication and authorization (A2) are required to interact with Cortex instances. For example, to access the Cortex management instance, you must have a CSP user account as well as the required CSP and Cortex roles. Two cloud applications manage authentication and authorization besides providing other services and functions—Customer Support Portal and Cortex Gateway.

*[Diagram: A2 flow showing a CSP user at the top connecting to both Customer Support Portal (CSP) and Cortex Gateway in the cloud layer. The CSP manages: CSP user two-factor authentication and CSP account authorization, and connects via Single sign-on to Cortex Gateway. Cortex Gateway manages Cortex authorization. Both feed into the Cortex instance (management console). Below the cloud/on-prem boundary are Endpoints.]*

### Customer Support Portal

CSP is a Palo Alto Networks site where users can go for all support-related issues. On this portal, you can manage authentication for the CSP users as well as authorization on CSP accounts. Note the distinction between CSP user and CSP account, where the latter refers to simply a company definition.

### Cortex Gateway

The Cortex Gateway is the site to manage Cortex roles on Cortex instances. You can also activate a new instance and access your authorized instances through the gateway.

> **Info:** The Cortex Gateway can be accessed at **https://cortex-gateway.paloaltonetworks.com/**
> The Cortex management console also provides a link to access the gateway.

### Single Sign-On

Single sign-on (SSO) provides consistent authentication method for all the cloud applications, CSP, the Cortex Gateway, and the Cortex management console of an instance.

Two-factor authentication can be configured per CSP user. Authorization is handled through role-based access control (RBAC) for the CSP users and external scripts using Cortex API. For the external scripts, authentication is provided by key generation.

---

## Customer Support Portal

Palo Alto Networks customers can access the Customer Support Portal to perform all product-related tasks, such as creating a support case, registering a device, managing assets such as licenses and serial numbers, and downloading software and dynamic updates.

For example, you can view your Cortex and Strata Logging Service licenses (description, serial number, expiration date, install region, etc.) at **Products > Cloud Services**. To download the latest content update, click **Updates > Dynamic Updates** and then select **Traps**, where you can view the list of the content updates.

Locate the desired version and click its download link to get the Content Update in a zip file. Dynamic updates (or content updates in XDR context) are periodic updates that include signatures, configurations, LUA scripts, etc.

You can access the Customer Support Portal at https://support.paloaltonetworks.com using your CSP user credentials.

*[Screenshot: Customer Support Portal UI showing the main landing page with navigation options including Alerts, Actions, Technical Assistance Center/Alerts, and similar sections.]*

---

## Cortex Gateway

You can use the Cortex Gateway to manage your Cortex instances, including activating new instances, viewing and accessing authorized instances, and controlling authorization of your Cortex instances using RBAC. In RBAC, you can provide users with permissions by associating users with roles. In addition to the predefined roles, you can create new roles that can be used in all instances.

> **Info:** The Cortex Gateway can be accessed at **https://cortex-gateway.paloaltonetworks.com/**
> The Cortex management console also provides a link to access the gateway.

### Available Tenants

When you sign into Cortex Gateway using your CSP credentials, the landing page shows available tenants that you are entitled to. Recall that a tenant is an instance of Cortex. For example, the image shows two tenants (two instances) for the CSP user Admin shown on the upper right.

*[Screenshot: Cortex Gateway dark-themed UI showing "Available Tenants" with two listed instances. "CORTEX GATEWAY — The future of security operations" branding visible.]*

### Summary Information

When you hover the cursor over one of the instances, the summary information opens in a pop-up window.

*[Screenshot: Cortex Gateway showing a summary pop-up for one of the instances with fields like Tenant Name, Region, Expiration Date, Serial Number, and a tooltip "Hover the cursor over the instance to get summary data."]*

### CSP Username

You can click on your CSP username—in the upper-right corner—to change the color theme of the Cortex Gateway or to log out.

*[Screenshot: Cortex Gateway showing the upper-right corner where the CSP username is displayed, with options for theme change and logout.]*

### Permissions Management

To manage authorization for the Cortex instances through RBAC, click the **Permission Management** button next to your CSP username to go to the page.

*[Screenshot: Cortex Gateway with Permission Management button highlighted next to the CSP username.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray-bar style)

**Q. What is the primary role of the Cortex Management Console?**
- Investigating security incidents, managing policies, updating agents, and generating reports ✅
- Offering comprehensive cloud storage solutions for scalable and secure data management
- Managing the configuration and settings of network devices, including firewalls and routers
- Storing backup data securely and managing user access permissions and roles
- **Correct: Investigating security incidents, managing policies, updating agents, and generating reports**

**Q. What is the main function of the Customer Support Portal (CSP)?**
- Hosting and managing virtual desktop infrastructures for remote work environments
- Managing user authentication, authorization, support tasks, and asset management ✅
- Offering scalable and secure cloud storage solutions for data management
- Providing comprehensive endpoint protection, malware prevention, and threat detection capabilities
- **Correct: Managing user authentication, authorization, support tasks, and asset management**

**Q. Where do you activate new Cortex instances?**
- Cortex Console settings
- Palo Alto Networks Tenant Activation portal
- Cortex Gateway ✅
- Palo Alto Networks Customer Support Portal
- **Correct: Cortex Gateway**

**Q. What is the purpose of the Cortex Gateway?**
- Managing Cortex roles, instance activation, and RBAC-based authorization ✅
- Providing advanced endpoint protection, malware detection, and threat response capabilities
- Hosting, deploying, and managing virtual desktop infrastructures for enhanced remote access
- Storing and managing data backups securely while optimizing cloud storage resources
- **Correct: Managing Cortex roles, instance activation, and RBAC-based authorization**

**Q. In which communication protocol does each request occur independently, without any information about previous requests?**
- Stateless ✅
- Instantaneous
- WebSocket based
- Periodic
- **Correct: Stateless**

**Q. In which two locations is instance admin rights granted for Cortex products?**
- Palo Alto Networks Tenant Activation Portal
- Cortex Gateway ✅
- Cortex Console ✅
- Palo Alto Networks Customer Support Portal
- **Correct: Cortex Gateway and Cortex Console**

### Numbered Quiz (Question N of 5)

**Q1. Which condition is required to access a Cortex instance?**
- Several endpoints are integrated via API.
- Several endpoints are currently running agents.
- A user account has been designed as the super-user.
- Access to the Cortex Gateway has been established. ✅
- **Correct: Access to the Cortex Gateway has been established.**

**Q2. Which URL do you use to access the Cortex Gateway to view or activate your tenants?**
- https://www.paloaltonetworks.com/subdomain
- https://cortex-gateway.paloaltonetworks.com/signin/ ✅
- http://\<region\>.xdr.\<subdomain\>.paloaltonetworks.com
- https://\<"subdomain"\>.xdr.\<"region"\>.paloaltonetworks.com
- **Correct: https://cortex-gateway.paloaltonetworks.com/signin/**

**Q3. What are the three ways users can interact with their Cortex XDR instances?**
- Cortex Gateway, Customer Support Portal, and Cytool
- The management console, the API, and external integrations ✅
- Live Terminal, the Broker VM, and the local agent console
- Support tickets, direct email, and phone calls to support
- **Correct: The management console, the API, and external integrations**

**Q4. What is a primary function of the Customer Support Portal (CSP)?**
- Activate new instances and manage user roles.
- Manage support cases, licenses, and software downloads. ✅
- Investigate security incidents and alerts.
- Control endpoint policies and profiles.
- **Correct: Manage support cases, licenses, and software downloads.**

**Q5. What is the main purpose of the Cortex Gateway?**
- Activate instances and manage user roles via RBAC. ✅
- Provide a central dashboard for security alerts.
- Download dynamic updates and agent installers.
- Create and manage customer support tickets.
- **Correct: Activate instances and manage user roles via RBAC.**
