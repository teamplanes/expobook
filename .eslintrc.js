module.exports = {
  extends: 'airbnb',
  plugins: [
    'react-native',
  ],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'react/jsx-filename-extension': false,
  },
  settings: {
    'import/core-modules': [
      'react-native',
    ],
  },
};
