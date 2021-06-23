import Validator from '@hckrnews/validator';
import errorSchema from './schemas/error';

const validator = new Validator(errorSchema);

export default (error = Error) =>
    class AppError extends error {
        constructor({ value = null, type = null, message }) {
            super(message);

            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, AppError);
            }

            this.setValues({ value, type });
        }

        get name() {
            return 'AppError';
        }

        get errorStatus() {
            return 500;
        }

        get status() {
            return this.hasErrors ? 500 : this.errorStatus;
        }

        setValues({ value, type }) {
            this.value = value;
            this.type = type;
            this.date = new Date();

            if (!this.validate()) {
                this.type = Error;
                this.message = 'Invalid error';
                this.value = { errors: validator.errors, values: this.values };
            }
        }

        get hasErrors() {
            return validator.errors.length > 0;
        }

        get values() {
            return {
                name: this.name,
                message: this.message,
                value: this.value,
                status: this.errorStatus,
                type: this.type,
                date: this.date,
            };
        }

        validate() {
            return validator.validate(this.values);
        }
    };
