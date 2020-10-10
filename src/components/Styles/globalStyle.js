import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    font-size: 62.5%;
    font-family: 'Noto Serif', 'serif';
    background-color: #F7F8FF;
  }
  p, a{
    font-size: 1.6rem;
    margin: 0px;
  }
  a{
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0px;
  }
  h1{
    font-size: 3rem;
  }
  h2{
    font-size: 2.5rem;
  }
  h3{
    font-size: 2rem;
  }
`;

export default GlobalStyle;
