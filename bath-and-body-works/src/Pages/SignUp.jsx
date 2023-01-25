import React from "react";
import { useState } from "react";
import {
  Image,
  Box,
  Text,
  SimpleGrid,
  Input,
  Button,
  Heading,
  useColorModeValue,
  FormControl,
  useToast,
} from "@chakra-ui/react";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { Signip } from "../Redux/AuthReducer/action";
import Navbar from "../Components/Navbar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    toast({
      title: ` Welcome ${name} `,
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box width="75%" m="auto">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"></Image>
      </Box>
      <Box
        m="10"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        w={{ base: "80%", sm: "70%", md: "50%", lg: "40%" }}
        bgColor="whiteAlpha.900"
      >
        <Box fontWeight="light" align={"center"} justify={"center"}>
          <Box m="auto">
            <Text fontSize="30px" fontWeight="semibold" textAlign="center">
              Create an Account
            </Text>
            <hr></hr>
          </Box>

          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1" mt="2">
              First Name
            </Text>
            <Input
              required
              m="auto"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1">
              Last Name
            </Text>
            <Input
              required
              m="auto"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1">
              Email
            </Text>
            <Input
              required
              m="auto"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1">
              ZIP/Postal Code
            </Text>
            <Input m="auto" />
          </Box>
          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1">
              Phone
            </Text>
            <Input m="auto"></Input>
          </Box>
          <Box>
            <Text textAlign="left" fontWeight="semibold" m="1">
              Password
            </Text>

            <Input
              m="auto"
              type="password"
              name="password"
              id="password
    "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            mt="5"
            color="aliceblue"
            bg="black"
            type="submit"
            _hover={{
              background: "blue.100",
              color: "black",
              borderRadius: "4",
            }}
            onClick={submitForm}
          >
            CREATE ACCOUNT
          </Button>

          <Box mt="1">
            <Text>Questions?</Text>
          </Box>
          <Box mt="1">
            <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
