export const SuccessType = {
  OK: 200,
  Created: 201,
  NoContent: 204,
};

export const RedirectionType = {
  MovedPermanently: 301,
  NotModified: 304,
  TemporaryRedirect: 307,
};

export const ErrorType = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  RequestTimeout: 408,
  Conflict: 409,
  UnsupportedMediaType: 415,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
};
