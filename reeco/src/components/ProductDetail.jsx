import React from 'react';
import styled from "styled-components";
import {PiPrinterThin} from "react-icons/pi"

const ProductDetail = () => {
  return (
    <MainContainer>
       <MainTopDiv>
        <MainTopDiv1>
            <Search type="text" placeholder='Search...' />
        </MainTopDiv1>
        <MainTopDiv2>
            <AddButton>Add Item</AddButton>
            <PrintIcon><PiPrinterThin/></PrintIcon>
        </MainTopDiv2>
       </MainTopDiv>
       <ProductDetailDiv>
        <thead>
            <TableRowHead>
                <TableFirstColumnHead>Name of Product</TableFirstColumnHead>
                <TableColumnHead>Brand</TableColumnHead>
                <TableColumnHead>Price</TableColumnHead>
                <TableColumnHead>Quantity</TableColumnHead>
                <TableColumnHead>Total</TableColumnHead>
                <TableLastColumnHead>Status of Product</TableLastColumnHead>
            </TableRowHead>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
        </tbody>
       </ProductDetailDiv>
    </MainContainer>
  )
}

export default ProductDetail;

const MainContainer = styled.div`
    width:83%;
    height:600px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin:auto;
    margin-top: 50px;
    padding:30px;
    border-radius: 15px;
`;

const MainTopDiv = styled.div`
    width:100%;
    /* border:1px solid red; */
    display: flex;
    justify-content: space-between;
`;

const MainTopDiv1 = styled.div`
    width:50%;
    /* height:50px; */
    /* border:1px solid blue; */
`;

const Search = styled.input`
    padding:10px;
    width:80%;
    border-radius:20px ;
    border:1px solid grey;
    font-size: medium;
`;


const MainTopDiv2 = styled.div`
    width:20%;
    /* height:50px; */
    /* border:1px solid green; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const AddButton = styled.button`
    padding:5px 10px;
    border-radius: 20px;
    border:1px solid green;
    background-color: white;
    color:green;
    font-weight: 600;
    cursor: pointer;
`;

const PrintIcon = styled.div`
    font-size: 30px;
    color:green;
`;

const ProductDetailDiv = styled.table`
    width:100%;
    margin-top: 50px;
`;

const TableRowHead = styled.tr`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    
`;

const TableColumnHead = styled.th`
    padding:10px 0;
    border:1px solid red;
`;
const TableFirstColumnHead = styled.th`
    padding:10px 0;
    column-count: 1;
    /* column-span: 2; */
    border:1px solid red;
`;

const TableLastColumnHead = styled.th`
    padding:10px 0;
    column-count: 1.5;
    /* column-span: 2; */
    border:1px solid red;
`;