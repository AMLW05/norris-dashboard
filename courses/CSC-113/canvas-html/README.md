# Canvas HTML Module Pages
## CSC-113: Ready-to-Deploy Module Templates

This folder contains Canvas-ready HTML pages for all 8 modules. These pages provide a rich, visually engaging module overview for students.

---

## WHAT'S INCLUDED

### Module Pages
- `Module_01_Canvas_Page.html` - SAGE Foundation & GitHub Setup
- `Module_02_Canvas_Page.html` - AI Exploration & GitHub Mastery *(replicate pattern)*
- `Module_03_Canvas_Page.html` - Prompt Engineering Mastery *(replicate pattern)*
- `Module_04_Canvas_Page.html` - Project Ideation & Track Selection *(replicate pattern)*
- `Module_05_Canvas_Page.html` - Rapid Prototyping *(replicate pattern)*
- `Module_06_Canvas_Page.html` - Sprint 1 *(replicate pattern)*
- `Module_07_Canvas_Page.html` - Sprint 2 *(replicate pattern)*
- `Module_08_Canvas_Page.html` - Capstone & Portfolio Defense *(replicate pattern)*

### Features of Each Page
- **Responsive design** (works on desktop, tablet, mobile)
- **Visual hierarchy** (headers, sections, cards)
- **Color-coded sections** (objectives, tips, warnings)
- **Interactive elements** (hover effects, clickable cards)
- **Canvas-compatible CSS** (inline styles, no external dependencies)
- **Accessibility** (semantic HTML, proper heading structure)

---

## HOW TO USE IN CANVAS

### Step 1: Create Module Page in Canvas
1. Go to your course in Canvas
2. Navigate to **Pages**
3. Click **+ Page**
4. Title: "Module 1: SAGE Foundation & GitHub Setup"

### Step 2: Copy HTML
1. Open `Module_01_Canvas_Page.html` in text editor
2. Copy **entire contents** (from `<!DOCTYPE html>` to `</html>`)
3. In Canvas page editor, click **</>** (HTML Editor) button
4. Paste the HTML

### Step 3: Update Links
Replace placeholder links with actual Canvas URLs:

**Find and replace these placeholders:**
- `[COURSE_ID]` → Your actual Canvas course ID (from URL)
- `[ASSIGNMENT_ID]` → Specific assignment ID from Canvas
- `[FILE_ID]` → File ID for downloadable resources
- `[QUIZ_ID]` → Knowledge check quiz ID
- `[DISCORD_LINK]` → Your course Discord invite link

**Example:**
```html
<!-- Before -->
<a href="/courses/[COURSE_ID]/assignments/[ASSIGNMENT_ID]">View Assignment</a>

<!-- After -->
<a href="/courses/123456/assignments/789012">View Assignment</a>
```

**Pro tip:** Create assignments first, then copy their URLs into the HTML.

### Step 4: Preview and Publish
1. Click **Preview** to see how it looks
2. Test all links (make sure they work!)
3. Click **Save** when ready
4. Set page as **Front Page** for the module (optional)

---

## CUSTOMIZATION OPTIONS

### Change Colors
Module 1 uses purple gradient (`#667eea` to `#764ba2`). You can customize:

```css
/* In the <style> section, find: */
.module-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change to different colors: */
/* Module 1: Purple (#667eea to #764ba2) */
/* Module 2: Blue (#4facfe to #00f2fe) */
/* Module 3: Green (#43e97b to #38f9d7) */
/* Module 4: Orange (#fa709a to #fee140) */
/* Modules 5-8: Your choice! */
```

### Add Your Own Sections
Insert new sections using this template:

```html
<div class="content-section">
    <h2>Your Section Title</h2>
    <p>Your content here...</p>
</div>
```

### Add Tip Boxes
```html
<div class="tip-box">
    <h4>💡 Your Tip Title</h4>
    <ul>
        <li>Tip 1</li>
        <li>Tip 2</li>
    </ul>
</div>
```

### Add Warning Boxes
```html
<div class="warning-box">
    <h4>⚠️ Warning Title</h4>
    <p>Important information...</p>
</div>
```

---

## TEMPLATE STRUCTURE

Each module page follows this consistent structure:

1. **Module Header** - Title, duration, points, due date
2. **Learning Objectives** - MLOs for the module
3. **Week Timeline** - Two-week overview
4. **Assignments** - Cards for each assignment with details
5. **Learning Activities** - Lab activities, knowledge checks
6. **Resources** - Videos, readings, tools, external links
7. **Checklist** - Module completion tracker
8. **Tips** - Drew's advice for success
9. **Common Pitfalls** - What to avoid
10. **Help & Support** - Where to get help
11. **Process Grading Reminder** - How process is graded
12. **Footer** - Call to action and inspiring quote

---

## ACCESSIBILITY FEATURES

### Built-in Accessibility
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Color contrast**: Text meets WCAG AA standards
- **Responsive design**: Works on all screen sizes
- **Clear navigation**: Logical content flow
- **Link text**: Descriptive (not "click here")

### Testing Accessibility
1. Use Canvas's accessibility checker (built-in tool)
2. Test with screen reader (NVDA, JAWS, VoiceOver)
3. Check color contrast: https://webaim.org/resources/contrastchecker/
4. Verify keyboard navigation works

---

## CANVAS EDITOR MODES

Canvas has two editor modes:

### Visual Editor (WYSIWYG)
- Default mode, looks like a word processor
- Good for simple edits
- **Problem**: Strips some HTML/CSS on save

### HTML Editor (Code View)
- Click **</>** button to access
- Shows raw HTML
- **Use this mode** when pasting these templates
- Preserves all styles and structure

**Important:** Always use HTML Editor mode for these templates to avoid formatting loss.

