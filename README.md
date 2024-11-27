# @trojs/error

[![NPM version][npm-image]][npm-url]

With this package you can throw a custom error with more details.
The object extends an Error object.

Types:

 * AppError
 * AuthenticationError
 * AccessError
 * NoContent
 * NotFoundError
 * NotImplementedError
 * ServerError
 * TimeoutError
 * ValidationError
 * RateLimitError

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

`npm install @trojs/error`
or
`yarn add @trojs/error`

Example usage:

```javascript
import { NotFoundError } from '@trojs/error'

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

[npm-url]: https://www.npmjs.com/package/@trojs/error
[npm-image]: https://img.shields.io/npm/v/@trojs/error.svg
