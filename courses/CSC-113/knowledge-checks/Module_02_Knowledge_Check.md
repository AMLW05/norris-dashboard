# Module 2 Knowledge Check
## CSC-113: AI Exploration & GitHub Mastery

**Purpose**: Verify understanding of AI history, tool evaluation, and advanced GitHub concepts
**Format**: 10 questions (multiple choice, matching, short answer)
**Grading**: Formative (not graded, required for progress)
**Attempts**: Unlimited
**Time**: ~15 minutes

---

## PART 1: AI History & Evolution (Questions 1-3)

### Question 1: AI Eras
**Match each AI milestone to its approximate decade:**

A) Turing Test proposed
B) Deep Blue beats chess champion
C) AlexNet wins ImageNet (deep learning breakthrough)
D) ChatGPT released

1. 1950s
2. 1990s
3. 2010s
4. 2020s

**Correct Matches**: A-1, B-2, C-3, D-4

**Explanation**:
- 1950s: Turing Test (1950), AI foundations
- 1990s: Expert systems, Deep Blue (1997)
- 2010s: Deep learning revolution, AlexNet (2012)
- 2020s: Transformer models, ChatGPT (2022)

---

### Question 2: AI Winters
**What is an "AI Winter"?**

A) A period when AI systems only work in cold temperatures
B) A period of reduced funding and interest in AI research
C) The time when AI becomes obsolete
D) A yearly conference for AI researchers

**Correct Answer**: B

**Explanation**: AI Winters were periods (1970s, late 1980s) when initial hype didn't match reality, leading to funding cuts and reduced research activity. Understanding this history helps set realistic expectations for AI capabilities.

---

### Question 3: Current AI Era
**Which statement best describes the current state of AI (2020s)?**

A) AI can solve any problem given enough data
B) AI has achieved general intelligence equal to humans
C) AI excels at specific tasks but lacks general reasoning
D) AI has stopped improving and reached its limits

**Correct Answer**: C

**Explanation**: Modern AI (including large language models) is "narrow AI" - excellent at specific tasks (language, image recognition) but not generally intelligent like humans. It's a tool, not a replacement for human thinking.

---

## PART 2: AI Tool Evaluation (Questions 4-6)

### Question 4: Evaluation Criteria
**When comparing AI tools, which criteria are most important? (Select all that apply)**

A) Accuracy of responses
B) Brand popularity
C) Understanding of context
D) Ability to admit limitations/uncertainty
E) Most expensive option
F) Handling of edge cases

**Correct Answers**: A, C, D, F

**Explanation**: Evaluate AI tools on quality factors: accuracy, context understanding, honesty about limitations, and reliability in unusual situations. Price and popularity are less important than fit for your specific needs.

---

### Question 5: AI Limitations
**Which is a known limitation of current AI language models?**

A) They cannot process text
B) They may generate confident-sounding but incorrect information
C) They only work with English
D) They require constant internet connection

**Correct Answer**: B

**Explanation**: "Hallucinations" (generating plausible but false information) are a well-documented limitation. AI models don't "know" they're wrong - they generate based on patterns. Always verify important information.

---

### Question 6: Bias in AI
**Why might an AI tool show bias in its responses?**

A) The developers intentionally programmed bias
B) AI systems have personal opinions
C) Training data reflects biases present in human-created content
D) Bias is impossible in AI systems

**Correct Answer**: C

**Explanation**: AI models learn from training data (internet text, books, etc.). If that data contains biases (gender, racial, cultural), the model may reproduce them. This is why critical evaluation (CLO4) is essential.

---

## PART 3: GitHub Advanced Concepts (Questions 7-8)

### Question 7: Merge Conflicts
**What is a merge conflict?**

A) When two people argue about code changes
B) When Git can't automatically combine changes from different branches
C) When you accidentally delete the wrong branch
D) When your internet connection drops during a push

**Correct Answer**: B

**Explanation**: Merge conflicts happen when the same part of a file is changed in different ways on different branches. Git doesn't know which change to keep, so you must manually resolve it.

---

### Question 8: GitHub Issues
**What is the purpose of GitHub Issues? (Select all that apply)**

A) To track bugs and feature requests
B) To have arguments with other developers
C) To plan and organize work
D) To replace all project management tools
E) To document decisions and discussions
F) To automatically fix code problems

**Correct Answers**: A, C, E

**Explanation**: Issues are a project management and communication tool. They track work (bugs, features), facilitate planning, and document discussions. They don't replace all PM tools or fix code automatically.

---

## PART 4: Bad Bot Design (Questions 9-10)

