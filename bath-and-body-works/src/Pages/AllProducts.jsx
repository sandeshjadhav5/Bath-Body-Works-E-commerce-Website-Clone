import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAdmin } from "../Redux/AdminReducer/action";
import SimpleSidebar from "../Components/Sidebar";
import { Box, Heading, Image } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
const AllProducts = () => {
  const products = useSelector((state) => state.AdminReducer.productsAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAdmin());
  }, []);
  console.log(products);
  return (
    <div>
      <Box display="flex">
        <Box>
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Heading color="#38A169" mb={10}>
            All Products
          </Heading>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Bath and Body Works All Products List</TableCaption>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>NAME</Th>
                  <Th>CATEGORY</Th>
                  <Th>IMAGE</Th>
                  <Th isNumeric>PRICE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((el) => (
                  <Tr>
                    <Td>{el.id}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.category}</Td>
                    <Td>
                      <Image w="10" src={el.image} alt={el.name} />
                    </Td>
                    <Td isNumeric>₹{el.price}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total Products={products.length}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default AllProducts;
