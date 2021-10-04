import React from "react";
import styled from "styled-components"

const ButtonWrapper = styled.div`
    position:relative;
    width: 100%;
    padding: 40px 5px 0 0;
    animation: fadeIn 1.5s;
    font-size: 14px;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    button{
        position: absolute;
        right: 4px;
        bottom: 0.5px;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
        padding: 4px 8px 4px 8px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
    }
`

const Button = (props) => {
    const {
        title,
        text,
        inputLabel1,
        inputLabel2,
        input1,
        input2 } = props;

    const HandleClickEvent = () => {
        console.log("------------");
        console.log(title);
        console.log(inputLabel1 + ": " + input1);
        if (input2) {
            console.log(inputLabel2 + ": " + input2);
        }
    }
    return (
        <ButtonWrapper>
            <button onClick={() => HandleClickEvent()}>{text}</button>
        </ButtonWrapper>
    )
}

export default Button