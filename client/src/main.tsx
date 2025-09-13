import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import Home from './pages/Home.tsx';
import CodeExplainForm from './component/forms/CodeExplainForm.tsx';
import Summarizer from './pages/Summarizer.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import Subscription from './pages/Subscription.tsx';
import CodeRefactorForm from './component/forms/CodeRefactorForm.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'subscription', element: <Subscription /> },
      { path: 'login', element: <Login /> },
      {
        path: 'services', children: [
          { path: 'code-explainer', element: <CodeExplainForm/> },
          { path: 'summarizer', element: <Summarizer /> },
          {path: 'code-refactor', element: <CodeRefactorForm />},
      ]},
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
