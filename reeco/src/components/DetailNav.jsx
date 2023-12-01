import React from 'react'
import styled from 'styled-components';

const DetailNav = () => {
  return (
    <DetailContainer>
      <DetailSub1>
        <p>Order > <DetailSpan>Order 3245AGHB</DetailSpan></p>
        <DetaiilH2>Order 3245AGHB</DetaiilH2>
      </DetailSub1>
      <DetailSub2>
       <DetailButton1>Back</DetailButton1>
       <DetailButton2>Approve Order</DetailButton2>
      </DetailSub2>
    </DetailContainer>
  )
}

export default DetailNav;


const DetailContainer = styled.div`
    width:99.9%;
    /* border:1px solid red; */
    height:80px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const DetailSub1 = styled.div`
    width:30%;
    /* border:1px solid red; */
    padding-left: 100px;
    color:grey;
    line-height: 40px;
    font-size: small;
`;

const DetailSpan = styled.span`
    text-decoration: underline;
    
`;

const DetaiilH2 = styled.h2`
    color:black;
`;

const DetailSub2 = styled.div`
    width:24%;
    /* border:1px solid red; */
    /* display: flex; */
`;

const DetailButton1 = styled.button`
    padding:5px 15px;
    border-radius: 20px;
    border:1px solid green;
    background-color: white;
    margin: 40px 50px 0 40px;
    
`;

const DetailButton2 = styled.button`
    padding:5px 15px;
    border-radius: 20px;
    border:1px solid green;
    background-color: green;
    color:white;
`;