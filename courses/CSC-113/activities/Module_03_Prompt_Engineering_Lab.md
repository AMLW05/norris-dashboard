# Module 3 Activity: Prompt Engineering Laboratory
## CSC-113: From Bad to Good - Iterative Prompt Refinement

**Duration**: 90 minutes (in-class lab)
**Format**: Hands-on experimentation with AI tools
**Goal**: Practice 10+ prompt engineering techniques through guided exercises
**Materials**: Laptops, AI tool access (Claude, ChatGPT, Gemini)

---

## LEARNING OUTCOMES

By the end of this lab, you will:
- Apply 10+ prompt engineering techniques to real scenarios
- Iterate on prompts based on output quality
- Evaluate AI responses using defined criteria
- Transform vague prompts into precise, effective instructions
- Document prompt engineering experiments systematically

---

## LAB STRUCTURE

**Timing**:
- Introduction & Setup: 10 minutes
- Station 1: Specificity & Context: 15 minutes
- Station 2: Examples & Format: 15 minutes
- Station 3: Role & Constraints: 15 minutes
- Station 4: Iteration Challenge: 20 minutes
- Share & Discuss: 10 minutes
- Reflection & Assignment Connection: 5 minutes

---

## SETUP & INTRODUCTION (10 minutes)

### What You'll Need
- Laptop with browser
- Access to at least 2 AI tools (Claude, ChatGPT, or Gemini)
- Lab worksheet (see appendix)
- Partner for peer review

### Prompt Engineering Techniques (Quick Overview)

**Drew introduces (5 min)**:
1. **Be Specific**: Vague → Precise
2. **Add Context**: Background information
3. **Use Examples**: Few-shot learning
4. **Set Role/Persona**: "You are a..."
5. **Define Format**: Structure output
6. **Set Constraints**: Limits (length, style, scope)
7. **Chain of Thought**: "Think step by step"
8. **Specify Audience**: Who's the output for?
9. **Include Negative Examples**: What NOT to do
10. **Iterate**: Refine based on results

**Your mission**: Practice ALL 10 techniques in next hour.

---

## STATION 1: Specificity & Context (15 minutes)

### Exercise 1A: Vague → Specific

**Bad Prompt**: "Write about climate change"

**Your Task**: Rewrite this prompt 3 times, each more specific:

**Version 1** (Add specific topic):
```
Write about [specific aspect] of climate change
```

**Version 2** (Add audience):
```
Write about [specific aspect] of climate change for [specific audience]
```

**Version 3** (Add scope + format):
```
Write [format] about [specific aspect] of climate change for [audience],
covering [specific points], in [length]
```

**Test Your Prompts**:
- Run all 3 versions in AI tool
- Compare outputs
- Which version gave the most useful response?

**Example Solution**:
- V1: "Write about renewable energy solutions to climate change"
- V2: "Write about renewable energy solutions to climate change for city policymakers"
- V3: "Write a 500-word policy brief about renewable energy solutions to climate change for city policymakers, covering solar, wind, and implementation costs"

---

### Exercise 1B: Adding Context

**Scenario**: You're using AI to help plan a birthday party.

**Prompt Without Context**:
```
Give me birthday party ideas
```

**Your Task**: Add 5 context details to improve the prompt:
1. Age of person
2. Interests/hobbies
3. Budget
4. Location constraints
5. Number of guests

**Improved Prompt Example**:
```
I'm planning a birthday party for a 10-year-old who loves science and space.
Budget is $300, hosting at home (suburban house with backyard), expecting 15 kids.
Give me 5 theme ideas with specific activities for each.
```

**Test It**: Run both prompts, compare results.

**✅ Checkpoint**: Share your best "context-added" prompt with your partner. Did they think of different context details?

---

## STATION 2: Examples & Format (15 minutes)

### Exercise 2A: Few-Shot Learning

**Your Task**: Teach AI to write commit messages in Drew's style.

**Zero-Shot Prompt** (no examples):
```
Write a commit message for adding a README file to a portfolio repository.
```

