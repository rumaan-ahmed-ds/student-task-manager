# Student Task Manager

A simple and user-friendly web application designed to help university students organize, manage, and keep track of their academic tasks.

The **Student Task Manager** was developed as a collaborative Git and GitHub project using **HTML, CSS, and JavaScript**. The project demonstrates both web development and a complete software-development workflow using version control and collaboration tools.

---

## Project Description

University students often have multiple assignments, programming tasks, projects, quizzes, and deadlines to manage. The Student Task Manager provides a simple interface where students can keep their academic tasks organized in one place.

The application allows users to create and manage tasks and provides a clean and simple interface that is easy to use.

HTML is used to create the structure of the application, CSS is used to design and style the interface, and JavaScript is used to provide interactive and dynamic functionality.

The project was also developed collaboratively using Git and GitHub. Both students worked with branches, commits, Pull Requests, Issues, code reviews, merges, merge conflicts, and Git recovery commands.

---

# Team Members

| Student   | Name            | Role                                                                         |
| --------- | --------------- | ---------------------------------------------------------------------------- |
| Student 1 | Rumaan Ahmed    | Project initialization, task form, task functionality, Git/GitHub management |
| Student 2 | Khadija Mustafa | CSS styling, interface improvements, responsive design, code review          |

---

# Features

The Student Task Manager includes the following features:

* Add new tasks
* Enter a task title
* Enter a task description
* Display tasks in an organized format
* Search for existing tasks
* Filter tasks according to their status
* Mark tasks as completed
* Delete unnecessary tasks
* Edit or update task information
* Display task status
* Dynamically update the task list using JavaScript
* Organized task cards
* User-friendly interface
* Responsive layout
* Clean and simple design
* Easy task management for university students

---

# Technologies Used

* **HTML5** – Used to create the structure of the application.
* **CSS3** – Used for styling, layout, buttons, task cards, spacing, and responsive design.
* **JavaScript** – Used to implement interactive and dynamic task management functionality.
* **Git** – Used for version control and managing project history.
* **GitHub** – Used for remote repository hosting and collaboration.

---

# Project Structure

```text
student-task-manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# Application Components

## 1. HTML

The `index.html` file provides the main structure of the application.

It contains:

* Application heading
* Welcome section
* Task input form
* Task title field
* Task description field
* Add Task button
* Search section
* Task filtering options
* Task list
* Task cards
* Task action buttons

---

## 2. CSS

The `style.css` file controls the visual appearance of the application.

It is responsible for:

* Page layout
* Colors
* Typography
* Spacing
* Buttons
* Task cards
* Form styling
* Search area
* Responsive layout
* Hover effects
* Overall user interface design

---

## 3. JavaScript

The `script.js` file provides the interactive functionality of the application.

JavaScript is used for:

* Adding tasks
* Displaying tasks
* Searching tasks
* Filtering tasks
* Marking tasks as completed
* Editing tasks
* Deleting tasks
* Updating the task list dynamically
* Handling user input
* Updating task status

---

# Git and GitHub Workflow

The project was developed using a collaborative Git and GitHub workflow.

The general workflow followed was:

```text
Working Directory
       ↓
Staging Area
       ↓
Local Repository
       ↓
GitHub Remote Repository
       ↓
Branches
       ↓
Pull Request
       ↓
Code Review
       ↓
