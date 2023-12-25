import { h } from 'preact';
import React from 'react';

interface Props {
  color?: string;
}

export default ({ color = '#757575' }: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.625 9.375H17.375"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.625 13.125H17.375"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 19.5V5.25C3.5 5.05109 3.57902 4.86032 3.71967 4.71967C3.86032 4.57902 4.05109 4.5 4.25 4.5H20.75C20.9489 4.5 21.1397 4.57902 21.2803 4.71967C21.421 4.86032 21.5 5.05109 21.5 5.25V19.5L18.5 18L15.5 19.5L12.5 18L9.5 19.5L6.5 18L3.5 19.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
