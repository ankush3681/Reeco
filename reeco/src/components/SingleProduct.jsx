import React from 'react';
import styled from "styled-components";
import avacado from "../Images/Avocado.jpg";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const SingleProduct = () => {

    const HandleEdit = () =>{
        console.log("ankush")
    }
  return (
      <TbodyRow>
        <TbodyColumnFirst>
             <Img src={avacado} alt="avacado" />
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, amet?</p>
             </TbodyColumnFirst>
        <TbodyColumn>Lorem, ipsum dolor.</TbodyColumn>
        <TbodyColumn>
            <p>$60.67/6+1LB</p>
            <OldPrice>$10.34</OldPrice>
        </TbodyColumn>
        <TbodyColumn>15*6 = 1LB</TbodyColumn>
        <TbodyColumn>$8700.4</TbodyColumn>
        <TbodyColumnLast>
           <div>
                <SpanStaus>
                    Missing - Urgent
                </SpanStaus>
           </div>
           <StatusButtons>
            <AiOutlineClose/>
            <FaCheck/>
            <EditButton onClick={HandleEdit}>
                Edit
            </EditButton>
           </StatusButtons>
        </TbodyColumnLast>
      </TbodyRow>
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
