import React, { useEffect } from "react";
import { getProducts } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import SimpleSidebar from "../Components/Sidebar";
// import Chart from "chart.js/auto";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { FaUserAlt, FaProductHunt } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import PureComponent from "./Chart";
import { Box, Heading, SimpleGrid, Icon, Image, Text } from "@chakra-ui/react";
import { TbReportMoney } from "react-icons/tb";
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
const Dashboard = () => {
  const products = useSelector((state) => state.AppReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Box display="flex">
        <Box >
          <SimpleSidebar />
        </Box>
        <Box w="100%">
          <PureComponent />
          <SimpleGrid
            minChildWidth="220px"
            spacing="40px"
            mt="5"
            w="95%"
            m="auto"
          >
            <Box
              height="80px"
              display="flex"
              boxShadow="2xl"
              rounded="md"
              bg="skyblue"
            >
              <Icon
                as={FaProductHunt}
                w="40%"
                color="whiteAlpha.900"
                h={16}
                m="auto"
              />
              <Box m="auto">
                <Text color="#319795"> Products</Text>
                <Text color="#D53F8C">+25438</Text>
              </Box>
            </Box>
            <Box
              height="80px"
              display="flex"
              boxShadow="2xl"
              rounded="md"

              bg="skyblue"
            >
              <Icon as={FaUserAlt} w="40%" h={14} color={"whiteAlpha.900"} m="auto" />
              <Box m="auto">
                <Text color="#9C4221">New Users</Text>
                <Text color="#9C4221">+25438</Text>
              </Box>
            </Box>
            <Box
              height="80px"
              display="flex"
              boxShadow="2xl"
              rounded="md"
              bg="skyblue"
            >
              <Icon
                as={BsFillCartCheckFill}
                w="40%"
                h={16}
                color="whiteAlpha.900"
                m="auto"
              />
              <Box m="auto">
                <Text color="#322659">New Orders</Text>
                <Text color="#521B41">+3500</Text>
              </Box>
            </Box>
            <Box
              height="80px"
              display="flex"
              boxShadow="2xl"
              rounded="md"
              bg="skyblue"
            >
              <Icon as={TbReportMoney} w="40%" color="whiteAlpha.900" h={16} m="auto" />
              <Box m="auto" >
                <Text color="#319795">Profits</Text>
                <Text color="#D53F8C">
                  <Icon color="green" as={TriangleUpIcon} />
                  1000 CR
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          <Box></Box>
          <Box display="flex" mt={10}>
            <Box w="96%" m="auto">
              <Heading color="gray.400">Recent Orders</Heading>
              <TableContainer mt="5" w="auto" >
                <Table variant='simple'>
                  <TableCaption>
                    Bath and Body Works All Products List
                  </TableCaption>
                  <Thead bg="skyblue" color={"gray"} textAlign={"center"} p="0">
                    <Tr>
                      <Th>No.</Th>
                      <Th>NAME</Th>
                      <Th>CATEGORY</Th>
                      <Th isNumeric>PRICE</Th>
                    </Tr>
                  </Thead>
                  <Tbody bg="lightgray" color={"black"} >
                    {products.map((el) => (
                      <Tr textAlign={"center"}>
                        <Td >{el.id}</Td>
                        <Td>{el.name}</Td>
                        <Td>{el.category}</Td>

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
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
