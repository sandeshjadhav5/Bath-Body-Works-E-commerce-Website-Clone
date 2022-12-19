import React, { useState } from "react";
import SimpleSidebar from "../Components/Sidebar";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { emptyCart } from "../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
const AdminOrders = () => {
  const cartOrders = useSelector((state) => state.CartReducer.carts);
  console.log("all orders", cartOrders);
  const dispatch = useDispatch();
  const handleDispatch = () => {
    console.log("invoked");
    dispatch(emptyCart);
  };
  return (
    <div>
      <Box display="flex">
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Heading fontSize={"4xl"} textAlign={"center"} color="#2F855A">
            All Orders
          </Heading>
          <SimpleGrid minChildWidth="250px">
            {cartOrders.map((el) => (
              <Box>
                <Image m="auto" w="30" src={el.image} />
                <Text>{el.name}</Text>
                <Text>{el.cateogry}</Text>
                <Text>{el.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
          {/* <Button onClick={handleDispatch}>Dispatch Product</Button> */}
        </Box>
      </Box>
    </div>
  );
};

export default AdminOrders;
