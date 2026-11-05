# PrepHub Feature Guide & Implementation Reference

This document explains the technical implementation, architectural design, and user-facing capabilities of **CSE-Sem5-PrepHub**.

---

## 1. Previous Year Question Banks

Each core subject module (`ml.html`, `toc.html`, `os.html`, `dbms.html`) contains an exhaustive repository of actual university examination questions curated from multiple recent DBATU exam sessions (2022 to 2025).

### Question Presentation
- Questions are rendered inside card components (`.q-card`).
- Each card displays the question text, numerical code/question number, university exam session tags (e.g., *Winter 2023*, *Supplementary Summer 2024*), and calculated frequency counts.
- Marks and numerical flags are visually tagged for rapid scanning.

---

## 2. Repeated-Question & Frequency Analysis

Instead of studying questions in arbitrary order, questions are scored and labeled by their historical recurrence across examined university papers:

- **🔥 Must Do / 3+ Appearances:** Highlighted with bright pink badges. Questions in this tier recur consistently across semesters.
- **⚡ High Priority (2 Appearances):** Highlighted with warning/amber accents.
- **🔹 Standard (1 Appearance):** Regular questions ensuring complete syllabus coverage.
- **Priority Frequency Tables:** Summary tables at the top of subject pages allow students to review top-ranked topics before delving into individual unit cards.

---

## 3. Unit-Wise Categorization & Navigation

DBATU syllabi follow a strict 5-unit structure. PrepHub reflects this directly:
- **Unit Tabs:** Sticky or horizontal navigation tabs (`.tab`) enable switching between *All Units*, *Hot Topics*, or individual units (Unit 1 through Unit 5).
- **Topic Grouping:** Within each unit, questions are structured under conceptual topic headings (`.topic-group`) rather than chronological paper order, helping students master one concept thoroughly.

---

## 4. Real-Time Search & Interactive Filtering

### Search Engine
- Search input (`#search-input`) actively filters question cards on `input` events.
- Queries are normalized (`toLowerCase().trim()`) and matched against question text, topic headers, and subtopic keywords.
- When an active search term is entered, non-matching cards and empty topic groups are hidden dynamically using CSS class toggling (`.hidden { display: none; }`).

### Filter Tabs
- Clicking a unit tab updates the active tab state, resets the search field, and filters `.unit` containers to display only matching units.
- The *Hot Topics* tab filters down to questions possessing `.badge-hot` or priority labels across all units.

---

## 5. LocalStorage Progress Tracking

PrepHub empowers students to track their preparation without requiring account creation or server-side databases:

### How it works:
1. Each question card contains a clickable check indicator (`.check-box`).
2. When toggled, the question card's index is added to or removed from a JavaScript `Set`.
3. The set is serialized to JSON and persisted under a subject-specific key in `localStorage` (e.g., `ml_done_questions_v1`, `toc_done_questions`, `os_done_questions`).
4. **Progress Calculation:**
   $$\text{Progress \%} = \text{round}\left(\frac{\text{Questions Checked}}{\text{Total Questions}} \times 100\right)$$
5. The progress bar (`#pfill`), percentage text (`#pct`), and completed counter (`#psub`, `#done-count`) update instantly.
6. On page reload, `restoreState()` reads `localStorage` and marks completed cards with `.done` and checked styling.

---

## 6. Dark & Light Theme System

The portal defaults to a modern dark theme (`#0e0f11` background, `#16181c` surface) with vibrant magenta/pink accents (`#ff5ca8`).

### Implementation Details:
- Theme preference is stored in `localStorage` under `'theme'` (`'light'` or `'dark'`).
- An immediate inline script in `<head>` checks `localStorage.getItem('theme') === 'light'` and attaches `class="light"` to `<html>` prior to DOM rendering, preventing flash of unstyled content (FOUC).
- The floating toggle button (`#theme-toggle-btn`) dynamically switches the class and updates its label (`☀️ Light` vs `🌙 Dark`).
- All color values are managed through CSS custom properties defined in `assets/css/branding.css`.

---

## 7. Contextual Avatar Assistant System

A key differentiator of PrepHub is its animated student guide avatar implemented in `assets/js/branding.js`:

### Homepage Experience (`index.html`):
- Welcomes students with `avatar-home.png` in a centered glassmorphism dialogue modal.
- Includes a 3-second auto-dismissal timer that respects user interaction (clears if the modal is hovered, closed, or interacted with).
- Minimizes to a subtle floating launcher at the bottom-left corner with status glow so students can reopen study tips anytime.

### Subject Pages (`ml.html`, `toc.html`, `os.html`, `dbms.html`, etc.):
- Renders as a compact bottom-left circular avatar with a green online status ring.
- Displays a tailored personality and pose matched to the subject matter:
  - **Machine Learning (`ml.html`):** `avatar-thinking.png` (algorithmic focus & mathematical formulation tips).
  - **Theory of Computation (`toc.html`):** `avatar-explore.png` (automata & proof strategy).
  - **Operating Systems (`os.html`):** `avatar-motivation.png` (scheduling & memory management guidance).
  - **DBMS (`dbms.html`):** `avatar-about.png` (relational modeling & transaction advice).
- Clicking the launcher cycles through contextual study tips and motivational dialogue bubbles.

---

## 8. Viewport Fitting & Responsive Optimization

The user interface adapts across all mobile and desktop screen sizes:
- **Mobile Viewports (320px–430px):** Single-column stacked cards, full touch targets (minimum 38px–44px for buttons), wrapped badges, and zero horizontal scroll.
- **Tablet (768px–1024px):** 2-column card layouts with fluid padding.
- **Desktop (1024px–1920px):** Multi-column subject grids, balanced 2-column About section, and 3-column unified footer.
- **Reduced Motion Support:** Respects user accessibility preferences via `@media (prefers-reduced-motion: reduce)`.
