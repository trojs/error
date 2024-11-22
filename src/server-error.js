import makeAppError from './app-error.js'

const AppError = makeAppError()

class ServerError extends AppError {
    /**
     * Get the error name
     * @returns {string}
     */
    get name() {
        return 'ServerError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus() {
        return 500
    }
}

export default ServerError
