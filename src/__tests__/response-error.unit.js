import { describe, it } from 'node:test'
import assert from 'node:assert'
import { ResponseError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('Response Error test', () => {
    it('It should create a Response error', () => {
        const error = new ResponseError({
            value: 'test',
            type: String,
            message: 'Example text'
        })

        assert.deepEqual(error instanceof ResponseError, true)
        assert.deepEqual(error instanceof TypeError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'ResponseError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, 'test')
        assert.deepEqual(error.status, 400)
        assert.deepEqual(error.type, String)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('ResponseError: Example text'),
            true
        )
    })

    it('It should handle invalid error values', () => {
        const error = new ResponseError({
            value: 'test',
            type: 'string',
            message: 'Example text'
        })

        assert.deepEqual(error instanceof ResponseError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'ResponseError')
        assert.deepEqual(error.message, 'Invalid error')
        assert.deepEqual(error.value.errors[0][0], 'type?')
        assert.deepEqual(error.value.values.message, 'Invalid error')
        assert.deepEqual(error.value.values.name, 'ResponseError')
        assert.deepEqual(error.value.values.status, 400)
        assert.deepEqual(error.value.values.type, Error)
        assert.deepEqual(error.value.values.value, 'test')
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, Error)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('ResponseError: Invalid error'),
            true
        )
    })
})
