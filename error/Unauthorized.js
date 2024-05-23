import { StatusCodes } from 'http-status-codes';

export class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unauthorized';
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
