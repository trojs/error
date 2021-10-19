import { expect, describe, it } from '@jest/globals';
import { AuthenticationError } from '../index.js';

describe('Authentication Error test', () => {
    it('It should create a authentication error', () => {
        const error = new AuthenticationError({
            value: 'test',
            type: String,
            message: 'Example text',
        });

        expect(error instanceof AuthenticationError).toEqual(true);
        expect(error instanceof TypeError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AuthenticationError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(401);
        expect(error.type).toEqual(String);
        expect(error.date.constructor).toEqual(Date);
        expect(
            error.stack.includes('AuthenticationError: Example text')
        ).toEqual(true);
    });

    it('It should handle invalid error values', () => {
        const error = new AuthenticationError({
            value: 'test',
            type: 'string',
            message: 'Example text',
        });

        expect(error instanceof AuthenticationError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('AuthenticationError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('AuthenticationError');
        expect(error.value.values.status).toEqual(401);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(
            error.stack.includes('AuthenticationError: Invalid error')
        ).toEqual(true);
    });
});