**Few-Shot Prompt** (with examples):
```
Here are examples of good commit messages:
- "Add AI timeline research with 10 major milestones"
- "Fix typo in prompt engineering notes"
- "Update README with project goals and setup instructions"

Now write a commit message for adding a README file to a portfolio repository.
Follow the same style: [Action Verb] + [What Changed] + [Context if needed]
```

**Test Both**: Which produces better results?

---

### Exercise 2B: Format Specification

**Scenario**: You want recipe suggestions, but AI gives you paragraphs. You want structured lists.

**Prompt Without Format**:
```
Give me 3 quick dinner recipes
```

**Prompt With Format**:
```
Give me 3 quick dinner recipes. For each recipe, use this format:

**Recipe Name**
- Prep time: [X minutes]
- Ingredients: [bulleted list]
- Steps: [numbered list, max 5 steps]
- Difficulty: [Easy/Medium/Hard]
```

**Test It**: Compare outputs. Does format specification work?

**Experiment**: Try different formats:
- Table format
- JSON format
- Markdown with headers

**✅ Checkpoint**: What format worked best for your use case?

---

## STATION 3: Role & Constraints (15 minutes)

### Exercise 3A: Role-Based Prompting

**Your Task**: Get AI to explain neural networks at different levels.

**Test 3 role-based prompts**:

**Prompt 1** (No role):
```
Explain neural networks
```

**Prompt 2** (Expert role):
```
You are a computer science professor teaching graduate students.
Explain neural networks with technical depth.
```

**Prompt 3** (Beginner-friendly role):
```
You are a patient teacher explaining to a 10-year-old who has never heard of AI.
Explain neural networks using simple analogies and no jargon.
```

**Compare**: How does role change the response?

---

### Exercise 3B: Constraints

**Scenario**: You need a summary, but AI gives you 5 paragraphs. You only have room for 3 sentences.

**Unconstrained Prompt**:
```
Summarize the history of AI
```

**Constrained Prompts** (try each):

**Length Constraint**:
```
Summarize the history of AI in exactly 3 sentences.
```

**Style Constraint**:
```
Summarize the history of AI in 3 sentences. Use simple language, no jargon.
```

**Content Constraint**:
```
Summarize the history of AI in 3 sentences. Focus only on breakthrough moments
(Turing Test, Deep Learning, ChatGPT). Ignore AI winters and setbacks.
```

**Test All Three**: Do constraints improve usefulness?

**✅ Checkpoint**: When are constraints helpful vs. too limiting?

---

## STATION 4: Iteration Challenge (20 minutes)

### The Scenario

**You're creating a study guide generator for CSC-113 students.**

Your goal: Refine a prompt through 4 iterations to produce high-quality study guides.

---

### Iteration 1: Starting Point (Bad)

**Prompt**:
```
Make a study guide
```

**Test It**: What do you get? (Probably generic, not useful)

**Problem Analysis**:
- Too vague (study guide for what?)
- No context (what course? what topic?)
- No format specification
- No constraints

**Document**: What specifically is wrong with this output?

---

### Iteration 2: Add Specificity

**Improved Prompt**:
```
Create a study guide for CSC-113 Module 1, covering GitHub basics,
Sacred Flow workflow, and SAGE setup.
```

**Test It**: Better? What's still missing?

**Problem Analysis**:
- Better topic, but no format
- No guidance on depth/detail
- Who's the audience?

---

### Iteration 3: Add Format & Context

**Improved Prompt**:
```
Create a study guide for CSC-113 Module 1, covering GitHub basics,
Sacred Flow workflow, and SAGE setup.

Format:
- Key concepts (bullet list with definitions)
- Step-by-step workflow (numbered)
- Common mistakes to avoid (list)
- Practice questions (5 questions)

Audience: First-year IT students with no prior GitHub experience.
```

**Test It**: Getting closer? What needs refinement?

---

### Iteration 4: Add Examples & Constraints

