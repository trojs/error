import { expect, describe, it } from '@jest/globals';
import { RateLimitError } from '../index.js';

describe('Rate limit Error test', () => {
    it('It should create a rate limit error', () => {
        const error = new RateLimitError({
            value: 'test',
            type: String,
            message: 'Example text',
        });

        expect(error instanceof RateLimitError).toEqual(true);
        expect(error instanceof TypeError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('RateLimitError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(429);
        expect(error.type).toEqual(String);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('RateLimitError: Example text')).toEqual(
            true
        );
    });

    it('It should handle invalid error values', () => {
        const error = new RateLimitError({
            value: 'test',
            type: 'string',
            message: 'Example text',
        });

        expect(error instanceof RateLimitError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('RateLimitError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('RateLimitError');
        expect(error.value.values.status).toEqual(429);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('RateLimitError: Invalid error')).toEqual(
            true
        );
    });
});
