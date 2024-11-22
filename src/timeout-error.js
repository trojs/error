import makeAppError from './app-error.js'

const AppError = makeAppError()

class TimeoutError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'TimeoutError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 408
    }
}

export default TimeoutError
