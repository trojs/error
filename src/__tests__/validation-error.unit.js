/** global: describe */
import ValidationError from '../validation-error';

describe('Validation Error test', () => {
    it('It should create a validation error', () => {
        const error = new ValidationError({
            value: 'test',
            type: String,
            message: 'Example text',
        });

        expect(error instanceof ValidationError).toEqual(true);
        expect(error instanceof TypeError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('ValidationError');
        expect(error.message).toEqual('Example text');
        expect(error.value).toEqual('test');
        expect(error.status).toEqual(400);
        expect(error.type).toEqual(String);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('ValidationError: Example text')).toEqual(
            true
        );
    });

    it('It should handle invalid error values', () => {
        const error = new ValidationError({
            value: 'test',
            type: 'string',
            message: 'Example text',
        });

        expect(error instanceof ValidationError).toEqual(true);
        expect(error instanceof Error).toEqual(true);
        expect(error.name).toEqual('ValidationError');
        expect(error.message).toEqual('Invalid error');
        expect(error.value.errors[0][0]).toEqual('type?');
        expect(error.value.values.message).toEqual('Invalid error');
        expect(error.value.values.name).toEqual('ValidationError');
        expect(error.value.values.status).toEqual(400);
        expect(error.value.values.type).toEqual(Error);
        expect(error.value.values.value).toEqual('test');
        expect(error.status).toEqual(500);
        expect(error.type).toEqual(Error);
        expect(error.date.constructor).toEqual(Date);
        expect(error.stack.includes('ValidationError: Invalid error')).toEqual(
            true
        );
    });
});
