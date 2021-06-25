import makeAppError from './app-error.js';

const AppError = makeAppError();

class ServerError extends AppError {
    get name() {
        return 'ServerError';
    }

    get errorStatus() {
        return 500;
    }
}

export default ServerError;
