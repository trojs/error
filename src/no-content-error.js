import makeAppError from './app-error.js';

const AppError = makeAppError(RangeError);

class NoContentError extends AppError {
    /**
     * Get the error name
     *
     * @return {string}
     */
    get name() {
        return 'NoContentError';
    }

    /**
     * Get the error status
     *
     * @return {number}
     */
    get errorStatus() {
        return 204;
    }
}

export default NoContentError;
