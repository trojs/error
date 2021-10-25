import makeAppError from './app-error.js';

const AppError = makeAppError(RangeError);

class NoContentError extends AppError {
    get name() {
        return 'NoContentError';
    }

    get errorStatus() {
        return 204;
    }
}

export default NoContentError;
