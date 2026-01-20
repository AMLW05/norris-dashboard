# M07-A2: Real-World Graph Application

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 7 - Graphs & Advanced Algorithms (Application Project)
**Week**: 14
**Points**: 50 (30 technical + 20 process reflection)
**Due**: End of Week 14

---

## Assignment Overview

Apply your graph implementation to solve a REAL-WORLD problem: build a city navigation system OR social network analyzer OR course prerequisite planner. This demonstrates graphs in action, not just theory.

**Philosophy**: "Data structures solve real problems." You've learned stacks, queues, trees, heaps, graphs—now prove you can apply them to authentic challenges. This bridges academic CS to professional software engineering.

---

## Learning Objectives

By completing this assignment, you will:

1. Model real-world system as graph problem
2. Apply graph algorithms (BFS, DFS, Dijkstra) to solve practical problems
3. Complete cumulative retrospective analyzing all 4 sprints
4. Reflect on full PM process learning journey
5. Demonstrate synthesis of course concepts

**Bloom's Level**: Evaluate, Create (CLO1, CLO2, CLO4, CLO5)

---

## Part 1: Choose Your Application Domain (Select ONE) (30 points)

### Option A: City Navigation System

Build a city map with shortest path routing.

**Requirements**:
1. **Graph Model**: Cities/intersections as vertices, roads as weighted edges
2. **Data**:
   - Define 15+ locations (cities or intersections)
   - Define 20+ roads with distances
   - Use real or fictional city
3. **Features**:
   - Find shortest path between any two locations (Dijkstra)
   - Find all locations within X miles (BFS with distance limit)
   - Check if city is fully connected (DFS connectivity check)
4. **Interface**:
   ```python
   nav = CityNavigator()
   nav.add_location("Home")
   nav.add_location("Work")
   nav.add_road("Home", "Work", distance=5.2)

   path, distance = nav.shortest_route("Home", "Airport")
   print(f"Route: {path}, Distance: {distance} miles")

   nearby = nav.locations_within("Home", radius=10)
   print(f"Within 10 miles: {nearby}")
   ```

---

### Option B: Social Network Analyzer

Build a social network graph with friend connections.

**Requirements**:
1. **Graph Model**: People as vertices, friendships as edges
2. **Data**:
   - Define 20+ people
   - Define 30+ friendship connections
   - Can use fictional data or model real social network
3. **Features**:
   - Find degrees of separation (BFS shortest path)
   - Find friend suggestions (friends of friends)
   - Detect communities/clusters (connected components)
   - Find influencers (vertex with most connections)
4. **Interface**:
   ```python
   social = SocialNetwork()
   social.add_person("Alice")
   social.add_person("Bob")
   social.add_friendship("Alice", "Bob")

   degrees = social.degrees_of_separation("Alice", "Charlie")
   print(f"Alice and Charlie are {degrees} degrees apart")

   suggestions = social.friend_suggestions("Alice")
   print(f"Friend suggestions for Alice: {suggestions}")

   influencers = social.find_influencers(top_n=5)
   print(f"Top influencers: {influencers}")
   ```

---

### Option C: Course Prerequisite Planner

Build a course prerequisite graph for degree planning.

**Requirements**:
1. **Graph Model**: Courses as vertices, prerequisites as directed edges
2. **Data**:
   - Define 15+ courses
   - Define prerequisite relationships
   - Use real courses from your degree program
3. **Features**:
   - Topological sort (valid course ordering)
   - Find all prerequisites for a course (DFS from course backwards)
   - Detect circular prerequisites (cycle detection)
   - Suggest semester-by-semester plan
4. **Interface**:
   ```python
   planner = CoursePlanner()
   planner.add_course("CSC-113", credits=3)
   planner.add_course("CSC-134", credits=3)
   planner.add_prerequisite("CSC-134", requires="CSC-113")

   order = planner.topological_sort()
   print(f"Valid course order: {order}")

   prereqs = planner.get_all_prerequisites("CSC-249")
   print(f"To take CSC-249, you need: {prereqs}")

   has_cycle = planner.detect_circular_prerequisites()
   print(f"Circular prerequisites: {has_cycle}")
   ```

---

## Implementation Guidelines

### Step 1: Design Your Graph Model

Create `GRAPH_MODEL_DESIGN.md`:

```markdown
# Graph Model Design - [Your Application]

## Domain Description
[Describe the real-world system you're modeling]

## Graph Representation

**Vertices represent**: [What are the nodes?]
**Edges represent**: [What are the connections?]
**Weighted or unweighted?**: [Choice and reasoning]
**Directed or undirected?**: [Choice and reasoning]

## Example Graph Structure

[Draw or describe a small example]

Example:
```
Home ---5.2mi--- Work
 |                |
