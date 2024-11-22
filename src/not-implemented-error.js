import makeAppError from './app-error.js'

const AppError = makeAppError(RangeError)

class NotImplementedError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'NotImplementedError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 405
    }
}

export default NotImplementedError
