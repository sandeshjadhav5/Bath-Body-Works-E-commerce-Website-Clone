import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";
import ProductList from "../Components/ProductList";
import FilterComp from "../Components/FilterComp";
import { getProducts } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Function Component Starts Here //

const Products = () => {
  const products = useSelector((state) => state.AppReducer.products);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  //console.log("page is ", page);
  const dispatch = useDispatch();
  //console.log("this are products", products);
  useEffect(() => {
    dispatch(getProducts(page, order));
  }, [page, order]);
  return (
    <Box w="95%" m="auto">
      <h1>Products Page</h1>

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="#">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
      <Divider h="4" />
      <Box display={{ base: "grid", md: "grid", lg: "flex" }}>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" }}
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          border="1px"
          borderColor="gray.200"
        >
          <FilterComp />
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
          border="1px"
          borderColor="gray.200"
        >
          <ProductList products={products} order={order} setOrder={setOrder} />
          <Box w="40" m="auto" mb={20} mt={10} display="flex">
            <Button
              disabled={page <= 1}
              p="2"
              onClick={() => setPage((pre) => pre - 1)}
            >
              Previous
            </Button>
            <Text p="2" fontWeight="semibold">
              {page}
            </Text>
            <Button
              disabled={page >= 3}
              p="2"
              onClick={() => setPage((pre) => pre + 1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
