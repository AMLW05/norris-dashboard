# CIT AI Tools Guide

Comprehensive guide for CSC-113 and CSC-114 students at FTCC to make informed decisions about AI coding assistants.

**Live Demo:** https://amlw05.github.io/norris-dashboard/tools/ai-tools-guide/

**Last Updated:** January 2026

---

## 📚 What This Is

An interactive, educational web application that helps Computer Information Technology students choose and use the right AI tools for their coursework and projects. This guide covers:

- **GitHub Copilot** - IDE-integrated pair programmer (FREE with Student Pack)
- **ChatGPT** - Conversational AI for learning and problem-solving (FREE tier)
- **Claude** - Deep analysis with 200K context window (FREE tier)
- **Google Gemini** - Research-powered AI with 1M token context (FREE tier)

---

## 🎯 Components

### 1. **Landing Page** (`index.html`)
Entry point with navigation to all three interactive tools.

### 2. **Comparison Guide** (`comparison-guide.html`)
9-tab comprehensive comparison:
- Overview (Quick reference)
- GitHub Copilot (Detailed)
- ChatGPT (Detailed)
- Claude (Detailed)
- Google Gemini (Detailed)
- Model Comparison (Capability matrix)
- Interfaces & Integration
- CSC-113/114 Specific Guidance
- Cost Calculator (FREE tier analysis)

### 3. **Decision Tree Tool** (`decision-tool.html`)
Interactive ML-based recommendation system:
- 5-question decision tree
- Weighted scoring algorithm
- Personalized recommendations
- Educational ML concepts
- "What if" scenarios

### 4. **SCRUM/Agile Integration** (`agile-integration.html`)
Professional workflow mapping:
- 7 SCRUM phases with tool recommendations
- Sprint Planning, Design, Development, Code Review, Testing, Deployment, Retrospective
- Downloadable checklist (24 items)
- CSC-113 vs CSC-114 workflow differences
- Best practices

---

## ✨ Features

### Design
- **Self-contained:** All CSS/JS inline - no external dependencies
- **Mobile-responsive:** Works on all devices (320px to 1440px+)
- **Dark mode:** Toggle with localStorage persistence
- **Accessible:** WCAG 2.1 AA compliant
- **Print-friendly:** Optimized for PDF export

### Functionality
- **Interactive tabs** with smooth transitions
- **Copy buttons** for quick reference
- **Keyboard navigation** (arrow keys, Ctrl+D for dark mode)
- **Progress tracking** in decision tree
- **Checklist persistence** in Agile guide
- **Real-time scoring** in decision algorithm

### Educational Value
- **Machine learning concepts** (weighted scoring, decision trees)
- **Professional workflows** (SCRUM/Agile integration)
- **Critical thinking** (understanding when to use each tool)
- **Academic integrity** (ethical AI usage guidelines)

---

## 🚀 Quick Start

### For Students

1. **Visit:** https://amlw05.github.io/norris-dashboard/tools/ai-tools-guide/
2. **Start with:** Decision Tool to get personalized recommendations
3. **Reference:** Comparison Guide for detailed tool information
4. **Apply:** SCRUM guide for project workflows

### For Instructors

This resource can be:
- Shared as a course resource link
- Printed as a reference handout
- Integrated into syllabi
- Used for in-class demonstrations

---

## 🎓 Course Alignment

### CSC-113: Introduction to Programming (Java)

**Primary Tool:** GitHub Copilot (FREE with Student Pack)
- Real-time IDE assistance
- Low learning curve
- Helps learn syntax without over-reliance

**Secondary Tool:** ChatGPT (FREE tier)
- Concept explanations
- Debugging help
- Learning new topics

**Workflow:**
1. Write pseudocode/comments
2. Copilot suggests implementation
3. YOU understand and refactor
4. Test and verify

### CSC-114: Object-Oriented Programming (Advanced Java)

**Primary Tool:** Claude (FREE tier) for architecture
- 200K context window
- Design pattern suggestions
- Full codebase analysis

**Secondary Tool:** GitHub Copilot (FREE) for implementation
- Speed up coding
- Real-time suggestions

**Tertiary Tool:** ChatGPT (FREE) for debugging logic

**Workflow:**
1. Design architecture (YOU + Claude)
2. Implement with Copilot
3. Review with Claude
4. Optimize and document

---

## 💰 Cost for Students

**Total Cost: $0/month, $0/year**

All four tools have FREE tiers suitable for coursework:

| Tool | Free Access | What You Get |
|------|-------------|--------------|
| **GitHub Copilot** | 100% FREE (Student Pack) | Full Pro features, GPT-4o Turbo, unlimited suggestions |
| **ChatGPT** | FREE tier | GPT-4o mini, 128K context, multimodal |
| **Claude** | FREE tier | Claude 3.5 Sonnet, 200K context, generous limits |
| **Google Gemini** | FREE tier | Gemini 2.5 Flash, 1M tokens, Deep Research |

**Savings:** $820/year compared to professional paid plans!

---

## 🛠️ Technical Details

### Technology Stack
- Pure HTML5/CSS3/JavaScript (ES6+)
- No frameworks or external dependencies
- LocalStorage for preferences
- CSS Grid and Flexbox for layouts
- CSS animations for smooth UX

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Page load: <2 seconds
- No render-blocking resources
- Optimized for GitHub Pages hosting
- File sizes: <5MB total

