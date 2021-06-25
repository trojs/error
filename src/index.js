import makeAppError from './app-error';
import NotFoundError from './not-found-error';
import NotImplementedError from './not-implemented-error';
import ServerError from './server-error';
import ValidationError from './validation-error';

const AppError = makeAppError();

export default Object.freeze({
    makeAppError,
    AppError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    ValidationError,
});

export {
    makeAppError,
    AppError,
    NotFoundError,
    NotImplementedError,
    ServerError,
    ValidationError,
};
