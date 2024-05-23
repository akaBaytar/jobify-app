import { StatusCodes } from 'http-status-codes';

export class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.name = 'Forbidden';
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
