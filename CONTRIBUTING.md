# Contributing

Thanks for your interest in contributing to FatMusicOfficial! Here's how to get started.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies:

```bash
cd fat-music-official
npm install
```

4. Start the dev server:

```bash
npm start
```

The app runs at `http://localhost:4200`.

## Development

- **Framework:** Angular 21 with standalone components
- **Styling:** SCSS + Angular Material
- **Tests:** Vitest (`npm test`)
- **Formatting:** Prettier (100 print width, single quotes, 2-space indent)

## Making Changes

1. Create a new branch from `main`:

```bash
git checkout -b feature/your-feature
```

2. Make your changes
3. Run tests to make sure nothing is broken:

```bash
npm test
```

4. Format your code:

```bash
npx prettier --write .
```

5. Commit your changes with a clear, descriptive message
6. Push your branch and open a pull request against `main`

## Pull Requests

- Keep PRs focused on a single change
- Describe what you changed and why
- Make sure tests pass
- Follow the existing code style

## Reporting Bugs

Open a GitHub issue with:

- A clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information

## Code of Conduct

Be respectful and constructive. Harassment or abusive behavior will not be tolerated.
