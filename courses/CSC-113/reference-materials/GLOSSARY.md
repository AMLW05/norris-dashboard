# CSC-113 Glossary
## Key Terms for AI Fundamentals & GitHub Workflow

**Quick Navigation**: [A-C](#a-c) | [D-G](#d-g) | [H-M](#h-m) | [N-R](#n-r) | [S-Z](#s-z)

---

## A-C

### AI (Artificial Intelligence)
Computer systems that can perform tasks typically requiring human intelligence (learning, reasoning, problem-solving).

**Example**: ChatGPT understanding your question and generating a relevant answer.

---

### AI Winter
Period of reduced funding and interest in AI research after initial hype failed to meet promises. Two major winters: 1974-1980 and 1987-1993.

**Why it matters**: Understanding AI history helps set realistic expectations for current tools.

---

### Algorithm
Step-by-step procedure or formula for solving a problem.

**Example**: Recipe for baking cookies (follow steps → get cookies).

---

### Bad Bot
(CSC-113 specific) Intentionally poorly-configured AI agent designed to teach through failure.

**Purpose**: Learning what NOT to do helps you avoid mistakes in real projects.

---

### Bias (in AI)
Systematic errors in AI outputs that reflect prejudices in training data or design.

**Example**: Image recognition that performs worse on certain ethnic groups because training data lacked diversity.

---

### Branch (Git)
An isolated workspace where you can make changes without affecting the main codebase.

**Analogy**: A parallel universe for your project - experiment safely, then merge back if it works.

**Command**: `git branch feature-name` then `git checkout feature-name`

---

### Clone (Git)
Copying a repository from GitHub to your local computer.

**Command**: `git clone https://github.com/username/repo-name.git`

---

### CLO (Course Learning Outcome)
Course-level learning goal that describes what students will be able to do by the end of the course.

**Example**: "Apply professional GitHub workflow (Issue → Branch → PR → Merge)"

---

### Code Builders Track
CSC-113 track focusing on programming implementation (Python/JavaScript).

**Alternative**: Prompt Masters (no-code track)

---

### Commit (Git)
A snapshot of your project at a specific point in time, saved with a descriptive message.

**Analogy**: Like saving a video game - you can return to this point later.

**Command**: `git commit -m "Your message here"`

**Good message**: "Add AI timeline research with 10 major milestones"
**Bad message**: "update" or "changes"

---

### Context (AI)
Background information provided to an AI tool to tailor its responses to your specific situation.

**Example**: Telling AI "I'm a first-year college student learning Python" helps it adjust explanation complexity.

---

### Chain of Thought
Prompt engineering technique where you ask AI to "think step by step" or show its reasoning.

**Why it helps**: Breaks complex problems into smaller steps, often improves accuracy.

---

---

## D-G

### Dataset
Collection of data used to train machine learning models.

**Example**: ImageNet has 14+ million labeled images used to train image recognition systems.

---

### Deep Learning
Subset of machine learning using neural networks with multiple layers (hence "deep").

**Breakthrough**: AlexNet (2012) used deep learning to dramatically improve image recognition.

---

### Demo Day
Class session where students present their sprint deliverables.

**Format**: Short presentations (5-10 min) with live demos and Q&A.

---

### Exit Ticket
End-of-module reflection using "What shipped? What blocked? Next commit?" format.

**Purpose**: Process documentation, standup-style reporting, learning reflection.

---

### Expert System
AI approach (popular 1980s) using rule-based logic ("if X, then Y").

**Limitation**: Doesn't learn from data, rigid, doesn't scale well.

---

### Few-Shot Learning (Prompting)
Providing 2-3 examples in your prompt to show AI what kind of output you want.

**Example**:
```
Here are good commit messages:
- "Add README with course goals"
- "Fix typo in introduction"

Now write a commit message for...
```

---

### Feature
1. (Machine Learning) An input variable used to make predictions.
2. (Software) A distinct functionality of a project.

**ML Example**: For house price prediction, features = square footage, bedrooms, location
**Software Example**: "User authentication" is a feature of your project

---

### Fork (GitHub)
Creating your own copy of someone else's repository.

**Use case**: Contributing to open-source projects - fork, make changes, submit PR.

---

### frotz → plugh
Drew's signature, referencing the classic text adventure game Zork.

**Meaning**: Magic words that unlock progress (like learning unlocks career opportunities).

---

### GitHub
Web-based platform for hosting Git repositories and collaborating on code.

**Not the same as Git**: Git = software (version control), GitHub = hosting platform.

---

### GitHub Issue
A task, bug report, or feature request tracked in a GitHub repository.

**Sacred Flow Step 1**: Create issue before starting work (describes what you'll do).

---

### GitHub Pages
Free hosting service that turns a GitHub repository into a website.

**Use case**: Hosting your CSC-113 portfolio.

---

### Good Bot
(CSC-113 specific) Iteratively improved version of Bad Bot using prompt engineering.

**Purpose**: Practice iterative refinement and apply learned techniques.

---

### GPT (Generative Pre-trained Transformer)
Type of large language model architecture used by ChatGPT and others.

**Key innovation**: Transformer architecture (2017) + massive scale.

---

---

## H-M

### Hallucination (AI)
When an AI confidently generates false or nonsensical information.

**Example**: AI citing a research paper that doesn't exist.

**Why it happens**: Models generate based on patterns, not knowledge - they don't "know" when they're wrong.

---

### Issue → Branch → PR → Merge
The Sacred Flow workflow. See **Sacred Flow** entry.

---

### Iteration
Process of repeatedly refining something based on feedback or results.

**Example**: Prompt v1 → Test → Analyze → Prompt v2 → Test → Analyze → Prompt v3

**Key skill in CSC-113**: First attempts rarely work perfectly; iteration is the skill.

---

### Label (Machine Learning)
The "answer" or output you're trying to predict in supervised learning.

**Example**: In email spam detection, label = "spam" or "not spam"

---

### Large Language Model (LLM)
AI model trained on massive text datasets to understand and generate human-like text.

**Examples**: GPT-4, Claude, Gemini, LLaMA

---

### Machine Learning
Subset of AI where systems learn from data rather than following explicit programmed rules.

**Contrast**: Traditional programming = rules → output. ML = data → learns rules → output.

---

### Main Branch
The primary, production-ready branch in a Git repository (formerly called "master").

**Rule**: Never commit directly to main - always use feature branches and PRs.

---

### Merge
Integrating changes from one branch into another (usually feature branch → main).

**Sacred Flow Step 7**: Final step after PR approval.

---

### Merge Conflict
When Git can't automatically combine changes because the same part of a file was edited differently in two branches.

**Fix**: Manually choose which changes to keep.

---

### MLO (Module Learning Outcome)
Module-level learning goal, more specific than CLOs, tied to 2-week units.

**Example**: "Apply version control principles to manage project files using GitHub"

---

### MVP (Minimum Viable Product)
Simplest version of a product that solves the core problem.

**Philosophy**: Start small, get feedback, iterate. Don't build everything at once.

**CSC-113 context**: Your Module 5 prototype should be MVP, not fully polished.

---

---

## N-R

### Neural Network
Machine learning model inspired by how the brain works, using interconnected "neurons" (mathematical functions).

**Types**: Single-layer perceptron (1950s), multi-layer networks (1980s), deep networks (2010s).

---

### NLP (Natural Language Processing)
AI subfield focused on understanding and generating human language.

**Examples**: Chatbots, translation, sentiment analysis, text summarization.

---

### No-Code Tools
Software platforms that allow building applications without writing traditional code.

**Examples**: Zapier (automation), Airtable (databases), Bubble (web apps)

**Prompt Masters track** uses these extensively.

---

### Open Source
Software whose code is publicly available for anyone to use, modify, and distribute.

**Example**: Linux, Python, VS Code.

**CSC-113 uses**: GitHub (platform itself isn't open source, but hosts open source projects)

---

### Perceptron
Early neural network (1958) with single layer of artificial neurons.

**Limitation**: Can only solve linearly separable problems (major setback led to first AI winter).

---

### PRD (Product Requirements Document)
Blueprint describing what you're building, why, and for whom.

**Components**: Problem statement, target users, features, success criteria, risks.

**CSC-113 context**: Created in Module 5 before building prototype.

---

### Prompt
The input/instruction you give to an AI tool.

**Quality matters**: Vague prompts → vague outputs. Specific prompts → useful outputs.

---

### Prompt Engineering
The practice of designing and refining prompts to get better AI outputs.

**Core skill in CSC-113**: Module 3 focuses on 10+ techniques (specificity, context, examples, role-setting, format, constraints, etc.).

---

### Prompt Masters Track
CSC-113 track focusing on no-code AI tool configuration and advanced prompt engineering.

**Alternative**: Code Builders (programming track)

---

### Pull Request (PR)
A request to merge changes from one branch into another, enabling code review and discussion.

**Sacred Flow Step 5**: After pushing commits, create PR to request review before merging.

**Anatomy**: Title, description, linked issue, code changes, comments/reviews.

---

### Push (Git)
Uploading your local commits to GitHub (remote repository).

**Command**: `git push origin branch-name`

**Sacred Flow Step 4**: Push your branch to GitHub so you can create PR.

---

### Repository (Repo)
A project folder that uses Git to track all changes to files over time.

**Contains**: Code, documentation, commit history, branches, issues, PRs.

**Analogy**: Like a project folder with superpowers - full history, collaboration tools, backups.

---

### Retrospective (Retro)
Structured reflection on what went well, what didn't, and what to improve.

**Sacred Flow connection**: Modules 6-7 include sprint retrospectives.

**Format**: Start/Stop/Continue, or 4 L's (Liked/Learned/Lacked/Longed For).

---

---

## S-Z

### Sacred Flow
Drew's term for the professional GitHub workflow: **Issue → Branch → Commit → Push → PR → Review → Merge**

**Why "sacred"**: Non-negotiable, practiced in every assignment, industry standard.

**By Module 8**: Should become automatic habit.

---

### SAGE (Scholar's Adaptive Growth Engine)
Customized AI assistant you configure with context documents to tailor responses to your learning needs.

**CSC-113 context**: Module 1 assignment involves setting up your SAGE workspace.

---

### Scope Creep
Continuous expansion of project features beyond original plan.

**Danger**: Leads to incomplete projects, missed deadlines, overwhelming workload.

**Solution**: Stick to MVP, add features later if time permits.

---

### Sprint
Time-boxed period (1-2 weeks) for completing planned work, from Agile methodology.

**CSC-113 context**: Modules 6-7 use sprint structure (planning → execution → demo → retrospective).

---

### Sprint Planning
Session where you break work into tasks, estimate time, and commit to realistic scope.

**Output**: Sprint backlog (list of tasks for the sprint with time estimates).

---

### Standup (Daily Standup)
Brief check-in answering: What did I ship? What will I ship today? What's blocking me?

**CSC-113 context**: Exit tickets use similar format; in-class check-ins during sprint work time.

---

### Supervised Learning
Machine learning where you train a model on labeled data (input + correct output).

**Example**: Training spam detector with emails labeled "spam" or "not spam"

**Contrast**: Unsupervised learning (no labels, model finds patterns on its own).

---

### Token
Unit of text processed by language models (roughly 0.75 words in English).

**Why it matters**: Many AI tools have token limits (e.g., Claude can process 200k tokens at once).

---

### Training Data
Dataset used to teach a machine learning model.

**Quality matters**: Biased training data → biased AI outputs.

---

### Transformer
Neural network architecture (2017) that revolutionized NLP by using "attention mechanisms."

**Impact**: Enabled GPT, BERT, and modern LLMs. Current AI boom built on transformers.

---

### Turing Test
Proposed by Alan Turing (1950): Can a machine convince a human it's human through conversation?

**Debate**: Do modern LLMs pass the Turing Test? (Controversial - they're convincing but don't truly "understand")

---

### Unsupervised Learning
Machine learning where model finds patterns in unlabeled data.

**Example**: Clustering customers into groups based on behavior, without predefined categories.

---

### Velocity
Rate at which work is completed, measured by comparing estimated vs. actual time.

**CSC-113 context**: Track Sprint 1 velocity to plan realistic Sprint 2 scope.

**Example**: If Sprint 1 took 1.5x longer than estimated, plan Sprint 2 with that multiplier.

---

### Version Control
System for tracking changes to files over time, enabling collaboration and history.

**Tool**: Git (most popular version control system)

**Why it matters**: Industry standard, prevents loss of work, enables team collaboration.

---

### Zero-Shot Learning (Prompting)
Asking AI to do something without providing examples.

**Contrast**: Few-shot learning (provide 2-3 examples).

**When to use**: Simple, straightforward tasks. For complex or specific formatting, use few-shot.

---

---

## CSC-113 Specific Terms (Quick Reference)

| Term | Meaning |
|------|---------|
| **Bad Bot** | Intentionally broken AI agent (Module 2) |
| **Code Builders** | Programming track |
| **frotz → plugh** | Drew's signature (Zork reference) |
| **Good Bot** | Improved Bad Bot (Module 3) |
| **Prompt Masters** | No-code track |
| **Sacred Flow** | Issue → Branch → Commit → Push → PR → Review → Merge |
| **SAGE** | Your customized AI assistant (Scholar's Adaptive Growth Engine) |

---

## Additional Resources

### Official Documentation
- **GitHub Docs**: https://docs.github.com
- **Git Documentation**: https://git-scm.com/doc
- **Claude AI**: https://claude.ai
- **ChatGPT**: https://chat.openai.com
- **Gemini**: https://gemini.google.com

### Learning Resources
- **GitHub Skills**: https://skills.github.com (interactive tutorials)
- **Pro Git Book**: https://git-scm.com/book (free, comprehensive)
- **Markdown Guide**: https://www.markdownguide.org

---

**This glossary is a living document. If you encounter a term not defined here, ask Drew or post in Discord!**

**frotz → plugh**
