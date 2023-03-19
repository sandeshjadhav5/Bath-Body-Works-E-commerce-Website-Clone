import React from "react";
import { useState, useEffect } from "react";
import {
  Image,
  Box,
  Text,
  SimpleGrid,
  useToast,
  Input,
  Button,
  useFocusEffect,
} from "@chakra-ui/react";
import { loginUser } from "../Redux/AuthReducer/action";
import { useSelector, useDispatch, Navigate } from "react-redux";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isAuthLoading = useSelector((state) => state.AuthReducer.isAuthLoading);
  const isAuthError = useSelector((state) => state.isAuthError);
  const location = useLocation();

  const comingFrom = location.state?.data || "/";

  const handleSubmit = () => {
    console.log("hello");
    const payload = {
      email,
      password,
    };
    console.log(payload);
    if (payload) {
      console.log("dispatched");
      dispatch(loginUser(payload));
    }
    if (isAuthError) {
      toast({
        title: "Failed to Log in",
        description: `Not Found`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isAuth) {
    navigate(comingFrom, { replace: true });
    toast({
      title: `You are successfully logged in`,
      description: `Login Successful`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <Box>
      <Box width="75%" margin="auto">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"></Image>
      </Box>

      <Box width="75%" m="auto" mb="10" mt="10">
        <Text fontSize={"30"} fontWeight="semibold" textAlign={"left"}>
          Sign In or Sign Up
        </Text>
        <hr></hr>
      </Box>
      <SimpleGrid w="75%" m="auto" minChildWidth="300px" gap="30px" mb="10">
        <Box>
          <Box boxShadow="dark-lg" p="6" rounded="md">
            <Text textAlign={"center"} fontWeight="semibold">
              SIGN IN
            </Text>
            <Text fontWeight={"light"} mb="3">
              If you already have an account with us, sign in below
            </Text>
            <Text textAlign={"left"} fontWeight={"light"}>
              Email Address
            </Text>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
            <Text textAlign={"left"} fontWeight={"light"}>
              Password
            </Text>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Input>

            <Button
              isLoading={isAuthLoading}
              loadingText="Submitting"
              onClick={handleSubmit}
              mt="2"
              color="aliceblue"
              bg="black"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box mt="2">
            <Text>
              Note :- use{" "}
              <span style={{ fontWeight: "bold" }}>(eve.holt@reqres.in)</span>{" "}
              email for login.Using{" "}
              <span style={{ fontWeight: "bold" }}>
                <a href="https://reqres.in/" target="_blank">
                  reqres.in
                </a>{" "}
              </span>
              for Login Functinality
            </Text>
          </Box>
        </Box>

        <Box boxShadow="dark-lg" p="6" rounded="md">
          <Text textAlign={"center"} fontWeight="semibold">
            SIGN UP
          </Text>
          <Text fontWeight={"light"}>
            Create an account to access the best of your favorite store
          </Text>
          <Image
            w="100%"
            m="auto"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_"
          ></Image>
          <Link to="/signup">
            <Button
              bg="black"
              color="aliceblue"
              mt="5"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              CREATE AN ACCOUNT
            </Button>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LogIn;
