import makeAppError from './app-error.js';

const AppError = makeAppError(TypeError);

class AuthenticationError extends AppError {
    get name() {
        return 'AuthenticationError';
    }

    get errorStatus() {
        return 401;
    }
}

export default AuthenticationError;
