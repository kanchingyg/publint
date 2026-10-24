export default {
  'package.json': JSON.stringify({
    name: 'publint-unpublishable-protocol-catalog',
    version: '0.0.1',
    private: true,
    type: 'module',
    sideEffects: false,
    exports: './index.js',
    peerDependencies: {
      '@test/peer': 'catalog:',
    },
  }),
  'index.js': 'export {}',
}
