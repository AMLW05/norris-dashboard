# AI Prompt Documentation Template

**Purpose**: Document your AI collaboration journey while learning data structures and algorithms - capture prompts, responses, iterations, and learning insights.
**When to Use**: During every AI interaction (Claude, ChatGPT, GitHub Copilot) while implementing data structures
**Time to Complete**: 2-5 minutes per AI interaction

**UNIQUE TO CSC-249**: This template is specific to CSC-249's pedagogical approach where AI collaboration is REQUIRED and must be documented as part of the learning process.

---

## Why Document AI Collaboration?

In CSC-249, AI tools are **required collaborators**, not cheating. But collaboration must be:
- **Intentional** - Not just copy-paste, but learning conversations
- **Documented** - Show your learning progression through prompts
- **Reflective** - What worked? What didn't? What did you learn?

Drew's philosophy: "AI helps you learn data structures faster and deeper, but ONLY if you're intentional about the collaboration."

Your prompts.txt file demonstrates:
- How you think about problems (what questions you ask)
- How you iterate (first prompt rarely perfect)
- What you understand (quality of prompts improves over time)
- That you learned, not just copied

---

## Template Structure

Each AI interaction session should be documented with:

1. **Context** - What were you trying to accomplish?
2. **Prompt** - Exact prompt you sent to AI
3. **Response** - Key parts of AI's response (not entire response, just useful parts)
4. **Iteration** - If you refined the prompt, show iterations
5. **Learning** - What did this teach you?
6. **Code Used** - What code (if any) did you use from AI response?
7. **Understanding Check** - Can you explain the solution in your own words?

---

## Template

### AI Interaction #[X] - [Date]

**Data Structure/Algorithm**: [Linked List | Hash Table | BST | etc.]
**Context/Problem**: [What were you trying to do? What was blocking you?]

**AI Tool Used**: [ ] Claude [ ] ChatGPT [ ] GitHub Copilot [ ] Other: _______

---

#### Prompt #1
```
[Your exact prompt to AI]
```

**Why this prompt?**: [What did you hope to learn?]

#### Response #1 (Key Parts)
```
[Include the most useful parts of AI's response - code snippets, explanations, etc.]
```

**Initial Understanding**: [What did you understand from this response? What was unclear?]

---

#### Prompt #2 (If Refined)
```
[Your refined/follow-up prompt]
```

**How did you refine?**: [What was unclear? What new question emerged?]

#### Response #2 (Key Parts)
```
[Include the most useful parts of refined response]
```

---

### What I Learned
**Technical Learning**:
- [Specific technical insight about data structure/algorithm]
- [Another technical insight]

**Conceptual Learning**:
- [Deeper understanding of how this works or why]

**AI Collaboration Learning**:
- [What made this prompt effective/ineffective?]
- [How did I improve my prompting?]

---

### Code Integration

**Code I Used from AI Response**:
```cpp
// OR ```python
[Exact code you integrated from AI response]
```

**Why I chose this code**: [What made this solution good?]

**How I verified understanding**:
- [ ] Traced through code line-by-line with example input
- [ ] Drew memory diagram of how this code works
- [ ] Rewrote code from scratch without looking
- [ ] Explained code to someone else (or rubber duck)
- [ ] Modified code to handle edge case AI didn't consider
- [ ] Other: _______

**What I changed from AI suggestion**: [Any modifications you made and why?]

---

### Reflection

**Prompt Quality (1-5)**: ___
(1 = Vague, unhelpful response; 5 = Perfect, exactly what I needed)

**What made this prompt work (or not work)?**:


**If I faced this problem again, what would I ask differently?**:


**Can I explain this concept without AI's help now?**: [ ] Yes [ ] Mostly [ ] No


---

## Example (Filled)

### AI Interaction #7 - Feb 18, 2026

**Data Structure/Algorithm**: Doubly-Linked List - Delete Operation
**Context/Problem**: Implementing deleteAt(index) function. Getting segfault when deleting elements. Valgrind shows "invalid read" on line 47 but I can't figure out what pointer is wrong.

**AI Tool Used**: [x] Claude [ ] ChatGPT [ ] GitHub Copilot [ ] Other: _______

---

#### Prompt #1
```
I'm implementing a doubly-linked list in C++. My deleteAt(int index) function is causing a segfault.
Here's my code:

