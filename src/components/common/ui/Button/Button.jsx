import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    type = "button",
    onClick,
    className = "",
    disabled = false,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ui-button ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;