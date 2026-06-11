# Cortex: Bring Your Own Keys (BYOK)

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## What Is Bring Your Own Keys?

BYOK enables Cortex users to utilize their own keys for encrypting tenant data at rest. This feature is particularly beneficial for organizations operating in highly regulated industries as it grants them greater control over data accessibility and encryption.

### Challenge and Solution to Key Management

**Situation:** All data in Google Cloud Platform (GCP) is automatically encrypted using Google's key management system, requiring no setup from the organization. GCP generates and manages keys that are inaccessible to anyone. However, despite the robust encryption standards provided by GCP, certain organizations require self-managed keys to align with specific compliance and security requirements.

**Challenge:** When an organization needs to import or manage keys, a technical support ticket is submitted, requiring the involvement of a DevOps team at Palo Alto Networks, resulting in a time-consuming dialog.

**Solution:** Cortex self-managed BYOK simplifies the process for organizations to securely import and manage their encryption keys via the Cortex Gateway by providing a new interface to import and rotate keys.

### BYOK Encryption Method

By default, all data is encrypted at rest using a dedicated key management system (KMS). The system provides strict key access controls and auditing and encrypts user data at rest according to AES-256 encryption standards. Due to the benefits provided by BYOK described in the next section this is the recommended method of Cortex key management.

*[Diagram: Lock icon on right side indicating BYOK encryption, with KMS managing strict access controls and AES-256 encryption standard.]*

---

## Benefits of the BYOK Solution

The BYOK solution provides several benefits to organizations using Cortex. These benefits were designed to solve challenges around security, control, and compliance.

**Maintain Greater Control:** The ability for organizations to import their own key provides greater control over data accessibility and encryption. This level of control improves an organization's confidence that their data is secure.

**Eliminate Reliance:** Organizations no longer need to rely on default cloud service providers (CSP) encryption or third-party key management systems (KMS). While CSP encryptions are effective, the sensitive KMS can be unavailable, making the data inaccessible.

**Meet Compliance Requirements:** The BYOK feature enables organizations to meet many stringent regulatory and compliance requirements through its built-in capabilities for key rotation and auditing logs.

**Minimize External Risks:** Cortex BYOK minimizes exposure to internal risks, such as downtime, breaches, and operational disruptions, by reducing dependency on external environments.

---

## Core Key Management Capabilities

BYOK capabilities were built to provide greater control, replace the need for an external KMS, and reduce external risks. In addition, BYOK includes features such as rotating keys and audit logs to enhance overall security and aid in compliance with regulations.

Click the arrows to learn more about each capability.

**Import Encryption Keys:** BYOK was designed to allow organizations to independently import their symmetric encryption keys, which encrypt and decrypt the data. This enables organizations to initiate and continue the process at their own discretion, even if they need to pause at any point.

**Rotate Keys:** If an organization, for example, has a key valid for a one-year period, they may want to re-encrypt data using a different key. In this scenario, the organization can upload or import a new key, and any new information will be encrypted with the new key. Existing data in the tenant will continue to be encrypted using the old key. This capability allows for version control of keys within the KMS.

**Auditing and Notifications:** Cortex provides detailed audit logs for all key management operations, along with email notifications for such activities.

This capability enables tenant administrators to monitor and review key management activities, helping them detect and mitigate any unauthorized access attempts.

---

## BYOK Requirements

To ensure a smooth BYOK setup, it is important to be familiar with the activation requirements beforehand.

**Availability and Licensing:** The feature is only available for new tenants and not supported for existing tenants.

Additionally, organizations must meet an eligibility requirement for the BYOK feature, which means they must have a license for the following products:
- XSIAM: All License Types
- XDR: Via a Feature Flag
- XSOAR: Via a Feature Flag

**Symmetric Encryption Key:** The organization needs to generate a 32-byte symmetric encryption key as unencoded binary data. If the key is encoded with a different length, it must be decoded and meet the specified requirements before being sent to the KMS.

**Complete Process Within Three Days:** Once the process of importing the key has been initiated, the administrator responsible for this task has a time limit of three days to complete the process. If the process is not completed within this timeframe, the entire process will need to be restarted.

---

## Architecture Overview

Understanding the architecture of BYOK will aid in comprehending the underlying workflow for importing keys. The BYOK architecture consists of two components: a dedicated KMS and a set of symmetric keys for encrypting data. This architecture enhances the overall security of the data by minimizing dependency on external factors.

**Dedicated KMS:** Cortex BYOK utilizes a dedicated KMS in the organization's GCP tenant. This means that, in multi-tenant environments, each tenant has its own KMS instance and keys, which are managed separately. Therefore, a symmetric key must be generated and imported for each tenant that is being utilized.

**Two Encryption Keys:** Cortex BYOK uses two keys to encrypt data at rest. One key is for BigQuery, and the other is for all the other services within the tenant. While a single key can be generated for both, it is a recommended security practice that two separate keys are generated for each service.

---

## Key Import Workflow

