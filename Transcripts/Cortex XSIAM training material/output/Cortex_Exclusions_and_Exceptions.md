# Cortex: Exclusions and Exceptions

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Exceptions Configuration

To view new and existing exception rules, navigate to **Settings > Exceptions Configuration**.

You can view and create exclusions and rule suppressions as well as disable rules in a single pane.

*[Screenshot: Exceptions Configuration panel showing left navigation tabs: Issue Exclusions, IOC/BIOC Suppression Rules, Disable Injection and Prevention, Disable Prevention Rules, Support Exception Rules, Legacy Agent Exceptions. Main area shows Issue Exclusions table with columns: EXCLUSION ID, MODIFICATION TIME, NAME, DESCRIPTION.]*

---

## Issue Exclusion Rules

An issue exclusion rule is a rule to suppress issues in Cortex.

You can create issue exclusions in the Issues view by selecting **Manage Issue > Exclude Issue** in the right-click shortcut menu of an issue, or by creating an issue exclusion rule. The shortcut menu option is an individual exclusion and will not show up as a rule. It will only affect the issue which was originally right-clicked for exclusion.

*[Screenshot: Issues table showing right-click context menu with options including "Exclude Issue" highlighted.]*

---

## Cases and Excluded Issues

A case's status is affected by excluding issues associated with that case.

If 100 percent of a case's remaining issues are excluded, the case's status will automatically change to Resolved. Cortex will continue to group issues into an Auto-Resolved case for up to six hours. In the situation where an issue is triggered during this duration, Cortex will re-open the case.

Any update made to an issue impacts the associated case.

If less than 100 percent of a case's remaining issues are excluded, the case's status will not automatically change.

*[Screenshot: Cases table showing a case "Security ID-2212" with status "Resolved - Auto Resolve" and the case detail view.]*

---

## Exclude Issue Action versus Creating an Exclusion Rule

Understanding the difference between excluding an issue action and creating an exclusion rule is essential for effective issue management.

Here's a breakdown of the differences:

### Creation Process

Individual issue exclusions are used to exclude specific issues, typically accomplished via a right-click action. On the other hand, exclusion rules are broader and designed to exclude a set of related issues.

### Visibility

Exclusion rules are recorded and can be found in the Issue Exclusions table located at **Settings > Exceptions Configurations > Issue Exclusions**. In contrast, individual issue exclusions do not appear in this table.

### Use Case Example

When un-quarantining a file, an exclusion rule is created to exclude related issues, ensuring a comprehensive approach. This is different from using an individual issue exclusion action, which only targets a specific issue and does not automatically cover related issues.

---

## Exclusion Optimization

To maximize the utility and security of exclusions, it is important to establish best practices for exclusion creation and management.

The following are some essential best practices when using exclusions:

### Review Exclusions

Periodically review and assess existing exclusions to identify overly broad exclusions and inconsistencies between exclusion rules.

### Scope Exclusions

When creating exclusions, avoid overscoping to optimize threat management.

### Audit Exclusions

Audit existing exclusion collections and evaluate that your exclusion strategy aligns with your security needs.

### Consolidate Exclusions

Evaluate where and how you can consolidate overlapping exclusions or when it is appropriate to transition exclusions into correlation rules for improved threat management.

---

## Issue Exceptions versus Issue Exclusions

The differences between an exclusion and an exception are commonly confused.

### Exclusion

An exclusion silences issues from appearing in the Cortex console but the modules continue to provide protection. While the protection exists, issues are no longer generated from it. Exclusions are used to tune out noisy false positives.

### Exception

An exception disables the underlying protection entirely. Thus, issues aren't being generated because the protection is removed. Exceptions are used to prevent conflicts between Cortex and applications, leaving the endpoint vulnerable to attacks of this type.

| | |
|---|---|
| **An Exclusion silences issues.** | |
| **An Exception disables protection.** | |
| **Issue Exclusion ≠ Issue Exception** | |

---

## Exceptions Profiles

In the Cortex management console, exception profiles allow for the customization of security settings on endpoints by creating specific exceptions.

Exceptions in the Cortex management console are settings that disable certain protections. By using these exceptions, you can fine-tune security measures to resolve issues such as incompatibilities, crashes, and false positives. For instance, you might need to disable Child Process Protection for a particular process if it crashes due to compatibility issues.

There are various types of exceptions available, depending on which protection feature you want to disable, such as Process Exceptions and Support Exceptions. Exception profiles can be created for devices running Windows, macOS, and Linux, providing flexibility across different operating systems.

After creating exceptions, you can associate them with a policy rule. The image shows an exceptions profile for Windows.

---

## Exception Types

