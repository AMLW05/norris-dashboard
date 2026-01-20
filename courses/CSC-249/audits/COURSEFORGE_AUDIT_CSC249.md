# CourseForge Audit: CSC-249 Data Structures & Algorithms
## Custom Course Development Standards Review

**Course**: CSC-249 Data Structures & Algorithms
**Instructor**: Drew Norris
**Instructional Designer**: Angela Westmoreland
**Audit Date**: January 20, 2026
**Auditor**: Angela Westmoreland

---

## Executive Summary

**Overall Rating**: 🚧 **IN DEVELOPMENT** (88/100)

CSC-249 demonstrates innovative course design with groundbreaking AI collaboration integration, create-first pedagogy, and comprehensive sprint-based PM practices. The course successfully balances data structures fundamentals with professional development skills and AI-assisted learning. While core content is excellent, support materials and facilitation resources need completion before launch.

**Strengths**:
- Mandatory AI collaboration with prompts.txt documentation (first in program)
- Create-first pedagogy (build → break → understand)
- Dual-language support (C++/Python) with AI bridging concepts
- Complete 16-week assignment sequence with 4 sprint cycles
- 40% process grading emphasizes professional skills

**Areas for Enhancement**:
- Complete reference materials (Big O guide, data structures cheatsheet)
- Add peer collaboration requirements
- Create instructor facilitation guides
- Build Canvas HTML pages
- Develop AI prompt template library

---

## CourseForge Standards (20 Custom Criteria)

### Category 1: Course Architecture & Design (5 standards)

#### CF-1.1 Program Integration & Sequencing
**Standard**: Course must demonstrate clear connections to prerequisite and subsequent courses, with explicit skill progression.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- Explicit prerequisite: CSC-134 (Intro to Programming - C++)
- Pathway to CTS-285/289 (Systems Analysis capstone) documented
- PM skills build on CSC-113/114 foundation for students in AI track
- README.md lines 254-257: PM progression to CTS-285/289

**Rating**: 4/5
**Note**: Would be 5/5 with explicit PM skills ladder document (like CSC-114 has)

---

#### CF-1.2 Module Structure & Pacing
**Standard**: Course must use consistent module structure with appropriate pacing for skill development.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- 8 modules over 16 weeks (2 weeks per module)
- Consistent structure: Foundation (M1-2) → Analysis (M3) → Sprints (M4-7) → Capstone (M8)
- Module themes progress: ADTs → Recursion → Sorting → Linear → Hashing → Trees → Graphs → Integration
- Pacing allows mastery with create-first approach

**Rating**: 5/5

---

#### CF-1.3 Assessment Distribution
**Standard**: Points should be distributed to reflect course priorities and encourage consistent engagement.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- Total: 750 points (scaled to 700) distributed across 16 weeks
- Modules 1-2: 100 points (14%)
- Module 3: 50 points (7%)
- Sprint assignments: 275 points (39%)
- Retrospectives: 100 points (14%)
- Knowledge checks: 50 points (7%)
- Capstone + Presentation: 175 points (25%)

**Rating**: 5/5
**Note**: Distribution emphasizes sprint work (primary learning mode), with capstone as culminating assessment

---

#### CF-1.4 Scaffolding & Support Structures
**Standard**: Course must provide progressive support structures that gradually release responsibility to students.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **Weeks 1-2**: Heavy scaffolding (starter code, templates)
- **Week 3-6**: Introduce user stories, estimation, begin sprint prep
- **Weeks 7-8**: First sprint with detailed planning templates (Sprint 1)
- **Weeks 9-10**: Sprint 2 with velocity-based planning
- **Weeks 11-14**: Sprints 3-4, PM becomes habitual
- **Weeks 15-16**: Capstone expects autonomous sprint management
- **AI collaboration**: Scaffolded from guided prompts to independent use

**Rating**: 5/5

---

#### CF-1.5 Industry Alignment
**Standard**: Course content must reflect current industry practices and employer expectations.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **Data Structures**: Industry-standard implementations (C++ STL/Python collections concepts)
- **AI Collaboration**: Reflects 2024-2026 workplace reality of AI-assisted development
- **PM Framework**: Scrum (industry standard)
- **Tools**: GitHub, modern IDEs (industry-standard)
- **Dual-competency model**: Technical + Process + AI skills matches employer hiring criteria
- Sacred Flow workflow prepares for professional Git usage

