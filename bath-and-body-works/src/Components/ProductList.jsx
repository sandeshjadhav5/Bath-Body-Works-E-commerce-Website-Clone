import React, { useState } from "react";
import {
  SimpleGrid,
  Grid,
  Box,
  Heading,
  Divider,
  Select,
  Image,
  Text,
  Button,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartSuccess } from "../Redux/CartReducer/action";

const ProductList = ({ products }) => {
  const [cartData, setCartData] = useState([]);
  // const cart = useSelector((state) => state.CartReducer.carts);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const addToReduxStore = () => {
    dispatch(cartSuccess(cartData));
  };
  const addToCart = (el) => {
    setCartData([...cartData, el]);
    addToReduxStore();
  };
  console.log(cartData);
  return (
    <Box>
      <Heading
        p="2"
        textAlign="left"
        fontWeight="light"
        fontSize="25"
        lineHeight="5"
        color="#1A202C"
        letterSpacing="2px"
      >
        MEN'S
      </Heading>
      <Divider h="2" />
      <Link to="/cartpage">cartpage</Link>
      <Box
        display="flex"
        m="auto"
        w="98%"
        justifyContent="right"
        alignItems="center"
      >
        SORT BY
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="20%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
      </Box>
      <Box
        m="auto"
        w="98%"
        mt="2"
        mb="2"
        display="flex"
        justifyContent="space-evenly"
      >
        <Select placeholder="CATEGORY" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
        <Select placeholder="NAME" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
        <Select placeholder="TYPE" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
      </Box>
      <SimpleGrid
        // w="95%"
        minChildWidth="220px"
        m="auto"
        spacing="20px"
      >
        {products.map((el) => (
          <Box m="auto" key={el.id}>
            <Link to={`/products/${el.id}`}>
              <Image w="170px" m="auto" src={el.image} alt="beautyProduct" />
            </Link>
            <Text fontWeight="bold">{el.name}</Text>
            <Text fontWeight="light">{el.category.split("_")}</Text>
            <Text>₹{el.price}</Text>
            <Button
              w="100%"
              _hover={{ bg: "#433333" }}
              borderRadius="0"
              bgColor="#333333"
              color="white"
              onClick={() => {
                addToCart(el);
              }}
            >
              Add To Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
