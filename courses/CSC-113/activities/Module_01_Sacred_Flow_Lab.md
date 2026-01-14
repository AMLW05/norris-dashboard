# Module 1 Activity: Sacred Flow Hands-On Lab
## CSC-113: First Pull Request Workshop

**Duration**: 90 minutes (in-class lab)
**Format**: Guided practice with checkpoints
**Goal**: Execute complete Sacred Flow cycle with instructor support
**Prerequisites**: GitHub account created, laptop/computer access

---

## LEARNING OUTCOMES

By the end of this lab, you will:
- Create your first GitHub repository
- Make your first branch
- Create meaningful commits
- Open your first pull request
- Experience the complete Issue → Branch → PR → Merge workflow

---

## LAB STRUCTURE

**Timing**:
- Setup & Introduction: 10 minutes
- Guided Practice (Sacred Flow Steps 1-7): 60 minutes
- Troubleshooting & Peer Review: 15 minutes
- Reflection & Next Steps: 5 minutes

---

## PART 1: Setup & Introduction (10 minutes)

### Instructor Demo
**Drew demonstrates** (5 min):
1. Creating a repository
2. Creating an issue
3. Making a branch
4. Committing a change
5. Opening a PR

**Key Point**: "This is what professional developers do 100+ times per month. You'll practice it 50+ times this semester."

### Student Prep
**Students prepare** (5 min):
1. Open GitHub in browser
2. Have text editor ready (VS Code, Atom, or GitHub web editor)
3. Have Module 1 assignment instructions open
4. Form buddy pairs for peer support

---

## PART 2: Sacred Flow Steps (60 minutes)

### STEP 1: Create Repository (5 minutes)

**Instructions**:
1. Go to GitHub → Click "New Repository" (green button)
2. Name: `csc113-portfolio`
3. Description: "CSC-113 portfolio showcasing AI projects and learning journey"
4. Set to **Public**
5. Check "Add a README file"
6. Create repository

**✅ Checkpoint**: Raise hand when repo is created. Instructor verifies.

**Common Issues**:
- "Repository already exists" → Add your name to make unique: `csc113-portfolio-yourname`
- Can't find "New" button → Top right of GitHub page, next to profile icon

---

### STEP 2: Create Issue #1 (8 minutes)

**Instructions**:
1. In your repository, click "Issues" tab
2. Click "New Issue" (green button)
3. Title: `Module 1: Hello GitHub - Setup and First Commit`
4. Body (copy this template):

```markdown
## 📋 What I'm Working On
Module 1 Assignment 1: Hello GitHub

## ✅ Checklist
- [ ] Create repository (done!)
- [ ] Create this issue (done!)
- [ ] Create branch
- [ ] Update README with introduction
- [ ] Add About Me section
- [ ] List course goals
- [ ] Create pull request
- [ ] Merge after review

## ⏱️ Time Estimate
2 hours

## 📅 Due Date
[Your Module 1 due date]
```

