# Cortex: Working with Lists

> Structured transcription for PAN-S-XSIAME study. Tabs/accordions flattened; UI screenshots transcribed; knowledge-check items captured with correct answers flagged from visual cues.

---

## Introduction to Lists in Cortex

A list in Cortex is a container for storing data and is mainly used in playbooks and scripts. Lists can be accessed anywhere the context button (double-curly brackets) appears. In a playbook task, you can access the data in a list via the context button under Lists or by using the path `${lists.<list_name>}`. Different types of data can be stored in a list, including text, string, numbers, Markdown, HTML, CSS, and JSON objects.

## Common List Examples

The following are common examples of when to use lists in Cortex:

**Allow and Block Lists**
Create a list of IP addresses, URLs, domains, and hashes that can be either allowed or blocked.

**Input for Scripts and Playbooks**
Use the content of a list as input for scripts and playbook tasks.

**Import External Data into Lists**
Import data such as threat feeds into a list that can then be used to identify indicators of compromise (IOCs) in an case investigation.

**Defining HTML Templates**
An HTML template can be defined as part of a communication task.

**Prioritizing Case Response**
Create lists to identify critical assets like important users or servers. This helps manage cases better by focusing on the most important things first.

## Creating a New List

Cortex provides the interface to create and manage lists. You can specify the content type and permissions when creating a list.

You can create lists in the Lists menu found at **Settings > Configurations > Object Setup > Lists**. Click the arrows for more information about creating a list. Click the images to enlarge them.

**Step One**

Navigate to **Settings > Configurations > Object Setup > Lists**, then click **+ Add a List** located at the right corner of the page.

*[Screenshot: Cortex Lists page showing the "+ Add a List" button at top right and an existing list "CIDR - Allowedlist" in the list panel.]*

**Step Two**

Enter the list name and select the content type from the drop-down menu.

*[Screenshot: Lists page with a new list name field and Content Type drop-down visible (options include: Text, Markdown, HTML, CSS, JSON).]*

**Step Three**

Enter or copy the desired list of items on the left side of the page under the list name. Then click the save icon at the top right of the page.

*[Screenshot: Lists page with sample IP addresses entered in the left panel (e.g., 192.168.4.1, 10.1.48.1) and the list name "CisEx" shown.]*

## List Page Options

To manage lists, use the following options available on the Lists page. Click the images to enlarge them.

### Add a New List, View the Version History of All Lists, or Import a List

Use the **+ Add a List** button to add a new list.

Use the page timer icon next to the **+ Add a List** button to view the version history of all lists.

Use the cloud icon at the top right of the page to import list items from a local file.

*[Screenshot: Lists page annotated with green arrows pointing to: "Add a list." (+ Add a List button), "View version history." (timer icon), "Import list item." (cloud icon). Existing list "CIDR - Allowedlist" shown.]*

### View Settings, Version History, or Edit a List

To view the settings of the list, click the **Settings** button.

To revert to a previously saved version of the selected list, click the time arrow icon.

To make changes to the content and the settings of the selected list, click **Edit**.

*[Screenshot: Lists page annotated showing "View list settings." (Settings button), "Revert to a previously saved version." (time arrow icon), "Make changes to content and settings." (Edit option).]*

### Duplicate, Download, or Delete a List

To duplicate, download, or delete the selected list, click the vertical ellipsis, and select **Duplicate**, **Download**, or **Delete**.

*[Screenshot: Lists page showing vertical ellipsis menu expanded with options: "Create a copy of the list." (Duplicate), "Download a list as a list file." (Download list), "Delete the list." (Delete).]*

## List Management Commands

You can manage lists in Cortex using various commands through the built-in CLI, automation, and playbook tasks. The CLI feature is located at the bottom of the War Rooms interface. It allows you to execute commands and scripts and has a variety of list manipulation commands.

Click the arrows for more information about performing tasks using the CLI list commands. Click the images to enlarge them.

### Create a List

Use the `createList` command to create a new list with a name and list data.

*[Screenshot: War Room CLI interface showing use of createList command.]*

### Extracting List Data

Use the `getList` command along with the `listName` argument to get the content of the specified list.

*[Screenshot: War Room CLI interface showing use of getList command.]*

### Remove List Item

Use the `removeFromList` command along with `listName` and `listData` arguments to remove an item from a list.

*[Screenshot: War Room CLI interface showing use of removeFromList command.]*

### Overwrite Existing List

Use the `setList` command along with `listName` and `listData` arguments to overwrite items to a specified list.

*[Screenshot: War Room CLI interface showing use of setList command.]*

### Add Item to a List

Use the `addToList` command to append single or multiple items to a specified list.

*[Screenshot: War Room CLI interface showing use of addToList command.]*

---

## Knowledge Checks

### Section Knowledge Checks (gray-bar submit/show feedback style)

**Q1. Lists are located in which group of settings?**
- Integrations
- System
- Advanced
- Object Setup ✅
- **Correct: Object Setup**

**Q2. Which command can you use to append an item to a list?**
- addListItem
- addItemToList
- appendToList
- addToList ✅
- **Correct: addToList**

---

### Numbered Quiz (Questions 1–5 of 5)

**Q1. Which command do you use to append a new item to a list?**
- addToList ✅
- setList
- appendList
- listAppend
- **Correct: addToList**

**Q2. What playbook option gives you the ability to create and manage lists in playbooks?**
- Scripts ✅
- Logs
- CLI
- Indicators
- **Correct: Scripts**

**Q3. With a war room page displayed, which command do you use to display the content of a specified list?**
- getList ✅
- getItems
- displayList
- getListItems
- **Correct: getList**

**Q4. Which menu option on the Lists page do you use to make changes to a list?**
- Edit ✅
- Settings
- Advanced
- Preferences
- **Correct: Edit**

**Q5. To overwrite the content of a list, which command do you use?**
- setList ✅
- getList
- addToList
- removeFromList
- **Correct: setList**