The key import workflow ensures that the key material, the data used to perform the encryption and decryption process, is securely wrapped for protection during transit. This key material can come in various forms, such as a passphrase, a randomly generated string of characters, or a cryptographic key derived from a password. It is crucial to safeguard the key material, as it is the fundamental component in ensuring the security of encrypted data.

This means that access to the wrapping key is strictly limited solely to the scope of the import job. This limitation ensures that only authorized personnel or processes can access and utilize the key material, minimizing the risk of unauthorized access or misuse. As a result, the confidentiality and integrity of the key material are better protected.

Click the arrows to view the workflow steps for importing a key. Click on the image to enlarge it.

**Step 1: Generate New Key**

In step 1, the administrator generates a new symmetric key and creates an import job that defines the target key ring and key for imported key material.

- The public key is used to wrap the key to be imported.
- The process prevents Google from unwrapping the key material outside of the scope of the import job.

*[Diagram: Cloud KMS diagram showing Admin icon → Import Job → Public Key / Private Key pair in KMS, with wrapped key (key wrapped in public key) flowing back to admin]*

---

## Managing Keys

BYOK simplifies the management of encryption keys, including crucial practices like rotating keys and disabling keys, which are vital for data security. Key rotation involves periodically replacing encryption keys to minimize the impact of compromised keys and reduce the risk of unauthorized access. Disabling keys allows an organization to immediately revoke access or mitigate the risk of compromised keys, ensuring that unauthorized individuals or systems cannot exploit them to access sensitive data. These practices significantly enhance overall security, align with compliance requirements, and effectively safeguard against unauthorized access and potential data breaches.

### Rotating Keys

Encryption keys can be rotated in the Cortex Gateway by opening the additional options menu next to the tenants, selecting **Rotate Encryption Key**, and following the BYOK setup steps.

**Resuming Key Rotation:** If the process is paused, key rotation can be resumed at any point in time by resuming in the Cortex Gateway by opening the additional options menu next to the tenant, selecting **Continue Rotation**, and following the BYOK setup steps.

**Canceling Key Rotation:** As long as the rotation hasn't been completed, the rotation process can also be canceled from the additional options menu next to the tenant.

**Verifying Key Rotation:** Key rotation completion can be verified through the audit logs.

Once the key rotation is complete, the new keys will serve as the primary encryption key for newly generated data. Existing data will remain encrypted with the previous keys.

### Deactivate Tenant

**Requirement:** Only a user with an **Account Admin** role can disable encryption keys and deactivate a tenant.

**Caution:** Disabling all encryption keys and deactivating the tenant renders the tenant inaccessible and non-operational.

Disabling the keys affects the communication with the agents, may prevent the agents from receiving updates to policies, configurations, and crucial information, and may result in loss of data.

To secure tenant data and to prevent unauthorized access, re-enabling the keys and re-activating the tenant are strictly controlled and require manual intervention by the Cortex XSIAM Customer Success team.

---

## Knowledge Checks

### Section Knowledge Checks (p. 5)

**Q. What are the two services being utilized to encrypt tenant data? (Choose two.)**
- Cortex Gateway and BigQuery
- BigQuery and Other services ✅
- Cortex Gateway and Other services
- BigQuery and CSP
- **Correct: BigQuery and Other services**

**Q. What is the requirement when importing an encryption key for BYOK?**
- Encryption keys need to have an expiration date
- 32-byte, symmetric, and unencoded key in binary format ✅
- Key generation process needs to be completed within 5 days
- 64-byte, symmetric, encoded key in binary format
- **Correct: 32-byte, symmetric, and unencoded key in binary format**

### Numbered Quiz (Questions 1–5)

**Question 1 of 5. What capabilities does BYOK have that benefits organizations in terms of compliance?**
- Simplified user interface and design
- Faster access to data
- Supports key rotation and audit logs ✅
- Allows for private access controls
- **Correct: Supports key rotation and audit logs**

**Question 2 of 5. Why is BYOK considered beneficial for organizations in regulated industries?**
- Enhances control over data encryption ✅
- Allows unlimited storage of encryption keys
- Automates the key rotations process
- Decreases the number of required security protocols
- **Correct: Enhances control over data encryption**

**Question 3 of 5. How does the architecture of BYOK reduce external risks for organizations?**
- By minimizing internal data access
- By utilizing a dedicated key management system (KMS) ✅
- Through automated system updates
- By requiring only one encryption key
- **Correct: By utilizing a dedicated key management system (KMS)**

**Question 4 of 5. What is the recommended number of symmetric keys to generate during the activation of BYOK?**
- 1
- 2 ✅
- 3
- 4
- **Correct: 2**

**Question 5 of 5. When disabling keys, which statement is true?**
- A user needs to get authorization from an Admin
- Re-enabling the keys and re-activating the tenant can be done at any time at the discretion of the organization
- Agents will continue to receive updates to policies, configurations, and crucial information
- It renders the tenant inaccessible and non-operational ✅
- **Correct: It renders the tenant inaccessible and non-operational**
