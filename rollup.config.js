import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: '../../expobook.js',
  output: {
    file: 'dist/bundle.js',
    // format: 'cjs',
  },
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        'flow',
        'react',
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['external-helpers', 'transform-object-rest-spread'],
    }),
  ],
};
