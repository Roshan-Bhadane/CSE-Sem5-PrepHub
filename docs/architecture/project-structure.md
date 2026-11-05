# PrepHub Project Architecture & Structure

This document details the architectural layout, directory organization, and component relationships of the **CSE-Sem5-PrepHub** static educational preparation portal.

---

## 1. Directory Tree Overview

```text
CSE-Sem5-PrepHub/
│
├── index.html                       # Primary portal entry point & Semester 5 dashboard
├── ml.html                          # Machine Learning interactive PYQ bank
├── toc.html                         # Theory of Computation interactive PYQ bank
├── os.html                          # Operating Systems interactive PYQ bank
├── dbms.html                        # Database Management Systems interactive PYQ bank
├── wc.html                          # Wireless Communication portal (curation in progress)
├── cg.html                          # Computer Graphics portal (curation in progress)
├── DBMS_QuestionBank_DBATU.html     # DBMS legacy URL alias (preserves external bookmarks)
│
├── assets/                          # Static front-end assets
│   ├── avatars/                     # High-resolution character & creator illustrations
│   │   ├── avatar-home.png          # Welcoming pose (homepage assistant modal & launcher)
│   │   ├── avatar-explore.png       # Analytical pose with magnifying glass (TOC & WC)
│   │   ├── avatar-thinking.png      # Thoughtful pose with chin touch (ML & CG)
│   │   ├── avatar-motivation.png    # Inspiring thumbs-up pose (OS)
│   │   └── avatar-about.png         # Confident crossed-arms pose (About & DBMS)
│   ├── css/                         # Shared cascading stylesheets
│   │   ├── branding.css             # Design tokens, assistant UI, about section & footer
│   │   └── responsive.css           # Viewport fitting, fluid card grids & mobile rules
│   └── js/                          # Client-side scripts
│       └── branding.js              # Avatar assistant controller, social sync & copyright
│
├── data/                            # Academic dataset repositories
│   └── question-banks/              # Cleaned, standardized JSON question databases
│       ├── ml-pyq-database.json     # Machine Learning (BTAIC502 / BTCOC501)
│       ├── toc-pyq-database.json    # Theory of Computation (BTCOC502)
│       ├── os-pyq-database.json     # Operating Systems (BTCOC503)
│       └── dbms-pyq-database.json   # Database Management Systems (BTCOC501)
│
├── docs/                            # Technical project documentation
│   ├── architecture/
│   │   └── project-structure.md     # Architectural design & directory reference
│   ├── guides/
│   │   ├── features.md              # Feature implementation & capability guide
│   │   ├── deployment.md            # Local execution & GitHub Pages deployment guide
│   │   └── development.md           # Maintenance, contribution & subject addition guide
│   └── research/
│       └── dbms-pyq-analysis.md     # DBMS examination frequency & topic research
│
├── .gitignore                       # Ignored development files & OS metadata
├── CHANGELOG.md                     # Semantic version history and release notes
├── CONTRIBUTING.md                  # Guidelines for student and open-source contributors
└── README.md                        # Master repository documentation & project showcase
```

---

## 2. Directory & Component Responsibilities

### Root HTML Pages (`/`)
The repository maintains all public web pages at the repository root to ensure seamless compatibility with GitHub Pages (served from `/` on the `main` branch) and simple clean URLs without routing frameworks:

- **`index.html`**: Master dashboard introducing the platform, displaying subject cards with syllabus status, hosting the "Behind Preparation Hub & The Creator" section, and launching the centered welcome assistant.
- **`ml.html`**, **`toc.html`**, **`os.html`**, **`dbms.html`**: Interactive subject modules featuring unit-based tabbed views, high-frequency question badges (`🔥 Must Do`, `⚡ High Priority`), search filters, and persistent completion checkboxes.
- **`wc.html`**, **`cg.html`**: Placeholder subject views alerting students that question analysis is in progress, with quick navigation to available question banks.
- **`DBMS_QuestionBank_DBATU.html`**: An exact replica of `dbms.html` retained at the root to ensure zero broken links for students or faculty with legacy bookmarks.

### `assets/` (Design & Client Logic)
- **`assets/avatars/`**: Contains the 5 character illustrations created for the assistant and creator branding. Images are compressed PNGs (~75KB-85KB) optimized for web rendering.
- **`assets/css/`**:
  - `branding.css`: Centralizes CSS custom properties (`--bg`, `--surface`, `--prephub-pink`), floating launcher buttons, character stages, modal overlays, credential badges, and the 3-column unified footer.
  - `responsive.css`: Enforces `min-height: 100vh`, `max-width: 100%`, fluid flexbox scaling, and prevents horizontal scrolling across mobile viewports (320px–430px).
- **`assets/js/`**:
  - `branding.js`: Self-contained vanilla JavaScript IIFE that detects the current page, configures the appropriate avatar personality, handles the 3-second auto-dismissal timer on the homepage, manages corner speech bubbles on subject pages, and syncs social media link destinations globally.

### `data/question-banks/` (Structured Academic Data)
Contains machine-readable JSON datasets detailing previous-year questions from Dr. Babasaheb Ambedkar Technological University (DBATU) examinations:
- Schema fields include subject metadata, units, topic groups, question wording, historical exam appearance years, marks weightage, and priority levels.
- These datasets serve as the authoritative single source of truth for all question bank content.

### `docs/` (Comprehensive Technical Documentation)
Organized into architecture, guides, and research:
- `docs/architecture/`: Technical reference for directory and code architecture.
- `docs/guides/`: Step-by-step practical guides covering features, deployment, and development.
- `docs/research/`: University exam analysis, syllabus coverage reports, and topic frequency distributions.

---

## 3. Dependency & Linking Strategy

1. **Relative Paths**: All resource references across HTML pages use relative paths (`assets/css/...`, `assets/js/...`, `assets/avatars/...`), allowing the site to function identically when hosted locally via an HTTP server or on GitHub Pages under `https://<username>.github.io/<repo>/`.
2. **Zero Build Step**: The site requires no compilers, bundlers, or Node.js runtime. Plain static web servers (Nginx, Apache, Python `http.server`, VS Code Live Server) can host the entire directory directly.
3. **Typography**: Web fonts (`Syne`, `IBM Plex Sans`, and `IBM Plex Mono`) are loaded via Google Fonts CDN with `font-display: swap` for rapid time-to-first-paint.
