import makeAppError from './app-error.js';

const AppError = makeAppError();

class TimeoutError extends AppError {
    get name() {
        return 'TimeoutError';
    }

    get errorStatus() {
        return 418;
    }
}

export default TimeoutError;