**Rating**: 5/5

**Category 1 Total**: 24/25

---

### Category 2: Learning Design & Pedagogy (5 standards)

#### CF-2.1 Active Learning Integration
**Standard**: Course must include hands-on, experiential learning activities, not just passive content consumption.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- Every assignment requires implementation (build-first approach)
- Create → break → fix → understand cycle
- Week 1: Students implement first ADT (Stack)
- Weeks 7-14: Active sprint participation (planning, daily work, retrospectives)
- AI collaboration requires active prompting and iteration
- All assignments produce working code

**Rating**: 5/5

---

#### CF-2.2 Bloom's Taxonomy Progression
**Standard**: Assignments should progress from lower-order to higher-order thinking skills.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **Weeks 1-2** (Remember/Understand): ADT implementation with templates
- **Week 3** (Apply): Benchmarking and Big O application
- **Week 4** (Apply): Recursive algorithm implementation
- **Weeks 5-6** (Analyze): Sorting algorithm comparison and analysis
- **Weeks 7-10** (Apply/Analyze): Linked lists and hash tables in sprint context
- **Weeks 11-14** (Evaluate): Trees and graphs with optimization
- **Weeks 15-16** (Create/Evaluate): Capstone design integrating 3+ structures

**Unique**: Create-first pedagogy inverts traditional progression but still builds to synthesis

**Rating**: 5/5

---

#### CF-2.3 Metacognitive Development
**Standard**: Course must include opportunities for students to reflect on their learning process and develop self-awareness.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **4 Sprint Retrospectives** requiring structured reflection
- **prompts.txt documentation**: Reflection on AI collaboration and learning
- **Retrospective rubric** includes estimation learning analysis
- **Process portfolio**: Synthesizes growth across all 4 sprints
- **AI collaboration**: Requires articulating learning process and understanding

**Specific Examples**:
- Sprint retrospectives: "What went well," "What didn't," root cause analysis
- Process portfolio: "PM growth narrative" across semester
- prompts.txt: [Prompt] → [AI Response] → [What I learned] format

**Rating**: 5/5

---

#### CF-2.4 Collaborative Learning Opportunities
**Standard**: Course should include structured peer interaction and collaborative work.

**Status**: ⚠️ **PARTIALLY MEETS STANDARD**

**Evidence**:
- Sprint methodology encourages sharing (retrospectives, demos)
- Academic integrity policy encourages: "Sharing AI prompts and learning strategies, peer review"
- PR review requirements (4 meaningful reviews across semester)
- Discord prompt sharing (3+ prompts shared)

**Gap**:
- No explicitly structured pair programming assignments
- Sprint work appears individual (no team sprints)
- Peer review requirements could be more integrated into assignments

**Rating**: 3/5
**Recommendation**: Add peer code review requirement to at least 2 sprint assignments, or include 1 pair programming assignment

---

#### CF-2.5 Differentiated Instruction
**Standard**: Course must provide multiple pathways to success and accommodate diverse learning needs.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **Dual-language support**: C++ OR Python (student choice)
- **AI collaboration**: Provides personalized scaffolding and explanations
- **Multiple formats**: Code, written analysis, visualizations, presentations
- **Revision policy**: Assignments <70% get one revision opportunity
- **Flexible tools**: Cloud (Codespaces) or local development

**Unique Feature**: AI collaboration provides differentiated support automatically

**Rating**: 5/5

**Category 2 Total**: 23/25

---

### Category 3: Assessment & Evaluation (5 standards)

#### CF-3.1 Rubric Quality & Transparency
**Standard**: All graded work must have detailed rubrics with clear criteria and point distributions.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- Comprehensive rubrics document (assessment-rubrics.md, 500+ lines)
- **6 distinct rubrics**:
  1. Weekly assignment (25 pts)
  2. Sprint assignment (50-75 pts)
  3. Retrospective (25 pts)
  4. Final integration project (100 pts)
  5. Final presentation (75 pts)
  6. Knowledge checks (6.25 pts each)
- Point breakdowns to sub-criterion level
- AI collaboration criteria explicitly included

**Rating**: 5/5

