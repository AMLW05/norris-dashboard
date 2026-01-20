# Module 8 Activity: Capstone Demo Day - Integration Project Presentations

**Duration**: 120 minutes (full class session)
**Format**: Team presentations and peer feedback
**Materials Needed**:
- Projector/large screen for presentations
- Each team's integration project (deployed if possible)
- Presentation slides (optional but recommended)
- Process portfolio (4 sprint boards, velocity charts, retrospectives)
- Technical documentation (architecture diagrams, complexity analysis)
- Peer evaluation forms (printed or digital)
- Celebration supplies (certificates, class photo)

**Learning Objectives**:
- Present technical data structures project to diverse audiences
- Demonstrate integration of 3+ data structures in cohesive application
- Defend architectural and algorithmic choices with complexity analysis
- Articulate process growth across 4 sprints
- Provide constructive technical peer feedback
- Reflect on semester-long learning journey from create-first pedagogy
- Showcase professional development workflow and AI collaboration

---

## Overview

**This is it.** Eight modules. Four complete sprints. One semester of data structures, algorithms, and professional development.

Today you demonstrate mastery: not just implementing data structures, but choosing the right structure for the right problem, analyzing complexity, and shipping working software.

**Demo Day isn't just about your code.** It's about:
1. **Technical Execution**: Did you build it correctly?
2. **Design Justification**: Did you choose the right data structures? Why?
3. **Process Maturity**: Did you grow as an engineer across 4 sprints?
4. **Communication**: Can you explain complex technical decisions clearly?

You'll present to:
- **Peers** (who understand the technical depth)
- **Instructor** (who will probe your design decisions)
- **Yourselves** (reflecting on growth since Module 1)

**By the end of Demo Day, you'll:**
- Present 12-minute technical demonstration with confidence
- Defend data structure choices with Big O analysis
- Show sprint evolution from Sprint 1 → Sprint 4
- Celebrate completing a rigorous data structures course
- Have portfolio-ready project documentation

**This is where learning becomes showcasing. Let's make it count.**

---

## Pre-Activity Setup (Before Class)

**Teams should prepare:**

1. **Working Project**:
   - Fully functional integration of 3+ data structures
   - Tested with comprehensive test cases
   - Deployed version (preferred) or local demo with backup
   - Sample inputs/scenarios prepared
   - Known edge cases handled

2. **Presentation Materials**:
   - Slides (10-15 slides max) OR live code walkthrough
   - Architecture diagram showing data structure integration
   - Complexity analysis table (operations and Big O)
   - Performance benchmarks (if applicable)
   - Sprint velocity chart (Sprints 1-4)

3. **Process Portfolio**:
   - Screenshots of all 4 sprint boards
   - Velocity tracking chart
   - Key retrospective insights
   - AI collaboration examples (prompts.txt excerpts)
   - Git commit history showing workflow

4. **Team Roles**:
   - **Technical Lead**: Architecture and data structure choices
   - **Demo Lead**: Live demonstration and walkthrough
   - **Process Lead**: Sprint methodology and velocity analysis
   - (In 2-person teams, combine roles)

**Instructor prepares:**
- Presentation order (randomized or by team choice)
- Strict timer (12-minute presentations + 5-minute Q&A)
- Peer evaluation rubric
- Q&A question bank
- Celebration materials (certificates, awards)

---

## Demo Day Structure

### Timeline (120 minutes total)

**0-5 min**: Opening & Expectations
**5-95 min**: Team Presentations (5-6 teams × 17 min each)
  - 12 min presentation + demo
  - 5 min Q&A
**95-110 min**: Peer Feedback & Reflection
**110-120 min**: Instructor Closing & Celebration

---

## Part 1: Opening - Setting the Stage (5 minutes)

### Instructor Opening

**Set the tone:**

> "Welcome to Capstone Demo Day. You started this course implementing a simple stack. Today, you're presenting systems that integrate binary search trees, hash tables, graphs, and heaps—all working together to solve real problems.
>
> Eight weeks ago, many of you weren't sure what O(log n) meant. Today, you can defend why you chose a BST over a hash table based on access patterns and complexity analysis. That's extraordinary growth.
>
> As you watch each presentation, think about these questions:
> 1. **What problem does this solve, and why does it matter?**
> 2. **Why did they choose these specific data structures?**
> 3. **How did their sprint process evolve over four iterations?**
> 4. **What can I learn from their approach for my own future projects?**
>
> You have 12 minutes to present and 5 minutes for Q&A. This mirrors conference talks and client demos—time limits are strict. Practice conciseness.
>
> Let's celebrate what you've built. Team 1, you're up."

