import React from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-auto" | "w-fit";
}

const Button = ({ children, className = "", width = "w-auto", ...rest }: Iprops) => {
  return (
    <button
      className={`rounded-md px-4 py-2 transition-colors duration-100 ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
