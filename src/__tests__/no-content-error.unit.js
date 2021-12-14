import { expect, describe, it } from '@jest/globals';
import { NoContentError } from '../index.js';

describe('No Content Error test', () => {
    it('It should create a no content error', () => {
        const fetch = async () => ({});
        const error = new NoContentError({
            value: 'test',
            type: fetch,
            message: 'Example text',
        });

        expect(error instanceof NoContentError).toEqual(true);
        expect(error instanceof RangeError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('NoContentError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(204);
        expect(error.type).toEqual(fetch);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('NoContentError: Example text')).toEqual(
            true
        );
    });

    it('It should handle invalid error values', () => {
        const error = new NoContentError({
            value: 'test',
            type: 'string',
            message: 'Example text',
        });

        expect(error instanceof NoContentError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('NoContentError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('NoContentError');
        expect(error.value.values.status).toEqual(204);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('NoContentError: Invalid error')).toEqual(
            true
        );
    });
});
