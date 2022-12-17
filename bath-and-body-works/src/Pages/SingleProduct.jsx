import { Box, Button, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../Redux/AppReducer/action";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const SingleItem =useSelector((store)=> store.AppReducer.products);
  const dispatch = useDispatch();
  const {id} = useParams();
  const SingleData = SingleItem.find(p => p.id == id);
  // console.log(SingleData);
  // const test ={
  //   "id": 1,
  //   "image": "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcab0bc33/large/026335796.jpg",
  //   "name": "Winter Candy Apple",
  //   "category": "Body Spray and Mist",
  //   "price": 1899
  // }

  const dummy ={
    size: 30,
    value: 4.6,
    isHalf: true,
    edit: false,
  }
  useEffect(()=>{
      dispatch(getProducts());
  },[])
  return <div>
<TopContainer>
Perk Alert: All new Rewards members get $10 off any $30 purchase! Join the VIPs
</TopContainer>
<ProductPath><Link to="/"><span>HOME</span></Link> / <span>{SingleData.category}</span> / {SingleData.name}</ProductPath>

    <MainDataWrapper>
      <div className="img-data-container">
        <div style={{maxWidth:"360px",display:"block", margin:"0px"}}>
        <button
          style={{
    position: "relative",
    width: "38px",
    height: "36px",
    fontSize: "0",
    float: "right",
    top:"50px",
    right:"20px",
    cursor: "pointer",
    opacity: "1",
    zIndex: "101"
           }}>
           <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671187578937/images/svg-icons/PDP-Wishlist-1.svg?yocs=o_s_" alt ="like"/>
           </button>
          <Image style={{border:"1px solid gray"}} src={SingleData.image} alt="image"/>
        </div>
        <Box className="left-Side">
        <Box >
          <h1>{SingleData.name}</h1>
          <span style={{fontSize:"14px"}}>{SingleData.category}</span>
          </Box>
          <Popover trigger="hover" placement="bottom-start">
          <Box display={"flex"} gap={"1"}>
  <PopoverTrigger>
  <Box className="btn-spanvalue">
  <Box>
          <ReactStars classNames="stardesign"{...dummy}/>
          </Box>
           <Box sx={{padding:"10px"}} className="spanvalue"><span>{dummy.value}</span>  (<span>609</span>)</Box>
        </Box>
  </PopoverTrigger>

  <Box fontSize={"xs"}
   textDecoration={"underline"}
    cursor={"pointer"}
    p={"3.5"}
     _hover={{
    textDecoration:"none"

  }}>Write A Review</Box>
  </Box>
  <PopoverContent boxSize={"3xs"}>
    <PopoverArrow />
    <PopoverBody >Review details</PopoverBody>
  </PopoverContent>
</Popover>
<Box fontWeight={"bold"}>₹ {SingleData.price}</Box>
<Box pt="1" fontSize={"small"} color={"gray"}>8 fl oz / 236 mL</Box>
<Box fontSize={"md"} color={"red"} pr="5">Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE</Box>
<Popover trigger="hover" placement="top-start">
          <Box display={"flex"} gap={"1"}>
  <PopoverTrigger>
  <Box cursor={"pointer"} fontSize={"xs"}>Details</Box>
  </PopoverTrigger>
  </Box>
  <PopoverContent boxSize={"3xs"}>
    <PopoverArrow />
    <PopoverBody >Review details</PopoverBody>
  </PopoverContent>
</Popover>

</Box>

      </div>
    </MainDataWrapper>

  </div>;
};

export default SingleProduct;

const TopContainer = styled.div`
  display: block;
  padding: 10px 0px;
  color: #2d7da8;
  font-weight: bold;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #e6f5ff;
    font-family: TradeGothicLTW05-BoldNo\.2,Arial,sans-serif;
    letter-spacing: .005em;
    font-size: 16px;
    font-size: 1rem;
    pointer: cursor;
`
const ProductPath = styled.div`
    padding: 0.5rem 1.25rem 1.6875rem;
    max-width: 1400px;
    font-size: 12px;
    text-align: left;
    span{
      text-decoration: underline;
      cursor:"pointer";
      :hover{
        text-decoration: none;
      }
    }
`
const MainDataWrapper = styled.div`

  width:80%;
  margin:auto;
  border:1px solid red;
  .img-data-container{
    width:86%;
    padding-left:10%;
border:1px solid green;
    margin:auto;
    display: flex;
    gap:20px;
  }
.left-Side{
  text-align:left;
  padding-top:30px;
}
.btn-spanvalue{
  background-color: white;
  cursor:pointer;
  display: flex;
  :focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
  :hover{
   border: 1px solid gray;
    border-style:dotted;
  }
}
.spanvalue{
  display: block;
}
.spanvalue span{
  text-decoration: 1px underline;
  cursor:pointer;
  font-size:13px;
  :hover{
    text-decoration:none;

  }
  .stardesign{
    cursor:pointer;
  }
}
`
