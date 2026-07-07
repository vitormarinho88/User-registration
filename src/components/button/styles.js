import styled from "styled-components";

export const Button = styled.button`
    border: ${props => (props.theme === 'primary' ? 'none' : '2px solid #d9600a76')};
    background: ${props => props.theme === 'primary' ?  'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' };
    font-size: 20px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    

    &:hover{
        ${props => (props.theme === 'primary' ? 'opacity: 0.8' : 'opacity:0.7') };
    }

    &:active{
        ${props => (props.theme === 'primary' ? 'opacity: 0.5' :  'transform: scale(1.02)')};
    }

`