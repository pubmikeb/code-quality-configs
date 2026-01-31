# Code Quality Configs

A set of ESLint and EditorConfig configurations for various programming languages and formats.

## Features

This project provides pre-configured ESLint rules for the following file types:

- **CSS** (`.css`)
- **HTML** (`.html`, `.hbs`)
- **JavaScript** (`.js`, `.jsx`, `.mjs`)
- **JSON** (`.json`, `.json5`, `.jsonc`)
- **Markdown** (`.md`)
- **TypeScript** (`.ts`, `.tsx`, `.mts`)

The EditorConfig contains settings for:

- **CSS**
- **HTML**
- **HTTP**
- **Java**
- **JavaScript**
- **JSON**
- **Kotlin**
- **Less**
- **Markdown**
- **Properties**
- **Proto**
- **Sass**
- **SCSS**
- **Shell**
- **TypeScript**
- **XML**
- **YAML**

The EditorConfig settings prefixed with `ij_*` dedicated mainly to the JetBrains IDEs family.

## Requirements

- Node.js >= 25.5.0
- npm >= 11.8.0

## Installation

```bash
npm install
```

## Usage

### Lint files

Run ESLint on project files:

```bash
npm run lint
```

### Lint with caching

For faster later runs, use caching:

```bash
npm run lint:cache
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
│   ├── eslint.config.mjs          # Main ESLint configuration
│   └── rules/
│       ├── eslint.rules.css.mjs   # CSS-specific rules
│       ├── eslint.rules.html.mjs  # HTML-specific rules
│       ├── eslint.rules.js.mjs    # JavaScript-specific rules
│       ├── eslint.rules.json.mjs  # JSON-specific rules
│       ├── eslint.rules.md.mjs    # Markdown-specific rules
│       └── eslint.rules.ts.mjs    # TypeScript-specific rules
├── package.json
└── package-lock.json
```

## Dependencies

| Package                                                                     | Description                   |
| --------------------------------------------------------------------------- | ----------------------------- |
| [@eslint/css](https://github.com/eslint/css)                                | CSS linting                   |
| [@eslint/json](https://github.com/eslint/json)                              | JSON/JSON5/JSONC linting      |
| [@eslint/markdown](https://github.com/eslint/markdown)                      | Markdown linting              |
| [@html-eslint/eslint-plugin](https://github.com/yeonjuan/html-eslint)       | HTML linting                  |
| [@html-eslint/parser](https://github.com/yeonjuan/html-eslint)              | HTML parser                   |
| [eslint](https://github.com/eslint/eslint)                                  | Code linting engine           |
| [typescript](https://github.com/microsoft/TypeScript)                       | TypeScript engine             |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) | TypeScript support for ESLint |

## Usage in Other Projects

To use these configurations in another project:

1. Copy the **linters** folder and `.editorconfig` to the root directory of the target project.
2. Add and install the required dependencies.

## License

MIT

## Author

[Mike B.](https://github.com/pubmikeb)

## Contributing

[Issues](https://github.com/pubmikeb/code-quality-configs/issues), [pull requests](https://github.com/pubmikeb/code-quality-configs/pulls), and [general feedback](https://github.com/pubmikeb/code-quality-configs/discussions) are welcome.
