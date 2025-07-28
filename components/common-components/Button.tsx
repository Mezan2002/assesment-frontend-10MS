const Button = ({
  title = "",
  onClick = () => {},
}: {
  title?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      className="bg-primary hover:bg-primary-light py-2 shadow-[0_4px_0px_0px_#0e5e2b] active:shadow-[0_0px_0px_0px_#0e5e2b] rounded-md w-full text-white cursor-pointer active:scale-95 transition-all duration-300"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
