import React from 'react';
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <NavContainer>
      <SubContainer1>
         <H2>Reeco</H2>
         <p>Store</p>
         <p>Order</p>
         <p>Analytics</p>
      </SubContainer1>
      <SubContainer2>
      <CartIcon><MdShoppingCart /></CartIcon>
      <p>Hello, James <AIcon><AiOutlineDown/></AIcon></p>
      </SubContainer2>
    </NavContainer>
  )
}

export default Navbar;


const NavContainer = styled.div`
    width:99.9%;
    height:40px;
    display: flex;
    justify-content: space-around;
    background-color: green;
    color:white;
`;

const SubContainer1 = styled.div`
    width:60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* color:white; */
`;

const SubContainer2 = styled.div`
    width:20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

const AIcon = styled.span`
  font-size  :10px ;
  /* color:white; */
`;

const CartIcon = styled.span`
    font-size: 20px;
    color:white;
`;

const H2 = styled.h1`
    font-style: italic;
`;
