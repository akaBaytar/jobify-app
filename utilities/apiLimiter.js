import rateLimiter from 'express-rate-limit';

const mins = 15 * 60 * 1000; // 15mins

export const apiLimiter = rateLimiter({
  windowMs: mins,
  max: 10,
  message: { msg: `IP rate limit exceeded, retry in ${mins} minutes.` },
});
