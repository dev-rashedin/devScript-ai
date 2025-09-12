const Button = ({ label, type, onClick }: ButtonProps) => {
  let buttonClass =
    'px-4 py-2 rounded-lg text-white text-sm lg:text-base cursor-pointer w-40 h-11';
  if (type === 'primary') {
    buttonClass += ' bg-primary hover:bg-blue-500';
  }
  else if (type === 'secondary') {
    buttonClass += '  bg-transparent border-1 border-primary text-brand hover:bg-green-lantern';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