---

#### CF-3.2 Formative Assessment Integration
**Standard**: Course must include low-stakes, frequent feedback opportunities beyond summative assessments.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- **Daily standups**: 5+ per sprint = ~20 low-stakes check-ins
- **Knowledge checks**: 8 quizzes with 2 attempts each
- **Sprint planning documents**: Reviewed at sprint start
- **Burndown charts**: Weekly progress visualization
- **Retrospective action items**: Tracked and revisited

**Rating**: 5/5

---

#### CF-3.3 Authentic Assessment
**Standard**: Assessments should mirror real-world professional tasks and deliverables.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
- **Sprints**: Industry-standard Scrum practice
- **GitHub workflow**: Universal professional tool
- **AI collaboration with documentation**: Reflects modern development practices
- **User stories**: Format used in real software teams
- **Sprint retrospectives**: Exact practice from Agile teams
- **Process portfolio**: Document professionals create for performance reviews
- **prompts.txt**: Documentation of learning/collaboration (modern skill)

**Unique Feature**: AI collaboration documentation (prompts.txt) reflects cutting-edge professional practice

**Rating**: 5/5

---

#### CF-3.4 Alignment (CLO-MLO-Assessment)
**Standard**: Course and module learning outcomes must clearly align with assessment methods.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- README.md includes 5 CLOs covering data structures, algorithms, AI collaboration, PM
- Module learning outcomes listed for each module (4-5 MLOs per module)
- Assessment rubrics directly measure CLO achievement
- Dual assessment model (60% technical, 40% process) matches dual outcomes

**Rating**: 4/5
**Note**: Would be 5/5 with explicit CLO-MLO-Assessment alignment matrix (like RSI audit provides)

---

#### CF-3.5 Grading Equity & Transparency
**Standard**: Grading policies must be clear, fair, and support student success without compromising standards.

**Status**: ✅ **MEETS STANDARD**

**Evidence**:
- **Late policy**: 10% per day (up to 3 days), then 50% max
- **Revision opportunity**: One revision for work <70%
- **Clear grade scale**: 90-100 A, 80-89 B, etc.
- **Process grading philosophy** explicitly defended
- **AI collaboration policy**: Clear expectations (required, must understand)
- **Dual-language equity**: C++ and Python graded equivalently

**Rating**: 5/5

**Category 3 Total**: 24/25

---

### Category 4: Instructional Materials Quality (5 standards)

#### CF-4.1 Assignment Clarity & Completeness
**Standard**: Every assignment must include clear objectives, requirements, deliverables, grading criteria, and submission instructions.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
Reviewing Week 7-8 Sprint assignment as exemplar:
- ✅ Due date: "End of Week 7"
- ✅ Points: "50 (30 technical + 20 process)"
- ✅ Sprint duration: "2 weeks (Week 7-8)"
- ✅ Objectives: 5 learning objectives listed
- ✅ Requirements: Sprint planning, implementation, testing, process
- ✅ Deliverables: Code, planning doc, standups, burndown, review, prompts.txt
- ✅ Grading: Complete rubric with point breakdown
- ✅ Submission: GitHub repository + PR

All 16 assignments follow this pattern

**Rating**: 5/5

---

#### CF-4.2 Instructional Scaffolding Materials
**Standard**: Course must provide templates, examples, and guides to support student success.

**Status**: ⚠️ **NEEDS IMPROVEMENT**

**Evidence**:
**Provided**:
- ✅ Starter code for all major implementations
- ✅ Test suite examples
- ✅ Sprint planning template in Week 7 assignment
- ✅ PM materials (3 mini-lessons)

**Pending/Missing**:
- 🚧 Big O notation cheatsheet
- 🚧 Data structures quick reference guide
- 🚧 AI prompt template library
- 🚧 Sprint retrospective template
- 🚧 Burndown chart template/script
- 🚧 Daily standup template

**Rating**: 2/5
**Recommendation**: Create 6 essential templates/guides before launch

---

#### CF-4.3 Drew's Voice & Engagement
**Standard**: Course materials should reflect instructor personality and create connection with students.

**Status**: ✅ **EXCEEDS STANDARD**

