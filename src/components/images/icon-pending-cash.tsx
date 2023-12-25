import { h } from 'preact';
import React from 'react';

interface Props {
  color?: string;
}

export default ({ color = '#757575' }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_1430)">
        <path
          d="M11 12V16C11 17.657 13.686 19 17 19C20.314 19 23 17.657 23 16V12"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 16V20C11 21.657 13.686 23 17 23C20.314 23 23 21.657 23 20V16"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 15C20.3137 15 23 13.6569 23 12C23 10.3431 20.3137 9 17 9C13.6863 9 11 10.3431 11 12C11 13.6569 13.6863 15 17 15Z"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 5V8H5"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.171 1 13.85 3.109 14.71 6.001"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_1430">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
