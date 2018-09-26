# Disallow unnecessary use of get (no-get)

In ember 3.1, ES5 getters for computed properties on object prototypes were installed. This eliminates (in most cases) the need to use `this.get()`.


## Rule Details

Highlight unnecessary uses of `this.get()`.

Examples of **incorrect** code for this rule:

```js

this.get('foo');
controller.get('bar');
route.get('baz'):

```

Examples of **correct** code for this rule:

```js

this.foo
controller.bar
route.baz

```

## When Not To Use It

Any project not using ember 3.1 and above.

## Further Reading

* https://github.com/emberjs/rfcs/blob/master/text/0281-es5-getters.md
* https://www.emberjs.com/blog/2018/04/13/ember-3-1-released.html
