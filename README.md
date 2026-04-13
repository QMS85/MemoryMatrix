# MemoryMatrix

# Contributing to MemoryMatrix

Thank you for your interest in contributing to **MemoryMatrix**. This document explains how to report issues, propose changes, and submit code so contributions are easy to review and merge.

---

## Table of contents
- **How to contribute**
- **Pull request checklist**
- **Branching model**
- **Code style guidelines**
- **Reporting issues**
- **Code of conduct**
- **License for contributions**

---

## How to contribute
1. **Fork** the repository and create a branch from `main`.
2. Use a descriptive branch name such as:
   - `feature/add-sound`
   - `fix/timer-bug`
   - `chore/update-deps`
3. Make small, focused commits with clear messages.
4. Push your branch to your fork and open a **Pull Request** against `main`.
5. In your PR description include:
   - What you changed
   - Why you changed it
   - Any steps to test the change

---

## Pull request checklist
Before opening a PR, ensure:
- **Scope**: The PR addresses a single concern.
- **Build**: The project runs locally and `index.html` loads in a browser.
- **Tests**: If applicable, include tests or manual test steps.
- **Code quality**: JavaScript is readable and commented where non-obvious.
- **Styling**: CSS changes follow existing patterns.
- **Files**: No generated or editor-specific files are included.
- **Description**: PR description explains what changed and why.

---

## Branching model
- **main** — production-ready code.
- **feature/** — new features and enhancements.
- **fix/** — bug fixes.
- **chore/** — maintenance tasks and non-functional changes.

**Merge strategy**
- Use **squash and merge** for small, single-purpose PRs.
- Use **merge commits** for larger feature branches where preserving history is helpful.

---

## Code style guidelines
- **JavaScript**: Prefer modern ES6+ syntax. Keep functions small and focused.
- **HTML**: Use semantic elements and meaningful attributes.
- **CSS**: Use clear class names and avoid deep selector specificity.
- **Accessibility**: Ensure interactive elements are keyboard accessible and include ARIA attributes where appropriate.
- **Comments**: Explain non-obvious logic; avoid commented-out dead code.

---

## Reporting issues
When filing an issue, include:
- **Title** summarizing the problem.
- **Steps to reproduce**.
- **Expected behavior** and **actual behavior**.
- **Browser and OS** used for testing.
- Screenshots or short recordings if helpful.

---

## Code of conduct
Be respectful and constructive. Treat maintainers and contributors with courtesy. Harassment, hate speech, or abusive behavior will not be tolerated. Maintain a collaborative tone in discussions and reviews.

---

## License for contributions
By contributing, you agree that your contributions will be licensed under the project’s existing license **MIT**. If you cannot agree to that, please do not submit code.

---
