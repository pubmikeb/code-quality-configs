import {
    defineConfig,
    globalIgnores,
} from "eslint/config";
import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import {rules as rulesCSS} from "./rules/eslint.rules.css.mjs";
import {rules as rulesHTML} from "./rules/eslint.rules.html.mjs";
import {rules as rulesJS} from "./rules/eslint.rules.js.mjs";
import {rules as rulesJSON} from "./rules/eslint.rules.json.mjs";
import {rules as rulesMD} from "./rules/eslint.rules.md.mjs";
import {rules as rulesTS} from "./rules/eslint.rules.ts.mjs";
import ts from "typescript-eslint";

const linterOptions = {
    reportUnusedDisableDirectives: "error",
    reportUnusedInlineConfigs: "error",
};

const linterConfig = (files,
                      language,
                      languageOptions,
                      plugins,
                      rules) => ({
    files,
    ...(language && {language}),
    ...(languageOptions && {languageOptions}),
    linterOptions,
    name: `Linter: ${language || "js/ts"}`,
    ...(plugins && {plugins}),
    rules,
});

export default defineConfig([globalIgnores(["build/**",
                                            "dist/**",
                                            "package-*.json",
                                            "*.min.*"]),
                             linterConfig(["**/*.css"],
                                          "css/css",
                                          null,
                                          {css},
                                          rulesCSS),
                             linterConfig(["**/*.{hbs,html}"],
                                          "html/html",
                                          null,
                                          {html},
                                          rulesHTML),
                             linterConfig(["**/*.{js,jsx,mjs}"],
                                          null,
                                          null,
                                          null,
                                          rulesJS),
                             linterConfig(["**/*.json"],
                                          "json/json",
                                          null,
                                          {json},
                                          rulesJSON),
                             linterConfig(["**/*.json5"],
                                          "json/json5",
                                          null,
                                          {json},
                                          rulesJSON),
                             linterConfig(["**/*.jsonc"],
                                          "json/jsonc",
                                          null,
                                          {json},
                                          rulesJSON),
                             linterConfig(["**/*.md"],
                                          "markdown/gfm",
                                          null,
                                          {markdown},
                                          rulesMD),
                             linterConfig(["**/*.{ts,tsx,mts}"],
                                          null,
                                          {
                                              parser: ts.parser,
                                              parserOptions: {
                                                  ecmaFeatures: {
                                                      jsx: true,
                                                  },
                                                  projectService: true,
                                                  sourceType: "module",
                                              },
                                          },
                                          {ts: ts.plugin},
                                          rulesTS)]);
