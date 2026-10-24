export default {
  'package.json': JSON.stringify({
    name: 'publint-unpublishable-protocol-semver',
    version: '0.0.1',
    private: true,
    type: 'module',
    sideEffects: false,
    exports: './index.js',
    dependencies: {
      '@test/dep': '^1.2.3',
    },
  }),
  'index.js': 'export {}',
}
