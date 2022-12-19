import React, { ReactNode } from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  useColorModeValue,
  Image,
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiPlusCircle,
} from "react-icons/fi";
import { BiCart, BiCategory } from "react-icons/bi";
import { IconType } from "react-icons";
import {
  MdProductionQuantityLimits,
  MdPayment,
  MdOutlinePreview,
} from "react-icons/md";
import { ReactText } from "react";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, to: "/dashboard" },
  { name: "Products", icon: MdProductionQuantityLimits, to: "/allproducts" },
  { name: "Products Categories", icon: BiCategory, to: "/categories" },

  { name: "Add Products", icon: FiPlusCircle, to: "/addproducts" },
  { name: "View Orders  ", icon: MdOutlinePreview, to: "/adminorders" },
];
//{ name: "View Payments", icon: MdPayment, to: "/adminpayments" },
//{ name: "Settings", icon: FiSettings },
export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Bath and Body Works
        </Text> */}
        <Image src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6cad6a5a/images/no_drop_logo-01.png" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <TextName key={link.name} icon={link.icon}>
          <ReachLink to={link.to}>{link.name}</ReachLink>
        </TextName>
      ))}
    </Box>
  );
};

const TextName = ({ icon, children, ...rest }) => {
  return (
    <Box
      // as={ReachLink}
      // to="/addproducts"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
