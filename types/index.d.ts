import makeAppError from './app-error.js';
export const AppError: {
    new ({ value, type, message, me, options }: {
        value?: any | undefined;
        type?: object | undefined;
        message: string;
        me?: object | undefined;
        options?: import("./app-error.js").ErrorOptions | undefined;
    }): {
        get name(): string;
        get errorStatus(): number;
        get status(): number;
        setValues({ value, type, me }: {
            value: any;
            type: object;
            me: object;
        }): void;
        value: any;
        type: any;
        me: any;
        date: Date;
        message: string;
        get hasErrors(): boolean;
        get values(): ErrorValues;
        validate(): boolean;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace(err: Error, stackTraces: NodeJS.CallSite[]): any;
    stackTraceLimit: number;
};
import AuthenticationError from './authentication-error.js';
import AccessError from './access-error.js';
import NoContentError from './no-content-error.js';
import NotFoundError from './not-found-error.js';
import NotImplementedError from './not-implemented-error.js';
import ProcessingError from './processing-error.js';
import ResponseError from './response-error.js';
import ServerError from './server-error.js';
import TimeoutError from './timeout-error.js';
import ValidationError from './validation-error.js';
import RateLimitError from './rate-limit-error.js';
export { makeAppError, AuthenticationError, AccessError, NoContentError, NotFoundError, NotImplementedError, ProcessingError, ResponseError, ServerError, TimeoutError, ValidationError, RateLimitError };
