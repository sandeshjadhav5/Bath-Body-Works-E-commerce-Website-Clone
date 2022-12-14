import React from "react";
import { Box, Heading, Divider, Select } from "@chakra-ui/react";
const ProductList = () => {
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
      <Box display="flex" justifyContent="right" alignItems="center">
        SORT BY
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="20%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="33%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
      </Box>
      <Heading>Hello</Heading>
    </Box>
  );
};

export default ProductList;
