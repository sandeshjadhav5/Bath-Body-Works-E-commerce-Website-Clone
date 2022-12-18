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
import styled from "styled-components";
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
                <Text color="grey">Profits</Text>
                <Text color="whiteAlpha.900">
                  <Icon color="green.700" as={TriangleUpIcon} />
                  1000 CR
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          <Box></Box>
          <Box display="flex" mt={10}>
            <Box w="100%" m="auto">
              <Heading  m="10px 0" color="gray.400">Recent Orders</Heading>
             <MyTableContainer>
                 <Box w="95%" m="auto" padding={"10px 0px"} fontWeight={"bold"} border="0.5px solid lightgray">
                    Bath and Body Works All Products List
                  </Box>
                <table>

                  <thead >

                    <tr>
                      <th>No.</th>
                      <th>NAME</th>
                      <th>CATEGORY</th>
                      <th isNumeric>PRICE</th>
                    </tr>
                  </thead>

                  <tbody  >
                    {products.map((el) => (
                      <tr key={el.id}>
                        <td >{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.category}</td>
                        <td>₹{el.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Box w="95%" m="auto" padding={"10px 0px"} fontWeight={"bold"} border="0.5px solid lightgray" mb="20px">
                  Total Products={products.length}
                  </Box>
              </MyTableContainer>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

const MyTableContainer = styled.div`
width: 100%;
table{
  width: 95%;
  margin:auto;
  padding: 5px;
}
td{
  text-align:left;
  font-size:14px;
  padding: 10px 4px;
  border-bottom: 0.5px solid white;
}
th{
  font-size:14px;
  padding: 10px 2px;
  font-weight: 500;
}
thead{
  background-color: #87ceeb;
  color: black;
  text-align: left;
}
tbody{
  background-color: lightgray;
}

`
