import React from "react";
import { Image,Box ,Text,SimpleGrid,Input, Button, Heading } from "@chakra-ui/react";


const Log = () => {
//   const [email,setEmail]=useState("")
//  const [password,setPassword]=useState("")  
  return<Box fontWeight="light">
    <Box width="75%" ml="160px" mt="40px">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"></Image>
    </Box>
    <Box width="75%" ml="160px" mt="50px">
    <Text fontSize="30px"   fontWeight="light"   textAlign="left">Create an Account</Text>
    <hr ></hr>
  </Box>

  <Box mt="30px">
    <Text mr="300px">First Name</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>

  <Box mt="30px">
    <Text mr="300px">Last Name</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  <Box mt="30px">
    <Text mr="330px">Email</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  <Box mt="30px">
    <Text mr="250px">ZIP/Postal Code</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  <Box mt="30px">
    <Text mr="330px">Phone</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  <Box mt="30px">
    <Text mr="330px">Password</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  
<Button mt="50PX" color="aliceblue" bg="black" borderRadius="0"  >CREATE ACCOUNT</Button>

<Box mt="20px">
    <Text>Questions?</Text>
</Box>
<Box mt="20px">
    <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
</Box>


  </Box> 
    
  
};

export default Log;
