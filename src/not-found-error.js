import makeAppError from './app-error.js';

const AppError = makeAppError(RangeError);

class NotFoundError extends AppError {
    /**
     * Get the error name
     *
     * @return {string}
     */
    get name() {
        return 'NotFoundError';
    }

    /**
     * Get the error status
     *
     * @return {number}
     */
    get errorStatus() {
        return 404;
    }
}

export default NotFoundError;
