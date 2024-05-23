import { StatusCodes } from 'http-status-codes';

export class NotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFound';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
