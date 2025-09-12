const Button = ({ label, type, onClick }: ButtonProps) => {
  let buttonClass =
    'px-4 py-2 rounded-lg font-semibold  text-sm lg:text-base cursor-pointer w-40 h-11';
  if (type === 'primary') {
    buttonClass += ' text-white bg-primary hover:bg-blue-500';
  }
  else if (type === 'secondary') {
    buttonClass +=
      '  text-brand bg-transparent border-2 border-primary  hover:bg-green-lantern';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
