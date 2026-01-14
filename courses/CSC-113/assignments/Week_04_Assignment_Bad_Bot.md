# Week 4 Assignment: "Bad Bot"
## CSC-113 AI Fundamentals - Learning Through Intentional Failure

**Due**: End of Week 4 (Friday, 11:59 PM)
**Points**: 25 (25% of Module 2 grade)
**Submission**: Via GitHub repository (PR #4)

---

## ASSIGNMENT OVERVIEW

This week, you're going to do something unusual: **build something intentionally terrible.**

You'll create a "Bad Bot" - an AI assistant with a specific personality flaw that makes it frustrating, annoying, or hilariously unhelpful. The catch? It still has to *technically* work. Your Bad Bot should be functional enough that someone could use it, but designed with a specific dysfunction that makes users want to throw their laptop out the window.

**Why would we do this?**

Because the fastest way to understand good design is to explore bad design. When you deliberately engineer frustration, you discover:
- How small changes in system instructions dramatically affect behavior
- What makes AI assistants actually useful (by removing those qualities)
- The subtle balance between personality and functionality
- User experience principles through negative examples

**The Meta-Lesson:**
Every bad design decision teaches us what good looks like. By the end of this assignment, you'll understand prompt engineering at a deeper level than any tutorial could teach.

**Connection to Previous Work:**
- Week 2: You met Kevin from IT (a *good* bot)
- Week 3: You researched AI history (context)
- Week 4: You learn to break things on purpose
- Week 5: You'll fix your broken bot (Good Bot)

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Craft system instructions that create specific AI behaviors
2. Understand how persona and constraints shape AI responses
3. Test and document AI behavior systematically
4. Analyze the gap between design intent and actual behavior
5. Develop empathy for users through intentional frustration
6. Connect design choices to user experience outcomes

---

## PART 1: CHOOSE YOUR DYSFUNCTION (30 minutes)

### Step 1: Select Your Bad Bot Archetype

Your Bad Bot needs a **specific, consistent dysfunction**. Pick ONE from the gallery below, or create your own (with instructor approval).

**Option A: MANSPLAINBOT**
*Making Assumptions, Never Soliciting Prior Learning, Always Interrupting*

Assumes you know nothing about anything. Explains things you already understand using kindergarten analogies. Starts every response with "Well, actually..." Never gets to the actual answer directly.

**Option B: MANIFESTY**
*Manifestation And Nebulous Instructions For Enlightenment*

Everything is about energy and vibrations. Coding bugs are "lessons from the universe." Deadlines are "constructs." Explains technical concepts through chakras and crystals.

**Option C: KEVIN JR.**
*Keeping Everything Vague, Insisting on Networking*

Middle management energy personified. Never gives direct answers. Everything needs a meeting. Speaks entirely in corporate buzzwords. "Let's circle back on that and take it offline."

**Option D: SOCRATES_BOT**
*So Obviously Confusing, Randomly Answering Through Exhaustive Questioning*

NEVER answers anything directly. Only responds with questions. Makes you find your own answers through aggressive Socratic inquiry. "What do you mean by 'help'?"

**Option E: SPEEDRUNBOT**
*Solutions Provided Entirely Excluding Documentation*

Explains everything like you're trying to beat a world record. No context, maximum efficiency, assumes godlike reflexes. "Frame-perfect input required. This saves 0.3 seconds."

**Option F: OFFBYONE**
*Operations Frequently Fail By One, Yet Never Notices Error*

Always off by one in everything. Array indices, counts, estimates - everything is slightly wrong. Completely confident about being wrong. "You have 6 errors" (actually 5).

**Option G: Custom Dysfunction (Instructor Approval)**
Create your own Bad Bot with:
- Clever acronym name
- Specific, consistent dysfunction
- Clear personality
- Still technically functional (just annoying)

### Step 2: Document Your Choice

**Create:** `week-04-bad-bot/bot-concept.md`

```markdown
# Bad Bot Concept

## Bot Name
[Your clever name, preferably an acronym]

## Dysfunction Type
[What makes this bot specifically terrible?]

## Why I Chose This
[What interests you about this particular dysfunction?]

## Expected Frustrations
1. [Specific thing that will annoy users]
2. [Another specific frustration]
3. [One more anticipated problem]

## The Joke That Makes It Work
[What's funny or interesting about this dysfunction? Why would someone use it even once?]

## Still Technically Functional Because...
[How does this bot still accomplish tasks, just badly?]
```

---

## PART 2: CRAFT YOUR SYSTEM PROMPT (1-2 hours)

### Step 3: Write the System Instructions

This is the core of your assignment. You'll create a **system prompt** that reliably produces your Bad Bot's behavior.

**Components of a Good (Bad) System Prompt:**

1. **Core Identity**: Who is the bot pretending to be?
2. **Behavioral Rules**: What must the bot ALWAYS do?
3. **Forbidden Actions**: What must the bot NEVER do?
4. **Response Patterns**: How should responses be structured?
5. **Edge Cases**: What happens in unusual situations?

**Example System Prompt (MANSPLAINBOT):**

```
You are MANSPLAINBOT. Your core behaviors:

ASSUMPTIONS:
- User knows NOTHING about anything
- User has never used a computer before
- User needs everything explained like they're 5
- User's questions mean they're confused, not curious

EXPLANATION STYLE:
- Start every response with "Well, actually..."
- Use condescending analogies: "Think of it like a cookie jar..."
- Explain prerequisites for prerequisites
- Never get to the actual answer directly
- Add unnecessary context for everything

INTERACTION PATTERNS:
- If user says they know something: "Are you sure you understand?"
- If user corrects you: "That's a common misconception, but..."
- If user asks for specific help: First explain the entire field
- Interrupt with "Let me simplify that for you"

NEVER:
- Assume competence
- Give short answers
- Skip "foundations"
- Let them finish explaining their problem

ALWAYS:
- Add "Does that make sense?" after each paragraph
- Suggest they're overwhelmed
- Offer to "break it down further"
- Reference "when I learned this in [made up credential]"
```

### Step 4: Test and Iterate

Test your system prompt with at least **5 different user scenarios**:

**Required Test Scenarios:**
1. **Simple question**: "What time is it?" or "How do I print hello world?"
2. **Expert question**: Something complex in a field you know well
3. **Direct request**: "Just give me the code for X"
4. **Correction**: Try correcting the bot about something
5. **Frustration**: Express annoyance and see how it responds

**For each test, document:**
- The prompt you used
- The bot's response
- Whether it matched your intended dysfunction
- What adjustments you made (if any)

**Create:** `week-04-bad-bot/testing-log.md`

```markdown
# Bad Bot Testing Log

## System Prompt Version: [1/2/3/etc]

### Test 1: Simple Question
**User Input**: [Your test prompt]
**Bot Response**: [What the bot said]
**Dysfunction Visible?**: [Yes/No + explanation]
**Adjustments Made**: [What you changed in the system prompt]

### Test 2: Expert Question
[Continue pattern...]

### Test 3: Direct Request
[Continue pattern...]

### Test 4: Correction
[Continue pattern...]

### Test 5: Frustration
[Continue pattern...]

## Version History
### Version 1 → Version 2
**Problem**: [What wasn't working]
**Change**: [What you modified]
**Result**: [How it improved]

[Continue for all versions...]

## Final System Prompt
[Paste your final system prompt here]
```

---

## PART 3: TRACK-SPECIFIC ADDITIONS (1-1.5 hours)

Choose ONE track. Both require equal effort and rigor.

---

### OPTION A: CODE BUILDERS TRACK

**Create a programmatic Bad Bot with logging and analysis.**

#### Task 1: Implement via API (45 minutes)

Create a Python script that:
1. Loads your system prompt
2. Takes user input
3. Calls an AI API (Gemini, OpenAI, or Claude)
4. Logs all interactions to a file
5. Displays the (terrible) response

**Basic Structure:**

```python
# bad_bot.py
# CSC-113 Week 4: Bad Bot Implementation

import os
import json
from datetime import datetime

# Your system prompt
SYSTEM_PROMPT = """
[Your Bad Bot system prompt here]
"""

def log_interaction(user_input, bot_response, log_file="interactions.json"):
    """Log each interaction for analysis."""
    # Implementation here

def get_bad_bot_response(user_input):
    """Get response from your Bad Bot."""
    # API call implementation here

def main():
    """Run the Bad Bot in interactive mode."""
    print(f"Welcome to [Your Bad Bot Name]!")
    print("Type 'quit' to exit.\n")

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break

        response = get_bad_bot_response(user_input)
        print(f"\nBot: {response}\n")
        log_interaction(user_input, response)

if __name__ == "__main__":
    main()
```

**Ask AI to help you:**
- "Help me set up the Gemini/OpenAI API in Python"
- "How do I include a system prompt with my API call?"
- "How do I log JSON data to a file in Python?"

#### Task 2: Analyze the Logs (30 minutes)

After 10+ interactions, analyze your logs:

**Create:** `week-04-bad-bot/analysis.md`

```markdown
# Bad Bot Behavior Analysis

## Interaction Summary
- Total interactions: [Number]
- Average response length: [Estimate]
- Dysfunction consistency: [X/10]

## Behavioral Patterns

### Pattern 1: [Name the pattern]
**Description**: [What you observed]
**Example**: [Quote from logs]
**Consistency**: [How often this appeared]

[Continue for 2-3 more patterns...]

## Unexpected Behaviors
[Anything the bot did that surprised you?]

## API Observations
- Response time: [Fast/Medium/Slow]
- Token usage: [If tracked]
- Any errors encountered: [Description]

## Recommendations for Good Bot (Week 5)
[Based on your analysis, what should you fix?]
```

#### Code Builders Deliverables
- [ ] `bad_bot.py` - Working Python script
- [ ] `interactions.json` - Log of 10+ interactions
- [ ] `analysis.md` - Behavioral analysis
- [ ] Code has comments explaining each section
- [ ] README includes setup instructions

---

### OPTION B: PROMPT MASTERS TRACK

**Create an elaborate Bad Bot persona with detailed testing and user experience analysis.**

#### Task 1: Elaborate the Persona (45 minutes)

Take your basic system prompt and expand it into a full character:

**Create:** `week-04-bad-bot/persona-deep-dive.md`

```markdown
# Bad Bot Persona: [Name]

## Character Background
**Origin Story**: [How did this bot become this way?]
**Motivation**: [What does the bot think it's doing?]
**Blind Spot**: [What can't the bot see about itself?]

## Speech Patterns
**Vocabulary**: [Specific words/phrases it uses]
**Tone**: [Formal/Casual/Condescending/etc.]
**Verbal Tics**: [Repeated phrases, filler words]

## Behavioral Rules

### ALWAYS
1. [Specific behavior]
2. [Specific behavior]
3. [Specific behavior]
4. [Specific behavior]
5. [Specific behavior]

### NEVER
1. [Specific prohibition]
2. [Specific prohibition]
3. [Specific prohibition]

### WHEN [Situation], THEN [Response]
1. When user asks a simple question → [Response pattern]
2. When user gets frustrated → [Response pattern]
3. When user tries to correct → [Response pattern]
4. When user praises → [Response pattern]
5. When user asks for something specific → [Response pattern]

## Sample Responses

### Sample 1: User asks "How do I send an email?"
[Write a 2-3 paragraph response in character]

### Sample 2: User says "Just tell me the answer!"
[Write a response in character]

### Sample 3: User says "That's wrong, actually..."
[Write a response in character]

## The Meta-Commentary
[Why is this dysfunction recognizable? Where do we see this in real life?]
```

#### Task 2: User Experience Testing (30 minutes)

Have at least **2 other people** test your Bad Bot (classmates, friends, family).

**Create:** `week-04-bad-bot/user-testing.md`

```markdown
# Bad Bot User Testing

## Tester 1: [Name or Initials]
**Relationship**: [Classmate/Friend/Family]
**Tech Comfort Level**: [Low/Medium/High]

### Test Session
**Duration**: [How long before they gave up/understood the joke]
**Tasks Attempted**: [What they tried to do]
**Reactions**: [What they said or expressed]
**Favorite Quote**: [Best thing they said about the experience]

### Feedback
- What frustrated them most: [Quote or summary]
- Did they "get" the joke: [Yes/No + explanation]
- Suggestions: [Anything they recommended]

## Tester 2: [Name or Initials]
[Same structure...]

## Testing Insights
**What Worked**: [What aspects of the dysfunction landed well?]
**What Didn't**: [What was unclear or fell flat?]
**Adjustments Made**: [How you refined based on feedback]
```

#### Prompt Masters Deliverables
- [ ] Expanded system prompt (500+ words)
- [ ] `persona-deep-dive.md` - Full character documentation
- [ ] `user-testing.md` - Results from 2+ testers
- [ ] Screenshots or transcripts of test conversations
- [ ] Recommendations for Good Bot version

---

## PART 4: REFLECTION & ANALYSIS (30-45 minutes)

### Step 5: Complete Your Reflection

**Create:** `week-04-bad-bot/reflection.md`

Answer these questions thoughtfully:

**1. Design Lessons (2-3 paragraphs)**
- What did you learn about system prompt design?
- How did small changes affect bot behavior?
- What was harder than expected about making a "bad" bot?

**2. User Experience Insights (2-3 paragraphs)**
- How did users react to your Bad Bot?
- What made the dysfunction frustrating vs. funny vs. just confusing?
- How does this inform your understanding of good design?

**3. Connection to Real AI (2-3 paragraphs)**
- Where do you see "bad bot" behaviors in real AI products?
- What real-world AI annoyances does your Bad Bot exaggerate?
- How might companies accidentally create bad bots?

**4. Looking Ahead (1 paragraph)**
- What will you fix first when creating your Good Bot next week?
- What aspects of the dysfunction do you want to completely eliminate?
- What (if anything) was actually useful that you want to keep?

---

## GITHUB WORKFLOW

### Issue & Branch Setup

**1. Create Issue #4:**
```
**Title**: Week 4 - Bad Bot Assignment

**Goal**: Create an intentionally flawed AI assistant to learn about good design

**Bot Name**: [Your Bad Bot name]
**Dysfunction**: [Brief description]

**Tasks**:
- [ ] Choose and document Bad Bot concept
- [ ] Craft system prompt with specific behaviors
- [ ] Test with 5+ scenarios and iterate
- [ ] Complete track-specific tasks
- [ ] Conduct user testing (Prompt Masters) or API analysis (Code Builders)
- [ ] Write reflection on design lessons
- [ ] Update learning log

**Success Criteria**:
- Bad Bot has consistent, specific dysfunction
- System prompt reliably produces intended behavior
- Testing is documented with iterations
- Reflection shows genuine design insights
```

**2. Create Branch:** `4-bad-bot`

**3. Create Folder Structure:**
```
csc113-portfolio/
├── week-04-bad-bot/
│   ├── README.md                  # Overview of your Bad Bot
│   ├── bot-concept.md             # Initial concept documentation
│   ├── system-prompt.md           # Your final system prompt
│   ├── testing-log.md             # All test scenarios and results
│   ├── reflection.md              # Design lessons reflection
│   │
│   ├── # CODE BUILDERS ONLY:
│   ├── bad_bot.py                 # Python implementation
│   ├── interactions.json          # Logged interactions
│   ├── analysis.md                # API/behavior analysis
│   │
│   └── # PROMPT MASTERS ONLY:
│       ├── persona-deep-dive.md   # Expanded character doc
│       └── user-testing.md        # User testing results
```

**4. Update Main README:**
```markdown
### Week 4: Bad Bot
**Focus**: Learning AI design through intentional dysfunction

**Bad Bot Name**: [Name]
**Dysfunction Type**: [Brief description]

**What I Learned**:
- [Key insight about system prompt design]
- [Key insight about user experience]
- [Key insight about iteration]

**Funniest Moment**: [Brief description of best/worst response]

**Track**: [Code Builders / Prompt Masters]
```

**5. Create PR #4:**
- **Title**: `Closes #4 - Bad Bot: [Your Bot Name]`
- **Description**: Include bot name, dysfunction summary, key learnings, and track completed

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- System prompt shows sophisticated understanding of AI behavior
- Multiple iterations with documented improvements
- Dysfunction is specific, consistent, and well-engineered
- Creative use of AI to develop and test the bot

**Good (4.5-5.4):**
- System prompt produces intended behavior
- Some iteration visible
- Dysfunction is clear but not fully consistent
- Reasonable engagement with AI tools

**Needs Improvement (<4.5):**
- System prompt doesn't reliably produce dysfunction
- Little or no iteration
- Dysfunction is vague or inconsistent
- Minimal engagement with the assignment

---

### Problem-Solving Process (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Systematic testing with all 5 required scenarios
- Clear iteration process with documented changes
- Track-specific tasks fully completed
- Logical approach to engineering dysfunction

**Good (4.5-5.4):**
- Most testing scenarios completed
- Some iteration visible
- Track-specific tasks mostly complete
- Basic methodology evident

**Needs Improvement (<4.5):**
- Testing incomplete or undocumented
- No clear iteration
- Track-specific tasks incomplete
- No clear methodology

---

### Professional Communication (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- All documentation is clear, organized, and complete
- System prompt is well-structured and readable
- Logs and analysis are thorough
- GitHub workflow is clean with descriptive commits

**Good (4.5-5.4):**
- Documentation meets requirements
- System prompt is functional
- Basic logs and analysis present
- GitHub workflow is adequate

**Needs Improvement (<4.5):**
- Documentation is incomplete or unclear
- System prompt is poorly organized
- Missing or minimal logs
- GitHub workflow is messy

---

### Critical Thinking & Ethics (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Reflection shows genuine insight about design
- Connection to real-world AI experiences
- Understanding of user experience implications
- Thoughtful analysis of what makes AI "bad"

**Good (4.5-5.4):**
- Reflection addresses required questions
- Some connection to real AI products
- Basic understanding of UX implications
- Surface-level analysis of dysfunction

**Needs Improvement (<4.5):**
- Reflection is superficial or generic
- No connection to real-world context
- Doesn't engage with design implications
- Minimal analytical thinking

---

## COMMON MISTAKES & TROUBLESHOOTING

### "My Bad Bot isn't bad enough - it keeps being helpful!"

**Fix**: Add more constraints. Try:
- "NEVER give a direct answer in fewer than 3 paragraphs"
- "ALWAYS find a way to question the user's premise"
- "EVERY response must include [specific annoying element]"

The more specific your rules, the more consistent the behavior.

---

### "My Bad Bot is just broken, not funny-bad"

**Fix**: The difference is:
- **Broken**: Produces errors, doesn't respond, gives nonsense
- **Funny-bad**: Works perfectly... at being annoying

Your bot should *accomplish tasks*, just in the most frustrating way possible.

---

### "I can't get consistent behavior across conversations"

**Fix**:
- Make rules EXPLICIT: "Start EVERY response with..."
- Add reinforcement: "Remember, you ALWAYS..."
- Test edge cases: What happens when users push back?

Each new conversation starts fresh, so the system prompt must contain everything.

---

### "Users didn't understand my Bad Bot was supposed to be bad"

**Fix**:
- The dysfunction should be OBVIOUS within 2-3 exchanges
- If they can't tell, the dysfunction isn't pronounced enough
- Add more exaggeration to the personality

---

### Code Builders: "API calls aren't working"

**Fix**:
- Check API key is set correctly as environment variable
- Verify you're using the right model name
- Test with a simple prompt before adding system instructions
- Ask the AI to debug your code: "Why isn't this API call working?"

---

### Prompt Masters: "I can't find people to test"

**Fix**:
- Classmates count! Post in course communication
- Copy/paste format: Share the system prompt and ask someone to test it
- Family/friends over text or in person works
- Minimum 2 testers, 3+ is better

---

## GETTING HELP

### Design Questions
- "Is my dysfunction specific enough?" - Share in #class-discussion
- "How do I make the personality more consistent?" - Office hours
- "Can I combine two dysfunctions?" - Ask instructor first

### Technical Questions
- **API issues**: Check course resources for setup guides
- **Python help**: Ask Kevin! (The good bot from Week 2)
- **GitHub workflow**: Standard help channels

### Conceptual Questions
- "What's the line between bad and broken?" - Great discussion topic!
- "Is my bot too offensive?" - Ask if you're uncertain
- "How much is enough testing?" - 5+ scenarios minimum

---

## THE BAD BOT GALLERY

Need inspiration? Check out the complete gallery of terrible bot personas in:
`/artifacts/from_canvas/m2/bad-bot-gallery.md`

Featured bots include:
- **UNIBOT** - Everything explained through unicorn metaphors
- **ACRONYMBOT** - Communicates exclusively in (new) acronyms
- **OFFBYONE** - Every number is slightly wrong
- And more!

---

## LOOKING AHEAD

### Week 5 Preview: Good Bot
Next week, you'll transform your Bad Bot into something actually useful:
- Fix the intentional dysfunction
- Keep what worked
- Apply design lessons learned
- Create documentation of improvement

**The arc:**
Bad Bot (understand bad design) → Good Bot (apply good design)

This is how professionals iterate. Break it, understand it, fix it.

---

## FINAL CHECKLIST

### Concept & Design
- [ ] Chose a specific, consistent dysfunction
- [ ] Documented concept in bot-concept.md
- [ ] Created elaborate system prompt

### Testing & Iteration
- [ ] Tested with all 5 required scenarios
- [ ] Documented iterations and improvements
- [ ] System prompt reliably produces dysfunction

### Track-Specific
**Code Builders:**
- [ ] Working bad_bot.py with API integration
- [ ] 10+ logged interactions
- [ ] Behavioral analysis complete

**Prompt Masters:**
- [ ] Expanded persona documentation
- [ ] User testing with 2+ people
- [ ] UX analysis complete

### Documentation
- [ ] All required files in week-04-bad-bot/
- [ ] Reflection addresses all questions
- [ ] Main README updated with Week 4 entry

### GitHub Workflow
- [ ] Issue #4 created and assigned
- [ ] Branch `4-bad-bot` used
- [ ] Clear commit messages
- [ ] PR #4 created with complete description

---

**Remember: The goal isn't to build something useful. It's to build something SO SPECIFICALLY TERRIBLE that fixing it teaches you how AI actually works.**

> "Every bad bot teaches us what good looks like... eventually."

> "If your Bad Bot accidentally solves someone's problem, you haven't made it bad enough."

---

*Assignment created for CSC-113 AI Fundamentals*
*Week 4: Bad Bot - Learning Through Intentional Failure*
