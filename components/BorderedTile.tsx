import React from 'react';
import styles from "../styles/BorderedTile.module.css";

interface IBorderedTileProps {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  className?: string;
}
export default function BorderedTile({ children, top, bottom, left, right, className = '' }: IBorderedTileProps) {
  let classNames = [styles.tile];

  if (top) {
    classNames.push(styles.top);
  }

  if (bottom) {
    classNames.push(styles.bottom);
  }

  if (left) {
    classNames.push(styles.left);
  }

  if (right) {
    classNames.push(styles.right);
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <span className={classNames.join(' ')}>
      {children}
    </span>
  );
}