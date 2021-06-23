import makeAppError from './app-error';

const AppError = makeAppError(TypeError);

class ValidationError extends AppError {
    get name() {
        return 'ValidationError';
    }

    get errorStatus() {
        return 400;
    }
}

export default ValidationError;
