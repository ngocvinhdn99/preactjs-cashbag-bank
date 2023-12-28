import { h } from "preact";

interface Props {
  width?: number;
  height?: number;
}

export default ({ width = 10, height = 16 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L8 8L2 14"
        stroke="#717791"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
