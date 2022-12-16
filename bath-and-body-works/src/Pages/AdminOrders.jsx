import React from "react";
import SimpleSidebar from "../Components/Sidebar";
import { Box, Heading } from "@chakra-ui/react";
const AdminOrders = () => {
  return (
    <div>
      <Box display="flex">
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Heading>Admin Orders</Heading>
        </Box>
      </Box>
    </div>
  );
};

export default AdminOrders;
