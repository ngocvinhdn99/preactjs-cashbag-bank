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
        d="M21.5 5.25H3.5C3.08579 5.25 2.75 5.58579 2.75 6V18C2.75 18.4142 3.08579 18.75 3.5 18.75H21.5C21.9142 18.75 22.25 18.4142 22.25 18V6C22.25 5.58579 21.9142 5.25 21.5 5.25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8745 15.375H18.8745"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6245 15.375H12.1245"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.74945 9.0799H22.2494"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
