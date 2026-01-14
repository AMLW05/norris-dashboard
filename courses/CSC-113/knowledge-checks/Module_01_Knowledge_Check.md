# Module 1 Knowledge Check
## CSC-113: SAGE Foundation & GitHub Setup

**Purpose**: Formative assessment to check understanding before starting assignments
**Format**: 10 questions (mix of multiple choice, matching, short answer)
**Grading**: Not graded, but required to proceed to assignments
**Attempts**: Unlimited (encouraged to retake until 100%)
**Time**: ~15 minutes

---

## PART 1: GitHub Basics (Questions 1-4)

### Question 1: Git vs. GitHub
**Which statement best describes the difference between Git and GitHub?**

A) Git is a website; GitHub is software you install
B) Git is version control software; GitHub is a hosting platform for Git repositories
C) Git is for small projects; GitHub is for large projects
D) Git is old; GitHub is the modern replacement

**Correct Answer**: B
**Explanation**: Git is the version control system (software) that tracks changes. GitHub is a web-based platform that hosts Git repositories and adds collaboration features.

---

### Question 2: Repository Purpose
**What is a GitHub repository?**

A) A backup of your computer files
B) A project folder that tracks all changes to files over time
C) A place to store only code files
D) A social media profile for developers

**Correct Answer**: B
**Explanation**: A repository (repo) is a project folder that uses Git to track all changes to files, creating a complete history. It can contain any type of file, not just code.

---

### Question 3: Commit Definition
**What does "commit" mean in Git terminology?**

A) Uploading files to GitHub
B) Deleting old versions
C) Saving a snapshot of your project at a specific point in time
D) Sharing your project with others

**Correct Answer**: C
**Explanation**: A commit is like taking a snapshot of your project. It records what the files looked like at that moment, creating a save point you can return to later.

---

### Question 4: Branch Purpose
**Why would you create a branch in Git?**

A) To permanently delete files without affecting main
B) To work on changes in isolation before merging them into main
C) To create a backup of your repository
D) To rename your project

**Correct Answer**: B
**Explanation**: Branches let you experiment and make changes without affecting the main (production) version. Think of it as a parallel universe for your code.

---

## PART 2: Sacred Flow Workflow (Questions 5-7)

### Question 5: Sacred Flow Order
**Put these Sacred Flow steps in the correct order:**

1. Merge
2. Branch
3. Issue
4. Commit
5. Pull Request
6. Push

**Correct Order**: 3, 2, 4, 6, 5, 1
**(Issue → Branch → Commit → Push → Pull Request → Merge)**

**Explanation**: Always start with an Issue (describe what you'll do), create a Branch (isolated workspace), make Commits (save progress), Push to GitHub, create Pull Request (request review), and finally Merge (integrate changes).

---

### Question 6: When to Commit
**When should you make a commit? (Select all that apply)**

A) After completing a logical chunk of work
B) Only when everything is 100% perfect
C) Before taking a break
D) Only at the end of the entire project
E) After getting something working
F) Never - commits are automatic

**Correct Answers**: A, C, E
**Explanation**: Commit frequently when you've made progress (logical chunk, something works, before a break). Don't wait for perfection or completion. Small, frequent commits are better than rare, giant ones.

---

### Question 7: Pull Request Purpose
**What is the primary purpose of a Pull Request (PR)?**

A) To pull code from GitHub to your computer
B) To request review before merging your branch into main
C) To delete branches you don't need anymore
D) To request help from the instructor

**Correct Answer**: B
**Explanation**: A Pull Request is a formal request to merge your branch changes into the main branch. It enables code review, discussion, and quality control before integration.

---

## PART 3: AI Assistants & SAGE (Questions 8-10)

### Question 8: SAGE Meaning
**What does SAGE stand for in CSC-113?**

A) Software Analysis and GitHub Engine
B) Scholar's Adaptive Growth Engine
C) System for Automated Grade Evaluation
D) Structured AI Generation Environment

**Correct Answer**: B
**Explanation**: SAGE stands for Scholar's Adaptive Growth Engine. It's your personalized AI assistant configured with custom context to help with your learning.

---

### Question 9: Context Documents
**Why would you give an AI assistant a custom context document?**

A) To make it respond faster
B) To prevent it from answering questions
C) To tailor its responses to your specific needs and projects
D) To make it write better code automatically

**Correct Answer**: C
**Explanation**: Context documents (like your SAGE configuration) help the AI understand your goals, project details, and preferences so it can give more relevant, personalized assistance.

---

### Question 10: AI Tool Comparison
**When comparing AI tools (Claude, ChatGPT, Gemini), what should you evaluate? (Select all that apply)**

A) Response accuracy and helpfulness
B) Which one has the coolest logo
C) Understanding of your specific question
D) Only the speed of response
E) Ability to explain complex concepts clearly
F) Handling of edge cases or limitations

**Correct Answers**: A, C, E, F
**Explanation**: Evaluate AI tools based on quality (accuracy, clarity, understanding, edge cases), not superficial factors. Different tools have different strengths for different tasks.

---

## PART 4: Short Answer (Reflection Questions)

### Question 11: Commit Messages
**Write a GOOD commit message for this scenario:**
"You just created a README file for your portfolio repository. The README includes an introduction paragraph, an 'About Me' section, and a list of your course goals."

**Sample Good Answers**:
- "Add README with introduction and course goals"
- "Create portfolio README with About Me section"
- "Add initial README documentation for portfolio"

**What makes these good**:
- Start with action verb (Add, Create)
- Specific about what was done
- Concise (under 50 characters)

