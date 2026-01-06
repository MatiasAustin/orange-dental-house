import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Updated to Pastel Orange / Charcoal theme
  const variants = {
    primary: "bg-pastel-clay text-white hover:bg-pastel-dark shadow-lg shadow-pastel-orange/30 rounded-full",
    secondary: "bg-white text-pastel-dark hover:bg-pastel-bg border border-white shadow-sm rounded-full",
    outline: "bg-transparent border border-pastel-dark text-pastel-dark hover:bg-pastel-dark hover:text-white rounded-full",
    ghost: "bg-transparent text-pastel-gray hover:text-pastel-clay hover:bg-white/50 rounded-full"
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5 uppercase font-semibold",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-3"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};