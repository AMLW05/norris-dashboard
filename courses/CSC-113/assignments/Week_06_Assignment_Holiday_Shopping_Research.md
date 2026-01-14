# Week 6 Assignment: "Holiday Shopping Research Challenge"
## CSC-113 AI Fundamentals - AI for Real-World Research

**Due**: End of Week 6 (Friday, 11:59 PM)
**Points**: 25 (25% of Module grade)
**Submission**: Via GitHub repository (PR #6)

---

## ASSIGNMENT OVERVIEW

Welcome to practical AI! After learning about good and bad AI design, you're ready to use AI tools for authentic work. This week, you'll tackle a scenario everyone faces: researching the perfect gift for someone special.

But here's the twist: **you're not just finding a gift**. You're developing a systematic research methodology, comparing AI tools, and documenting what makes prompts effective. The gift is the excuse; the research process is the lesson.

**What You're Learning:**
- Advanced prompt engineering for research tasks
- Comparative analysis across AI platforms
- Iterative prompt refinement methodology
- Tool selection based on task requirements
- Documentation of systematic problem-solving
- Creating decision frameworks from AI outputs

**Why This Matters:**
52% of consumers now use AI for holiday shopping (Winter 2024 data). Whether you're researching products, comparing options, finding solutions to problems, or making informed decisions, this is how modern research works. By the end of this assignment, you'll know how to extract real value from AI research tools - and when they're giving you nonsense.

**Connection to Previous Work:**
- Week 4 (Bad Bot): You learned what makes AI ineffective
- Week 5 (Good Bot): You learned design principles for AI
- Week 6 (This week): You apply those principles to real research

---

## LEARNING OBJECTIVES

By completing this assignment, you will:
1. Design and refine sophisticated research prompts through iteration
2. Compare effectiveness of different AI tools for the same task
3. Create systematic frameworks for evaluating AI outputs
4. Document complete research methodology with justifications
5. Generate actionable recommendations from AI research
6. Critically evaluate when AI helps vs. when it hallucinates

---

## PART 1: SETUP & SCENARIO SELECTION (30 minutes)

### Step 1: Choose Your Research Scenario

Pick ONE gift research scenario. Make it authentic - you'll get better results if you actually care about finding a good answer.

**Scenario Options:**

**Option A: Tech Enthusiast Gift ($100-300 budget)**
Research a gift for someone who loves technology and gadgets. They already have the basics (phone, laptop, headphones), so you need something interesting and thoughtful.

**Option B: Experience Gift (any budget)**
Research an experience gift for someone who says "I don't want stuff, I want memories." Could be local or travel-based, subscription service, class, or event.

**Option C: Sustainable/Ethical Gift ($50-150 budget)**
Research a gift for someone committed to environmental sustainability and ethical consumption. The gift should align with values while still being exciting.

**Option D: Creative Maker Gift ($75-200 budget)**
Research a gift for someone who loves making things - art, crafts, DIY projects, cooking, or other creative pursuits. They need inspiration or tools to explore new techniques.

**Option E: Custom Scenario (Instructor Approval)**
Have a unique gift challenge? Propose your own scenario in your Issue. Provide context, constraints, and why it's interesting.

**Minimum Requirements for All Scenarios:**
- Specific budget range
- Clear recipient context (interests, values, lifestyle)
- At least 2 constraints (e.g., "must be eco-friendly" or "no screen time")
- Authentic challenge (not "what should I buy my mom" - too generic!)

### Step 2: Define Success Criteria

Before you start prompting, define what a successful research outcome looks like:

**Create:** `week-06-shopping/scenario-definition.md`

```markdown
# Gift Research Scenario

## Scenario Selected
[Option A/B/C/D/E]

## Recipient Profile
**Relationship**: [Friend/Family/Partner/etc.]
**Age Range**: [Helpful for recommendations]
**Interests**: [List 3-5 specific interests]
**Values**: [What matters to them?]
**Lifestyle**: [Active/Homebody/Traveler/etc.]

## Constraints & Requirements
**Budget**: [$X-$Y]
**Must-Have Features**:
1. [Required characteristic]
2. [Required characteristic]
3. [Required characteristic]

**Nice-to-Have Features**:
1. [Preferred but not required]
2. [Preferred but not required]

**Deal-Breakers**:
1. [Absolute no-gos]
2. [Things to avoid]

## Success Criteria
A successful recommendation will:
- [ ] Fits budget range
- [ ] Meets all must-have requirements
- [ ] Addresses recipient's specific interests
- [ ] Provides concrete product/experience names (not generic categories)
- [ ] Includes reasoning for why this works for THIS person
- [ ] Has availability information

## Why This is Challenging
[1-2 sentences: What makes this hard? Why can't you just Google "best gifts"?]
```

**Why This Matters:**
AI tools work better when YOU know what you're looking for. Vague requests get vague answers. Specific criteria get specific recommendations.

---

## PART 2: MULTI-TOOL RESEARCH (2-3 hours)

### Step 3: First-Pass Prompts Across Tools

Test your research scenario across **at least 3 different AI tools**. You must include variety:

**Required Tool Types:**
- **Conversational AI**: ChatGPT, Claude, or Gemini
- **Search-Focused AI**: Perplexity, Bing AI, or similar
- **Specialty Tool**: Google AI Studio, Custom GPT, or domain-specific tool

**Your First Prompt:**

Create a solid research prompt. Don't overthink it yet - you'll iterate later.

**Example First Prompt Structure:**
```
I'm researching a gift for [specific person description]. They're interested in
[specific interests] and value [specific values]. My budget is [$X-$Y].

I'm looking for recommendations that:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

I need specific product or experience names, not generic categories. For each
recommendation, explain why it would work well for this person specifically.

What are 5-7 strong options with brief reasoning for each?
```

**Document Everything:**

Create: `week-06-shopping/research-log.md`

For EACH tool, document:
```markdown
### Tool: [Name]
**Date/Time**: [When you ran this]
**Session**: First Pass

**Prompt:**
[Exact prompt you used]

**Response Summary:**
[2-3 sentence summary of what you got]

**Specific Recommendations Provided:**
1. [Name of product/experience] - [Price if given]
2. [Name of product/experience] - [Price if given]
[...continue]

**Quality Assessment:**
- Specificity: [Generic/Somewhat specific/Very specific]
- Reasoning Quality: [Weak/Adequate/Strong]
- Usefulness: [Not helpful/Somewhat helpful/Very helpful]
- Hallucination Risk: [Low/Medium/High - did it make things up?]

**Follow-Up Questions This Raised:**
- [What else do you need to know?]
- [What should you refine?]

**Initial Tool Rating**: [1-5 stars] ⭐
```

**Time Check:** Spend about 15-20 minutes per tool on first pass. You're gathering data, not perfecting yet.

---

### Step 4: Comparative Analysis & Tool Selection

Now compare your results across tools.

**Create:** `week-06-shopping/tool-comparison.md`

**Comparison Matrix:**

| Criteria | Tool 1: [Name] | Tool 2: [Name] | Tool 3: [Name] |
|----------|----------------|----------------|----------------|
| **Specificity** | Generic categories / Specific products / Exact recommendations with links | [Assessment] | [Assessment] |
| **Reasoning Quality** | No explanation / Basic reasoning / Detailed personalized reasoning | [Assessment] | [Assessment] |
| **Up-to-Date Info** | Outdated / Mostly current / Current with sources | [Assessment] | [Assessment] |
| **Price Accuracy** | No prices / Estimates only / Specific prices | [Assessment] | [Assessment] |
| **Creativity** | Obvious choices / Some unique ideas / Surprising insights | [Assessment] | [Assessment] |
| **Source Citations** | None / Some / Detailed sources | [Assessment] | [Assessment] |
| **Follow-Up Handling** | Poor / Adequate / Excellent | [Assessment] | [Assessment] |

**Analysis Questions:**

Answer these in your tool-comparison.md:

1. **Which tool gave the most useful first response? Why?**

2. **Which tool required the most prompt refinement to get good results?**

3. **Did any tools hallucinate or provide clearly incorrect information?**
   - What did you notice?
   - How did you verify?

4. **Which tool would you use for different research tasks?**
   - Quick overview research: [Tool] because...
   - Deep detailed research: [Tool] because...
   - Price comparison: [Tool] because...
   - Creative inspiration: [Tool] because...

5. **What did you learn about prompt engineering from comparing tools?**
   - What works across all tools?
   - What needs to be tool-specific?

---

### Step 5: Iterative Prompt Refinement

Pick your **best-performing tool** from Step 4. Now make your prompt EXCELLENT.

**Refinement Process:**

**Prompt Version 2: Add Constraints**
Take your original prompt and add:
- Specific price ranges
- Availability requirements (online/local/both)
- Timing considerations
- Comparison requests (compare A vs B)

**Prompt Version 3: Challenge Assumptions**
Add phrases like:
- "Challenge my assumptions about what this person might like"
- "Are there options I'm not considering?"
- "What's a surprising choice that still fits the criteria?"

**Prompt Version 4: Request Methodology**
Ask the AI to show its work:
- "Explain your reasoning for each recommendation"
- "What trade-offs exist between these options?"
- "How did you prioritize my requirements?"

**Prompt Version 5: Verification**
Ask for evidence:
- "Provide sources for price information"
- "Where can I verify these products exist?"
- "What are current user reviews saying?"

**Document Each Iteration:**

In your research-log.md, add sections for each version:

```markdown
### Iteration 2: Added Constraints
**Changes Made**: [What you added to the prompt]
**New Response Quality**: [How did results improve or change?]
**Specific Improvements**: [Concrete examples]

### Iteration 3: Challenged Assumptions
[Continue pattern...]
```

**Goal:** By version 5, you should have 3-5 EXCELLENT, well-reasoned recommendations with supporting evidence.

---

## PART 3: VERIFICATION & DECISION (1-2 hours)

### Step 6: Fact-Check AI Recommendations

**Critical Task:** Verify that AI recommendations are real and accurate.

**Create:** `week-06-shopping/fact-checking.md`

For your **top 5 recommendations**, verify:

| Recommendation | AI Source | Verification Method | Verified? | Issues Found |
|----------------|-----------|---------------------|-----------|--------------|
| [Product Name] | [Which AI] | [How you checked] | ✅ ⚠️ ❌ | [Any problems] |

**How to Verify:**
1. **Google the exact product/experience name** - Does it exist?
2. **Check pricing** - Is the AI's price accurate?
3. **Read real reviews** - Do people actually like this?
4. **Verify availability** - Can you actually buy/book it?
5. **Check dates** - Is info current or outdated?

**Common AI Hallucinations in Shopping Research:**
- Products that don't exist (made-up model numbers)
- Discontinued items presented as current
- Wildly incorrect pricing
- Features that don't exist
- Companies that went out of business

**Document Everything:**
- What was accurate?
- What was wrong?
- How did you figure it out?

---

### Step 7: Create Final Recommendation Report

**Create:** `week-06-shopping/gift-recommendations-report.md`

This is your polished final deliverable. Write it as if you're explaining your research to someone who will use it to make a purchase decision.

**Report Structure:**

```markdown
# Gift Research Report: [Scenario Name]

## Executive Summary
[2-3 sentences: What you researched and what you found]

## Research Methodology
**Tools Used**: [List with brief description of each]
**Prompts Tested**: [Number] iterations across [Number] platforms
**Verification Methods**: [How you fact-checked]
**Research Time**: [Approximate hours]

## Top 3 Recommendations

### Recommendation #1: [Product/Experience Name]
**Price**: [$X]
**Where to Buy**: [Specific retailers/websites]
**Available**: [Yes/No + details]

**Why This Works:**
[2-3 sentences explaining fit with recipient]

**Pros:**
- [Specific pro]
- [Specific pro]
- [Specific pro]

**Cons:**
- [Specific con]
- [Specific con]

**AI Tool That Found It**: [Which tool, which prompt version]
**Verification Status**: ✅ All details confirmed

---

[Repeat for Recommendations #2 and #3]

---

## Runner-Up Options
[2-3 additional good options with briefer descriptions]

## Options Eliminated & Why
[List 2-3 options that sounded good but didn't pan out]
- [Option]: [Why it didn't work]

## Research Insights

**What Surprised Me:**
[What unexpected patterns or options did you discover?]

**Tool Effectiveness:**
[Which AI tool was most helpful for this task?]

**Prompt Engineering Lessons:**
[What made prompts more effective?]

## Final Recommendation
[If you had to choose ONE, which would it be and why?]

---

**Report Created**: [Date]
**For**: CSC-113 Week 6 Assignment
**Researcher**: [Your Name]
```

---

## PART 4: METHODOLOGY REFLECTION (30-45 minutes)

### Step 8: Research Process Analysis

**Create:** `week-06-shopping/reflection.md`

Answer these questions with specific examples from your research:

**1. Prompt Engineering Evolution (2-3 paragraphs)**
- How did your prompts change from version 1 to version 5?
- What specific improvements made the biggest difference?
- What surprised you about what made prompts more effective?

**Example answer quality:**
❌ Bad: "My prompts got better and more specific."
✅ Good: "My first prompt was too open-ended: 'suggest tech gifts.' By version 3, I was asking: 'Compare mechanical keyboards under $200 for someone who codes 6+ hours daily and values typing comfort over RGB lighting.' The specificity and comparison request completely changed the quality of responses."

**2. Tool Comparison Insights (2-3 paragraphs)**
- Which tool surprised you (positively or negatively)?
- When would you use each tool for different research tasks?
- Did any tools hallucinate or provide incorrect information?

**3. Verification & Critical Thinking (2-3 paragraphs)**
- How did you verify AI recommendations were accurate?
- What red flags did you learn to watch for?
- When should you trust AI research vs. verify manually?

**4. Real-World Application (2-3 paragraphs)**
- Beyond gift shopping, where would you use this research methodology?
- What types of decisions could benefit from this process?
- What are the limitations of AI research tools?

**5. Personal Growth (1-2 paragraphs)**
- What was hardest about this assignment?
- What will you do differently next time you research with AI?
- How has your approach to AI tools changed since Week 1?

---

## GITHUB WORKFLOW

### Issue & Branch Setup

**1. Create Issue #6:**
```
**Title**: Week 6 - Holiday Shopping Research Challenge

**Goal**: Develop systematic AI research methodology through practical gift research

**Scenario**: [Your chosen scenario in 1 sentence]

**Tasks**:
- [ ] Define research scenario and success criteria
- [ ] Test prompts across 3+ AI tools
- [ ] Document first-pass results for each tool
- [ ] Create comparative analysis of tool effectiveness
- [ ] Iterate and refine prompts (5+ versions)
- [ ] Verify top recommendations for accuracy
- [ ] Create final recommendation report
- [ ] Write methodology reflection

**Success Criteria**:
- Documented research across 3+ tools with 5+ prompt iterations
- Comprehensive tool comparison with specific examples
- Final report with 3 verified, well-reasoned recommendations
- Thoughtful reflection on research methodology

**Estimated Time**: 4-6 hours
```

**2. Create Branch:** `6-holiday-shopping`

**3. Create Folder Structure:**
```
csc113-portfolio/
├── week-06-shopping/
│   ├── README.md                           # Overview of your work
│   ├── scenario-definition.md              # Your scenario & criteria
│   ├── research-log.md                     # All prompts & responses
│   ├── tool-comparison.md                  # Comparative analysis
│   ├── fact-checking.md                    # Verification results
│   ├── gift-recommendations-report.md      # Final polished report
│   └── reflection.md                       # Methodology analysis
```

**4. Update Main README:**
Add Week 6 to your learning log:
```markdown
### Week 6: Holiday Shopping Research Challenge
**Focus**: Practical AI research methodology and tool comparison

**What I Learned:**
- [Key insight about prompt engineering]
- [Key insight about tool selection]
- [Key insight about verification]

**Research Scenario**: [Brief description]
**Tools Compared**: [List]
**Outcome**: [Final recommendation in 1 sentence]

**Reflection**: [2-3 sentences about research process]
```

**5. Create PR #6:**
- **Title**: `Closes #6 - Holiday Shopping Research Challenge`
- **Description**:
```markdown
## Research Overview
**Scenario**: [Your scenario]
**Tools Tested**: [List with brief assessment]
**Prompts Iterated**: [Number] versions

## Key Findings
**Top Recommendation**: [Name and brief rationale]

**Most Effective Tool**: [Which one and why]

**Biggest Prompt Improvement**: [What change made biggest difference]

## Verification Results
- [X] All top recommendations verified for accuracy
- [X] Prices confirmed current
- [X] Availability verified
- [Issues found]: [Any hallucinations or errors discovered]

## What I Learned
[3-4 sentences about research methodology insights]

## Questions/Challenges
[Any difficulties encountered or areas needing feedback]

---
Closes #6
```

---

## ASSESSMENT RUBRIC

**Total Points: 25**

### AI Partnership Quality (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Tested 3+ diverse AI tools with detailed documentation
- Demonstrated 5+ prompt iterations with clear improvements
- Showed sophisticated prompt engineering techniques (constraint layering, assumption challenging, verification requests)
- Used AI effectively for refinement and creativity
- Research log shows deep engagement with tools

**Good (4.5-5.4):**
- Tested 3 AI tools with adequate documentation
- Showed 3-4 prompt iterations with some improvement
- Basic prompt engineering visible
- Used AI tools appropriately
- Research log shows solid effort

**Needs Improvement (<4.5):**
- Tested fewer than 3 tools or documentation sparse
- Minimal iteration (1-2 versions only)
- Basic prompts without refinement
- Limited engagement with AI capabilities
- Research log incomplete or superficial

---

### Problem-Solving Process (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Clear, specific scenario with well-defined success criteria
- Systematic comparison methodology with detailed analysis
- Comprehensive fact-checking with multiple verification methods
- Logical decision framework visible throughout
- Eliminated options with clear reasoning

**Good (4.5-5.4):**
- Defined scenario and criteria adequately
- Basic comparison across tools
- Some fact-checking performed
- Decision process is logical
- Some consideration of alternatives

**Needs Improvement (<4.5):**
- Vague scenario or unclear criteria
- Minimal comparison effort
- Little to no verification
- Decision process unclear
- Didn't consider alternatives

---

### Professional Communication (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Final report is polished, clear, and actionable
- All documentation is well-organized and thorough
- Tool comparison uses specific examples and evidence
- Reflection is articulate and insightful
- GitHub workflow is clean with descriptive commits

**Good (4.5-5.4):**
- Final report meets requirements
- Documentation is adequate and organized
- Tool comparison has sufficient detail
- Reflection meets requirements
- GitHub workflow is functional

**Needs Improvement (<4.5):**
- Final report is unclear or incomplete
- Documentation is disorganized or sparse
- Tool comparison lacks detail
- Reflection is superficial
- GitHub workflow is messy or incomplete

---

### Critical Thinking & Ethics (25% = 6.25 pts)

**Excellent (5.5-6.25):**
- Rigorous fact-checking with documented verification
- Identified and called out AI hallucinations or errors
- Thoughtful analysis of tool limitations and appropriate use cases
- Insightful reflection on when to trust AI vs verify manually
- Demonstrated skepticism and independent judgment

**Good (4.5-5.4):**
- Performed basic fact-checking
- Some awareness of AI limitations
- Basic analysis of tool effectiveness
- Reflection shows some critical thinking
- Generally verified major claims

**Needs Improvement (<4.5):**
- Little to no fact-checking
- Accepted AI outputs without question
- No analysis of limitations
- Reflection lacks critical engagement
- Did not verify recommendations

---

## COMMON MISTAKES & TROUBLESHOOTING

### "AI tools gave me completely different recommendations"

**This is GOOD!** Different tools have different strengths. Your job is to figure out:
- Which tool is most reliable for THIS task?
- What explains the differences?
- Which recommendations hold up under verification?

Document the differences and analyze WHY they happened.

---

### "My prompts aren't improving the results"

**Try These Strategies:**

**If responses are too generic:**
- Add more specific constraints
- Request specific product/experience NAMES, not categories
- Ask for reasoning: "Explain why each recommendation fits this person"

**If responses are unrealistic:**
- Add budget constraints explicitly
- Request availability information
- Ask for verification sources

**If responses lack creativity:**
- Try: "What's a surprising option I might not have considered?"
- Ask: "Challenge my assumptions about what this person would like"

**If you're stuck:**
- Switch tools - try a different AI
- Show the AI what's not working: "Previous responses were too generic. I need specific product names with prices."

---

### "I can't verify if AI recommendations are accurate"

**Verification Methods:**
1. **Google the exact name** - Does it exist? Is it spelled correctly?
2. **Check official retailers** - Amazon, manufacturer website
3. **Look for reviews** - Reddit, YouTube, review sites
4. **Verify current pricing** - Multiple sources
5. **Check publication dates** - Is info recent?

**Red Flags:**
- Can't find product anywhere
- Only AI mentions it (no Google results)
- Price is drastically different from what AI said
- Product was discontinued years ago
- Reviews don't match AI's description

**If you can't verify:** Include in report as "Could not verify - may be hallucination"

---

### "All my recommendations are obvious/boring"

**Good! That means your research is realistic.** The best gift is often something the person would actually want, not the most exotic thing.

**But to push further:**
- Ask AI: "What would surprise them while still fitting criteria?"
- Look for niche subreddits about their interests
- Request: "What do experts in [field] recommend?"
- Try: "What's popular in [interest] communities right now?"

---

### "This is taking way longer than estimated time"

**Time Management Tips:**

**First Pass (should be quick):**
- 15-20 minutes per tool maximum
- Don't try to perfect prompts yet
- Just gather initial data

**Iteration Phase (most time):**
- Pick ONE best tool to refine deeply
- Don't iterate all tools - that's unnecessary
- Stop when you have 3-5 solid recommendations

**Verification:**
- Only verify your TOP recommendations
- Quick checks are fine (5-10 min per item)
- Don't fall down research rabbit holes

**Writing:**
- Report can be concise - quality over length
- Use bullet points liberally
- Reflection should be thoughtful but not a novel

**If you're still over time:** Document that in your reflection! "This took X hours because Y" is valuable learning.

---

### "I found errors/hallucinations in AI outputs"

**EXCELLENT!** Document this thoroughly:
- What did the AI claim?
- How did you discover it was wrong?
- Which tool was it?
- What type of error (made-up product, wrong price, outdated info)?

This is worth significant points in the "Critical Thinking" category. Finding and documenting hallucinations shows you're not blindly trusting AI.

---

## GETTING HELP

### Research Methodology Questions
- **Stuck on prompt iteration:** Share your prompts in #class-discussion for feedback
- **Unsure about verification:** Ask "How do I verify [specific thing]?"
- **Tool selection:** "Which tool is better for [specific task]?" - ask instructor or classmates

### Technical Issues
- **AI tool access problems:** Check SAGE for tool alternatives
- **Rate limits:** Switch tools, take a break, come back later
- **GitHub workflow:** Standard help channels

### Content Questions
- **Is my scenario too vague?** Share scenario definition in office hours
- **Am I iterating enough?** Show your prompt versions for feedback
- **Is my report too short/long?** Quality and completeness matter more than length

---

## ADVANCED EXTENSIONS (Optional - Not Required)

Want to go deeper? Try these:

### 1. Multi-Model Ensemble Approach
Use outputs from ALL tools together:
- Compile recommendations from all 3+ tools
- Create a "consensus" ranking
- Analyze which recommendations appeared across multiple tools
- Document: "Ensemble-analysis.md"

### 2. Prompt Engineering Case Study
Create a detailed analysis:
- Side-by-side comparison of prompt version 1 vs 5
- Annotate exactly what changed and why
- Show quality improvement with specific examples
- Document: "Prompt-evolution-case-study.md"

### 3. Tool Capability Deep Dive
Pick one tool and test its limits:
- What tasks is it exceptionally good at?
- Where does it consistently fail?
- What prompting strategies work best for THIS tool?
- Document: "Tool-deep-dive-[ToolName].md"

### 4. Real Purchase + Follow-Up
Actually buy something and report back:
- Did it match AI's description?
- Were recommendations accurate?
- Would you trust this methodology for future purchases?
- Document: "Real-world-verification.md"

---

## LOOKING AHEAD

### Week 7 Preview: Project Ideation
Next week you'll begin thinking about your capstone project:
- Identifying problems AI could help solve
- Scoping projects appropriately
- Creating compelling proposals
- **Beginning track specialization** (Code Builders vs Prompt Masters)

### How This Connects
This week's research methodology directly applies to:
- Researching technical solutions for projects
- Comparing AI tools for specific tasks
- Verifying that AI suggestions are feasible
- Documenting problem-solving processes

**Your Research Process is Now a Transferable Skill:**
- Job hunting (company research, salary comparison)
- Academic research (source gathering, fact-checking)
- Technical decisions (tool selection, framework comparison)
- Everyday decisions (literally anything you need to research)

---

## FINAL CHECKLIST

### Setup & Planning
- [ ] Selected research scenario and documented in scenario-definition.md
- [ ] Defined clear success criteria
- [ ] Identified at least 3 diverse AI tools to test
- [ ] Created GitHub Issue #6 and branch `6-holiday-shopping`

### Research Execution
- [ ] Tested prompts across 3+ AI tools
- [ ] Documented first-pass results in research-log.md
- [ ] Created tool comparison matrix with detailed analysis
- [ ] Iterated prompts at least 5 times
- [ ] Documented each iteration's improvements

### Verification & Analysis
- [ ] Fact-checked top 5 recommendations
- [ ] Documented verification methods and results
- [ ] Identified any AI hallucinations or errors
- [ ] Analyzed which tools were most reliable

### Deliverables
- [ ] Created polished gift-recommendations-report.md
- [ ] Report includes 3+ verified recommendations with reasoning
- [ ] Report documents eliminated options and why
- [ ] Completed methodology reflection.md
- [ ] All required files in week-06-shopping/ folder

### GitHub Workflow
- [ ] All work committed to branch `6-holiday-shopping`
- [ ] Descriptive commit messages throughout process
- [ ] Main README updated with Week 6 learning log
- [ ] PR #6 created with comprehensive description
- [ ] Requested instructor review

---

**You're not just shopping - you're mastering systematic research in the age of AI.**

> "The best gift is one chosen with both intelligence and thoughtfulness. Now you have AI for the intelligence part. The thoughtfulness? That's still all you."

> "Also, if the AI suggests giving someone a cactus and you can't figure out why, that's probably a hallucination. Verify your recommendations."

---

*Assignment created for CSC-113 AI Fundamentals*
*Week 6: Practical Application & Research Methodology*
*Last Updated: November 4, 2025*
