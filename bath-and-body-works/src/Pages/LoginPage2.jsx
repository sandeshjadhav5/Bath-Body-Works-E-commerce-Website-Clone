import React from "react";
import {useState} from "react"
import { Image,Box ,Text,SimpleGrid,Input, Button, Heading } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { Signip } from "../Redux/AuthReducer/action";
import Navbar from "../Components/Navbar";


const Log = () => {
  const notify = () => toast("log in succesfully");
  const [isAuth,setIsAuth]=useState(false)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")  
 const [allEntry,setAllEntry]=useState([])
console.log(allEntry)

const Login=()=>{
  return<>
  </>
}
 const submitForm=(e)=>{
  e.preventDefault()
  const newEntry={
    name:name,
    email:email,
    password:password,
    isAuth:true
  }

  Navbar(newEntry)
// Signip(newEntry)
  setAllEntry(...allEntry,newEntry)


 }
 



  return<form fontWeight="light" action=""  onSubmit={submitForm}  >
    <Box width="75%" ml="160px" mt="40px">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"></Image>
    </Box>
    <Box width="75%" ml="160px" mt="50px">
    <Text fontSize="30px"   fontWeight="light"   textAlign="left">Create an Account</Text>
    <hr ></hr>
  </Box>

  <Box mt="30px">
    <Text mr="300px">First Name</Text>
    <Input width="30%" ml="35px" mt="10px" 
    type="text"
    name="name"
    id="name"
    value={email}
    onChange={(e)=>setName(e.target.value)} />
    
    
  </Box>

  <Box mt="30px">
    <Text mr="300px">Last Name</Text>
    <Input width="30%" ml="35px" mt="10px" />
  </Box>
  <Box mt="30px">
    <Text mr="330px">Email</Text>
    <Input width="30%" ml="35px" mt="10px"
    type="text"
    name="email"
    id="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
     />
  </Box>
  <Box mt="30px">
    <Text mr="250px">ZIP/Postal Code</Text>
    <Input width="30%" ml="35px" mt="10px" />
  </Box>
  <Box mt="30px">
    <Text mr="330px">Phone</Text>
    <Input width="30%" ml="35px" mt="10px"></Input>
  </Box>
  <Box mt="30px">
    <Text mr="330px">Password</Text>

    <Input width="30%" ml="35px" mt="10px"
    type="password"
    name="password"
    id="password
    "
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    
  />
  </Box>
  
<Link to="/">
<Button onClick={notify} mt="50PX" color="aliceblue" bg="black" type="submit" borderRadius="0" 


>CREATE ACCOUNT</Button></Link>



<ToastContainer />

<Box mt="20px">
    <Text>Questions?</Text>
</Box>
<Box mt="20px">
    <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
</Box>


  </form> 
    
  
};

export default Log;
