import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import Home from './pages/Home.tsx';
import CodeExplainForm from './component/forms/CodeExplainForm.tsx';
import ErrorPage from './component/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'code-explainer', element: <CodeExplainForm/> },
      // { path: 'summarizer', element: <SummarizerForm /> },
      // { path: 'writer', element: <WriterForm /> },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>

    <RouterProvider router={router} />,
    </ThemeProvider>
  </StrictMode>
);
