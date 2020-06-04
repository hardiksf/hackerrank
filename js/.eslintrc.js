'use strict';
module.exports = {
    env: {
        es6: true,
    },
    rules: {
        // strict: ['error', 'global'], // use strict mode

        'multiline-comment-style': ['error', 'starred-block'], // bare-block, starred-block are couple options
        'spaced-comment': ['error', 'always'],

        semi: ['error', 'always'],
        'semi-spacing': 'error', // no space before semicolon
        'no-extra-semi': 'error',

        'no-unexpected-multiline': 'error', // no unnecessary line breaks 

        'comma-style': ['error', 'last'],

        'comma-dangle': ['error', 'always-multiline'], // mandatory to add dangling comma only for multiline

        // 'max-len': ['error', {'code': 100}],

        indent: ['error', 4], // 'tab' can be used instead of 4 here. 4 means 4 space separated

        'space-infix-ops': 'error', // space before and after operator

        'brace-style': 'error',
        'space-before-blocks': 'error',

        'keyword-spacing': 'error', // spaces around keywords
        'arrow-spacing': 'error', // spaces around arrow,

        'space-before-function-paren': ['error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            }],

        'newline-per-chained-call': 'error',

        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],

        'comma-spacing': ['error', { 'before': false, 'after': true }],

        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 1 }],

        'prefer-const': ['error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false,
        }],

        'no-const-assign': 'error',

        quotes: ['error', 'single', { 'allowTemplateLiterals': true }],

        'no-new-object': 'error',

        'eol-last': ['error', 'always'], // this rule enforces at least one newline (or absence thereof) at the end of non-empty files.
    },
};
