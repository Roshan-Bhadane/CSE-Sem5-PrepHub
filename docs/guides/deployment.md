# Deployment & Hosting Guide

This guide covers local development, testing, and deployment of **CSE-Sem5-PrepHub** to **GitHub Pages** or any standard static web server.

---

## 1. Local Development Setup

Because PrepHub is a static client-side project without build steps, local development is straightforward:

### Option A: VS Code Live Server (Recommended)
1. Open the repository root in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html`.

### Option B: Python Simple HTTP Server
If Python is installed on your workstation, navigate to the project directory in your terminal and execute:

```bash
# Python 3
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option C: Node.js `serve` / `http-server`
```bash
npx serve .
# or
npx http-server -p 8080 .
```

> [!NOTE]
> Running the project via a local HTTP server ensures proper origin resolution and prevents browser CORS restrictions when fetching JSON datasets via JavaScript.

---

## 2. GitHub Pages Deployment

PrepHub is pre-configured to deploy effortlessly to **GitHub Pages** from the `main` branch.

### Step-by-Step Configuration:
1. Navigate to your repository on GitHub (`https://github.com/Roshan-Bhadane/CSE-Sem5-PrepHub`).
2. Click the **Settings** tab near the top right.
3. In the left navigation menu, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main`.
   - **Folder:** Select `/ (root)`.
5. Click **Save**.
6. GitHub Pages will build and publish your site in approximately 1–2 minutes.
7. Your live site will be accessible at:
   ```text
   https://roshan-bhadane.github.io/CSE-Sem5-PrepHub/
   ```

---

## 3. Relative Asset Paths & Repository Portability

All internal links and asset references use **root-relative paths** (e.g., `assets/css/branding.css`, `assets/avatars/avatar-home.png`, `ml.html`).

- **Why this matters:** When hosting on GitHub Pages under a subpath like `/CSE-Sem5-PrepHub/`, absolute paths starting with `/` (e.g., `/assets/css/branding.css`) would incorrectly resolve to `https://roshan-bhadane.github.io/assets/...` (resulting in 404 errors).
- Relative paths ensure that the site functions flawlessly both on custom domains (e.g., `prephub.org`) and GitHub subpath URLs (`roshan-bhadane.github.io/CSE-Sem5-PrepHub/`).

---

## 4. Publishing Changes

To publish updates to the live website:

```bash
# 1. Stage modified files
git add .

# 2. Commit changes with a descriptive message
git commit -m "Update question bank and refine responsive layouts"

# 3. Push to main branch
git push origin main
```
GitHub Pages will automatically trigger a new deployment upon receiving the push.

---

## 5. Troubleshooting Common Issues

### Issue 1: Styles or Avatars Not Loading on GitHub Pages
- **Cause:** Using leading slashes in asset paths (e.g. `/assets/...` instead of `assets/...`).
- **Fix:** Keep all asset references relative to the root HTML document (`assets/css/...`, `assets/avatars/...`).

### Issue 2: 404 on Subject Links
- **Cause:** File casing mismatch. Linux-based GitHub Pages servers are strictly case-sensitive.
- **Fix:** Ensure HTML page names in `href` attributes match the exact file casing on disk (`ml.html`, `toc.html`, `os.html`, `dbms.html`, `wc.html`, `cg.html`).

### Issue 3: Broken Bookmarks for DBMS
- **Fix:** Both `dbms.html` and `DBMS_QuestionBank_DBATU.html` are maintained at the repository root to guarantee backward compatibility for any existing academic links.
