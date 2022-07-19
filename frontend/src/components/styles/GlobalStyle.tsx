 import { createGlobalStyle } from "styled-components";

//create global styles
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif; 
    }

    html, body, #root {
        height: 100%;
        width: 100vw;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-image: url(https://images.unsplash.com/photo-1656872626363-7c9a20083bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80);
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    header,footer {
        position: fixed; //to make it relative to the viewport.
        width: inherit;
    }
    header {
        top: 0;
    } 
    footer {
        bottom: 0;
        left: 0;

    }
    main {
        margin-top: 20%;
        margin-bottom: 60px;
    }
    
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
    textarea {
        border: none;
        outline: none;
    }`;

export default GlobalStyle;