void LinkedList::deleteAt(int index) {
    if (index < 0 || head == nullptr) return;

    Node* current = head;
    for (int i = 0; i < index; i++) {
        current = current->next;
        if (current == nullptr) return;
    }

    current->prev->next = current->next;
    current->next->prev = current->prev;
    delete current;
}

Valgrind shows "invalid read" on line with current->prev->next. What's wrong?
```

**Why this prompt?**: Stuck for 2 hours. Tried debugging myself, drew diagrams, still don't see the issue. Providing specific code and error helps AI pinpoint problem.

#### Response #1 (Key Parts)
```
The issue is in this line:
    current->prev->next = current->next;

This will crash when:
1. Deleting the first node (index 0) - current->prev is nullptr
2. Deleting the last node - current->next is nullptr

You need to check these edge cases:

void LinkedList::deleteAt(int index) {
    if (index < 0 || head == nullptr) return;

    Node* current = head;
    for (int i = 0; i < index; i++) {
        current = current->next;
        if (current == nullptr) return;
    }

    // Handle deleting first node
    if (current->prev != nullptr) {
        current->prev->next = current->next;
    } else {
        head = current->next;  // Deleting head
    }

    // Handle deleting last node
    if (current->next != nullptr) {
        current->next->prev = current->prev;
    } else {
        tail = current->prev;  // Deleting tail
    }

    delete current;
}

The key is: always check if pointers are null before dereferencing them.
```

**Initial Understanding**: Oh! I wasn't checking if prev/next were nullptr before accessing them. When deleting first node (index 0), prev IS nullptr, so current->prev->next crashes. Same for deleting last node.

But wait - why does the loop allow me to reach invalid nodes? Need to understand this better.

---

#### Prompt #2 (If Refined)
```
Thanks! That makes sense about null checks. But I'm confused about another part:

In my for loop, I check `if (current == nullptr) return;` to prevent accessing invalid nodes.
But the crash happens AFTER the loop, when I try to update prev/next pointers.

Why does my null check in the loop not prevent the crash?
Can you explain what's happening when I delete the first node (index 0)?
```

**How did you refine?**: AI solved immediate problem but I don't understand WHY the loop check didn't catch it. Want deeper understanding of execution flow.

#### Response #2 (Key Parts)
```
Great question! Let's trace through what happens when you delete index 0:

1. Loop: for (int i = 0; i < 0; i++) - this condition is FALSE immediately
   So the loop NEVER RUNS when index is 0.

