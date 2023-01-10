import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'plain';
  title: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'lg' | 'md' | 'sm';
  isLoading?: boolean;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  width?: number;
  height?: number;
  onClick?: (event: any) => void;
};

const Button = ({
  variant = 'primary',
  title,
  type = 'submit',
  size = 'md',
  isLoading = false,
  icon: Icon,
  iconPosition = 'right',
  width,
  height,
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    outline: styles.buttonOutline,
    plain: styles.buttonPlain,
  };

  const buttonSize = {
    lg: styles.buttonLarge,
    md: styles.buttonMedium,
    sm: styles.buttonSmall,
  };

  const styleObj: React.CSSProperties | undefined = {
    width: width ? width : 'unset',
    height: height ? height : 'unset',
    flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse',
  };

  const className = `${styles.button} ${variants[variant]} ${buttonSize[size]}`;
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      style={styleObj}
    >
      {title} {Icon && <Icon />}
    </button>
  );
};

export default Button;
