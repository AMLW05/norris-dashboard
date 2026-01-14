# Week 2 Assignment: "Meet Kevin & SAGE"
## CSC-113 AI Fundamentals - Your First AI Collaborations

**Due**: End of Week 2 (Friday, 11:59 PM)  
**Points**: 25 (25% of Module 1 grade)  
**Submission**: Via GitHub repository (PR #2)

---

## ASSIGNMENT OVERVIEW

This week, you're meeting your AI partners for the semester and beginning work on SAGE: your **Study Assistant & Guide Engine**. You'll experiment with different AI tools, document your interactions, and start building a personal prompt library.

**What You're Learning:**
- How different AI tools compare
- Basic prompt engineering principles
- Resource management (rate limits!)
- Documentation of AI collaboration
- Setting up your SAGE workspace

**Two Paths, Same Destination:**
- **All Students**: Compare AI tools, create SAGE workspace, build prompt library
- **Code Builders Track**: Additional technical setup (Codespaces, Python basics)
- **Prompt Masters Track**: Additional no-code agent creation

Choose your track based on interest and comfort level. You can switch tracks until Week 6.

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Compare at least 3 different AI tools systematically
2. Understand rate limits and cost management
3. Practice basic prompt engineering
4. Document AI interactions clearly
5. Initialize your SAGE workspace structure
6. Create your first prompt library entries

---

## PART 1: CORE ASSIGNMENT (ALL STUDENTS)

### Overview
Everyone completes this section regardless of track. This establishes fundamental AI literacy.

---

### TASK 1: Meet the AI Tools (1 hour)

You'll test three free AI tools and compare their capabilities:

**Required Tools to Test:**
1. **Gemini 2.5 Flash** (via Google AI Studio)
   - Go to [aistudio.google.com](https://aistudio.google.com)
   - Sign in with Google account
   - Start a new chat

2. **Claude** (free tier)
   - Go to [claude.ai](https://claude.ai)
   - Create account (email or Google)
   - Start conversation

3. **ChatGPT 3.5** (free tier)
   - Go to [chat.openai.com](https://chat.openai.com)
   - Create account
   - Start new chat

**Test Prompts (use the same prompts on all three tools):**

**Prompt 1: Simple Explanation**
```
Explain what artificial intelligence is to someone who has never heard of it before. 
Keep it under 100 words.
```

**Prompt 2: Creative Task**
```
Write a haiku about debugging code at 2 AM.
```

**Prompt 3: Information Retrieval**
```
List 5 key differences between machine learning and traditional programming. 
Format as a comparison table.
```

**Prompt 4: Problem-Solving**
```
I need to learn GitHub for a college course. Create a 30-day learning plan with 
specific daily tasks. Keep each day under 30 minutes of work.
```

**What to Document:**
For each tool, record:
- Response time (fast/medium/slow)
- Answer quality (excellent/good/okay/poor) - with brief explanation
- Formatting (how well-structured was the output?)
- Any unexpected behaviors
- Overall impression

**Your Mission:** After testing, write 2-3 paragraphs comparing the tools. Which would you use for what tasks? Why?

---

### TASK 2: Meet Kevin from IT (30 minutes)

"Kevin from IT" is our course's AI persona - a helpful, non-judgmental coding assistant. This week, Kevin is played by Gemini Flash.

**Kevin's Personality:**
- Always helpful, never condescending
- Explains technical concepts clearly
- Admits when unsure
- Asks clarifying questions
- Celebrates your progress

**Your Introduction to Kevin:**

Open Gemini AI Studio and start a new chat with this **system instruction**:

```
You are Kevin from IT, a friendly and patient coding assistant helping a college student 
learn AI and programming. You are:
- Always encouraging and never condescending
- Clear in explanations, using analogies when helpful
- Honest when you don't know something
- Quick to celebrate progress, even small wins
- Patient with questions, no matter how basic

When the student makes mistakes, treat them as learning opportunities. When they succeed, 
celebrate with them. Your goal is to build confidence while teaching well.
```

**Then have this conversation with Kevin:**

**You:** "Hi Kevin! I'm starting CSC-113 and I've never worked with AI tools before. 
Can you explain what you do and how you can help me this semester?"

**You:** [After Kevin responds] "What should I know about working with AI assistants 
like you? Any tips for getting good results?"

**You:** [After Kevin responds] "Thanks! Here's my first real question: I need to 
create a folder structure in GitHub for organizing my SAGE project. What would you recommend?"

**What to Document:**
- Save the entire conversation (screenshots or copy/paste)
- Write 1 paragraph reflecting on Kevin's helpfulness
- Note any surprising or particularly useful responses

**Rate Limit Reality Check:**
After about 10 prompts to Gemini Flash, you might notice it gets slower. That's because the free tier has limits. **This is intentional** - you're learning to work within real-world constraints.

**When You Hit Rate Limits:**
- Switch to Claude or ChatGPT (backup tools)
- Take a break and come back later
- Use the Gemini Flash-Lite model (lower cost, faster response)
- This is a teaching moment about resource management!

---

### TASK 3: Create Your SAGE Workspace (45 minutes)

SAGE stands for **Study Assistant & Guide Engine** - your personalized AI learning companion.

**GitHub Workflow:**
1. **Create Issue #2**: "Set up SAGE workspace structure"
   ```
   **Goal**: Initialize my SAGE workspace with proper organization
   
   **Tasks**:
   - [ ] Create folder structure
   - [ ] Document SAGE purpose
   - [ ] Initialize prompt library
   - [ ] Complete tool comparison
   - [ ] Add Week 2 learning log
   
   **Success Criteria**: SAGE workspace is organized and documented
   ```

2. **Create Branch**: `2-sage-setup`

3. **Create Folder Structure** in your repository:
   ```
   csc113-portfolio/
   ├── README.md
   ├── week-02-sage/
   │   ├── README.md (What is SAGE? Why am I building it?)
   │   ├── tool-comparison.md (Your findings from Task 1)
   │   ├── kevin-conversation.md (Your Kevin chat from Task 2)
   │   └── prompt-library.md (Your first 5+ prompts)
   └── [other weeks...]
   ```

**What to Put in Each File:**

**week-02-sage/README.md:**
```markdown
# SAGE: My Study Assistant & Guide Engine

## What is SAGE?
[Explain in your own words what SAGE is and why you're building it]

## How I'll Use SAGE This Semester
[List 3-5 specific ways you plan to use AI tools to help with your studies]

## Tools I'm Using
- **Primary**: [Your preferred AI tool] - [Why you chose it]
- **Secondary**: [Backup tool] - [When you'll use this instead]
- **For Special Tasks**: [Any specialized tools]

## Ground Rules for Working with AI
[Write 3-5 personal guidelines for when/how you'll use AI ethically and effectively]

---
*Created: [Date]*  
*Last Updated: [Date]*
```

**week-02-sage/tool-comparison.md:**
```markdown
# AI Tool Comparison - Week 2

## Test Date: [Today's date]

## Tools Tested
1. Gemini 2.5 Flash
2. Claude (free)
3. ChatGPT 3.5

## Test Results

### Prompt 1: Simple Explanation Task
**Prompt**: [Paste prompt]

| Tool | Response Time | Quality | Notes |
|------|---------------|---------|-------|
| Gemini | [fast/medium/slow] | [score/5] | [Your notes] |
| Claude | [fast/medium/slow] | [score/5] | [Your notes] |
| ChatGPT | [fast/medium/slow] | [score/5] | [Your notes] |

[Repeat for all 4 test prompts]

## Comparative Analysis
[Write 2-3 paragraphs comparing the tools. Which excelled at what? 
 Which would you use for which tasks? Why?]

## My Choice for Primary Tool
**Tool**: [Your selection]  
**Reasoning**: [Why you picked this tool]  
**Backup Plan**: [What you'll do when you hit rate limits]
```

**week-02-sage/kevin-conversation.md:**
```markdown
# My First Conversation with Kevin from IT

## Date: [Today's date]

## System Instructions Used
[Paste the Kevin system instruction]

## Conversation Transcript
[Paste or screenshot your complete conversation with Kevin]

## Reflection
[Write 1-2 paragraphs about this interaction:
 - What was helpful?
 - What surprised you?
 - How does Kevin compare to just "regular" ChatGPT?
 - Will you use this persona approach in the future?]
```

**week-02-sage/prompt-library.md:**
```markdown
# My Prompt Library

This is my collection of useful prompts organized by purpose.

## Explanations & Learning
1. **Simple Concept Explanation**
   ```
   [Your prompt]
   ```
   Used for: [When this is helpful]  
   Works best with: [Which AI tool]

[Continue for all prompts you found useful]

## Creative Tasks
[At least 1 prompt here]

## Information Retrieval
[At least 1 prompt here]

## Problem-Solving
[At least 1 prompt here]

## Custom Prompts I Created
[Any prompts you invented yourself]

---
*Total Prompts: [Number]*  
*Last Updated: [Date]*
```

4. **Update Your Main README.md**:

Add Week 2 to your learning log:
```markdown
#### Week 2: AI Tools & First Collaborations
**Date**: [Date range]

**What I learned this week:**
- [Your learnings about different AI tools]
- [Your insights about prompt engineering]
- [Your discoveries about rate limits]

**What challenged me:**
- [Honest challenges]

**What I'm proud of:**
- [Your accomplishments]

**Questions I still have:**
- [Your questions]
```

5. **Create Pull Request #2**:
   - Title: `Closes #2 - Set up SAGE workspace with tool comparisons`
   - Description following PR template
   - Request review from instructor

---

## PART 2: TRACK-SPECIFIC ADDITIONS

Choose **ONE** track to complete. You can switch tracks until Week 6.

---

### OPTION A: CODE BUILDERS TRACK (Additional 1.5 hours)

**For students interested in programming, APIs, and technical implementation.**

#### Additional Task 1: Set Up GitHub Codespaces (30 minutes)

GitHub Codespaces gives you a cloud development environment - no local setup required!

**Steps:**
1. In your `csc113-portfolio` repository, click the green "Code" button
2. Switch to "Codespaces" tab
3. Click "Create codespace on main"
4. Wait for environment to load (2-3 minutes)

**What You Get:**
- VS Code in your browser
- Python already installed
- Terminal access
- All your repository files

**First Task in Codespaces:**
1. Open terminal (bottom panel)
2. Type: `python --version` (verify Python is installed)
3. Create a new file: `week-02-sage/hello_sage.py`
4. Write this code:

```python
# hello_sage.py
# My first Python script in this course

def main():
    print("Hello from SAGE!")
    print("This is my Study Assistant & Guide Engine workspace")
    
    # Get user name
    name = input("What's your name? ")
    print(f"Welcome to CSC-113, {name}!")
    
    # List course goals
    goals = [
        "Learn AI fundamentals",
        "Master prompt engineering",
        "Build with AI tools",
        "Create portfolio projects"
    ]
    
    print("\nYour CSC-113 goals:")
    for i, goal in enumerate(goals, 1):
        print(f"{i}. {goal}")

if __name__ == "__main__":
    main()
```

5. Save the file
6. Run it: `python week-02-sage/hello_sage.py`
7. Test the interaction

**What to Document:**
Create `week-02-sage/technical-setup.md`:

```markdown
# Technical Setup - Code Builders Track

## Codespaces Setup
- [x] Created codespace
- [x] Verified Python installation
- [x] Created first Python script
- [x] Successfully ran script

## Python Version
Python version: [paste output of `python --version`]

## First Script
See `hello_sage.py` for my first Python script in this course.

## Learnings
[Write 2-3 sentences about what was new or challenging in this setup]

## Questions
[Any technical questions you have]
```

#### Additional Task 2: AI-Assisted Python (45 minutes)

Ask Kevin to help you create a simple prompt tracker script.

**Instructions to Give Kevin:**
```
I'm learning Python and I need a simple script that:
1. Asks me for a prompt I want to save
2. Asks me to categorize it (explanation/creative/info/problem-solving)
3. Saves it to a text file called "my-prompts.txt"
4. Lets me view all saved prompts
5. Uses simple Python (I'm a beginner)

Please create this script with lots of comments explaining what each part does.
```

**Your Job:**
1. Work with Kevin to create the script
2. Save it as `week-02-sage/prompt-tracker.py`
3. Test that it works
4. Document the collaboration process

**Create**: `week-02-sage/kevin-coding-session.md`:

```markdown
# AI-Assisted Coding Session with Kevin

## Goal
Create a simple prompt tracker script in Python

## The Conversation
[Paste or summarize your conversation with Kevin]

## What Kevin Generated
[Paste the initial code Kevin gave you]

## What I Modified
[If you changed anything, note it here]

## Testing Results
[Screenshot or describe testing the script]

## Reflection
- What did Kevin do well in generating this code?
- What did you have to clarify or ask for changes?
- Did you understand the code Kevin wrote?
- What Python concepts are you still confused about?

## Code Quality Assessment
[Rate the code Kevin generated: Excellent/Good/Okay/Poor]
[Explain your rating]
```

#### Deliverables (Code Builders Track)
In addition to core assignment:
- [ ] Codespaces created and working
- [ ] `hello_sage.py` script created and tested
- [ ] `technical-setup.md` documenting setup
- [ ] `prompt-tracker.py` script created with Kevin's help
- [ ] `kevin-coding-session.md` documenting the collaboration
- [ ] All code has comments explaining what it does

---

### OPTION B: PROMPT MASTERS TRACK (Additional 1.5 hours)

**For students focused on no-code solutions, business applications, and advanced prompting.**

#### Additional Task 1: Create Custom GPT or Gemini Gem (45 minutes)

You'll create your own specialized AI assistant using a no-code platform.

**Platform Choice:**
- **Option 1**: Custom GPT (if you have ChatGPT Plus) - [Not required, but if you have access]
- **Option 2**: Gemini Gem (free) - **Recommended for most students**
- **Option 3**: Any other no-code AI assistant builder

**For Gemini Gem (Recommended):**
1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Click "Create" → "Gem"
3. Name it "SAGE Assistant"
4. Design your assistant:

**Example System Instructions for SAGE:**
```
You are SAGE (Study Assistant & Guide Engine), a personalized AI learning companion 
for a college student taking CSC-113: AI Fundamentals.

Your purpose is to help with:
- Explaining AI and machine learning concepts in simple terms
- Brainstorming ideas for course projects
- Reviewing study materials
- Generating practice questions
- Providing encouragement and motivation

Your personality:
- Patient and encouraging
- Uses analogies and examples
- Asks clarifying questions
- Admits limitations honestly
- Celebrates progress

When the student asks questions:
1. Assess their understanding level
2. Provide explanations with examples
3. Offer follow-up questions to deepen learning
4. Connect concepts to their course work

Never do homework for the student - guide them to discover answers themselves.
```

5. Test your Gem with these prompts:
   - "Explain what a neural network is"
   - "Help me brainstorm a project idea for an AI tool that helps students"
   - "Create 5 practice questions about machine learning basics"

6. Refine your system instructions based on the responses

#### Additional Task 2: Advanced Prompt Engineering (45 minutes)

Practice sophisticated prompting techniques:

**Technique 1: Context Layering**
```
Base Prompt: "Explain artificial intelligence"

Improved Prompt: "I'm a college sophomore taking my first AI course. 
I have no programming background but I understand basic computer use. 
Explain artificial intelligence in a way I can understand, using 
analogies to everyday experiences. Keep it under 200 words."
```

**Technique 2: Output Formatting**
```
Prompt: "List 10 ways AI is used in daily life. Format as:
- **Application Name**: Brief description (1 sentence)
- Example: Real-world example of this use

Make the descriptions conversational and interesting."
```

**Technique 3: Role-Playing**
```
Prompt: "You are a museum curator creating an exhibit about AI history. 
Write the text for a wall plaque that introduces visitors to the 
concept of machine learning. The audience is general public with 
no technical background. Maximum 150 words."
```

**Technique 4: Constraint Specification**
```
Prompt: "Generate 5 quiz questions about AI fundamentals. Requirements:
- Mix of multiple choice and true/false
- Appropriate for college level but accessible to beginners
- Include clear correct answers
- Provide brief explanations for why each answer is correct
- Format in Markdown for easy reading"
```

**Your Task:**
1. Try each technique with at least 2 different AI tools
2. Compare the results
3. Refine your prompts iteratively
4. Document what works

#### Deliverables (Prompt Masters Track)
In addition to core assignment:
- [ ] Custom AI assistant (Gem/GPT) created and documented
- [ ] `week-02-sage/sage-assistant.md` describing your assistant:
  - System instructions used
  - Testing results
  - Refinements made
  - Use cases for this assistant
- [ ] `week-02-sage/advanced-prompts.md` documenting:
  - All 4 techniques tried
  - Results from different tools
  - Comparative analysis
  - Best practices discovered
- [ ] At least 10 prompts added to your prompt library (5 core + 5 advanced)

**Create**: `week-02-sage/sage-assistant.md`:

```markdown
# My SAGE Assistant

## Platform
[Gemini Gem / Custom GPT / Other]

## System Instructions
[Paste your complete system instructions]

## Testing & Refinement

### Initial Test Results
**Test Prompt 1**: [Your prompt]  
**Response Quality**: [Rating and notes]

[Repeat for all test prompts]

### Refinements Made
[Describe how you improved the system instructions based on testing]

### Final Configuration
[Paste refined system instructions if different]

## Use Cases
I plan to use SAGE Assistant for:
1. [Specific use case]
2. [Specific use case]
3. [Specific use case]

## Access
[How you'll access this assistant - bookmark, saved chat, etc.]
```

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Systematically tested multiple AI tools
- Documented clear differences between tools
- Showed iterative prompt refinement
- Made informed tool selection

**Good (4.5-5.4):**
- Tested required tools
- Noted some differences
- Some evidence of iteration
- Tool selection with basic reasoning

**Needs Improvement (<4.5):**
- Testing incomplete or superficial
- No clear comparison
- No iteration evident
- Random tool selection

### Problem-Solving Process (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Followed all workflow steps
- Well-organized SAGE workspace
- Clear documentation structure
- Systematic testing approach

**Good (4.5-5.4):**
- Followed most workflow steps
- SAGE workspace created
- Basic documentation
- Attempted systematic testing

**Needs Improvement (<4.5):**
- Skipped workflow steps
- Disorganized workspace
- Minimal documentation
- No clear testing method

### Professional Communication (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- All required files present and well-formatted
- Clear, professional writing
- Complete prompt library (5+ entries)
- Comprehensive comparisons

**Good (4.5-5.4):**
- Most required files present
- Generally clear writing
- Prompt library started (3-4 entries)
- Basic comparisons

**Needs Improvement (<4.5):**
- Missing required files
- Unclear or unprofessional writing
- Incomplete prompt library (<3 entries)
- Superficial comparisons

### Critical Thinking & Ethics (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Thoughtful analysis of tool differences
- Reflection on rate limits and resource management
- Consideration of when/how to use AI ethically
- Honest assessment of challenges

**Good (4.5-5.4):**
- Some analysis of differences
- Mentions rate limits
- Basic ethical consideration
- Identifies some challenges

**Needs Improvement (<4.5):**
- No analysis, just description
- Ignores rate limit issues
- No ethical consideration
- Generic reflections

### Track-Specific Work (Additional assessment for track tasks)
**Code Builders:**
- Setup successful and documented
- Python code runs correctly
- Collaboration with AI documented
- Code understanding demonstrated

**Prompt Masters:**
- Assistant created and functional
- Advanced techniques attempted
- Clear improvement over basic prompts
- Thoughtful analysis of results

---

## COMMON MISTAKES & TROUBLESHOOTING

### "I hit rate limits immediately"
**Fix**: This is normal! Switch to your backup tool (Claude or ChatGPT). The lesson here is resource management. Document when you hit limits and how you adapted.

### "Kevin doesn't act like Kevin"
**Fix**: Make sure you're using the system instructions in a new chat. Different AI tools have different ways to set system instructions:
- Gemini: "Create new chat" → Click settings → Add system instructions
- Claude: Start message with system context
- ChatGPT: Some features limited in free tier

### "All the AI tools gave me the same answer"
**Fix**: Try more challenging prompts! Simple questions get similar answers. Try asking for creative content, or questions requiring reasoning.

### "I don't know which track to choose"
**Fix**: Try both! You have until Week 6 to decide. This week, do whichever sounds more interesting. You can switch next week.

### Code Builders: "Codespaces won't load"
**Fix**: 
1. Check your GitHub Education benefits are active
2. Try creating codespace from a different branch
3. Use local Python installation if needed
4. Contact instructor if persistent issues

### Prompt Masters: "I can't create a Gem"
**Fix**: Gemini Gems are available in AI Studio. If you don't see the option:
1. Ensure you're signed into Google AI Studio (not just Gemini chat)
2. Look for "Create" button
3. Alternative: Document your ideal system instructions and use them in regular chats

---

## GETTING HELP

### When to Ask for Help
- **Immediately**: Can't access any AI tools
- **Within 24 hours**: Confused about track choice or assignment requirements
- **Before deadline**: Unsure if your documentation meets standards

### Where to Get Help
1. **Course Communication**: #week-2-help channel
2. **Office Hours**: See calendar for times
3. **Peer Support**: Study groups encouraged!
4. **AI Tools**: Yes, you can ask Kevin for help with this assignment! Meta!

---

## LOOKING AHEAD

### Week 3 Preview
Next week: AI Timeline Research
- Use AI to research AI history
- Create timeline artifact
- Practice verifying AI-generated information
- Connect history to tools we use

### Building Your SAGE
This SAGE workspace you're creating this week becomes your foundation for the semester. You'll add to it every week:
- Week 3: AI research methodology
- Week 4: Bad Bot experiments
- Week 5: Iterative improvement documentation
- And so on...

---

## REFLECTION QUESTIONS

Before submitting, consider:
1. Which AI tool did you prefer? Why?
2. How did your prompts improve from first attempt to last?
3. What surprised you about working with AI?
4. What are you still confused about?
5. How will you use SAGE going forward?

**Answer these in your Week 2 learning log entry.**

---

## FINAL CHECKLIST

### Core Assignment (Everyone)
- [ ] Tested 3 AI tools with 4 prompts each
- [ ] Documented tool comparison
- [ ] Had conversation with Kevin
- [ ] Created SAGE workspace with all required files
- [ ] Started prompt library (5+ prompts)
- [ ] Updated main README with Week 2 learning log
- [ ] Created PR #2 and requested review

### Track-Specific (Choose One)
**Code Builders:**
- [ ] Set up GitHub Codespaces
- [ ] Created and tested `hello_sage.py`
- [ ] Created `prompt-tracker.py` with Kevin's help
- [ ] Documented all technical setup

**Prompt Masters:**
- [ ] Created custom AI assistant (Gem/GPT)
- [ ] Tested and refined system instructions
- [ ] Practiced 4 advanced prompting techniques
- [ ] Documented all experiments

---

**Ready to meet your AI partners? Let's go!**

*"The best way to learn about AI is to work with it. The second best way is to break it and figure out why."*

---

*Assignment created for CSC-113 AI Fundamentals*  
*Week 2: AI Tools & First Collaborations*