5. Click "Submit new issue"
6. Note your issue number (e.g., #1)

**✅ Checkpoint**: Show neighbor your issue. Does it have a number?

**Common Issues**:
- Can't find Issues tab → Should be between "Code" and "Pull requests"
- Template doesn't format → Make sure you're in the body field, not title

---

### STEP 3: Create Branch (7 minutes)

**Two Methods** - Choose one:

**Method A: GitHub Web (Easier for beginners)**
1. Click "Code" tab
2. Click branch dropdown (says "main")
3. Type new branch name: `module-01-hello-github`
4. Click "Create branch: module-01-hello-github"

**Method B: Command Line (Optional)**
```bash
git clone https://github.com/YOUR-USERNAME/csc113-portfolio.git
cd csc113-portfolio
git branch module-01-hello-github
git checkout module-01-hello-github
```

**✅ Checkpoint**: You should see your branch name at the top of the page (not "main")

**Common Issues**:
- Branch name has spaces → Use hyphens: `module-01-hello-github`
- Can't find branch dropdown → It's near the file list, says "main" by default

---

### STEP 4: Edit README (15 minutes)

**Instructions**:
1. Make sure you're on your new branch (check top of page)
2. Click on `README.md` file
3. Click pencil icon (Edit)
4. Replace default content with:

```markdown
# [Your Name]'s CSC-113 Portfolio

## 👋 Introduction
Hello! I'm [Your Name], a student at [Your College] taking CSC-113: Artificial Intelligence Fundamentals. This portfolio showcases my journey learning AI tools, prompt engineering, and professional development workflows.

## 🎯 About Me
[Write 3-4 sentences about yourself:
- Your program/major
- Why you're taking this course
- What you hope to learn
- Your interests related to AI or technology]

## 📚 Course Goals
By the end of CSC-113, I will:
- Master professional GitHub workflow (Sacred Flow)
- Build and customize AI assistants (SAGE)
- Learn effective prompt engineering techniques
- Create an AI-powered project that solves a real problem
- Develop a professional portfolio showcasing my work

## 🔗 Connect
- GitHub: [@your-username](https://github.com/your-username)
- Email: [your-email]
- [Optional: LinkedIn, portfolio site]

---

**Course**: CSC-113 | **Semester**: [Current Semester] | **Instructor**: Drew Norris
```

5. Personalize the bracketed sections `[like this]`
6. Scroll down to "Commit changes"

**✅ Checkpoint**: Read through your README. Does it represent you well?

---

### STEP 5: Make First Commit (10 minutes)

**Still in the "Commit changes" section**:

1. **Commit message** (top field):
   ```
   Add README with introduction and course goals
   ```

2. **Extended description** (optional, bottom field):
   ```
   - Add personal introduction
   - Include About Me section
   - List CSC-113 course objectives
   - Add contact information
   ```

3. **Select**: "Commit directly to the `module-01-hello-github` branch"

4. Click "Commit changes"

**✅ Checkpoint**: You should see your updated README displayed. The branch dropdown should still show your branch (not main).

**Commit Message Tips**:
- ✅ `Add README with introduction and course goals`
- ✅ `Create initial portfolio structure`
- ❌ `update` (too vague)
- ❌ `README` (not a complete thought)

---

### STEP 6: Create Pull Request (10 minutes)

**Instructions**:
1. Click "Pull requests" tab
2. Click "New pull request" (green button)
3. Verify:
   - **base**: main
   - **compare**: module-01-hello-github
4. You should see your changes highlighted in green
5. Click "Create pull request"
6. Title: `Module 1: Hello GitHub Complete`
7. Description:

```markdown
## 📝 Summary
Completed Hello GitHub assignment for Module 1. Created professional portfolio README with introduction, goals, and contact information.

## ✅ Checklist
- [x] Created repository
- [x] Set up README with personal introduction
- [x] Added About Me section
- [x] Listed course goals
- [x] Added contact links

## 🔗 Closes
Closes #1

## 📸 Preview
[Your README content will be visible below]
```

8. Click "Create pull request"

**✅ Checkpoint**: Your PR is now open! Show your neighbor.

**Common Issues**:
- "No changes to compare" → Make sure you're comparing your branch to main, not main to main
- Changes not showing → Did you commit to your branch (not main)?

---

### STEP 7: Review and Merge (5 minutes)

**In Real Life**: Instructor or teammate would review your PR before merge.

**For This Lab**: You'll merge your own PR (self-review practice).

**Instructions**:
1. Read through your own PR:
   - Do the changes make sense?
   - Is your commit message clear?
   - Any typos in README?
2. If you spot issues, click "Edit" on README and commit fixes
3. Add a comment: "Ready for review"
4. Wait for instructor approval (Drew will comment)
5. Once approved, click "Merge pull request"
6. Click "Confirm merge"
7. Click "Delete branch" (cleanup)

**✅ Checkpoint**: Go to your repository Code tab. You should see your updated README on the main branch!

---

## PART 3: Troubleshooting & Peer Review (15 minutes)

### Peer Review Activity

**Pair up with your buddy**:
1. Exchange GitHub repository URLs
2. Visit your partner's repository
3. Read their README
4. Give feedback:
   - One thing you really like
   - One suggestion for improvement
   - Was their commit message clear?

**Discussion Questions**:
- What was the hardest part of this process?
- What surprised you?
- Where did you get stuck?

---

## PART 4: Reflection & Next Steps (5 minutes)

### Individual Reflection
Write brief answers (in a notebook or text file):

1. **What worked well?**
   - What part of Sacred Flow made sense?
   - Where did you feel confident?

2. **What was challenging?**
   - Where did you get stuck?
   - What concepts are still unclear?

3. **What questions do you have?**
   - What would you like Drew to explain again?
   - What do you need to practice more?

### Next Steps

**Before next class**:
- [ ] Complete Module 1 Assignment 2 (Meet Kevin & SAGE)
- [ ] Practice: Make 2-3 more commits to your README (add sections, fix typos)
- [ ] Review: Commit Message Guide (see planning-sheets/)
- [ ] Optional: Watch Sacred Flow video again to reinforce

**Module 2 Preview**:
- You'll use this same workflow for every assignment
- We'll add complexity: multiple files, branches, conflicts
- Sacred Flow becomes automatic with practice

---

## INSTRUCTOR NOTES

### Preparation
- [ ] Set up demo repository to show process
- [ ] Test GitHub classroom/organization access if using
- [ ] Prepare troubleshooting quick reference handout
- [ ] Have backup plan if GitHub is down (use screenshots/slides)

### Common Student Struggles
1. **Branch confusion**: Students commit to main instead of feature branch
   - **Fix**: Visual diagram on board: main = production, branches = workspaces

2. **Commit messages**: Students write "update" or single words
   - **Fix**: Show commit message formula on projector: `[Action] + [What] + [Why if not obvious]`

3. **Merge anxiety**: Students afraid to click "Merge" button
   - **Fix**: Reassure that GitHub keeps history, can't "break" things permanently

4. **Navigation confusion**: Students get lost in GitHub UI
   - **Fix**: Walk through tabs together: Code, Issues, PRs, Actions, Settings

### Timing Adjustments
- **Fast groups**: Have them create Issue #2 for Assignment 2, start planning
- **Slow groups**: It's OK if they don't finish! That's why it's practice. They can complete Steps 6-7 as homework.
- **Mixed pace**: Pair fast finishers with struggling students for peer support

### Assessment
**Formative (not graded), but observe**:
- Who completes all 7 steps successfully?
- Who needs additional support?
- Common pain points to address in next class

### Success Criteria
By end of lab, students should:
- ✅ Have created at least one commit
- ✅ Have opened at least one PR (even if not merged yet)
- ✅ Understand the flow conceptually (even if execution was rocky)

**It's OK if it's messy!** The goal is exposure and practice, not perfection.

---

## EXTENSION ACTIVITIES

### For Students Who Finish Early

**Challenge 1: Multiple Commits**
Create a new branch, make 3 separate commits with different changes:
- Commit 1: Add a "Projects" section (empty for now)
- Commit 2: Add a "Skills I'm Learning" section
- Commit 3: Proofread and polish formatting

**Challenge 2: Explore History**
- Click "Insights" → "Network" to visualize your branch history
- Click on individual commits to see what changed
- Try reverting a change (make a small edit, commit it, then revert the commit)

**Challenge 3: Help a Neighbor**
Find someone who's stuck and walk them through the step they're on.

---

## ADDITIONAL RESOURCES

**GitHub Documentation**:
- [Hello World Tutorial](https://guides.github.com/activities/hello-world/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

**Video Tutorials**:
- Drew's Sacred Flow series (Canvas)
- [GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk) (optional)

**Cheat Sheets**:
- Git Commands Quick Reference (see reference-materials/)
- Commit Message Formula (see planning-sheets/)

---

## STUDENT HANDOUT (Print or Share Digitally)

### Sacred Flow 7-Step Checklist

**Use this every time you start an assignment:**

1. **Issue**: What am I working on?
2. **Branch**: Create isolated workspace
3. **Commit**: Save progress with good message
4. **Push**: Upload to GitHub (if working locally)
5. **Pull Request**: Request review
6. **Review**: Get feedback, make fixes
7. **Merge**: Integrate changes into main

**Pro Tip**: Commit early, commit often. Small commits are better than giant ones.

---

**This is the foundation of professional development. Master this, and you'll stand out in the job market.**

**frotz → plugh**
