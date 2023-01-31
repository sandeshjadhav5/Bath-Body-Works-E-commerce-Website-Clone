import { useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  useFocusEffect,
} from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
import { userLogout } from "../Redux/AuthReducer/action";
import { emptyCart } from "../Redux/CartReducer/action";
import { useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MiniNavbarDrawer from "./MiniNavbarDrawer";

const Navbar = (newEntry) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let length = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartLength = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();
  const toast = useToast();
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(emptyCart);
    toast({
      title: `Logged Out`,
      position: "top-right",
      isClosable: true,
    });
  };

  return (
    <MainDivWrapper>
      <Box className="maindiv">
        <div
          style={{
            margin: "auto",
            width: "100%",
            position: "fixed",
            zIndex: "1000",
            background: "white",
          }}
        >
          <Upeernav>
            <Box className="uppernav">
              <div className="unavstyled">
                {" "}
                POINTS. PERKS. EXCLUSIVES. <a>Join Rewards!</a>
              </div>
              <div className="navright-divflex">
                <img
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1670961565504/images/svg-icons/bopis-icon-small.svg?yocs=o_s_"
                  alt="location"
                />
                <b className="pickupstyle">PICK UP IN STORE</b>
                <p className="setstorestyle" onClick={onOpen}>
                  Set Store
                </p>
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
                    <ModalCloseButton />
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
              </div>
            </Box>
          </Upeernav>
          <MidNavbarWrapper>
            <Box className="midNavbar">
              <Box className="left-mini-navside">
                <Box>
                  <MiniNavbarDrawer />
                </Box>
                <Box className="Search-btn-style">
                  <Button
                    padding={"0px"}
                    margin={"0px"}
                    children={<Search2Icon color={"#005699"} />}
                    backgroundColor="Background"
                    size="xl"
                  ></Button>
                </Box>
              </Box>
              <Box className="logo-style">
                <Link to="/">
                  <img
                    style={{ cursor: "pointer" }}
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/en_US/v1671014791573/images/Christmas2022/Logos-Christmas-2022.svg?yocs=o_s_"
                    alt="logo"
                  />
                </Link>
              </Box>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "right",
                }}
              >
                <Box className=" input-style">
                  <InputGroup size="md" margin={"5px"}>
                    <Input
                      pr="4.5rem"
                      width={"20vw"}
                      fontSize="xs"
                      placeholder="Search by Fragrance and Product..."
                      borderColor={"black"}
                      focusBorderColor="black"
                      borderRadius={"0px"}
                      padding="0px 10px"
                    />
                    <InputRightElement width="3.8rem">
                      <Button
                        padding={"0px"}
                        children={<Search2Icon color={"#005699"} />}
                        backgroundColor="Background"
                        size="xl"
                      ></Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
                <Box className="login-button-style">
                  <Popover trigger="hover" placement="bottom-end">
                    <PopoverTrigger>
                      <Image
                        _hover={{
                          cursor: "pointer",
                        }}
                        src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                        alt="user login"
                      />
                    </PopoverTrigger>
                    <PopoverContent borderRadius="none" width={"200px"}>
                      <PopoverBody
                        sx={{
                          padding: "20px 10px",
                          margin: "0px",
                          textAlign: "left",
                        }}
                      >
                        <ul className="list-login">
                          <Link to="/login">
                            {!isAuth && <li>Sign in/Sign up</li>}
                          </Link>
                          <Link to="/adminlogin">
                            {!isAuth && <li>Login as Admin</li>}
                          </Link>
                          {isAuth && <li onClick={handleLogout}>Logout</li>}
                          {JSON.parse(localStorage.getItem("pinCode")) && (
                            <li>
                              PinCode :
                              {JSON.parse(localStorage.getItem("pinCode"))}
                            </li>
                          )}
                        </ul>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box className="offer-button-style">
                  <div style={{ width: "30px", paddingTop: "3px" }}>
                    <Image
                      src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6c6ff748/images/svg-icons/UI-Tag-v2.svg?yocs=o_s_"
                      alt="offer"
                    />
                  </div>
                </Box>
                <Box className="cart-button-style">
                  {/* Bag cart initial value 0; add cart length here  */}
                  <Box style={{ width: "30px", paddingTop: "3px" }}>
                    <Image
                      src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1671014791573/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"
                      alt="cart"
                    />
                  </Box>
                  <Box
                    as={Link}
                    to="/cartpage"
                    sx={{
                      position: "relative",
                      bottom: "6",
                      cursor: "pointer",
                      opacity: "1",
                      zIndex: "101",
                      padding: "0",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartLength.length === 0
                      ? `${length.length}`
                      : `${cartLength.length}`}
                  </Box>
                </Box>
              </div>
            </Box>
          </MidNavbarWrapper>
          <BottomNavbar>
            <Box className="bottomNavbar">
              <ul className="navbar-product-section">
                <li>TOP OFFERS</li>
                {/* Body care */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <Link to="/products">
                      <li>BODY CARE</li>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                BATH & SHOWER{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Bath & Shower</li>
                                  <li>Body Wash & Shower Gel</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right">
                            <PopoverTrigger>
                              <li>
                                MOISTURIZERS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Moisturizers</li>
                                  <li>Body Lotion</li>
                                  <li>Body Cream</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>

                          <Popover trigger="hover" placement="right-end">
                            <PopoverTrigger>
                              <li>
                                FRAGRANCE{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Fragrance</li>
                                  <li>Body Sprays & Mists</li>
                                  <li>Perfume & Cologne</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>

                          <Popover trigger="hover" placement="right-end">
                            <PopoverTrigger>
                              <li>
                                NEW & NOW{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Aromatherapy</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE BODY CARE</p>
                      </LeftSubsection>
                      <div style={{ width: "220px" }}></div>
                      <Rightsubsection>
                        <p>BODY CARE OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>Buy 3, Get 3 FREE All Full-Size Body Care</li>
                          <li>
                            2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars
                          </li>
                          <li>Buy 3, Get 1 FREE Travel, Hand & Lip Care</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Candles */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>CANDLES</li>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                ALL CANDLES{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>3-Wick Candles</li>
                                  <li>Single Wick Candles</li>
                                  <li>Candle Holders & Accessories</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE CANDLES</p>
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "160px" }}></div>
                      <Rightsubsection>
                        <p>CANDLES OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>$16.95 All 3-Wick Candles</li>
                          <li>2/$22 Single Wick Candles</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Wallflowers and Air FRESHENERS part */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>WALLFLOWERS & AIR FRESHENERS</li>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                WALLFLOWERS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Wallflowers</li>
                                  <li>Wallflowers Plugs</li>
                                  <li>Auto Refresh Wallflowers</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right">
                            <PopoverTrigger>
                              <li>
                                AIR FRESHENERS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>Room Sprays & Mists</li>
                                  <li>Car Fragrance</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE WALLFLOWERS & AIR FRESHENERS</p>
                      </LeftSubsection>
                      <div style={{ width: "220px" }}></div>
                      <Rightsubsection>
                        <p> WALLFLOWERS & AIR FRESHENERS OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>5/$25 Wallflowers Fragrance Refills</li>
                          <li>3/$22 Room Sprays</li>
                          <li>3/$10 Car Fragrance Refills</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Hand Soaps and Sanitizer */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>HAND SOAPS & SANITIZERS</li>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                HAND SOAPS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Hand Soaps </li>
                                  <li>Foaming Soaps </li>
                                  <li>Gel Soaps</li>
                                  <li>Soap Holders</li>
                                  <li>Gentle & Clean Hand Soaps</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                HAND SANITIZERS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"200px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Hand Sanitizers</li>
                                  <li>PocketBac Hand Sanitizers</li>
                                  <li>Hand Sanitizer Sprays</li>
                                  <li>Full-Size Sanitizers</li>
                                  <li>Hand Sanitizer Holders</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE HAND SOAPS & SANITIZERS</p>
                      </LeftSubsection>
                      <div style={{ width: "220px", height: "250px" }}></div>
                      <Rightsubsection>
                        <p>HAND SOAPS & SANITIZERS OFFERS</p>
                        <ul className="navbar-product-lastsubsection">
                          <li>5/$25 Hand Soaps</li>
                          <li>$8 Hand Sanitizer 5-Packs</li>
                          <li>3/$12 Hand Sanitizer Sprays</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Mens Shopping */}
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li>MEN'S SHOP</li>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                THE MEN'S SHOP{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>All Men's Body Care</li>
                                  <li>Body Wash & Shower Gel</li>
                                  <li>CMoisturizers</li>
                                  <li>Body Spray & Cologne</li>
                                  <li>Home Fragrance</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE MEN'S SHOP</p>
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "200px" }}></div>
                      <Rightsubsection style={{ border: "none" }}>
                        <ul className="navbar-product-lastsubsection">
                          <li>Hand Soaps & Sanitizers</li>
                        </ul>
                      </Rightsubsection>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <li>MOXY</li>
                <Popover
                  trigger="hover"
                  isLazy
                  openDelay={300}
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <li style={{ color: "tomato", fontWeight: "bold" }}>
                      HOLIDAY SHOP
                    </li>
                  </PopoverTrigger>
                  <PopoverContent borderRadius="none" width={"100vw"}>
                    <PopoverBody
                      sx={{
                        padding: "20px 10%",
                        margin: "0px",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <LeftSubsection>
                        <ul className="navbar-product-rightsubsection">
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                GIFTS BY PRICE{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>Christmas Collection</li>
                                  <li>$15 & Under Gifts</li>
                                  <li>$40 & Under Gifts</li>
                                  <li>Gift Sets</li>
                                  <li>Stocking Stuffers</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right-start">
                            <PopoverTrigger>
                              <li>
                                NEW & NOW{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>New Arrivals</li>
                                  <li>Aromatherapy Shop</li>
                                  <li>Best Sellers</li>
                                  <li>Get Inspired</li>
                                  <li>Shop By Fragrance</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right-end">
                            <PopoverTrigger>
                              <li>
                                FEATURED{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>Make Joy Happen Gift List</li>
                                  <li>Gift Boxes & Bags</li>
                                  <li>Accessories</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right">
                            <PopoverTrigger>
                              <li>
                                THE MEN'S SHOP{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>GIFTS BY RECIPIENT</li>
                                  <li>Gifts for Her</li>
                                  <li>Gifts for Him</li>
                                  <li>Gifts for Everyone</li>
                                  <li>Housewarming Gifts</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                          <Popover trigger="hover" placement="right-end">
                            <PopoverTrigger>
                              <li>
                                GIFT CARDS{" "}
                                <ChevronRightIcon
                                  fontSize={"20px"}
                                  marginLeft="30px"
                                />
                              </li>
                            </PopoverTrigger>
                            <PopoverContent borderRadius="none" width={"250px"}>
                              <PopoverBody
                                backgroundColor="transparent"
                                boxShadow={"none"}
                                border={"none"}
                              >
                                <ul className="hoverdata">
                                  <li>E-Gift Cards</li>
                                  <li>Gift Cards</li>
                                </ul>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </ul>
                        <p>EXPLORE HOLIDAY SHOP</p>
                      </LeftSubsection>
                      <div style={{ width: "270px", height: "200px" }}></div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </ul>
            </Box>
          </BottomNavbar>
        </div>
      </Box>
    </MainDivWrapper>
  );
};

export default Navbar;

const MainDivWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}
    .maindiv {
      height: 25vh;
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* DeskStop mode */}
    .maindiv {
      height: 10vh;
    }
  }
`;

const Upeernav = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}

    .uppernav {
      padding: 10px 5%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: #f2f2f2;
    }

    .unavstyled {
      color: #e20887;
      font-family: Trade Gothic W01 Bold_2, Arial, sans-serif;
      font-size: 13px;
      font-weight: bold;
    }
    .unavstyled a {
      color: #333;
      text-decoration: underline;
      font-size: 12px;
      font-size: 0.75rem;
      padding-left: 10px;
      font-weight: lighter;
    }
    .navright-divflex {
      display: flex;
    }
    .pickupstyle {
      text-align: center;
      color: #005699;
      font-size: 13px;
      line-height: 16px;
      font-family: TrendSansW05-One, Arial, sans-serif;
      padding: 4px 4px 0px 10px;
    }
    .setstorestyle {
      font-family: Trade Gothic W01 Light, Arial, sans-serif;
      font-size: 13px;
      cursor: pointer;
      margin-top: 2px;
      margin-left: 8px;
      color: #333;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* tablate mode */}
    .uppernav {
      display: none;
    }
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
  margin-top: 20px;
  margin-bottom: 8px;
`;
const MidNavbarWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}
    .midNavbar {
      padding: 10px 5%;
      display: flex;
      justify-content: right;
    }
    .list-login {
      list-style-type: none;
      font-size: 13px;
      cursor: pointer;
    }
    .list-login li {
      padding: 5px 0px;
    }
    .list-login :hover {
      color: black;
      font-weight: bold;
    }
    .login-button-style {
      width: 30px;
    }
    .cart-button-style {
      display: block;
      margin: 0px;
    }
    .input-style {
    }
    .logo-style {
      height: 36px;
      width: 25%;
      min-width: 280px;
      margin-right: 10%;
      padding-top: 10px;
    }
    .left-mini-navside {
      display: none;
    }
    .offer-button-style {
      display: none;
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* tablate mode */}
    .midNavbar {
      padding: 5px 5%;
      display: flex;
      justify-content: space-between;
    }
    .left-mini-navside {
      display: flex;
      gap: 10px;
      padding-top: 5px;
    }
    .offer-button-style {
      display: block;
      margin: 0;
    }

    .login-button-style {
      display: none;
    }
    .input-style {
      display: none;
    }
    .Search-btn-style {
      padding-top: 5px;
    }
    .logo-style {
      height: 36px;
      width: 40%;
      min-width: 150px;
      margin-right: 10%;
      padding-top: 10px;
    }
  }
`;
const BottomNavbar = styled.div`
  @media only screen and (min-width: 768px) {
    ${"" /* DeskStop mode */}
    .bottomNavbar {
      padding: 10px 5%;
      width: 100%;
    }
    .navbar-product-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style-type: none;
      font-size: 13px;
      cursor: pointer;
    }

    .navbar-product-section li {
      :hover {
        border-bottom: 2px solid #005699;
      }
    }
  }
  @media only screen and (max-width: 766px) {
    ${"" /* tablate mode */}
    .navbar-product-section {
      display: none;
    }
  }
`;
const LeftSubsection = styled.div`
  p {
    padding: 10px 10px 10px 15px;
    font-weight: bold;
  }
  .navbar-product-rightsubsection {
    list-style-type: none;
    font-size: 13px;
  }
  .navbar-product-rightsubsection li {
    padding: 10px 10px 10px 15px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      color: #005699;
      border-bottom: none;
      border-left: 3px solid #005699;
    }
  }
  .hoverdata {
    list-style-type: none;
    font-size: 13px;
  }
  .hoverdata li {
    cursor: pointer;
    maxwidth: 1536px;
    font-weight: lighter;
    :hover {
      color: #005699;
      border-bottom: none;
      border-left: none;
    }
  }
`;
const Rightsubsection = styled.div`
  border-left: 1px solid lightgray;
  padding: 10px 30px 0px 30px;
  p {
    padding: 5px 0px 10px 0px;
    font-weight: bold;
  }
  .navbar-product-lastsubsection {
    list-style-type: none;
    font-size: 13px;
  }
  .navbar-product-lastsubsection li {
    padding: 5px 0px;
    cursor: pointer;
    :hover {
      color: #005699;
      border-bottom: none;
    }
  }
`;
