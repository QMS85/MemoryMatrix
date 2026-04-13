# MemoryMatrix

A lightweight browser memory game built with **HTML**, **CSS**, and **JavaScript**. This README is ready to copy and paste into your repository root as `README.md`.

---

## Project Overview

**MemoryMatrix** is a simple, single-page memory matching game designed for learning and quick customization. The game uses vanilla JavaScript for logic, CSS for styling, and a single HTML entry point. It is ideal for students, educators, and developers who want a compact example of DOM manipulation, game state management, and responsive UI.

**Key goals**
- Provide a clear, minimal codebase for learning front-end fundamentals.
- Be easy to fork, modify, and deploy as a static site.
- Serve as a coding challenge or classroom exercise.

---

## Features

- **Grid based memory matching gameplay**
- **Responsive layout** for desktop and mobile
- **Vanilla JavaScript** with no external runtime dependencies
- **Single file deployable**: `index.html`, `styles.css`, `script.js`
- **Easy to extend**: add sounds, levels, scoring, or animations

---

## Getting Started

### Prerequisites
No build tools are required. A modern web browser is sufficient.

### Clone the repository
```bash
git clone https://github.com/QMS85/MemoryMatrix.git
cd MemoryMatrix
```
bash


### Run locally
Open index.html in your browser. For a better development experience use a local static server or the Live Server extension in Visual Studio Code.

### Development tips
Edit script.js to change game logic.

Edit styles.css to change visuals and layout.

Use the browser DevTools to debug and profile.

Keep assets and logic small and modular for easier testing.

### Contributing and Deployment
#### Contributing
Contributions are welcome. Please follow these simple steps:

Fork the repository.

Create a branch named feature/your-feature or fix/your-fix.

Make focused commits with clear messages.

Open a Pull Request against main with a description of changes and testing steps.

Pull Request checklist

The change addresses a single concern.

The game runs locally and index.html loads.

No editor-specific or generated files are included.

Code is readable and commented where necessary.

See CONTRIBUTING.md for a concise contributor guide.

### Automatic Deployment to GitHub Pages
This project can be published as a static site using GitHub Pages. Two common approaches:

### Option A Publish from main branch root

Ensure index.html is at the repository root.

Push to main.

In the repository Settings go to Pages and set Source to main branch and root.

Visit https://<username>.github.io/MemoryMatrix/ after a few minutes.

### Option B Publish using gh-pages branch with GitHub Actions

Add the GitHub Actions workflow file .github/workflows/deploy-gh-pages.yml (example provided in the repository).

The workflow runs on pushes to main, builds if needed, and publishes the repository root to the gh-pages branch.

In Settings > Pages set Source to gh-pages branch.

### Quick manual gh-pages publish
```
git checkout --orphan gh-pages
git --work-tree . add --all
git --work-tree . commit -m "Deploy to gh-pages"
git push origin gh-pages --force
git checkout main
```

### Credits and License
#### Author  
QMS85 (Jonathan Peters)

### Tooling credit  
#### Development and editing were performed using Visual Studio Code for Education. Visual Studio Code and many of its components are distributed under the MIT License. Visual Studio Code for Education is a student-focused offering built on the Visual Studio Code platform. Please consult Microsoft documentation for the most current licensing details for VS Code and education offerings.

### License
#### Project license  
This project is distributed under the MIT License.

MIT License

Copyright (c) 2026 QMS85

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Note about Visual Studio Code for Education  
The Visual Studio Code source code is available under the MIT License. Some Microsoft-distributed builds and extensions may include additional terms. If you rely on VS Code for Education tooling, consult Microsoft licensing pages for full details.

#### Quick Links
Play locally Open index.html

Contribute See CONTRIBUTING.md

License See LICENSE