2. current is still pointing to head (hasn't moved)

3. You try: current->prev->next
   Since current is head, current->prev is nullptr (head has no previous)
   nullptr->next causes segfault

Your null check `if (current == nullptr)` is INSIDE the loop.
But when deleting first node, loop doesn't execute, so check never runs!

The issue is: you're checking if you REACHED null during traversal,
but not checking if the node you're AT has null prev/next pointers.

Two different scenarios:
- "Did I walk off the end of the list?" (your check)
- "Is the node I'm deleting at head or tail?" (needed check)
```

**Now I understand**: My loop null check prevents walking past the end. But it doesn't check if the node I'm deleting is at a boundary (head/tail). These are different edge cases. Mind blown.

---

### What I Learned

**Technical Learning**:
- **Always check pointers before dereferencing**: current->prev->next crashes if prev is nullptr
- **Edge cases for linked list deletion**: first node (prev is nullptr), last node (next is nullptr), single node (both nullptr)
- **Head and tail pointers must be updated**: When deleting first/last node, head/tail must move

**Conceptual Learning**:
- **Two types of null checks needed**: (1) Did I walk off end during traversal? (2) Is node I'm operating on at boundary?
- **Loop boundaries vs pointer boundaries**: My loop check prevents invalid traversal, but doesn't prevent invalid dereferencing at boundaries
- **Why drawing diagrams matters**: Should've drawn deletion at index 0 - would've seen prev is nullptr immediately

**AI Collaboration Learning**:
- **Specific code + error message = better response**: Giving exact code and valgrind output led to precise answer
- **Iterating on prompts reveals deeper understanding**: First prompt got solution, second prompt got *understanding*
- **Asking "why" after solution is crucial**: "Thanks, but why doesn't my check work?" led to breakthrough insight

---

### Code Integration

**Code I Used from AI Response**:
```cpp
// Integrated AI's null-checking pattern
void LinkedList::deleteAt(int index) {
    if (index < 0 || head == nullptr) return;

    Node* current = head;
    for (int i = 0; i < index; i++) {
        current = current->next;
        if (current == nullptr) return;
    }

    // Check if deleting first node (AI suggestion)
    if (current->prev != nullptr) {
        current->prev->next = current->next;
    } else {
        head = current->next;
    }

    // Check if deleting last node (AI suggestion)
    if (current->next != nullptr) {
        current->next->prev = current->prev;
    } else {
        tail = current->prev;
    }

    delete current;
}
```

**Why I chose this code**:
- Handles all edge cases (first node, last node, middle node)
- Clear null checks before dereferencing
- Updates head/tail when needed
- Clean, readable structure

**How I verified understanding**:
- [x] Traced through code line-by-line with example: deleting index 0, index 2, last index
- [x] Drew memory diagram of head/tail pointers before/after deletion in each case
- [x] Rewrote code from scratch without looking (30 min later)
- [x] Explained code to roommate who's also taking CSC-249
- [x] Modified code to handle edge case AI didn't consider: what if list only has 1 node? (prev AND next are nullptr)
- [x] Added unit tests for all edge cases: empty list, single node, delete first, delete last, delete middle

**What I changed from AI suggestion**:
Added explicit check for single-node deletion case:
```cpp
// My addition - handle single node list
if (current->prev == nullptr && current->next == nullptr) {
    head = nullptr;
    tail = nullptr;
}
```

---

### Reflection

**Prompt Quality (1-5)**: 4 (First prompt), 5 (Second prompt)

**What made this prompt work (or not work)?**:
**Prompt #1 worked because**: Specific code, exact error message, context about what I'd tried (Valgrind output). AI could pinpoint exact problem.

**Prompt #2 worked even better because**: Asked "why" to understand concept, not just fix. This is the key to learning vs copy-paste.

**If I faced this problem again, what would I ask differently?**:
Next time, I'll lead with: "Here's my code, here's the error, but more importantly, here's what I DON'T UNDERSTAND about how this could happen." Asking for understanding up front.

Also, I should've included my mental model in prompt #1: "I thought my null check in the loop would prevent this - why doesn't it?" Showing my reasoning helps AI correct misconceptions.

**Can I explain this concept without AI's help now?**: [x] Yes [ ] Mostly [ ] No

Yes! I can now explain: "In doubly-linked list deletion, you need TWO types of null checks: (1) did I walk past the end during traversal (handled by loop check), and (2) is the node I'm deleting at a boundary position where prev or next is nullptr (handled by if statements). These are different scenarios that need different checks."

---

## Guidelines for Effective AI Prompts in CSC-249

### Good Prompts Include:
1. **Specific Context**: "I'm implementing X data structure/algorithm"
2. **Concrete Code**: Paste actual code, not descriptions
3. **Exact Errors**: Compiler output, valgrind output, test failures
4. **What You've Tried**: "I tried X, then Y, still stuck"
5. **Conceptual Confusion**: "I thought this would work because..."

### Bad Prompts to Avoid:
1. **Too Vague**: "How do I make a linked list?"
2. **No Context**: Just pasting code with "this doesn't work"
3. **Homework Dumping**: "Implement BST for me"
4. **No Follow-Up**: Taking first response without checking understanding
5. **No Verification**: Not testing if AI's solution actually works

### The "Understand Before Use" Rule:
**NEVER use AI-generated code you don't understand.**

If AI gives you code, you MUST:
1. Trace through it line-by-line with example input
2. Draw memory diagrams of how it works
3. Explain it in your own words
4. Modify it to handle an edge case AI didn't cover

If you can't do these, you don't understand it yet. Ask AI to explain, don't just copy-paste.

---

## Integration with CSC-249 Grading

Your prompts.txt file is **part of your grade** in CSC-249 (worth 4% of participation grade).

**I'm grading on**:
1. **Consistency** - Are you documenting ALL AI interactions? (Not just convenient ones)
2. **Depth** - Are you asking "why" questions, not just "how" questions?
3. **Iteration** - Do you refine prompts when first response isn't clear?
4. **Understanding** - Do you verify understanding before using code?
5. **Reflection** - Do you analyze what makes prompts effective/ineffective?
6. **Honesty** - Do you document failed prompts and misunderstandings?

**I'm NOT grading on**:
- Number of prompts (quality over quantity)
- Always getting perfect responses (failure is learning)
- Never using AI code (that's the point! Use it, but understand it)

---

## Common Mistakes in AI Documentation

- **Mistake**: Only documenting prompts that worked perfectly
  **Better approach**: Document failed prompts too! "I asked X, got unhelpful response because I was too vague, refined to Y, much better." Shows learning.

- **Mistake**: Pasting entire AI responses (pages of text)
  **Better approach**: Extract KEY parts - the insight, the code snippet, the explanation that mattered. Summarize.

- **Mistake**: No reflection on prompt quality
  **Better approach**: Every interaction ends with: "This prompt worked/didn't work because..." Self-awareness improves prompting.

- **Mistake**: Not documenting understanding verification
  **Better approach**: Show how you verified: "Drew memory diagram, rewrote from scratch, added edge case test." Prove you didn't just copy-paste.

- **Mistake**: Prompts that are homework dumps
  **Better approach**: Prompts about specific blockers. "I implemented insert, but deleteAt() segfaults at line 47 when deleting first node. Here's my code and valgrind output."

---

## Tips from Drew

**Your prompts.txt file tells a story.** It's the story of your learning journey from "I don't understand pointers" to "I can implement complex data structures." Make it a good story.

**Failed prompts are more valuable than successful ones.** A prompt that got unhelpful response, then you refined it and got breakthrough - that's the learning arc. Document it.

**The quality of your prompts will improve over time.** Sprint 1 prompts: "How do I use pointers?" Sprint 4 prompts: "Why does my red-black tree rotation violate balance property after inserting node with value X in this specific case?" You should see evolution.

**"Why" questions lead to understanding. "How" questions lead to code.** Both are useful, but "why" questions are learning questions. "Why does this segfault?" is better than "How do I fix this segfault?"

**Document your refinement process.** The best prompts are rarely first attempts. Show your iterations. This teaches you what makes prompts effective.

**Rubber duck your AI responses.** After AI explains something, try explaining it to someone else (or yourself). If you can't, you don't understand yet. Ask AI to clarify.

**Use AI to verify your analysis.** "I think this algorithm is O(n log n) because [reasoning]. Is my analysis correct?" AI can check your work, not just give answers.

---

## CSC-249 Specific Prompting Patterns

### Pattern: Memory Leak Debugging
**Good Prompt**:
```
I'm implementing a BST destructor in C++. Valgrind shows:
"24 bytes in 3 blocks are definitely lost"

Here's my destructor code:
[code]

I think the issue is I'm not deallocating child nodes recursively,
but I'm not sure how to traverse and delete in correct order.
Can you explain the deletion pattern?
```

**Why it works**: Specific tool (valgrind), exact error, your code, your hypothesis about cause.

---

### Pattern: Algorithm Complexity Analysis
**Good Prompt**:
```
I implemented quicksort with this pivot selection:
[code]

I believe this is O(n log n) average case because:
- Partitioning is O(n) - traverses array once
- Recursion depth is log n on average (if pivot splits roughly in half)
- T(n) = 2T(n/2) + O(n) which solves to O(n log n)

But worst case is O(n²) when pivot is always smallest/largest element.

Is my analysis correct? Am I missing any subtleties?
```

**Why it works**: Shows your reasoning, asks for verification, demonstrates understanding of best/average/worst cases.

---

### Pattern: Pointer/Reference Confusion
**Good Prompt**:
```
I'm confused about when to use:
- Node* current
- Node*& current
- Node** current

In this linked list insert function:
[code]

I understand * is pointer, but what does & mean when used with pointer?
When would I need ** (pointer to pointer)?

Can you explain with a concrete example from linked list operations?
```

**Why it works**: Specific confusion point, concrete context (not abstract), requests example to ground understanding.

---

## Final Thoughts

AI collaboration in CSC-249 isn't about getting answers faster. It's about learning data structures deeper and more efficiently.

Used well, AI is like having an expert tutor available 24/7 who:
- Explains concepts with examples
- Debugs your code and explains why bugs happened
- Verifies your understanding
- Provides alternative implementations to compare

Used poorly, AI is a copy-paste machine that prevents you from learning.

**The difference is: Are you documenting and reflecting on the collaboration?**

Your prompts.txt file proves you're learning, not just copying.

Make it a file you'd be proud to show in a job interview: "Here's how I learned data structures - by asking increasingly sophisticated questions and verifying my understanding at each step."
