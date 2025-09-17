const Blob = () => {
  return (
    <>
      {/* right side */}
      <div className='absolute top-[-100px] right-[-300px] w-[300px] h-[800px] bg-gradient-to-t from-transparent to-blue-400 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] right-[-200px] w-[300px] h-[600px] bg-gradient-to-t from-transparent to-blue-300 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] right-[-100px] w-[300px] h-[400px] bg-gradient-to-t from-transparent to-blue-200 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] right-[-10px] w-[300px] h-[200px] bg-gradient-to-t from-transparent to-blue-100 rounded-full blur-3xl opacity-30 z-0'></div>
      {/* left side */}
      <div className='absolute top-[-100px] left-[-300px] w-[300px] h-[800px] bg-gradient-to-t from-transparent to-blue-400 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] left-[-200px] w-[300px] h-[600px] bg-gradient-to-t from-transparent to-blue-300 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] left-[-100px] w-[300px] h-[400px] bg-gradient-to-t from-transparent to-blue-200 rounded-full blur-3xl opacity-30 z-0'></div>
      <div className='absolute top-[-100px] left-[-10px] w-[300px] h-[200px] bg-gradient-to-t from-transparent to-blue-100 rounded-full blur-3xl opacity-30 z-0'></div>
      {/* center */}
      <div className='absolute top-0 left-0 w-screen h-[60vh] bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 rounded-full blur-3xl opacity-30 z-0'></div>
    </>
  );
};
export default Blob;
