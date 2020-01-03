module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        "@typescript-eslint/consistent-type-assertions": 'off',
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": "Use {} instead",
                    "String": {
                        "message": "Use string instead",
                        "fixWith": "string"
                    }
                }
            }
        ],
        "@typescript-eslint/class-name-casing": [
            "error"
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": [
            "error"
        ],
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": true,
                "classes": false
            }
        ],
        "@typescript-eslint/no-var-requires": "warn",
        "semi": "off",
        "@typescript-eslint/semi": [
            "error"
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ]
    }
};