Exceptions can only disable protections, not enable them. There are various types of exceptions.

Here are a few types of exceptions:

### Process Exception

The process exception disables selected exploit and malware protection modules on a process to allow a file to run.

### Support Exception

Support exceptions are created by the Palo Alto Networks support team to temporarily address policy issues for a specific customer.

### Behavioral Threat Protection (BTP) Rule Exception

A BTP rule exception disables a specific BTP rule to allow a process to keep running.

### Local Analysis Rules Exception

A local analysis rules exception disables all the local analysis rules that are involved in creation of a specific issue.

### Advanced Analysis Exception

An advanced analysis exception can be created by the cloud-based dump analysis service after analysis of a memory dump file.

### Digital Signer Exception

A digital signer exception removes an untrusted signer from the block list to allow files signed by this signer to be able to run.

### Network Packet Inspection Engine Exception

A network packet inspection engine exception disables a network packet Inspection rule that is involved in creation of a specific issue.

### Credential Gathering Protection Rule Exception

A credential gathering protection rule exception disables a specific credential gathering protection rule across all processes.

### Anti-Webshell Protection Rule Exception

An anti-webshell protection rule exception disables a specific anti-webshell protection rule across all processes.

### Financial Malware Threat Protection Rule Exception

A financial malware threat protection rule exception disables a specific financial malware threat protection rule across all processes.

### In-Process Shellcode Protection Rule Exception

An in-process shellcode protection rule exception disables a specific in-process shellcode protection rule across all processes.

### Malicious Device Prevention

A malicious device prevention rule exception protects against connecting potentially malicious devices to the endpoint.

---

## Process Exceptions

You can create a process exception to disable selected Exploit Protection Modules (EPMs) and Malware Protection Modules (MPMs) on processes.

To create a process exception, navigate to **Settings > Exceptions Configuration > Legacy Agent Exceptions**. Then, click **Add Rule**, name the rule, select a platform, and choose **Exceptions > Process Exceptions**.

You can check the Select all box to disable all EPMs and MPMs. To disable only all the EPMs, check the Disable Injection box.

*[Screenshot: Create Legacy Exception Rule wizard — General step completed, Rule Conditions step active. Platform: Windows. Module: Process Exceptions. Target Properties — Process Name: putty.exe. Module Name dropdown showing options: Select all, AI Powered Shellcode Protection, Anti-Ransomware Protection, APC Guard, Child Process Protection, CPL Execution Protection, DEP, Digital Signer Restriction, Disable Injection.]*

---

## Support Exceptions

Support exceptions are created for a particular customer by the support team to override the default settings of protection modules.

Support exceptions are not directly created from the Cortex console. Instead, they are available as a tool for the Palo Alto Networks support team to resolve temporary amendments or to make changes to specific security settings.

Palo Alto Networks can issue support exceptions that change the default configuration of an internal module and other applied security settings. To deliver a support exception, the Palo Alto Networks support team can provide a JavaScript Object Notation (JSON) file containing the configuration changes or amendments to your security configuration.

After you receive the support exception file, you will manually import it to Cortex. You should delete or disable any exceptions you created earlier that may conflict with a support exception. Otherwise, the support exception may be shadowed by other exceptions because administrator-defined exceptions usually take precedence over support exceptions.

*[Screenshot: Import Support Exception Rules File dialog — drag and drop file area. These rules will apply to the following scope: Profiles / New Profile / Global. Cancel / Import buttons.]*

---

## Other Exception Types

Because add or create actions are not available for other exception types, these types cannot be added directly from the profile.

The following describes how exceptions are created for other alert types:

### Malware Issues

For malware issues, create exceptions directly from an issue's shortcut menu.

### Exploit Issues

For exploit issues, an advanced analysis exception is automatically created if you enable Advanced Analysis.

*[Screenshot: Exception profile panel showing IIS Protection (0) — Protection against IIS related attacks — No exceptions created. UEFI Protection (0) — Protection against UEFI manipulation attempts — No exceptions created. Dynamic Kernel Protection (0) — Protection against malicious processes running at boot time — No exceptions created.]*

---

## Advanced Analysis

Advanced analysis refers to the automated process of analyzing memory dumps in the cloud. This feature allows Cortex instances to automatically retrieve, upload, and analyze memory dumps through a cloud-based dump analysis service. The results, or verdicts, from this analysis provide crucial insights into potential threats.

Advanced analysis refers to the automated process of analyzing memory dumps in the cloud. This feature allows Cortex instances to automatically retrieve, upload, and analyze memory dumps through a cloud-based dump analysis service. The results, or verdicts, from this analysis provide crucial insights into potential threats.

