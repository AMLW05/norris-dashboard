# CSC-113 Quick Reference Cards
## Print & Cut Guide for Students

**Instructions**: Print these cards on cardstock, cut along dotted lines, laminate (optional), keep in your backpack/desk for quick reference.

---

## CARD 1: Sacred Flow Workflow

```
╔═══════════════════════════════════════════════╗
║        SACRED FLOW - 7 STEPS                  ║
║   Professional GitHub Workflow                ║
╠═══════════════════════════════════════════════╣
║                                               ║
║  1️⃣ ISSUE                                     ║
║     Describe what you'll work on              ║
║     → Creates issue number (#1, #2...)        ║
║                                               ║
║  2️⃣ BRANCH                                    ║
║     Create isolated workspace                 ║
║     → git branch module-0X-name               ║
║     → git checkout module-0X-name             ║
║                                               ║
║  3️⃣ COMMIT                                    ║
║     Save progress with message                ║
║     → git add .                               ║
║     → git commit -m "Message"                 ║
║                                               ║
║  4️⃣ PUSH                                      ║
║     Upload to GitHub                          ║
║     → git push origin branch-name             ║
║                                               ║
║  5️⃣ PULL REQUEST                              ║
║     Request review before merge               ║
║     → Create on GitHub website                ║
║     → Link to issue: "Closes #X"              ║
║                                               ║
║  6️⃣ REVIEW                                    ║
║     Get feedback, make fixes                  ║
║     → Address comments                        ║
║     → Push updates to same branch             ║
║                                               ║
║  7️⃣ MERGE                                     ║
║     Integrate changes into main               ║
║     → Click "Merge pull request"              ║
║     → Delete branch after merge               ║
║                                               ║
║ 🎯 Goal: This becomes AUTOMATIC by Module 8  ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 2: Git Commands Cheat Sheet

```
╔═══════════════════════════════════════════════╗
║         ESSENTIAL GIT COMMANDS                ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 📥 GETTING STARTED                            ║
║                                               ║
║ git clone <url>                               ║
║   Copy repo from GitHub to computer           ║
║                                               ║
║ git status                                    ║
║   Check what's changed                        ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🌿 BRANCHES                                   ║
║                                               ║
║ git branch                                    ║
║   List all branches (* = current)             ║
║                                               ║
║ git branch name                               ║
║   Create new branch                           ║
║                                               ║
║ git checkout name                             ║
║   Switch to branch                            ║
║                                               ║
║ git checkout -b name                          ║
║   Create AND switch to new branch             ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 💾 SAVING WORK                                ║
║                                               ║
║ git add filename                              ║
║   Stage specific file                         ║
║                                               ║
║ git add .                                     ║
║   Stage all changes                           ║
║                                               ║
║ git commit -m "Message"                       ║
║   Commit with message                         ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ☁️ SYNCING WITH GITHUB                        ║
║                                               ║
║ git push origin branch-name                   ║
║   Upload commits to GitHub                    ║
║                                               ║
║ git pull origin main                          ║
║   Download latest from main                   ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🔍 CHECKING HISTORY                           ║
║                                               ║
║ git log                                       ║
║   See commit history                          ║
║                                               ║
║ git diff                                      ║
║   See uncommitted changes                     ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 3: Commit Message Formula

