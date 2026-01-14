# Week 8 Assignment: "Track Specialization Deep Dive"
## CSC-113 AI Fundamentals - Mastering Your Path

**Due**: End of Week 8 (Friday, 11:59 PM)
**Points**: 25 (25% of Module 4 grade)
**Submission**: Via GitHub repository (PR #8)

---

## ASSIGNMENT OVERVIEW

Last week, you generated project ideas and finalized your track choice. This week, you go deep.

You'll explore the tools, techniques, and skills specific to your chosen track—**Code Builders** or **Prompt Masters**. By the end of this week, you'll have hands-on experience with the core capabilities you'll need for your capstone project.

**This is where tracks truly diverge.** While the assignments have had track-specific elements before, this week is designed specifically for your path. You'll develop skills that directly support your project work in Weeks 9-16.

**What You're Learning:**
- Track-specific tool mastery
- Real-world skill application
- Critical evaluation of AI outputs (new SAGE document!)
- Foundation skills for your capstone project
- Professional documentation practices

**Connection to Previous Work:**
- Week 7: You chose your track and brainstormed project ideas
- Week 8: You develop skills needed to execute those ideas
- Week 9: You begin rapid prototyping with these skills

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Demonstrate proficiency with track-specific tools and techniques
2. Apply critical evaluation skills to AI outputs
3. Build foundational components for your capstone project
4. Document your learning process professionally
5. Create portfolio-ready artifacts showcasing track expertise

---

## PART 1: SAGE ENHANCEMENT - CRITICAL EVALUATION (30-45 minutes)

### Step 1: Add critical-evaluation.md to SAGE

Before diving into track-specific work, add the critical evaluation document to your SAGE. This document helps you assess AI outputs—a crucial skill as you work more independently.

**Task:** Add `critical-evaluation.md` to your SAGE context (Claude Project or Gemini Gem).

**Create:** `week-08-track-deep-dive/sage-integration.md`

```markdown
# SAGE Integration: critical-evaluation.md

## Document Added
**File**: critical-evaluation.md
**Purpose**: Framework for assessing AI output quality

## Integration Notes
**How I added it**: [Describe the process]
**SAGE response to addition**: [Did SAGE acknowledge it? How?]

## Testing the New Context

### Test 1: Ask SAGE About Verification
**Prompt**: "How should I verify claims that AI makes?"
**Response Summary**: [What did SAGE say?]
**Uses New Context?**: [Yes/No - evidence]

### Test 2: Ask About Hallucination Signs
**Prompt**: "What are signs that an AI output might be wrong?"
**Response Summary**: [What did SAGE say?]
**Uses New Context?**: [Yes/No - evidence]

### Test 3: Real-World Application
**Prompt**: [Ask SAGE to help you evaluate something from your track work]
**Response Summary**: [How did SAGE help?]
**Usefulness**: [Rating 1-5 and brief explanation]

## Current SAGE Context Inventory
List all documents currently in your SAGE (should be 8-9 by now):

| # | Document | Purpose | When Added |
|---|----------|---------|------------|
| 1 | SAGE-core.md | Personality and guidelines | Week 2 |
| 2 | course-overview.md | Course structure | Week 2 |
| 3 | github-basics.md | Workflow guidance | Week 3 |
| 4 | github-troubleshooting.md | Error recovery | Week 3 |
| 5 | [document] | [purpose] | [week] |
| ... | ... | ... | ... |

## Reflection
**Total documents**: [Number]
**Can you explain why each exists?**: [Yes/Partially/Working on it]
**Which document has been most useful?**: [Name and why]
```

---

## PART 2: TRACK-SPECIFIC DEEP DIVE

Choose **your track** and complete ALL requirements for that track.

Both tracks require equivalent time and effort. Neither is "easier."

---

## OPTION A: CODE BUILDERS TRACK

### Objective
Develop foundational programming skills for AI integration: environment setup, API basics, and structured outputs.

**Time Estimate:** 3-4 hours

---

### Task 1: Development Environment Exploration (45 minutes)

Set up and document a development environment for AI programming.

**Choose ONE:**
- **Google Colab** (recommended for beginners)
- **GitHub Codespaces** (if comfortable with VS Code)
- **Local Python** (if already experienced)

**Create:** `week-08-track-deep-dive/environment-setup.md`

```markdown
# Development Environment Setup

## Environment Chosen
**Platform**: [Colab/Codespaces/Local]
**Why this choice**: [Reasoning]

## Setup Process

### Step 1: [First setup step]
**What I did**: [Description]
**Outcome**: [Success/Issues]
**Screenshot**: [If helpful]

### Step 2: [Next step]
[Continue documenting each step]

## Environment Test

### Test: Hello World
**Code**:
```python
# Test code here
```
**Output**: [What happened]
**Status**: [Working/Issues]

### Test: Package Installation
**Packages installed**: [List]
**Installation command**: [Command used]
**Status**: [Working/Issues]

## Environment Configuration

### API Key Setup
**How I'm storing API keys**: [Method - environment variables recommended]
**Security considerations**: [What you learned about safe key storage]

### Useful Extensions/Settings
[List any helpful configurations you made]

## Troubleshooting Log
[Document any issues and how you solved them]

## Ready for API Work?
**Confidence level**: [1-5]
**Remaining concerns**: [Any worries?]
```

---

### Task 2: First API Call (1 hour)

Make your first AI API call. This is foundational for your capstone project.

**Choose ONE API:**
- **Google Gemini API** (recommended - generous free tier)
- **OpenAI API** (if you have access)
- **Anthropic Claude API** (if you have access)

**Create:** `week-08-track-deep-dive/first-api-call.md`

```markdown
# First API Call Documentation

## API Chosen
**Provider**: [Gemini/OpenAI/Anthropic]
**Why**: [Reasoning]

## Setup Process

### Getting API Access
**Steps taken**: [How did you get your API key?]
**Documentation used**: [Links or descriptions]
**Time spent**: [Estimate]

### Installing Required Libraries
```python
# Installation commands
pip install [library]
```

## First API Call

### Code
```python
# Your first API call code here
# Include comments explaining each part
```

### Output
[Paste the actual output]

### Understanding the Code

| Code Section | What It Does | Why It's Needed |
|--------------|--------------|-----------------|
| [import statement] | [explanation] | [purpose] |
| [API key setup] | [explanation] | [purpose] |
| [API call] | [explanation] | [purpose] |
| [response handling] | [explanation] | [purpose] |

## Experimentation

### Experiment 1: Change the Prompt
**Original prompt**: [Your first prompt]
**Modified prompt**: [Different prompt]
**How output changed**: [Observations]

### Experiment 2: Adjust Parameters
**Parameter changed**: [temperature/max_tokens/etc.]
**Effect observed**: [What happened]

### Experiment 3: Error Handling
**What happens when**: [Describe an error scenario you tested]
**Error message**: [What you saw]
**How to handle**: [Your solution]

## Critical Evaluation
**Did the API give accurate responses?**: [Assessment]
**Any signs of hallucination?**: [What you noticed]
**Verification method used**: [How you checked]

## Challenges Encountered
[Document any difficulties and solutions]

## Confidence Level
**Comfort with API calls**: [1-5]
**Ready for more complex work?**: [Yes/Partially/Need more practice]
\`\`\`

---

### Task 3: Structured Output Experiments (1 hour)

Learn to get AI to output in specific formats—crucial for building applications.

**Create:** `week-08-track-deep-dive/structured-outputs.md`

```markdown
# Structured Output Experiments

## What Are Structured Outputs?
[Your explanation of why structured outputs matter for programming]

## Experiment 1: JSON Output

### Goal
Get the API to return data in valid JSON format.

### Prompt Used
```
[Your prompt requesting JSON output]
```

### Code
```python
# Code to request and parse JSON
```

### Output
```json
[Actual JSON output]
```

### Parsing the Output
```python
# Code to work with the JSON in Python
```

### Success?
**Valid JSON?**: [Yes/No]
**Parseable in Python?**: [Yes/No]
**Issues encountered**: [Any problems?]

## Experiment 2: Specific Schema

### Goal
Get the API to follow a specific data structure.

### Required Schema
```json
{
  "field1": "description",
  "field2": "description",
  ...
}
```

### Prompt Used
```
[Prompt that specifies the schema]
```

### Output
[Did it follow the schema?]

### Learnings
[What works for getting consistent structure?]

## Experiment 3: Multiple Outputs

### Goal
Request multiple structured items in one response.

### Prompt
```
[Prompt requesting multiple items]
```

### Output
[Results]

### Parsing Multiple Items
```python
# How to process multiple items
```

## Best Practices Discovered

### What Works for Structured Output
1. [Technique 1]
2. [Technique 2]
3. [Technique 3]

### What Doesn't Work
1. [Thing to avoid]
2. [Common mistake]

## Application to Project
**How will I use structured outputs in my capstone?**
[Specific ideas]
```

---

### Task 4: Technical Documentation (30 minutes)

Create a reference document you can use during your capstone project.

**Create:** `week-08-track-deep-dive/api-reference.md`

```markdown
# API Quick Reference

## Environment Setup
[Quick commands to set up your environment]

## API Configuration
```python
# Template code for API setup
```

## Common Operations

### Basic Chat Completion
```python
# Template code
```

### Structured JSON Output
```python
# Template code
```

### Error Handling
```python
# Template code
```

## Troubleshooting

### Problem: [Common issue 1]
**Solution**: [Fix]

### Problem: [Common issue 2]
**Solution**: [Fix]

## Resources
- [Link to API documentation]
- [Link to helpful tutorial]
- [Other resources you found useful]

## Notes for My Project
[Specific notes about how this applies to your capstone idea]
```

---

### Code Builders Deliverables Checklist

- [ ] Environment setup documented with working Python
- [ ] First API call successful and documented
- [ ] Structured output experiments complete
- [ ] API reference document created
- [ ] All code tested and working
- [ ] Critical evaluation applied to API outputs

---

## OPTION B: PROMPT MASTERS TRACK

### Objective
Master advanced prompting techniques and no-code AI tools for sophisticated AI applications.

**Time Estimate:** 3-4 hours

---

### Task 1: Advanced Prompting Techniques (1 hour)

Learn and practice sophisticated prompting methods that go beyond basic instructions.

**Create:** `week-08-track-deep-dive/advanced-prompting.md`

```markdown
# Advanced Prompting Techniques

## Technique 1: Few-Shot Prompting

### What Is It?
[Your explanation of few-shot prompting]

### Why It Works
[Your understanding of why examples help]

### Experiment: Without Examples
**Task**: [What you asked the AI to do]
**Prompt**:
```
[Zero-shot prompt]
```
**Output**: [Result]
**Quality Assessment**: [How good was it? 1-5]

### Experiment: With Examples (Few-Shot)
**Same Task**
**Prompt with Examples**:
```
Here are examples of what I'm looking for:

Example 1:
Input: [example input]
Output: [example output]

Example 2:
Input: [example input]
Output: [example output]

Now do this:
Input: [your actual input]
Output:
```
**Output**: [Result]
**Quality Assessment**: [How much better? 1-5]

### Analysis
**Improvement from few-shot**: [What changed?]
**How many examples work best?**: [Your observation]

---

## Technique 2: Chain-of-Thought Prompting

### What Is It?
[Your explanation of chain-of-thought]

### Why It Works
[Your understanding of why step-by-step helps]

### Experiment: Direct Answer Request
**Complex Task**: [Something requiring reasoning]
**Prompt**:
```
[Direct prompt asking for answer]
```
**Output**: [Result]
**Accuracy**: [Was it correct?]

### Experiment: Chain-of-Thought
**Same Task**
**Prompt**:
```
[Task description]

Think through this step by step:
1. First, consider...
2. Then, analyze...
3. Finally, conclude...

Show your reasoning before giving your final answer.
```
**Output**: [Result including reasoning]
**Accuracy**: [Was the reasoning and answer correct?]

### Analysis
**Did reasoning improve the answer?**: [Yes/No + details]
**When is chain-of-thought most useful?**: [Your observation]

---

## Technique 3: Role/Persona Prompting

### What Is It?
[Your explanation]

### Experiment: Generic Response
**Task**: [Something that benefits from expertise]
**Prompt**:
```
[Basic prompt without role]
```
**Output**: [Result]

### Experiment: With Expert Persona
**Prompt**:
```
You are an expert [specific role] with [years] of experience in [domain].

[Same task]
```
**Output**: [Result]

### Analysis
**How did the persona change the response?**: [Observations]
**Which personas are most useful?**: [Your findings]

---

## Technique 4: Structured Instruction Prompting

### What Is It?
Breaking complex instructions into clear, structured formats.

### Experiment
**Complex Task**: [Multi-part request]

**Unstructured Prompt**:
```
[Paragraph-style instructions]
```
**Output**: [Result]
**What was missed?**: [Any parts ignored?]

**Structured Prompt**:
```
Task: [Clear task name]

Requirements:
1. [First requirement]
2. [Second requirement]
3. [Third requirement]

Format: [How to structure the output]

Constraints: [Any limitations]
```
**Output**: [Result]
**Completeness**: [Were all parts addressed?]

### Analysis
**Which format works better?**: [Your conclusion]
**How much structure is enough?**: [Your observation]

---

## Summary: My Prompting Toolkit

| Technique | Best Used For | Key Implementation |
|-----------|---------------|-------------------|
| Few-Shot | [When to use] | [How to do it] |
| Chain-of-Thought | [When to use] | [How to do it] |
| Role/Persona | [When to use] | [How to do it] |
| Structured | [When to use] | [How to do it] |

## Application to Project
**Which techniques will help my capstone?**: [Specific plans]

---

### Task 2: No-Code Platform Deep Dive (1 hour)

Explore a no-code AI platform in depth.

**Choose ONE:**
- **Google AI Studio** (recommended)
- **Poe** (multiple models)
- **Other platform** (with instructor approval)

**Create:** `week-08-track-deep-dive/platform-exploration.md`

```markdown
# Platform Deep Dive: [Platform Name]

## Platform Overview
**Name**: [Platform]
**URL**: [Link]
**Primary Use Case**: [What it's best for]

## Account Setup
**Process**: [How to get access]
**Cost**: [Free tier limits]
**Time to setup**: [Estimate]

## Feature Exploration

### Feature 1: [Feature Name]
**What it does**: [Description]
**How to use it**: [Steps]
**Screenshot**: [If helpful]
**Usefulness rating**: [1-5]

### Feature 2: [Feature Name]
[Same structure]

### Feature 3: [Feature Name]
[Same structure]

[Continue for 4-5 features]

## Capability Testing

### Test 1: Basic Conversation
**What I tried**: [Description]
**Result**: [How it performed]
**Comparison to ChatGPT/Gemini**: [Similar/Better/Worse and why]

### Test 2: Complex Task
**What I tried**: [Description]
**Result**: [How it performed]
**Limitations noticed**: [Any issues?]

### Test 3: Project-Relevant Task
**Task related to my capstone**: [Description]
**Result**: [How it performed]
**Viable for my project?**: [Yes/No/Maybe + reasoning]

## Platform Strengths
1. [Strength 1]
2. [Strength 2]
3. [Strength 3]

## Platform Limitations
1. [Limitation 1]
2. [Limitation 2]
3. [Limitation 3]

## Comparison to Other Tools
| Aspect | This Platform | [Other tool] | [Other tool] |
|--------|---------------|--------------|--------------|
| Ease of use | [Rating] | [Rating] | [Rating] |
| Capabilities | [Rating] | [Rating] | [Rating] |
| Cost | [Rating] | [Rating] | [Rating] |
| My project fit | [Rating] | [Rating] | [Rating] |

## Recommendation
**Would I use this for my project?**: [Yes/No/Partially]
**Why**: [Reasoning]
```

---

### Task 3: Custom Assistant Creation (1 hour)

Build a custom AI assistant relevant to your project idea.

**Create:** `week-08-track-deep-dive/custom-assistant.md`

```markdown
# Custom Assistant: [Name]

## Purpose
**What this assistant does**: [Clear description]
**Target user**: [Who would use this]
**Connection to my project**: [How it relates to Week 7 ideas]

## Platform
**Where I built it**: [Gemini Gem/Custom GPT/Other]

## System Instructions

### Full System Prompt
```
[Your complete system prompt - 300-500 words]
```

### Design Rationale

**Why this persona?**
[Explanation]

**Why these capabilities?**
[Explanation]

**Why these constraints?**
[Explanation]

## Advanced Techniques Used

### Technique 1: [Technique from Task 1]
**How I applied it**: [Specific implementation]
**Effect on responses**: [What changed]

### Technique 2: [Another technique]
[Same structure]

## Testing

### Test 1: Primary Use Case
**User Goal**: [What they want]
**Conversation**:
```
User: [Message]
Assistant: [Response]
User: [Follow-up]
Assistant: [Response]
```
**Assessment**: [How well did it work?]

### Test 2: Edge Case
**Unusual Request**: [Description]
**Response**: [How it handled it]
**Assessment**: [Appropriate behavior?]

### Test 3: Multi-Turn Conversation
**Extended conversation showing context maintenance**:
[Full conversation]
**Assessment**: [Did it maintain context?]

## Critical Evaluation
**Potential for hallucination?**: [Assessment]
**Limitations users should know**: [What it can't do well]
**How to verify its outputs**: [Recommendations]

## Iteration History

### Version 1 → Version 2
**Issue found**: [Problem]
**Change made**: [Solution]
**Result**: [Improvement]

[Continue for iterations]

## Final Assessment
**Strengths**: [What it does well]
**Weaknesses**: [What needs work]
**Ready for users?**: [Yes/No + explanation]
```

---

### Task 4: Conversation Flow Design (30 minutes)

Design a conversation flow for your assistant that handles multiple scenarios.

**Create:** `week-08-track-deep-dive/conversation-design.md`

```markdown
# Conversation Flow Design

## Overview
**Assistant Name**: [Name]
**Primary Flow**: [Main conversation path]

## Flow Diagram

```
[Start]
    |
    v
[Greeting/Introduction]
    |
    v
[Understand User Need] --> [Clarifying Questions if needed]
    |
    v
[Provide Assistance]
    |
    +---> [Follow-up needed?] --Yes--> [Continue assisting]
    |
    +---> No --> [Confirm satisfaction]
    |
    v
[Close/Next steps]
```

## Key Conversation States

### State 1: Greeting
**User enters**: [Any input]
**Assistant should**: [Behavior description]
**Example response**: [Sample]

### State 2: Need Clarification
**Trigger**: [What indicates this state]
**Assistant should**: [Behavior description]
**Example response**: [Sample]

### State 3: Main Assistance
**User has clear need**: [Example]
**Assistant should**: [Behavior description]
**Example response**: [Sample]

### State 4: Error/Off-Topic
**User asks something outside scope**: [Example]
**Assistant should**: [Behavior description]
**Example response**: [Sample]

### State 5: Closing
**Trigger**: [When to close]
**Assistant should**: [Behavior description]
**Example response**: [Sample]

## Edge Case Handling

### Edge Case 1: User is frustrated
**How to detect**: [Signs]
**How to respond**: [Strategy]

### Edge Case 2: Ambiguous request
**How to detect**: [Signs]
**How to respond**: [Strategy]

### Edge Case 3: Out of scope request
**How to detect**: [Signs]
**How to respond**: [Strategy]

## Applying This to My Project
**How this design informs my capstone**: [Specific applications]

---

### Prompt Masters Deliverables Checklist

- [ ] Advanced prompting techniques documented with experiments
- [ ] Platform explored with features tested
- [ ] Custom assistant created and tested
- [ ] Conversation flow designed
- [ ] All techniques applied to project context
- [ ] Critical evaluation applied to AI outputs

---

## PART 3: REFLECTION (30-45 minutes)

### Step 2: Track Specialization Reflection

**Create:** `week-08-track-deep-dive/reflection.md`

```markdown
# Track Specialization Reflection

## Track Experience

### 1. My Track: [Code Builders / Prompt Masters]

**Why I chose this track (from Week 7)**:
[Reminder of your reasoning]

**After this week, do I still feel good about this choice?**:
[Yes/No/Mixed + explanation]

### 2. Skills Developed

**New capabilities I gained**:
1. [Skill 1] - [How I demonstrated it]
2. [Skill 2] - [How I demonstrated it]
3. [Skill 3] - [How I demonstrated it]

**Skills that still need work**:
1. [Skill needing practice] - [What would help]
2. [Another skill] - [What would help]

### 3. Challenges Encountered

**Biggest challenge this week**:
[Description]

**How I overcame it (or plan to)**:
[Solution/plan]

**What I learned from struggling**:
[Insight]

### 4. Critical Evaluation Application

**How I used critical evaluation skills this week**:
[Specific examples]

**Something I verified that was wrong**:
[Example if you caught AI error]

**My calibration is improving because**:
[Evidence of better judgment]

## Connection to Project

### My Capstone Idea (from Week 7)
[Reminder of your leading project idea]

### How This Week's Work Prepares Me

**Specific skills I'll use**:
1. [Skill] → [How it applies to project]
2. [Skill] → [How it applies to project]
3. [Skill] → [How it applies to project]

**Gaps I still need to fill**:
1. [Gap] - [Plan to address]
2. [Gap] - [Plan to address]

### Revised Project Confidence
**Before this week**: [Confidence 1-10]
**After this week**: [Confidence 1-10]
**What changed**: [Explanation]

## SAGE Checkpoint

**Current SAGE document count**: [Number]
**Can I explain why each document exists?**: [Yes/Mostly/Working on it]
**Most useful SAGE interaction this week**: [Description]

## Looking Ahead

**For Week 9 (Rapid Prototyping), I need to**:
1. [Preparation item]
2. [Preparation item]
3. [Preparation item]

**Questions I have going forward**:
1. [Question]
2. [Question]

## Key Takeaways

1. [Most important thing learned]
2. [Second key insight]
3. [Third key insight]
```

---

## GITHUB WORKFLOW

### Issue & Branch Setup

**1. Create Issue #8:**
```
**Title**: Week 8 - Track Specialization Deep Dive

**Track**: [Code Builders / Prompt Masters]

**Goal**: Develop track-specific skills for capstone project

**Tasks**:
- [ ] Add critical-evaluation.md to SAGE
- [ ] Complete environment/platform setup
- [ ] Complete core skill development exercises
- [ ] Create reference documentation
- [ ] Write comprehensive reflection

**Project Connection**:
**Leading project idea**: [From Week 7]
**Skills to develop**: [List 2-3 key skills needed]
```

**2. Create Branch:** `8-track-specialization`

**3. Create Folder Structure:**
```
csc113-portfolio/
├── week-08-track-deep-dive/
│   ├── README.md                    # Overview
│   ├── sage-integration.md          # SAGE enhancement
│   ├── reflection.md                # Comprehensive reflection
│   │
│   ├── # CODE BUILDERS FILES:
│   ├── environment-setup.md
│   ├── first-api-call.md
│   ├── structured-outputs.md
│   ├── api-reference.md
│   ├── [any code files].py
│   │
│   └── # PROMPT MASTERS FILES:
│       ├── advanced-prompting.md
│       ├── platform-exploration.md
│       ├── custom-assistant.md
│       └── conversation-design.md
```

**4. Update Main README:**
```markdown
### Week 8: Track Specialization Deep Dive
**Track**: [Code Builders / Prompt Masters]
**Focus**: Building skills for capstone project

**Key Accomplishments**:
- [Main thing 1]
- [Main thing 2]
- [Main thing 3]

**SAGE Documents**: [Current count]

**Skills Developed**:
1. [Skill 1]
2. [Skill 2]
3. [Skill 3]

**Project Readiness**: [Assessment]
```

**5. Create PR #8:**
- **Title**: `Closes #8 - Track Specialization: [Track Name]`
- **Description**: Include track, key accomplishments, project connection

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Sophisticated use of track-specific tools/techniques
- Clear evidence of experimentation and iteration
- Critical evaluation consistently applied
- SAGE integration is meaningful and tested

**Good (4.5-5.4):**
- Competent use of track tools/techniques
- Some experimentation visible
- Critical evaluation mentioned
- SAGE integration complete

**Needs Improvement (<4.5):**
- Superficial tool usage
- Minimal experimentation
- No critical evaluation
- SAGE integration incomplete

---

### Problem-Solving Process (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- All track tasks completed thoroughly
- Challenges documented with solutions
- Clear connection to capstone project
- Reference documentation is comprehensive

**Good (4.5-5.4):**
- Most track tasks completed
- Some challenges documented
- Project connection present
- Reference documentation adequate

**Needs Improvement (<4.5):**
- Track tasks incomplete
- No challenge documentation
- Unclear project connection
- Missing reference documentation

---

### Professional Communication (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- All documentation is polished and complete
- Code/prompts are well-organized and commented
- Clear explanations throughout
- GitHub workflow is clean

**Good (4.5-5.4):**
- Documentation meets requirements
- Code/prompts are readable
- Explanations present
- GitHub workflow functional

**Needs Improvement (<4.5):**
- Documentation incomplete
- Code/prompts poorly organized
- Weak explanations
- Messy GitHub workflow

---

### Critical Thinking & Ethics (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Deep reflection on track choice and skills
- Evidence of applying critical evaluation
- Honest assessment of capabilities and gaps
- Thoughtful project preparation

**Good (4.5-5.4):**
- Reflection addresses requirements
- Some critical evaluation visible
- Basic self-assessment
- Project connection mentioned

**Needs Improvement (<4.5):**
- Superficial reflection
- No critical evaluation
- No self-assessment
- Vague about project

---

## COMMON MISTAKES & TROUBLESHOOTING

### "I'm not sure if my environment is set up correctly"

**Fix (Code Builders):**
Run this test:
```python
print("Hello, World!")
import os
print("API key configured:", "API_KEY" in os.environ or "configured some other way")
```
If both work, you're ready.

### "My API call isn't working"

**Fix:**
1. Check API key is correct and not expired
2. Check you have API credits/quota
3. Check the exact error message
4. Try the simplest possible call first
5. Compare your code to official documentation examples

### "I'm not sure which platform to explore"

**Fix (Prompt Masters):**
- **Google AI Studio**: Best for learning, free, well-documented
- **Poe**: Good for comparing multiple models
- Start with what's recommended unless you have specific reason not to

### "My prompting techniques aren't making a difference"

**Fix:**
- Make sure you're testing on tasks complex enough to benefit
- Few-shot works best when examples are high-quality and relevant
- Chain-of-thought works best for reasoning tasks
- Try more dramatic changes, then refine

### "I don't see how this connects to my project"

**Fix:**
Ask yourself:
- What technical skill will my project require?
- What AI capabilities will I leverage?
- What could go wrong? (Critical evaluation!)

Force the connection—this week builds your project foundation.

---

## GETTING HELP

### Technical Issues
- **API problems**: Share error messages in discussion
- **Environment issues**: Describe your setup completely
- **Platform questions**: Check official documentation first

### Conceptual Questions
- **Which technique to use**: Describe your goal
- **How to evaluate outputs**: Apply the critical-evaluation framework
- **Project concerns**: Share in office hours

### Track Concerns
- **Wrong track choice?**: You can still adjust (talk to instructor)
- **Overwhelmed by options?**: Focus on project-relevant skills first
- **Comparing to other track?**: Each track has its own challenges

---

## LOOKING AHEAD

### Week 9 Preview: Rapid Prototyping

Next week, you'll create a first prototype of your capstone project:
- Turn your Week 7 idea into something tangible
- Apply this week's track-specific skills
- Get early feedback on your direction
- Iterate quickly

**What you need ready:**
- Finalized project idea (from Week 7)
- Track-specific skills (from this week)
- Development environment or platform (from this week)
- Critical evaluation mindset (always)

---

## FINAL CHECKLIST

### SAGE Integration
- [ ] Added critical-evaluation.md to SAGE
- [ ] Tested new context with relevant questions
- [ ] Documented current SAGE inventory

### Code Builders Track
- [ ] Environment setup documented and working
- [ ] First API call successful
- [ ] Structured output experiments complete
- [ ] API reference created
- [ ] All code tested
- [ ] Critical evaluation applied

### Prompt Masters Track
- [ ] Advanced prompting techniques practiced
- [ ] Platform deep dive complete
- [ ] Custom assistant created
- [ ] Conversation flow designed
- [ ] Critical evaluation applied

### Reflection & Documentation
- [ ] Comprehensive reflection completed
- [ ] Project connection articulated
- [ ] Skills and gaps identified
- [ ] Looking ahead section complete

### GitHub Workflow
- [ ] Issue #8 created and linked
- [ ] Branch `8-track-specialization` used
- [ ] All files in week-08-track-deep-dive/
- [ ] Main README updated
- [ ] PR #8 created

---

**You're now equipped with track-specific skills. Next week, you start building.**

> "This is where the preparation pays off. You've chosen your tools. Now it's time to use them."

> "Whether you're writing code or crafting prompts, the core skill is the same: systematic iteration toward something that works."

---

*Assignment created for CSC-113 AI Fundamentals*
*Week 8: Track Specialization Deep Dive - Mastering Your Path*
