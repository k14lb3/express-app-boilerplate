import { ErrorType } from './types';

export interface ErrorStatus {
  code: typeof ErrorType[keyof typeof ErrorType];
  reasonPhrase: string;
}

export interface ErrorResponse {
  status: ErrorStatus;
  message: string;
}

class AppError extends Error {
  private status: ErrorStatus;

  constructor(reasonPhrase: keyof typeof ErrorType, message: string) {
    super(message);
    this.status = {
      code: ErrorType[reasonPhrase],
      reasonPhrase: reasonPhrase.replace(/([A-Z])/g, ' $1').trim(),
    };

    // eslint-disable-next-line no-console
    console.error({
      status: this.status,
      message,
    });
  }

  get Status() {
    return this.status;
  }

  get JSON(): ErrorResponse {
    return {
      status: this.status,
      message: this.message,
    };
  }
}

export default AppError;
