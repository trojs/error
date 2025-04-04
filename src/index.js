import makeAppError from './app-error.js'
import AuthenticationError from './authentication-error.js'
import AccessError from './access-error.js'
import NoContentError from './no-content-error.js'
import NotFoundError from './not-found-error.js'
import NotImplementedError from './not-implemented-error.js'
import ProcessingError from './processing-error.js'
import ResponseError from './response-error.js'
import ServerError from './server-error.js'
import TimeoutError from './timeout-error.js'
import ValidationError from './validation-error.js'
import RateLimitError from './rate-limit-error.js'

const AppError = makeAppError()

export {
  makeAppError,
  AppError,
  AuthenticationError,
  AccessError,
  NoContentError,
  NotFoundError,
  NotImplementedError,
  ProcessingError,
  ResponseError,
  ServerError,
  TimeoutError,
  ValidationError,
  RateLimitError
}
