import { describe, it } from 'node:test'
import assert from 'node:assert'
import { TimeoutError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('Timeout Error test', () => {
    it('It should create a timeout error', () => {
        const error = new TimeoutError({
            value: 'test',
            type: String,
            message: 'Example text'
        })

        assert.deepEqual(error instanceof TimeoutError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'TimeoutError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, 'test')
        assert.deepEqual(error.status, 408)
        assert.deepEqual(error.type, String)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('TimeoutError: Example text'),
            true
        )
    })

    it('It should handle invalid error values', () => {
        const error = new TimeoutError({
            value: 'test',
            type: 'string',
            message: 'Example text'
        })

        assert.deepEqual(error instanceof TimeoutError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'TimeoutError')
        assert.deepEqual(error.message, 'Invalid error')
        assert.deepEqual(error.value.errors[0][0], 'type?')
        assert.deepEqual(error.value.values.message, 'Invalid error')
        assert.deepEqual(error.value.values.name, 'TimeoutError')
        assert.deepEqual(error.value.values.status, 408)
        assert.deepEqual(error.value.values.type, Error)
        assert.deepEqual(error.value.values.value, 'test')
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, Error)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('TimeoutError: Invalid error'),
            true
        )
    })
})