---

## Part 2: Team Presentations (90 minutes)

### Presentation Structure (Recommended)

Each team has **12 minutes** maximum. Suggested structure:

**1. The Problem & Solution (2 minutes)**
- What real-world problem are you solving?
- Who is your target user?
- Why does this problem need data structures?
- High-level solution overview

**Example:**
> "Students struggle to plan course schedules that satisfy prerequisites while minimizing total semesters. Our system uses graphs for prerequisite tracking, heaps for priority-based course selection, and hash tables for O(1) course lookups. We solve 4-year degree plans in under 100ms."

**2. Data Structure Integration (3 minutes)**
- **Architecture diagram**: Show how structures connect
- **Justify each choice**:
  - "We used a BST for student records because we needed sorted access by ID"
  - "We used a hash table for course codes because we needed O(1) lookup by name"
  - "We used a graph for prerequisites because courses have dependency relationships"
- **Explain alternatives considered**:
  - "We initially tried a sorted array but insertion was O(n). BST gives us O(log n)."

**Example slide:**
```
Data Structure Integration:

Graph (Adjacency List)
├── Purpose: Model course prerequisites
├── Why: Represents dependency relationships naturally
└── Complexity: O(V + E) traversal with BFS

Hash Table (Chaining)
├── Purpose: Course catalog lookup by code
├── Why: O(1) average case for searching courses
└── Load factor: 0.7, resize at 0.75

Binary Search Tree
├── Purpose: Student records sorted by ID
├── Why: Inorder traversal gives sorted list, O(log n) search
└── Balance: Using AVL rotations for worst-case guarantee

Heap (Min-Heap)
├── Purpose: Priority queue for course scheduling
├── Why: Always get highest-priority course in O(log n)
└── Priority: Based on course difficulty + prerequisites met
```

**3. Live Demo (4 minutes)**
- **MOST IMPORTANT PART**
- Show your system working with real inputs
- Narrate what's happening:
  - "Now the graph BFS is finding the shortest prerequisite path..."
  - "The hash table returns this course in O(1) time..."
  - "The BST is rebalancing after this insertion..."
- Demonstrate 2-3 key scenarios
- If demo breaks, have backup: recorded video or screenshots

**4. Complexity Analysis (2 minutes)**
- **Table showing operation complexities**:

| Operation               | Data Structure Used | Time Complexity | Justification               |
|-------------------------|---------------------|-----------------|----------------------------|
| Add student             | BST                 | O(log n)        | Balanced tree insert       |
| Find course             | Hash Table          | O(1) avg        | Direct hash lookup         |
| Generate schedule       | Graph + Heap        | O(E log V)      | Dijkstra-like algorithm    |
| List students by ID     | BST                 | O(n)            | Inorder traversal          |

- **Why this matters**: "By choosing BST over linked list, we reduced student search from O(n) to O(log n). With 10,000 students, that's 10,000x vs 13 comparisons."

**5. Sprint Evolution & Process Insights (2 minutes)**
- **Velocity chart**: Show Sprints 1 → 4
- **Key retrospective insights**:
  - Sprint 1: "Underestimated complexity, learned to break down stories"
  - Sprint 2: "Used Sprint 1 velocity to plan better, hit 90% of commitment"
  - Sprint 3: "Process became automatic, focused on optimization"
  - Sprint 4: "Autonomous sprint, applied 3 sprints of learning"
- **AI collaboration**: Show 1-2 prompts that led to breakthroughs
- **What worked**: "Daily standups kept us aligned"
- **What we'd do differently**: "Should have started testing earlier"

**6. Challenges & Lessons Learned (1 minute)**
- **Biggest technical challenge**: "Graph cycle detection was harder than expected—had to debug DFS recursion"
- **What we're most proud of**: "The entire system uses O(log n) or better for all critical operations"
- **If we had more time**: "Add AVL tree for guaranteed balance, implement A* for better path optimization"

**7. Q&A (5 minutes)**
- **Audience asks questions**
- **Instructor probing questions**:
  - "Why did you choose adjacency list over adjacency matrix for your graph?"
  - "How would your system perform with 1 million users instead of 1,000?"
  - "What happens if two courses have circular prerequisites?"
  - "Walk me through the collision resolution in your hash table"
  - "What's the space complexity of your solution?"

---

## Presentation Rubric (What We're Evaluating)

**Problem & Solution Clarity (10 points)**
- Clear problem statement
- Identified real-world application
- Solution overview makes sense

**Data Structure Selection & Justification (25 points)**
- Appropriate structures chosen for use cases
- Clear rationale for each choice (with Big O analysis)
- Considered and rejected alternatives
- Integration makes architectural sense

