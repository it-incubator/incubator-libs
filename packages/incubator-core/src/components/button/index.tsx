import { ButtonHTMLAttributes, FC } from "react";

import { clsx } from "clsx";

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonVariant = "primary" | "secondary" | "outlined";

export interface ButtonProps extends DefaultButtonProps {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...rest
}) => {
  const classes = clsx(
    variant === "primary" && "button-primary",
    variant === "secondary" && "button-secondary",
    variant === "outlined" && "button-outlined",
    className
  );

  return <button className={classes} {...rest} />;
};
