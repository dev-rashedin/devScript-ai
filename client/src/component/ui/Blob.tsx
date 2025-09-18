const Blob = () => {
  return (
    <div className='absolute inset-0 -z-50 overflow-hidden'>
      {/* Large central soft gradient */}
      <div className='absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] blob-gradient ' />

      {/* Right accent blob */}
      <div className='absolute top-0 right-[-10%] w-[30vw] h-[40vh]  blob-gradient' />
  
      {/* <div className='hidden xl:absolute top-[-10%] right-[-20%] w-[30vw] h-[80vh] blob-gradient' /> */}
  

      {/* Left accent blob */}
      <div className='absolute top-0 left-[-10%] w-[30vw] h-[40vh] blob-gradient ' />
    </div>
  );
};

export default Blob;
