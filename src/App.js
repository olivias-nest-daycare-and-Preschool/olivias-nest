import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
const  App = () =>{
  const theme = {
    colors: {
      orange:"rgba(255,151,0,1.000)",
      white:"rgba(240,247,255,1)",
      green:"rgba(152,219,5,1.000)",
      navyBlue:"rgba(2,12,27,1)",
      lightNavyBlue:"rgba(4,22,48,1)",
      purple:"rgba(58,17,1,1.000)",
      black: "rgba(0,0,0,1.000)",
    },
    mobile:"768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      App
      <hr/>
    </ThemeProvider>
    </>
  );
}

export default App;
