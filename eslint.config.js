import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import svelteParser from 'svelte-eslint-parser';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommendedTypeChecked,
	ts.configs.stylisticTypeChecked,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		name: 'general',
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off',
			// Annoying during development, duplicated by ts(6133) which is of type 'note'
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		name: 'typed-linting',
		files: ['src/**/*.ts', 'src/**/*.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		name: 'disable-config-typed-linting',
		files: ['*.config.js', '*.config.ts'],
		extends: [ts.configs.disableTypeChecked],
	},
	{
		name: 'svelte',
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig,
			},
		},
	},
	{
		name: 'better-tailwindcss',
		plugins: {
			'better-tailwindcss': eslintPluginBetterTailwindcss,
		},
		rules: {
			// enable all recommended rules to report a warning
			...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
			// broken https://github.com/schoero/eslint-plugin-better-tailwindcss/issues/237
			'better-tailwindcss/enforce-consistent-line-wrapping': 'off'
		},
		settings: {
			'better-tailwindcss': {
				entryPoint: 'src/app.css',
			},
		},
	},
);
