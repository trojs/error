import makeAppError from './app-error';

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
