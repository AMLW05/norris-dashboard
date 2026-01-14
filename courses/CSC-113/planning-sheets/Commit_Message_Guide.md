# Commit Message Guide
## CSC-113: Writing Good Commit Messages

**Good commits = Good documentation = Good grades**

---

## Why Commit Messages Matter

**In CSC-113:**
- Part of your process grade
- Shows your thinking
- Demonstrates incremental progress
- Required for Sacred Flow

**In the real world:**
- Team members understand your changes
- Future you remembers what you did
- Code reviews go faster
- Debugging is easier (git blame shows context)

**Rule:** If you can't explain the commit, you shouldn't make it yet.

---

## The Formula

```
[Action Verb] + [What You Changed] + [Why, if not obvious]
```

### Examples:

✅ **GOOD:**
- `Add user authentication with email validation`
- `Fix navigation bug on mobile devices`
- `Update README with installation instructions`
- `Refactor database connection for performance`
- `Remove deprecated API endpoints`

❌ **BAD:**
- `Update` (what did you update?)
- `Fix stuff` (what stuff?)
- `Done` (what's done?)
- `Changes` (what changes?)
- `asdf` (not even trying)

---

## Action Verbs to Use

### Adding Things:
- **Add** - New files, features, functions
- **Create** - New components, classes, modules
- **Implement** - New functionality

**Examples:**
- `Add SAGE context document for prompt engineering`
- `Create Bad Bot configuration file`
- `Implement AI tool comparison matrix`

---

### Changing Things:
- **Update** - Modify existing content
- **Improve** - Make something better
- **Enhance** - Add to existing features
- **Refactor** - Restructure without changing behavior

**Examples:**
- `Update exit ticket with module 2 reflections`
- `Improve prompt clarity in Good Bot`
- `Enhance error handling in AI queries`
- `Refactor comparison code for readability`

---

### Fixing Things:
- **Fix** - Repair bugs or errors
- **Correct** - Fix mistakes
- **Resolve** - Fix issues or blockers

**Examples:**
- `Fix typo in AI timeline document`
- `Correct SAGE context file path`
- `Resolve merge conflict in README`

---

### Removing Things:
- **Remove** - Delete code/files
- **Delete** - Completely remove
- **Clean** - Remove clutter

**Examples:**
- `Remove old draft files`
- `Delete unused AI test prompts`
- `Clean up temporary debug code`

---

### Documentation:
- **Document** - Add documentation
- **Explain** - Add explanations
- **Comment** - Add code comments

**Examples:**
- `Document Bad Bot failure analysis`
- `Explain AI tool comparison criteria`
- `Comment SAGE configuration choices`

---

## CSC-113 Module-Specific Examples

### Module 1: GitHub & SAGE Setup

✅ Good commits:
- `Add initial README with course description`
- `Create first GitHub issue for Module 1`
- `Document SAGE workspace setup process`
- `Add comparison notes for Claude vs ChatGPT`

❌ Bad commits:
- `Initial commit` (what did you initially commit?)
- `Module 1 work` (be specific!)
- `Update file` (which file? why?)

---

### Module 2: AI Exploration

✅ Good commits:
- `Add AI timeline research with 10 major milestones`
- `Document Bad Bot intentional failure points`
- `Create AI tool comparison with scoring rubric`
- `Update timeline with additional sources`

❌ Bad commits:
- `Research done` (what research?)
- `Bad bot stuff` (be specific!)
- `Add things` (what things?)

---

### Module 3: Prompt Engineering

✅ Good commits:
- `Improve Bad Bot prompts based on evaluation`
- `Add 5 advanced prompt engineering techniques`
- `Document Good Bot iteration process`
- `Create holiday shopping AI comparison report`

❌ Bad commits:
- `Bot updates` (which bot? what updates?)
- `Prompts` (what about them?)
- `Assignment 3` (be descriptive!)

---

### Modules 4-8: Project Work

✅ Good commits:
- `Add project proposal with problem statement`
- `Create sprint 1 task breakdown`
- `Implement core feature: user input handling`
- `Document design decisions for database choice`
- `Add retrospective reflection for sprint 2`

❌ Bad commits:
- `Working on project` (what specifically?)
- `Code changes` (what code?)
- `Updates` (to what?)

---

## Commit Message Checklist

Before you commit, ask yourself:

- [ ] Does this describe WHAT changed?
- [ ] Could someone read this and understand without looking at code?
- [ ] Did I use an action verb?
- [ ] Is it specific (not vague)?
- [ ] Is it under 50 characters? (short is good)
- [ ] Would I understand this message in 6 months?

If you answered NO to any, rewrite it.

---

## When to Commit

### DO commit after:
✅ Completing a logical chunk of work
✅ Finishing a section of an assignment
✅ Getting something working
✅ Before taking a break
✅ Before trying something risky

### DON'T commit:
❌ When code is broken
❌ When you're in the middle of something
❌ Random files you don't understand
❌ Sensitive information (passwords, API keys)

---

## Multi-File Commits

**If you changed multiple files in one commit**, your message should describe the overall change:

✅ `Add AI tool comparison with analysis and documentation`
- (Changed: comparison.md, analysis.md, README.md)

✅ `Implement Good Bot iteration with test results`
- (Changed: good-bot.py, test-results.md, prompts.txt)

❌ `Update 3 files`
- (Doesn't say what changed or why)

---

## Commit Frequency Guide

### Module 1-2 (Learning):
**Aim for:** 3-5 commits per assignment
**Why:** You're learning the workflow, smaller commits = easier to understand

**Example pattern:**
1. `Add initial assignment files`
2. `Complete conceptual questions`
3. `Add AI tool comparison notes`
4. `Document setup process`
5. `Add reflection and final edits`

---

### Modules 3-4 (Practicing):
**Aim for:** 5-8 commits per assignment
**Why:** More complex work, break it down more

**Example pattern:**
1. `Create Bad Bot initial configuration`
2. `Document first failure test`
3. `Add 3 additional failure scenarios`
4. `Begin Good Bot improvements`
5. `Implement prompt engineering techniques`
6. `Add comparison analysis`
7. `Document iteration process`
8. `Final edits and reflection`

---

### Modules 5-8 (Project):
**Aim for:** Daily commits (at least 3-5 per week)
**Why:** Professional habit, shows continuous progress

**Example pattern:**
- Daily work sessions = daily commits
- Small features = 2-3 commits each
- Big features = 5-10 commits broken down
- Sprints = 15-20 commits over 2 weeks

---

## Grading Impact

**Commit messages are worth 10-15% of your process grade.**

### What Drew looks for:

✅ **Good commit messages show:**
- Clear thinking
- Incremental progress
- Understanding of what you're doing
- Professional habits

❌ **Bad commit messages suggest:**
- Rushed work
- Lack of understanding
- All work done last minute
- Copy/paste without thought

### Red Flags:
- 🚩 Only 1-2 commits per module
- 🚩 All commits on due date
- 🚩 Commit messages like "update" or "fix"
- 🚩 Giant commits with 20 files
- 🚩 Commits that break things

---

## Git Commit Command Reminders

### Basic commit:
```bash
git add filename.md
git commit -m "Add filename with initial content"
```

### Commit all changed files:
```bash
git add .
git commit -m "Complete Module 1 assignments"
```

### Amend last commit (if you forgot something):
```bash
git add forgotten-file.md
git commit --amend --no-edit
```
**⚠️ Only do this BEFORE pushing!**

---

## Common Mistakes & Fixes

### Mistake: "I already committed with a bad message"

**Fix option 1** (if not pushed yet):
```bash
git commit --amend -m "Better commit message here"
```

**Fix option 2** (if already pushed):
- Can't change it, learn for next time
- Add a comment in your PR explaining

---

### Mistake: "I committed too much at once"

**Fix for next time:**
- Commit more frequently
- Break work into smaller chunks
- Commit after each logical section

---

### Mistake: "I forgot to commit until the end"

**Fix for next time:**
- Set timer to commit every 30-45 minutes
- Commit after completing each part
- Make committing a habit, not an afterthought

---

## Drew's Commit Message Philosophy

> **"Your commits tell a story. Make it a good one."**

**Bad story:**
- `update`
- `update`
- `update`
- `done`

**Good story:**
- `Add project research and problem analysis`
- `Create initial prototype structure`
- `Implement core functionality with error handling`
- `Add documentation and usage examples`
- `Refine based on testing feedback`

Which story would you rather read?

---

## Practice Exercise

Rewrite these bad commit messages:

1. ❌ `changes` → ✅ ___________________________
2. ❌ `done with module 2` → ✅ ___________________________
3. ❌ `update` → ✅ ___________________________
4. ❌ `fix` → ✅ ___________________________
5. ❌ `asdf` → ✅ ___________________________

**Example answers:**
1. `Add AI timeline research with sources`
2. `Complete Bad Bot design with failure analysis`
3. `Update README with project goals and setup`
4. `Fix typo in prompt engineering notes`
5. `Create SAGE workspace configuration`

---

## Advanced: Multi-Line Commit Messages

For bigger commits, you can add more detail:

```bash
git commit -m "Add sprint 1 project implementation" -m "Includes:
- Core feature with error handling
- Unit tests for main functionality
- Updated documentation
- Refactored helper functions for clarity"
```

**When to use:**
- Complex commits touching many files
- End of sprint summaries
- Major feature completions

**CSC-113 Note:** Single-line messages are fine for most work. Save multi-line for big milestones.

---

## Summary: The Golden Rules

1. **Be specific** - Say what you changed
2. **Use action verbs** - Start with Add/Fix/Update/Create
3. **Keep it short** - Under 50 characters if possible
4. **Commit often** - Small, logical chunks
5. **Think future** - Will you understand this in 3 months?

**When in doubt:** Describe what you DID, not what you FEEL.

- ✅ `Add AI comparison with 3 tools`
- ❌ `Worked on AI stuff` (not specific)
- ❌ `This took forever` (not helpful)

---

**Good commits = Good grades = Good habits = Good developer**

**frotz → plugh**
