import makeAppError from './app-error.js'

const AppError = makeAppError(RangeError)

class NoContentError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'NoContentError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 204
    }
}

export default NoContentError
