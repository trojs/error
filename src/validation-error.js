import makeAppError from './app-error.js';

const AppError = makeAppError(TypeError);

class ValidationError extends AppError {
    /**
     * Get the error name
     *
     * @return {string}
     */
    get name() {
        return 'ValidationError';
    }

    /**
     * Get the error status
     *
     * @return {number}
     */
    get errorStatus() {
        return 400;
    }
}

export default ValidationError;
