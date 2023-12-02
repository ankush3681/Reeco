import React from 'react';
import styled from "styled-components";
import { AiOutlineClose,AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import  image  from "../Images/Avocado.jpg";
import { useDispatch } from 'react-redux';
import { editPopupClose } from '../Redux/action';

const EditProduct = () => {

  const dispatch = useDispatch();

  const HandleEditClose = () =>{
     dispatch(editPopupClose);
  }
  return (
    <>
    <Edit>
      <EditProductDiv>
          <EditCloseIcon><AiOutlineClose size={20}  onClick={HandleEditClose}/></EditCloseIcon>
          <EditH3>Lorem ipsum dolor sit amet consectetur ldfkslj adipisicing elit.</EditH3>
          <EditBrand>American Apple</EditBrand>

          <EditContent>
            <EditDiv1>
              <EditImage src={image} alt="avacado" />
            </EditDiv1>
            <EditDiv2>
              <p>Price ($)</p>
              <p>Quantity</p>
              <p>Total</p>
            </EditDiv2>
            <EditDiv3>
              <DivInput1>
                <InputEdit type="number" /> / 6 * 1LB
              </DivInput1>
              <DivInput2>
                <QuantitySpan><AiFillMinusCircle/></QuantitySpan>
                <InputEdit type="number" />
                <QuantitySpan><AiFillPlusCircle/></QuantitySpan> * 6 * 1LB
              </DivInput2>
              <TotalPara>$ 49856986</TotalPara>
            </EditDiv3>
          </EditContent>

          <h5>Choose Reason <OptionalSpan>(Optional)</OptionalSpan></h5>
          <ReasonDiv>
            <ReasonName>Missing Product</ReasonName>
            <ReasonName>Quantity is not the same</ReasonName>
            <ReasonName>Price is not the same</ReasonName>
            <ReasonName>Other</ReasonName>
          </ReasonDiv>
          <ActionButtons>
             <CancelButton onClick={HandleEditClose}>Cancel</CancelButton>
             <SendButton onClick={HandleEditClose}>Send</SendButton>
          </ActionButtons>
      </EditProductDiv>
      </Edit>
    </>
  )
}

export default EditProduct;

const Edit = styled.div`
  width:100%;
  height:100vh;
  background-color: rgba(46, 46, 46, 0.8);
  position:absolute;
  left:0;
  top:0;
  z-index: 100;
`;

const EditProductDiv = styled.div`
    width:600px;
    height:auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
    border-radius: 20px;
    padding:20px 25px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
`;

const EditCloseIcon = styled.div`
    float:right;
`;

const EditH3 = styled.h3`
    margin-top: 10px;
    margin-bottom:15px ;
`;

const EditBrand = styled.p`
  color:grey;
  font-weight: 600;
  margin-bottom: 20px;
`;

const EditContent = styled.div`
  /* border:1px solid red; */
  height:150px;
  display: flex;
  justify-content: space-evenly;
`;

const EditDiv1 = styled.div`
   width:20%;
   /* border:1px solid red; */
   height:100%;
`;

const EditImage = styled.img`
  width:100%;
  height:100%;
`;

const EditDiv2 = styled.div`
   width:20%;
   /* border:1px solid red; */
   height:100%;
   color:grey;
   padding:10px 0;
   box-sizing: border-box;
   line-height: 43px;
`;

const EditDiv3 = styled.div`
  width:50%;
  /* border:1px solid blue; */
  height:100%;
  padding:10px 5px;
  line-height: 40px;
  color:grey;
  font-size: small;
`;

const InputEdit = styled.input`
  border:1px solid grey;
  width:50px;
  padding:5px 10px;
  border-radius: 5px;
`;

const QuantitySpan = styled.span`
  font-size: 25px;
  color:green;
  /* padding-top: 20px; */
  /* border:1px solid red; */
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 8px;
  cursor: pointer;
`;

const DivInput1 = styled.div`
  margin-left: 45px;
`;

const DivInput2 = styled.div`
/* border:1px solid blue; */
display: flex;
align-items: center;
`;

const TotalPara = styled.p`
  font-size: medium;
  margin-left: 45px;
`;


const OptionalSpan = styled.span`
  color:grey;
  font-size: small;
`;

const ReasonDiv = styled.div`
width:85%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  color:grey;
  font-size: small;
`;

const ReasonName = styled.p`
  border:1px solid grey;
  padding:5px 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const ActionButtons = styled.div`
   float:right;
   margin-top: 30px;
   padding-left: 20px;
   /* border:1px solid red; */
`;

const CancelButton = styled.button`
background-color: white;
border:0;
color:green;
margin-right: 15px;
cursor: pointer;
`;

const SendButton = styled.button`
background-color: green;
border:0;
color:white;
margin-right: 15px;
padding:5px 15px;
border-radius: 20px;
cursor: pointer;
`;
