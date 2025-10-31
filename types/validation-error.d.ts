export default ValidationError;
declare const ValidationError_base: {
    new ({ value, type, message, me, options }: {
        value?: any | undefined;
        type?: object | undefined;
        message: string;
        me?: object | undefined;
        options?: import("./app-error.js").ErrorOptions | undefined;
    }): {
        get name(): string;
        get errorStatus(): number;
        get status(): number;
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
        get hasErrors(): boolean;
        get values(): ErrorValues;
        validate(): boolean;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace(err: Error, stackTraces: NodeJS.CallSite[]): any;
    stackTraceLimit: number;
};
declare class ValidationError extends ValidationError_base {
}
