# Week 3 Assignment: "AI Timeline Research"
## CSC-113 AI Fundamentals - Understanding the Survey Through AI History

**Due**: End of Week 3 (Friday, 11:59 PM)  
**Points**: 25 (25% of Module 1 grade)  
**Submission**: Via GitHub repository (PR #3)

---

## ASSIGNMENT OVERVIEW

This week fulfills the "history and development" requirement of our survey course by having you research AI history **using AI tools**. You'll create a timeline artifact that connects historical developments to the tools you're using today, while practicing information verification and source evaluation.

**What You're Learning:**
- AI/ML historical context and key developments
- How to research using AI tools effectively
- Source verification and cross-referencing
- Connecting history to current practice
- Creating informative, well-cited artifacts

**The Meta-Learning:**
You're using AI to learn about AI. This lets you practice evaluating AI-generated information, verifying facts, and understanding how current tools evolved from decades of research.

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Identify major milestones in AI/ML history from 1950-present
2. Explain key concepts like "AI winters" and paradigm shifts
3. Practice researching with AI while verifying information
4. Connect historical developments to modern AI tools
5. Create a well-documented, properly-cited timeline artifact
6. Reflect on how understanding history informs tool usage

---

## PART 1: RESEARCH PHASE (2-3 hours)

### Step 1: Initial Research with AI Tools (60 minutes)

Use your SAGE tools to research AI history. **Try multiple tools and compare results.**

**Research Prompts to Try:**

**Prompt 1: Broad Overview**
```
Create a timeline of major developments in artificial intelligence from 1950 to present. 
For each milestone, include:
- Year
- Development/Event name
- Why it was significant
- Key people involved (if applicable)

Focus on 10-15 of the most important milestones that shaped AI into what it is today.
```

**Prompt 2: Specific Eras**
```
Explain the "AI Winters" - what were they, when did they happen, and what caused them? 
Also explain what led to AI's resurgence after each winter.
```

**Prompt 3: Current Era**
```
Describe the major developments in AI from 2010 to present that led to tools like 
ChatGPT, Gemini, and Claude existing. Focus on the technical breakthroughs and 
paradigm shifts.
```

**Prompt 4: Verification**
```
I'm researching AI history. Verify these facts and tell me if any are incorrect:
[Paste 5-10 "facts" from your research - include some you're unsure about]
```

**Document Everything:**
Save all prompts and responses in `week-03-timeline/research-log.md`

---

### Step 2: Cross-Reference and Verify (45 minutes)

**Critical Task:** Don't trust a single AI tool! Cross-reference major claims.

**Verification Process:**
1. Identify 5-10 major claims from your research (dates, names, developments)
2. Check each claim with at least 2 different AI tools
3. For key facts, search actual sources (Wikipedia, academic sites, company blogs)
4. Document discrepancies and how you resolved them

**Example Verification:**

| Claim | Source 1 (Gemini) | Source 2 (Claude) | Verified via Web | Final Verdict |
|-------|-------------------|-------------------|------------------|---------------|
| Turing test proposed in 1950 | Confirmed | Confirmed | Wikipedia confirms | ✅ Accurate |
| First AI winter 1974-1980 | Confirmed | Says 1973-1980 | Sources vary | ⚠️ Approximate |

**Create:** `week-03-timeline/fact-checking.md` documenting your verification process

---

### Step 3: Connect to Modern Tools (30 minutes)

**Research Question:** How did we get from early AI to ChatGPT?

Use AI to help you trace the lineage:

**Prompt:**
```
I'm using AI tools like Gemini, ChatGPT, and Claude. Trace the historical developments 
that made these tools possible. Create a "family tree" showing:
- Key papers and breakthroughs
- Important technologies developed
- How each breakthrough enabled the next

Start from 1950s and connect all the way to 2023's LLMs.
```

**Your Analysis:**
Write 2-3 paragraphs connecting at least 5 historical milestones to the AI tools you use today. Be specific!

**Bad Example:** "AI got better over time and now we have ChatGPT."

**Good Example:** "The invention of backpropagation in 1986 allowed neural networks to learn complex patterns. This, combined with GPUs becoming available in the 2000s, enabled deep learning. The Transformer architecture in 2017 then revolutionized language processing, leading directly to GPT models..."

---

## PART 2: ARTIFACT CREATION (2-3 hours)

Choose ONE format for your timeline. Both tracks can choose either option.

---

### OPTION A: Visual Timeline (Recommended for Prompt Masters)

Create a visually appealing timeline using design tools.

**Tool Suggestions:**
- Canva (free account)
- Google Slides
- PowerPoint
- Figma (free)
- Timeline JS (if you want to get fancy)

**Required Elements:**
1. **Clear chronological layout** (horizontal or vertical)
2. **10-15 major milestones** with:
   - Year
   - Title/name of development
   - 1-2 sentence explanation
   - Visual icon or image
   - Key people (if applicable)
3. **"AI Winters" clearly marked** with explanation
4. **Modern Era section** (2010-present) showing rapid development
5. **Visual connections** between related developments
6. **Sources cited** at bottom

**Design Tips:**
- Use consistent formatting
- Color-code by era or category
- Make text readable (minimum 12pt font)
- Include your name and course info
- Make it look professional

**Deliverable:**
- Save as PDF: `week-03-timeline/AI-Timeline-[YourName].pdf`
- Save original editable file (if using Canva, Figma, etc.)
- Include image credits if using photos/icons

**Use AI to Help!**
- "Suggest a color scheme for a historical timeline that looks professional"
- "What icons would represent [specific AI development]?"
- "How should I organize a timeline with 15 items to make it scannable?"

---

### OPTION B: Interactive Timeline (Recommended for Code Builders)

Create an HTML/JavaScript timeline that's interactive.

**Tool Suggestions:**
- Plain HTML/CSS/JS (simple)
- Timeline.js library (recommended)
- Any JavaScript library you find

**Required Elements:**
1. **Timeline with 10-15 milestones** that user can navigate
2. **Each milestone includes:**
   - Year
   - Title
   - Detailed description (2-4 sentences)
   - Source link
   - Optional: Image
3. **Interactive features:**
   - Click/hover for details
   - Navigation between events
   - Responsive design (works on mobile)
4. **AI Winters highlighted** visually
5. **Modern era differentiated** from historical period
6. **Sources page or section**

**Basic Structure to Start:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI History Timeline - [Your Name]</title>
    <style>
        /* Your CSS here - make it look good! */
    </style>
</head>
<body>
    <header>
        <h1>A Brief History of Artificial Intelligence</h1>
        <p>Created by [Your Name] for CSC-113</p>
    </header>
    
    <div class="timeline">
        <!-- Your timeline items here -->
    </div>
    
    <footer>
        <h2>Sources</h2>
        <!-- Your sources here -->
    </footer>
    
    <script>
        // Your JavaScript here
    </script>
</body>
</html>
```

**Deliverable:**
- Save as `week-03-timeline/index.html` (and any associated CSS/JS files)
- Deploy to GitHub Pages (bonus - see instructor for help)
- Include detailed comments in code explaining what each part does

**Use AI to Help!**
- "Create a simple CSS style for a historical timeline"
- "Write JavaScript to make timeline items clickable and show/hide details"
- "How do I make this responsive for mobile devices?"

---

### BOTH OPTIONS: Required Documentation

Regardless of format chosen, include:

**week-03-timeline/README.md:**
```markdown
# AI Timeline Project

## Overview
This timeline documents major developments in artificial intelligence from 1950 to present.

## Format
[Visual/Interactive] timeline created using [Tools used]

## Key Milestones Included
1. [Year] - [Development]
2. [Year] - [Development]
[...continue for all milestones]

## AI Winters
[Brief explanation of AI winters and how they're represented in your timeline]

## Connection to Modern Tools
[2-3 paragraphs connecting historical developments to current AI tools]

## Research Process
- **AI Tools Used**: [List tools]
- **Verification Methods**: [How you fact-checked]
- **Challenges**: [What was difficult about this research]
- **Discoveries**: [Anything that surprised you]

## Sources
1. [Source 1]
2. [Source 2]
[...all sources cited]

## Reflection
[How does understanding AI history change how you think about the tools you use?]

---
Created: [Date]  
For: CSC-113 AI Fundamentals  
Instructor: [Name]
```

---

## PART 3: REFLECTION & ANALYSIS (30 minutes)

### Historical Analysis

Write 2-3 paragraphs addressing these questions:

1. **Pattern Recognition**
   - What patterns do you notice in AI development?
   - Why do you think AI winters happened?
   - What conditions enabled AI's current success?

2. **Modern Context**
   - How do historical challenges relate to current AI limitations?
   - What lessons from AI history apply to today's development?
   - Are we in an "AI summer" now? What could cause another winter?

3. **Personal Impact**
   - How does understanding this history change your use of AI tools?
   - What historical development are you most interested in learning more about?
   - Do you see yourself as part of AI history (as a user/creator)?

**Save as:** `week-03-timeline/analysis.md`

---

## GITHUB WORKFLOW

### Issue & Branch Setup

1. **Create Issue #3:**
   ```
   **Goal**: Research AI history and create comprehensive timeline
   
   **Tasks**:
   - [ ] Research major AI milestones using multiple tools
   - [ ] Verify facts and cross-reference information
   - [ ] Connect historical developments to modern tools
   - [ ] Create timeline artifact
   - [ ] Document research process
   - [ ] Write analysis and reflection
   
   **Success Criteria**: 
   - Timeline includes 10-15 well-documented milestones
   - Facts are verified across multiple sources
   - Clear connection between history and current practice
   - Professional presentation
   ```

2. **Create Branch:** `3-ai-timeline`

3. **Create Folder Structure:**
   ```
   csc113-portfolio/
   ├── week-03-timeline/
   │   ├── README.md
   │   ├── research-log.md
   │   ├── fact-checking.md
   │   ├── analysis.md
   │   ├── AI-Timeline-[YourName].pdf  [if visual]
   │   └── index.html                   [if interactive]
   ```

4. **Update Main README:**
   Add Week 3 to learning log with reflection on research process

5. **Create PR #3:**
   - Title: `Closes #3 - AI Timeline Research`
   - Description: Summarize what you created and key learnings
   - Request instructor review

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Used multiple AI tools for research
- Documented iterative prompt refinement
- Cross-verified information systematically
- Used AI effectively for artifact creation

**Good (4.5-5.4):**
- Used AI tools for research
- Some evidence of verification
- Basic use of AI for creation
- Some iteration visible

**Needs Improvement (<4.5):**
- Minimal AI tool usage
- No verification process
- Didn't use AI for creation help
- No iteration

### Problem-Solving Process (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Clear research methodology
- Systematic fact-checking
- Logical organization of information
- Effective use of sources

**Good (4.5-5.4):**
- Basic research approach
- Some fact-checking
- Generally organized
- Sources included

**Needs Improvement (<4.5):**
- Unclear methodology
- No fact-checking
- Disorganized
- Missing sources

### Professional Communication (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Timeline is clear, professional, and visually appealing
- All documentation is well-written
- Proper citations throughout
- Analysis is insightful

**Good (4.5-5.4):**
- Timeline is clear and functional
- Documentation is adequate
- Citations present
- Analysis meets requirements

**Needs Improvement (<4.5):**
- Timeline is unclear or unprofessional
- Documentation is poor
- Citations missing
- Analysis is superficial

### Critical Thinking & Ethics (25% = 6.25 pts)
**Excellent (5.5-6.25):**
- Thoughtful historical analysis
- Critical evaluation of sources
- Insightful connections to modern practice
- Honest reflection on limitations

**Good (4.5-5.4):**
- Basic historical understanding
- Some source evaluation
- Makes connections
- Reflection present

**Needs Improvement (<4.5):**
- Surface-level understanding
- No source evaluation
- Doesn't connect history to present
- Generic reflection

---

## REQUIRED MILESTONES (Use These as Starting Points)

Your timeline should include most of these, verified and expanded:

### Early Era (1950-1970)
- Alan Turing's test proposal (~1950)
- Dartmouth Conference (1956) - "AI" term coined
- ELIZA - first chatbot (1966)
- Perceptron (1958) → Perceptron limitations discovered (1969)

### First AI Winter (1970s)
- Lighthill Report (1973)
- Funding cuts
- Why: Overpromised, underdelivered

### Expert Systems Era (1980s)
- Expert systems commercial success
- Backpropagation algorithm popularized
- AI funding returns

### Second AI Winter (Late 1980s-1990s)
- Expert systems limitations
- Hardware limitations
- "AI Winter" period

### Machine Learning Revolution (1990s-2000s)
- Statistical machine learning emerges
- Deep Blue defeats Kasparov (1997)
- Support Vector Machines
- Random Forests

### Deep Learning Era (2010s)
- ImageNet breakthrough (2012)
- AlphaGo defeats human champion (2016)
- Transformer architecture (2017)
- GPUs enable training of large models

### Current Era (2020-Present)
- GPT-2, GPT-3 launch
- DALL-E and image generation
- ChatGPT public release (Nov 2022)
- Gemini, Claude, and competing models
- Current: Multi-modal AI, AI assistants

---

## EXAMPLE RESEARCH LOG ENTRY

**Sample entry for your research-log.md:**

```markdown
### Research Session 1: Overview

**Date**: [Date]
**Tool Used**: Gemini Flash
**Time**: 45 minutes

**Prompt 1**:
"Create a timeline of major developments in AI from 1950 to present..."

**Response Summary**:
Gemini provided 12 milestones including:
- 1950: Turing Test
- 1956: Dartmouth Conference
- 1997: Deep Blue vs Kasparov
[...etc]

**My Analysis**:
The response was comprehensive but I noticed it didn't mention the AI winters clearly. 
Will need to ask a follow-up prompt specifically about that.

**Follow-up Prompt**:
"You mentioned [specific events]. Were there periods when AI funding and research 
declined? Tell me about AI winters."

**Follow-up Response**:
[Paste response]

**Questions for Verification**:
- Was the Turing test really proposed in 1950 or 1951?
- Did Deep Blue really defeat Kasparov in 1997? (I thought this was later)
- Is Transformer architecture from 2017 or earlier?

[Continue for each research session...]
```

---

## COMMON MISTAKES & TROUBLESHOOTING

### "AI tools gave me different dates for same event"
**Fix**: This is common! Historical dates can be fuzzy:
- Year announced vs. year published
- Lab development vs. public release
- Different sources emphasize different milestones

**Solution**: Note the discrepancy, check 2-3 web sources, choose the most commonly cited date, and note the uncertainty.

### "I have too many events to fit in my timeline"
**Fix**: Good problem to have! Select 10-15 MOST important. Consider:
- Events that enabled multiple future developments
- Paradigm shifts (not just incremental improvements)
- Events that directly led to tools you use
- Diversity of timeline (not all from one decade)

### "I don't understand the technical details"
**Fix**: That's okay! Your timeline should:
- Explain WHY something mattered (not HOW it worked)
- Use accessible language
- Focus on impact and significance
- Ask AI to explain technical concepts in simple terms

### "My visual timeline looks unprofessional"
**Fix**: Basic design principles:
- Use consistent spacing
- Limit to 2-3 colors
- Keep text concise
- Use icons/images to break up text
- Ask AI: "How can I improve this timeline design?" (describe it or share screenshot)

### Code Builders: "My interactive timeline isn't working"
**Fix**:
- Test in browser (open HTML file)
- Check browser console for errors (F12)
- Start simple, add features incrementally
- Ask AI to debug: "This code isn't working: [paste code and error]"

---

## GETTING HELP

### Research Help
- **Stuck on verification**: Ask instructor or classmates which sources are reliable
- **Conflicting information**: Document the conflict, explain your reasoning for choosing one version
- **Can't find information**: Try different AI tools, try rephrasing prompts

### Technical Help
- **Visual timeline**: Check Canva tutorials or ask AI for design help
- **Interactive timeline**: Office hours, #tech-help channel, or AI debugging assistance
- **GitHub**: Standard workflow questions welcome

### Conceptual Help
- **Don't understand AI winters**: Watch Week 3 lecture recording
- **Unclear how to connect history to present**: Discuss with classmates or bring to office hours
- **Struggling with analysis**: Ask AI to help you brainstorm ideas (but write in your own words!)

---

## ADVANCED EXTENSIONS (Optional - Not Required)

Want to go deeper? Try these:

1. **Interview Component**: Use AI to "interview" historical figures
   - "If I could interview Alan Turing about modern AI, what would he think?"
   - Document these fictional but informed conversations

2. **Alternative History**: Ask AI to explore counterfactuals
   - "What if the first AI winter never happened?"
   - Analyze how AI development might have differed

3. **Global Perspective**: Research AI development outside US/UK
   - China's AI history
   - Japan's 5th Generation Computer Project
   - Soviet cybernetics research

4. **Deep Dive**: Pick one event and research it thoroughly
   - Create a separate detailed document
   - Find original sources (papers, interviews)
   - Explain significance in depth

---

## LOOKING AHEAD

### Week 4 Preview: Bad Bot
Next week we intentionally create terrible AI systems to learn about:
- Design constraints
- User experience
- What makes AI "good" vs "bad"
- Testing and iteration

### How This Connects
Understanding AI history helps you:
- Appreciate why current tools work the way they do
- Recognize patterns in AI limitations
- Think critically about AI hype vs. reality
- See yourself as part of ongoing AI story

---

## FINAL CHECKLIST

### Research Phase
- [ ] Used at least 2 different AI tools for research
- [ ] Documented all prompts and responses
- [ ] Cross-verified at least 5-10 major facts
- [ ] Connected historical developments to modern tools

### Artifact Creation
- [ ] Timeline includes 10-15 major milestones
- [ ] AI winters are explained and marked
- [ ] Modern era (2010-present) is covered
- [ ] Visual design is clear and professional OR interactive features work properly
- [ ] All sources are cited properly

### Documentation
- [ ] README.md completed with all sections
- [ ] research-log.md documents process
- [ ] fact-checking.md shows verification
- [ ] analysis.md has thoughtful reflection

### GitHub Workflow
- [ ] Issue #3 created
- [ ] Branch `3-ai-timeline` created
- [ ] All files in `week-03-timeline/` folder
- [ ] Main README updated with Week 3 learning log
- [ ] PR #3 created and submitted for review

---

**Let's explore how we got here! Understanding the past helps us shape the future.**

*"Those who cannot remember the past are condemned to repeat it." - George Santayana*

*"Also, those who don't verify what AI tells them about the past might accidentally include fiction in their timeline." - Your Instructor*

---

*Assignment created for CSC-113 AI Fundamentals*  
*Week 3: AI History & Conceptual Foundations*
