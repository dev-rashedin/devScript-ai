const Error = ({ error } : { error: string | undefined }) => {
  return <p className='text-red-500 mt-3'>{error}</p>;
};

export default Error;
