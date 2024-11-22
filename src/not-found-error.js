import makeAppError from './app-error.js'

const AppError = makeAppError(RangeError)

class NotFoundError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'NotFoundError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 404
    }
}

export default NotFoundError
