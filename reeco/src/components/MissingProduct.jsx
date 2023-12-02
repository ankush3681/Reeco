import React from 'react';
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const MissingProduct = () => {
  return (
    <MissingDiv>
      <h2>Missing Products <MissingSpan><AiOutlineClose/></MissingSpan></h2>
      <p>Lorem ipsum dolor sit amet....Urgent?</p>
      <div>
        <MissingNoButton>No</MissingNoButton>
        <MissingYesButton>Yes</MissingYesButton>
      </div>
    </MissingDiv>
  )
}

export default MissingProduct;

const MissingDiv = styled.div`
  width:350px;
  height:150px;
  border:1px solid red;  
`;

const MissingNoButton = styled.button`
    
`;

const MissingYesButton = styled.button`
    
`;

const MissingSpan = styled.span`
  margin-left:100px ;
  /* border:1px solid red; */
`;

