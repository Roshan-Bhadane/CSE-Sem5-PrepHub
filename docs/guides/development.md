# Developer Guide & Contribution Workflow

This guide provides technical instructions for developers and student contributors maintaining or extending **CSE-Sem5-PrepHub**.

---

## 1. Project Naming & File Conventions

To ensure cross-platform compatibility across Windows, macOS, and Linux servers:

- **HTML Pages:** Lowercase single words or abbreviations at the repository root (`index.html`, `ml.html`, `toc.html`, `os.html`, `dbms.html`, `wc.html`, `cg.html`).
- **Datasets:** Lowercase kebab-case inside `data/question-banks/` (e.g., `ml-pyq-database.json`, `toc-pyq-database.json`).
- **Documentation:** Lowercase kebab-case inside `docs/` (e.g., `project-structure.md`, `features.md`).
- **Images & Avatars:** Lowercase kebab-case inside `assets/avatars/` or `assets/images/` (e.g., `avatar-home.png`).
- **CSS / JS Files:** Lowercase single words or kebab-case inside `assets/css/` and `assets/js/`.

---

## 2. How to Add a New Subject Page

When adding a full question bank for an upcoming subject (e.g., Wireless Communication or Computer Graphics):

1. **Create the Dataset**:
   Place the structured JSON file in `data/question-banks/` (e.g., `data/question-banks/wc-pyq-database.json`). Follow the schema established in `ml-pyq-database.json`.
2. **Create the Root HTML File**:
   Duplicate a lightweight existing subject template such as `ml.html` or `toc.html` as `<subject_code>.html` (e.g., `wc.html` or `cg.html`) at the repository root.
3. **Include Shared Resources**:
   Ensure `<head>` includes:
   ```html
   <link rel="stylesheet" href="assets/css/branding.css">
   <link rel="stylesheet" href="assets/css/responsive.css">
   <script src="assets/js/branding.js" defer></script>
   ```
4. **Update Sticky Navbar & Cross-Page Links**:
   Ensure the subject link appears in the dropdown/navigation bar across all other subject pages.
5. **Configure Avatar Personality in `assets/js/branding.js`**:
   Add a subject configuration block to `PAGE_CONFIGS`:
   ```javascript
   wc: {
     id: 'wc',
     style: 'corner',
     defaultAvatar: 'assets/avatars/avatar-explore.png',
     tag: 'WIRELESS COMM PYQ',
     dialogue: "Study cellular system design and handoff strategies first!",
     tips: [ ... ]
   }
   ```
   Add page detection matching in `detectPageKey()`.

---

## 3. How to Update Question-Bank Datasets

When adding newly released DBATU examination papers:

1. Locate the subject's JSON file in `data/question-banks/`.
2. Add the exam session name to `examsCovered` (e.g., `"Winter 2025 – BTCOC503"`).
3. Append or update question records:
   ```json
   {
     "pyq_id": "OS-U2-PYQ023",
     "question_text": "Explain the working of Round Robin CPU scheduling with an example.",
     "times_asked": 3,
     "priority": "must_do",
     "marks": 7,
     "exam_appearances": ["Winter 2023", "Winter 2025"]
   }
   ```
4. Update the pre-rendered HTML cards in the corresponding `<subject>.html` file or update automated rendering scripts.

---

## 4. How to Update Shared CSS & JavaScript

- **Global Styles & Modals:** Edit [`assets/css/branding.css`](../../assets/css/branding.css). Preserve dark/light theme tokens and test both `html` and `html.light` modes.
- **Responsive Layouts:** Edit [`assets/css/responsive.css`](../../assets/css/responsive.css). Test breakpoints from 320px up to 1920px.
- **Assistant Dialogues & Social Links:** Edit [`assets/js/branding.js`](../../assets/js/branding.js).
  - Social link destinations are configured centrally in `PREPHUB_SOCIAL_CONFIG`.
  - Assistant dialogs are configured in `PAGE_CONFIGS`.

---

## 5. Local Testing & Verification Workflow

Before submitting a pull request or committing changes:

1. **Syntax Check:**
   ```bash
   node -c assets/js/branding.js
   ```
2. **JSON Dataset Validation:**
   ```bash
   node -e "['ml-pyq-database.json', 'toc-pyq-database.json', 'os-pyq-database.json', 'dbms-pyq-database.json'].forEach(f => JSON.parse(require('fs').readFileSync('data/question-banks/' + f)))"
   ```
3. **Local HTTP Server Verification:**
   Launch a local static server (`python -m http.server 8000`) and test:
   - Homepage assistant popup (appears on load, dismisses after 3s, minimizes to launcher).
   - Navigation between all subjects.
   - Question search and unit tab filtering.
   - Progress bar toggling (verify progress persists across page refresh).
   - Dark/Light mode toggle.
   - Social link destinations in About section and Footer.
