import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    if (payload) {
      axios
        .post(`https://reqres.in/api/login`, payload)
        .then((res) => {
          toast({
            title: "Logged in as Admin",
            description: "Welcome to Admin Dashboard",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Admin Login Failed",
            description: "Please Enter Correct Details",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in as Admin</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                w="100%"
                mt="5"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.700",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
