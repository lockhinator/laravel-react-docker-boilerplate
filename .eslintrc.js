module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        'react-app',
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:sonarjs/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import",
        "testing-library",
        "sonarjs",
        "prettier",
    ],
    "ignorePatterns": [
        "resources/js/app.tsx"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "error",
        // turn of the base eslint rule, or it can return false positives
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "after-used",
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            }
        ],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ],
        "array-callback-return": "error",
        "arrow-body-style": ["error", "as-needed"],
        "curly": "error",
        "dot-notation": "error",
        eqeqeq: "error",
        // we use default exports at the moment for pages so this is off for pages
        // in the case of Components we turn it on. See overrides
        "import/no-default-export": "off",
        "no-alert": "error",
        "no-console": "error",
        "no-continue": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "prefer-arrow-callback": "error",
        "semi": "error",
        // prefer single quotes when able
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ]
    },
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            "flowVersion": "0.53" // Flow version
        }
    },
    "overrides": [
        {
            "files": [ "resources/js/Components/**/*.tsx" ],
            "rules": {
                "import/no-default-export": "error",
            }
        },
        {
            "files": [ '**/*.test.*' ],
            "extends": [ 'plugin:testing-library/react' ],
            "rules": {
                '@typescript-eslint/no-non-null-assertions': 'off',
                'testing-library/prefer-explicit-assert': [
                    'error',
                    { assertion: 'toBeInTheDocument' },
                ],
                'testing-library/prefer-user-event': 'error'
            }
        }
    ]
}
