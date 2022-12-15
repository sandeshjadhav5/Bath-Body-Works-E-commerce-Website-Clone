import { Box, Button, HStack, Image, Input, InputGroup, InputRightElement, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import styled from 'styled-components';
import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
       <Upeernav>
        <div className='unavstyled'> POINTS. PERKS. EXCLUSIVES. <a>Join Rewards!</a></div>
        <div className='navright-divflex'>
        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_" alt ="location"/>
        <b className='pickupstyle'>PICK UP IN STORE</b>
        <p className='setstorestyle' onClick={onOpen}>Set Store</p>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop={"20%"} borderRadius={"0px"}>
          <ModalHeader padding={"0px 36px"}>
          <SetstoreModelhead>
          <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_" alt ="location"/>
        <b className='pickupstylemodel'>PICK UP IN STORE</b>
          </SetstoreModelhead>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Midmodal>Set your location. Place your order. We'll have it waiting for you.</Midmodal>
          <Location>Use my current location</Location>

          <Zip>ZIP Code</Zip>
          <div>
          <InputGroup size='md' marginBottom={"20px"}>
      <Input
        pr='4.5rem'
        placeholder=''
        focusBorderColor='lightgray'
        borderStyle={"dotted"}
        borderRadius={"0px"}
      />
      <InputRightElement width='3.5rem'>
        <Button
        children={<Search2Icon size="md"/>}
        backgroundColor="Background"
         size='md' >
        </Button>
      </InputRightElement>
    </InputGroup>
          </div>
          </ModalBody>
        </ModalContent>
      </Modal>
        </div>
       </Upeernav>
       <MidNavbarWrapper>
        <div style={{height:"36px", width:"25%",marginRight:"10%",paddingTop:"10px"}}><img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/en_US/v1671014791573/images/Christmas2022/Logos-Christmas-2022.svg?yocs=o_s_" alt ="logo" /></div>
        <div style={{display:"flex",gap:"12px",justifyContent:"right"}}>
        <div >
        <InputGroup size='md'  margin={"5px"}>
      <Input
        pr='4.5rem'
        width={"280px"}
        fontSize='13px'
        placeholder='Search by Fragrance and Product...'
        borderColor={"black"}
        focusBorderColor='black'
        borderRadius={"0px"}
        padding="0px 10px"
      />
      <InputRightElement width='3.8rem'>
        <Button
        padding={"0px"}
        children={<Search2Icon color={"#005699"} />}
        backgroundColor="Background"
         size='xl' >
        </Button>
      </InputRightElement>
    </InputGroup>
        </div>
        <div style={{width:"30px"}}>
        <Popover trigger="hover" placement="bottom-end">
  <PopoverTrigger>
    <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_" alt="user login"/>
  </PopoverTrigger>
  <PopoverContent borderRadius="none" width={"200px"}>
    <PopoverBody sx={{padding:"20px 10px",margin:"0px", textAlign:"left"}}>
      <ul className='list-login'>
        <Link to="/login"><li>Sign In Or Sign Up</li></Link>
        <li>Order Tacking</li>
        <li>My Auto Refresh</li>
        <li>My Love-It List</li>
      </ul>
    </PopoverBody>
  </PopoverContent>
</Popover>
    </div>
        <div style={{width:"30px",paddingTop:"3px"}}>
        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671014791573/images/svg-icons/UI-AddToBag.svg?yocs=o_s_" alt="cart"/>
        </div>
        </div>
       </MidNavbarWrapper>
    </div>
  )
}

export default Navbar;

const Upeernav = styled.div`
padding: 10px 5%;
display: flex;
justify-content: space-between;
background-color: #f2f2f2;

.unavstyled{
    color: #e20887;
    font-family: Trade Gothic W01 Bold_2,Arial,sans-serif;
    font-size: 13px;
    font-weight: bold;
}
.unavstyled a{
    color: #333;
    text-decoration: underline;
    font-size: 12px;
    font-size: .75rem;
    padding-left: 10px;
    font-weight: lighter;
}
.navright-divflex{
    display: flex;
}
.pickupstyle{
    text-align: center;
    color: #005699;
    font-size: 13px;
    line-height: 16px;
    font-family: TrendSansW05-One,Arial,sans-serif;
    padding: 4px 4px 0px 10px;
}
.setstorestyle{
    font-family: Trade Gothic W01 Light,Arial,sans-serif;
    font-size: 13px;
    cursor: pointer;
    margin-top: 2px;
    margin-left: 8px;
    color: #333;
    text-decoration: underline;
}

`

const SetstoreModelhead=styled.div`
text-align: center;
    display: flex;
    font-size: 16px;
    line-height: 18px;
    font-family: TrendSansW05-One,Arial,sans-serif;
    margin: 20px 0 11px;
    padding: 0 36px;
    justify-content: center;
    width: 100%;
    padding: 0 36px;
    box-sizing: border-box;
    gap: 10px;
    .pickupstylemodel{
        color: #005699;
    line-height: 16px;
    font-family: TrendSansW05-One,Arial,sans-serif;
    padding-top:4px;
    }
`
const Midmodal = styled.div`
 color: #666;
    font-size: 14px;
    text-align: left;
    font-family: Trade Gothic W01 Light,Arial,sans-serif;
    line-height: 24px;
    font-weight: lighter;
`
const Location= styled.div`
font-size: 14px;
    font-family: TradeGothicLTW05-Light,Arial,sans-serif;
    font-weight: 300;
    line-height: 24px;
    color: #333;
    text-align: center;
    text-decoration: underline;
`
const Zip = styled.div`
color: #333;
    font-family: TradeGothicLTW05-Light,Arial,sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    margin-top: 20px;
    margin-bottom: 8px;
`
const MidNavbarWrapper = styled.div`
padding: 10px 5%;
display: flex;
justify-content:right;
border: 1px solid red;

.list-login{
  list-style-type:none;
  font-size:13px;
  cursor:pointer;
}
.list-login li{
  padding: 5px 0px;
}
`
