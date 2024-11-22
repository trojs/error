import { expect, describe, it } from '@jest/globals'
import { NotFoundError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('Not Found Error test', () => {
    it('It should create a not found error', () => {
        const error = new NotFoundError({
            value: 'test',
            type: String,
            message: 'Example text'
        })

        expect(error instanceof NotFoundError).toEqual(true)
        expect(error instanceof RangeError).toEqual(true)
        expect(error instanceof Error).toEqual(true)
        expect(error.name).toEqual('NotFoundError')
        expect(error.message).toEqual('Example text')
        expect(error.value).toEqual('test')
        expect(error.status).toEqual(404)
        expect(error.type).toEqual(String)
        expect(error.date.constructor).toEqual(Date)
        expect(error.stack.includes('NotFoundError: Example text')).toEqual(
            true
        )
    })

    it('It should handle invalid error values', () => {
        const error = new NotFoundError({
            value: 'test',
            type: 'string',
            message: 'Example text'
        })

        expect(error instanceof NotFoundError).toEqual(true)
        expect(error instanceof Error).toEqual(true)
        expect(error.name).toEqual('NotFoundError')
        expect(error.message).toEqual('Invalid error')
        expect(error.value.errors[0][0]).toEqual('type?')
        expect(error.value.values.message).toEqual('Invalid error')
        expect(error.value.values.name).toEqual('NotFoundError')
        expect(error.value.values.status).toEqual(404)
        expect(error.value.values.type).toEqual(Error)
        expect(error.value.values.value).toEqual('test')
        expect(error.status).toEqual(500)
        expect(error.type).toEqual(Error)
        expect(error.date.constructor).toEqual(Date)
        expect(error.stack.includes('NotFoundError: Invalid error')).toEqual(
            true
        )
    })
})
