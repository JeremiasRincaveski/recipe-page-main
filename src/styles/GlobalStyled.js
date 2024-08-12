import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  :root {  
    --white: hsl(0, 0%, 100%);
    --stone100: hsl(30, 54%, 90%);
    --stone150: hsl(30, 18%, 87%);
    --stone600: hsl(30, 10%, 34%);
    --stone900: hsl(24, 5%, 18%);
    --brown800: hsl(14, 45%, 36%);
    --rose800: hsl(332, 51%, 32%);
    --rose50: hsl(330, 100%, 98%);
    --FontParagraph: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100vw;
    height: 100%;
    background-color: var(--stone100);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Outfit", sans-serif;
    font-size: 300;
  }
`;

export default GlobalStyled;