**Technical Execution (25 points)**
- Working demo (or strong backup)
- All data structures implemented correctly
- Code quality and organization
- Edge cases handled
- Testing evidence

**Complexity Analysis (15 points)**
- Correct Big O for all operations
- Justified with reasoning
- Compared alternatives with analysis
- Space complexity considered

**Process Portfolio (10 points)**
- Sprint velocity tracked across all 4 sprints
- Retrospective insights documented
- Evidence of PM practices (issues, branches, PRs)
- AI collaboration documented
- Growth/improvement visible

**Presentation Skills (10 points)**
- Clear communication
- Engaging demo
- Managed time well (≤12 min)
- Professional delivery

**Q&A Handling (5 points)**
- Answered questions thoughtfully
- Defended decisions with evidence
- Admitted unknowns when appropriate
- Engaged constructively

**Total: 100 points**

---

## Part 3: Peer Feedback & Reflection (15 minutes)

### Peer Feedback Form

After all presentations, students complete peer feedback for each team.

**Peer Feedback Template:**

```
Team Name: _______________________
Your Name: _______________________

1. What was the most impressive technical aspect of this project?
   (Data structure choice, algorithm, integration, etc.)

2. Which data structure choice did you think was smartest? Why?

3. What's one thing they could improve technically?
   (Be specific and constructive)

4. What process practice did they use that you want to adopt?

5. On a scale of 1-5, rate their:
   - Problem clarity: ___
   - Data structure justification: ___
   - Technical execution: ___
   - Complexity analysis: ___
   - Process documentation: ___

6. Overall impression (1-5 stars): ⭐ ⭐ ⭐ ⭐ ⭐

7. One thing you learned from this presentation:
```

**Guidelines for feedback:**
- Be specific: "Great use of BST for sorted access" > "Good job"
- Be constructive: Focus on what they can improve, not what's wrong
- Be technical: Reference data structures, algorithms, complexity
- Be kind: Remember you're giving feedback to peers who worked hard

**Instructor collects and compiles feedback for each team after class.**

---

## Part 4: Individual Self-Reflection (Submit Later)

### Reflection Prompt

**Write a 2-page reflection** (submit via Canvas by end of week):

**Prompts:**

**1. Technical Growth**
- Module 1: You implemented a simple Stack
- Module 8: You integrated 3+ complex data structures
- Trace your learning journey. What was the biggest conceptual leap?
- Which data structure was hardest to understand? How did you overcome that?

**2. Create-First Pedagogy**
- Drew's approach: Build before theory, learn through iteration
- How did this differ from other CS courses?
- Did building first help or hinder your learning? Be honest.
- Would you want this approach in future courses?

**3. Complexity Analysis**
- When did Big O notation "click" for you?
- How has understanding complexity changed how you think about code?
- Give an example from your capstone where complexity analysis drove a decision

**4. Sprint Process**
- Sprint 1: What was your velocity? How accurate were estimates?
- Sprint 4: How had your process improved?
- What PM practice was most valuable?
- What PM practice felt like unnecessary overhead?
- Will you use sprint methodology in future projects?

**5. AI Collaboration**
- How did AI tools (Claude/ChatGPT/Copilot) help you learn?
- Did AI collaboration make you understand data structures better or worse?
- What was your most valuable AI prompt this semester?
- How will you use AI as a professional developer?

**6. The Capstone Project**
- Why did you choose the data structures you chose?
- What would you do differently if you started over?
- What are you most proud of technically?
- How would you extend this project with more time?

**7. Looking Forward**
- Which data structure will you use most in your career?
- What topic from CSC-249 do you want to explore deeper?
- How will you continue learning data structures and algorithms?
- What's your next technical project?

**8. Advice for Future Students**
- If you could give one piece of advice to students taking CSC-249 next semester, what would it be?

---

## Part 5: Instructor Closing & Celebration (10 minutes)

### Instructor Closing Remarks

**Themes to emphasize:**

**1. Recognize Technical Growth**
> "Eight modules ago, you debugged append() in a linked list. Today, you defended graph traversal algorithms and analyzed time complexity trade-offs. You've gone from understanding arrays to architecting systems with optimal data structures. That's mastery."

**2. Celebrate Process Maturity**
> "Sprint 1, you struggled to estimate story points. Sprint 4, you autonomously planned, executed, and delivered complex projects. That's professional development. Companies don't just need engineers who can code—they need engineers who can plan, collaborate, and ship. You've proven you can do both."

