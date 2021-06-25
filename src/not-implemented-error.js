import makeAppError from './app-error.js';

const AppError = makeAppError(RangeError);

class NotImplementedError extends AppError {
    get name() {
        return 'NotImplementedError';
    }

    get errorStatus() {
        return 405;
    }
}

export default NotImplementedError;