### Question 9: Bad Bot Purpose
**Why does CSC-113 include a "Bad Bot" assignment?**

A) To waste time on purposely broken projects
B) To learn what NOT to do through intentional failure
C) To make the course harder
D) To prove AI doesn't work

**Correct Answer**: B

**Explanation**: "Failure as Exercise" - intentionally designing failure helps you understand WHY things fail. When you know common failure modes, you can avoid them in real projects (Good Bot, final project).

---

### Question 10: Bad Bot Failure Scenarios
**Which would make a good "Bad Bot" failure scenario? (Select all that apply)**

A) No context provided → Generic, unhelpful responses
B) Contradictory instructions → Confused, inconsistent output
C) Overly vague prompts → Answers don't match your need
D) Perfectly clear instructions → Works great

**Correct Answers**: A, B, C

**Explanation**: Good Bad Bot scenarios intentionally create failure through poor configuration: lack of context, contradictions, vague instructions. Option D wouldn't be a "bad" bot - it would work well!

---

## PART 5: Short Answer (Scenario-Based)

### Question 11: AI Timeline Research
**You're researching AI history and find conflicting dates for when "artificial intelligence" was first coined as a term. Some sources say 1955, others say 1956. What should you do?**

**Good Answer Elements**:
- Check multiple credible sources
- Look for primary sources (original conference proceedings, papers)
- Note the discrepancy in your research
- Cite both dates with sources if unresolved
- Choose most commonly cited date with explanation

**Bad Approach**:
- Pick whichever date you saw first
- Make up a date in between
- Skip citing sources

---

### Question 12: Bad Bot Analysis
**Your Bad Bot gives completely wrong answers to basic questions. Write 2-3 sentences analyzing WHY this might be happening and HOW you could fix it for Good Bot.**

**Sample Good Answer**:
"The Bad Bot likely lacks proper context and constraints. Without knowing the subject area or having clear instructions, it generates generic responses that don't match the specific need. For Good Bot, I would add a detailed context document explaining the purpose, provide example Q&As, and set clear boundaries on the types of questions it should answer."

**What makes this good**:
- Identifies root cause (lack of context/constraints)
- Explains the failure mechanism
- Proposes specific fixes with examples

---

### Question 13: Commit Message Quality
**You just completed a 3-hour work session on your AI Timeline assignment. You added 5 new milestones, found citations for all sources, created a visual timeline, and proofread everything. Should you make ONE commit or MULTIPLE commits? Why?**

**Correct Answer**: Multiple commits

**Sample Good Explanation**:
"Multiple commits (at least 3-4) because each logical chunk should be committed separately. For example: (1) 'Add 5 AI milestones with descriptions', (2) 'Add citations and sources for all milestones', (3) 'Create visual timeline graphic', (4) 'Proofread and polish timeline document'. This makes the history readable and allows reverting specific changes if needed."

**Why this matters**: Small, focused commits are a professional best practice. Giant commits are hard to review and understand.

---

## Answer Key

| Question | Correct Answer | Type |
|----------|----------------|------|
| 1 | A-1, B-2, C-3, D-4 | Matching |
| 2 | B | Multiple Choice |
| 3 | C | Multiple Choice |
| 4 | A, C, D, F | Multiple Select |
| 5 | B | Multiple Choice |
| 6 | C | Multiple Choice |
| 7 | B | Multiple Choice |
| 8 | A, C, E | Multiple Select |
| 9 | B | Multiple Choice |
| 10 | A, B, C | Multiple Select |
| 11 | Rubric-based | Short Answer |
| 12 | Rubric-based | Short Answer |
| 13 | Rubric-based | Short Answer |

---

## Feedback Messages

### 100%
🎉 **Excellent!** You understand AI history, evaluation criteria, advanced GitHub concepts, and the pedagogical purpose of Bad Bot. Ready for Module 2 assignments!

---

### 70-99%
✅ **Good progress!** You've grasped most Module 2 concepts. Review missed questions before starting assignments.

---

### Below 70%
📚 **Review needed**: Spend more time with Module 2 materials (AI history readings, Bad Bot design guide) before starting assignments.

---

## Student Tips

**For AI History Questions**:
- Don't memorize dates - understand the progression
- Focus on WHY each breakthrough mattered
- Think about how past failures inform current expectations

**For Bad Bot Questions**:
- Embrace the failure mindset
- Think about what makes AI tools work WELL, then reverse it
- Your Bad Bot should fail instructively, not randomly

**For GitHub Questions**:
- These build on Module 1 (Issues, Branches, Commits)
- Think about WHY the workflow matters, not just the steps
- Consider team collaboration scenarios

---

**frotz → plugh**