3.1mi           2.4mi
 |                |
Store ----4.8mi- Airport
```

## Data Source
[Where does your data come from? Real or fictional?]

## Algorithms Applied

1. **Algorithm**: [e.g., Dijkstra]
   **Purpose**: [e.g., shortest route]
   **Why it fits**: [e.g., weighted edges represent distances]

2. **Algorithm**: [e.g., BFS]
   **Purpose**: [e.g., find locations within radius]
   **Why it fits**: [e.g., level-order traversal gives distance tiers]

3. **Algorithm**: [e.g., DFS]
   **Purpose**: [e.g., connectivity check]
   **Why it fits**: [e.g., can reach all vertices = connected]
```

### Step 2: Implement Your Application

Use your `GraphList` or `GraphMatrix` from M07-A1 as foundation.

**Python template** (adapt to your domain):

```python
from graph import GraphList  # Your graph implementation

class CityNavigator:
    """Real-world application: City navigation system."""

    def __init__(self):
        self.graph = GraphList(directed=False)  # Undirected for roads
        self.locations = {}  # Map location names to vertex IDs
        self.next_id = 0

    def add_location(self, name):
        """Add a location (vertex) to the map."""
        if name not in self.locations:
            self.locations[name] = self.next_id
            self.next_id += 1

    def add_road(self, loc1, loc2, distance):
        """Add a road (edge) between two locations."""
        if loc1 not in self.locations:
            self.add_location(loc1)
        if loc2 not in self.locations:
            self.add_location(loc2)

        id1 = self.locations[loc1]
        id2 = self.locations[loc2]
        self.graph.add_edge(id1, id2, weight=distance)

    def shortest_route(self, start, end):
        """Find shortest route using Dijkstra."""
        from graph_algorithms import dijkstra

        start_id = self.locations[start]
        end_id = self.locations[end]

        distance, path_ids = dijkstra(self.graph, start_id, end_id)

        # Convert vertex IDs back to location names
        id_to_name = {v: k for k, v in self.locations.items()}
        path_names = [id_to_name[id] for id in path_ids]

        return path_names, distance

    def locations_within(self, center, radius):
        """Find all locations within radius using BFS."""
        from graph_algorithms import bfs

        center_id = self.locations[center]
        visit_order, distances = bfs(self.graph, center_id)

        # Filter by radius
        id_to_name = {v: k for k, v in self.locations.items()}
        nearby = [id_to_name[id] for id, dist in distances.items()
                  if dist <= radius and id != center_id]

        return nearby

    def is_connected(self):
        """Check if all locations are reachable using DFS."""
        from graph_algorithms import dfs_recursive

        if not self.locations:
            return True

        start_id = 0
        visited = dfs_recursive(self.graph, start_id)

        return len(visited) == len(self.locations)
```

### Step 3: Create Realistic Dataset

**Data file** (e.g., `city_data.txt` or `city_data.py`):

```python
# Wake County Navigation System Data

city_nav = CityNavigator()

# Add locations
locations = [
    "Raleigh", "Durham", "Cary", "Apex", "Wake Forest",
    "Holly Springs", "Morrisville", "Garner", "Fuquay-Varina",
    "Knightdale", "Wendell", "Zebulon", "Rolesville",
    "Clayton", "Smithfield"
]

for loc in locations:
    city_nav.add_location(loc)

# Add roads with distances (in miles)
roads = [
    ("Raleigh", "Durham", 23),
    ("Raleigh", "Cary", 10),
    ("Raleigh", "Garner", 12),
    # ... add 20+ more roads
]

for loc1, loc2, dist in roads:
    city_nav.add_road(loc1, loc2, dist)
```

### Step 4: Test Your Application

Create comprehensive tests:

```python
def test_city_navigator():
    nav = CityNavigator()

    # Load data
    # ... (load your dataset)

    # Test 1: Shortest route
    path, distance = nav.shortest_route("Raleigh", "Durham")
    print(f"Route from Raleigh to Durham: {path}")
    print(f"Distance: {distance} miles")
    assert distance > 0

    # Test 2: Locations within radius
    nearby = nav.locations_within("Raleigh", radius=15)
    print(f"Within 15 miles of Raleigh: {nearby}")
    assert "Cary" in nearby  # Cary is 10 miles away

    # Test 3: Connectivity
    assert nav.is_connected() == True

    # Test 4: All-pairs shortest paths (benchmark)
    import time
    start = time.time()
    for loc1 in locations[:5]:
        for loc2 in locations[:5]:
            if loc1 != loc2:
                nav.shortest_route(loc1, loc2)
    elapsed = time.time() - start
    print(f"25 shortest path queries: {elapsed:.3f} seconds")

    print("✓ All tests passed!")
```

