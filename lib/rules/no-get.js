/**
 * @fileoverview Disallow unnecessary use of get
 * @author Benjamin Carson
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow unnecessary use of get",
            category: "Best Practices",
            recommended: false,
            url: "https://github.com/BenJohnCarson/eslint-plugin-ember-getter/tree/master/docs/rules/no-get.md"
        },
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create: function (context) {
        const illegalIdentifiers = [
            'controller',
            'route'
        ];

        return {
            MemberExpression(node) {
                const isThisExpression = node.object.type === 'ThisExpression',
                    isGetProperty = node.property.name === 'get',
                    isIllegalIdentifier = illegalIdentifiers.includes(node.object.name);

                if (isGetProperty && (isThisExpression || isIllegalIdentifier)) {
                    context.report(node, 'Unnecessary use of get.');
                }
            }
        };
    }
};
