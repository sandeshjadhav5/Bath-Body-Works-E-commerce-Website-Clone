import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';

const MiniNavbarDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
      <>
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
          <HamburgerIcon color={"#005699"}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>

            <DrawerBody>
            <Box sx={{display:"flex"}}>
            <Button sx={{backgroundColor:"white"}} children={<Search2Icon color={"#005699"}/>}></Button>
             <Input sx={{borderBottom:"1px solid gray",paddingLeft:"10px"}} _focus={{ borderStyle: "doted", border: "1px solid gray" }} variant='flushed' placeholder='Search...' />
             </Box>
             <Box>
             <Accordion allowToggle>

              <AccordionItem>
                <h2>
                  <AccordionButton
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                    TOP OFFERS
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                    BODY CARE
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
                    CANDLES
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
                    WALLFLOWERS & AIR FRESHENERS
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
                    HAND SOAPS & SANITIZERS
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
                    MEN'S SHOP
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

                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                    MOXY
                    </Box>

                  </AccordionButton>
                </h2>

              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                    HOLIDAY SHOP
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
                    STORE LOCATOR
                    </Box>

                  </AccordionButton>
                </h2>

                <h2>
                  <AccordionButton
                    _focus={{ borderStyle: "doted", border: "1px solid gray" }}
                  >
                    <Box as="span" padding={"10px 10px"} flex="1" textAlign="left">
                    MY ACCOUNT
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

            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default MiniNavbarDrawer;