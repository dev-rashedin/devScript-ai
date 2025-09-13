import 'dotenv/config';
import OpenAI from 'openai';
import rateLimit from 'express-rate-limit';


// cors option
export const corsOption = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
};

// rate limit
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
  standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // disable the `X-RateLimit-*` headers
});


// openai
const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  throw new Error('OPENAI_API_KEY is missing in environment variables');
}

export const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: API_KEY,
});


