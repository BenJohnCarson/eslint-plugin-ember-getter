/**
 * @fileoverview Disallow unnecessary use of get
 * @author Benjamin Carson
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-get"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ERROR_MSG_NO_GET = "Unnecessary use of get."

var ruleTester = new RuleTester();
ruleTester.run("no-get", rule, {

    valid: [
        {
            code: "this.foo"
        },
        {
            code: "model.get('foo')"
        }
    ],

    invalid: [
        {
            code: "this.get('foo')",
            errors: [{
                message: ERROR_MSG_NO_GET
            }]
        },
        {
            code: "controller.get('foo')",
            errors: [{
                message: ERROR_MSG_NO_GET
            }]
        },
        {
            code: "route.get('foo')",
            errors: [{
                message: ERROR_MSG_NO_GET
            }]
        }
    ]
});
