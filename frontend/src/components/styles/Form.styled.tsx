import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200%;
    background-color: #fafafa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.5s ease-in-out;
    

    h3 {
        font-size: 20px;
        font-weight: lighter;
        padding-bottom: 5%;
        color: white;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }
`;

