# Week 1 Assignment: "Hello, GitHub!"
## CSC-113 AI Fundamentals - Your Professional Portfolio Begins Here

**Due**: End of Week 1 (Friday, 11:59 PM)  
**Points**: 25 (25% of Module 1 grade)  
**Submission**: Via GitHub repository (automatically tracked)

---

## ASSIGNMENT OVERVIEW

Welcome to CSC-113! Your first assignment establishes the foundation for everything that follows: learning to work like a professional developer. You'll create your course portfolio repository and complete your first GitHub workflow cycle from start to finish.

**What You're Learning:**
- Professional software development workflow
- GitHub web interface basics
- Creating issues, branches, pull requests
- Documentation fundamentals
- How to "fail safely" with version control

**Important**: This assignment uses ONLY the GitHub web interface. No command-line tools, no Git installation required. If you've used Git before, pretend you haven't - we're building habits first, shortcuts later.

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Navigate GitHub's web interface confidently
2. Follow the professional workflow: Issue → Branch → PR → Review → Merge
3. Create clear, professional documentation
4. Experience your first "green square" (GitHub contribution)
5. Understand why we're using GitHub for this course

---

## PREREQUISITE STEPS

Before you begin the assignment, ensure you have:

### ✅ Checklist
- [ ] GitHub account created (use your school email or personal email)
- [ ] Accepted invitation to course GitHub organization `csc113-fall-2025`
- [ ] Verified you can log into GitHub and see the organization
- [ ] Attended Week 1 live demonstration (or watched recording)

**Having trouble?** See the #tech-help channel in our course communication platform or attend office hours.

---

## THE WORKFLOW YOU'LL FOLLOW

Every professional developer uses a workflow similar to this. You'll repeat this pattern hundreds of times this semester:

```
1. Identify what needs to be done (Create Issue)
2. Create a workspace for your changes (Create Branch)
3. Do the work (Edit files)
4. Document what you did (Write commits)
5. Ask for review (Create Pull Request)
6. Incorporate feedback (Respond to reviews)
7. Finalize your changes (Merge to main)
8. Celebrate! (Check your contribution graph)
```

**Today, you'll do all 8 steps.** Future assignments will feel familiar because you're learning the pattern now.

---

## STEP-BY-STEP INSTRUCTIONS

### STEP 1: Create Your Portfolio Repository

1. **Navigate to the course organization** on GitHub
   - You should see `csc113-fall-2025` in your organizations list
   - Click on it to see available repositories

2. **Create a new repository**
   - Click the green "New repository" button
   - Repository name: `csc113-portfolio` (exactly this, all lowercase)
   - Description: "My CSC-113 AI Fundamentals Portfolio"
   - Visibility: **Private** (only you and instructors can see it)
   - ✅ Check "Add a README file"
   - ✅ Check "Add .gitignore" and select "Python" from dropdown
   - Click "Create repository"

**Why these choices?**
- `csc113-portfolio`: Standard naming makes it easy for instructors to find
- Private: Your work is yours until you choose to share it
- README: Every project needs documentation
- .gitignore: Prevents accidental commits of unnecessary files

---

### STEP 2: Create Your First Issue

Issues track work that needs to be done. Think of them as todo list items that everyone can see and discuss.

1. **Click the "Issues" tab** in your repository
2. **Click "New issue"**
3. **Fill out the issue:**
   - Title: `Initialize portfolio`
   - Description:
     ```
     **Goal**: Set up my portfolio repository with a professional README
     
     **Tasks**:
     - [ ] Add personal introduction
     - [ ] Explain course purpose
     - [ ] Create learning log section
     - [ ] Add first reflection entry
     
     **Success Criteria**: README is clear, professional, and introduces me and this portfolio
     ```
4. **Assign the issue to yourself** (right sidebar)
5. **Click "Submit new issue"**

**What you just did:** Created a trackable piece of work with clear goals. Notice GitHub automatically numbered it #1.

---

### STEP 3: Create a Branch for Your Work

Branches let you work without affecting the "official" version (main branch). Think of it like making a copy to work on before updating the original.

