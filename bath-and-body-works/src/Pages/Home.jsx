import {Heading,Text,Box,Image,SimpleGrid,Button, Container, flexbox} from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


 const Caro=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return<Box>
    <Box width="85%" margin="auto" >
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6577ea42/images/Christmas2022/ee325-soaps_c2_16x9.jpg?yocs=s_" />

  </Box>
      <Box mt="30px">
        <Heading>TODAY`S TOP OFFERS</Heading>
            <Carousel responsive={responsive} arrows="false">
            <Box bg='white' height='190px'  mt="30px">
    <Heading fontSize="20px" color="blue" mt="5px">Today only!</Heading>
    <Text mt="6px">All Single Wick Candles</Text>
    <Text>$5.95</Text>
    <Text fontSize="15px" textAlign="left" ml="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="5px">SHOP</Button>
  </Box>
  
  <Box bg='white' height='190px' mt="30px">
  <Heading fontSize="20px" color="blue" mt="5px">Limited Time only !</Heading>
    <Text textAlign="left" mt="15px" ml="22px">$35 with any$30purchase</Text>
    <Text fontSize="15px" textAlign="left" ml="20px" mt="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>

  <Box bg='white' height='170px' justifyContent="center" pt="50px"  mt="30px"  >
    <Text>All Hand Soaps</Text>
    <Text>$3.50</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>
 
  <Box bg='white' height='170px' mt="80px">
  <Text textAlign="left" mt="15px" ml="22px">$35 with any$30purchase</Text>
    <Text fontSize="15px" textAlign="left" ml="20px" mt="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>
  <Box bg='white' height='190px'mt="30px" >
    <Heading fontSize="20px" color="blue" mt="5px">Today only!</Heading>
    <Text mt="6px">All Single Wick Candles</Text>
    <Text>$5.95</Text>
    <Text fontSize="15px" textAlign="left" ml="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="5px">SHOP</Button>
  </Box>
  
  <Box bg='white' height='190px' mt="30px">
  <Heading fontSize="20px" color="blue" mt="5px">Limited Time only !</Heading>
    <Text textAlign="left" mt="15px" ml="22px">$35 with any$30purchase</Text>
    <Text fontSize="15px" textAlign="left" ml="20px" mt="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>

  <Box bg='white' height='170px' justifyContent="center" pt="50px"  mt="30px"  >
    <Text>All Hand Soaps</Text>
    <Text>$3.50</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>

  <Box bg='white' height='170px' mt="70px">
  <Text textAlign="left" mt="15px" ml="22px">$35 with any$30purchase</Text>
    <Text fontSize="15px" textAlign="left" ml="20px" mt="10px">Limit 20 with code:ADORABLE</Text>
    <Button  bg="blackAlpha.800" color="white" borderRadius="0" mt="15px">SHOP</Button>
  </Box>
            
    
            </Carousel>
        </Box>
        <Box width="85%" ml="100px" mt="50px" >
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd1c59e9e/images/Christmas2022/cndl_holtrads-wb_c1_hm.gif?yocs=s_" />
  
    </Box>
    <Box width="85%" mt="40px" ml="100px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw315b64eb/images/Christmas2022/bc_core-gifting_c2_hm.jpg?yocs=s_" />
    </Box>
    <Box mt="100px">
    <SimpleGrid columns={6} spacing={10} width="85%" ml="100px">
    <Box  height='80px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_" />
    </Box>
    <Box  height='180px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_" />
    </Box>
    <Box  height='180px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw31e8f9db/images/Christmas2022/diff_innovation_c1_vn.jpg?yocs=o_s_" />
    </Box>
    <Box  height='180px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_" />
    </Box>
    <Box  height='180px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_" />
    </Box>
    <Box  height='180px'>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2fdbe2d9/xcat_stg-gift-sets_c1_vn.jpg?yocs=o_s_" />
    </Box>
  </SimpleGrid>
    </Box>
    <Box width="85%" mt="30px"ml="100px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_" />
    </Box>
  
    <Box height="300px" width="80%" ml="130px">
    <SimpleGrid columns={5} spacing={10} mt="30px">
    <Button  height='55px'color="white" bg="blackAlpha.800" borderRadius={0}>STOCKING STUFFERS</Button>
    <Button  height='55px'color="white" bg="blackAlpha.800" borderRadius={0}>GIFT SETS</Button>
    <Button  height='55px'color="white" bg="blackAlpha.800" borderRadius={0}>GIFTS UNDER $15</Button>
    <Button  height='55px'color="white" bg="blackAlpha.800" borderRadius={0}>GIFTS FOR HER</Button>
    <Button  height='55px'color="white" bg="blackAlpha.800" borderRadius={0}>GIFTS FOR HIM</Button>
    
  </SimpleGrid>
  <Box>
  <Button mt="30px" height='55px'color="white"  bg="blackAlpha.800" borderRadius={0}>GIFT CARDS</Button>
  </Box>
  
  
    </Box>
    <Box  width="85%" ml="100px" >
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw481d974e/images/Fall2022/xcat_moxy-launch_fa3_gh.gif?yocs=s_" />
    </Box>
    <Box mt="20px">
    <SimpleGrid columns={5} spacing={10} mt="30px" ml="550px">
    <Button  height='50px'color="white" bg="blackAlpha.800" borderRadius={0}>LEARN MORE</Button>
    <Button  height='50px'color="white" bg="blackAlpha.800" borderRadius={0}>SHOP MOXY</Button>
  
  </SimpleGrid>
    
    </Box>
    <Box mt="30px">
      <Heading>MORE GOOD THINGS,THIS WAY</Heading>
    <SimpleGrid columns={6} spacing={10} width="85%" ml="100px" mt="30px">
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_" />
      <Text>join the VIPs</Text>
  
    </Box>
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwae0faf07/images/Christmas2022/xcat_bopisgeneric_c1_vn.png?yocs=o_s_" />
      <Text>Shop your way</Text>
    </Box>
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_" />
      <Text >Sign up for text</Text>
    </Box>
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_" />
  
      <Text>Sign up for emails</Text>
    </Box>
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_" />
      <Text>check out Auto Refresh</Text>
    </Box>
    <Box  height='200px' pt="20px">
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_" />
      <Text>See Return Policy for details and conditions
  </Text>
    </Box>
  </SimpleGrid>
    </Box>
    <Box mt="50px" justifyContent="left">
    <SimpleGrid columns={3} >
    <Box  height='80px'> <hr></hr></Box>
    <Box  height='80px'><Text>@BATHANDBODYWORKS</Text></Box>
    <Box  height='80px'><hr></hr></Box>
    
  </SimpleGrid>
    </Box>
    <Box>
    <SimpleGrid columns={4} spacing={10} width="85%" ml="100px" mt="100px">
    <Box  height='280px'>
      <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcxMDQ4MDgwLjE2Mjc1MTQyNDQ2Ny5qcGVn.jpg?w=640&h=640&fit=cover" />
    </Box>
    <Box  height='280px'>
      <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcxMDMwMzg3LjI2MjU1MDQyNTI5MS5qcGVn.jpg?w=640&h=640&fit=cover" />
  
    </Box>
    <Box  height='280px'>
      <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcwOTYxNjgyLjg3OTUxNTQ0NDg1Ni5qcGVn.jpg?w=640&h=640&fit=cover"/>
    </Box>
    <Box  height='280px'>
      <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcwOTQzNzA3LjQ0NTgwOTY4NDUzMC5qcGVn.jpg?w=640&h=640&fit=cover" />
    </Box>
    
  </SimpleGrid>
    </Box>
  
    <Box  height="200px" width="85%" ml="100px" mt="30px">
      <Heading>Bath & Body Works</Heading>
      <Text mt="30px">Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect something special a happy-memory-making experience. Searching for new seasonal creations or your favorite discontinued scents? We’ve got you covered there, too. Oh! And while you're browsing, shop our latest & greatest selection of lotions, soaps and candles!</Text>
    </Box>
        
        
        
        </Box>
        
      
       
    
}
export default Caro;