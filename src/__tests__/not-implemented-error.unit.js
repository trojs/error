/** global: describe */
import { NotImplementedError } from '../index.js';

describe('Not Implemented Error test', () => {
    it('It should create a not implemented error', () => {
        const error = new NotImplementedError({
            value: 'test',
            type: String,
            message: 'Example text',
        });

        expect(error instanceof NotImplementedError).toEqual(true);
        expect(error instanceof RangeError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('NotImplementedError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(405);
        expect(error.type).toEqual(String);
        expect(error.date.constructor).toEqual(Date);
        expect(
            error.stack.includes('NotImplementedError: Example text')
        ).toEqual(true);
    });

    it('It should handle invalid error values', () => {
        const error = new NotImplementedError({
            value: 'test',
            type: 'string',
            message: 'Example text',
        });

        expect(error instanceof NotImplementedError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('NotImplementedError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('NotImplementedError');
        expect(error.value.values.status).toEqual(405);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(
            error.stack.includes('NotImplementedError: Invalid error')
        ).toEqual(true);
    });
});
