# Contributing to PrepHub

Welcome to the **CSE-Sem5-PrepHub** community! PrepHub is a student-led, open-source academic preparation platform designed to help DBATU Computer Science & Engineering students prepare strategically for semester examinations.

Whether you are fixing a typo, adding questions from newly conducted DBATU exams, or refining the styling, your contributions are warmly welcomed!

---

## 🎯 Ways You Can Contribute

1. **Curate University PYQs:** Add official questions from recent DBATU exam sessions.
2. **Data Accuracy & Verification:** Correct typos, refine marks allocations, or verify question repetition counts against official question papers.
3. **UI/UX & Accessibility:** Improve responsive layouts, theme contrast, or accessibility labels.
4. **Documentation:** Enhance guides, tutorials, or study advice.

---

## 📜 Academic Data Contribution Rules

Because students rely on PrepHub for university exam preparation, data accuracy is of paramount importance:

1. **Official Exam Papers Only:** Never submit fabricated or predicted questions as PYQs. Only questions that appeared on official DBATU examination papers are eligible.
2. **Preserve JSON Schemas:** Do not delete or rename schema fields in `data/question-banks/*.json`.
3. **Verify Question Wording:** Ensure technical terms, mathematical expressions, and acronyms match the official exam paper.
4. **Provide Session References:** Always include the exam session (e.g., *Winter 2024*, *Summer 2023 Supplementary*) and course code.

---

## 🛠️ Step-by-Step Contribution Workflow

### 1. Fork the Repository
Click the **Fork** button at the top-right of the GitHub repository page to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/<your-username>/CSE-Sem5-PrepHub.git
cd CSE-Sem5-PrepHub
```

### 3. Create a Feature Branch
Use a concise, descriptive branch name:
```bash
# For a dataset update
git checkout -b data/add-winter-2025-os-pyqs

# For a bug fix
git checkout -b fix/footer-link-alignment
```

### 4. Make Your Changes
- Follow existing code and style conventions.
- Keep JavaScript vanilla and lightweight (do not introduce npm packages, build tools, or frameworks).
- Use relative paths for all assets and internal links.

### 5. Test Locally
Run a local static server to verify that your changes look and work as expected:
```bash
# Using Python
python -m http.server 8000
```
- Verify question card rendering and filters.
- Verify that progress tracking checkboxes function properly.
- Check both Dark and Light themes.
- Confirm there are no errors in the browser developer console.

### 6. Commit and Push
```bash
git add .
git commit -m "feat(os): add 6 questions from Winter 2024 examination"
git push origin <your-branch-name>
```

### 7. Open a Pull Request (PR)
1. Go to your fork on GitHub and click **"Compare & pull request"**.
2. Give your PR a clear title and description explaining what was changed and why.
3. If adding or correcting questions, mention which exam papers were used as the source.
4. Submit the PR for review!

---

## 💡 Code & Design Guidelines

- **Vanilla Web Stack:** PrepHub is deliberately built with static HTML5, CSS3, JavaScript, and JSON. Please do not introduce React, Vue, build tooling (Vite/Webpack), or server-side runtimes.
- **Lowercase File Naming:** Use kebab-case for datasets (`<subject>-pyq-database.json`) and documentation (`<topic>.md`).
- **Be Respectful:** All contributors are expected to uphold a welcoming, respectful, and supportive community environment.

Thank you for helping fellow engineering students prepare smarter! 🚀
