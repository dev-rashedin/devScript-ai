import express, { Request, Response } from 'express';
import {
  asyncHandler,
  NotFoundError,
  BadRequestError,
} from 'express-error-toolkit';
import { StatusCodes } from 'http-status-toolkit';
import OpenAI from 'openai';

const codeRouter = express.Router();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  throw new Error('OPENAI_API_KEY is missing in environment variables');
}

const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: API_KEY,
});

codeRouter.post(
  '/explain-code',
  asyncHandler(async (req: Request, res: Response) => {
    const { code, language } = req.body;

    if (!code || !language) {
      throw new BadRequestError('Please provide code and language');
    }

    const response = await client.chat.completions.create({
      model: 'openai/gpt-oss-120b',
      messages: [
        {
          role: 'user',
          content: `Please explain this ${language} code in simple terms:\n\n\`\`\`${language}\n${code}\n\`\`\``,
        },
      ],
      temperature: 0.3,
      max_tokens: 800,
    });

    const explanation = response?.choices[0]?.message?.content;

    if (!explanation) {
      throw new NotFoundError('No explanation found');
    }

    res.status(StatusCodes.OK).json({
      explanation,
      language,
    });
  })
);

export default codeRouter;
