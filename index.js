module.exports = {

    globals: {
        MyGlobal: true
    },

    rules: {
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