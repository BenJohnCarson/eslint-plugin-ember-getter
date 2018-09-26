# eslint-plugin-ember-getter

eslint rule to highlight unnecessary use of ember getters (for ember &gt;=3.1)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-getter`:

```
$ npm install eslint-plugin-ember-getter --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ember-getter` globally.

## Usage

Add `ember-getter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ember-getter"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember-getter/no-get": 2
    }
}
```

## Supported Rules

* no-get
