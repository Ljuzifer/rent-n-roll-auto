import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* chrome */
html::-webkit-scrollbar {
  display: none;
}

/* firefox */
html {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;
  background-color: white;
  color: rgba(18, 20, 23, 1);
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::-webkit-scrollbar {
    appearance: none;
    background: transparent;
    width: 0;
    /* height: 0; */
  }

}

img{
    display: block;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
