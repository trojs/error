declare function _default(error?: ErrorConstructor): {
    new ({ value, type, message, me, options }: {
        value?: any | undefined;
        type?: object | undefined;
        message: string;
        me?: object | undefined;
        options?: ErrorOptions | undefined;
    }): {
        /**
         * Get the error name
         * @returns {string}
         */
        get name(): string;
        /**
         * Get the error status
         * @returns {number}
         */
        get errorStatus(): number;
        /**
         * Get the error status, or 500 if the error is invalid
         * @returns {number}
         */
        get status(): number;
        /**
         * Set the error values
         * @param {object} data
         * @param {any} data.value
         * @param {object} data.type
         * @param {object} data.me
         */
        setValues({ value, type, me }: {
            value: any;
            type: object;
            me: object;
        }): void;
        value: any;
        type: any;
        me: any;
        date: Date;
        message: string;
        /**
         * Check if the error has errors
         * @returns {boolean}
         */
        get hasErrors(): boolean;
        /**
         * Get the error values
         * @returns {ErrorValues}
         */
        get values(): ErrorValues;
        /**
         * Validate the error values
         * @returns {boolean}
         */
        validate(): boolean;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace(err: Error, stackTraces: NodeJS.CallSite[]): any;
    stackTraceLimit: number;
};
export default _default;
/**
 * Options for the native Error constructor (ES2022).
 */
export type ErrorOptions = {
    cause?: unknown;
};
export type ErrorValues = {
    name: string;
    message: string;
    value: any;
    status: number;
    type: Function | Promise<any>;
    date: Date;
    me: object;
};
