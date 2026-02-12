# Code Quality Configs

A set of ESLint, EditorConfig, and Prettier configurations for various programming languages and formats.

## Features

This project provides pre-configured ESLint rules for the following file types:

- CSS
- HTML / HBS
- JavaScript / TypeScript
- JSON / JSON5 / JSONC
- Markdown

The EditorConfig contains settings for:

- CSS
- HTML / HBS
- Java / Kotlin
- JavaScript / TypeScript
- JSON / JSON5 / JSONC
- Markdown
- XML / XSD
- YAML

And some others.

The EditorConfig settings prefixed with `ij_*` dedicated mainly to the JetBrains IDEs family.

## Requirements

- Node.js >= 25.6.0
- npm >= 11.9.0

## Installation

```bash
npm install
```

## Usage

### Format files

Run Prettier on project files in preview mode:

```bash
npm run format:check
```

### Fix formatting issues

Automatically fix fixable formatting issues:

```bash
npm run format:fix
```

### Lint files

Run ESLint on project files in preview mode:

```bash
npm run lint:check
```

### Lint files with caching

For faster later runs, use caching:

```bash
npm run lint:check:cache
```

### Fix linting issues

Automatically fix fixable linting issues:

```bash
npm run lint:fix
```

### Type checking

Run TypeScript type checking without emitting files:

```bash
npm run typecheck
```

## Project Structure

```bash
code-quality-configs/
├── linters/
│   ├── eslint.config.mjs          # ESLint configuration
│   └── rules/
│       ├── eslint.rules.css.mjs   # CSS-specific rules
│       ├── eslint.rules.html.mjs  # HTML-specific rules
│       ├── eslint.rules.js.mjs    # JavaScript-specific rules
│       ├── eslint.rules.json.mjs  # JSON-specific rules
│       ├── eslint.rules.md.mjs    # Markdown-specific rules
│       └── eslint.rules.ts.mjs    # TypeScript-specific rules
├── .editorconfig                  # EditorConfig configuration
├── package.json                   # Package manifest
└── prettier.config.mjs            # Prettier configuration
```

## Dependencies

| Package                                                                     | Description                   |
|-----------------------------------------------------------------------------|-------------------------------|
| [@eslint/css](https://github.com/eslint/css)                                | CSS linting                   |
| [@eslint/json](https://github.com/eslint/json)                              | JSON linting                  |
| [@eslint/markdown](https://github.com/eslint/markdown)                      | Markdown linting              |
| [@html-eslint/eslint-plugin](https://github.com/yeonjuan/html-eslint)       | HTML linting                  |
| [@html-eslint/parser](https://github.com/yeonjuan/html-eslint)              | HTML parser                   |
| [eslint](https://github.com/eslint/eslint)                                  | Code linting engine           |
| [prettier](https://github.com/prettier/prettier)                            | Code formatting engine        |
| [typescript](https://github.com/microsoft/TypeScript)                       | TypeScript engine             |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) | TypeScript support for ESLint |

## Usage in Other Projects

To use these configurations in another project:

1. Copy the `linters` folder, `.editorconfig`, and `prettier.config.mjs` to the root directory of the target project.
2. Add and install the required dependencies.
3. Configure the IDE if required.

## License

MIT

## Author

[Mike B.](https://github.com/pubmikeb)

## Contributing

[Issues](https://github.com/pubmikeb/code-quality-configs/issues), [pull requests](https://github.com/pubmikeb/code-quality-configs/pulls), and [general feedback](https://github.com/pubmikeb/code-quality-configs/discussions) are welcome.