**Final Prompt**:
```
Create a study guide for CSC-113 Module 1: GitHub Basics & SAGE Setup.

**Context**: First-year IT students learning GitHub for the first time.
They've completed one assignment (Hello GitHub) and need to review before
Module 2.

**Format**:
1. Key Concepts (5-7 concepts with 1-sentence definitions)
   Example: "Repository: A project folder that tracks all changes to files"

2. Sacred Flow Workflow (7 steps, numbered, with what/why for each)
   Example: "1. Issue - Describe what you'll work on (helps with planning)"

3. Common Mistakes (5 mistakes with how to fix)
   Example: "Committing to main instead of feature branch → Create branch first"

4. Practice Questions (5 questions, mix of definitions and scenarios)
   Example: "What's the difference between Git and GitHub?"

**Constraints**:
- Use simple language (they're beginners!)
- Keep total length under 600 words
- Include exactly 5 practice questions with answers at the end

**Style**: Encouraging and supportive tone (like Drew's teaching style)
```

**Test It**: This should produce a usable study guide!

**✅ Checkpoint**: Compare all 4 iterations. How did each improvement help?

---

### Iteration Documentation

**Fill out this table** (on your worksheet):

| Iteration | What I Added | What Improved | What Still Needs Work |
|-----------|-------------|---------------|------------------------|
| 1 (Bad) | Nothing | N/A | Everything too vague |
| 2 | Specificity | Topic clarity | Format unclear |
| 3 | Format, context | Structure | Needs examples |
| 4 | Examples, constraints | Precise output | (Ready to use!) |

---

## SHARE & DISCUSS (10 minutes)

### Pair-Share Activity

**With your partner**:
1. Show your Iteration 4 prompt
2. Run it and share the output
3. Discuss: What techniques worked best?

### Whole-Class Discussion

**Drew asks**:
- "Which technique was most surprising?"
- "When would you use role-based prompting vs. examples?"
- "How many iterations did it take before you got useful output?"
- "What's the difference between 'good enough' and 'great' prompts?"

**Key Takeaways**:
- First prompts are rarely perfect
- Iteration is normal and expected
- Specific > vague, always
- Different tasks need different techniques

---

## REFLECTION & ASSIGNMENT CONNECTION (5 minutes)

### Individual Reflection

**Write brief answers**:

1. **Technique Mastery**: Which 3 techniques do you feel most comfortable using?

2. **Challenge Area**: Which technique do you want to practice more?

3. **Real-World Application**: Describe one scenario outside class where you'll use these techniques.

4. **Bad Bot → Good Bot**: How will you use iteration to improve your Bad Bot for Assignment 3A?

---

### Assignment Connection

**Drew explains**:
"Module 3 assignments ask you to:
- **A3A: Good Bot** - Iterate your Bad Bot into Good Bot using these techniques
- **A3B: Holiday Shopping** - Apply prompt engineering to real task

