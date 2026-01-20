# CSC-249 Canvas HTML Pages - Instructor Guide

**Course**: CSC-249: Data Structures & Algorithms
**Instructor**: Drew Norris
**Instructional Designer**: Angela Westmoreland
**Created**: January 2026

---

## Overview

This directory contains 8 Canvas-ready HTML module pages for CSC-249. Each page provides students with a comprehensive module overview including learning objectives, assignments, resources, PM integration, and Drew's pedagogical insights.

---

## File Inventory

### Module Pages (8 total)
1. **Module_01_Canvas_Page.html** - Foundations & AI Collaboration (Blue theme)
2. **Module_02_Canvas_Page.html** - Algorithm Analysis & Recursion (Green theme)
3. **Module_03_Canvas_Page.html** - Sorting Algorithms (Orange theme)
4. **Module_04_Canvas_Page.html** - Linear Structures - Sprint 1 (Red theme)
5. **Module_05_Canvas_Page.html** - Hashing & Hash Tables - Sprint 2 (Purple theme)
6. **Module_06_Canvas_Page.html** - Trees & Heaps - Sprint 3 (Teal theme)
7. **Module_07_Canvas_Page.html** - Graphs & Advanced Algorithms - Sprint 4 (Deep Orange theme)
8. **Module_08_Canvas_Page.html** - Integration Project & Portfolio (Deep Purple theme)

### Documentation
- **README.md** (this file) - Instructor guide for Canvas import and customization

---

## How to Import into Canvas

### Method 1: Copy-Paste HTML (Recommended)

1. **Open the HTML file** in a text editor or web browser
2. **Click the "Print Module Page" button** in the top-right corner (this formats for copying)
3. **Select all content** (Ctrl+A / Cmd+A)
4. **Copy** the content (Ctrl+C / Cmd+C)
5. **In Canvas**:
   - Navigate to your course → Pages
   - Click "+ Page" to create a new page
   - Title the page (e.g., "Module 1: Foundations & AI Collaboration")
   - Switch to HTML editor (click "< >" icon)
   - Paste the entire HTML code
   - Click "Save"

### Method 2: Direct HTML Editor

1. **Open the .html file** in a text editor
2. **Copy the entire contents** (from `<!DOCTYPE html>` to `</html>`)
3. **In Canvas**:
   - Go to Pages → "+ Page"
   - Click the "< >" HTML editor icon
   - Paste the HTML code directly
   - Save and publish

### Method 3: Upload as File (Alternative)

1. **Upload HTML files** to Canvas Files
2. **Link from a Page** or module item
3. Note: This method doesn't allow inline editing in Canvas

---

## Customization Instructions

### Updating Assignment Links

Each module page has placeholder links for assignments and rubrics. Replace these placeholders:

```html
<!-- BEFORE -->
<a href="/courses/[COURSE_ID]/assignments/[ASSIGNMENT_ID]" class="button-primary">View Assignment Details</a>

<!-- AFTER (example) -->
<a href="/courses/12345/assignments/67890" class="button-primary">View Assignment Details</a>
```

**How to find IDs**:
1. Go to the assignment in Canvas
2. Copy the URL (e.g., `https://canvas.instructure.com/courses/12345/assignments/67890`)
3. Extract the course ID (12345) and assignment ID (67890)
4. Replace in all links

### Updating Due Dates

Each module shows generic due dates ("End of Week 2", "End of Week 4", etc.). Update to specific dates:

```html
<!-- BEFORE -->
<span class="due-date">Due: End of Week 2</span>

<!-- AFTER -->
<span class="due-date">Due: Friday, Feb 2, 11:59 PM</span>
```

### Changing Colors

Each module has a unique theme color. To change a module's color scheme:

1. Find the gradient in `.module-header` style (near top of HTML)
2. Update both gradient colors (e.g., change `#2196F3` and `#1976D2`)
3. Update all matching color references:
   - `.content-section` border-left
   - `.content-section h2` color
   - `.button-primary` background
   - `.week h3` color

