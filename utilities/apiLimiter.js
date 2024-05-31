import rateLimiter from 'express-rate-limit';

export const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15mins
  max: 10,
  message: { msg: `IP rate limit exceeded, retry in ${windowMs} minutes.` },
});