**3. Highlight Integration Thinking**
> "The capstone wasn't about implementing a BST. You already did that in Module 6. It was about recognizing when a BST is the right choice, when it's not, and how to combine multiple structures to solve complex problems. That's architectural thinking."

**4. AI Collaboration Success**
> "You didn't just use AI to get answers—you documented your learning journey in prompts.txt. You learned to prompt effectively, iterate, and understand the code AI generated. That's the skill: AI as thought partner, not code generator. You're prepared for an AI-assisted development world."

**5. What's Next**
> "Data structures are everywhere:
> - Databases: B-trees, hash indexes
> - Operating systems: Process scheduling with heaps
> - Compilers: Syntax trees, symbol tables with hash tables
> - Games: Pathfinding with graphs (A*, Dijkstra)
> - Machine Learning: Decision trees, k-d trees for nearest neighbor
>
> Keep learning:
> - LeetCode: Practice algorithmic problem-solving
> - Advanced courses: Algorithms (CTS-285), Capstone (CTS-289)
> - Open source: Contribute to projects using data structures
> - Build: Personal projects applying what you learned"

**6. Final Words**
> "You built a stack in Module 1. You shipped a multi-structure integration project in Module 8. You grew from students who could code to engineers who can architect, analyze, and deliver.
>
> I'm proud of every team here. You've earned this. Now go solve hard problems with the right data structures."

### Celebration

**Ideas:**

1. **Certificates of Completion**
   - Personalized with student name
   - "Mastery of Data Structures & Algorithms"
   - Signed by instructor

2. **Class Photo**
   - Teams with projects on screen
   - Professional photo for LinkedIn/portfolios

3. **"Best Of" Awards** (voted by peers or instructor):
   - Best Data Structure Integration
   - Most Creative Application
   - Best Technical Execution
   - Best Complexity Analysis
   - Most Improved Process (Sprint 1 → Sprint 4)
   - Best Presentation
   - Best AI Collaboration Documentation

4. **Project Showcase**
   - Post all projects to course website
   - Create public demo day gallery
   - Share on social media (with permission)

5. **Snacks/Pizza** (if budget allows)
   - Celebrate with food!

6. **Playlist** (upbeat music during feedback time)

---

## Sample Demo Day Schedule (120 minutes)

| Time      | Activity                     | Notes                           |
|-----------|------------------------------|---------------------------------|
| 0:00-0:05 | Opening Remarks              | Instructor sets expectations    |
| 0:05-0:22 | Team 1 Presentation + Q&A    | 12 min + 5 min                  |
| 0:22-0:39 | Team 2 Presentation + Q&A    | 12 min + 5 min                  |
| 0:39-0:56 | Team 3 Presentation + Q&A    | 12 min + 5 min                  |
| 0:56-1:01 | Break                        | Quick stretch                   |
| 1:01-1:18 | Team 4 Presentation + Q&A    | 12 min + 5 min                  |
| 1:18-1:35 | Team 5 Presentation + Q&A    | 12 min + 5 min                  |
| 1:35-1:52 | Team 6 Presentation + Q&A    | 12 min + 5 min (if applicable)  |
| 1:52-2:07 | Peer Feedback Forms          | Students write feedback         |
| 2:07-2:17 | Closing & Celebration        | Awards, photos, cheers          |

---

## Instructor Notes

### Before Demo Day

**Technical Preparation:**
- [ ] Test projector/screen, HDMI adapters
- [ ] Backup laptop in case of student tech failure
- [ ] Test internet (for deployed demos)
- [ ] Have USB with backup demo videos

**Materials Preparation:**
- [ ] Print peer feedback forms (or create Google Form)
- [ ] Prepare certificates/awards
- [ ] Print presentation order
- [ ] Set up visible timer
- [ ] Prepare Q&A question bank
- [ ] Camera ready for photos

**Logistics:**
- [ ] Room arranged for presentations
- [ ] Reserve buffer time (some teams may run over)
- [ ] Confirm all teams are ready (check-in 24 hours before)

### During Demo Day

**As Facilitator:**
- **Enforce time strictly**: 12-minute warning at 11 minutes, cut off at 12
- **Ask at least 2 questions per team** (models engagement)
- **Celebrate technical achievements**: "That O(log n) optimization is excellent!"
- **Connect presentations**: "Team 3's graph approach differs from Team 1's—interesting comparison"
- **Encourage peer questions**
- **Take photos** of teams presenting