### Dump Analysis Verdict

The verdict from a dump analysis can be one of three types: malware, benign, or inconclusive. Malware indicates a confirmed threat. Benign suggests that the prevention is likely a false positive. And, inconclusive requires further investigation by the research team.

If the verdict is benign, an Advanced Analysis exception is created. This exception disables the Endpoint Protection Manager (EPM) that terminated the process.

*[Diagram: XDR agent exploit prevention flow. Cloud host or other cloud component launches weaponized file → An exploitation technique is attempted → Associated app is launched → Agent injects EPMs into the (app) process → Agent terminates the process and dumps process memory.]*

---

## Configuring Advanced Analysis Settings

To utilize Advanced Analysis, you must enable the settings in two different areas. Click the images to enlarge them.

### Global Settings

Navigate to **Settings > Configurations > General > Agent Configuration**. These settings allow Cortex XDR instances to connect to the cloud-based dump analysis service.

*[Screenshot: Advanced Analysis section — Enable Cortex XDR to automatically upload alert data files for advanced analysis. Advanced Analysis increases the Cortex XDR exploit protection module accuracy. Checkbox: Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex XDR, regardless of the alert data file source. Save button.]*

### Agent Settings Profile

In this profile, you specify the size of memory dump files. Configure the automatic upload of dump files from agents to Cortex instances.

*[Screenshot: Issues Data section — Configure issue dump file collection options. Issue Data Dump File Size: Select / Use Default (Full). Automatically Upload Issue Data Dump File: Select / Use Default (Disabled).]*

---

## Creating Issue Exceptions

Efficiently managing issues is crucial for robust cybersecurity, and you can streamline this process by creating issue exceptions.

To create an issue exception, right-click on the issue and select **Manage Issue > Create Issue exception** from the shortcut menu. If you accidentally exclude an issue, simply right-click on it again and select **Manage Issue > Undo Issue exception**.

**Note:** Creating issue exceptions is only available for certain issue types. For example, you can't create an exception for WildFire Malware issues, but you can add the file to the allow list instead.

*[Screenshot: Issues table with right-click context menu showing "Create issue exception" option highlighted.]*

---

## Exception Types (from Issues Table)

Exception types are created when you perform the Create issue exception action.

### Issue Table Information

The Issues table displays the issue name, indicating which type of exception will be made. Additional information displayed includes the platform, generating issue identification (ID), rule name, and signers issue data.

*[Screenshot: Issues table with callouts indicating: "Creates an Anti-Webshell Protection Exception", "Creates a Behavioral Threat Protection Exception", "Creates a Local File Threat Examination Exception".]*

### Viewing Your Profile Exceptions

To view your profile exceptions, navigate to **Inventory > Endpoints > Policy Management > Prevention > Profiles**. In the Profiles table, locate the operating system (OS) for which you created your global or profile exception. Right-click to view or edit the exception properties.

*[Screenshot: Profile exceptions view showing Behavioral Threat Protection Rule Exception(s) — An exception disabling a specific BTP rule across all processes. Columns: PLATFORM, RULE NAME, CGI MAP, CGI PROCESS PATH, CGI COMMAND, CGI SIGNER, GENERATING ALERT. Sample rows: Windows — native_downloads — [hash] — Microsoft Corporation — [link]. Java Deserialization Exception(s) — An exception allowing specific command lines. Columns: PLATFORM, PROCESS NAME, JAVA EXECUTABLE, GENERATING ISSUE. Sample rows: Linux — java — org.apache.catalina.startup.Bootstrap — [link]. Linux — java — org.apache.catalina.startup.Bootstrap — [link].]*

---

## Issue Exception versus Exclude Issue

There are ways to distinguish between an issue exception and an excluded issue. While both actions result in the absence of a specific issue in the Issues table, their implementations differ.

### Issue Exceptions

Issue exceptions are implemented by the Cortex XDR agent. When you create an issue exception, Cortex sends a command to the agent to stop generating any issue of this type. This means the agent itself no longer produces these specific issues.

### Exclude Issue

In contrast, issue exclusions do not involve the Cortex XDR agent. The agent continues to create and send issues of this type, but Cortex disregards them in the management console. Essentially, issue exclusions filter out these issues at the management console level without stopping their generation at the agent level.

### Results of Both Actions

Both issue exceptions and excluded issue result in the same outcome: you won't see these issues in the Issues table within the management console.

---

## Global Exceptions Applications

Global exceptions are a powerful tool for managing issues and policies across all endpoints. Global exceptions unconditionally apply to all endpoints. This means that once a global exception is set, it affects every endpoint without the need for specific policy rules. These exceptions offer a way to fine-tune settings across all endpoints.