**Evidence**:
README.md Drew's Pedagogical Approach section (lines 201-241):
- "Bloom's Taxonomy Starts with Create"
- "Build working implementations first, then understand why they work"
- "AI helps you learn, not replaces learning"
- "Failure as Exercise: Broken code with good debugging process > Perfect code you can't explain"

Assignment notes throughout:
- Week 7: "YOUR FIRST COMPLETE SPRINT! Philosophy: 'Process equals product.'"
- Create-first approach explained as inverting traditional instruction

Tone is:
- Encouraging and innovative
- Industry-connected
- Student-focused on learning process
- Authentic and pedagogically grounded

**Rating**: 5/5

---

#### CF-4.4 Reference Materials & Resources
**Standard**: Course must provide curated reference materials for students to deepen learning.

**Status**: ⚠️ **NEEDS IMPROVEMENT**

**Evidence**:
**External resources referenced**:
- ✅ VisuAlgo (visualgo.net) for visualizations
- ✅ Runestone Academy (C++/Python editions)
- ✅ Python Tutor (pythontutor.com)

**Missing internal references**:
- 🚧 Big O notation guide
- 🚧 Data structures complexity cheatsheet
- 🚧 C++ vs Python implementation guide
- 🚧 AI prompt engineering guide for CS learning
- 🚧 Common data structure pitfalls guide
- 🚧 Debugging strategies guide

**Rating**: 2/5
**Recommendation**: Create at least 4 core reference guides before launch

---

#### CF-4.5 Accessibility & Universal Design
**Standard**: Materials must be accessible to all students regardless of disability status.

**Status**: ⚠️ **PARTIALLY MEETS STANDARD**

**Evidence**:
- ✅ All assignments text-based (screen reader friendly)
- ✅ Code examples include comments
- ✅ Flexible deadlines (1-week late policy)
- ✅ Dual-language support accommodates different learning styles
- ✅ AI tools provide alternative explanations

**Gaps**:
- 🚧 No explicit accessibility statement
- 🚧 Visualizations may need alt text descriptions
- 🚧 AI tool accessibility not discussed

**Rating**: 4/5
**Recommendation**: Add accessibility statement and ensure all diagrams have alt text

**Category 4 Total**: 18/25

---

## Audit Summary by Category

| Category | Score | Percentage |
|----------|-------|------------|
| 1. Course Architecture & Design | 24/25 | 96% |
| 2. Learning Design & Pedagogy | 23/25 | 92% |
| 3. Assessment & Evaluation | 24/25 | 96% |
| 4. Instructional Materials Quality | 18/25 | 72% |
| **TOTAL** | **89/100** | **89%** |

---

## Detailed Recommendations

### High Priority (Complete Before Launch)

1. **Create 6 Essential Templates & Guides** (8-10 hours)
   - Big O notation cheatsheet (2 hours)
   - Data structures complexity quick reference (2 hours)
   - AI prompt template library with examples (2 hours)
   - Sprint retrospective template (1 hour)
   - Burndown chart template/script (1 hour)
   - Daily standup template (1 hour)
   - **Impact**: Increases Category 4 score from 18→23/25
   - **Total impact**: Overall score 89→94/100

2. **Add Peer Collaboration Requirements** (2-3 hours)
   - Integrate peer code review into 2 sprint assignments
   - Create peer review rubric
   - Add pair programming option for 1 assignment
   - **Impact**: Increases Category 2 score from 23→25/25
   - **Total impact**: Overall score 94→96/100

3. **Complete Accessibility Enhancements** (2 hours)
   - Add accessibility statement
   - Create alt text guidelines for diagrams
   - Document AI tool accessibility features
   - **Impact**: Increases Category 4 score from 23→24/25
   - **Total impact**: Overall score 96→97/100

**Completing all 3 HIGH priority items raises score to 97/100 (Exemplary)**

### Medium Priority (Enhance Quality)

4. **Create PM Skills Progression Document**
   - Map CSC-134 → CSC-249 → CTS-285 → CTS-289
   - Show PM skill building across courses
   - **Impact**: Raises Category 1 to 25/25

5. **Develop Instructor Facilitation Guides**
   - Common student issues per module
   - Sprint facilitation tips
   - AI collaboration troubleshooting
   - Grading efficiency strategies

6. **Build Canvas HTML Pages**
   - Course home page
   - 8 module overview pages
   - AI collaboration guidelines page
   - PM resources central page