**Probing Questions to Ask:**
- "Walk me through why you chose [data structure] over [alternative]"
- "What's the time complexity of [operation]? How did you verify that?"
- "How would this scale to 1 million records?"
- "What happens in the worst case for [operation]?"
- "I see you used [structure]. What about [alternative]?"
- "Your Sprint 1 velocity was X, Sprint 4 was Y. What caused the change?"
- "Show me one AI prompt that really helped you learn"

**Red Flags:**
- Demo fails and team panics → Help pivot to backup
- Team goes way over time → Politely cut off, move to Q&A
- Audience disengaged → Ask provocative question
- Weak complexity analysis → Probe deeper, teach in the moment
- Can't defend design choice → "What would you research next time?"

### After Demo Day

**Immediate (same day):**
- [ ] Compile peer feedback and distribute to teams
- [ ] Post photos to class forum/Discord
- [ ] Send congratulatory message
- [ ] Note standout projects for recommendation letters

**Within a week:**
- [ ] Grade presentations using rubric
- [ ] Write individual feedback for each team
- [ ] Collect reflection essays
- [ ] Update course materials based on what worked

**Longer term:**
- [ ] Showcase best projects on course website
- [ ] Encourage student research symposium presentations
- [ ] Write LinkedIn recommendations for standout students
- [ ] Connect students with internship opportunities
- [ ] Document lessons learned for next semester

---

## Teaching Philosophy Notes

**Demo Day validates the journey.** Students who struggled with linked list pointers in Module 4 are now defending graph algorithms. That visible growth is as important as the technical outcome.

**Process matters.** Don't let presentation focus overwhelm process documentation. Half the learning was sprint planning, retrospectives, and velocity tracking. Emphasize process growth as much as technical execution.

**Complexity analysis is the differentiator.** Anyone can implement a BST. Engineers who can justify why BST over hash table, backed by Big O analysis, are thinking at a higher level. Probe this in Q&A.

**AI collaboration transparency.** Students who document AI prompts aren't "cheating"—they're demonstrating professional skill. Celebrate thoughtful AI usage. Question copy-paste without understanding.

**Celebrate struggle.** "Our graph traversal initially had infinite loops" is a better story than "everything worked first try." Normalize debugging and iteration as core engineering skills.

**Public recognition matters.** Awards, certificates, photos—these aren't just ceremony. They're validation that hard work matters. Don't skip the celebration.

---

## Example Presentation (Instructor Reference)

**Project**: "CourseFlow - Intelligent Degree Planner"

**Slide 1: Title**
- Project name, team members, CSC-249

**Slide 2: The Problem**
- Students take extra semesters due to poor course planning
- Prerequisites create complex dependencies
- Manual planning takes hours, often errors

**Slide 3: The Solution**
- Automated degree planning system
- Models prerequisites as graphs
- Optimizes schedule using data structures

**Slide 4: Architecture Diagram**
```
┌─────────────┐
│ Course      │──────> Hash Table (course code → course object)
│ Catalog     │         O(1) lookup
└─────────────┘

┌─────────────┐
│ Prerequisite│──────> Graph (adjacency list)
│ Network     │         BFS for shortest path, DFS for cycle detection
└─────────────┘

┌─────────────┐
│ Student     │──────> BST (sorted by student ID)
│ Records     │         O(log n) search, inorder traversal for sorted list
└─────────────┘

┌─────────────┐
│ Course      │──────> Min-Heap (priority queue)
│ Prioritizer │         Extract highest-priority course in O(log n)
└─────────────┘
```

**Slide 5: Data Structure Justification**
- Hash table: "Course lookup by code must be O(1)"
- Graph: "Prerequisites are naturally dependency relationships"
- BST: "Need sorted student lists frequently"
- Heap: "Priority-based scheduling requires extracting min efficiently"

**Slide 6: Live Demo**
- [Show UI: enter major, see 4-year plan]
- "Graph BFS finds shortest path through prerequisites"
- "Heap extracts next highest-priority course"

**Slide 7: Complexity Analysis Table**
[As shown in example earlier]

**Slide 8: Sprint Velocity Chart**
- Sprint 1: 6 points, Sprint 2: 8 points, Sprint 3: 10 points, Sprint 4: 11 points
- "Learned to estimate better with each sprint"

**Slide 9: Key Challenges**
- "Detecting circular prerequisites with DFS"
- "Hash table resizing during large imports"

**Slide 10: Lessons Learned**
- "Always benchmark before optimizing"
- "Retrospectives catch issues early"
- "AI is great for algorithms, but you must understand the code"

**Slide 11: Q&A**

---

**This is your moment. Show what you've built. We're proud of you.**

🎉 **CONGRATULATIONS ON COMPLETING CSC-249: DATA STRUCTURES & ALGORITHMS!** 🎉
