module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      'inline-dotenv',
      // ['module-resolver', {
      //   root: ['./src'],
      //   extensions: [
      //     '.ts',
      //     '.tsx',
      //     '.jsx',
      //     '.js',
      //     '.json',
      //   ],
      //   alias: {
      //     assets: './src/assets',
      //     utils: './src/utils',
      //     components: './src/components',
      //     modules: './src/modules',
      //     lib: './src/lib',
      //     types: './src/types',
      //     constants: './src/constants',
      //   },
      // }]
    ],
  };
};
