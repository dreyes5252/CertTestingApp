# Cortex Enterprise Multi-Tenant License Management

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is Multitenancy?

Multitenancy is a software architecture where a single instance of an application serves independent groups of users, known as tenants.

In security operations, multitenancy allows Managed Security Service Providers (MSSPs) and large enterprises to manage multiple customers or subsidiary companies from a central platform while ensuring data segregation.

This high-level diagram depicts an administrator managing child tenants from a single console, also referred to as the main tenant. An example admin function may be a security operations center analyst overseeing security incidents of all child tenants or account administrators onboarding a new child tenant, such as a subsidiary company of a large enterprise.

*[Diagram: Multitenancy hierarchy. At top: Admin icon. Below: Main Tenant (green Cortex icon). Below main tenant, three branches connecting downward to: Child Tenant, Child Tenant, Child Tenant (all shown as smaller green Cortex icons).]*

---

## Cortex Multitenancy Architecture

Cortex XDR and XSIAM have two types of tenants: main tenant and child tenant.

**Note:** This course will only refer to XSIAM for describing certain processes to remain brief. However, XSIAM is interchangeable with XDR where mentioned in this course. Both products offer multitenancy capabilities.

**Main Tenant**
The main or primary tenant acts as the central administration point for the multitenant environment. Administrators use the main tenant to access and manage child tenants, allocate licenses, configure users and roles, and monitor overall security.

**Child Tenant**
A child tenant represents an individual customer or a subdivision environment within the multitenant system. Each child tenant has its own isolated instance of Cortex XSIAM, with dedicated data storage and configurations that are not accessible from other child tenants.

---

## Benefits of Multitenancy

MSSPs and large enterprises are the two primary consumers of XSIAM's multitenancy features. These specialized users require a way to centrally respond to threats across their large and segregated organizations using a parent tenant and guarantee the data privacy of each of the child tenants.

**Data Segregation**
- Each tenant's data is completely isolated, ensuring privacy and compliance.
- No data is shared between tenants or stored on the main (parent) tenant.

**Centralized Management**
- Administrators can monitor and manage security for all tenants from a single console.
- Administrators have the option of centrally managing a pool of licenses and allocating them to child tenants.

**Flexibility and Scalability**
- Multitenancy allows for the customization of security configurations and policies for individual tenants.
- Resources can be dynamically allocated as needed, ensuring scalability as requirements change.

---

## Licensing Models

There are two types of licensing models: customer-owned licensing and central licensing. In this course, main tenant and parent tenant refer to the same thing and are used interchangeably.

**Customer-Owned**
Also known as "Co-Managed", this model is characterized by individual tenants procuring their own XSIAM licenses.

After all tenants have acquired their licenses, the pairing is manually configured between a parent tenant (typically an MSSP) and child tenants (customers of the MSSP).

**Central**
Also known as "Fully Managed", this model allows the parent service provider (typically a large enterprise) to purchase a main tenant license as well as a pool of resources for child tenants (enterprise subsidiaries).

The resource capacities include the number of child tenants, number of employees, and data ingestion capacity in gigabytes per day (GBs / day).

---

## Customer-Owned Licensing Model Example

The customer-owned licensing model is generally used by MSSP and their managed companies that have individual XSIAM licenses and contracts.

The diagram shows an example where the MSSP has purchased an XSIAM license for only the parent tenant.

Each of the managed tenants (A, B, and C) are independent companies who obtain their own XSIAM licenses and contracts. When these companies wish to be managed by the MSSP, they undergo a manual pairing process between their individually licensed XSIAM tenant and the MSSP parent tenant.

*[Diagram: Customer-Owned model hierarchy. Top: "Parent Tenant License" label → MSSP Parent Tenant (green Cortex icon). A "Manual Pairing Process" bar spans across below it. Three branches connect down to: Managed Tenant A (XSIAM License A), Managed Tenant B (XSIAM License B), Managed Tenant C (XSIAM License C). Each managed tenant has its own license box above it.]*

---

## Central Licensing Model Example

The central licensing model is generally intended for large enterprise customers who want to centrally manage security operations for their distributed and segregated subsidiary companies.

The diagram shows an example of an enterprise parent tenant with a total of 7500 full-time employees (FTE) across the three subsidiaries. The expected ingestion rate is 750 Gigabytes (GB) per day in total. This central license is purchased by the enterprise entity. Then, the account administrator of the parent tenant allocates the license pool to each of the subsidiary child tenants as necessary.

The administrator of the parent tenant in this example allocates 500 FTE and 100 GB per day licensing to "Subsidiary 1".

*[Diagram: Central Licensing model hierarchy. Top: Enterprise Parent Tenant (green Cortex icon) with label "Central Licensing: 7500 FTE, 750 GB/Day." Below: "Dynamic License Allocation" node. Three branches connect to: Subsidiary 1 (500 FTE, 100 GB/Day), Subsidiary 2 (2500 FTE, 250 GB/Day), Subsidiary 3 (4000 FTE, 400 GB/Day). All subsidiaries shown as green Cortex icons.]*

---

## Central Licensing Model Dynamic License Allocation

