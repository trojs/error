import { describe, it } from 'node:test'
import assert from 'node:assert'
import { NotFoundError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('Not Found Error test', () => {
  it('It should create a not found error', () => {
    const error = new NotFoundError({
      value: 'test',
      type: String,
      message: 'Example text'
    })

    assert.deepEqual(error instanceof NotFoundError, true)
    assert.deepEqual(error instanceof RangeError, true)
    assert.deepEqual(error instanceof Error, true)
    assert.deepEqual(error.name, 'NotFoundError')
    assert.deepEqual(error.message, 'Example text')
    assert.deepEqual(error.value, 'test')
    assert.deepEqual(error.status, 404)
    assert.deepEqual(error.type, String)
    assert.deepEqual(error.date.constructor, Date)
    assert.deepEqual(error.stack.includes('NotFoundError: Example text'),
      true
    )
  })

  it('It should handle invalid error values', () => {
    const error = new NotFoundError({
      value: 'test',
      type: 'string',
      message: 'Example text'
    })

    assert.deepEqual(error instanceof NotFoundError, true)
    assert.deepEqual(error instanceof Error, true)
    assert.deepEqual(error.name, 'NotFoundError')
    assert.deepEqual(error.message, 'Invalid error')
    assert.deepEqual(error.value.errors[0][0], 'type?')
    assert.deepEqual(error.value.values.message, 'Invalid error')
    assert.deepEqual(error.value.values.name, 'NotFoundError')
    assert.deepEqual(error.value.values.status, 404)
    assert.deepEqual(error.value.values.type, Error)
    assert.deepEqual(error.value.values.value, 'test')
    assert.deepEqual(error.status, 500)
    assert.deepEqual(error.type, Error)
    assert.deepEqual(error.date.constructor, Date)
    assert.deepEqual(error.stack.includes('NotFoundError: Invalid error'),
      true
    )
  })
})
