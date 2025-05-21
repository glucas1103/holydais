import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: ReactNode;
}

const Button = ({ href, children, variant = 'primary', className = '', icon }: ButtonProps) => {
  const baseStyles = "px-10 py-4 rounded-lg text-lg font-medium border-2 transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] transform";
  const variantStyles = {
    primary: "bg-black text-white border-white/30 shadow-[0_4px_24px_0_rgba(0,0,0,0.15)] hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.25)]",
    secondary: "bg-white text-black border-white/60 shadow-[0_4px_24px_0_rgba(0,0,0,0.10)] hover:bg-neutral-100 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.18)]"
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </Link>
  );
};

export default Button; 