1. **On the issue you just created**, look for "Development" in the right sidebar
2. **Click "Create a branch"**
   - Branch name suggestion will be something like `1-initialize-portfolio`
   - Keep this suggestion - it links the branch to issue #1
   - Click "Create branch"

**What you just did:** Created a safe workspace where you can make changes without breaking anything. The main branch is protected - you literally cannot mess it up even if you try.

---

### STEP 4: Make Your Changes

Now for the actual work - editing your README file.

1. **Switch to your new branch**
   - Use the branch dropdown (should say "main" by default)
   - Select your branch: `1-initialize-portfolio`

2. **Open the README.md file** and click the pencil icon (Edit)

3. **Replace the contents with your introduction:**

```markdown
# [Your Name]'s CSC-113 Portfolio
## AI Fundamentals - Fall 2025

### About Me
[Write 2-3 sentences about yourself. Include your major, year, and why you're taking this course.]

### About This Course
This portfolio documents my journey through CSC-113: AI Fundamentals. Throughout this course, I'm learning to:
- Collaborate with AI tools effectively
- Apply prompt engineering techniques
- Build AI-powered solutions
- Think critically about AI capabilities and limitations
- Follow professional development workflows using GitHub

### Learning Log

#### Week 1: Introduction & GitHub Workflow
**Date**: [Today's date]

**What I learned this week:**
- [Write 2-3 bullet points about what you learned in Week 1]

**What challenged me:**
- [Write 1-2 bullet points about what was difficult]

**What I'm proud of:**
- [Write 1-2 bullet points about accomplishments, even small ones]

**Questions I still have:**
- [Write 1-2 questions you have about the course, GitHub, or AI]

---

**Repository Structure:**
```
csc113-portfolio/
├── README.md (this file)
├── week-02-sage/
├── week-03-bad-bot/
└── [More weeks as we progress]
```

*Last updated: [Today's date]*
```

4. **Customize the template:**
   - Replace `[Your Name]` with your actual name
   - Fill in the [bracketed sections] with your own content
   - Add today's date where indicated
   - Be honest in your reflection - there are no wrong answers

5. **Scroll down to "Commit changes":**
   - Commit message: `docs: add personal introduction and Week 1 reflection`
   - Extended description: `Initialized portfolio with professional README and first learning log entry`
   - ✅ Ensure "Commit directly to the 1-initialize-portfolio branch" is selected
   - Click "Commit changes"

**What you just did:** Made your first commit! This is a saved snapshot of your work with a clear message explaining what you did.

---

### STEP 5: Create a Pull Request

Pull Requests (PRs) are how you propose changes to the main branch. They enable review before merging.

1. **Navigate to "Pull requests" tab** in your repository
2. **Click "New pull request"**
3. **Set up the comparison:**
   - Base: `main`
   - Compare: `1-initialize-portfolio`
   - You should see your changes highlighted in green (additions)

4. **Click "Create pull request"**

5. **Fill out the PR template:**
   - Title: `Closes #1 - Initialize portfolio with introduction`
   - Description:
     ```
     ## What This Does
     This PR initializes my portfolio repository with a professional README including:
     - Personal introduction
     - Course overview
     - First learning log entry for Week 1
     - Repository structure documentation
     
     ## Closes
     Closes #1
     
     ## Checklist
     - [x] README is clear and professional
     - [x] All sections are filled out
     - [x] Learning log entry is complete
     - [x] Commit messages follow format
     
     ## Ready for Review
     This PR is ready for instructor review.
     ```

6. **Request review:**
   - In the right sidebar, click "Reviewers"
   - Select your instructor
   - Click "Create pull request"

**What you just did:** Asked for your work to be reviewed before it becomes "official." The `Closes #1` automatically links this PR to your issue.

---

### STEP 6: Wait for Review (Self-Check While Waiting)

Your instructor will review your PR, likely within 24 hours. While waiting, do your own review:

**Self-Review Checklist:**
- [ ] Did I personalize all [bracketed sections]?
- [ ] Is my introduction clear and professional?
- [ ] Did I write honest reflections (not just "everything was fine")?
- [ ] Are there any typos or formatting issues?
- [ ] Does my commit message clearly describe what I did?
- [ ] Did I use `Closes #1` in my PR description?

