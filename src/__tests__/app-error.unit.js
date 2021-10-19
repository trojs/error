import { expect, describe, it } from '@jest/globals';
import { AppError } from '../index.js';

describe('App Error test', () => {
    it('It should create a app error with minimum fields', () => {
        const error = new AppError({
            message: 'Example text',
        });

        expect(error instanceof AppError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AppError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual(null);
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(null);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('AppError: Example text')).toEqual(true);
        expect(error.me).toEqual(null);
    });

    it('It should create a app error with null on optional fields', () => {
        const error = new AppError({
            value: null,
            type: null,
            message: 'Example text',
            me: null,
        });

        expect(error instanceof AppError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AppError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual(null);
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(null);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('AppError: Example text')).toEqual(true);
        expect(error.me).toEqual(null);
    });

    it('It should create a app error with undefined on optional fields', () => {
        const error = new AppError({
            value: undefined,
            type: undefined,
            message: 'Example text',
            me: undefined,
        });

        expect(error instanceof AppError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AppError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual(null);
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(null);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('AppError: Example text')).toEqual(true);
        expect(error.me).toEqual(null);
    });

    it('It should create a app error', () => {
        const error = new AppError({
            value: 'test',
            type: String,
            message: 'Example text',
            me: AppError,
        });

        expect(error instanceof AppError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AppError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(String);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('AppError: Example text')).toEqual(true);
        expect(error.me).toEqual(AppError);
    });

    it('It should handle invalid error values', () => {
        const error = new AppError({
            value: 'test',
            type: 'string',
            message: 'Example text',
            me: AppError,
        });

        expect(error instanceof AppError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AppError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('AppError');
        expect(error.value.values.status).toEqual(500);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('AppError: Invalid error')).toEqual(true);
        expect(error.me).toEqual(AppError);
    });
});
