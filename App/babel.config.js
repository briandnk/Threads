module.exports = api => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@services': './src/services',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@local_types': './src/types',
          '@locales': './src/locales',
          '@root': './src/screens/Root',
          '@svg': './src/assets/svg',
          '@image': './src/assets/image',
        },
      },
    ],
    'inline-dotenv',
    'react-native-reanimated/plugin',
    ...(api.env() !== 'development' ? ['transform-remove-console'] : []),
  ],
});
