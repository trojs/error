# @hckrnews/error

[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

With this package you can throw a custom error with more details.
The object extends an Error object.

Types:

 * AppError
 * AuthenticationError
 * NotFoundError
 * NotImplementedError
 * ServerError
 * TimeoutError
 * ValidationError

You can send:

 * message (type: String)
 * value (type: mixed)
 * type (String|Array|Object|Number|Boolean|Date|...)
 * me (current method, no validation on the value)

It validate the values by this schema:
```javascript
{
    name: String,
    message: String,
    'value?': 'mixed',
    status: Number,
    'type?': Function,
    date: Date,
};
```

In the catch method, you can use these fields:

 * name (type: String)
 * message (type: String)
 * value (optional, type: mixed)
 * errorStatus (type: Number)
 * status (type: Number, like errorStatus, but it will return 500 if there are validation errors)
 * type (optional, type: Function)
 * date (type: Date, current timestamp)
 * me (type: mixed)
 * values (type: Object, all fields)
 * hasErrors (type: Boolean, returns true if there are validation errors)

Install the package:

`npm install @hckrnews/error`
or
`yarn add @hckrnews/error`

Example usage:

```javascript
import { NotFoundError } from '@hckrnews/error'

class Test {
    /**
     * Throw an error.
     */
    doSomethingWrong () {
        throw new NotFoundError({
            value: 'test',
            type: String,
            message: 'Example text',
            me: this.constructor,
        });
    }

    /**
     * Catch the error.
     */
    run() {
        try {
            this.doSomethingWrong()
        } catch(error) {
            console.error(error.message)
            console.log({ value: error.value })
        }
    }
}

```

[npm-url]: https://www.npmjs.com/package/@hckrnews/error
[npm-image]: https://img.shields.io/npm/v/@hckrnews/error.svg
[build-url]: https://scrutinizer-ci.com/g/hckrnews/error/build-status/main
[build-image]: https://scrutinizer-ci.com/g/hckrnews/error/badges/build.png?b=main
[coveralls-url]: https://coveralls.io/r/hckrnews/error
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/error/master.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/error/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/error/badges/quality-score.png?b=main
