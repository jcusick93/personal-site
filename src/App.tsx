import { useState } from "react";
import "./index.css";
import { Container } from "./components/Container/Container";
import { Text } from "./components/Text/Text";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <button onClick={() => setToggleTheme(!toggleTheme)}>Set theme</button>
        <Text>Hello</Text>
        <h1>
          Hello, I’m Josh and I specialize in product design with a focus on
          design systems. I use a combination of code and design to bridge the
          gap between concept and reality, working closely with both designers
          and engineers. Currently, I'm working on the Pantry Design System at
          Albertsons, and have previously worked on design systems at Gusto,
          Microsoft, and EagleView.
        </h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
