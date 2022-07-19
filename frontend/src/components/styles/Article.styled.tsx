import styled from "styled-components";

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 60vw;
    height: 200%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
    
    article {
        background-color: white;
        color : black;

    }

    li article {
        max-width: 40vw;
        margin: 2% auto;
        padding: -2%;
        line-height: 120%;
    }

    section {
        font-size: 16px;
        color:white;
        padding: 0 5%;
        margin: 5% 0 10% 0;
    }

    a {
        font-size: 16px;
        font-weight: lighter;
        font-style: italic;
        color: purple;
    }

    button {
        margin-bottom: 5%;
    }

    button a {
        font-style: normal;
        color: white;
    }

    span {
        font-size: 14px;
    }

    h2 {
        font-size: 20px;
        font-weight: light;
        margin-bottom: 5%;
        color: white;
    }

    h3 {
        font-size: 20px;
        font-weight: lighter;
        padding-bottom: 5%;
        color: black;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }

    .error {
        color:red;
        //transparent black background-color
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
    }

    .error button {  
        padding: 0 10px;
        margin-left: 10px;
    }
`;


