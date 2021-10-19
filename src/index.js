import makeAppError from './app-error.js';
import AuthenticationError from './authentication-error.js';
import NotFoundError from './not-found-error.js';
import NotImplementedError from './not-implemented-error.js';
import ServerError from './server-error.js';
import TimeoutError from './timeout-error.js';
import ValidationError from './validation-error.js';

const AppError = makeAppError();

export default Object.freeze({
    makeAppError,
    AppError,
    AuthenticationError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    TimeoutError,
    ValidationError,
});

export {
    makeAppError,
    AppError,
    AuthenticationError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    TimeoutError,
    ValidationError,
};
