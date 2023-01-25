import {
  Box,
  Heading,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Foot = () => {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: `Subscribed to Newsletter`,
      position: "bottom-left",
      isClosable: true,
    });
  };
  return (
    <>
      <hr></hr>
      <SimpleGrid
        minChildWidth="150px"
        spacing={10}
        textAlign="left"
        m="auto"
        mt="30px"
        fontWeight="light"
        width="85%"
      >
        <Box>
          <Heading fontSize="11px">
            GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!
          </Heading>
          <form onSubmit={handleSubmit}>
            <Text mt="5px">Enter Email</Text>
            <Input mt="5px" color="black" type="email" required></Input>
            <Text mt="5px">Confirm Email</Text>
            <Input mt="5px" type="email" required></Input>

            <Input
              w="50%"
              type="submit"
              mt="5px"
              bg="black"
              color="white"
              _hover={{
                cursor: "pointer",
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            />
          </form>

          <Text mt="25px">Get Connected</Text>
          <Image src="data:image/png;base64,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" />
        </Box>
        <Box>
          <Heading as="h6" fontSize="15px" mb="10px">
            CUSTOMER CARE
          </Heading>
          <Text mt="5px">Help & FAQs</Text>
          <Text mt="5px">Shipping</Text>
          <Text mt="5px">Returns & Exchanges</Text>
          <Text mt="5px">Order Tracking</Text>
          <Text mt="5px">Corporate Sales & Gifts</Text>
          <Text mt="5px">Contact us</Text>
        </Box>
        <Box>
          <Box>
            <Heading as="h6" fontSize="15px">
              MY ACCOUNT
            </Heading>
            <Text mt="5px">Sign In or Sign Up</Text>
            <Text mt="5px">Order Tracking</Text>
            <Text mt="5px">My Auto Refresh</Text>
            <Text mt="5px">My Love-It List</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Heading as="h6" fontSize="15px">
              DISCOVER
            </Heading>
            <Text mt="5px">About Us</Text>
            <Text mt="5px">Carrers</Text>
            <Text mt="5px">Gift Cards</Text>
            <Text mt="5px">Shop by Fragrance</Text>
            <Text mt="5px">Product Ingredients</Text>
            <Text mt="5px">Get Inspired</Text>
            <Text mt="5px">Diversity, Equity & Inclusion</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" fontSize="15px">
            FIND US
          </Heading>
          <Text mt="10px">Store Locator</Text>
          <Text mt="10px">Global Location</Text>
        </Box>
      </SimpleGrid>

      <Box w="98%" m="auto" bg="aliceblue" mt="20px">
        <Text>
          Terms Of Use | Privacy Policy | Security Bug Report | Privacy Rights
          (Certain States) | Do Not Sell or Share My Personal Information
          (Certain States) Transparency in Supply Chains |{" "}
        </Text>
        <Text>
          Targeted Ad Preferences (Certain States) | Limit the Use of My
          Sensitive Personal Information (California)
        </Text>
        <Link to="/adminlogin">
          <Text fontWeight="bold" fontSize="20">
            ADMIN
          </Text>
        </Link>
        <Text mt="40px" fontStyle="light">
          © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
        </Text>
      </Box>
    </>
  );
};
export default Foot;
