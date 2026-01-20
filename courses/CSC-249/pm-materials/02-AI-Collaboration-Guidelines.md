# AI Collaboration Guidelines for CSC-249

**Purpose**: Guide ethical AI use and prompts.txt documentation
**Philosophy**: AI as learning partner, not replacement for learning
**Requirement**: All CSC-249 assignments require prompts.txt file

---

## Core Principle: AI as Collaborator, Not Cheater

In CSC-249, **using AI is required**, not forbidden. But there's a crucial difference:

### Acceptable AI Collaboration ✓
- Asking AI to explain concepts you don't understand
- Using AI to debug errors after you've tried yourself
- Requesting AI to review your code for improvements
- Getting AI to suggest alternative approaches
- Using AI to generate test cases
- Asking AI to explain complex pointer operations

### Academic Dishonesty ✗
- Asking AI for complete solution without understanding it
- Copy-pasting AI code without being able to explain it
- Using AI to take shortcuts that prevent learning
- Not documenting AI collaboration in prompts.txt
- Claiming AI-generated code as entirely your own work

**The Litmus Test**: Can you explain every line of code you submit?

---

## Why Document AI Collaboration?

### Transparency
Industry professionals document their research, Stack Overflow searches, library usage. AI is just another tool—you should document how you used it.

### Learning Visibility
Your prompts.txt shows your **learning journey**:
- What confused you?
- How did you work through problems?
- What did you try before asking AI?
- How did you refine AI's suggestions?

### Ethical Practice
Hiding AI use = claiming someone else's work as yours.
Documenting AI use = professional attribution.

### Grading Fairness
Instructors can distinguish:
- Student who asked AI to explain, then implemented (learning)
- Student who asked AI for answer, pasted it (not learning)

Your prompts.txt provides context for your work.

---

## The prompts.txt File Format

### Required for Every Assignment

Every assignment submission must include `prompts.txt` documenting all AI interactions.

### Format

```
================================================================================
PROMPT SESSION: [Date/Time] - [Purpose]
================================================================================

PROMPT:
[Exact prompt you sent to AI tool]

AI TOOL: [Claude, ChatGPT, GitHub Copilot, etc.]

AI RESPONSE:
[AI's response - can summarize if very long]

MY ACTION:
[What you did with AI's response]

WHAT I LEARNED:
[What this interaction taught you]

================================================================================
```

### Example: Good AI Collaboration

```
================================================================================
PROMPT SESSION: 2026-01-20 14:30 - Understanding linked list delete
================================================================================

PROMPT:
I'm implementing delete() for a singly-linked list in Python. I understand I need
to traverse the list to find the node with matching data, but I'm confused about
how to handle deleting the head node vs a middle node. Can you explain the edge
cases I need to handle?

AI TOOL: Claude

AI RESPONSE:
When deleting from a singly-linked list, you have three cases:

1. Delete head node:
   - Special case because there's no previous node
   - Just move head pointer to head.next
   - Don't forget to handle single-element list (head.next is None)

2. Delete middle node:
   - Need to track previous node
   - Set previous.next = current.next (bypass deleted node)

3. Delete non-existent element:
   - Return False or raise exception
   - Decide on your error handling strategy

Key insight: You need TWO pointers (current and previous) to delete from
middle because you can't go backwards in singly-linked list.

MY ACTION:
I implemented delete() with three cases as explained. Added edge case handling
for empty list and single-element list. Chose to return True/False rather than
exception for not-found case.

WHAT I LEARNED:
The need for two pointers (current + previous) clicked when I realized you can't
go backwards in singly-linked list. In a doubly-linked list, you'd only need one
pointer because nodes have prev pointers. Also learned importance of thinking
through edge cases BEFORE implementing.

CODE IMPLEMENTED:
def delete(self, data):
    # Case 1: Empty list
    if self.head is None:
        return False

    # Case 2: Delete head
    if self.head.data == data:
        self.head = self.head.next
        self._size -= 1
        return True

    # Case 3: Delete middle or end
    previous = self.head
    current = self.head.next

    while current:
        if current.data == data:
            previous.next = current.next
            self._size -= 1
            return True
        previous = current
        current = current.next

    # Not found
    return False

================================================================================
```

### Example: Problematic AI Collaboration

```
================================================================================
PROMPT SESSION: 2026-01-20 14:30 - Implementing delete
================================================================================

PROMPT:
Write the delete method for a singly-linked list in Python

AI TOOL: ChatGPT

AI RESPONSE:
[Code provided by AI]

MY ACTION:
Copied the code

WHAT I LEARNED:
How to delete from linked list

================================================================================
```

