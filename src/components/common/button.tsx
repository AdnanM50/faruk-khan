import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`cursor-pointer px-6 py-4 rounded-lg border border-[#0C1115] text-[#0C1115] font-semibold text-base hover:bg-[#0C1115] hover:text-white transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
