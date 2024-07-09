import { ButtonProps } from "@/types";

const Button = ({ type, title, otherClassname, handleClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`button-styles ${otherClassname}`}
    >
      {title}
    </button>
  );
};

export default Button;
