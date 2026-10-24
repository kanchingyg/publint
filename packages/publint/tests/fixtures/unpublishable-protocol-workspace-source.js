export default {
  'pnpm-workspace.yaml': 'packages:\n  - "packages/*"\n',
  'package.json': JSON.stringify({
    name: 'publint-unpublishable-protocol-workspace-root',
    private: true,
  }),
  'packages/pkg/package.json': JSON.stringify({
    name: '@test/unpublishable-protocol-workspace-source',
    version: '0.0.1',
    private: true,
    type: 'module',
    sideEffects: false,
    exports: './index.js',
    dependencies: {
      '@test/dep': 'workspace:*',
    },
  }),
  'packages/pkg/index.js': 'export {}',
  'packages/dep/package.json': JSON.stringify({
    name: '@test/dep',
    version: '0.0.1',
    private: true,
  }),
}
