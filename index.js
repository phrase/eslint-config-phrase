module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "rules": {
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": "Use {} instead",
                    "String": {
                        "message": "Use string instead",
                        "fixWith": "string"
                    },
                    "object": {
                        "message": "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)). Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys."
                    }
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "typeLike",
                "format": [
                    "PascalCase"
                ]
            }
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
        ],
        "no-prototype-builtins": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    }
};
