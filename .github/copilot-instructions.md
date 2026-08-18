# Copilot instructions for Saf‑t Accounting docs

## Scope
These instructions apply to the documentation project for Saf‑t Accounting and should be followed for edits in Markdown files, navigation configuration, image handling, and related documentation tasks.

## Writing style
- Write documentation in Bulgarian by default unless the user explicitly asks otherwise.
- Keep the tone professional, clear, and concise.
- Prefer straightforward explanations over long prose.
- Use headings, bullets, and short sections to keep pages readable.
- Preserve the existing structure and terminology used in the project.

## Documentation conventions
- Follow the MkDocs structure already used in the repository.
- Keep page titles and section names consistent with the naming used in the site navigation.
- Prefer short, action-oriented descriptions for UI screens and workflows.
- When referencing files or features, match the real Saf‑t Accounting terminology exactly.
- Use relative links to existing docs pages when useful.

## Image & Screenshot handling
- All images and screenshots must be placed in the folder `docs/img/`.
- Use Markdown syntax for images:

  `![Кратко описание](img/име-на-файла.png)`

- Descriptions should be short and meaningful.
- When adding multiple screenshots, group them under logical section headers.
- Do not use HTML for resizing; MkDocs Material handles scaling automatically.
- When adding a new page with screenshots, check if it should be added to navigation in `mkdocs.yml`.

## Screenshot sections
When the user requests a page containing screenshots:
- Create a new `.md` file inside `docs/`.
- Add a clear title, e.g.:

  `# Екранни снимки от Saf‑t Accounting`

- Organize screenshots into sections, for example:


- Use relative paths (`img/...`) for all images.

## Editing expectations
- Do not rewrite unrelated content just to improve style.
- Prefer small, targeted edits that match the surrounding page.
- Preserve the existing Markdown formatting and heading hierarchy.
- If a page describes a user flow, keep the steps logical and user-centered.
- When adding a new page, also update navigation in `mkdocs.yml` if needed.

## Validation
- For documentation changes, prefer checking the generated site locally with MkDocs.
- After adding new pages or navigation entries, verify that the site builds cleanly and navigation renders correctly.

## Response style for future tasks
- Keep answers short and practical.
- For documentation changes, explain what changed and why.
- For navigation or configuration updates, modify `mkdocs.yml` accordingly.
- For screenshot-related tasks, provide direct Markdown snippets using the project's conventions.
