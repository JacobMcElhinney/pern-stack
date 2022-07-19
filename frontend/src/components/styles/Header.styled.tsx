import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.95);
  padding: 3% 2% 0 2%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fonts.header && "sans-serif"};

  h1 {
    margin-left: 5%;
    color: ${({ theme }) => theme.colors.text || "#0088a9 "};
    font-size: 2.2em;
    background: -webkit-linear-gradient(#eee, #0088a9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Nav = styled.nav`
  margin: 0 0 40px 0;

  li {
    list-style: none;
    display: inline-block;
    padding: 0 20px;
  }

  li a {
    color: ${({ theme }) => theme.colors.text || "#fff"};
    transition: all 0.3s ease 0s;
  }

  li a:hover {
    color: ${({ theme }) => theme.colors.textHover || "#0088a9 "};
  }
`;
