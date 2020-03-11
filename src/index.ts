// --------------
// Exported Class
// --------------

export class Exception<T> extends Error {
  private _code?: string;
  private _context?: T;

  constructor(message?: string, code?: string, context?: T) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this._code = code;
    this._context = context;
  }

  static fromError<T>(error: Error, code?: string, context?: T): Exception<T> {
    const exception = new Exception(error.message, code, context);
    exception.stack = error.stack;
    exception.name = error.name;
    return exception;
  }

  get code(): string | undefined {
    return this._code;
  }

  get context(): T | undefined {
    return this._context;
  }
}