**Grading - Technical Implementation** (30 points):
- Graph model design document (5 pts)
- Application class implementation (10 pts)
- 3+ algorithms applied correctly (9 pts)
- Realistic dataset (15+ vertices, 20+ edges) (3 pts)
- Test suite demonstrating functionality (3 pts)

---

## Part 2: Cumulative Sprint Retrospective (ALL 4 SPRINTS) (12 points)

### Create `CUMULATIVE_RETROSPECTIVE.md`

```markdown
# Cumulative Retrospective: All 4 Sprints

## Sprint Metrics Summary

| Sprint | Goal | Planned | Completed | Velocity | Variance |
|--------|------|---------|-----------|----------|----------|
| Sprint 1 | Linked List | [X] | [Y] | [Y] | [%] |
| Sprint 2 | Hash Table | [X] | [Y] | [Y] | [%] |
| Sprint 3 | BST & Heap | [X] | [Y] | [Y] | [%] |
| Sprint 4 | Graphs | [X] | [Y] | [Y] | [%] |

**Average Velocity**: [Z] points
**Velocity Trend**: [Increasing/Decreasing/Stable - explain]
**Average Variance**: [X]%
**Estimation Improvement**: Sprint 1 variance = [A]%, Sprint 4 = [B]%, improvement = [C]%

---

## Process Evolution

### Sprint 1: Learning the Basics
**What I learned**: [Key PM learnings from first sprint]
**Challenges**: [What was hard?]
**Velocity**: [X] points

### Sprint 2: Velocity-Based Planning
**What I learned**: [Using Sprint 1 data to plan Sprint 2]
**Improvements from Sprint 1**: [Specific changes made]
**Velocity**: [Y] points ([Change] from Sprint 1)

### Sprint 3: PM Becoming Habitual
**What I learned**: [Process automation, less scaffolding]
**Improvements**: [What got easier?]
**Velocity**: [Z] points

### Sprint 4: PM Mastery
**What I learned**: [Final insights, process mastery]
**Velocity**: [W] points
**Process confidence**: [High/Medium/Low]

---

## Key Insights Across All Sprints

### What Worked Consistently
1. [Practice that helped in ALL sprints]
2. [Another consistent success]
3. [Third pattern]

### What Never Worked
1. [Practice that failed repeatedly]
2. [Another persistent problem]

### What Evolved Over Time
1. **[Practice]**: Started as [X] in Sprint 1, evolved to [Y] by Sprint 4
2. **[Another practice]**: [Evolution description]

---

## Technical vs Process Balance

**Time spent coding**: [X]%
**Time spent on PM (planning, standups, retrospectives)**: [Y]%

**Was 40% process grading fair?**: [Your opinion with reasoning]

**Value of process work**: [Did it help you code better? Or feel like overhead?]

---

## AI Collaboration Evolution

### Sprint-by-Sprint AI Usage

| Sprint | Total Prompts | Conceptual % | Code Gen % | Understanding % |
|--------|--------------|-------------|-----------|----------------|
| Sprint 1 | [X] | [%] | [%] | [%] |
| Sprint 2 | [X] | [%] | [%] | [%] |
| Sprint 3 | [X] | [%] | [%] | [%] |
| Sprint 4 | [X] | [%] | [%] | [%] |

**Trend**: [Did you rely more or less on AI over time?]

**Most Valuable AI Interaction** (across all sprints): [Describe]

**Least Valuable**: [Describe]

**Overall Assessment**: Did mandatory AI documentation help you learn? [Honest reflection]

---

## Velocity Predictability

### Prediction Accuracy

**Sprint 2 Prediction**: [X] points (based on Sprint 1)
**Sprint 2 Actual**: [Y] points
**Accuracy**: [%]

**Sprint 3 Prediction**: [X] points (based on S1 & S2)
**Sprint 3 Actual**: [Y] points
**Accuracy**: [%]

**Sprint 4 Prediction**: [X] points (based on S1, S2, S3)
**Sprint 4 Actual**: [Y] points
**Accuracy**: [%]

**Analysis**: Did predictions get more accurate over time? [Explain]

---

## What I Would Change

### If I Could Restart Sprint 1
[What would you do differently knowing what you know now?]

### Process Improvements
[What would make sprint process better for future students?]

### Technical Improvements
[What data structure should have more/less time?]

---

## Personal Growth

### Data Structures Mastery
**Most confident with**: [Which data structure?]
**Least confident with**: [Which one needs more work?]
**Biggest aha moment**: [When did concepts click?]

### PM Skills Gained
**Skills I didn't have before**:
1. [Skill]
2. [Skill]
3. [Skill]

**Skills I can apply to future projects**:
1. [How will you use velocity tracking?]
2. [How will you use retrospectives?]
3. [Other applications?]

### Confidence Change
**Week 1 confidence (1-10)**: [X]
**Week 14 confidence (1-10)**: [Y]
**Growth**: [Analysis]

---

## Course Reflection

### "Create Before Theory" Philosophy
**Did building first, understanding later help?**: [Your assessment]
**Best example**: [When did this approach work well?]
**Worst example**: [When did you wish you had theory first?]

### AI Collaboration Requirement
**Value of mandatory prompts.txt**: [Did it help or feel like busywork?]
**Learning impact**: [Did you learn MORE or LESS because of AI access?]

### Sprint Methodology in CS Course
**Should future CSC-249 students use sprints?**: [Yes/No with reasoning]
**Recommendations**: [How to improve sprint process for future?]

---

## Final Thoughts

[Open-ended reflection: What did this course teach you beyond data structures?]

[How will you approach future technical projects differently?]

[What surprised you most about this course?]
```

