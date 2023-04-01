import React, {
  forwardRef,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";
import clsx from "clsx";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
  }
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const btnSize = {
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
    }[size];

    const btnVariants = {
      primary: {
        normal:
          "text-white bg-lime-500 hover:bg-lime-400 active:bg-lime-600 disabled:bg-gray-400 disabled:text-gray-300",
        bordered:
          "text-white border border-lime-500 bg-transparent hover:bg-lime-100 active:bg-lime-200 disabled:border-gray-400 disabled:text-gray-300",
      },
      secondary: {
        normal:
          "text-gray-800 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-400 disabled:text-gray-300",
        bordered:
          "text-gray-800 border border-gray-200 bg-white hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-400 disabled:text-gray-300",
      },
    }[variant];

    const btnVariantClasses = `inline-flex items-center font-medium focus:outline-none transition ease-in-out duration-150 rounded ${btnSize} ${
      disabled && "opacity-50 cursor-not-allowed"
    }`;

    const buttonClasses = clsx(
      btnVariantClasses,
      btnVariants.bordered && "bordered border",
      btnVariants.normal,
      className
    );

    return (
      <button ref={ref} disabled={disabled} className={buttonClasses} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
