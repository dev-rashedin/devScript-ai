const LoadingDots = () => {
  return (
    <main className='flex space-x-2 my-20 justify-center items-center'>
      <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-2 w-2 bg-black  rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-2 w-2 bg-black  rounded-full animate-bounce'></div>
    </main>
  );
}
export default LoadingDots