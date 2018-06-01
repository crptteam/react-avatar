module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    "plugins": [
      "transform-class-properties",
      "transform-es2015-destructuring",
      "transform-object-rest-spread",
      "transform-inline-environment-variables",
      "transform-es2015-modules-commonjs",
      [
        "styled-components",
        {
          "ssr": false,
          "minify": false,
          "displayName": true,
          "preprocess": false,
          "transpileTemplateLiterals": false
        }
      ],
      "inline-react-svg"
    ]
  }
}
