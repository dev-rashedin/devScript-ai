import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { notFoundHandler, globalErrorHandler, asyncHandler, BadRequestError, NotFoundError } from 'express-error-toolkit';
import { StatusCodes } from 'http-status-toolkit';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import OpenAI from 'openai';

const app = express();

// security middleware
const corsOption = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
  standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // disable the `X-RateLimit-*` headers
});

app.use(helmet());
app.use(cors(corsOption));
app.use(limiter)


// body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


const API_KEY = process.env.OPENAI_API_KEY;


const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: API_KEY,
});


app.post(
  '/api/explain-code',
  asyncHandler( async (req: Request, res: Response) => {

    const { code, language } = req.body;
    
    if(!code || !language) {
      throw new BadRequestError('Please provide code and language');
    }



    const response = await client.chat.completions.create({
      model: 'openai/gpt-oss-120b',
      "messages" :  [
     {
       role: 'user',
       content: `Please explain this ${
         language || ''
       } code in simple terms:\n\n\`\`\`${language || ''}\n${code}\n\`\`\``,
     },
   ],
      temperature: 0.3,
      max_tokens: 800,
    });

    const explanation = response?.choices[0]?.message?.content;

    if(!explanation) {
      throw new NotFoundError('No explanation found');
    }

    res.status(StatusCodes.OK).json({
      explanation,
      language: language || "unknown",
    })

      
  })
);


// home route
app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is running',
  });
});

// not found handler and global error handler
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
