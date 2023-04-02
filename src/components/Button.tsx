import React, { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      className = "",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const baseClass =
      "focus:outline-none focus:shadow-outline inline-flex items-center justify-center font-bold uppercase tracking-wide rounded transition-all duration-200 ease-in-out py-2 px-4";
    const disabledClass =
      "opacity-50 cursor-not-allowed bg-gray-400 text-white hover:bg-gray-400 active:bg-gray-solid";
    const primaryVariantClasses = {
      default:
        "bg-lime-500 text-white active:bg-lime-darker hover:bg-lime-darker",
      pressed: "bg-green-solid",
    };

    const secondaryVariantClasses = {
      default:
        "border border-black bg-white text-black active:text-black hover:text-black active:bg-gray-solid",
      pressed: `${variant === "secondary" ? `active:${variant}-color` : ""} ${
        variant === "primary" ? `active:${variant}-600` : ""
      }`,
    };

    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          baseClass,
          !disabled && (className || ""),
          disabled && disabledClass,
          variant === "primary"
            ? primaryVariantClasses.default
            : secondaryVariantClasses.default,
          props.active === true
            ? `active:border-transparent outline-none shadow-none transform scale-y-[0.9]`
            : ""
        )}
        style={(variant === "secondary" && { color: "black" }) || null}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
