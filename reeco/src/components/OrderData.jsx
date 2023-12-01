import React from "react";
import styled from "styled-components";
import {PiBowlFoodThin} from "react-icons/pi";
import {MdOutlineEmojiFoodBeverage} from "react-icons/md";
import {GiFruitBowl,GiKiwiFruit} from "react-icons/gi";
import {SiAdafruit} from "react-icons/si";
import {DiCssTricks,DiRasberryPi} from "react-icons/di";
import {CiBrightnessUp} from "react-icons/ci";

const OrderData = () => {
  return (
    <OrderDataContainer>
      <OData>
        <DataHead>Supplier</DataHead>
        <h4>East Coast fruits & vegetable</h4>
      </OData>
      <OData>
        <DataHead>Shipping</DataHead>
        <h4>Thu,Feb 10</h4>
      </OData>
      <OData>
        <DataHead>Total</DataHead>
        <h4>$ 1597</h4>
      </OData>
      <Category>
        <DataHead>Category</DataHead>
        <FoodIcon><PiBowlFoodThin/> <MdOutlineEmojiFoodBeverage/> <GiFruitBowl/> <SiAdafruit/></FoodIcon>
        <FoodIcon> <GiKiwiFruit/> <DiCssTricks/> <DiRasberryPi/> <CiBrightnessUp/></FoodIcon>
      </Category>
      <OData>
        <DataHead>Department</DataHead>
        <h4>300-444-987</h4>
      </OData>
      <Status>
        <DataHead>Status</DataHead>
        <h4>Awaiting your approval</h4>
      </Status>
    </OrderDataContainer>
  );
};

export default OrderData;

const OrderDataContainer = styled.div`
  width: 85%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 100px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: stretch;
  padding:10px;
  border-radius: 15px;
`;

const OData = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 17%;
  padding:10px 20px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 2px 0px 0px 0px;
`;

const Category = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 17%;
  padding:10px 20px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 2px 0px 0px 0px;

`;

const Status = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 17%;
  padding:10px 20px;
  box-sizing: border-box;
  /* box-shadow: rgba(99, 99, 99, 0.2) 2px 0px 0px 0px; */

`;

const DataHead = styled.p`
  color:grey;
  font-size:small ;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FoodIcon = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    color:grey;
`;

