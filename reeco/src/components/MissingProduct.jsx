import React from 'react';
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { missingPopupClose } from '../Redux/action';

const MissingProduct = () => {

    const dispatch = useDispatch();

    const HandleMissing = ()=>{
          dispatch(missingPopupClose);
    }
  return (
    <MissingMainDiv>
    <MissingDiv>
      <MissingH2>Missing Products <MissingSpan  onClick={HandleMissing}><AiOutlineClose/></MissingSpan></MissingH2>
      <p>Lorem ipsum dolor sit amet....Urgent?</p>
      <MissingDivButton>
        <MissingButton onClick={HandleMissing}>No</MissingButton>
        <MissingButton onClick={HandleMissing}>Yes</MissingButton>
      </MissingDivButton>
    </MissingDiv>
    </MissingMainDiv>
  )
}

export default MissingProduct;

const MissingMainDiv = styled.div`
  width:100%;
  height:100vh;
  background-color: rgba(46, 46, 46, 0.8);
  position:absolute;
  left:0;
  top:0;
  z-index: 100;
`;

const MissingDiv = styled.div`
  width:350px;
  height:120px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding:15px 10px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const MissingDivButton = styled.div`
  /* border:1px solid red; */
  margin-top: 20px;
  width:40%;
  margin-left: 60%;
`;

const MissingButton = styled.button`
    background-color: white;
    border:0;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;
    font-size: small;
    color:grey;
    font-weight: bold;
`;


const MissingH2 = styled.h2`
    margin-bottom: 25px;
`;

const MissingSpan = styled.span`
  margin-left:100px ;
  cursor: pointer;
`;



