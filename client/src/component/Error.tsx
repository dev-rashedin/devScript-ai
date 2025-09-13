const Error = ({ error } : { error: string | undefined }) => {
  return (
    <p className='w-50 mx-auto px-2 py-1 flex-center rounded-lg text-lg text-red-500 mt-16 mb-8 bg-red-100 '>
      {error}
    </p>
  );
};

export default Error;
