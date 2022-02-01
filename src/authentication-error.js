import makeAppError from './app-error.js';

const AppError = makeAppError(TypeError);

class AuthenticationError extends AppError {
    /**
     * Get the error name
     *
     * @return {string}
     */
    get name() {
        return 'AuthenticationError';
    }

    /**
     * Get the error status
     *
     * @return {number}
     */
    get errorStatus() {
        return 401;
    }
}

export default AuthenticationError;