**Grading - Cumulative Retrospective** (12 points):
- Sprint metrics summary (2 pts)
- Process evolution analysis (3 pts)
- Key insights across sprints (2 pts)
- AI collaboration evolution (2 pts)
- Velocity predictability analysis (1 pt)
- Personal growth reflection (2 pts)

---

## Part 3: Process Portfolio (8 points)

### Create Visual Process Dashboard

Generate `PROCESS_PORTFOLIO.md` with graphs/charts showing:

1. **Velocity Trend Graph**: All 4 sprints
2. **Estimation Accuracy Graph**: Variance over time
3. **Burndown Comparison**: All 4 sprint burndowns side-by-side
4. **AI Usage Trend**: Prompts per sprint

**Python visualization**:

```python
import matplotlib.pyplot as plt

# Velocity trend
sprints = [1, 2, 3, 4]
velocities = [17, 22, 26, 24]  # Your actual velocities

plt.figure(figsize=(12, 8))

plt.subplot(2, 2, 1)
plt.plot(sprints, velocities, marker='o', linewidth=2)
plt.title('Velocity Trend Across Sprints')
plt.xlabel('Sprint')
plt.ylabel('Story Points')
plt.grid(True)

# Estimation variance
variances = [40, 25, 15, 12]  # Your actual variances

plt.subplot(2, 2, 2)
plt.plot(sprints, variances, marker='s', color='orange', linewidth=2)
plt.title('Estimation Accuracy Improvement')
plt.xlabel('Sprint')
plt.ylabel('Variance (%)')
plt.grid(True)

# Add other charts...

plt.tight_layout()
plt.savefig('process_portfolio_dashboard.png')
```

**Grading** (8 points):
- Velocity trend graph (2 pts)
- Estimation accuracy graph (2 pts)
- Burndown comparison (2 pts)
- AI usage visualization (2 pts)

---

## Submission Checklist

- [ ] GRAPH_MODEL_DESIGN.md
- [ ] Application implementation (CityNavigator/SocialNetwork/CoursePlanner)
- [ ] Realistic dataset (15+ vertices, 20+ edges)
- [ ] Test suite demonstrating features
- [ ] CUMULATIVE_RETROSPECTIVE.md (all 4 sprints analyzed)
- [ ] PROCESS_PORTFOLIO.md with visualizations
- [ ] prompts.txt for this application
- [ ] Pull request

---

## Grading Rubric (50 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Graph Model Design** | 5 | Clear model explanation (5) |
| **Application Implementation** | 25 | Class implementation (10), algorithms applied (9), dataset (3), tests (3) |
| **Cumulative Retrospective** | 12 | Metrics (2), evolution (3), insights (2), AI (2), velocity (1), growth (2) |
| **Process Portfolio** | 8 | Velocity graph (2), accuracy graph (2), burndown (2), AI viz (2) |
| **Total** | **50** | |

---

## Resources

**Application Ideas**:
- City datasets: OpenStreetMap
- Social network research
- Course catalogs

**Graph Applications**:
- Google Maps routing
- Facebook friend suggestions
- LinkedIn connections
- Compiler dependency graphs

---

## Extension Challenges (+5 bonus)

1. **Interactive Visualization**: Web interface for your application
2. **Performance Optimization**: Handle 1000+ vertices efficiently
3. **Multiple Algorithms**: Implement A* in addition to Dijkstra
4. **Real Data Integration**: Use actual city/social/course data via API

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