**If you find issues:**
- You can make additional commits to the same branch
- They'll automatically appear in the PR
- Commit message format: `fix: correct typo in introduction` or `docs: expand Week 1 reflection`

**Common Feedback You Might Get:**
- "Add more detail to your reflection"
- "Fix formatting in the learning log"
- "Clarify your 'About Me' section"

**This is normal!** Iteration is how we improve.

---

### STEP 7: Respond to Feedback and Merge

When you receive feedback:

1. **Read the comments carefully**
2. **Make requested changes** by editing files in your branch
3. **Commit the changes** with clear messages: `fix: address feedback on reflection detail`
4. **Comment on the PR**: "Thanks for the feedback! I've addressed your comments."
5. **Wait for approval**

When your PR is approved:

1. **Click "Merge pull request"**
2. **Click "Confirm merge"**
3. **Click "Delete branch"** (cleanup - the work is now in main)

**What you just did:** Completed the entire professional development workflow!

---

### STEP 8: Celebrate Your First Contribution!

1. **Go to your GitHub profile** (click your avatar → Your profile)
2. **Look at your contribution graph** (the green squares)
3. **See your commits from today** - that's real work tracked!

**You now have:**
- ✅ A professional portfolio repository
- ✅ Your first GitHub contribution
- ✅ Experience with the complete workflow
- ✅ Clear documentation of your Week 1 learning
- ✅ A pattern you'll repeat all semester

---

## DELIVERABLES CHECKLIST

By the end of this assignment, you should have:

### In GitHub
- [ ] Repository named `csc113-portfolio` created
- [ ] Issue #1 created, assigned, and closed
- [ ] Branch `1-initialize-portfolio` created and later deleted (after merge)
- [ ] Professional README.md with:
  - [ ] Personal introduction
  - [ ] Course description
  - [ ] Week 1 learning log entry
  - [ ] Repository structure documentation
- [ ] Pull request created, reviewed, and merged
- [ ] At least one green square in your contribution graph

### Quality Standards
- [ ] README is grammatically correct and professional
- [ ] Reflections are honest and substantive (not generic)
- [ ] Commit messages follow format: `type: description`
- [ ] PR properly closes issue using `Closes #1` syntax

---

## ASSESSMENT RUBRIC

This assignment is worth 25 points, assessed across four categories:

### AI Partnership Quality (25%) - N/A for Week 1
*This category doesn't apply yet - you'll use AI starting Week 2*

### Problem-Solving Process (25%)
**Excellent (23-25 pts):**
- Followed all workflow steps correctly
- Issue clearly defined goals and success criteria
- Branch properly created and linked to issue
- PR demonstrates understanding of process

**Good (20-22 pts):**
- Followed most workflow steps correctly
- Issue has goals but could be clearer
- Branch created (even if not perfectly linked)
- PR submitted (even if template not fully filled)

**Needs Improvement (15-19 pts):**
- Skipped workflow steps or confused order
- Issue is vague or incomplete
- Branch not linked to issue
- PR missing key information

### Professional Communication (25%)
**Excellent (23-25 pts):**
- README is clear, professional, and well-formatted
- Learning log reflection is honest and substantive
- Commit messages follow format and are descriptive
- PR description is complete and clear

**Good (20-22 pts):**
- README is clear but could be more polished
- Learning log has reflection but is brief
- Commit messages are present but could be clearer
- PR description covers basics

**Needs Improvement (15-19 pts):**
- README is unclear or unprofessional
- Learning log is generic or empty
- Commit messages are vague ("update" or "fix")
- PR description is missing key sections

### Critical Thinking & Ethics (25%)
**Excellent (23-25 pts):**
- Learning log shows genuine reflection
- Questions demonstrate curiosity
- Challenges identified are specific and honest
- Shows beginning of growth mindset

**Good (20-22 pts):**
- Learning log has some reflection
- Questions are present but general
- Challenges mentioned but not detailed
- Shows willingness to learn

