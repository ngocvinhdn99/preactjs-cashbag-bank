import { h } from 'preact';
import React, { CSSProperties } from 'react';

interface Props {
  color?: string;
  className?: string;
  onClick?: (e: any) => void;
  style?: CSSProperties;
}

export default ({ color = '#717791', className, onClick, style }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      onClick={onClick}
      style={style}
    >
      <circle cx="8" cy="8" r="7.25" stroke={color} strokeWidth="1.5" />
      <circle cx="8" cy="6" r="1" fill={color} />
      <rect x="7" y="8" width="2" height="4" rx="1" fill={color} />
    </svg>
  );
};
