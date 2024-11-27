import makeAppError from './app-error.js'

const AppError = makeAppError(TypeError)

class ProcessingError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'ProcessingError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 422
    }
}

export default ProcessingError
