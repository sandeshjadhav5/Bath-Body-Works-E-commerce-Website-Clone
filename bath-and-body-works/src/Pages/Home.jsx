import {
  Heading,
  Text,
  Box,
  Image,
  SimpleGrid,
  Button,
  Container,
  flexbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
import Navbar from "../Components/Navbar";
const Caro = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Navbar />
      <Box width="85%" margin="auto">
        <Link to="/products">
          <Image
            mt="25"
            src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2048bf51/AIA%2049.jpg"
          />
        </Link>
      </Box>
      <Box mt="30" w="80%" m="auto">
        <Heading mt="20" mb="10">
          TODAY`S TOP OFFERS
        </Heading>
        <Carousel responsive={responsive} arrows="false">
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px">Limit 20 with code:ADORABLE</Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
          <Box bg="white" height="190px" mt="30px">
            <Heading fontSize="20" color="blue" mt="5px">
              Today only !
            </Heading>
            <Text mt="6px">All Single Wick Candles</Text>
            <Text>$5.95</Text>
            <Text fontSize="15px" textAlign="center">
              Limit 20 with code:ADORABLE
            </Text>
            <Button
              bg="blackAlpha.800"
              color="white"
              borderRadius="0"
              mt="5px"
              _hover={{
                background: "blue.100",
                color: "black",
                borderRadius: "4",
              }}
            >
              SHOP
            </Button>
          </Box>
        </Carousel>
      </Box>
      <Box width="85%" margin="auto" mt="20">
        <Image src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7a2c6461/AIA%2047.jpg" />
      </Box>
      <Box width="85%" margin="auto" mt="20">
        <Image src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd9839e4b/AIA%2046.jpg" />
      </Box>
      <SimpleGrid minChildWidth="160px" width="85%" margin="auto">
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_" />
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_" />
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw31e8f9db/images/Christmas2022/diff_innovation_c1_vn.jpg?yocs=o_s_" />
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_" />
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_" />
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2fdbe2d9/xcat_stg-gift-sets_c1_vn.jpg?yocs=o_s_" />
        </Box>
      </SimpleGrid>

      <Box width="85%" margin="auto" mt="30">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_" />
      </Box>

      <SimpleGrid
        minChildWidth="160px"
        width="85%"
        margin="auto"
        mt="30px"
        mb="30px"
      >
        <Button
          height="55px"
          color="white"
          bg="blackAlpha.800"
          borderRadius={0}
        >
          STOCKING STUFFERS
        </Button>
        <Button
          height="55px"
          color="white"
          bg="blackAlpha.800"
          borderRadius={0}
        >
          GIFT SETS
        </Button>
        <Button
          height="55px"
          color="white"
          bg="blackAlpha.800"
          borderRadius={0}
        >
          GIFTS UNDER $15
        </Button>
        <Button
          height="55px"
          color="white"
          bg="blackAlpha.800"
          borderRadius={0}
        >
          GIFTS FOR HER
        </Button>
        <Button
          height="55px"
          color="white"
          bg="blackAlpha.800"
          borderRadius={0}
        >
          GIFTS FOR HIM
        </Button>
      </SimpleGrid>

      <Box width="85%" margin="auto">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw481d974e/images/Fall2022/xcat_moxy-launch_fa3_gh.gif?yocs=s_" />
      </Box>

      <Heading mt="20">MORE GOOD THINGS,THIS WAY</Heading>
      <SimpleGrid margin="auto" minChildWidth="160px" width="85%" mt="30px">
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_" />
          <Text>join the VIPs</Text>
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwae0faf07/images/Christmas2022/xcat_bopisgeneric_c1_vn.png?yocs=o_s_" />
          <Text>Shop your way</Text>
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_" />
          <Text>Sign up for text</Text>
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_" />

          <Text>Sign up for emails</Text>
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_" />
          <Text>check out Auto Refresh</Text>
        </Box>
        <Box>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_" />
          <Text>See Return Policy for details and conditions</Text>
        </Box>
      </SimpleGrid>

      <Box mt="20">
        <Text>@BATHANDBODYWORKS</Text>
      </Box>
      <SimpleGrid
        margin="auto"
        gap="10"
        minChildWidth="160px"
        width="85%"
        mt="100px"
      >
        <Box>
          <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcxMDQ4MDgwLjE2Mjc1MTQyNDQ2Ny5qcGVn.jpg?w=640&h=640&fit=cover" />
        </Box>
        <Box>
          <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcxMDMwMzg3LjI2MjU1MDQyNTI5MS5qcGVn.jpg?w=640&h=640&fit=cover" />
        </Box>
        <Box>
          <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcwOTYxNjgyLjg3OTUxNTQ0NDg1Ni5qcGVn.jpg?w=640&h=640&fit=cover" />
        </Box>
        <Box>
          <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcwOTQzNzA3LjQ0NTgwOTY4NDUzMC5qcGVn.jpg?w=640&h=640&fit=cover" />
        </Box>
      </SimpleGrid>

      <Box width="85%" m="auto" mt="30px" mb="30px">
        <Heading>Bath & Body Works</Heading>
        <Text mt="30px">
          Bath and Body Works is your go-to place for gifts & goodies that
          surprise & delight. From fresh fragrances to soothing skin care, we
          make finding your perfect something special a happy-memory-making
          experience. Searching for new seasonal creations or your favorite
          discontinued scents? We’ve got you covered there, too. Oh! And while
          you're browsing, shop our latest & greatest selection of lotions,
          soaps and candles!
        </Text>
      </Box>
      <Footer />
    </Box>
  );
};
export default Caro;
