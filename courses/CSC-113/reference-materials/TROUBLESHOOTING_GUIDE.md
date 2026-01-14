# CSC-113 Troubleshooting Guide
## Common Problems & Solutions

**Quick Links**: [GitHub Issues](#github-issues) | [Git Command Issues](#git-command-issues) | [AI Tool Problems](#ai-tool-problems) | [Assignment Issues](#assignment-issues)

---

## GITHUB ISSUES

### Problem: "I can't find the Issues tab"

**Solution**:
1. Make sure you're in YOUR repository (check URL: github.com/YOUR-USERNAME/repo-name)
2. Look at the top menu bar: Code | Issues | Pull requests
3. If Issues tab is missing, go to Settings → Features → Check "Issues"

---

### Problem: "I created an issue but it doesn't have a number"

**Solution**:
- Issue numbers appear after you click "Submit new issue"
- Look for `#1`, `#2`, etc. next to the issue title
- If still no number, refresh the page
- Issues start at #1 and count up (you can't choose the number)

---

### Problem: "I can't close my issue"

**Solution**:
- Scroll to bottom of issue page
- Click "Close issue" button (gray button)
- OR: In a pull request description, write `Closes #X` (where X is issue number) - issue will auto-close when PR is merged

---

## GIT COMMAND ISSUES

### Problem: "fatal: not a git repository"

**What it means**: You're not inside a Git-tracked folder

**Solution**:
1. Check where you are: `pwd` (Mac/Linux) or `cd` (Windows)
2. Navigate to your repository: `cd path/to/your-repo`
3. Verify it's a Git repo: Look for `.git` folder (might be hidden) or run `git status`
4. If folder isn't a Git repo yet: `git init` OR clone from GitHub: `git clone <url>`

---

### Problem: "error: failed to push some refs"

**What it means**: Remote repository has changes you don't have locally

**Solution**:
```bash
git pull origin main
# If there are conflicts, resolve them
git push origin main
```

**Prevention**: Always pull before starting work: `git pull`

---

### Problem: "I committed to main instead of a feature branch"

**Solution Option 1** (Haven't pushed yet):
```bash
# Create the feature branch from current state
git branch feature-name

# Reset main to remote version
git checkout main
git reset --hard origin/main

# Go back to your feature branch (your work is safe here!)
git checkout feature-name
```

**Solution Option 2** (Already pushed):
- For CSC-113: It's OK, just create a feature branch from here for NEXT changes
- Document in your PR what happened and what you'll do differently next time

---

### Problem: "I have a merge conflict"

**What it means**: Git can't automatically combine changes

**Solution**:
1. Open the conflicted file (Git will show you which files)
2. Look for conflict markers:
   ```
   <<<<<<< HEAD
   Your changes
   =======
   Incoming changes
   >>>>>>> branch-name
   ```
3. Edit the file to keep what you want (delete the markers and unwanted code)
4. Save the file
5. `git add filename`
6. `git commit -m "Resolve merge conflict in filename"`
7. `git push`

**Prevention**: Commit and push frequently, communicate with teammates (if applicable)

---

### Problem: "I don't know what to write for commit message"

**Formula**: `[Action Verb] + [What Changed] + [Why, if not obvious]`

**Examples**:
- ✅ `Add AI timeline research with 10 major milestones`
- ✅ `Fix typo in README introduction`
- ✅ `Update Good Bot prompts based on evaluation feedback`

**Action verbs**: Add, Create, Implement, Update, Improve, Fix, Correct, Remove, Delete, Refactor, Document

---

### Problem: "Git is asking for username/password but I don't remember them"

**Solution**:
1. **For HTTPS clone**: Use Personal Access Token, not password
   - GitHub Settings → Developer settings → Personal access tokens → Generate new token
   - Use token as password when Git prompts
2. **Switch to SSH** (alternative):
   - Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
   - Clone using SSH URL instead of HTTPS

---

## BRANCH ISSUES

### Problem: "I can't see my branch in GitHub"

**Solution**:
- Did you push it? `git push origin branch-name`
- Check branch dropdown in GitHub (says "main" by default) - click it to see all branches
- If branch is only local, it won't show on GitHub until pushed

---

### Problem: "I'm on the wrong branch"

**Solution**:
1. Check current branch: `git branch` (current has * next to it)
2. Switch branches: `git checkout branch-name`
3. If you made changes on wrong branch:
   - Stash changes: `git stash`
   - Switch branches: `git checkout correct-branch`
   - Apply changes: `git stash pop`

---

### Problem: "I want to delete a branch"

**Solution**:
```bash
# Delete local branch (after merging)
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name

# OR: Delete via GitHub after merging PR (big "Delete branch" button)
```

**Note**: Only delete branches AFTER they're merged to main

---

## PULL REQUEST ISSUES

### Problem: "My PR says 'No changes'"

**Causes**:
1. You're trying to merge main → main (should be feature-branch → main)
2. You didn't commit your changes
3. You didn't push your branch

**Solution**:
1. Verify you're on your feature branch: `git branch`
2. Verify you have commits: `git log`
3. Verify branch is pushed: `git push origin branch-name`
4. Try creating PR again, ensure base=main, compare=your-branch

---

### Problem: "I need to update my PR after feedback"

**Solution**:
1. Make the requested changes in your files
2. Commit: `git add .` then `git commit -m "Address feedback: [what you changed]"`
3. Push: `git push origin branch-name`
4. PR automatically updates with new commits!
5. Reply to reviewer: "Feedback addressed, ready for re-review"

---

### Problem: "My PR won't merge (conflicts)"

**Solution**:
1. Update your branch with latest main:
   ```bash
   git checkout your-branch
   git pull origin main
   ```
2. Resolve conflicts (see "I have a merge conflict" above)
3. Push resolved changes: `git push origin your-branch`
4. PR should now be mergeable

---

## AI TOOL PROBLEMS

### Problem: "ChatGPT/Claude says I've hit my limit"

**Solutions**:
- **Free tier limits**: Wait until limit resets (usually daily)
- **Use different tool**: If ChatGPT is limited, try Claude or Gemini
- **Create new account** (only if allowed by tool's terms)
- **Upgrade to paid tier** (optional, not required for CSC-113)

---

### Problem: "AI gives me wrong/nonsensical answers"

**Explanation**: Hallucinations - AI confidently generates false information

**Solutions**:
1. **Verify important information**: Cross-check with credible sources
2. **Improve your prompt**: Add more context, be more specific
3. **Try different tool**: Sometimes one tool handles a question better
4. **Ask for sources**: "Provide sources for this information"
5. **Accept limitations**: AI doesn't "know" things - it generates based on patterns

**Rule**: Never trust AI outputs blindly, especially for facts/citations

---

### Problem: "AI's response doesn't match what I asked for"

**Likely cause**: Vague or ambiguous prompt

**Solutions**:
1. **Be more specific**: Replace vague words with precise details
2. **Add context**: Background info, audience, purpose
3. **Define format**: "Provide as bullet list" or "Format as table"
4. **Give examples**: Show 2-3 examples of what you want
5. **Iterate**: Analyze output, identify what's wrong, refine prompt, try again

---

### Problem: "SAGE/my AI assistant isn't working as expected"

**Solutions**:
1. **Check context document**: Is it clear? Specific? Free of contradictions?
2. **Test prompts**: Try same prompt with and without SAGE context - is there improvement?
3. **Iterate on context**: Refine context document based on results
4. **Compare tools**: Your SAGE setup might work better in Claude vs. ChatGPT

**Remember**: SAGE is YOUR assistant - you control how it behaves through configuration

---

## ASSIGNMENT ISSUES

### Problem: "I don't understand what the assignment is asking"

**Solutions**:
1. **Re-read instructions completely** (not just skim)
2. **Check rubric**: Often clarifies expectations
3. **Look at examples**: Past student work (if provided) or demo videos
4. **Ask specific questions**: In Discord or office hours
   - ❌ Bad: "I don't get it"
   - ✅ Good: "The rubric says 'evaluate AI outputs' - does that mean I should test multiple prompts?"

---

### Problem: "I'm running out of time"

**Solutions**:
1. **Prioritize**: Focus on required elements first, skip optional extras
2. **Use Sacred Flow Exception**: If you have Issue + Branch + PR created by deadline, request 24-hour extension
3. **Communicate proactively**: Email Drew BEFORE deadline if you have legitimate issue
4. **Scope down (Modules 5-8 projects)**: Deliver MVP instead of fully polished product

**Prevention**: Use Weekly Planning Template, break work into daily chunks

---

### Problem: "My code/config doesn't work"

**Debugging Steps**:
1. **Read error messages carefully**: What specifically is failing?
2. **Google the error**: Copy exact error text, search it
3. **Check for typos**: Variable names, file paths, syntax
4. **Test in isolation**: Break problem into smaller pieces, test each part
5. **Use AI tools to debug**: Paste error message, ask for explanation
6. **Ask for help**: Office hours, Discord #tech-help, peer support

**When asking for help**:
- ❌ Bad: "It doesn't work"
- ✅ Good: "I'm getting error 'X' when I try to Y. I've tried Z. Here's my code: [paste code or link]"

---

### Problem: "I'm stuck and don't know where to start"

**Solutions**:
1. **Use Task Breakdown Sheet**: Break assignment into 30-minute chunks (see planning-sheets/)
2. **Start with easiest part**: Build momentum
3. **Set tiny goal**: "I'll just create the file and write the title" - often leads to more
4. **Use buddy system**: Work alongside a classmate (even remotely on Discord)
5. **Attend office hours**: Sometimes you just need someone to help you get unstuck

**Remember**: Starting imperfectly is better than not starting at all

---

## GITHUB WEB INTERFACE ISSUES

### Problem: "I can't find the Edit button"

**Solution**:
1. Click on the file you want to edit (not the folder)
2. Look for pencil icon (✏️) in the upper right of file content
3. If no pencil: You might not have write access OR file might be in protected branch

---

### Problem: "Changes disappeared after I navigated away"

**Cause**: Edited in GitHub web interface but didn't commit

**Solution**:
- **Prevention**: Always commit before navigating away from edit page
- **If you lost work**: Unfortunately, it's gone if you didn't commit. Rewrite it.

**Best practice**: Save drafts in text editor locally, paste into GitHub when ready to commit

---

### Problem: "GitHub is slow or won't load"

**Solutions**:
1. **Check GitHub status**: https://www.githubstatus.com
2. **Try different browser**: Chrome, Firefox, Edge
3. **Clear browser cache**: Settings → Privacy → Clear browsing data
4. **Check internet connection**: Try loading other sites
5. **Use mobile app** (temporary): GitHub mobile app as backup

---

## COMMON COMMAND LINE ERRORS

### "command not found: git"

**Solution**: Install Git
- **Mac**: Install from https://git-scm.com OR via Homebrew: `brew install git`
- **Windows**: Install Git Bash from https://git-scm.com
- **Linux**: `sudo apt install git` (Ubuntu/Debian) or equivalent for your distro

---

### "Permission denied (publickey)"

**Solution**: SSH key issue
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to SSH agent: `ssh-add ~/.ssh/id_ed25519`
3. Copy public key: `cat ~/.ssh/id_ed25519.pub`
4. Add to GitHub: Settings → SSH and GPG keys → New SSH key → Paste

**Alternative**: Use HTTPS URLs instead of SSH

---

### "You have divergent branches"

**Solution**:
```bash
git pull --rebase origin main
# OR
git pull origin main --no-rebase
```

Then resolve any conflicts if needed.

---

## WHEN ALL ELSE FAILS

### Escalation Path:

**Level 1: Self-Help** (Try first)
- Re-read this troubleshooting guide
- Google the specific error message
- Check GitHub documentation
- Ask AI tool to explain error

**Level 2: Peer Help**
- Post in Discord #tech-help channel (classmates may have solved it)
- Ask your buddy/partner
- Check with study group

**Level 3: Instructor Help**
- Office hours (best for complex issues)
- Email Drew with:
  - What you're trying to do
  - What's happening instead (exact error message)
  - What you've already tried
  - Screenshots (if applicable)

**Level 4: Campus Resources**
- IT Help Desk (computer/network issues)
- Computer lab assistance
- Tutoring center

---

## PREVENTION TIPS

**To avoid most problems**:
1. ✅ **Commit frequently**: Small commits are easier to debug than giant ones
2. ✅ **Pull before starting work**: Avoid conflicts
3. ✅ **Read error messages**: They often tell you exactly what's wrong
4. ✅ **Test as you go**: Don't wait until deadline to test if something works
5. ✅ **Use Sacred Flow**: Following the workflow prevents many issues
6. ✅ **Back up work**: Push to GitHub frequently (it's your backup!)
7. ✅ **Ask early**: Don't wait until midnight before due date to ask for help

---

## EMERGENCY: "I Broke Everything"

**Don't panic. Git rarely breaks things irreversibly.**

**Solutions by scenario**:

**Scenario 1: "I deleted important files locally"**
- If you've committed before: `git checkout HEAD -- filename`
- If pushed to GitHub: Download from GitHub website

**Scenario 2: "I messed up main branch"**
- Reset to remote version: `git fetch origin` then `git reset --hard origin/main`
- ⚠️ Warning: This deletes local uncommitted changes

**Scenario 3: "I have no idea what state my repo is in"**
- **Nuclear option**: Clone fresh copy from GitHub, manually copy your recent work into new clone
- This is why you push frequently!

**Scenario 4: "Assignment due in 1 hour and nothing works"**
1. Take a 5-minute break (panic makes it worse)
2. Submit what you have (partial credit > no credit)
3. Document what went wrong in PR description
4. Email Drew immediately explaining situation
5. Fix issues, submit late with documentation (Sacred Flow Exception might apply)

---

## ADDITIONAL RESOURCES

**Official Documentation**:
- GitHub Docs: https://docs.github.com
- Git Documentation: https://git-scm.com/doc
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf

**Video Tutorials**:
- GitHub Skills: https://skills.github.com (interactive)
- Git & GitHub for Beginners: https://www.youtube.com/watch?v=RGOj5yH7evk

**CSC-113 Specific**:
- Sacred Flow video (Canvas)
- Git Commands Quick Reference (see below)
- Office Hours schedule (Canvas)

---

## QUICK REFERENCE: Most-Used Git Commands

```bash
# Initial Setup
git clone <url>                    # Copy repo from GitHub to computer
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Daily Workflow
git status                         # Check what's changed
git branch                         # See all branches (* = current)
git branch feature-name            # Create new branch
git checkout feature-name          # Switch to branch
git add filename                   # Stage specific file
git add .                          # Stage all changes
git commit -m "Message"            # Commit with message
git push origin branch-name        # Upload branch to GitHub
git pull origin main               # Download latest from main

# Sacred Flow Specific
git checkout -b module-0X-name     # Create and switch to new branch
git log                            # See commit history
git diff                           # See uncommitted changes
```

---

**Remember: Everyone struggles with Git at first. It's normal. Keep practicing and it becomes second nature!**

**frotz → plugh**
