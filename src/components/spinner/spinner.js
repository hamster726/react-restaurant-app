import React from 'react';
import spinner from './spinner-ellipsis-1s-200px.svg'
import styled from "styled-components";

const StyledSpinner = styled.img`
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%) }
`

const Spinner = () => {
    return <StyledSpinner className="spinner" src={spinner}></StyledSpinner>
}



export default Spinner;