**Problem**: No evidence of understanding. Just asked for solution and copied.
**Consequence**: Instructor will ask you to explain the code. If you can't, you'll need to redo.

---

## AI Collaboration Spectrum

### Level 1: Conceptual Understanding (Best for Learning)

**Prompt Pattern**: "Explain [concept] to me"

**Examples**:
```
"Explain how pointers work in C++ and why they're useful for linked lists"

"What is Big O notation and how do I calculate it for this loop?"

"Can you explain the difference between pass-by-value and pass-by-reference?"
```

**Why This Works**:
- You learn the concept BEFORE implementing
- AI acts as tutor, not code generator
- You still have to implement yourself

**Grade Impact**: Highly valued. Shows you sought understanding.

---

### Level 2: Design Discussion (Good for Learning)

**Prompt Pattern**: "How would you approach [problem]?"

**Examples**:
```
"What's the best way to implement a hash table in Python? What are the tradeoffs
between different collision resolution strategies?"

"I need to implement Dijkstra's algorithm. What data structures should I use and why?"

"How should I structure my test cases for a binary search tree? What edge cases
should I consider?"
```

**Why This Works**:
- AI helps you plan approach
- You still make design decisions
- You implement based on understanding

**Grade Impact**: Good. Shows thoughtful planning.

---

### Level 3: Debugging Help (Acceptable, If Done Right)

**Prompt Pattern**: "I tried [X], got [error], here's my code and what I've attempted"

**Examples**:
```
"I'm getting a segmentation fault in my linked list delete method. Here's my code:
[paste code]
I think the issue is when deleting the last element because I'm not updating the
previous node's next pointer to NULL, but I'm not sure how to fix it."

"My hash table resize isn't working correctly. When I print the table after resize,
half the elements are missing. Here's my resize method:
[paste code]
I think I might not be rehashing correctly?"
```

**Why This Works**:
- Shows you tried first
- Explains your hypothesis
- AI guides you to solution rather than giving it

**Grade Impact**: Acceptable. Shows problem-solving process.

**Red Flag**: Asking AI to debug without trying yourself first.

---

### Level 4: Code Review (Acceptable)

**Prompt Pattern**: "Review my code for [specific concern]"

**Examples**:
```
"I implemented insert_at() for my linked list. Can you review it for edge cases
I might have missed? Specifically, I want to make sure I handle invalid indices
correctly."

"Here's my quicksort implementation. Is my pivot selection strategy good, or
should I use a different approach? I'm worried about worst-case performance."
```

**Why This Works**:
- You wrote the code first
- Seeking review is professional practice
- You're learning to improve your own code

**Grade Impact**: Positive. Professional skill.

**Red Flag**: Asking for review but then rewriting code entirely based on AI suggestions without understanding why.

---

### Level 5: Code Generation (Use Sparingly)

**Prompt Pattern**: "Write [specific function]"

**Examples**:
```
"Write a function to generate test data for my hash table"

"Create a Python script to visualize my binary search tree"

"Write boilerplate code for a C++ class with constructor, destructor, and copy constructor"
```

**When Acceptable**:
- Boilerplate code (constructors, getters/setters)
- Test data generation
- Visualization/tooling (not core assignment)

