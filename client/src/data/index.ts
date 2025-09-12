import {
  FiCode,
  FiFileText,
  FiPenTool,
  FiEdit3,
  FiMail,
  FiUserCheck,
} from './icons';

export const services = [
  {
    title: 'Code Explainer',
    desc: 'Paste your code and get an easy-to-understand explanation.',
    icon: FiCode,
    path: '/code-explainer',
  },
  {
    title: 'Doc Summarizer',
    desc: 'Summarize long documents or articles in seconds.',
    icon: FiFileText,
    path: '/summarizer',
  },
  {
    title: 'Article Writer',
    desc: 'Generate professional articles, blogs, or notes effortlessly.',
    icon: FiPenTool,
    path: '/writer',
  },
  {
    title: 'Code Refactor',
    desc: 'Improve readability and optimize code without changing functionality.',
    icon: FiEdit3,
    path: '/code-refactor',
  },
  {
    title: 'Email Helper',
    desc: 'Draft clear, professional emails instantly.',
    icon: FiMail,
    path: '/email-helper',
  },
  {
    title: 'Resume Assistant',
    desc: 'Polish your resume or cover letter with AI suggestions.',
    icon: FiUserCheck,
    path: '/resume-assistant',
  },
];


// nav links
export const links = [
  { title: "Home", path: "/" },
  { title: "Get Started", path: "/packages" },
  {
    title: "Services",
    dropdown: [
      { title: "Code Explainer", path: "/code-explainer" },
      { title: "Doc Summarizer", path: "/summarizer" },
      { title: "Article Writer", path: "/writer" },
      { title: "Code Refactor", path: "/code-refactor" },
      { title: "Email Helper", path: "/email-helper" },
      { title: "Resume Assistant", path: "/resume-assistant" },
    ],
  },
  { title: "Blogs", path: "/blogs" },
  { title: "Login", path: "/login" },
];

