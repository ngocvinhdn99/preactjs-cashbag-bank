import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:  ${({ theme }) => theme?.colors?.primary};
    --bg-active-tab: ${({ theme }) => theme?.colors?.bgActiveTab};
    --white: ${({ theme }) => theme?.colors?.white};
    --black-tab: #757575;
    --success-color: #21AB56;
    --pending-color: #f2994a;
    --reject-color: #eb2d4b;
  }


  @font-face {
    font-family: ${({ theme }) => theme?.font?.regular?.name};
    src: ${({ theme }) => `url(${theme?.font?.regular?.link}) format("woff2")`};
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${({ theme }) => theme?.font?.semibold?.name};
    src: ${({ theme }) => `url(${theme?.font?.semibold?.link}) format("woff2")`};
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${({ theme }) => theme?.font?.bold?.name};
    src: ${({ theme }) => `url(${theme?.font?.bold?.link}) format("woff2")`};
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: ${({ theme }) => `'${theme?.font?.regular?.name}', sans-serif`};
  }

  .font-semibold {
    font-family: ${({ theme }) => `'${theme?.font?.semibold?.name}', sans-serif`};
  }
  
  .font-bold {
    font-family: ${({ theme }) => `'${theme?.font?.bold?.name}', sans-serif`};
  }
`;
