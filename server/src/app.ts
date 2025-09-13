import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { notFoundHandler, globalErrorHandler } from 'express-error-toolkit';
import { StatusCodes } from 'http-status-toolkit';
import helmet from 'helmet';

import codeAnalyzer from './routes/code-analyze.route';
import codeRefactor from './routes/code-refactor.route';
import { corsOption, limiter } from './lib/utils';

const app = express();

// security middleware
app.use(helmet());
app.use(cors(corsOption));
app.use(limiter);

// body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', codeAnalyzer);
app.use('/api', codeRefactor);

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
