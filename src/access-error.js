import makeAppError from './app-error.js'

const AppError = makeAppError(TypeError)

class AccessError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'AccessError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 403
    }
}

export default AccessError
