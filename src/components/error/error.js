import React from 'react';
import styled from "styled-components";
import ErrorImg from './error.svg';

const StyledError = styled.div`
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%) }
width: 170px;
text-align:center;
`


const Error = () => {
    return <StyledError className="error">
        <img src={ErrorImg}/>
        <br/>
        Error. Please try again later
    </StyledError>
}


export default Error;