**Bad Examples** (and why):
- ❌ "update" (Too vague - update what?)
- ❌ "README" (Not a complete thought)
- ❌ "I added a README file to my repository for my portfolio with information about me and my course" (Too long and wordy)

---

### Question 12: Issue Description
**You're about to start the "Meet Kevin & SAGE" assignment. Write a brief issue description (2-3 sentences) that explains what you're going to work on.**

**Sample Good Answer**:
"This issue tracks Module 1 Assignment 2: Meet Kevin & SAGE. I will compare three AI tools (Claude, ChatGPT, Gemini), create my SAGE workspace with custom context, and build a prompt library with at least 5 examples."

**What makes this good**:
- Identifies the assignment clearly
- Lists specific deliverables
- Gives context (Module 1 Assignment 2)

---

### Question 13: Troubleshooting
**You tried to create a branch but got an error: "fatal: not a git repository". What does this mean and how would you fix it?**

**Correct Answer (in your own words)**:
This error means you're not inside a Git repository folder. Git doesn't know what project you're trying to work on.

**How to fix**:
1. Check your current directory: `pwd` (Mac/Linux) or `cd` (Windows)
2. Navigate to your repository folder: `cd path/to/your-repo`
3. Verify it's a Git repo: Look for `.git` folder or run `git status`
4. Try the branch command again

**Alternative**: If you haven't initialized the repository yet, run `git init` first.

---

## Answer Key (For Instructor Use)

| Question | Correct Answer | Type |
|----------|----------------|------|
| 1 | B | Multiple Choice |
| 2 | B | Multiple Choice |
| 3 | C | Multiple Choice |
| 4 | B | Multiple Choice |
| 5 | 3,2,4,6,5,1 | Ordering |
| 6 | A, C, E | Multiple Select |
| 7 | B | Multiple Choice |
| 8 | B | Multiple Choice |
| 9 | C | Multiple Choice |
| 10 | A, C, E, F | Multiple Select |
| 11 | Rubric-based | Short Answer |
| 12 | Rubric-based | Short Answer |
| 13 | Rubric-based | Short Answer |

---

## Short Answer Rubric

### Question 11 (Commit Message)
- ✅ **3 points**: Action verb + specific change + concise (< 50 chars)
- 🟡 **2 points**: Has 2 of 3 criteria
- 🟡 **1 point**: Has 1 of 3 criteria
- ❌ **0 points**: Vague or not a commit message format

### Question 12 (Issue Description)
- ✅ **3 points**: Identifies assignment + lists deliverables + gives context
- 🟡 **2 points**: Has 2 of 3 criteria
- 🟡 **1 point**: Has 1 of 3 criteria
- ❌ **0 points**: Too vague or missing key information

### Question 13 (Troubleshooting)
- ✅ **3 points**: Explains error + provides correct fix steps
- 🟡 **2 points**: Explains error OR provides fix (not both)
- 🟡 **1 point**: Partial understanding shown
- ❌ **0 points**: Incorrect explanation and/or fix

---

## Feedback Messages

### 100% (All Correct)
🎉 **Perfect Score!** You're ready to start Module 1 assignments. You clearly understand GitHub basics, Sacred Flow workflow, and AI assistant concepts.

**Next Steps**:
1. Start Assignment 1: Hello GitHub
2. Create your first issue and branch
3. Apply what you've learned about commit messages

---

### 70-99% (Mostly Correct)
✅ **Good Job!** You understand most Module 1 concepts. Review the questions you missed before starting assignments.

**Review Topics**:
- [List specific topics based on incorrect answers]

**Next Steps**:
1. Re-read the sections on [topics]
2. Retake this knowledge check if you want (optional)
3. You're cleared to start assignments

---

### Below 70% (Needs Review)
📚 **Review Recommended**: You may need to review Module 1 materials before starting assignments.

**Topics to Review**:
- [List all topics from incorrect answers]

**Recommended Actions**:
1. Re-watch: Sacred Flow video
2. Re-read: GitHub Basics documentation
3. Retake this knowledge check
4. Ask questions in Discord or office hours
5. Once you score 70%+, start assignments

---

## Implementation Notes (For Instructor)

### Canvas Setup
- **Quiz Type**: Practice Quiz (formative)
- **Attempts**: Unlimited
- **Show Correct Answers**: After submission (immediate feedback)
- **Randomize Answers**: Yes (for multiple choice)
- **One Question at a Time**: No (show all at once)
- **Required to Continue**: Yes (module prerequisite)

### Question Bank Options
**If using Canvas question bank**:
- Add 5-7 additional questions per category
- Randomize which 10 questions students see
- Ensures variety across attempts

### Time Estimate
- First attempt: 15-20 minutes
- Retake: 8-10 minutes (if needed)

### Learning Analytics
**Track**:
- Most commonly missed questions → Improve instruction on those topics
- Average attempts needed → Gauge material difficulty
- Time spent → Identify struggling students early

---

## Student Instructions

### How to Take This Knowledge Check

1. **When to take it**: After reading all Module 1 materials and watching videos, BEFORE starting assignments

2. **What it measures**: Your understanding of GitHub, Sacred Flow, and AI assistants

3. **How it's graded**: Not graded (doesn't affect your grade), but required to proceed

4. **Attempts**: You can retake as many times as you want

5. **Goal**: Understand concepts, not just memorize answers

6. **Tips**:
   - Read questions carefully
   - For short answer, write in complete sentences
   - Use course materials to check your understanding
   - Don't rush - this is for YOUR learning

---

**Ready to start? Good luck!**

**frotz → plugh**