Merge
```

Git was used locally to track changes, while GitHub was used to host the remote repository and collaborate between team members.

---

# Git Commands Used

## 1. Checking Git Installation

```bash
git --version
```

Used to check whether Git is installed on the computer.

---

## 2. Configuring Git Username

```bash
git config --global user.name "Your Name"
```

Used to configure the name that appears on Git commits.

---

## 3. Configuring Git Email

```bash
git config --global user.email "your@email.com"
```

Used to configure the email associated with Git commits.

---

## 4. Viewing Git Configuration

```bash
git config --list
```

Used to display the current Git configuration, including username and email.

---

# Repository Initialization

## 5. Initialize Git Repository

```bash
git init
```

Used to initialize a new Git repository inside the project folder.

---

## 6. Check Repository Status

```bash
git status
```

Used to check the current state of the repository and identify:

* Untracked files
* Modified files
* Staged files
* Current branch information

---

## 7. Add All Files to Staging Area

```bash
git add .
```

Used to add all new and modified files to the staging area.

---

## 8. Add a Specific File

```bash
git add index.html
```

Used to stage a specific file.

Examples:

```bash
git add style.css
```

```bash
git add script.js
```

---

## 9. Create a Commit

```bash
git commit -m "Initial project setup"
```

Used to save the staged changes into the local Git repository.

Other commits were created for different project changes and features.

---

## 10. View Commit History

```bash
git log
```

Used to view the complete commit history.

---

## 11. View Compact Commit History

```bash
git log --oneline
```

Used to display commits in a shorter and easier-to-read format.

---

# Connecting Git to GitHub

## 12. Add Remote Repository

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

Used to connect the local Git repository to the GitHub remote repository.

---

## 13. Check Remote Repository

```bash
git remote -v
```

Used to verify the URL of the GitHub remote repository.

---

## 14. Push Main Branch

```bash
git push -u origin main
```

Used to upload the local `main` branch to GitHub and establish the upstream relationship.

---

## 15. Push Later Changes

```bash
git push
```

Used to upload later committed changes to the connected remote repository.

---

# Cloning the Repository

## 16. Clone Repository

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Used by a team member to copy the GitHub repository to their local computer.

After cloning, the team member could work on the project locally.

---

# Branches

Branches were used so that team members could work on different features without directly changing the main branch.

## 17. View Local Branches

```bash
git branch
```

Used to display the available local branches.

---

## 18. Create a New Branch

```bash
git branch feature-name
```

Used to create a new branch without switching to it.

---

## 19. Switch to Another Branch

```bash
git switch feature-name
```

Used to switch from the current branch to another branch.

---

## 20. Create and Switch to a New Branch

```bash
git switch -c feature-name
```

Used to create a new branch and switch to it at the same time.

---

## 21. Alternative Branch Command

```bash
git checkout -b feature-name
```

An older but commonly used command for creating and switching to a new branch.

---

## 22. View All Local and Remote Branches

```bash
git branch -a
```

Used to display local branches as well as remote-tracking branches.

---

# Working With Remote Changes

## 23. Fetch Changes

```bash
git fetch
```

Used to download information about changes from the remote repository without automatically merging them into the current branch.

---

## 24. Pull Changes

```bash
git pull
```

Used to download and merge the latest changes from the remote repository.

---

## 25. Pull from a Specific Branch

```bash
git pull origin main
```

Used to pull the latest changes from the `main` branch of the `origin` remote.

---

# Comparing Changes

## 26. View Unstaged Changes

```bash
git diff
```

Used to compare the working directory with the staged version and view changes that have not yet been staged.

---

## 27. View Staged Changes

```bash
git diff --staged
```

Used to view changes that have already been added to the staging area but have not yet been committed.

---

# GitHub Collaboration

The project was developed collaboratively using GitHub.

The collaboration workflow included:

1. Creating the GitHub repository.
2. Adding the second student as a collaborator.
3. Cloning the repository.
4. Creating separate branches for different work.
5. Making changes to project files.
6. Checking changes using `git status`.
7. Adding changes using `git add`.
8. Creating commits using `git commit`.
9. Pushing branches to GitHub.
10. Creating Pull Requests.
11. Reviewing Pull Requests.
12. Making required changes.
13. Approving Pull Requests.
14. Merging branches.
15. Pulling the latest changes.
16. Continuing project development.

---

# Pull Requests

Pull Requests were used to propose changes from a feature branch to the main branch.

The general Pull Request workflow was:

```text
Create Feature Branch
        ↓
Make Changes
        ↓
git status
        ↓
git add .
        ↓
git commit
        ↓
git push
        ↓
Create Pull Request on GitHub
        ↓
Code Review
        ↓
Approval
        ↓