```
╔═══════════════════════════════════════════════╗
║       COMMIT MESSAGE FORMULA                  ║
║    (Process Grading: 10 points!)              ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ [Action Verb] + [What] + [Why if not obvious]║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ✅ GOOD EXAMPLES:                             ║
║                                               ║
║ • Add AI timeline research with 10 milestones ║
║ • Fix typo in introduction paragraph          ║
║ • Update README with installation steps       ║
║ • Refactor Good Bot prompts for clarity       ║
║ • Remove deprecated API configuration         ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ BAD EXAMPLES:                              ║
║                                               ║
║ • update                (Too vague)           ║
║ • Fix stuff             (What stuff?)         ║
║ • Done                  (What's done?)        ║
║ • Changes               (What changes?)       ║
║ • asdf                  (Not even trying)     ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎯 ACTION VERBS TO USE:                       ║
║                                               ║
║ Add, Create, Implement                        ║
║ Update, Improve, Enhance, Refactor            ║
║ Fix, Correct, Resolve                         ║
║ Remove, Delete, Clean                         ║
║ Document, Explain, Comment                    ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 💡 TIP: Keep under 50 characters!             ║
║                                               ║
║ 📏 LENGTH GUIDE:                              ║
║ This line is exactly 50 characters long here! ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 4: Prompt Engineering Techniques

```
╔═══════════════════════════════════════════════╗
║    10 PROMPT ENGINEERING TECHNIQUES           ║
║         (Module 3 - Master These!)            ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 1. BE SPECIFIC                                ║
║    Replace vague with precise                 ║
║    ❌ "Write about AI"                        ║
║    ✅ "Write 3 paragraphs about supervised    ║
║       learning for beginners"                 ║
║                                               ║
║ 2. ADD CONTEXT                                ║
║    Background, audience, purpose              ║
║    "I'm a college student learning Python..." ║
║                                               ║
║ 3. USE EXAMPLES (Few-Shot)                    ║
║    Show 2-3 examples of what you want         ║
║    "Here are good examples: [examples]        ║
║     Now do: [task]"                           ║
║                                               ║
║ 4. SET ROLE/PERSONA                           ║
║    "You are a patient teacher..."             ║
║    "You are an expert Python developer..."    ║
║                                               ║
║ 5. DEFINE FORMAT                              ║
║    "Provide as bullet list"                   ║
║    "Format as table with columns X, Y, Z"     ║
║                                               ║
║ 6. SET CONSTRAINTS                            ║
║    "In exactly 3 sentences"                   ║
║    "Using only simple language, no jargon"    ║
║                                               ║
║ 7. CHAIN OF THOUGHT                           ║
║    "Think step by step"                       ║
║    "Show your reasoning"                      ║
║                                               ║
║ 8. SPECIFY AUDIENCE                           ║
║    "Explain for a 10-year-old"                ║
║    "Write for experienced developers"         ║
║                                               ║
║ 9. NEGATIVE EXAMPLES                          ║
║    "Don't include [X]"                        ║
║    "Avoid [Y]"                                ║
║                                               ║
║ 10. ITERATE                                   ║
║     Test → Analyze → Refine → Test again      ║
║     First prompts rarely perfect!             ║
║                                               ║
║ 💡 COMBINE TECHNIQUES for best results!       ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 5: Exit Ticket Format

```
╔═══════════════════════════════════════════════╗
║         EXIT TICKET - MODULE REFLECTION       ║
║      (Standup-Style Process Documentation)    ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 🚢 WHAT SHIPPED?                              ║
║   What did you complete this module?          ║
║                                               ║
║   List specific deliverables:                 ║
║   • Assignment 1: [Name] - merged PR #X       ║
║   • Assignment 2: [Name] - merged PR #Y       ║
║   • [Other accomplishments]                   ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🚧 WHAT BLOCKED ME?                           ║
║   What slowed you down or stopped you?        ║
║                                               ║
║   Be specific:                                ║
║   • Technical issue: [What happened?]         ║
║   • Concept confusion: [What's unclear?]      ║
║   • Time management: [What took longest?]     ║
║                                               ║
║   How resolved (or still blocking)?           ║
║   • [Your solution or plan to resolve]        ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ⏭️ NEXT COMMIT?                               ║
║   What's the very next thing you need to do?  ║
║                                               ║
║   Be SPECIFIC (not "Do Module X"):            ║
║   ✅ "Read Module 3 prompt engineering guide" ║
║   ✅ "Create issue for Good Bot iteration"    ║
║   ❌ "Catch up" (too vague)                   ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎓 WHAT I LEARNED?                            ║
║   Pick ONE thing, explain in your own words   ║
║                                               ║
║   I learned: [Concept]                        ║
║   Explanation: [3-4 sentences]                ║
║   Why it matters: [Application]               ║
║                                               ║
║ 💡 Purpose: Process reflection = learning!    ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 6: Sprint Cycle (Modules 6-7)

```
╔═══════════════════════════════════════════════╗
║         SPRINT CYCLE (2-Week Sprints)         ║
║            Agile Project Management           ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 📋 1. SPRINT PLANNING (Week 1, Day 1)        ║
║    • Review PRD/goals                         ║
║    • Break features into tasks (4-8 hr each)  ║
║    • Estimate time per task                   ║
║    • Prioritize: Must-have vs. Nice-to-have   ║
║    • Commit to realistic scope                ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🏃 2. SPRINT EXECUTION (Weeks 1-2)           ║
║    • Daily work on committed tasks            ║
║    • Standup check-ins (in class):            ║
║      - What did I ship yesterday?             ║
║      - What will I ship today?                ║
║      - What's blocking me?                    ║
║    • Commit frequently (daily if possible)    ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ✅ 3. MID-SPRINT CHECK (Week 1, End)         ║
║    • Am I ~50% done?                          ║
║    • Are estimates accurate?                  ║
║    • Need to adjust scope?                    ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎤 4. SPRINT DEMO (Week 2, End)              ║
║    • Present working features (5-7 min)       ║
║    • Live demo (not slides!)                  ║
║    • Q&A and feedback                         ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🔄 5. RETROSPECTIVE (After Demo)             ║
║    • What went well? (Keep doing)             ║
║    • What didn't work? (Stop or improve)      ║
║    • What to try next? (Actions)              ║
║    • Calculate velocity (estimated vs actual) ║
║                                               ║
║ 🎯 Use Sprint 1 velocity to plan Sprint 2!   ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 7: AI Tool Comparison

