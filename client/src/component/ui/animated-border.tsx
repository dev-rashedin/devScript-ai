

const AnimatedBorder = ({type = 'hover'} : {type?: string}) => {
  return (
    <span
      className={`absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full ${
        type === 'hover' ? '' : ''
      }`}
    ></span>
  );
}
export default AnimatedBorder


  // <span className='absolute -bottom-1 h-[2px] bg-primary w-0 left-0 group-hover:w-full hover:-left-8 transition-all duration-300 ease-in-out'></span>