Merge Pull Request
```

Pull Requests allowed team members to review each other's work before merging changes into the main branch.

---

# GitHub Issues

GitHub Issues were used to track project tasks, improvements, and problems.

Examples included:

* CSS improvements
* Search functionality
* User interface improvements
* Feature development
* Bug fixing
* Project improvements

Issues helped organize the work and provided a way to track the progress of different tasks.

---

# Code Review

Code review was included as part of the collaborative GitHub workflow.

During code review, the team member could:

* Check the changed files
* Review the code
* Check whether the feature works correctly
* Identify errors
* Suggest improvements
* Request changes
* Approve the Pull Request

This helped improve the quality and reliability of the project.

---

# Merging Branches

After a Pull Request was reviewed and approved, the feature branch was merged into the main branch.

A branch can also be merged locally using:

```bash
git switch main
git merge feature-name
```

After merging, the updated main branch can be pushed to GitHub:

```bash
git push origin main
```

---

# Merge Conflicts

A merge conflict occurs when Git cannot automatically combine changes made to the same part of a file.

The general process for resolving a merge conflict was:

1. Run the merge or pull command.
2. Git identifies the conflicting file.
3. Open the conflicting file.
4. Locate the conflict markers.
5. Decide which changes should be kept.
6. Remove the conflict markers.
7. Save the file.
8. Stage the resolved file.

```bash
git add .
```

9. Commit the resolution.

```bash
git commit -m "Resolve merge conflict"
```

10. Push the resolved changes.

```bash
git push
```

---

# Git Recovery and Undo Commands

Git provides commands for correcting mistakes and undoing changes.

## 28. Restore an Unstaged File

```bash
git restore filename
```

Used to discard unstaged changes in a file and restore it to its last committed state.

Example:

```bash
git restore style.css
```

---

## 29. Unstage a File

```bash
git restore --staged filename
```

Used to remove a file from the staging area while keeping its changes in the working directory.

Example:

```bash
git restore --staged index.html
```

---

## 30. Reset Staged Changes

```bash
git reset
```

Used to unstage changes while keeping the changes in the working directory.

---

## 31. Move Back One Commit

```bash
git reset HEAD~1
```

Used to move the current branch back by one commit while keeping the changes available in the working directory.

Git reset commands should be used carefully because different reset options can affect committed and working changes differently.

---

# Complete Git Workflow Used in the Project

The overall workflow can be summarized as:

```text
1. Install Git
       ↓
2. Configure username and email
       ↓
3. Create project folder
       ↓
4. git init
       ↓
5. Create HTML, CSS and JavaScript files
       ↓
6. git status
       ↓
7. git add .
       ↓
8. git commit
       ↓
9. Create GitHub repository
       ↓
10. git remote add origin
       ↓
11. git remote -v
       ↓
12. git push
       ↓
13. Add collaborator
       ↓
14. Clone repository
       ↓
15. Create feature branch
       ↓
16. Make changes
       ↓
17. git add .
       ↓
18. git commit
       ↓
19. git push
       ↓
20. Create Pull Request
       ↓
21. Code Review
       ↓
22. Resolve requested changes
       ↓
23. Merge Pull Request
       ↓
24. git pull
       ↓
25. Continue development
       ↓
26. Resolve merge conflicts when required
       ↓
