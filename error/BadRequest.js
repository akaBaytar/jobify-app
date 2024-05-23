import { StatusCodes } from 'http-status-codes';

export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequest';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