### Accessibility
- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast (WCAG AA)
- Screen reader compatible

---

## 📁 File Structure

```
tools/ai-tools-guide/
├── index.html                 # Landing page
├── comparison-guide.html      # 9-tab comparison
├── decision-tool.html         # ML decision tree
├── agile-integration.html     # SCRUM workflow guide
├── README.md                  # This file
├── css/                       # (Reserved for future)
├── js/                        # (Reserved for future)
└── data/                      # (Reserved for future)
```

---

## 🎨 Customization

### Color Scheme (CSS Variables)
```css
--primary: #667eea;
--primary-dark: #764ba2;
--navy: #1a1a2e;
--success: #00b894;
--warning: #fdcb6e;
--danger: #d63031;
--info: #3498db;
--gray-light: #f5f7fa;
--text-dark: #2c3e50;
```

### Dark Mode
Automatically saved to localStorage. Toggle with button or `Ctrl/Cmd+D`.

---

## 🔄 Updates & Maintenance

**Current Version:** 1.0 (January 2026)

**Update Frequency:**
- Quarterly (pricing/feature changes)
- As needed (tool updates, new models)

**How to Update:**
1. Edit HTML files directly
2. Test locally (open in browser)
3. Commit and push to GitHub
4. Verify at GitHub Pages URL

**Key Data to Monitor:**
- Tool pricing (student plans)
- Model versions (GPT-5, Claude 4, etc.)
- Context window sizes
- Feature additions/removals

---

## 📝 Academic Integrity

This guide encourages ethical AI usage:

✅ **DO:**
- Use AI to understand concepts
- Ask AI to explain code
- Use suggestions as starting points
- Learn from AI assistance

❌ **DON'T:**
- Copy-paste without understanding
- Submit AI code as 100% your own
- Use AI to bypass learning
- Rely on AI for exams

**Golden Rule:** If you can't explain every line of code you submit, you didn't learn it.

---

## 🤝 Contributing

### For Faculty
- Suggest updates via GitHub Issues
- Request new content (e.g., Python version)
- Share feedback on student usage

### For Students
- Report broken links
- Suggest improvements
- Share what worked/didn't work

**Contact:** Submit issues at GitHub repository or email CIT department.

---

## 📄 License

This guide is part of the FTCC Norris Dashboard project.

**Usage:**
- Free for educational purposes
- FTCC students and faculty
- Other educational institutions (with attribution)

---

## 🔗 Resources

### Official Tool Sites
- **GitHub Copilot:** https://github.com/features/copilot
- **GitHub Student Pack:** https://education.github.com/pack
- **ChatGPT:** https://chat.openai.com
- **Claude:** https://claude.ai
- **Google Gemini:** https://gemini.google.com

### Documentation
- **GitHub Copilot Docs:** https://docs.github.com/copilot
- **OpenAI API Docs:** https://platform.openai.com/docs
- **Anthropic Claude Docs:** https://docs.anthropic.com
- **Google AI Studio:** https://ai.google.dev

### FTCC Resources
- **Main Dashboard:** https://amlw05.github.io/norris-dashboard/
- **CSC-113 Course Materials:** (Add link)
- **CSC-114 Course Materials:** (Add link)

---

## 📊 Usage Analytics (Optional)

If implementing analytics:
- Track most-visited pages
- Monitor dark mode usage
- Count decision tree completions
- Measure time-on-page

**Privacy:** No personal data collected, analytics are aggregate only.

---

## 🐛 Troubleshooting

### Common Issues

**Q: Dark mode doesn't persist**
A: Clear browser cache and try again. Ensure localStorage is enabled.

**Q: Decision tree won't advance**
A: Make sure you've selected an option before clicking "Next."

**Q: Print formatting is off**
A: Use Chrome/Edge for best print results. Try Print Preview first.

**Q: Mobile layout is broken**
A: Clear cache and reload. File may be cached incorrectly.

**Q: Links don't work**
A: Ensure you're accessing via HTTPS (GitHub Pages), not file:// protocol.

---

## 🎯 Future Enhancements (Roadmap)

**Phase 2 (Optional):**
- Video tutorials (YouTube embeds)
- Student testimonials section
- API integration for real-time pricing
- Comparison with Cursor, Replit AI
- Faculty edition with teaching tips
- Integration with actual syllabus links
- Google Form feedback collection

**Phase 3 (Advanced):**
- Real-time usage analytics dashboard
- A/B testing for recommendations
- Personalized learning paths
- Integration with Canvas LMS

---

## 📧 Support

**For Technical Issues:**
- GitHub Issues: [Repository URL]

**For Course Questions:**
- Contact your CSC-113/114 instructor

**For General Feedback:**
- FTCC CIT Department

---

## 🏆 Acknowledgments

**Created for:** FTCC Computer Information Technology students
**Course:** CSC-113 (Intro to Programming) & CSC-114 (OOP)
**Instructor:** [Your Name]
**Semester:** Spring 2026

**Special Thanks:**
- GitHub Education (Student Developer Pack)
- OpenAI, Anthropic, Google (Free tiers for education)
- FTCC CIT Department

---

**Built with ❤️ for FTCC CIT Students**

*Last Updated: January 28, 2026*
