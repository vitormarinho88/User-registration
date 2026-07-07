import styled from "styled-components";


export const Title = styled.h1`
    text-align: center;
    color: ${props => (props.theme ==='primary'? '#fff' : '#fff' )};
    font-size: ${props => (props.theme ==='primary'? '48px' : '40px' )};
    font-weight: normal;
    font-weight: 600;
    display: flex;
    margin-top: ${props => (props.theme === 'primary' ? '' : '30px' )};

`

