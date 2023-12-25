import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:  ${({ theme }) => theme?.colors?.primary};
    --bg-active-tab: ${({ theme }) => theme?.colors?.bgActiveTab};
    --white: #fff;
    --black-tab: #757575;
  }


  * {
    font-family: ${({ theme }) => `'${theme?.font}', sans-serif`};
  }
`;
