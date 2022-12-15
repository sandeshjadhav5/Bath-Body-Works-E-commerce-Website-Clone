import {Heading,Text,Box,Image,SimpleGrid,Button} from '@chakra-ui/react'
const Home=()=>{
    return <>
        <Box width="90%" ml="100px">
  <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6577ea42/images/Christmas2022/ee325-soaps_c2_16x9.jpg?yocs=s_' alt='Dan Abramov' />
</Box>
<Box height="300px" bg="lightgray"  width="85%" margin="auto" mt="100px">
    <Heading pt="10px">TODAY`S TOP OFFERS</Heading>
<SimpleGrid columns={4} spacing={10} textAlign="centre" >
  <Box bg="white" height='180px'><Heading as="h6" color={'blue.900'} fontSize="2xl" >Today only!</Heading>
  <Text>All Hand Soaps</Text>
  <Heading as="h4" >$3.25</Heading>
  <Text>limit 20 with code :MORESUDS</Text>
  <Button bg="black" borderRadius={0} color="white" width="60%">SHOP</Button></Box>
  <Box bg='white' height='180px'></Box>
  <Box bg='white' height='180px'></Box>
  <Box bg='white' height='180px'></Box>
</SimpleGrid>
</Box>
<Box height="400px" mt="100px" width="85%" ml="100px">
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd1c59e9e/images/Christmas2022/cndl_holtrads-wb_c1_hm.gif?yocs=s_"></Image>
    <Image  pt="100px"src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw315b64eb/images/Christmas2022/bc_core-gifting_c2_hm.jpg?yocs=s_"></Image>
   <Heading pt="50px">SHOP BY CATEGORY</Heading>
    <SimpleGrid columns={6}spacing={10} pt="40px">
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_"></Image>
    <Text>Shop Body Care</Text>
  </Box>
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_"></Image>
  </Box>
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw31e8f9db/images/Christmas2022/diff_innovation_c1_vn.jpg?yocs=o_s_"></Image>
  </Box>
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_"></Image>
  </Box>
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_"></Image>
  </Box>
  <Box  height='180px'>
    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2fdbe2d9/xcat_stg-gift-sets_c1_vn.jpg?yocs=o_s_"></Image>
  </Box>
</SimpleGrid>

<Image pt="40px"src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_"></Image>

</Box>






    </>
}
export default Home