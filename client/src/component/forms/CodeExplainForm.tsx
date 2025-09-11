import { useActionState } from 'react';
import { explain } from '../../actions';
import Error from '../Error';
import CodeExplanation from '../CodeExplanation';

const CodeExplainForm = () => {
  const [formState, formAction, isPending] = useActionState(explain, null);

  return (
    <div className='form-ui'>
      <form action={formAction}>
        {/* select box */}
        <label className='block mb-2 font-semibold'>Language:</label>
        <select name='language' className='border rounded-lg p-2 w-full mb-4'>
          <option value='javascript'>JavaScript</option>
          <option value='typescript'>TypeScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
          <option value='golang'>Golang</option>
          <option value='rust'>Rust</option>
        </select>

        {/* text area */}
        <label className='block mb-2 font-semibold'>Your Code:</label>
        <textarea
          name='code'
          required
          placeholder='Paste your code here...'
          className='border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]'
        />

        {/* submit button */}
        <button
          type='submit'
          // disabled={isPending}
          className='mt-4 btn-primary'
        >
          {isPending ? 'Explaining...' : 'Explain Code'}
        </button>
      </form>

      {isPending ? (
        <p className='bg-gray-300 my-3 w-64 p-2 rounded-sm'>Thinking...</p>
      ) : formState?.success ? (
        <CodeExplanation explanation={formState.data} />
      ) : (
            formState?.success === false && (
              <Error error={formState.error} />
        )
      )}
    </div>
  );
};
export default CodeExplainForm;
