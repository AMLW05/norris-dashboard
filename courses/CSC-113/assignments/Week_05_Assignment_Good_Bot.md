# Week 5 Assignment: "Good Bot"
## CSC-113 AI Fundamentals - Iterating Toward Excellence

**Due**: End of Week 5 (Friday, 11:59 PM)
**Points**: 25 (25% of Module 3 grade)
**Submission**: Via GitHub repository (PR #5)

---

## ASSIGNMENT OVERVIEW

Last week, you built something intentionally terrible. This week, you fix it.

Your Week 4 Bad Bot taught you what NOT to do. Now you'll apply those lessons to create a **Good Bot** - an AI assistant that's genuinely helpful, well-designed, and aligned with user needs. You'll document the transformation process, compare before and after, and reflect on what makes AI assistants actually useful.

**The Big Lesson:**
Improvement isn't magic. It's systematic iteration based on understanding. You now know exactly what makes your Bad Bot frustrating. Remove those frustrations. Add what helps. Test. Repeat.

**What You're Learning:**
- Iterative design methodology
- Converting negative design patterns to positive ones
- A/B comparison and analysis
- User-centered AI design
- Professional documentation of improvement processes

**Connection to Previous Work:**
- Week 2: You met Kevin (example of good design)
- Week 4: You built a Bad Bot (understood bad design)
- Week 5: You iterate toward good design
- Week 6: You apply these skills to real research

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Transform a dysfunctional system prompt into an effective one
2. Document the iterative improvement process systematically
3. Conduct before/after comparative analysis
4. Apply user-centered design principles to AI assistants
5. Create an assistant that serves a genuine purpose
6. Reflect on the relationship between design choices and user experience

---

## PART 1: ANALYZE YOUR BAD BOT (30 minutes)

### Step 1: Review What Went Wrong

Before you can fix something, you need to understand precisely what's broken.

**Create:** `week-05-good-bot/bad-bot-analysis.md`

```markdown
# Bad Bot Analysis: What Went Wrong

## My Bad Bot Summary
**Name**: [Your Bad Bot name from Week 4]
**Core Dysfunction**: [1-sentence description]

## Specific Problems Identified

### Problem 1: [Name the problem]
**Behavior**: [What the Bad Bot does]
**Impact**: [Why this frustrates users]
**Root Cause**: [Which system prompt element causes this]
**Example**: [Quote from testing]

### Problem 2: [Name the problem]
[Same structure...]

### Problem 3: [Name the problem]
[Same structure...]

[Continue for 3-5 problems minimum]

## Patterns Across Problems
[What do these problems have in common? Is there a theme?]

## User Feedback Summary (If Applicable)
[What did testers say about the experience?]

## Priority Fixes
1. [Most important thing to fix first] - HIGH PRIORITY
2. [Second priority] - MEDIUM PRIORITY
3. [Third priority] - MEDIUM PRIORITY
4. [Nice to fix] - LOW PRIORITY

## What (If Anything) Worked?
[Was there anything about your Bad Bot that was actually useful or interesting?]
```

---

## PART 2: DESIGN YOUR GOOD BOT (1 hour)

### Step 2: Define Your Good Bot's Purpose

A good AI assistant has a clear purpose. It's not just "helpful" - it's helpful in specific, valuable ways.

**Create:** `week-05-good-bot/good-bot-design.md`

```markdown
# Good Bot Design Document

## Bot Name
[A new name for your improved bot - make it memorable]

## Core Purpose
[In one sentence: What does this bot help users do?]

## Target User
**Who is this for?**
[Describe your ideal user - student, professional, hobbyist, etc.]

**What problem do they have?**
[Specific challenge this bot addresses]

**What do they need?**
[Clear, specific assistance they're looking for]

## Design Principles

### Principle 1: [Name it]
**Description**: [What this means in practice]
**Anti-Pattern (from Bad Bot)**: [What this replaces from Week 4]
**Implementation**: [How the system prompt will enforce this]

### Principle 2: [Name it]
[Same structure...]

### Principle 3: [Name it]
[Same structure...]

[Continue for 3-5 design principles]

## Personality Characteristics
**Tone**: [Friendly/Professional/Casual/etc.]
**Style**: [Concise/Detailed/Adaptive/etc.]
**Quirks (if any)**: [Anything that makes it memorable but helpful]

## What Makes This Bot GOOD?
1. [Specific quality that helps users]
2. [Another helpful quality]
3. [Third helpful quality]

## Comparison: Bad Bot vs Good Bot

| Aspect | Bad Bot Did This | Good Bot Will Do This |
|--------|------------------|----------------------|
| Response length | [Bad behavior] | [Good behavior] |
| User questions | [Bad behavior] | [Good behavior] |
| Giving answers | [Bad behavior] | [Good behavior] |
| Handling confusion | [Bad behavior] | [Good behavior] |
| Overall tone | [Bad behavior] | [Good behavior] |
```

### Step 3: Craft Your Good Bot System Prompt

Write a system prompt that embodies your design principles.

**Tips for Good System Prompts:**
- Be specific about desired behaviors
- Include examples of good responses
- Define how to handle edge cases
- Balance personality with usefulness
- Keep user needs central

**Create:** `week-05-good-bot/system-prompt.md`

```markdown
# Good Bot System Prompt

## Version: 1.0

## System Instructions

[Your complete system prompt here - aim for 300-500 words]

```

Include:
- Core identity and purpose
- Communication style guidelines
- Behavioral rules (what to do, what not to do)
- Response format preferences
- Edge case handling

```

## Design Rationale

### Why This Identity?
[Explain your choice of persona]

### Why These Rules?
[Connect rules to design principles]

### What I Removed from Bad Bot
[Specific elements you eliminated]

### What I Added
[New elements that make it helpful]
```

---

## PART 3: TEST AND ITERATE (1-1.5 hours)

### Step 4: Systematic Testing

Test your Good Bot with the **same 5 scenarios** you used for Bad Bot, plus 3 new ones.

**Required Test Scenarios:**

**Same as Week 4 (for direct comparison):**
1. Simple question
2. Expert question
3. Direct request
4. Correction attempt
5. Expressing frustration

**New scenarios:**
6. Multi-step task: Ask for help with something requiring multiple steps
7. Follow-up questions: Have a multi-turn conversation
8. Ambiguous request: Give a vague prompt and see how it handles it

**Create:** `week-05-good-bot/testing-log.md`

```markdown
# Good Bot Testing Log

## Comparative Testing: Same Scenarios as Bad Bot

### Scenario 1: Simple Question
**Prompt**: [Same prompt you used in Week 4]

**Bad Bot Response (Week 4)**:
[Copy from Week 4 logs]

**Good Bot Response (Week 5)**:
[New response]

**Improvement Analysis**:
- What's different: [Specific changes]
- What's better: [Specific improvements]
- Remaining issues: [Anything still problematic]
- User experience: [How would a user feel?]

### Scenario 2: Expert Question
[Same structure...]

[Continue for all 5 comparative scenarios]

---

## New Testing Scenarios

### Scenario 6: Multi-Step Task
**Prompt**: [Your test prompt]
**Response**: [Bot response]
**Assessment**: [How well did it handle the complexity?]

### Scenario 7: Follow-Up Questions
**Conversation**:
User: [First prompt]
Bot: [Response]
User: [Follow-up]
Bot: [Response]
User: [Another follow-up]
Bot: [Response]

**Assessment**: [Did it maintain context? Stay helpful?]

### Scenario 8: Ambiguous Request
**Prompt**: [Intentionally vague request]
**Response**: [How bot handled ambiguity]
**Assessment**: [Did it ask for clarification? Make assumptions? Handle well?]

---

## Iteration History

### Version 1 → Version 2
**Issue Found**: [Problem in testing]
**Change Made**: [What you modified]
**Result**: [Improvement observed]

[Continue for each iteration...]

---

## Final Assessment
**Overall Improvement from Bad Bot**: [1-10 scale]
**Strengths**: [What this bot does well]
**Remaining Weaknesses**: [What could still improve]
**Ready for Real Use?**: [Yes/No + explanation]
```

---

## PART 4: TRACK-SPECIFIC ADDITIONS (1-1.5 hours)

Choose ONE track. Both require equal effort and rigor.

---

### OPTION A: CODE BUILDERS TRACK

**Enhance your Good Bot implementation with features and real-world testing.**

#### Task 1: Upgraded Implementation (45 minutes)

Enhance your Week 4 code to create a polished Good Bot:

**Required Features:**
1. Good Bot system prompt (the new one)
2. Conversation history (maintain context across turns)
3. Response quality logging
4. Simple error handling
5. User-friendly interface

**Enhanced Structure:**

```python
# good_bot.py
# CSC-113 Week 5: Good Bot Implementation

import os
import json
from datetime import datetime

# Your Good Bot system prompt
SYSTEM_PROMPT = """
[Your Good Bot system prompt here]
"""

class ConversationHistory:
    """Maintain conversation context."""
    def __init__(self):
        self.messages = []

    def add_message(self, role, content):
        self.messages.append({"role": role, "content": content})

    def get_context(self):
        return self.messages

    def clear(self):
        self.messages = []

def get_good_bot_response(user_input, history):
    """Get response from Good Bot with conversation history."""
    # Implementation with history context

def log_quality_metrics(user_input, bot_response, user_rating=None):
    """Log interaction with optional quality rating."""
    # Implementation

def main():
    """Run the Good Bot in interactive mode."""
    print(f"Welcome to [Your Good Bot Name]!")
    print("I'm here to help with [purpose]. Type 'quit' to exit.\n")
    print("After each response, you can rate it 1-5 (optional).\n")

    history = ConversationHistory()

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break

        response = get_good_bot_response(user_input, history)
        print(f"\nBot: {response}\n")

        history.add_message("user", user_input)
        history.add_message("assistant", response)

        # Optional quality rating
        rating = input("Rate this response 1-5 (or press Enter to skip): ")
        if rating.isdigit():
            log_quality_metrics(user_input, response, int(rating))
        else:
            log_quality_metrics(user_input, response)

if __name__ == "__main__":
    main()
```

#### Task 2: Comparative Analysis (30 minutes)

Run both Bad Bot and Good Bot scripts and compare programmatically.

**Create:** `week-05-good-bot/code-comparison.md`

```markdown
# Code Implementation Comparison

## Architectural Differences

### Bad Bot Implementation
- Features: [List]
- Complexity: [Simple/Medium/Complex]
- User experience: [Description]

### Good Bot Implementation
- Features: [List]
- Complexity: [Simple/Medium/Complex]
- User experience: [Description]

## Response Quality Metrics

### Response Length Comparison
| Scenario | Bad Bot (chars) | Good Bot (chars) | Difference |
|----------|-----------------|------------------|------------|
| Simple Q | [Number] | [Number] | [+/- %] |
| Expert Q | [Number] | [Number] | [+/- %] |
| Direct Req | [Number] | [Number] | [+/- %] |

### User Ratings (if collected)
- Average Bad Bot rating: [X/5]
- Average Good Bot rating: [X/5]
- Improvement: [+X points]

## Code Quality Observations
- What code changes were needed for Good Bot?
- How did conversation history improve responses?
- What would you add with more time?

## Deployment Readiness
- Could this Good Bot be used by real users?
- What's missing before deployment?
- Estimated effort to production-ready: [Low/Medium/High]
```

#### Code Builders Deliverables
- [ ] `good_bot.py` - Enhanced implementation with history
- [ ] `quality_log.json` - Interaction logs with optional ratings
- [ ] `code-comparison.md` - Analysis of implementation differences
- [ ] Both bad_bot.py and good_bot.py are runnable
- [ ] Code is well-commented and organized

---

### OPTION B: PROMPT MASTERS TRACK

**Create a polished, portfolio-ready Good Bot with detailed UX analysis.**

#### Task 1: Create Custom Assistant (45 minutes)

Build your Good Bot as a proper custom assistant using a no-code platform.

**Platform Options:**
- Gemini Gem (recommended - free)
- Custom GPT (if you have access)
- Poe bot
- Other platforms with instructor approval

**Create:** `week-05-good-bot/custom-assistant-guide.md`

```markdown
# Custom Assistant: [Good Bot Name]

## Platform
[Which platform you used]

## Access
[How to access this assistant - link or instructions]

## System Instructions
[Full system prompt as implemented]

## Configuration Details
- Model: [Which model backend]
- Temperature: [If adjustable]
- Other settings: [Anything else configured]

## Sample Conversations

### Sample 1: Typical Use Case
**User Goal**: [What they're trying to do]
**Conversation**:
[Full conversation transcript]
**Outcome**: [Did it help?]

### Sample 2: Edge Case
**User Goal**: [Unusual request]
**Conversation**:
[Full conversation transcript]
**Outcome**: [How it handled it]

### Sample 3: Multi-Turn Interaction
[Longer conversation showing context maintenance]

## Comparison: Standalone Prompt vs Custom Assistant
| Aspect | Just Pasting Prompt | Custom Assistant |
|--------|---------------------|------------------|
| Convenience | [Assessment] | [Assessment] |
| Consistency | [Assessment] | [Assessment] |
| User experience | [Assessment] | [Assessment] |
| Limitations | [Issues] | [Issues] |
```

#### Task 2: User Experience Documentation (30 minutes)

Create documentation that would help someone else use your Good Bot.

**Create:** `week-05-good-bot/user-guide.md`

```markdown
# User Guide: [Good Bot Name]

## What This Assistant Does
[2-3 sentences describing the purpose]

## Who This Is For
[Describe ideal users]

## Getting Started

### Step 1: [First action]
[Instructions]

### Step 2: [Next action]
[Instructions]

[Continue as needed]

## Best Practices

### Do This
- [Effective way to use the assistant]
- [Another good practice]
- [Tips for best results]

### Don't Do This
- [Common mistake to avoid]
- [Another pitfall]
- [What doesn't work well]

## Example Conversations

### Example 1: [Common Task]
**What you want**: [Goal]
**What to say**: [Example prompt]
**What you'll get**: [Expected response]

### Example 2: [Another Task]
[Same structure...]

## Troubleshooting

### "The assistant isn't helping with X"
**Why**: [Explanation]
**Solution**: [What to do instead]

### "Responses are too long/short"
**Why**: [Explanation]
**Solution**: [How to get different length responses]

## Limitations
- [What this bot doesn't do well]
- [Topics outside its scope]
- [When to use a different tool]

## Feedback
[How users can suggest improvements - hypothetical or real]
```

#### Prompt Masters Deliverables
- [ ] Custom assistant created on platform
- [ ] `custom-assistant-guide.md` - Full documentation
- [ ] `user-guide.md` - User-facing guide
- [ ] Screenshots of sample conversations
- [ ] Before/after comparison with Bad Bot

---

## PART 5: REFLECTION & SYNTHESIS (30-45 minutes)

### Step 5: Comprehensive Reflection

**Create:** `week-05-good-bot/reflection.md`

```markdown
# Good Bot Reflection

## The Transformation Journey

### 1. From Bad to Good: Key Changes (2-3 paragraphs)
What were the most important changes you made?
- Which Bad Bot behaviors did you completely reverse?
- Which changes had the biggest impact on user experience?
- Were any changes harder to implement than expected?

### 2. Design Principles Discovered (2-3 paragraphs)
What design principles emerged from this process?
- What makes an AI assistant "good" versus "functional"?
- How do personality and helpfulness balance?
- What would you do differently if starting from scratch?

### 3. The Iteration Process (2-3 paragraphs)
What did you learn about improvement through iteration?
- How many versions did your Good Bot go through?
- Which iteration made the biggest difference?
- How did testing inform your changes?

### 4. Connection to Real AI Products (2-3 paragraphs)
How does this apply to AI products you use?
- Can you now identify "Bad Bot" behaviors in real products?
- What makes your favorite AI assistants good?
- What would you fix in an AI you use regularly?

### 5. Skills Developed (1-2 paragraphs)
What skills did you develop through Weeks 4-5?
- System prompt engineering
- Testing methodology
- User experience thinking
- Iterative design

## Before & After: The Numbers

| Metric | Bad Bot (Week 4) | Good Bot (Week 5) |
|--------|------------------|-------------------|
| User frustration level | [High/Medium/Low] | [High/Medium/Low] |
| Task completion rate | [Estimate %] | [Estimate %] |
| Average response usefulness | [1-10] | [1-10] |
| Would recommend to friend | [Yes/No] | [Yes/No] |

## Key Takeaways
1. [Most important lesson learned]
2. [Second key insight]
3. [Third key insight]

## Looking Ahead
How will you apply these lessons?
- In future AI tool usage
- In evaluating AI products
- In building future assistants
```

---

## GITHUB WORKFLOW

### Issue & Branch Setup

**1. Create Issue #5:**
```
**Title**: Week 5 - Good Bot Assignment

**Goal**: Transform Bad Bot into a genuinely helpful assistant through iteration

**Bad Bot Name**: [From Week 4]
**Good Bot Name**: [New name]
**Core Improvement**: [Main change in 1 sentence]

**Tasks**:
- [ ] Analyze Bad Bot problems systematically
- [ ] Design Good Bot with clear principles
- [ ] Craft improved system prompt
- [ ] Test with 8+ scenarios (5 comparative + 3 new)
- [ ] Complete track-specific enhancements
- [ ] Document the transformation process
- [ ] Write comprehensive reflection

**Success Criteria**:
- Clear improvement from Bad Bot
- Systematic testing with documented iterations
- Good Bot serves a genuine purpose
- Reflection shows deep understanding of design
```

**2. Create Branch:** `5-good-bot`

**3. Create Folder Structure:**
```
csc113-portfolio/
├── week-05-good-bot/
│   ├── README.md                    # Overview of transformation
│   ├── bad-bot-analysis.md          # Analysis of Week 4 problems
│   ├── good-bot-design.md           # Design document
│   ├── system-prompt.md             # Final system prompt
│   ├── testing-log.md               # All testing documentation
│   ├── reflection.md                # Comprehensive reflection
│   │
│   ├── # CODE BUILDERS ONLY:
│   ├── good_bot.py                  # Enhanced implementation
│   ├── quality_log.json             # Interaction logs
│   ├── code-comparison.md           # Implementation analysis
│   │
│   └── # PROMPT MASTERS ONLY:
│       ├── custom-assistant-guide.md # Platform implementation
│       └── user-guide.md             # User documentation
```

**4. Update Main README:**
```markdown
### Week 5: Good Bot
**Focus**: Iterating from dysfunction to excellence

**Transformation**: [Bad Bot Name] → [Good Bot Name]

**Key Changes Made**:
- [Most important fix]
- [Second major improvement]
- [Third improvement]

**Design Principles**:
1. [First principle]
2. [Second principle]
3. [Third principle]

**Track**: [Code Builders / Prompt Masters]

**Would I Use This Bot?**: [Yes/No + why]
```

**5. Create PR #5:**
- **Title**: `Closes #5 - Good Bot: [Bot Name]`
- **Description**: Include transformation summary, key improvements, testing results

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Clear, measurable improvement from Bad Bot
- System prompt shows sophisticated design
- Multiple iterations with documented refinements
- Creative use of AI capabilities

**Good (4.5-5.4):**
- Noticeable improvement from Bad Bot
- System prompt produces helpful behavior
- Some iteration visible
- Reasonable AI tool usage

**Needs Improvement (<4.5):**
- Minimal improvement from Bad Bot
- System prompt still produces problems
- Little evidence of iteration
- Superficial engagement

---

### Problem-Solving Process (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Thorough analysis of Bad Bot problems
- Clear design principles and rationale
- Systematic testing with all 8 scenarios
- Logical improvement methodology

**Good (4.5-5.4):**
- Basic analysis of problems
- Design document complete
- Most testing scenarios done
- Reasonable methodology

**Needs Improvement (<4.5):**
- Superficial problem analysis
- Design document incomplete
- Testing minimal
- No clear methodology

---

### Professional Communication (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- All documentation is polished and complete
- Clear before/after comparisons
- Track-specific work is comprehensive
- GitHub workflow is clean

**Good (4.5-5.4):**
- Documentation meets requirements
- Comparisons present
- Track-specific work adequate
- GitHub workflow functional

**Needs Improvement (<4.5):**
- Documentation incomplete
- Missing comparisons
- Track-specific work minimal
- GitHub workflow messy

---

### Critical Thinking & Ethics (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Deep reflection on design principles
- Insightful connection to real AI products
- Clear articulation of what makes AI "good"
- Evidence of genuine learning

**Good (4.5-5.4):**
- Reflection addresses requirements
- Some real-world connection
- Basic understanding of good design
- Some learning evident

**Needs Improvement (<4.5):**
- Superficial reflection
- No real-world connection
- Vague about design principles
- Minimal insight demonstrated

---

## COMMON MISTAKES & TROUBLESHOOTING

### "My Good Bot is just my Bad Bot with the dysfunction removed"

**Fix**: Removing problems isn't the same as adding value. A Good Bot should:
- Have a clear, specific purpose
- Actively help (not just avoid hurting)
- Have personality that enhances usefulness

Think about what Kevin from IT does RIGHT, not just what your Bad Bot did WRONG.

---

### "The improvement isn't dramatic enough"

**Fix**: Try these approaches:
- Completely rewrite the system prompt (don't just edit)
- Add specific helpful behaviors (not just remove bad ones)
- Focus the bot on a specific task it can excel at
- Add examples of ideal responses in the prompt

---

### "I can't get consistent helpful behavior"

**Fix**:
- Be MORE specific in your system prompt
- Include example dialogues showing ideal responses
- Add explicit rules for common situations
- Test edge cases and add handling for them

---

### "My comparative testing shows the same responses"

**Fix**: This means your prompts were too different or your changes weren't significant enough.
- Use EXACT same test prompts from Week 4
- Make sure you're using the new system prompt
- Check that the AI is actually following new instructions
- Iterate more aggressively on the system prompt

---

### Code Builders: "Conversation history makes responses worse"

**Fix**:
- Limit history to last 5-10 exchanges
- Include system prompt with every API call
- Make sure history format matches API requirements
- Test with and without history to understand impact

---

### Prompt Masters: "Custom assistant platform is limiting"

**Fix**:
- Work within platform constraints - that's real-world
- Document the limitations
- Suggest improvements in your reflection
- Focus on what you CAN control

---

## GETTING HELP

### Design Questions
- "Is my Good Bot good enough?" - Share in class discussion
- "How specific should my purpose be?" - More specific is usually better
- "Can I keep some Bad Bot personality?" - Only if it adds value, not frustration

### Technical Questions
- **API/Code issues**: Ask Kevin, check course resources
- **Platform limitations**: Office hours for alternatives
- **Testing methodology**: Peer discussion encouraged

### Conceptual Questions
- "What makes AI truly helpful?" - Great discussion topic
- "Balance between personality and usefulness?" - Depends on context
- "How do real companies iterate?" - Research and share findings

---

## LOOKING AHEAD

### Week 6 Preview: Holiday Shopping Research
Next week, you'll apply your prompt engineering skills to real-world research:
- Comparing AI tools for practical tasks
- Iterating prompts for specific outcomes
- Verifying AI-generated information
- Creating actionable recommendations

**Skills from Weeks 4-5 that you'll use:**
- Systematic testing methodology
- Prompt iteration for improvement
- Understanding AI capabilities and limitations
- Documenting process and outcomes

---

## FINAL CHECKLIST

### Analysis & Design
- [ ] Analyzed Bad Bot problems systematically
- [ ] Created design document with clear principles
- [ ] Defined specific purpose for Good Bot
- [ ] Documented before/after comparison

### Implementation
- [ ] Created improved system prompt
- [ ] Good Bot produces genuinely helpful responses
- [ ] Tested with all 8 required scenarios
- [ ] Iterated based on testing results

### Track-Specific
**Code Builders:**
- [ ] Enhanced Python implementation with history
- [ ] Quality metrics logged
- [ ] Code comparison analysis complete

**Prompt Masters:**
- [ ] Custom assistant created on platform
- [ ] User guide documentation complete
- [ ] Sample conversations captured

### Documentation
- [ ] All required files in week-05-good-bot/
- [ ] Comprehensive reflection completed
- [ ] Main README updated with Week 5 entry

### GitHub Workflow
- [ ] Issue #5 created and assigned
- [ ] Branch `5-good-bot` used
- [ ] Clear commit messages
- [ ] PR #5 created with transformation summary

---

**You've gone from intentional failure to intentional excellence. That's the iteration process professionals use every day.**

> "Good design doesn't happen by accident. It happens by learning from failure, testing hypotheses, and iterating with purpose."

> "The distance between Bad Bot and Good Bot is measured in iterations, not inspiration."

---

*Assignment created for CSC-113 AI Fundamentals*
*Week 5: Good Bot - Iterating Toward Excellence*
