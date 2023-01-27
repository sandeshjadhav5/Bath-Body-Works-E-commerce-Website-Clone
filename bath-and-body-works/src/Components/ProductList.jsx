import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Spinner,
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
import { getProducts } from "../Redux/AppReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductList = ({ order, setOrder }) => {
  const toast = useToast();
  const [sort, setSort] = useState("price");
  const [cartData, setCartData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.AppReducer.products);

  const loadingIndicator = useSelector(
    (state) => state.AppReducer.isProductsLoading
  );

  const addToCart = (el) => {
    setCartData([...cartData, el]);

    dispatch(cartSuccess(el));
    toast({
      title: `${el.name}`,
      description: "Successfully Added To Cart",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    setOrder(e.target.value);
    dispatch(getProducts(order));
  };

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sort");
      const getProductsParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "price",
          _order: sortBy,
        },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [products.length, dispatch, location.search]);

  if (loadingIndicator) {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mt="200"
          mb="200"
        />
      </>
    );
  }

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

      <Box
        display="flex"
        m="auto"
        w="98%"
        justifyContent="right"
        alignItems="center"
      >
        SORT BY
        <Select
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Most Popular"
          ml="2"
          alignItems="right"
          w="20%"
        >
          <option value="asc">Price Low To High</option>
          <option value="desc">Price High To Low</option>
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
