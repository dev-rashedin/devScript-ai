import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/shades-of-purple.css";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const CodeExplanation = ({ explanation }: { explanation: string }) => {

   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
     try {
       await navigator.clipboard.writeText(explanation);
       setCopied(true);
       setTimeout(() => setCopied(false), 2000); // reset after 2s
     } catch (err) {
       console.error('Failed to copy:', err);
     }
   };

  return (
    <div className='w-full max-w-4xl mt-6  p-6 rounded-2xl  prose prose-lg dark:prose-invert leading-loose tracking-wide relative'>
      <button
        onClick={handleCopy}
        className='absolute top-4 right-4 flex items-center gap-1 px-3 py-1 text-lg rounded-lg  transition cursor-pointer'
      >
        <BiCopy size={24} color="primary-color"/>
        {/* {copied ? 'Copied!' : 'Copy'} */}
      </button>
      <h2 className='text-xl font-semibold mb-2'>Explanation:</h2>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {explanation}
      </Markdown>
    </div>
  );
};

export default CodeExplanation;
