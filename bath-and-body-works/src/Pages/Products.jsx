import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Divider,
} from "@chakra-ui/react";
import ProductList from "../Components/ProductList";
import FilterComp from "../Components/FilterComp";
const Products = () => {
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
      <Box display="flex">
        <Box w="20%" border="1px" borderColor="gray.200">
          <FilterComp />
        </Box>
        <Box w="80%" border="1px" borderColor="gray.200">
          <ProductList />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
