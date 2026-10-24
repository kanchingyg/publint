export default {
  'package.json': JSON.stringify({
    name: 'publint-unpublishable-protocol-jsr',
    version: '0.0.1',
    private: true,
    type: 'module',
    sideEffects: false,
    exports: './index.js',
    optionalDependencies: {
      '@test/optional': 'jsr:@scope/pkg@^1',
    },
  }),
  'index.js': 'export {}',
}
