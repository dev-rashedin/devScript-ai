const Button = ({ label, type, href, onClick }: ButtonProps) => {
  let buttonClass =
    'px-4 py-2 rounded-lg font-semibold text-sm lg:text-base cursor-pointer w-40 h-11 relative group overflow-hidden';

  if (type === 'primary') {
    buttonClass += ' text-white bg-primary';
  } else if (type === 'secondary') {
    buttonClass += ' text-brand bg-transparent border-2 border-primary';
  }

  const content = (
    <>
      <span className='relative z-10'>{label}</span>
      <span
        className={`absolute inset-0 w-0 ${
          type === 'primary' ? 'bg-blue-800' : 'bg-secondary'
        } transition-[width] duration-500 ease-in-out group-hover:w-full origin-left z-0`}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
     {content}
    </button>
  );
};

export default Button;
