import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
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
    desc: 'Paste your code and get a clear, in-depth explanation. Perfect for learning, debugging, and quickly understanding complex logic.',
    icon: FiCode,
    path: 'code-explainer',
    cta: 'Explain Code',
  },
  {
    title: 'Doc Summarizer',
    desc: 'Summarize documents or articles instantly. Ideal for saving time, extracting key points, and understanding content efficiently.',
    icon: FiFileText,
    path: 'doc-summarizer',
    cta: 'Summarize Now',
  },
  {
    title: 'Article Generator',
    desc: 'Generate professional articles, blogs, or notes effortlessly. Helps produce structured, creative, and engaging content quickly.',
    icon: FiPenTool,
    path: 'article-generator',
    cta: 'Generate Article',
  },
  {
    title: 'Code Refactor',
    desc: 'Improve and optimize your code without changing functionality. Enhances readability, reduces errors, and follows best practices.',
    icon: FiEdit3,
    path: 'code-refactor',
    cta: 'Refactor Code',
  },
  {
    title: 'Email Helper',
    desc: 'Draft clear, professional emails instantly without hassle. Perfect for concise, polite, and persuasive communication every time.',
    icon: FiMail,
    path: 'email-helper',
    cta: 'Draft Email',
  },
  {
    title: 'Resume Assistant',
    desc: 'Polish your resume or cover letter with AI expertise. Ensures professional formatting, clear phrasing and strong impact.',
    icon: FiUserCheck,
    path: 'resume-assistant',
    cta: 'Improve Resume',
  },
];



export const socialLinks = [
  {
    href: 'https://github.com/dev-rashedin',
    icon: FaGithub,
    title: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/dev-rashedin',
    icon: FaLinkedin,
    title: 'Linkedin',
  },
  {
    href: 'https://www.facebook.com/rashedin06/',
    icon: FaFacebook,
    title: 'Facebook',
  },
  {
    href: 'https://discord.com/users/dev_rashedin',
    icon: FaDiscord,
    title: 'Discord',
  },
];


// nav links
export const links = [

  { title: 'Home', path: '/' },
  { title: 'Subscription', path: '/subscription' },
  {
    title: 'Services',
    dropdown: [
      { title: 'Code Explainer', path: '/services/code-explainer' },
      { title: 'Doc Summarizer', path: '/services/doc-summarizer' },
      { title: 'Article Generator', path: '/services/article-generator' },
      { title: 'Code Refactor', path: '/services/code-refactor' },
      { title: 'Email Helper', path: '/services/email-helper' },
      { title: 'Resume Assistant', path: '/services/resume-assistant' },
    ],
  },
  { title: 'Blogs', path: 'https://blog.rashedin.dev' },
  { title: 'Login', path: '/login' },
];

