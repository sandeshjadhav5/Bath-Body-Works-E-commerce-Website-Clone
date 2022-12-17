import React from "react";
import axios from "axios";
import SimpleSidebar from "../Components/Sidebar";
import { useRef } from "react";
import {
  Heading,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState({});
  const apiKey = `5a4693ba7a98dbdd237c153b5f6ab2e6`;
  const imageRef = useRef("");

  //console.log(name, category, price);
  const handleSubmit = () => {
    const productData = {
      name: name,
      category: category,
      price: Number(price),
      image: img_url,
    };

    axios
      .post(
        `https://database-bath-body-works-vercel.vercel.app/products`,
        productData
      )
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setName("");
    setCategory("");
    setPrice("");
  };
  let img_url;
  async function handleImage(event) {
    let actual_image = imageRef.current.files[0];
    console.log("actualImage-->", actual_image);
    let form = new FormData();

    form.append("image", actual_image);
    console.log("form--->", form);
    try {
      let res = await fetch(`https://api.imgbb.com/1/upload?&key=${apiKey}`, {
        method: "POST",
        body: form,
      });
      let data = await res.json();
      console.log("data:", data);
      img_url = data.data.display_url;
      console.log("imgUrl is", img_url);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Box display="flex">
        <Box w="18%">
          <SimpleSidebar />
        </Box>
        <Box w="82%">
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Add Products
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Add Products To The Database
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Product Name</FormLabel>
                      <Input
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel>Product Category</FormLabel>
                      <Input
                        value={category}
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </FormControl>
                  </Box>

                  <FormControl isRequired>
                    <FormLabel>Product Price</FormLabel>
                    <Input
                      value={price}
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Product Image</FormLabel>
                    <InputGroup>
                      <Input
                        type="file"
                        onChange={handleImage}
                        ref={imageRef}
                      />
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Adding"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={handleSubmit}
                    >
                      ADD
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default AddProducts;
