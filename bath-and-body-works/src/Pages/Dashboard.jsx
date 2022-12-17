import React, { useEffect } from "react";
import { getProducts } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import SimpleSidebar from "../Components/Sidebar";

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
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
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
              bg="rgb(67,156,145)"
              background="linear-gradient(90deg, rgba(67,156,145,1) 0%, rgba(29,229,253,1) 50%, rgba(219,241,241,1) 100%)"
            >
              <Icon
                as={FaProductHunt}
                w="40%"
                h={16}
                color="#702459"
                m="auto"
              />
              <Box m="auto">
                <Text color="#319795">New Users</Text>
                <Text color="#D53F8C">+25438</Text>
              </Box>
            </Box>
            <Box
              height="80px"
              display="flex"
              boxShadow="2xl"
              rounded="md"
              bg=" rgb(217,36,58)"
              background="linear-gradient(90deg, rgba(217,36,58,1) 0%, rgba(215,94,94,1) 50%, rgba(232,199,203,1) 100%)"
            >
              <Icon as={FaUserAlt} w="40%" h={14} color="green.500" m="auto" />
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
              bg=" rgb(217,75,36)"
              background=" linear-gradient(90deg, rgba(217,75,36,1) 0%, rgba(215,94,94,1) 50%, rgba(232,199,203,1) 100%)"
            >
              <Icon
                as={BsFillCartCheckFill}
                w="40%"
                h={16}
                color="#805AD5"
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
              bg="rgb(20,179,38)"
              background="linear-gradient(90deg, rgba(20,179,38,1) 0%, rgba(24,226,105,1) 50%, rgba(199,232,205,1) 100%)"
            >
              <Icon as={TbReportMoney} w="40%" h={16} m="auto" />
              <Box m="auto">
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
            <Box>
              <Heading color="#319795">Recent Orders</Heading>
              <TableContainer mt="5">
                <Table variant="striped" colorScheme="red">
                  <TableCaption>
                    Bath and Body Works All Products List
                  </TableCaption>
                  <Thead>
                    <Tr bg="yellow">
                      <Th>No.</Th>
                      <Th>NAME</Th>
                      <Th>CATEGORY</Th>
                      <Th isNumeric>PRICE</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products.map((el) => (
                      <Tr>
                        <Td>{el.id}</Td>
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
