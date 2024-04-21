import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, className = '' }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
