

const codeExplainForm = () => {
  return (
    <div className='form-ui'>
      <form>
        {/* select box */}
        <label className='block mb-2 font-semibold'>Language:</label>
        <select
          name='language'
          className='border rounded-lg p-2 w-full mb-4'
        >
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
          Explain Code
          {/* {isPending ? 'Explaining...' : 'Explain Code'} */}
        </button>
      </form>
    </div>
  );
}
export default codeExplainForm