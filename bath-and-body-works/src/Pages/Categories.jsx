import React from "react";
import SimpleSidebar from "../Components/Sidebar";
import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
const Categories = () => {
  return (
    <div>
      <Box display="flex">
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Heading fontSize={"4xl"} textAlign={"center"} color="#2F855A">
            Categories
          </Heading>
          <SimpleGrid minChildWidth="300px" gap="50" mt="50">
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9keSUyMGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Text>Body Lotion</Text>
            </Box>
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1625999221989-30ec20de5bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <Text>Body Spray</Text>
            </Box>
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1620740168096-d48b4ac47165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NydWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Text>Body Scrub</Text>
            </Box>
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Text>Soaps</Text>
            </Box>
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1556228720-210aabb357b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvd2VyJTIwZ2VsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Text>Shower Gel</Text>
            </Box>
            <Box>
              <Image
                h="350"
                src="https://images.unsplash.com/photo-1563990744738-6459cc1b7b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vaXN0dXJpemVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Text>Moisturizers</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Categories;
