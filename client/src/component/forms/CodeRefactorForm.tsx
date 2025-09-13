import { useActionState } from 'react';
import { useState } from 'react';
import { refactor } from '../../actions';
import Error from '../Error';
import CodeExplanation from '../CodeExplanation';
import LoadingDots from '../ui/loading-dots';

const CodeRefactorForm = () => {
  const [formState, formAction, isPending] = useActionState(refactor, null);
  const [code, setCode] = useState('');

  return (
    <div className='pt-20'>
      <form action={formAction} className='form-ui '>
        <label className='block mb-2 font-semibold'>Language:</label>
        <select name='language' className='border rounded-lg p-2 w-full mb-4 '>
          <option value='javascript'>JavaScript</option>
          <option value='typescript'>TypeScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
          <option value='golang'>Golang</option>
          <option value='rust'>Rust</option>
        </select>

        <label className='block mb-2 font-semibold'>Your Code:</label>
        <textarea
          name='code'
          required
          placeholder='Paste your code here...'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className='border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[250px] placeholder:text-gray-400 placeholder:text-base'
        />

        <button type='submit' className='mt-4 btn-primary'>
          {isPending ? 'Refactoring...' : 'Refactor Code'}
        </button>
        
        {isPending ? (
          <LoadingDots />
        ) : formState?.success ? (
          <CodeExplanation explanation={formState.data.refactoredCode} />
        ) : (
          formState?.success === false && <Error error={formState.error} />
        )}
      </form>
    </div>
  );
};

export default CodeRefactorForm;
