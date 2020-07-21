import { LoggerOptions } from './loggerOptions';

export class LoggerService {
    constructor(options: LoggerOptions | undefined) {
        this._options = options;
    }

    private _options: LoggerOptions | undefined;

    private isEnabled() {
        return this._options === undefined || this._options.isEnabled;
    }

    info(msg: string) {
        if (this.isEnabled()) {
            console.log(msg);
        }
    }

    warn(msg: string) {
        if (this.isEnabled()) {
            console.warn(msg);
        }
    }

    error(msg: string) {
        if (this.isEnabled()) {
            console.error(msg);
        }
    }
}