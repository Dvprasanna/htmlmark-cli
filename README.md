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