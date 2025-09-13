const Error = ({ error } : { error: string | undefined }) => {
  return (
    <p className='max-w-fit mx-auto px-4 py-1 flex-center rounded-lg text-lg text-red-500 mt-16 mb-8 bg-red-100 '>
      {error}
    </p>
  );
};

export default Error;