27. Verify final project
```

---

# Git Command Checklist

## Git Installation and Configuration

* [x] `git --version`
* [x] `git config --global user.name`
* [x] `git config --global user.email`
* [x] `git config --list`

## Repository Commands

* [x] `git init`
* [x] `git status`
* [x] `git add .`
* [x] `git add <filename>`
* [x] `git commit -m "..."`
* [x] `git log`
* [x] `git log --oneline`

## GitHub Remote Commands

* [x] `git remote add origin`
* [x] `git remote -v`
* [x] `git push`
* [x] `git push -u origin main`
* [x] `git pull`
* [x] `git pull origin main`
* [x] `git fetch`

## Branch Commands

* [x] `git branch`
* [x] `git branch <branch-name>`
* [x] `git switch <branch-name>`
* [x] `git switch -c <branch-name>`
* [x] `git checkout -b <branch-name>`
* [x] `git branch -a`

## Comparison Commands

* [x] `git diff`
* [x] `git diff --staged`

## Merge Commands

* [x] `git merge <branch-name>`
* [x] `git switch main`
* [x] Merge conflict resolution
* [x] Commit after conflict resolution
* [x] Push merged changes

## Recovery Commands

* [x] `git restore <filename>`
* [x] `git restore --staged <filename>`
* [x] `git reset`
* [x] `git reset HEAD~1`

---

# GitHub Features Used

* [x] GitHub Repository
* [x] Repository initialization
* [x] Remote repository
* [x] Collaborator invitation
* [x] Branches
* [x] Commits
* [x] Push
* [x] Pull
* [x] Fetch
* [x] Pull Requests
* [x] Code Review
* [x] Pull Request Approval
* [x] Pull Request Merge
* [x] GitHub Issues
* [x] Merge Conflict Resolution
* [x] Git recovery commands

---

# Project Development Checklist

## HTML

* [x] Created `index.html`
* [x] Added page heading
* [x] Added welcome section
* [x] Added task form
* [x] Added task title input
* [x] Added task description input
* [x] Added Add Task button
* [x] Added search section
* [x] Added task filter
* [x] Added task list
* [x] Added task cards
* [x] Added task action buttons

## CSS

* [x] Created `style.css`
* [x] Styled the page
* [x] Styled the header
* [x] Styled the task form
* [x] Styled input fields
* [x] Styled buttons
* [x] Styled task cards
* [x] Added spacing and layout
* [x] Added hover effects
* [x] Added responsive design
* [x] Improved overall interface

## JavaScript

* [x] Created `script.js`
* [x] Added task functionality
* [x] Added task creation
* [x] Added task display
* [x] Added task search
* [x] Added task filtering
* [x] Added task completion
* [x] Added task editing
* [x] Added task deletion
* [x] Added task status
* [x] Added dynamic task updates
* [x] Added user input handling

---

# Final Submission Checklist

Before submitting the project, the following items were checked:

* [x] `index.html` is present
* [x] `style.css` is present
* [x] `script.js` is present
* [x] `README.md` is present
* [x] All project files are pushed to GitHub
* [x] Application opens correctly
* [x] Add Task functionality works
* [x] Task title can be entered
* [x] Task description can be entered
* [x] Tasks are displayed correctly
* [x] Search functionality works
* [x] Filter functionality works
* [x] Complete Task functionality works
* [x] Edit functionality works
* [x] Delete functionality works
* [x] Task status is displayed
* [x] CSS styling is applied
* [x] Responsive layout has been checked
* [x] Git commit history is available
* [x] Branches were used
* [x] Collaborator was added
* [x] Pull Request was created
* [x] Code review was performed
* [x] Pull Request was merged
* [x] GitHub Issues were used
* [x] Merge conflict was resolved
* [x] Git recovery commands were practiced
* [x] Final README was updated

---

# Learning Outcomes

Through this project, the team learned and practiced:

* Basic web development using HTML, CSS, and JavaScript
* Creating an interactive web application
* Using Git for version control
* Creating and managing repositories
* Tracking changes using Git
* Creating meaningful commits
* Working with branches
* Connecting a local repository with GitHub
* Pushing and pulling changes
* Fetching remote changes
* Collaborating through GitHub
* Creating and reviewing Pull Requests
* Creating and managing Issues
* Resolving merge conflicts
* Using Git recovery commands
* Maintaining project documentation using Markdown

---

# Conclusion

The **Student Task Manager** combines web development with practical Git and GitHub collaboration.

The project demonstrates how HTML, CSS, and JavaScript can be used to create an interactive student-focused application while Git and GitHub can be used to manage versions, collaborate with another developer, review code, track issues, work with branches, create Pull Requests, resolve conflicts, and maintain a project repository.

Through this project, the team practiced both **software development** and a complete **version-control workflow**.

---

# Project Status

**Status:** Completed

**Project Type:** Collaborative University Project

**Frontend:** HTML5, CSS3, JavaScript

**Version Control:** Git

**Repository Hosting:** GitHub

**Team Size:** 2 Students