### Low Priority (Nice to Have)

7. **Expand AI Prompt Library**
   - Example prompts for each data structure
   - Debugging prompt strategies
   - Complexity analysis prompts
   - Code review prompts

8. **Create Video Tutorials**
   - Pointer mechanics (C++)
   - Recursion visualization
   - Tree traversal walkthrough
   - Graph algorithm demonstration

---

## Compliance Status

### Launch Readiness: ⚠️ **APPROVED WITH REQUIRED ENHANCEMENTS**

**Core Requirements (All Met)**:
- ✅ Complete assignment sequence (16/16)
- ✅ Comprehensive rubrics
- ✅ Clear learning outcomes
- ✅ Grading policies transparent
- ✅ Industry alignment verified

**Required Before Launch**:
- ⚠️ Complete 6 essential templates/guides (HIGH priority #1)
- ⚠️ Add accessibility statement (HIGH priority #3)

**Strongly Recommended Before Launch**:
- 📋 Add peer collaboration requirements (HIGH priority #2)

---

## Innovation Highlights

### Novel Contributions to Course Design

1. **Mandatory AI Collaboration with Documentation**
   - First course in program to require AI tool usage
   - prompts.txt creates accountability and learning record
   - Reflects cutting-edge professional practice (2024-2026 reality)
   - Model could be adopted across program

2. **Create-First Pedagogy**
   - Inverts traditional theory → practice approach
   - Build → Break → Fix → Understand cycle
   - Aligns with how professional developers learn
   - Reduces "theory-practice gap"

3. **Dual-Language AI-Bridged Instruction**
   - Students choose C++ or Python
   - AI tools help translate concepts between languages
   - Provides flexibility while maintaining rigor
   - Unique approach to language choice

4. **40% Process Grading with AI Integration**
   - Highest process weighting in program
   - Includes technical PM (sprints) + AI collaboration
   - Prepares for modern workplace (technical + AI + PM skills)
   - Creates accountability for professional development

5. **Sacred Flow + AI Workflow Integration**
   - Extends CSC-113's Sacred Flow with AI collaboration layer
   - Issue → Branch → AI-assisted implementation → PR → Merge
   - prompts.txt becomes part of professional documentation
   - Modern professional workflow model

---

## Auditor Notes

### Strengths
This course represents **groundbreaking instructional design** in computer science education. The mandatory AI collaboration with documentation (prompts.txt) positions students for 2024-2026+ workplace reality where AI-assisted development is standard practice. The create-first pedagogy respects how developers actually learn through iteration.

The sprint integration is mature and well-scaffolded. The dual-language support with AI bridging concepts is innovative and addresses a long-standing CS education challenge.

### Areas for Growth
The primary gap is support materials—templates, guides, and reference resources. These are relatively quick to create and would significantly enhance student experience. The course would also benefit from more structured peer collaboration.

The AI integration is innovative but needs more scaffolding around prompt engineering and responsible AI use. Creating an AI prompt template library would support students in developing this emerging professional skill.

### Recommendation
**APPROVE FOR LAUNCH PENDING COMPLETION OF 6 ESSENTIAL TEMPLATES/GUIDES AND ACCESSIBILITY STATEMENT**. Course is innovative and well-designed. Completing HIGH priority items (12-15 hours total) would elevate it to exemplary status.

---

**Audit Completed**: January 20, 2026
**Next Review**: After HIGH priority items completed, then end of first semester
**Overall Rating**: 89/100 (Excellent - Approved with Required Enhancements)

---

## Appendix: Evidence File Locations

**Assignment Files**: `/courses/CSC-249/assignments/` (16 files)
**Rubrics**: `/courses/CSC-249/rubrics/assessment-rubrics.md`
**PM Materials**: `/courses/CSC-249/pm-materials/` (3 files)
**Course README**: `/courses/CSC-249/README.md`
**Activities**: `/courses/CSC-249/activities/` (8 files)
**Knowledge Checks**: `/courses/CSC-249/knowledge-checks/` (8 files)
**Planning Sheets**: `/courses/CSC-249/planning-sheets/` (6 files)
**Reference Materials**: `/courses/CSC-249/reference-materials/` (3 files)
