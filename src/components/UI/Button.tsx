import React from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-auto" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} rounded-md px-2 py-1.5 transition-colors duration-100`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
