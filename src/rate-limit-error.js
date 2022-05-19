import makeAppError from './app-error.js';

const AppError = makeAppError(TypeError);

class RateLimitError extends AppError {
    /**
     * Get the error name
     *
     * @return {string}
     */
    get name() {
        return 'RateLimitError';
    }

    /**
     * Get the error status
     *
     * @return {number}
     */
    get errorStatus() {
        return 429;
    }
}

export default RateLimitError;
