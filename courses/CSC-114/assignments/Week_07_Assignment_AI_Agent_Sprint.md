# Week 7 Assignment: "AI Agent Development - Sprint 2"
## CSC-114 AI I - Autonomous Agents + Improved PM

**Due**: End of Week 7 (Friday, 11:59 PM)
**Points**: 50 (Sprint 2 deliverable)
**Submission**: GitHub repository + Sprint 2 artifacts

---

## ASSIGNMENT OVERVIEW

**Sprint 2** (Weeks 7-8): Build AI agents that make autonomous decisions WHILE applying Sprint 1 retrospective lessons.

**Technical Focus**: AI Agent Design
- Goal-based agents
- Reflex agents
- Planning and decision-making
- Environment interaction

**PM Focus**: Improved Sprint Execution
- Apply retrospective action items
- Use Sprint 1 velocity for planning
- Refine estimation accuracy
- Better burndown management

---

## SPRINT 2 PLANNING

### Your Velocity Data
- Sprint 1: 12 points completed
- Sprint 2 capacity: **Plan for 12 points**

### Sprint Goal
"Build functional AI agents with autonomous decision-making capabilities"

### User Stories

**Story 1**: Simple Reflex Agent (3 pts)
- Implement agent that responds to immediate environment
- Example: Thermostat agent

**Story 2**: Goal-Based Agent (5 pts)
- Agent pursues specific goals
- Example: Pathfinding agent

**Story 3**: Learning Agent (5 pts)
- Agent improves performance over time
- Example: Q-learning agent

**Story 4**: Multi-Agent System (5 pts - STRETCH)
- Multiple agents interact
- Example: Predator-prey simulation

**Total**: 13 points planned (slightly over velocity for stretch goal)

---

## TECHNICAL IMPLEMENTATION

### Environment: Grid World
Build agents that navigate 10x10 grid with:
- Start position
- Goal position
- Obstacles
- Rewards/penalties

### Agent Types to Implement

**1. Reflex Agent**
```python
class ReflexAgent:
    def perceive(self, environment):
        # Sense immediate surroundings
        return environment.get_adjacent_cells()
   
    def act(self, percept):
        # Simple rules: avoid obstacles, move toward goal
        if percept['north'] == 'goal':
            return 'NORTH'
        elif percept['south'] == 'obstacle':
            return random.choice(['EAST', 'WEST'])
        # ... more rules
```

**2. Goal-Based Agent (A* pathfinding)**
```python
class GoalBasedAgent:
    def __init__(self, goal):
        self.goal = goal
   
    def plan(self, current_state, goal_state):
        # Use A* algorithm to find optimal path
        return astar_search(current_state, goal_state)
   
    def execute_plan(self, plan):
        for action in plan:
            self.perform(action)
```

**3. Learning Agent (Q-Learning)**
```python
class LearningAgent:
    def __init__(self):
        self.q_table = {}  # State-action values
        self.learning_rate = 0.1
        self.discount = 0.9
   
    def update_q_value(self, state, action, reward, next_state):
        # Q-learning update rule
        old_q = self.q_table.get((state, action), 0)
        max_next_q = max([self.q_table.get((next_state, a), 0)
                          for a in self.actions])
        new_q = old_q + self.learning_rate * (
            reward + self.discount * max_next_q - old_q
        )
        self.q_table[(state, action)] = new_q
```

---

## PM DELIVERABLES

**Same as Sprint 1, but improved**:
- Sprint planning document
- Daily standups (10 entries)
- Burndown chart
- Sprint board management
- **NEW**: Action items from Sprint 1 retro tracked

### Action Items Tracking

In `sprint_2_action_items_tracking.md`:

```markdown
## Sprint 1 Retrospective Actions - Sprint 2 Implementation

### Action 1: Add buffer for new technology
**Status**: ✓ Implemented
**How**: Added 2 points to Learning Agent story (was 3, now 5)
**Result**: Estimate felt realistic, completed on time

### Action 2: Daily standup reminder
**Status**: ✓ Implemented  
**How**: Set 9 AM phone reminder
**Result**: Completed standups 9/10 days (vs. 6/10 in Sprint 1)

[Continue for all action items]
```

---

## GRADING (50 points)

**Technical Implementation (25 points)**
- All 3 agent types implemented (15 pts)
- Agents function autonomously (5 pts)
- Grid world environment works (3 pts)
- Visualization/demo clear (2 pts)

**PM Execution (20 points)**
- Sprint planning uses Sprint 1 velocity (3 pts)
- Daily standups consistent (5 pts)
- Burndown chart maintained (4 pts)
- Action items tracked (5 pts)
- Sprint board managed (3 pts)

**Improvement (5 points)**
- Demonstrates learning from Sprint 1
- Better estimation or execution
- Clear application of retrospective insights

---

## LOOKING AHEAD

Week 8: Sprint 2 Retrospective
- Compare Sprint 1 vs. Sprint 2
- Calculate 2-sprint average velocity
- Refine PM practices further

---

**Drew's Note**: Sprint 2 is where PM practices start feeling natural instead of forced. You'll notice yourself USING the sprint board instead of just UPDATING it. That shift is huge—it means the tools are working for you!
