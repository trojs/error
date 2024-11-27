import { describe, it } from 'node:test'
import assert from 'node:assert'
import { AppError } from '../index.js'

/* eslint-disable sonarjs/no-duplicate-string */

describe('App Error test', () => {
    it('It should create an app error with minimum fields', () => {
        const error = new AppError({
            message: 'Example text'
        })

        assert.deepEqual(error instanceof AppError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'AppError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, null)
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, null)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('AppError: Example text'), true)
        assert.deepEqual(error.me, null)
    })

    it('It should create an app error with null on optional fields', () => {
        const error = new AppError({
            value: null,
            type: null,
            message: 'Example text',
            me: null
        })

        assert.deepEqual(error instanceof AppError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'AppError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, null)
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, null)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('AppError: Example text'), true)
        assert.deepEqual(error.me, null)
    })

    it('It should create an app error with undefined on optional fields', () => {
        const error = new AppError({
            value: undefined,
            type: undefined,
            message: 'Example text',
            me: undefined
        })

        assert.deepEqual(error instanceof AppError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'AppError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, null)
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, null)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('AppError: Example text'), true)
        assert.deepEqual(error.me, null)
    })

    it('It should create an app error', () => {
        const error = new AppError({
            value: 'test',
            type: String,
            message: 'Example text',
            me: AppError
        })

        assert.deepEqual(error instanceof AppError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'AppError')
        assert.deepEqual(error.message, 'Example text')
        assert.deepEqual(error.value, 'test')
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, String)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('AppError: Example text'), true)
        assert.deepEqual(error.me, AppError)
    })

    it('It should handle invalid error values', () => {
        const error = new AppError({
            value: 'test',
            type: 'string',
            message: 'Example text',
            me: AppError
        })

        assert.deepEqual(error instanceof AppError, true)
        assert.deepEqual(error instanceof Error, true)
        assert.deepEqual(error.name, 'AppError')
        assert.deepEqual(error.message, 'Invalid error')
        assert.deepEqual(error.value.errors[0][0], 'type?')
        assert.deepEqual(error.value.values.message, 'Invalid error')
        assert.deepEqual(error.value.values.name, 'AppError')
        assert.deepEqual(error.value.values.status, 500)
        assert.deepEqual(error.value.values.type, Error)
        assert.deepEqual(error.value.values.value, 'test')
        assert.deepEqual(error.status, 500)
        assert.deepEqual(error.type, Error)
        assert.deepEqual(error.date.constructor, Date)
        assert.deepEqual(error.stack.includes('AppError: Invalid error'), true)
        assert.deepEqual(error.me, AppError)
    })

    it('It should catch the error from the stack', () => {
        const DoTwo = () => {
            throw new AppError({
                value: 'test',
                type: String,
                message: 'Example from two',
                me: AppError
            })
        }

        const DoOne = () => {
            try {
                DoTwo()
            } catch {

                throw new AppError({
                    value: 'test',
                    type: String,
                    message: 'Example from one',
                    me: AppError
                })
            }
        }

        try {
            DoOne()
        } catch (error) {
            assert.deepEqual(error instanceof AppError, true)
            assert.deepEqual(error instanceof Error, true)
            assert.deepEqual(error.name, 'AppError')
            assert.deepEqual(error.message, 'Example from one')
            assert.deepEqual(error.value, 'test')
            assert.deepEqual(error.status, 500)
            assert.deepEqual(error.type, String)
            assert.deepEqual(error.date.constructor, Date)
            assert.deepEqual(error.stack.includes('AppError: Example from one'),
                true
            )
            assert.deepEqual(error.me, AppError)
        }
    })

    it('It should catch the error from the sub stack', () => {
        const DoFour = () => {
            throw new AppError({
                value: 'test',
                type: String,
                message: 'Example from four',
                me: AppError
            })
        }

        const DoThree = () => {
            DoFour()
        }

        try {
            DoThree()
        } catch (error) {
            assert.deepEqual(error instanceof AppError, true)
            assert.deepEqual(error instanceof Error, true)
            assert.deepEqual(error.name, 'AppError')
            assert.deepEqual(error.message, 'Example from four')
            assert.deepEqual(error.value, 'test')
            assert.deepEqual(error.status, 500)
            assert.deepEqual(error.type, String)
            assert.deepEqual(error.date.constructor, Date)
            assert.deepEqual(error.stack.includes('AppError: Example from four'),
                true
            )
            assert.deepEqual(error.me, AppError)
        }
    })
})