---

## UPDATING CONTENT

### When Assignment Details Change
1. Go to Canvas page
2. Click **Edit**
3. Switch to **HTML Editor** (</>)
4. Find the assignment card section
5. Update text (points, due dates, requirements)
6. **Save**

### When Adding New Resources
Find the "Learning Resources" section and add new items:

```html
<li><a href="/courses/[COURSE_ID]/files/[FILE_ID]">New Resource Name</a> (time estimate)</li>
```

### When Module Dates Change
Update in two places:
1. Module header meta items
2. Assignment cards due date badges

---

## TROUBLESHOOTING

### Problem: "Styles don't show up after pasting"
**Solution**: Make sure you're in HTML Editor mode, not Visual Editor.

### Problem: "Links are broken"
**Solution**: Replace all `[COURSE_ID]`, `[ASSIGNMENT_ID]`, etc. placeholders with real Canvas IDs.

### Problem: "Page looks different than preview"
**Solution**: Canvas may cache styles. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R) to see latest version.

### Problem: "Some sections overlap on mobile"
**Solution**: This shouldn't happen (responsive CSS included), but if it does:
1. Check that all `<div>` tags are properly closed
2. Validate HTML: https://validator.w3.org
3. Test in Canvas mobile app

### Problem: "Canvas strips some of my HTML"
**Solution**: Canvas has security restrictions. Avoid:
- `<script>` tags (JavaScript not allowed)
- External stylesheets (use inline styles only)
- `<iframe>` from untrusted sources
- Form elements (`<form>`, `<input>`)

---

## BEST PRACTICES

### Do:
- ✅ Test all links before publishing
- ✅ Preview on desktop AND mobile
- ✅ Keep consistent structure across all modules
- ✅ Use high-contrast colors for readability
- ✅ Update placeholder text with actual content
- ✅ Spell-check all content

### Don't:
- ❌ Use external CSS files (Canvas won't load them)
- ❌ Use JavaScript (Canvas security blocks it)
- ❌ Use absolute file paths (use Canvas relative paths)
- ❌ Forget to update placeholder links
- ❌ Mix HTML and Visual editor modes

---

## REPLICATING FOR OTHER MODULES

To create Module 2-8 pages:

1. **Copy** Module_01_Canvas_Page.html
2. **Rename** to Module_0X_Canvas_Page.html
3. **Update header**:
   - Module number and title
   - Duration (weeks)
   - Points (check coursemap)
   - Due date
4. **Update Learning Objectives** (MLOs from coursemap)
5. **Update Week Timeline** (specific to module)
6. **Update Assignments** (specific to module)
7. **Update Activities** (specific to module)
8. **Update Resources** (module-specific videos, readings)
9. **Customize Tips** (module-specific advice)
10. **Customize Pitfalls** (common mistakes for that module)

**Time estimate**: 30-45 minutes per module (once you have content ready)

---

## TECHNICAL NOTES

### Why Inline CSS?
Canvas doesn't support external stylesheets or `<link>` tags. All CSS must be:
- Inline in `<style>` tags in the `<head>`
- OR as inline styles: `<div style="color: red;">`

This template uses `<style>` tag approach for maintainability.

### Browser Compatibility
Tested in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Canvas mobile app (iOS/Android)

### File Size
Each HTML file is ~15-20KB. Canvas has no size limit for pages, but keep files reasonable for load times.

---

## EXAMPLES OF COMPLETED PAGES

### Module 1 Features:
- Purple gradient header
- 2 assignment cards (Hello GitHub, Meet Kevin & SAGE)
- Sacred Flow lab activity
- GitHub resources and tutorials
- Beginner-friendly tips

### Module 3 (Prompt Engineering):
- Green gradient header
- Good Bot iteration assignment
- Prompt engineering lab
- Technique reference cards
- Examples of before/after prompts

### Module 6 (Sprint 1):
- Orange gradient header
- Sprint deliverable + retrospective assignments
- Demo day information
- Agile methodology resources
- Velocity tracking tips

---

## MAINTENANCE

### Semester Start
- [ ] Update all due dates for current term
- [ ] Test all Canvas links (courses/assignments/files)
- [ ] Verify videos are still available
- [ ] Update any outdated external links
- [ ] Check for broken images (if you added any)

### Mid-Semester
- [ ] Update based on student feedback
- [ ] Fix any typos students report
- [ ] Add clarifications where students are confused
- [ ] Update office hours links if they change

### End of Semester
- [ ] Archive current version (for reference)
- [ ] Note what worked well / what to improve
- [ ] Update for next term based on retrospective

---

## STUDENT VIEW vs. INSTRUCTOR VIEW

**Students see:**
- Clean, organized module page
- Clear learning path (objectives → activities → assignments)
- Easy navigation to resources
- Visual cues (colors, icons) for different content types

**Instructors see (in edit mode):**
- Raw HTML with inline CSS
- Placeholder links to update
- Comment sections for notes
- Modular structure easy to copy/paste

---

## SUPPORT

### For Technical Issues
- Canvas support: https://community.canvaslms.com
- HTML/CSS validator: https://validator.w3.org
- Accessibility checker: https://www.w3.org/WAI/test-evaluate/

### For Content Questions
- See coursemap for module details
- See assignment files for rubrics
- See instructor guide for teaching notes

---

## VERSION HISTORY

**v1.0** (January 2026):
- Initial template for Module 1
- Responsive design
- Canvas-compatible CSS
- Accessibility features
- Replicable structure

**Future updates:**
- Module 2-8 templates (use Module 1 as base)
- Additional customization options
- Video embed examples
- Interactive elements (if Canvas allows)

---

**These templates save hours of Canvas page design. Just update the content, verify links, and publish!**

**frotz → plugh**
