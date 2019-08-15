module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    'transform-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
  ],
};