### Creating Global Exceptions

Go to **Settings > Exception Configurations** to find the **Disable Prevention Rules** menu.

*[Screenshot: Create disable prevention rules wizard — General step, Rule Conditions step, Summary step. Platform: Windows. Target Properties with Module and Capability/Capability Enabled columns.]*

### Applying Exceptions by Policy Rules

Alternatively, you can navigate to **Inventory > Endpoints > Policy Management > Prevention > Profiles** and select an Exceptions profile to apply exceptions to specific endpoints based on policy rules. These exceptions are determined by the policies assigned to those endpoints, providing more granular control.

*[Screenshot: Prevention Profiles table listing profiles with Type, TPL, ENABLED columns and endpoint counts.]*

---

## Knowledge Checks

### Section Knowledge Check (gray-bar widget, p.10)

**Q1. What is a key difference between an exclusion and an exception in Cortex?**
- Exclusions disable protection entirely, while exceptions suppress issues but maintain protection.
- Exclusions manage user roles, while exceptions manage endpoint updates.
- Exclusions configure network settings, while exceptions configure cloud storage.
- Exclusions suppress issues but maintain protection, while exceptions disable protection entirely. ✅
- **Correct: Exclusions suppress issues but maintain protection, while exceptions disable protection entirely.**

**Q2. What happens when an Advanced Analysis exception is created due to a benign verdict?**
- The Endpoint Protection Manager (EPM) that terminated the process is disabled. ✅
- The endpoint is temporarily isolated from the network.
- The file is automatically submitted for further cloud analysis.
- The user is notified and asked to confirm the exception.
- **Correct: The Endpoint Protection Manager (EPM) that terminated the process is disabled.**

**Q3. What is the purpose of the Cortex External Dynamic List (EDL) service?**
- To block harmful IP addresses and domain names ✅
- To orchestrate case response workflows across multiple tools
- To automatically quarantine infected endpoints in real-time
- To provide continuous risk scoring for all network assets
- **Correct: To block harmful IP addresses and domain names**

**Q4. What is a global exception in Cortex?**
- A user authentication configuration for security purposes
- A software version control setting for managing updates
- A rule that applies only to specific device models and configurations
- An exception that applies universally across all endpoints and agents ✅
- **Correct: An exception that applies universally across all endpoints and agents**

**Q5. How can you apply a specific exception to all Cortex instance endpoints?**
- Right-click on an issue and select "exclude issue"
- Create the exception in Global Exceptions ✅
- Right-click on an issue and select "create issue exception"
- Create the exception in a specific profile
- **Correct: Create the exception in Global Exceptions**

**Q6. Which type of exception is received in JSON files?**
- WildFire Malware Exception
- Support Exception ✅
- Global Exception
- Digital Signer Exception
- **Correct: Support Exception**

**Q7. Which management console object type is often confused with issue exceptions?**
- Issue Exemptions
- Issue Suppressions
- Issue Exclusions ✅
- Issue Expressions
- **Correct: Issue Exclusions**

### Numbered Quiz (Questions 1–5 of 5, p.11–15)

**Question 1 of 5. In which way can you create an Issue Exclusion?**
- Create a new issue rule
- Create a new exclusion rule ✅
- Right-click on an issue and select Create Issue Exception
- Right-click on a case and select Exclude Case
- **Correct: Create a new exclusion rule**

**Question 2 of 5. How do you create an issue Exception?**
- Create a new issue rule
- Create a restrictions profile
- Right-click on an issue and select Create Issue Exception ✅
- Right-click on a case and select Issue Exception
- **Correct: Right-click on an issue and select Create Issue Exception**

**Question 3 of 5. If an application on a single endpoint is crashing due to one of the Cortex XDR protection modules, which action would resolve it?**
- Create an issue Exclusion
- Create a Global Exception
- Create an Exclusion Rule in that Endpoint's Exclusion Policy
- Create an Exception Rule in that Endpoint's Exception Policy ✅
- **Correct: Create an Exception Rule in that Endpoint's Exception Policy**

**Question 4 of 5. Which option describes an Issue Exclusion?**
- Suppressing issues while maintaining protection ✅
- Suppressing issues while disabling protection
- Maintaining issues while maintaining protection
- Maintaining issues while disabling protection
- **Correct: Suppressing issues while maintaining protection**

**Question 5 of 5. Which option describes an Issue Exception?**
- Suppressing issues while maintaining protection
- Suppressing issues while disabling protection ✅
- Maintaining issues while maintaining protection
- Maintaining issues while disabling protection
- **Correct: Suppressing issues while disabling protection**
