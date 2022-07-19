import styled from "styled-components";

export const StyledButton = styled.button`

    background-color: rgba(0, 136, 169, 1);
    color: ${({ theme }) => theme.colors.text || "#fff"};
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    transition: all 0.3s ease 0s;
    cursor: pointer;

  &:hover {
    background-color: rgba(0, 136, 169, 0.8);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: rgba(0, 136, 169, 0.5);
    color: ${({ theme }) => theme.colors.text || "#fff"};
    cursor: not-allowed;
  }

  a {
    color: ${({ theme }) => theme.colors.text || "#fff"};
    text-decoration: none;
    font-style: normal;
  }

`;