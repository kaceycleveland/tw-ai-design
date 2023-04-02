import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={`px-4 py-2 font-semibold text-white transition-colors duration-300 ease-in-out rounded-md focus:outline-emerald-200 ${
        rest.disabled
          ? "bg-slate-500 cursor-not-allowed"
          : "bg-emerald-500 hover:bg-emerald-900 active:bg-emerald-950 cursor-pointer"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
