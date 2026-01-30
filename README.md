# htmlmark-cli

A minimal CLI tool that rewrites HTML by inserting numbered comment blocks to make structure clear and debugging easier.

**No labels. No explanations. Only numbers.**

---

## What It Does

`htmlmark-cli` reads HTML input and automatically inserts numbered comments before logical block-level elements.

This helps developers:
- Understand structure quickly
- Refer to sections by number
- Debug and review layouts without changing HTML behavior

---

## Example

### Input
```html
<div>
  <header>
    <h1>Title</h1>
  </header>
  <section>
    <p>Hello</p>
  </section>
</div>

Output
### output
<!-- 1 -->
<div>

  <!-- 1.1 -->
  <header>
    <h1>Title</h1>
  </header>

  <!-- 1.2 -->
  <section>
    <p>Hello</p>
  </section>

</div>

Numbering Rules
	•	Top-level blocks: 1, 2, 3
	•	Nested blocks: 1.1, 1.2
	•	Deeper nesting: 1.2.1
	•	Inline tags are ignored
	•	HTML output remains valid

Usage

Paste HTML directly
htmlmark
# paste html
# press CTRL + D

From a file
htmlmark < input.html > output.html
  
Planned Support
	•	CSS block numbering
	•	JavaScript block numbering
  
GitHub Copilot Usage

GitHub Copilot was used to assist with:
	•	CLI scaffolding
	•	Block detection logic
	•	Nested numbering approach

All generated code was reviewed and adjusted manually.
