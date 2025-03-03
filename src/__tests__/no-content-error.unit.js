import { describe, it } from 'node:test'
import assert from 'node:assert'
import { NoContentError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('No Content Error test', () => {
  it('It should create a no content error', () => {
    const fetch = async () => ({})
    const error = new NoContentError({
      value: 'test',
      type: fetch,
      message: 'Example text'
    })

    assert.deepEqual(error instanceof NoContentError, true)
    assert.deepEqual(error instanceof RangeError, true)
    assert.deepEqual(error instanceof Error, true)
    assert.deepEqual(error.name, 'NoContentError')
    assert.deepEqual(error.message, 'Example text')
    assert.deepEqual(error.value, 'test')
    assert.deepEqual(error.status, 204)
    assert.deepEqual(error.type, fetch)
    assert.deepEqual(error.date.constructor, Date)
    assert.deepEqual(error.stack.includes('NoContentError: Example text'),
      true
    )
  })

  it('It should handle invalid error values', () => {
    const error = new NoContentError({
      value: 'test',
      type: 'string',
      message: 'Example text'
    })

    assert.deepEqual(error instanceof NoContentError, true)
    assert.deepEqual(error instanceof Error, true)
    assert.deepEqual(error.name, 'NoContentError')
    assert.deepEqual(error.message, 'Invalid error')
    assert.deepEqual(error.value.errors[0][0], 'type?')
    assert.deepEqual(error.value.values.message, 'Invalid error')
    assert.deepEqual(error.value.values.name, 'NoContentError')
    assert.deepEqual(error.value.values.status, 204)
    assert.deepEqual(error.value.values.type, Error)
    assert.deepEqual(error.value.values.value, 'test')
    assert.deepEqual(error.status, 500)
    assert.deepEqual(error.type, Error)
    assert.deepEqual(error.date.constructor, Date)
    assert.deepEqual(error.stack.includes('NoContentError: Invalid error'),
      true
    )
  })
})
