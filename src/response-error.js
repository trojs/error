import makeAppError from './app-error.js'

const AppError = makeAppError(TypeError)

class ResponseError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'ResponseError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 502
    }
}

export default ResponseError
