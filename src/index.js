import makeAppError from './app-error.js';
import AuthenticationError from './authentication-error.js';
import NoContentError from './no-content-error.js';
import NotFoundError from './not-found-error.js';
import NotImplementedError from './not-implemented-error.js';
import ServerError from './server-error.js';
import TimeoutError from './timeout-error.js';
import ValidationError from './validation-error.js';
import RateLimitError from './rate-limit-error.js';

const AppError = makeAppError();

export default Object.freeze({
    makeAppError,
    AppError,
    AuthenticationError,
    NoContentError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    TimeoutError,
    ValidationError,
    RateLimitError,
});

export {
    makeAppError,
    AppError,
    AuthenticationError,
    NoContentError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    TimeoutError,
    ValidationError,
    RateLimitError,
};
