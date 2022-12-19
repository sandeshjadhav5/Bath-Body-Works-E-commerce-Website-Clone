import React from "react";
import { useState } from "react";
import { Image,Box ,Text,SimpleGrid,Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const LogIn = () => {
 
  return<Box>

<Box width="75%" ml="140px" height="200px" mt="00px">
    <Image  mt="40px"src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"></Image>
  </Box>
  <Box width="75%" ml="140px">
    <Text fontSize={"30px"}   fontWeight="light"   textAlign={"left"}>Sign In or Sign Up</Text>
    <hr ></hr>
  </Box>
  <Box mt="30px" width="75%" ml="140px">
  <SimpleGrid columns={2} spacing={10}>
  <Box  height='400px' mt="30px">
    <Text  textAlign={"center"}>SIGN IN</Text>
    <Text fontWeight={"light"} mt="10px" ml="20px">If you already have an account with us, sign in below</Text>
    <Text textAlign={"left"} ml="95px" mt="40px" fontWeight={"light"}>Email Address</Text>
    <Input width="60%" mt="10px"></Input>
    <Text textAlign={"left"} ml="95px" mt="30px" fontWeight={"light"}>Password</Text>
    <Input width="60%" mt="10px"></Input>
    
    <SimpleGrid columns={2} spacing={10}>
  <Box  height='80px'>
  
  <Text textAlign={"left"} ml="95px" mt="30px" fontWeight={"light"}>Forgot Password?
</Text>

  </Box>
  <Box  height='80px'>
  <Text textAlign={"left"} ml="95px" mt="30px" fontWeight={"light"}>Remember Me
</Text>


</Box>

</SimpleGrid>
<Button   color="aliceblue" bg="black" >SIGN IN</Button>
    
  </Box>






  <Box  height="400px">
  <Text  textAlign={"center"} mt="30px">SIGN UP</Text>
    <Text fontWeight={"light"} mt="10px" ml="20px">Create an account to access the best of your favorite store</Text>
    <Image width="70%" ml="70px" mt="20px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_"></Image>
   <Link to="/loginpage2"><Button bg="black" mt="30px" color="aliceblue">CREATE AN ACCOUNT</Button></Link>
    
  </Box>
  
  
</SimpleGrid>

  </Box>

 
  



  </Box> 
    
  
};

export default LogIn;