**When NOT Acceptable**:
- Core algorithm implementation (the point of the assignment)
- Data structure implementation (what you're supposed to learn)
- Anything you can't explain line-by-line

**Grade Impact**: Neutral if documented and understood. Negative if you can't explain it.

---

## The "Explain It to Me" Test

### Required for Sprint Review

During sprint reviews, instructor may ask:
- "Walk me through how your delete method works"
- "Explain why you chose this hash function"
- "What's the time complexity of this operation and why?"

**If you used AI**:
- ✓ You should be able to explain clearly
- ✓ You should know why it works
- ✓ You should be able to modify it if asked

**If you just copy-pasted**:
- ✗ You'll struggle to explain
- ✗ You won't understand edge cases
- ✗ You won't be able to debug or modify

**Consequence of Can't Explain**:
- Redo assignment without AI
- Lower grade on process (shows you didn't learn)
- Required meeting with instructor

---

## Best Practices for AI Collaboration

### 1. Explain Before Code

**Good Pattern**:
1. Ask AI to explain concept
2. Implement yourself
3. Ask AI to review your implementation

**Example Sequence**:
```
Prompt 1: "Explain how to implement insert_at(index, data) for a singly-linked list"
[Read and understand AI's explanation]

Prompt 2: "I implemented it based on your explanation. Here's my code. What did I miss?"
[AI reviews, suggests improvement]

Prompt 3: "Thanks! Why do I need to handle the index==0 case separately?"
[AI explains, deepens understanding]
```

### 2. Show Your Work First

**Good Pattern**:
```
"I tried implementing quicksort. Here's my code:
[paste code]

It's giving incorrect results on this input: [5, 2, 8, 1, 9]
Expected: [1, 2, 5, 8, 9]
Actual: [1, 2, 5, 9, 8]

I think the issue is in my partition function, but I'm not sure what I'm doing wrong.
Can you help me understand what's incorrect?"
```

**Why This Works**: Shows you tried, identified problem area, have specific question.

**Bad Pattern**:
```
"My code doesn't work. Fix it.
[paste code]"
```

**Why This Fails**: No effort, no learning, just asking AI to do your work.

### 3. Iterative Refinement

**Good Pattern**:
```
Session 1: "How does a hash table work?"
Session 2: "What collision resolution strategies exist and when should I use each?"
Session 3: "I'm implementing chaining. How should I handle the linked lists at each bucket?"
Session 4: "Here's my insert method using chaining. Does this look correct?"
```

**Why This Works**: Progressive learning, building understanding.

**Bad Pattern**:
```
"Implement a complete hash table with chaining in Python"
[Copy-paste entire response]
```

**Why This Fails**: No learning journey, no understanding.

### 4. Document Modifications

**Good prompts.txt Entry**:
```
AI RESPONSE:
[AI suggested this implementation]

MY ACTION:
I used AI's suggestion for the overall structure, but made three changes:
1. Changed from raising exception to returning None on invalid index
2. Added size tracking to avoid traversing list every time
3. Used different variable names for clarity

WHAT I LEARNED:
AI's approach of handling edge cases first (empty list, invalid index) makes
code cleaner than checking in middle of logic. Will use this pattern going forward.
```

### 5. Ask "Why" Not Just "What"

**Better Prompts**:
- "Why is using a sentinel node helpful in linked lists?"
- "Why does quicksort have O(n^2) worst case but O(n log n) average case?"
- "Why do we use prime numbers for hash table sizes?"

**Worse Prompts**:
- "Give me linked list code with sentinel node"
- "Write quicksort"
- "What size should my hash table be?"

---

## AI Tool Recommendations

### Claude (Anthropic)
**Best for**: Explanations, conceptual understanding, code review
**Strength**: Patient explanations, good at Socratic teaching
**Use when**: You want to understand deeply

### ChatGPT (OpenAI)
**Best for**: Quick answers, code examples, debugging help
**Strength**: Fast, good code generation
**Use when**: You need quick help or examples

### GitHub Copilot
**Best for**: Code completion, boilerplate, test generation
**Strength**: Context-aware suggestions in your IDE
**Use when**: Writing repetitive code, generating tests
**Warning**: Easy to accept suggestions without understanding—document in prompts.txt!

### Cursor / Other AI IDEs
**Best for**: Interactive coding assistance
**Strength**: Multi-turn conversations while coding
**Use when**: Working through complex implementation
**Warning**: Still document major AI interactions in prompts.txt

---

## prompts.txt Grading Rubric

### Excellent (90-100%)
- Every significant AI interaction documented
- Shows progression from understanding to implementation
- Evidence of modifying AI suggestions, not just copying
- Reflections show deep learning
- Clear distinction between AI help and your work

### Good (80-89%)
- Most AI interactions documented
- Shows some iteration and refinement
- Some evidence of understanding
- Basic reflections present

### Adequate (70-79%)
- Some AI interactions documented
- Minimal reflection
- Mostly copy-paste with little modification
- Unclear what you learned

### Poor (<70%)
- Missing prompts.txt entirely
- Obvious AI-generated code with no documentation
- No evidence of understanding
- Copy-paste without modification

**Automatic Deduction**: -10 points if prompts.txt missing entirely

---

## Common Mistakes to Avoid

### Mistake 1: "AI Generated This Code" Only
**Problem**:
```
AI GENERATED THIS CODE:
[paste code]
```

**Why It's Bad**: No context, no learning, just attribution.

**Better**:
```
PROBLEM I WAS SOLVING:
Needed to implement delete for BST with three cases

PROMPT:
"Explain the three cases for deleting a node from a BST and how to handle each"

AI RESPONSE:
[explanation]

MY IMPLEMENTATION:
[your code]

WHAT I LEARNED:
[insights]
```

### Mistake 2: Fake Timestamps
**Problem**: All prompts show same time but claim to be over multiple days.

**Why We Notice**: Writing style identical, no progression in understanding.

**Solution**: Actually document as you go, not all at end.

### Mistake 3: "I Learned How to Delete from Linked List"
**Problem**: Vague, no specifics.

**Better**:
"I learned that deleting from singly-linked list requires tracking previous node
because you can't traverse backwards. I also learned to handle three cases:
delete head (no previous), delete middle (bypass node), delete not-found (return false).
The two-pointer technique (current + previous) is key."

### Mistake 4: No Evidence of Struggle
**Problem**: All prompts show perfect understanding, no debugging, no confusion.

**Reality Check**: Everyone struggles. If your prompts.txt shows no struggle,
it looks fake or like you're hiding your actual AI usage.

**Better**: Document when you were confused, when AI's first answer didn't help,
when you had to ask follow-up questions.

### Mistake 5: Documented After the Fact
**Problem**: Writing prompts.txt after finishing assignment to "check the box."

**Why We Notice**:
- All sessions on same day
- No iteration or refinement
- Prompts don't match commit history
- Writing style too polished

**Solution**: Document AS YOU WORK. Open prompts.txt alongside your AI tool.

---

## Ethical AI Use Scenarios

### Scenario 1: AI Gives Wrong Answer

**What Happened**:
```
I asked Claude to explain how to implement heapify. Claude's explanation had a bug
in the index calculation. When I implemented it, my tests failed.
```

**What to Document**:
```
PROMPT: [Original question about heapify]

AI RESPONSE: [Claude's explanation with bug]

MY ACTION:
Implemented based on AI's explanation, but tests failed. Realized AI's index
calculation was wrong (used parent = i/2 instead of parent = (i-1)/2 for 0-indexed array).

DEBUGGING:
Drew out heap array on paper, traced through indices manually, found the off-by-one error.

CORRECTED IMPLEMENTATION:
[Your corrected code]

WHAT I LEARNED:
1. AI can be wrong—always test and verify
2. Drawing data structures on paper helps debug
3. 0-indexed arrays need (i-1)/2 for parent, not i/2
```

**Why This Is Good**: Shows critical thinking, debugging skills, and learning.

### Scenario 2: AI Suggests More Complex Solution Than Needed

**What Happened**:
```
I asked ChatGPT how to implement a queue. It suggested using a doubly-linked list.
The assignment only requires basic queue with array backing.
```

**What to Document**:
```
PROMPT: "How should I implement a queue for CSC-249 assignment?"

AI RESPONSE:
[ChatGPT suggests doubly-linked list with head/tail pointers]

MY DECISION:
AI's solution is more complex than required. Assignment asks for array-based queue
with circular buffer. I'll use AI's explanation of queue operations (enqueue, dequeue)
but implement with array instead of linked list.

IMPLEMENTATION:
Used array with front/back indices and modulo arithmetic for circular buffer.

WHAT I LEARNED:
AI doesn't always know assignment requirements. I need to evaluate AI suggestions
against what's actually asked for. But AI's explanation of queue operations helped
me understand what my array implementation needs to do.
```

**Why This Is Good**: Shows judgment, adapting AI help to actual requirements.

### Scenario 3: Multiple AI Tools Give Different Answers

**What Happened**:
```
Claude suggested one hash function, ChatGPT suggested different one. Not sure which to use.
```

**What to Document**:
```
PROMPT TO CLAUDE: "What's a good hash function for strings?"
CLAUDE RESPONSE: [Suggests polynomial rolling hash]

PROMPT TO CHATGPT: Same question
CHATGPT RESPONSE: [Suggests simple character sum]

MY ANALYSIS:
Claude's polynomial hash has better distribution (less collisions) but more expensive
to compute. ChatGPT's sum is faster but more collisions for similar strings.

MY CHOICE:
Using Claude's polynomial hash because assignment emphasizes collision handling,
so fewer collisions = less complex collision resolution testing.

IMPLEMENTATION:
[Your hash function based on Claude's approach]

WHAT I LEARNED:
Different hash functions have tradeoffs (speed vs distribution). Choice depends
on use case. For learning collision resolution, better distribution is more valuable
than speed.
```

**Why This Is Good**: Shows evaluation, justification, and understanding tradeoffs.

---

## Sprint-Specific AI Documentation

### Document AI Use Per Story

In sprint work, organize prompts.txt by user story:

```
================================================================================
SPRINT 1 - LINKED LIST IMPLEMENTATION
================================================================================

STORY 1: NODE CLASS (2 points)
--------------------------------------------------------------------------------

[Prompt sessions for Node class]

STORY 2: LINKEDLIST BASIC OPERATIONS (5 points)
--------------------------------------------------------------------------------

[Prompt sessions for insert/delete]

STORY 3: DISPLAY METHODS (2 points)
--------------------------------------------------------------------------------

[Prompt sessions for display/traversal]

...
================================================================================
```

### AI Collaboration in Retrospective

Include AI effectiveness in retrospective:

```
## AI Collaboration Effectiveness

### What Worked
- Asking AI to explain pointer mechanics BEFORE implementing helped me understand
- Using AI to review my code caught edge case in delete method I missed
- AI-generated test cases helped me think of scenarios I hadn't considered

### What Didn't Work
- First prompt was too vague ("help with linked list") - got generic response
- Tried to have AI debug without showing my code - wasted time
- Copy-pasted AI's insert_back without understanding, had to rewrite when it broke

### Improvements for Sprint 2
- Ask more specific questions with context
- Always show my code when asking for debugging help
- Explain AI's solution to myself before implementing
```

---

## Industry Perspective: Why This Matters

### Real-World AI Use

Professional developers use AI daily:
- GitHub Copilot for code completion
- ChatGPT for debugging help
- Claude for design discussions
- AI code review tools

**Industry Expectation**: Transparency about AI use, understanding of AI-generated code.

### Job Interview Reality

Interviewers will ask:
- "Explain this code on your resume"
- "Walk me through your implementation of [data structure]"
- "Why did you make this design choice?"

**If you copy-pasted without understanding**: You can't answer these questions.

**If you used AI as learning tool**: You can explain thoroughly, discuss tradeoffs.

### Capstone Preparation

CTS-289 capstone requires:
- Self-managed project
- Professional documentation
- Demonstration of technical competency

**If you copy-pasted in CSC-249**: You'll struggle in capstone.

**If you learned with AI in CSC-249**: You'll excel in capstone, have strong portfolio.

---

## Quick Reference: AI Collaboration Checklist

Before submitting any assignment:

- [ ] prompts.txt file exists
- [ ] All significant AI interactions documented
- [ ] Each prompt session includes:
  - [ ] Date/time and purpose
  - [ ] Exact prompt sent
  - [ ] AI tool used
  - [ ] AI's response (or summary)
  - [ ] What you did with the response
  - [ ] What you learned
- [ ] Can explain every line of code you submit
- [ ] Modified AI suggestions rather than copy-paste
- [ ] Documented when AI was wrong or suggestions adjusted
- [ ] Reflections show specific learning, not vague statements
- [ ] AI collaboration referenced in sprint retrospective (if applicable)

---

## Resources

**AI Tools**:
- Claude: https://claude.ai
- ChatGPT: https://chat.openai.com
- GitHub Copilot: https://github.com/features/copilot

**Academic Integrity**:
- Wake Tech Academic Integrity Policy
- ACM Code of Ethics: https://www.acm.org/code-of-ethics

**AI Ethics**:
- Anthropic's AI Safety: https://www.anthropic.com/safety
- OpenAI's Usage Policies: https://openai.com/policies

**Templates**:
- prompts.txt template: `pm-materials/templates/prompts_template.txt`
- AI collaboration review template: `pm-materials/templates/AI_COLLABORATION_REVIEW_template.md`

---

## Final Thoughts

### AI is a Tool, Not a Shortcut

Using AI effectively is a skill. Like any tool:
- **Hammer**: Used right, builds houses. Used wrong, smashes fingers.
- **AI**: Used right, accelerates learning. Used wrong, prevents learning.

### You're Training for the Real World

In 5 years, every developer will use AI daily. But employers will still expect:
- Understanding of fundamentals (data structures, algorithms)
- Ability to explain and debug code
- Critical thinking about AI suggestions
- Ethical, transparent AI use

**CSC-249 prepares you for this reality.**

### When in Doubt, Ask

Unsure if your AI use is appropriate?
- Ask in office hours
- Post in Discord #ai-collaboration channel
- Email instructor

**Better to ask than assume.**

---

**Last Updated**: January 2026
**For**: CSC-249 Data Structures & Algorithms
**Instructor**: Drew Norris

**Remember**: Document your AI collaboration honestly. Your prompts.txt shows your learning journey, not your weaknesses. We expect AI use—we just expect you to learn from it.
