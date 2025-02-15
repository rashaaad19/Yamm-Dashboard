import styled from "styled-components";

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;

    input{
    opacity: 0;
    width: 0;
    height: 0;
    }

    span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 20px;
    transition: background-color 0.3s ease;

    }
    span:before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;

    }

    input:checked+span{
        background-color: #4CAF50; /* Active state color */

    }
        input:checked+span:before{
            transform: translateX(20px);

        }

`