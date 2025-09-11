const Button = ({ label, type, onClick }: ButtonProps) => {
  let buttonClass =
    'px-4 py-2 rounded-lg text-white text-sm lg:text-base cursor-pointer ';
  if (type === 'primary') {
    buttonClass += ' bg-primary hover:bg-purple-500';
  }
  // else if (type === 'secondary') {
  //   buttonClass += '  bg-deep-ocean hover:bg-green-lantern';
  // }

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
