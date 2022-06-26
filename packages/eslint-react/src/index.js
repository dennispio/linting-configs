module.exports = {
  root: true,
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    'react': {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'react/boolean-prop-naming': [
      2,
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: 'Functions that return a boolean need to start with is or has.'
      }
    ],
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/react-in-jsx-scope': 'off'
  }
}
