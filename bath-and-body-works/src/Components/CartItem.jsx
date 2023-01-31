import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Heading,
  Button,
  useToast,
  Input,
  Flex,
  Image,
  Text,
  Box,
  useFocusEffect,
} from "@chakra-ui/react";
import { updateQuantity, deleteFromCart } from "../Redux/CartReducer/action";
const CartItem = ({ name, image, category, price, quantity, id, temp }) => {
  const [count, setCount] = useState(quantity);
  const [cartPageData, setCartPageData] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const dispatch = useDispatch();
  const latest = useSelector((state) => state.CartReducer.carts);
  const handleDecrement = () => {
    setCount((pre) => pre - 1);

    const payload = {
      quantity: count - 1,
      id,
    };
    dispatch(updateQuantity(payload));
  };

  const handleIncrement = () => {
    setCount((pre) => pre + 1);

    const payload = {
      quantity: count + 1,
      id,
    };
    dispatch(updateQuantity(payload));
  };
  const handleDelete = () => {
    dispatch(deleteFromCart(id));
    temp(latest);
  };
  let subTotal = price * count;
  useEffect(() => {}, [
    handleIncrement,
    handleDelete,
    handleDecrement,
    quantity,
    count,
  ]);
  return (
    <Flex boxShadow="lg" p="6" rounded="md">
      <Box w="28.33%">
        <Image
          w={{ base: "20", md: "22", lg: "24", xl: "26" }}
          src={image}
          alignContent="center"
          alignItems="center"
          textAlign="center"
          m="auto"
        />
      </Box>
      <Box
        alignContent="center"
        alignItems="center"
        textAlign="center"
        m="auto"
        w="38.33%"
      >
        {" "}
        <Text
          alignContent="center"
          alignItems="center"
          textAlign="center"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text
          fontSize={{ base: "10", md: "12", lg: "14", xl: "16" }}
          alignContent="center"
          alignItems="center"
          textAlign="center"
        >
          {category}
        </Text>
        <Text
          alignContent="center"
          alignItems="center"
          textAlign="center"
          fontWeight="bold"
        >
          {`₹ ${price}`}
        </Text>
        <Flex m="auto" mt="1">
          <Button
            disabled={count === 1}
            _hover={{ bg: "#DD6B20", color: "white" }}
            borderRadius={"0"}
            fontSize={"small"}
            alignContent="center"
            alignItems="center"
            textAlign="center"
            m="auto"
            onClick={handleDecrement}
            w={{ base: "4", md: "5", lg: "6", xl: "8" }}
          >
            -
          </Button>
          <Text m="1" fontWeight="semibold">
            {count}
          </Text>
          <Button
            _hover={{ bg: "#DD6B20", color: "white" }}
            borderRadius={"0"}
            fontSize={"small"}
            alignContent="center"
            alignItems="center"
            textAlign="center"
            m="auto"
            onClick={handleIncrement}
            w={{ base: "4", md: "5", lg: "6", xl: "8" }}
          >
            +
          </Button>
        </Flex>
      </Box>
      <Box
        alignContent="center"
        alignItems="center"
        textAlign="center"
        m="auto"
        w="33.33%"
      >
        <Button
          alignContent="center"
          alignItems="center"
          textAlign="center"
          mb="2"
          w={{ base: "14", md: "16", lg: "18", xl: "20" }}
          _hover={{ bg: "#DD6B20", color: "white" }}
          onClick={handleDelete}
        >
          Remove
        </Button>
        <Text fontSize={{ base: "6", md: "8", lg: "10", xl: "12" }}>
          (For deleting Click Two times)
        </Text>
        <Text
          mt="2"
          fontWeight="semibold"
          alignContent="center"
          alignItems="center"
          textAlign="center"
        >
          Subtotal : ₹ {subTotal}
        </Text>
      </Box>
    </Flex>
  );
};

export default CartItem;
