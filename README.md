<div align="center">

# 🎓 CSE-Sem5-PrepHub

### **Prepare Smarter. Study Better.**

A student-developed academic preparation platform for DBATU Computer Science Engineering Semester 5 students.

[![Live Website](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-ff5ca8?style=for-the-badge&logo=github)](https://roshan-bhadane.github.io/CSE-Sem5-PrepHub/)
[![Static Site](https://img.shields.io/badge/Architecture-Static%20HTML%20%2F%20CSS%20%2F%20JS-blue?style=for-the-badge)](https://github.com/Roshan-Bhadane/CSE-Sem5-PrepHub)
[![Academic Program](https://img.shields.io/badge/University-DBATU%20CSE%20Sem%205-10b981?style=for-the-badge)](https://dbatu.ac.in)

---

**🌐 Live Portal:** [https://roshan-bhadane.github.io/CSE-Sem5-PrepHub/](https://roshan-bhadane.github.io/CSE-Sem5-PrepHub/)

</div>

---

## 📌 Project Overview

**PrepHub** is a student-led academic preparation platform designed to help Dr. Babasaheb Ambedkar Technological University (DBATU) Computer Science & Engineering Semester 5 students prepare strategically for university examinations. It organizes previous-year questions, highlights recurring exam patterns, provides unit-wise categorization, and offers useful study-progress features through a lightweight web interface.

Instead of manually sorting through disorganized PDF files before exams, students can access clean, structured question banks, review topic frequency tables, search for specific algorithms or definitions, and track their study progress right inside their browser.

---

## 🚀 Key Features

- **Previous Year Question Bank:** Comprehensive compilations of long-answer questions and numericals sourced from official DBATU exam sessions (2022 to 2025).
- **Repeated Question & Trend Analysis:** Questions are automatically scored and badged by appearance frequency (`🔥 Must Do`, `⚡ High Priority`, `🔹 Standard`).
- **Topic Frequency Tables:** Top-ranked summary tables highlighting recurring concepts before each subject's unit modules.
- **Unit-Wise Syllabus Categorization:** Questions categorized into the official 5-unit DBATU syllabus with topic group headings.
- **Real-Time Search & Filtering:** Instant keyword search across question text, topics, and subtopics alongside unit-specific filter tabs.
- **Exam Session References:** Every question explicitly displays the exam sessions and years it appeared in (e.g., *Winter 2023*, *Supplementary Summer 2024*).
- **Client-Side Progress Tracking:** Interactive checkboxes persist completion states in browser `localStorage` and calculate real-time completion percentages.
- **Dark & Light Themes:** High-contrast dark mode default with a clean light theme toggle that remembers student preference across visits.
- **Contextual Avatar Assistant:** Interactive animated student guide character (`assets/js/branding.js`) delivering tailored study tips and exam strategies per subject.
- **Fully Responsive Architecture:** Viewport-optimized layout ensuring smooth preparation across smartphones (320px–430px), tablets, and desktops without horizontal scrolling.

---

## 📚 Supported Subjects

| Subject | Course Code | Status | Web Page | Dataset |
|:---|:---:|:---:|:---|:---|
| **Operating Systems** | `BTCOC503` | ✅ Available | [`os.html`](os.html) | [`os-pyq-database.json`](data/question-banks/os-pyq-database.json) |
| **Theory of Computation** | `BTCOC502` | ✅ Available | [`toc.html`](toc.html) | [`toc-pyq-database.json`](data/question-banks/toc-pyq-database.json) |
| **Machine Learning** | `BTAIC502` / `BTCOC501` | ✅ Available | [`ml.html`](ml.html) | [`ml-pyq-database.json`](data/question-banks/ml-pyq-database.json) |
| **Database Management Systems** | `BTCOC501` | ✅ Available | [`dbms.html`](dbms.html) | [`dbms-pyq-database.json`](data/question-banks/dbms-pyq-database.json) |
| **Wireless Communication** | `BTCOC504` | 🔄 Curation in Progress | [`wc.html`](wc.html) | Coming Soon |
| **Computer Graphics** | `BTCOC505` | 🔄 Curation in Progress | [`cg.html`](cg.html) | Coming Soon |

> **Legacy URL Notice:** The alias [`DBMS_QuestionBank_DBATU.html`](DBMS_QuestionBank_DBATU.html) is maintained at the root for backward compatibility with existing bookmarks.

---

## 💻 Technology Stack

PrepHub is purposefully architected as a lightweight, static client-side web application with zero server dependencies:

- **HTML5:** Semantic markup, accessible navigation, and structured question cards.
- **CSS3:** Custom properties (design tokens), CSS Grid, Flexbox, glassmorphic UI, and smooth animations.
- **JavaScript (Vanilla ES6):** DOM filtering, search matching, event-driven assistant dialogs, and progress calculation.
- **JSON:** Authoritative academic question databases with normalized schemas.
- **Web Storage API (`localStorage` & `sessionStorage`):** Persistent client-side progress tracking and theme state.
- **Google Fonts:** Typography via `Syne`, `IBM Plex Sans`, and `IBM Plex Mono`.
- **Git & GitHub Pages:** Distributed version control and global CDN static deployment.

---

## 📁 Repository Structure

```text
CSE-Sem5-PrepHub/
│
├── index.html                       # Semester 5 dashboard & portal homepage
├── ml.html                          # Machine Learning question bank
├── toc.html                         # Theory of Computation question bank
├── os.html                          # Operating Systems question bank
├── dbms.html                        # Database Management Systems question bank
├── wc.html                          # Wireless Communication portal (curation in progress)
├── cg.html                          # Computer Graphics portal (curation in progress)
├── DBMS_QuestionBank_DBATU.html     # Legacy URL compatibility alias
│
├── assets/                          # Static front-end assets
│   ├── avatars/                     # High-resolution character illustrations (PNG)
│   ├── css/
│   │   ├── branding.css             # Unified branding, assistant modals, about & footer
│   │   └── responsive.css           # Global viewport fitting & responsive breakpoints
│   └── js/
│       └── branding.js              # Avatar assistant manager & social synchronization
│
├── data/
│   └── question-banks/              # Standardized JSON question databases
│       ├── ml-pyq-database.json
│       ├── toc-pyq-database.json
│       ├── os-pyq-database.json
│       └── dbms-pyq-database.json
│
├── docs/                            # Comprehensive documentation suite
│   ├── architecture/
│   │   └── project-structure.md     # In-depth architectural documentation
│   ├── guides/
│   │   ├── features.md              # Feature implementation reference
│   │   ├── deployment.md            # Hosting & GitHub Pages deployment guide
│   │   └── development.md           # Developer guidelines & subject addition steps
│   └── research/
│       └── dbms-pyq-analysis.md     # Academic frequency research & topic reports
│
├── .gitignore                       # Ignored development files
├── CHANGELOG.md                     # Semantic version history and release notes
├── CONTRIBUTING.md                  # Open-source contribution guidelines
└── README.md                        # Master repository documentation
```

---

## 🛠️ Local Development & Usage

Because PrepHub is completely static, getting started locally requires no `npm install` or compilation steps:

```bash
# 1. Clone the repository
git clone https://github.com/Roshan-Bhadane/CSE-Sem5-PrepHub.git

# 2. Navigate to the project directory
cd CSE-Sem5-PrepHub
```

### Run with a Static Server:
To ensure proper origin resolution for local testing, launch any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 GitHub Pages Deployment

PrepHub deploys directly from the root of the `main` branch:

1. In the GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment > Source**, select `Deploy from a branch`.
3. Set the **Branch** to `main` and directory to `/ (root)`.
4. Click **Save**.
5. Your deployment will be live at:
   ```text
   https://roshan-bhadane.github.io/CSE-Sem5-PrepHub/
   ```

For detailed troubleshooting and domain configuration, refer to the [Deployment Guide](docs/guides/deployment.md).

---

## 🗺️ Project Roadmap

- [x] **Semester 5 Core Coverage:** Complete question banks for OS, TOC, ML, and DBMS.
- [x] **Interactive Assistant:** Character avatar with contextual guidance across pages.
- [x] **Responsive Optimization:** Calibrated viewports for all mobile screen dimensions.
- [x] **Repository Standardization:** Dedicated directories for academic datasets and technical docs.
- [ ] **Curate WC & CG Datasets:** Complete PYQ frequency analysis for Wireless Communication and Computer Graphics.
- [ ] **Printable Study Sheets:** Export high-frequency question lists to student-friendly PDF/print summaries.
- [ ] **Formula & Numerical Cheat Sheets:** Quick-reference cheat sheets for automata proofs, page replacement algorithms, and normalization steps.

---

## 👤 Creator & Maintainer

**Created with purpose by Roshan Chandrakant Bhadane**  
*Computer Science & Engineering Student | Aspiring Full-Stack Developer*  
*Google Student Ambassador 2026 | Founder & President — STARKS TECH CLUB*  
*SVKM's College of Engineering, Shirpur (DBATU)*

- **GitHub:** [@Roshan-Bhadane](https://github.com/Roshan-Bhadane)
- **Instagram:** [@roshan_bhadane_27](https://www.instagram.com/roshan_bhadane_27/)
- **Email:** [bhadaneroshan27@gmail.com](mailto:bhadaneroshan27@gmail.com)
- **LinkedIn:** [Roshan Bhadane](https://www.linkedin.com/in/roshan-bhadane/)

> *“I did the analysis. Now you do the studying!”*

---

## ⚠️ Academic Disclaimer

**CSE-Sem5-PrepHub** is an independent, student-led academic initiative developed for educational purposes to assist students in preparing for university examinations. The questions and frequencies presented are compiled from historical previous-year examination papers of Dr. Babasaheb Ambedkar Technological University (DBATU). Students are strongly encouraged to always consult the official DBATU curriculum, syllabus circulars, and university guidelines for final examination preparation.
