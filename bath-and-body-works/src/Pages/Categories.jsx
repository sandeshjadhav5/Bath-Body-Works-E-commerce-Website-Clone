import React from "react";
import SimpleSidebar from "../Components/Sidebar";
import { Box, Heading } from "@chakra-ui/react";
const Categories = () => {
  return (
    <div>
      <Box display="flex">
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Heading>Categories Page</Heading>
        </Box>
      </Box>
    </div>
  );
};

export default Categories;
