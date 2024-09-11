import { FC, HTMLAttributes } from "preact/compat";
import "./button.css";

interface TButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "normal" | "plain";
}

const Button: FC<TButton> = ({
  label,
  variant = "normal",
  disabled,
  ...props
}) => {
  return (
    <button
      className={`button-main  ${
        variant === "plain" ? "bordered-button" : ""
      } ${disabled && "no-box title-btn"} ${props.title && "title-btn"}`}
      {...props}
      title={
        disabled ? "This Option is not available at this moment" : props.title
      }
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
