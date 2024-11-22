import { expect, describe, it } from '@jest/globals'
import { TimeoutError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('Timeout Error test', () => {
    it('It should create a timeout error', () => {
        const error = new TimeoutError({
            value: 'test',
            type: String,
            message: 'Example text'
        })

        expect(error instanceof TimeoutError).toEqual(true)
        expect(error instanceof Error).toEqual(true)
        expect(error.name).toEqual('TimeoutError')
        expect(error.message).toEqual('Example text')
        expect(error.value).toEqual('test')
        expect(error.status).toEqual(408)
        expect(error.type).toEqual(String)
        expect(error.date.constructor).toEqual(Date)
        expect(error.stack.includes('TimeoutError: Example text')).toEqual(
            true
        )
    })

    it('It should handle invalid error values', () => {
        const error = new TimeoutError({
            value: 'test',
            type: 'string',
            message: 'Example text'
        })

        expect(error instanceof TimeoutError).toEqual(true)
        expect(error instanceof Error).toEqual(true)
        expect(error.name).toEqual('TimeoutError')
        expect(error.message).toEqual('Invalid error')
        expect(error.value.errors[0][0]).toEqual('type?')
        expect(error.value.values.message).toEqual('Invalid error')
        expect(error.value.values.name).toEqual('TimeoutError')
        expect(error.value.values.status).toEqual(408)
        expect(error.value.values.type).toEqual(Error)
        expect(error.value.values.value).toEqual('test')
        expect(error.status).toEqual(500)
        expect(error.type).toEqual(Error)
        expect(error.date.constructor).toEqual(Date)
        expect(error.stack.includes('TimeoutError: Invalid error')).toEqual(
            true
        )
    })
})
