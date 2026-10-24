export default {
  'package.json': JSON.stringify({
    name: 'publint-unpublishable-protocol-workspace',
    version: '0.0.1',
    private: true,
    type: 'module',
    sideEffects: false,
    exports: './index.js',
    dependencies: {
      '@test/dep': 'workspace:*',
    },
  }),
  'index.js': 'export {}',
}