**Needs Improvement (15-19 pts):**
- Learning log is generic ("it was fine")
- No questions or only surface-level ones
- No challenges identified or unrealistic ("nothing was hard")
- Appears to go through motions without engagement

---

## COMMON MISTAKES & HOW TO AVOID THEM

### "I can't find the organization"
**Fix**: Check your email for the GitHub invitation. Click the link to accept it. If you don't see it, check spam or contact the instructor.

### "I merged directly to main without a PR"
**Fix**: Don't panic! Talk to your instructor. We can fix it, and you'll learn why we use PRs. (Also, main should be protected, so this shouldn't happen.)

### "My commit messages are all 'update'"
**Fix**: Edit your README again with a better message. Format is: `type: description`
- `docs:` for documentation changes
- `feat:` for new features
- `fix:` for corrections
- `chore:` for maintenance

### "I don't know what to write in my reflection"
**Fix**: Be honest! Try these prompts:
- What was confusing about GitHub?
- What did the live demo help clarify?
- What are you worried about for this course?
- What are you excited about?

### "My PR doesn't say 'Closes #1'"
**Fix**: Edit the PR description (click the three dots next to the title). Add `Closes #1` anywhere in the description.

---

## GETTING HELP

### Resources
1. **Week 1 Live Demo Recording** (link in course site)
2. **GitHub Docs: Hello World Tutorial** (for reference)
3. **Course Communication Channel**: #week-1-help
4. **Office Hours**: See course calendar

### When to Ask for Help
- **Immediately**: Can't access GitHub or organization
- **Within 24 hours**: Confused about workflow steps
- **Before deadline**: Unsure if your README meets standards

### How to Ask for Help
1. **Check the resources above first**
2. **Describe what you tried**: "I created an issue, but I can't find how to create a branch"
3. **Share your repository URL**: Makes it easier to help you
4. **Be specific about the error**: Screenshots help!

---

## WHY WE'RE DOING THIS

### "Why GitHub for an AI course?"

**Because GitHub is how professionals work.** Even if you never write code again, you'll need to:
- Track your work systematically
- Collaborate with others
- Document your process
- Manage versions of files
- Get feedback before finalizing

These skills transfer to any career.

### "Why all this ceremony for a simple file?"

**Because the process matters more than the product.** Right now, you're learning a pattern. By Week 8, you won't think about it - it'll be automatic. That's when the real learning begins.

### "What if I mess up?"

**You literally cannot break anything.** That's why we're using branches and PR reviews. The worst case is we delete your branch and start over. That's what `git` was designed for!

**Our course motto**: *Failure is just exercise.*

---

## WHAT'S NEXT

### Week 2 Preview
Next week, you'll:
- Set up your SAGE (Study Assistant & Guide Engine) workspace
- Try your first AI interactions
- Compare different AI tools
- Start building your prompt library

Same workflow, different content. You've got this!

### Portfolio Building
Every week, you'll add to this repository:
- Week 2: SAGE workspace
- Week 3: AI timeline research
- Week 4: Bad Bot project
- Week 5: Good Bot improvement
- And so on...

By Week 16, you'll have a professional portfolio showcasing your AI collaboration skills.

---

## FINAL CHECKLIST BEFORE SUBMITTING

- [ ] Repository created and properly named
- [ ] Issue #1 created and closed
- [ ] README.md has all required sections
- [ ] Personal introduction is complete and professional
- [ ] Learning log entry is honest and substantive
- [ ] PR was created and merged to main
- [ ] Branch was deleted after merge
- [ ] I have at least one green square on my GitHub profile

**How to "Submit":**
You don't need to submit anything separately - your instructor can see your repository! The act of merging your PR is your submission.

---

## ACKNOWLEDGMENT

By completing this assignment, you acknowledge that:
- You understand this is your work, documented in your own words
- You followed the GitHub workflow as taught
- You will use this pattern for all future assignments
- You know where to get help if needed

**Welcome to CSC-113. Let's build something amazing together.**

---

*Assignment created for CSC-113 AI Fundamentals*  
*"Failure is just exercise. Delete the branch and try again."*