```
╔═══════════════════════════════════════════════╗
║        AI TOOLS - QUICK COMPARISON            ║
║      (Claude, ChatGPT, Gemini)                ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 🤖 CLAUDE (Anthropic)                         ║
║   Strengths:                                  ║
║   • Long context (200k tokens)                ║
║   • Strong reasoning, analysis                ║
║   • "Constitutional AI" (safety-focused)      ║
║   • Good for technical docs, long content     ║
║   Free tier: claude.ai                        ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 💬 CHATGPT (OpenAI)                           ║
║   Strengths:                                  ║
║   • Most popular, large user base             ║
║   • Versatile, general-purpose                ║
║   • Plugins/extensions available              ║
║   • Good for code, creative writing           ║
║   Free tier: chat.openai.com                  ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🔷 GEMINI (Google)                            ║
║   Strengths:                                  ║
║   • Multimodal (text + images)                ║
║   • Google integrations (Search, Workspace)   ║
║   • Fast responses                            ║
║   • Good for research, image analysis         ║
║   Free tier: gemini.google.com                ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 💡 EVALUATION CRITERIA:                       ║
║   ✓ Accuracy (verify important info!)         ║
║   ✓ Relevance (matches your question?)        ║
║   ✓ Clarity (understandable explanation?)     ║
║   ✓ Limitations (admits uncertainty?)         ║
║   ✓ Bias (check for problematic assumptions)  ║
║                                               ║
║ 🎯 Best practice: Test same prompt in 2-3    ║
║    tools, compare results!                    ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 8: Troubleshooting Quick Fixes

```
╔═══════════════════════════════════════════════╗
║       COMMON PROBLEMS - QUICK FIXES           ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ ❌ "fatal: not a git repository"              ║
║ ✅ cd to your repo folder, or git init        ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ "error: failed to push"                    ║
║ ✅ git pull origin main                       ║
║    (then resolve conflicts if any)            ║
║    git push origin branch-name                ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ "I committed to main instead of branch"    ║
║ ✅ git branch feature-name                    ║
║    git checkout main                          ║
║    git reset --hard origin/main               ║
║    git checkout feature-name                  ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ "Merge conflict"                           ║
║ ✅ Open file, look for <<<<<<< markers        ║
║    Edit to keep what you want                 ║
║    Delete <<<, ===, >>> markers               ║
║    git add filename                           ║
║    git commit -m "Resolve conflict"           ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ "AI gives wrong answers"                   ║
║ ✅ Verify with credible sources               ║
║    Improve prompt (be more specific)          ║
║    Try different AI tool                      ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ ❌ "My PR won't merge (conflicts)"            ║
║ ✅ git checkout your-branch                   ║
║    git pull origin main                       ║
║    Resolve conflicts                          ║
║    git push origin your-branch                ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🆘 STILL STUCK?                               ║
║    1. Check Troubleshooting Guide (full doc)  ║
║    2. Post in Discord #tech-help              ║
║    3. Office hours                            ║
║    4. Email Drew with specific error          ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 9: Module Checklist

