import React, { ReactNode, MouseEvent } from "react";
import classnames from "classnames";
import styles from "./button.module.css";

type Props = {
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  contained?: boolean;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode | ReactNode[];
};

const Button = ({
  type = "button",
  className,
  disabled = false,
  contained = false,
  onClick,
  children
}: Props) => {
  const classes = classnames(styles.button, className, {
    [styles.contained]: contained
  });
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