In an organization using the central licensing model, an administrator can manage the following aspects of their child tenants:

- Increase and decrease resource allocations for each child tenant as needed through the Cortex Gateway.
- If resources are available, new child tenants can be added to the main tenant through the Cortex Gateway.
- When a child tenant is deleted, all its data is permanently removed, and the allocated resources return to the main tenant pool.

---

## Adding a Child Tenant Using the Central Licensing Model

Child tenants can be added through the Cortex Gateway by account administrators.

**Step 1:** Navigate to the Cortex Gateway and log in as the account administrator of the parent tenant.

*[Screenshot: Cortex Gateway login/landing page — dark background with green animated rings. "CORTEX GATEWAY" text in center. "Welcome to Cortex Gateway" message with a blue "Get Started" or login button visible.]*

**Step 2:** From the display in the parent tenant listing, then click **Add Child Tenant**.

*[Screenshot: Cortex Gateway dashboard showing the parent tenant management interface. Navigation panel on left. Main area shows a tenant listing with an orange-highlighted "+ Add Child Tenant" button visible in the action bar.]*

**Step 3:** Fill out the mandatory fields marked with the red asterisks:
- **Child Tenant Name:** Name of the child.
- **Child Tenant Subdomain:** Subdomain of the public FQDN of the child tenant.
- **Assign # of Employees (0 / 1000):** Allocate a number of employees allowed for the child tenant from this pool of available employees from the central license.
- **Assign # of Gigabytes (0 / 1000):** Allocate a subset of the ingestion rate GBs / Day available from the central license.

*[Screenshot: Add Child Tenant form in Cortex Gateway — dark theme with green branding. Form fields visible for Child Tenant Name, Child Tenant Subdomain, # of Employees, # of Gigabytes. Required fields marked with red asterisks. Form uses a dark background with green/orange accent colors.]*

**Step 4 (Optional):** Review the optional Add-On fields. If any license add-ons were purchased with the multi-tenant license, they are listed here.

*[Screenshot: Add Child Tenant form Step 4 — optional add-on fields section highlighted in orange border. Additional fields for purchased add-ons displayed.]*

**Step 5:** Select an activation method under the Advanced menu. Review and agree to the terms of service, then click **Activate** to begin pairing the child tenant with the main tenant.

*[Screenshot: Child Tenant Activation confirmation panel — shows child tenant details summary with a confirmation checkbox for terms of service and an "Activate" button (green/orange).]*

---

## Knowledge Checks

**Q1. Which statement about Cortex XSIAM multitenancy is most accurate?**
- It is a software architecture that allows a child tenant to share data with another child tenant for management.
- It is a software feature that allows the main tenant to establish communication between multiple point products.
- It is a software architecture that allows a central main tenant to manage the security operations of one or more child tenants. ✅
- It is a software feature that scales the XSIAM environment horizontally to automatically account for increased workloads in a tenant.
- **Correct: It is a software architecture that allows a central main tenant to manage the security operations of one or more child tenants.**

**Q2. How is the Cortex Gateway used during the Cortex XSIAM tenant pairing process?**
- It is a webpage used to initiate the pairing process. ✅
- It is a webpage used to purchase licensing for each of the tenants.
- It is a private API endpoint address of the child tenant that is passed on to the main tenant.
- It is a public API endpoint address of the main tenant that is used by the child tenants to register under the main tenant.
- **Correct: It is a webpage used to initiate the pairing process.**

**Q3. Which statement describes a valid operation between a Cortex XSIAM main tenant and its child tenant?**
- The main tenant administrator can manage configurations such as setting user roles of the child tenants. ✅
- The main tenant administrator can provision a child tenant that is a different product from the parent tenant.
- The main tenant configures the child tenant licensing automatically by referencing the number of endpoints on the child tenant.
- The main tenant stores the data of all of its child tenants and logically separates the data to present to each of the child tenants.
- **Correct: The main tenant administrator can manage configurations such as setting user roles of the child tenants.**

> **Note:** Q3 — learner selected "The main tenant configures the child tenant licensing automatically by referencing the number of endpoints on the child tenant" (**Wrong answer / Score: 0**). The correct answer per the green "Correct answer:" label is the first option.

**Q4. What is a benefit of the central licensing model from the perspective of a large enterprise using the Cortex XSIAM multi-tenant environment?**
- It allows individual tenants of the enterprise to purchase their own XSIAM licenses.
- It offers a managed security solution for large enterprises that do not have enough expertise and resources.
- It provides a way for the enterprise administrators to dynamically allocate the central license across multiple subsidiaries. ✅
- It acts as a stepping stone for an enterprise with multiple point solutions by offering a way to purchase only the necessary pieces of XSIAM and centrally manage the other solutions.
- **Correct: It provides a way for the enterprise administrators to dynamically allocate the central license across multiple subsidiaries.**

**Q5. Which organization is most likely to purchase and manage a parent tenant of Cortex XSIAM?**
- A fast-growing startup
- A managed security service provider ✅
- A medium-sized business looking to expand their footprint
- A company that was recently targeted for a ransomware attack
- **Correct: A managed security service provider**
