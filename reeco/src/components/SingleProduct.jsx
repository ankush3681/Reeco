import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import avacado from "../Images/Avocado.jpg";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {useDispatch, useSelector } from "react-redux";
import { editPopupOpen, getProducts, missingPopupOpen } from '../Redux/action';
import MissingProduct from './MissingProduct';
import EditProduct from './EditProduct';

const SingleProduct = () => {
        const {product,missing,editpage} = useSelector((state)=>{
        console.log(state.reducer.missing,state.reducer.editpage)
        return state.reducer;
    })
    const dispatch = useDispatch();

    const HandleMiss = () =>{
         dispatch(missingPopupOpen)
    }

    const HandleEdit = () =>{
        dispatch(editPopupOpen)
    }

    useEffect(()=>{
        dispatch(getProducts);
    },[])
  return (
    <>
            {product.length> 0 && product.map((ele,index)=>(
      <TbodyRow key={index}>
        <TbodyColumnFirst>
             <Img src={avacado} alt="avacado" />
             <p>{ele.name}</p>
             </TbodyColumnFirst>
        <TbodyColumn>{ele.brand}</TbodyColumn>
        <TbodyColumn>
            <p>${ele.updated_price}/6+1LB</p>
            <OldPrice>${ele.old_price}</OldPrice>
        </TbodyColumn>
        <TbodyColumn>{ele.quantity}*6 = 1LB</TbodyColumn>
        <TbodyColumn>${+ele.updated_price * +ele.quantity}</TbodyColumn>
        <TbodyColumnLast>
           <div>
                <SpanStaus>
                    Missing - Urgent
                </SpanStaus>
           </div>
           <StatusButtons>
            <AiOutlineClose onClick={HandleMiss}/>
            <FaCheck/>
            <EditButton onClick={HandleEdit}>
                Edit
            </EditButton>
           </StatusButtons>
        </TbodyColumnLast>
      </TbodyRow>
      
    ))}
    {missing && <MissingProduct/>}
    {editpage && <EditProduct/>}
      </>
  )
}

export default SingleProduct;

const TbodyRow = styled.tr`
    /* border:1px solid red; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 0px 0px;
    
    `;

const OldPrice = styled.p`
    
`;

const TbodyColumnFirst = styled.td`
    padding:10px 10px 30px 10px;
    display: flex;
    align-items: center;
    /* border:1px solid yellow; */
`;

const Img = styled.img`
    width:10%;
    height:100%;
    
`;

const TbodyColumn = styled.td`
    /* border:1px solid blue; */
    padding:10px 10px 30px 10px;
    text-align: center;
`;

const TbodyColumnLast = styled.td`
    /* border:1px solid green; */
    padding:10px 10px 30px 30px;
    /* height:50px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StatusButtons = styled.div`
    width:40%;
    /* border:1px solid red; */
    display: flex;
    justify-content: space-evenly;
`;

const EditButton = styled.button`
    background-color: white;
    border:0;
    color:green;
    cursor: pointer;
`;

const SpanStaus = styled.span`
      background-color:red ;
      color:white;
      border-radius: 20px;
      font-size: 15px;
      padding:5px 10px;
`;
