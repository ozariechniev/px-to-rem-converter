import { fixupPluginRules } from '@eslint/compat';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

const wrapPluginsForEslint10 = (configs) =>
  configs.map((block) => {
    if (!block.plugins) return block;
    const wrapped = { ...block.plugins };
    if (block.plugins.react) wrapped.react = fixupPluginRules(block.plugins.react);
    if (block.plugins['react-hooks'])
      wrapped['react-hooks'] = fixupPluginRules(block.plugins['react-hooks']);
    if (block.plugins['jsx-a11y']) wrapped['jsx-a11y'] = fixupPluginRules(block.plugins['jsx-a11y']);
    return { ...block, plugins: wrapped };
  });

const eslintConfig = defineConfig([
  ...wrapPluginsForEslint10(nextVitals),
  ...nextTs,
  prettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
