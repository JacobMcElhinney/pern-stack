import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { FlexContainer } from "./styles/FlexContainer";
import { DefaultTheme } from "./styles/DefaultTheme";

const Layout = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header />
      <FlexContainer>
        <main>
          <Outlet />
        </main>
      </FlexContainer>
    </ThemeProvider>
  );
};

export default Layout;
