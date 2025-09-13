import 'dotenv/config';
import OpenAI from 'openai';

export const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  throw new Error('OPENAI_API_KEY is missing in environment variables');
}

export const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: API_KEY,
});
