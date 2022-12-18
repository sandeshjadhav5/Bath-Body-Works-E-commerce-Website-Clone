import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../Redux/AppReducer/action";
import ReactStars from "react-rating-stars-component";
import {
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const SingleProduct = () => {
  const SingleItem = useSelector((store) => store.AppReducer.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const SingleData = SingleItem.find((p) => p.id == id);
  // console.log(SingleData);
  // const test ={
  //   "id": 1,
  //   "image": "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcab0bc33/large/026335796.jpg",
  //   "name": "Winter Candy Apple",
  //   "category": "Body Spray and Mist",
  //   "price": 1899
  // }

  const dummy = {
    size: 30,
    value: 4.6,
    isHalf: true,
    edit: false,
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setCount(e.target.value)
  };
  const [value, setValue] = React.useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <TopContainer>
        Perk Alert: All new Rewards members get $10 off any $30 purchase! Join
        the VIPs
      </TopContainer>
      <ProductPath>
        <Link to="/">
          <span>HOME</span>
        </Link>{" "}
        / <span>{SingleData.category}</span> / {SingleData.name}
      </ProductPath>

      <MainDataWrapper>
        <div className="img-data-container">
          <Box style={{display: "block", margin: "0px" }}>
            <Button
              style={{
                position: "relative",
                width: "10%",
                fontSize: "0",
                float: "right",
                top: "30px",
                right: "10px",
                cursor: "pointer",
                opacity: "1",
                zIndex: "101",
                padding:"0",
                backgroundColor:"transparent"
              }}
            >
            <Box minWidth="16px">
              <Image
              w="38px"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671187578937/images/svg-icons/PDP-Wishlist-1.svg?yocs=o_s_"
                alt="like"
              />
              </Box>
            </Button>
            <Box minWidth="120px">
            <Image  w="350px" src={SingleData.image} alt="image" />
            </Box>

          </Box>
          <Box className="left-Side">
            <Box>
              <h1>{SingleData.name}</h1>
              <span style={{ fontSize: "14px" }}>{SingleData.category}</span>
            </Box>
            <Box>
              <Popover trigger="hover" placement="bottom-start">
                <Box display={"flex"} flexWrap="wrap" gap={"1"}>
                  <PopoverTrigger>
                    <Box className="btn-spanvalue">
                      <Box>
                        <ReactStars classNames="stardesign" {...dummy} />
                      </Box>
                      <Box sx={{ padding: "10px" }} className="spanvalue">
                        <span>{dummy.value}</span> (<span>609</span>)
                      </Box>
                    </Box>
                  </PopoverTrigger>

                  <Box
                    fontSize={"xs"}
                    textDecoration={"underline"}
                    cursor={"pointer"}
                    p={"3.5"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Write A Review
                  </Box>
                </Box>
                <PopoverContent boxSize={"3xs"}>
                  <PopoverArrow />
                  <PopoverBody>Review details</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Box fontWeight={"bold"}>₹ {SingleData.price}</Box>
            <Box pt="1" fontSize={"small"} color={"gray"}>
              8 fl oz / 236 mL
            </Box>
            <Box fontSize={"md"} color={"red"} pr="5">
              Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE
            </Box>
            <Box>
              <Popover trigger="hover" placement="top-start">
                <Box display={"flex"} gap={"1"}>
                  <PopoverTrigger>
                    <Box
                      cursor={"pointer"}
                      textDecoration={"underline"}
                      _hover={{ textDecoration: "none" }}
                      fontSize={"xs"}
                    >
                      Details
                    </Box>
                  </PopoverTrigger>
                </Box>
                <PopoverContent boxSize={"3xs"}>
                  <PopoverArrow />
                  <PopoverBody>Review details</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Divider p={"2"} />

            <Box fontWeight={"bold"} fontSize={"small"} mt={"6"}>
              How do you want to receive it?
            </Box>
            <Box>
              <RadioGroup onChange={setValue} value={value}>
                <Stack>
                  <Radio size="md" value="1">
                    <HStack mt="8">
                      <Image
                        w="38"
                        src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671273970527/images/svg-icons/bopis-shipping.svg?yocs=o_s_"
                        alt="delvery"
                      />
                      <b className="pickupstyle" color="black">
                        Ship it{" "}
                      </b>
                    </HStack>
                    <span className="availablestyle">Available</span>
                  </Radio>
                  <Radio value="2">
                    <HStack mt="2" pb="0">
                      <Image
                        w="38"
                        src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_"
                        alt="location"
                      />
                      <b className="pickupstyle">PICK UP IN STORE</b>
                    </HStack>
                    <Box className="setstorestyle" onClick={onOpen}>
                      Set Store
                    </Box>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent marginTop={"20%"} borderRadius={"0px"}>
                        <ModalHeader padding={"0px 36px"}>
                          <SetstoreModelhead>
                            <img
                              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_"
                              alt="location"
                            />
                            <b className="pickupstylemodel">PICK UP IN STORE</b>
                          </SetstoreModelhead>
                        </ModalHeader>
                        <ModalCloseButton onClick={() => setValue("1")} />
                        <ModalBody>
                          <Midmodal>
                            Set your location. Place your order. We'll have it
                            waiting for you.
                          </Midmodal>
                          <Location>Use my current location</Location>

                          <Zip>ZIP Code</Zip>
                          <div>
                            <InputGroup size="md" marginBottom={"20px"}>
                              <Input
                                pr="4.5rem"
                                placeholder=""
                                focusBorderColor="lightgray"
                                borderStyle={"dotted"}
                                borderRadius={"0px"}
                              />
                              <InputRightElement width="3.5rem">
                                <Button
                                  children={<Search2Icon size="md" />}
                                  backgroundColor="Background"
                                  size="md"
                                ></Button>
                              </InputRightElement>
                            </InputGroup>
                          </div>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Divider m={"4"} />
            <Box mb="3">
              <Button
                _hover={{ bg: "black", color: "white" }}
                borderRadius={"0"}
                fontSize={"small"}
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input width={"12"} value={count} onChange={(e)=>handleInput(e)}/>
              <Button
                _hover={{ bg: "black", color: "white" }}
                borderRadius={"0"}
                fontSize={"small"}
                onClick={handleIncrement}
              >
                +
              </Button>
              <Button
                borderRadius={"0"}
                color="white"
                bg={"black"}
                _hover={{ bg: "white", color: "black" }}
                fontSize={"small"}
              >
                ADD TO BAG
              </Button>
            </Box>

            <Accordion w="90%" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                      FRAGRANCE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                      OVERVIEW
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                      USAGE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </div>
      </MainDataWrapper>
    </div>
  );
};

export default SingleProduct;

const TopContainer = styled.div`
  display: block;
  padding: 10px 0px;
  color: #2d7da8;
  font-weight: bold;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #e6f5ff;
  font-family: TradeGothicLTW05-BoldNo\.2, Arial, sans-serif;
  letter-spacing: 0.005em;
  font-size: 16px;
  font-size: 1rem;
  pointer: cursor;
`;
const ProductPath = styled.div`
  padding: 0.5rem 1.25rem 1.6875rem;
  max-width: 1400px;
  font-size: 12px;
  text-align: left;
  span {
    text-decoration: underline;
    cursor: "pointer";
    :hover {
      text-decoration: none;
    }
  }
`;
const MainDataWrapper = styled.div`
  margin-bottom: 30px;
  border: 1px solid red;
  .img-data-container {
    width:86%;
    padding-left: 10%;
    margin: auto;
    display: flex;
    gap: 20px;
  }
  .left-Side {
    text-align: left;
    width:50%;
    padding-top: 30px;
  }
  .btn-spanvalue {
    background-color: white;
    cursor: pointer;
    display: flex;
    :focus= {
       {
        boxshadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)";
      }
    }
    :hover {
      border: 1px solid gray;
      border-style: dotted;
    }
  }
  .spanvalue {
    display: block;
  }
  .spanvalue span {
    text-decoration: 1px underline;
    cursor: pointer;
    font-size: 13px;
    :hover {
      text-decoration: none;
    }
    .stardesign {
      cursor: pointer;
    }
  }
  .setstorestyle {
    font-family: Trade Gothic W01 Light, Arial, sans-serif;
    font-size: 13px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 35px;
    color: #333;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
  .pickupstyle {
    text-align: center;
    color: #005699;
    font-size: 12px;
    line-height: 16px;
    font-family: TrendSansW05-One, Arial, sans-serif;
  }
  .availablestyle {
    text-align: center;
    color: black;
    font-size: 13px;
    line-height: 16px;
    padding-left: 35px;
    font-family: TrendSansW05-One, Arial, sans-serif;
  }
`;
const SetstoreModelhead = styled.div`
  text-align: center;
  display: flex;
  font-size: 16px;
  line-height: 18px;
  font-family: TrendSansW05-One, Arial, sans-serif;
  margin: 20px 0 11px;
  padding: 0 36px;
  justify-content: center;
  width: 100%;
  padding: 0 36px;
  box-sizing: border-box;
  gap: 10px;
  .pickupstylemodel {
    color: #005699;
    line-height: 16px;
    font-family: TrendSansW05-One, Arial, sans-serif;
    padding-top: 4px;
  }
`;
const Midmodal = styled.div`
  color: #666;
  font-size: 14px;
  text-align: left;
  font-family: Trade Gothic W01 Light, Arial, sans-serif;
  line-height: 24px;
  font-weight: lighter;
`;
const Location = styled.div`
  font-size: 14px;
  font-family: TradeGothicLTW05-Light, Arial, sans-serif;
  font-weight: 300;
  line-height: 24px;
  color: #333;
  text-align: center;
  text-decoration: underline;
`;
const Zip = styled.div`
  color: #333;
  font-family: TradeGothicLTW05-Light, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 17px;
  margin-top: 40px;
  margin-bottom: 8px;
`;
const MidNavbarWrapper = styled.div`
  padding: 10px 5%;
  display: flex;
  justify-content: right;

  .list-login {
    list-style-type: none;
    font-size: 13px;
    cursor: pointer;
  }
  .list-login li {
    padding: 5px 0px;
  }
`;
