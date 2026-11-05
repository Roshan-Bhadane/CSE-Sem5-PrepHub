# Changelog

All notable changes to the **CSE-Sem5-PrepHub** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Added
- Standardized directory architecture: `data/question-banks/` for all academic JSON databases.
- Dedicated technical documentation suite in `docs/` (`docs/architecture/project-structure.md`, `docs/guides/features.md`, `docs/guides/deployment.md`, `docs/guides/development.md`, and `docs/research/dbms-pyq-analysis.md`).
- Open-source contributor guidelines (`CONTRIBUTING.md`) and project changelog (`CHANGELOG.md`).
- Structured `dbms-pyq-database.json` dataset organized in `data/question-banks/`.

### Changed
- Standardized academic dataset filenames to lowercase kebab-case (`ml-pyq-database.json`, `toc-pyq-database.json`, `os-pyq-database.json`, `dbms-pyq-database.json`).
- Upgraded root `README.md` with full project badges, architectural tree, verified feature lists, and local setup guides.

---

## [2.1.0] - 2026-11-05

### Removed
- Completely removed Semester 4 integration, deleted `sem4index.html`, and cleaned all remaining legacy links across headers, footers, and scripts.
- Removed Semester 4 avatar dialog configurations from `assets/js/branding.js`.

---

## [2.0.0] - 2026-11-05

### Added
- Standardized 3-column global footer with DBATU identity, quick navigation, and social profile buttons.
- Centralized social links configuration in `assets/js/branding.js` (`PREPHUB_SOCIAL_CONFIG`) with SVG icons (Email, Instagram, GitHub, LinkedIn).
- Redesigned "Behind Preparation Hub & The Creator" section (`#about`) on `index.html` with credential badges, core technologies line, purpose grid, and closing signature statement.
- Added short creator bio and "Connect with Me" icon bar in the About section.

### Changed
- Refined responsive behavior across mobile viewports (320px–430px), ensuring zero horizontal overflow and fluid card scaling.
- Standardized `dbms.html` layout and responsive structure.

---

## [1.5.0] - 2026-11-05

### Added
- Distinct avatar image and dialogue pose assigned per subject page:
  - Homepage: `avatar-home.png`
  - Machine Learning: `avatar-thinking.png`
  - Theory of Computation: `avatar-explore.png`
  - Operating Systems: `avatar-motivation.png`
  - DBMS: `avatar-about.png`
- Auto-dismissal timer for the homepage centered welcome modal (3 seconds) with user-interaction cancellation safeguards.

### Changed
- Restored compact corner avatar launcher on all subject pages while preserving the centered popup modal on the homepage.
- Resolved duplicate avatar rendering bugs by enforcing a single root assistant container (`#prephub-assistant`).

---

## [1.2.0] - 2026-11-05

### Added
- Integrated animated avatar student guide system (`assets/js/branding.js`, `assets/css/branding.css`).
- Added responsive stylesheet (`assets/css/responsive.css`).
- Created unified site footer across all subject pages.

---

## [1.1.0] - 2026-11-05

### Added
- Operating Systems question bank (`os.html`) featuring 93 unique questions across 5 units with frequency ratings and numerical filters.
- Theory of Computation question bank (`toc.html`) featuring 77 unique questions with unit filtering and frequency analysis.
- Placeholder pages for Wireless Communication (`wc.html`) and Computer Graphics (`cg.html`).
- Cross-subject sticky navigation bar across all question bank pages.

---

## [1.0.0] - 2026-11-04

### Added
- Initial release of **CSE-Sem5-PrepHub**.
- Semester 5 portal dashboard (`index.html`) with subject cards.
- Machine Learning question bank (`ml.html`) and source database (`ml_pyq_database.json`).
- Client-side progress tracking with `localStorage`.
- Dark and Light theme toggle functionality.