**Today's lab gave you**:
- 10 techniques to apply
- Practice iterating (you'll do this for Good Bot)
- Experience comparing outputs (you'll do this for shopping research)
- Documentation approach (track what you try and what works)

**You're ready to transform your Bad Bot!**"

---

## INSTRUCTOR NOTES

### Learning Objectives Addressed
- **MLO 3.1**: Evaluate AI performance and implement improvements ✓
- **MLO 3.2**: Apply prompt engineering techniques ✓
- **CLO3**: Demonstrate effective prompt engineering ✓

### Facilitation Tips

**Pacing**:
- Stations 1-3 can feel rushed (that's OK - exposure over mastery)
- Station 4 (Iteration) is most important - give full 20 minutes
- If running behind, combine Stations 1 & 2

**Grouping**:
- Pairs work best (peer review built in)
- Mix skill levels (stronger students model for struggling students)
- Rotate pairs at each station (new perspectives)

**Common Student Struggles**:

1. **"My prompt isn't working"**
   - Ask: What specifically is wrong with the output?
   - Guide: Which technique addresses that problem?
   - Model: Show your iteration process

2. **"This is too much trial and error"**
   - Reframe: That's the skill! Professional prompt engineers iterate constantly
   - Normalize: First prompts usually fail - that's expected

3. **"The AI still doesn't give me what I want"**
   - Debug together: Read the prompt aloud, identify vague words
   - Check: Are instructions contradictory?
   - Try: Different AI tool (sometimes one works better for a task)

### Assessment (Formative)

**Observe during lab**:
- Are students experimenting (trying different techniques)?
- Are they documenting (filling out iteration table)?
- Can they articulate WHY a prompt improved?

**Collect (optional)**:
- Iteration Challenge worksheet
- Use to gauge readiness for A3A (Good Bot)

---

## EXTENSION ACTIVITIES

### For Students Who Finish Early

**Challenge 1: Technique Combination**
Create ONE prompt that uses 5+ techniques simultaneously. Test it.

**Challenge 2: Comparative Analysis**
Run your best prompt in 3 different AI tools (Claude, ChatGPT, Gemini). Compare outputs. Which handles your prompt best?

**Challenge 3: Create a Template**
Design a reusable prompt template for a common task (e.g., "Explain [concept] to [audience]"). Include placeholders for customization.

**Challenge 4: Negative Examples**
Add "What NOT to do" examples to your prompt. Does it improve output?

---

## APPENDIX A: Lab Worksheet

### Prompt Engineering Lab Worksheet
**Name**: _________________ **Date**: _________

---

#### Station 1: Specificity & Context

**Original Prompt**: Write about climate change

**My Version 1** (specific topic):
```


```

**My Version 2** (+ audience):
```


```

**My Version 3** (+ scope & format):
```


```

**Which version gave the best output?**: ___________

**Why?**: _________________________________________________

---

#### Station 2: Examples & Format

**Few-Shot Prompt** (commit message):
```




```

**Result**: Did examples improve the commit message? Y / N

**Format Experiment** (recipe prompt):
Tested formats: ☐ Bullet list  ☐ Table  ☐ JSON  ☐ Other: _______

**Best format for this use case**: _______________________

---

#### Station 3: Role & Constraints

**Role-Based Prompting** (neural networks):

Output differences observed:
- No role: ____________________________________________________
- Expert role: ________________________________________________
- Beginner role: ______________________________________________

**Constraints Experiment**:

Which constraint type was most effective?
☐ Length  ☐ Style  ☐ Content  ☐ Combination

**When are constraints too limiting?**: ___________________________

---

#### Station 4: Iteration Challenge

| Iteration | Prompt | Output Quality (1-5) | What I Added | What Improved |
|-----------|--------|----------------------|--------------|---------------|
| 1 | | | (Starting point) | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

**Key Learning**: ___________________________________________________

---

#### Reflection

**Top 3 techniques I'm comfortable with**:
1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

**Technique I want to practice more**: ____________________________

**Real-world application**: ________________________________________

**How I'll use this for Good Bot assignment**: ____________________

---

## APPENDIX B: Technique Quick Reference

**Print this as a handout or project on screen**

### 10 Prompt Engineering Techniques

1. **Be Specific**: Replace vague words with precise details
   - Bad: "Write about AI"
   - Good: "Write 3 paragraphs about supervised learning in machine learning"

2. **Add Context**: Give background information
   - Add: Audience, purpose, constraints, existing knowledge

3. **Use Examples** (Few-Shot): Show what you want
   - Format: "Here are 3 good examples: [examples]. Now do this: [task]"

4. **Set Role/Persona**: "You are a [role]"
   - Examples: Teacher, expert, translator, creative writer

5. **Define Format**: Specify output structure
   - Options: Bullet list, table, JSON, numbered steps, markdown

6. **Set Constraints**: Define limits
   - Types: Length, style, scope, complexity

7. **Chain of Thought**: "Think step by step" or "Show your reasoning"
   - Improves complex reasoning tasks

8. **Specify Audience**: Who's the output for?
   - Changes tone, complexity, examples used

9. **Negative Examples**: Show what NOT to do
   - "Don't include [X]" or "Avoid [Y]"

10. **Iterate**: Refine based on results
    - Analyze output → Identify gaps → Add to prompt → Test again

**Remember: Combine techniques for best results!**

---

**frotz → plugh**
