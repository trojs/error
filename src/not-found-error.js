import makeAppError from './app-error';

const AppError = makeAppError(RangeError);

class NotFoundError extends AppError {
    get name() {
        return 'NotFoundError';
    }

    get errorStatus() {
        return 404;
    }
}

export default NotFoundError;
