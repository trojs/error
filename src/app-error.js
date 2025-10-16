/** global: validator */
import { Validator } from '@trojs/validator'
import errorSchema from './schemas/error.js'

const validator = new Validator(errorSchema)

/**
 * Options for the native Error constructor (ES2022).
 * @typedef {object} ErrorOptions
 * @property {unknown} [cause]
 */

/**
 * @typedef {object} ErrorValues
 * @property {string} name
 * @property {string} message
 * @property {any} value
 * @property {number} status
 * @property {Function|Promise} type
 * @property {Date} date
 * @property {object} me
 */

export default (error = Error) =>
  class AppError extends error {
    /**
     * Set the error values
     * @param {object} error
     * @param {any=} error.value
     * @param {object=} error.type
     * @param {string} error.message
     * @param {object=} error.me
     * @param {ErrorOptions=} error.options
     */
    constructor ({ value = null, type = null, message, me = null, options = null }) {
      const opts = options == null ? undefined : options
      super(message, opts)

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppError)
      }

      this.setValues({ value, type, me })
    }

    /**
     * Get the error name
     * @returns {string}
     */
    get name () {
      return 'AppError'
    }

    /**
     * Get the error status
     * @returns {number}
     */
    get errorStatus () {
      return 500
    }

    /**
     * Get the error status, or 500 if the error is invalid
     * @returns {number}
     */
    get status () {
      return this.hasErrors ? 500 : this.errorStatus
    }

    /**
     * Set the error values
     * @param {object} data
     * @param {any} data.value
     * @param {object} data.type
     * @param {object} data.me
     */
    setValues ({ value, type, me }) {
      this.value = value
      this.type = type
      this.me = me
      this.date = new Date()

      if (!this.validate()) {
        this.type = Error
        this.message = 'Invalid error'
        this.value = { errors: validator.errors, values: this.values }
      }
    }

    /**
     * Check if the error has errors
     * @returns {boolean}
     */
    get hasErrors () {
      return validator.errors.length > 0
    }

    /**
     * Get the error values
     * @returns {ErrorValues}
     */
    get values () {
      return {
        name: this.name,
        message: this.message,
        value: this.value,
        status: this.errorStatus,
        type: this.type,
        date: this.date,
        me: this.me
      }
    }

    /**
     * Validate the error values
     * @returns {boolean}
     */
    validate () {
      return validator.validate(this.values)
    }
  }