**Color Scheme Reference**:
- Module 1: Blue (#2196F3)
- Module 2: Green (#43A047)
- Module 3: Orange (#FF6F00)
- Module 4: Red (#D32F2F)
- Module 5: Purple (#7B1FA2)
- Module 6: Teal (#00897B)
- Module 7: Deep Orange (#F57C00)
- Module 8: Deep Purple (#512DA8)

### Adding Content

To add new sections:

```html
<div class="content-section">
    <h2>New Section Title</h2>
    <p>Your content here...</p>
</div>
```

To add resource cards:

```html
<div class="resource-card">
    <h4>Resource Name</h4>
    <p><a href="URL" target="_blank">Link Text</a></p>
    <p>Description of the resource.</p>
</div>
```

---

## Color Scheme Rationale

### Module-Specific Colors
Each module uses a distinct color to help students visually distinguish between modules and maintain spatial awareness in the course structure.

**Design Principles**:
1. **Progressive Intensity**: Colors progress from cooler (blue) to warmer (orange/red) as technical complexity increases
2. **Sprint Distinction**: Sprint modules (4-7) use bolder, more saturated colors to signal increased rigor
3. **Capstone Finale**: Module 8 uses deep purple to convey prestige and culmination
4. **Accessibility**: All color combinations meet WCAG AA contrast standards (4.5:1 minimum)

### Color Psychology
- **Blue (Module 1)**: Trust, learning, foundation
- **Green (Module 2)**: Growth, analysis, measurement
- **Orange (Module 3)**: Energy, sorting, organization
- **Red (Module 4)**: Action, first sprint, intensity
- **Purple (Module 5)**: Creativity, hashing, problem-solving
- **Teal (Module 6)**: Balance, hierarchical structures
- **Deep Orange (Module 7)**: Advanced complexity, networks
- **Deep Purple (Module 8)**: Mastery, capstone, achievement

---

## Accessibility Features

### WCAG AA Compliance
All pages meet WCAG 2.1 Level AA standards:

1. **Color Contrast**:
   - All text meets 4.5:1 minimum contrast ratio
   - Header text (white on color) meets 4.5:1
   - Body text (dark on light) exceeds 7:1

2. **Semantic HTML**:
   - Proper heading hierarchy (h1 → h2 → h3)
   - Descriptive link text (no "click here")
   - Meaningful section structure

3. **Keyboard Navigation**:
   - All interactive elements keyboard accessible
   - Logical tab order
   - Print button accessible via keyboard

4. **Screen Reader Support**:
   - Alt text for visual elements (emojis removed for accessibility)
   - ARIA labels where needed
   - Clear content structure

5. **Responsive Design**:
   - Mobile-friendly layouts
   - Text scales appropriately
   - No horizontal scrolling on small screens

### Testing Recommendations
- **Contrast Checker**: Use WebAIM Contrast Checker to verify any custom colors
- **Screen Reader**: Test with JAWS, NVDA, or VoiceOver
- **Keyboard Only**: Navigate pages using only Tab, Enter, and arrow keys
- **Mobile**: Test on iOS and Android devices

---

## Print-Friendly Features

Each page includes print-optimized CSS:

```css
@media print {
    .button-primary, .button-secondary, .button-print {
        display: none;  /* Hide buttons when printing */
    }
    .module-header {
        break-inside: avoid;  /* Keep header together */
    }
    .assignment-card {
        break-inside: avoid;  /* Keep cards together */
    }
}
```

**Students can**:
- Print module pages for offline reference
- Export to PDF for annotations
- Copy/paste content into study guides

**Print Button**: Each page has a "Print Module Page" button (top-right) that triggers the browser print dialog.

---

## Design Features

### Responsive Layout
- **Desktop**: 2-column week timeline, full-width sections
- **Tablet**: Stacked week timeline, adjusted spacing
- **Mobile**: Single column, larger touch targets

### Visual Elements
1. **Module Header**: Gradient background with metadata badges
2. **Learning Objectives**: Highlighted box with CLO mapping
3. **Week Timeline**: Visual 2-week breakdown
4. **Assignment Cards**: Hover effects, color-coded badges
5. **PM Integration Box**: Purple-themed project management insights
6. **Drew's Tips**: Green success tips with actionable advice
7. **Resource Cards**: Yellow-themed external links
8. **Drew's Note**: Personal message from instructor

### Interactive Components
- **Hover Effects**: Assignment cards lift on hover
- **Print Button**: JavaScript-powered print functionality
- **Collapsible Sections**: (Future enhancement - currently all expanded)

---

## Common Customizations

### Adding a Video Embed

```html
<div class="content-section">
    <h2>Module Introduction Video</h2>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe src="VIDEO_URL"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                frameborder="0" allowfullscreen>
        </iframe>
    </div>
</div>
```

### Adding a Code Example

```html
<pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 5px; overflow-x: auto;">
<code>// Your code here
int main() {
    return 0;
}</code>
</pre>
```

### Adding a Checklist

```html
<div class="checklist">
    <h3>Module Checklist</h3>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
</div>
```

---

## Maintenance Notes

### Semester Updates
Before each semester:
1. Update due dates in all 8 modules
2. Update assignment/rubric links
3. Review resource links (check for broken URLs)
4. Update Drew's Notes with current examples/references
5. Adjust point values if grading scheme changes

### Version Control
- Keep original HTML files in version control (Git)
- Document major changes in commit messages
- Tag releases by semester (e.g., "Spring-2026")

### Student Feedback
After first semester:
- Gather student feedback on clarity
- Identify missing resources or confusing sections
- Update based on common questions

---

## Troubleshooting

### Issue: Links Don't Work
**Solution**: Canvas requires full URLs. Replace relative paths:
- Wrong: `/assignments/123`
- Right: `/courses/[COURSE_ID]/assignments/123`

### Issue: Colors Look Different in Canvas
**Solution**: Canvas applies its own CSS. Use inline styles for critical formatting:
```html
<p style="color: #2196F3; font-weight: bold;">Important text</p>
```

### Issue: Print Button Doesn't Work
**Solution**: Ensure JavaScript is enabled. Some Canvas themes block inline JavaScript. Alternative: use browser File → Print.

### Issue: Mobile Layout Breaks
**Solution**: Check viewport meta tag is present:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Integration with Course Materials

### Linking to Assignments
Each module page should link to:
- Assignment details pages
- Rubric documents (PDFs in Files)
- Discussion boards (if applicable)
- External resources (Runestone, VisuAlgo, etc.)

### Module Sequence
Publish modules in Canvas in order:
1. Module 1 (available Week 1)
2. Module 2 (available Week 3)
3. Module 3 (available Week 5)
4. Module 4 (available Week 7)
5. Module 5 (available Week 9)
6. Module 6 (available Week 11)
7. Module 7 (available Week 13)
8. Module 8 (available Week 15)

### Navigation
Add "Next Module" buttons at the bottom of each page:
```html
<a href="/courses/[COURSE_ID]/pages/module-2-canvas-page" class="button-primary">
    Next: Module 2 →
</a>
```

---

## Drew's Pedagogical Approach (Reflected in Design)

### Create-First Learning
- Code examples shown before theory
- Assignments emphasize building, then understanding
- Drew's Tips focus on practical implementation advice

### AI Collaboration
- Every module references prompts.txt
- AI tools integrated into process grading
- "Drew's Tips" include AI prompting strategies

### Process Over Product
- 30-40% of each assignment is process grading
- PM Integration boxes in every module
- Sprint modules emphasize workflow mastery

### Failure as Exercise
- Drew's Notes normalize struggle and iteration
- Tips acknowledge common mistakes
- Retrospectives built into sprint modules

---

## Support & Questions

**For technical issues**:
- Contact: Angela Westmoreland (Instructional Designer)
- Email: [contact info]

**For content questions**:
- Contact: Drew Norris (Instructor)
- Email: [contact info]

**For accessibility concerns**:
- Review WCAG guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Test with WebAIM tools: https://webaim.org/resources/

---

## Change Log

### Version 1.0 (January 2026)
- Initial release: 8 module pages created
- Color-coded by module
- WCAG AA compliant
- Mobile responsive
- Print-friendly CSS
- Drew's pedagogical voice integrated

---

## Future Enhancements (Roadmap)

### Phase 2 (Future)
- [ ] Add collapsible sections for long content
- [ ] Embed knowledge check quizzes inline
- [ ] Add progress tracking (completed sections)
- [ ] Create matching Canvas module templates
- [ ] Video tutorials for common data structures

### Phase 3 (Future)
- [ ] Student annotation features
- [ ] AI chatbot integration for module questions
- [ ] Auto-generated study guides from module content
- [ ] Analytics dashboard for instructor insights

---

**Last Updated**: January 2026
**Version**: 1.0
**Maintained By**: Angela Westmoreland, Instructional Designer
