const Blob = () => {
  return (
    <div className='absolute inset-0 -z-50 overflow-hidden'>
      {/* Large central soft gradient */}
      <div className='absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-t from-blue-300 via-blue-500 to-blue-700 rounded-full blur-[180px] opacity-30' />
      {/* <div className='absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 blur-3xl opacity-35' /> */}

      {/* Right accent blob */}
      <div className='absolute top-0 right-[-10%] w-[30vw] h-[60vh] bg-gradient-to-t blob-gradient rounded-full blur-[120px] opacity-25' />
     
      <div className='absolute top-0 left-[-10%] w-[30vw] h-[60vh] bg-gradient-to-t blob-gradient rounded-full blur-[120px] opacity-25' />


      {/* Left accent blob */}
      {/* <div className='absolute bottom-[-10%] left-[-10%] w-[30vw] h-[60vh] bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full blur-[120px] opacity-20' /> */}
    </div>
  );
};

export default Blob;