```
╔═══════════════════════════════════════════════╗
║     EVERY MODULE - USE THIS CHECKLIST         ║
║         (Process = Better Grades!)            ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 📅 BEFORE STARTING                            ║
║  □ Read assignment instructions completely    ║
║  □ Check rubric (know how you're graded)      ║
║  □ Review knowledge check (test concepts)     ║
║  □ Create task breakdown (30-min chunks)      ║
║  □ Fill in weekly planning template           ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🚀 WHILE WORKING (Sacred Flow)                ║
║  □ Create GitHub issue (#1 step!)             ║
║  □ Create feature branch (not main!)          ║
║  □ Work in small chunks (30-45 min)           ║
║  □ Commit frequently (good messages!)         ║
║  □ Push to GitHub regularly (backup!)         ║
║  □ Update issue checkboxes as you go          ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 📝 BEFORE SUBMITTING                          ║
║  □ Create pull request with description       ║
║  □ Link PR to issue: "Closes #X"              ║
║  □ Self-review: Read your own PR              ║
║  □ Check for typos, incomplete sections       ║
║  □ Verify all rubric items addressed          ║
║  □ Add comment: "Ready for review"            ║
║  □ Submit PR link to Canvas                   ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎯 AFTER COMPLETING MODULE                    ║
║  □ Fill out exit ticket (reflection!)         ║
║  □ Review what went well / what to improve    ║
║  □ Calculate time (estimated vs actual)       ║
║  □ Plan for next module based on learnings    ║
║                                               ║
║ 💡 Following this = 10-15% of your grade!     ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## CARD 10: Track Comparison

```
╔═══════════════════════════════════════════════╗
║    CODE BUILDERS vs. PROMPT MASTERS           ║
║         (Choose by Module 4!)                 ║
╠═══════════════════════════════════════════════╣
║                                               ║
║ 💻 CODE BUILDERS TRACK                        ║
║                                               ║
║   What you'll do:                             ║
║   • Write Python/JavaScript code              ║
║   • Use APIs and libraries                    ║
║   • Debug and test code                       ║
║   • Version control with Git                  ║
║                                               ║
║   Skills you'll build:                        ║
║   • Programming fundamentals                  ║
║   • Technical troubleshooting                 ║
║   • Code documentation                        ║
║   • AI-assisted development                   ║
║                                               ║
║   Good fit if you:                            ║
║   • Want to be a software developer           ║
║   • Enjoy problem-solving through code        ║
║   • Are comfortable learning syntax           ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎨 PROMPT MASTERS TRACK                       ║
║                                               ║
║   What you'll do:                             ║
║   • Configure no-code tools (Zapier, Airtable)║
║   • Design advanced prompts                   ║
║   • Build workflow automations                ║
║   • Document AI collaboration strategies      ║
║                                               ║
║   Skills you'll build:                        ║
║   • Advanced prompt engineering               ║
║   • Tool integration and automation           ║
║   • Process design                            ║
║   • AI literacy for any role                  ║
║                                               ║
║   Good fit if you:                            ║
║   • Want AI skills without programming        ║
║   • Interested in product, design, ops roles  ║
║   • Prefer configuration over coding          ║
║                                               ║
║ ─────────────────────────────────────         ║
║                                               ║
║ 🎯 BOTH TRACKS:                               ║
║   • Same 5 CLOs (learning outcomes)           ║
║   • Same Sacred Flow workflow                 ║
║   • Same grading standards                    ║
║   • Same professional skills                  ║
║                                               ║
║ 💡 Choose based on CAREER GOALS & INTERESTS,  ║
║    not "easier" - both are rigorous!          ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## PRINTING INSTRUCTIONS

### For Students:

**Materials Needed**:
- Cardstock paper (8.5" × 11")
- Scissors
- Laminator (optional but recommended)
- 3-hole punch (optional - to keep in binder)

**Steps**:
1. Print this document on cardstock (heavier paper = more durable)
2. Print single-sided OR double-sided (put related cards back-to-back)
3. Cut along card boundaries
4. Optional: Laminate each card for durability
5. Optional: Punch holes and keep in course binder
6. OR: Use binder clip to keep cards together

**Suggested Pairings (if printing double-sided)**:
- Front: Sacred Flow | Back: Git Commands
- Front: Commit Messages | Back: Prompt Engineering
- Front: Exit Ticket | Back: Sprint Cycle
- Front: AI Tool Comparison | Back: Troubleshooting
- Front: Module Checklist | Back: Track Comparison

---

### For Instructors:

**Bulk Printing Options**:
1. **Print and distribute**: Print on cardstock, cut, laminate, hand out first day
2. **Digital distribution**: Share PDF, students print their own
3. **Poster versions**: Enlarge 200-300%, print on poster paper, hang in classroom
4. **Laminated desk references**: Print full sheet, laminate without cutting, use as desk mat

**Cost Estimate** (for 25 students):
- Cardstock: ~$10 (100 sheets)
- Laminating pouches: ~$20 (50 pouches)
- Total: ~$30 for whole class to have full set

---

## DIGITAL VERSIONS

Students can also use these as:
- **Phone wallpaper** (screenshot individual cards)
- **Desktop reference** (keep PDF open on second monitor)
- **Flashcards** (import into Anki or Quizlet)
- **Bookmarks** (save key cards as browser bookmarks)

---

**These reference cards = your survival kit for CSC-113!**

**frotz → plugh**
