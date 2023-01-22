import { CheckIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box,  Divider, Flex,  Grid, GridItem, Heading, HStack, 
  Image,  Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure ,
 Button, FormControl, FormLabel,  Input, Modal, ModalBody, 
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, 
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCreditCard2FrontFill,BsGlobe2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ProductsTypo } from '../../../constants/ProductsTypo'
import { getProfile } from '../../../redux/actions/ProfileAction'
import { useAppDispatch, useAppSelector } from '../../../redux/store'


type userDetail = {
  firstName:string,
  lastName:string,
  mobile:number,
  email:string
}

const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
const [userDetails,setUserDetails]=useState<userDetail>({
  firstName:"",
  lastName:"",
  mobile:0,
  email:""
})
// console.log(userDetails)
const [finalData,setFinalData]=useState<userDetail>();

const dispatch:any = useAppDispatch()
const {profile}= useAppSelector((store)=>store.profileManager);

  useEffect(()=>{
    dispatch(getProfile("amaansidp@gmail.com","Aman!234"))
     },[dispatch])
let totalPrice:number=0;
 

const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
 const {name,value}=e.target;
 setUserDetails({...userDetails,[name]:value})
}
const saveUserDetails=()=>{
  setFinalData(userDetails);
}

  return (
    <Box w={{base:"full",md:"70%"}} m={"auto"}  p={{base:2,md:5}} mt="50" mb={"50"}
    boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
    <Heading borderRadius={10} bg="blue.500" p={2} color={"white"} mb={10}>Payment</Heading>
    
  <Grid
  templateRows={{base:"1fr 2fr 1fr 2fr", lg:"1fr 1fr 2fr"}}
  templateColumns={{base:"repeat(2, 1fr)",lg:'repeat(3, 1fr)'}}
  gap={4}
>
  
  <GridItem colSpan={2} rowSpan={1}
  boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
   borderRadius={10}>
    <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
      <Stack>
       <Text fontWeight={"bold"} color={"blue.500"}>Login <CheckIcon color={"green.500"}/></Text>
        <Stack><Text color={"ActiveBorder"} fontWeight={"bold"} fontSize={"xl"} fontStyle={"italic"}>
          {finalData?(finalData.firstName +" "+ finalData.lastName): profile[0]?.name}</Text>
        <Text><EmailIcon/> {finalData?(finalData.email): profile[0]?.email}</Text>
        <Text><PhoneIcon/> {finalData?(finalData.mobile): profile[0]?.mobile}</Text>
        </Stack>
      </Stack>
      

      {/* Change User Details-------------------------------------------------------------------- */}
      <>
        <Button colorScheme={"blue"} onClick={onOpen}>Change Details</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <HStack justifyContent={"center"}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input onChange={handleChange} name="firstName" ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input onChange={handleChange} name="lastName" placeholder='Last name' />
              </FormControl>
              </HStack>
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input onChange={handleChange} name="mobile" ref={initialRef} placeholder='Mobile Number' />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleChange} name="email" ref={initialRef} placeholder='Email' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={saveUserDetails}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      {/* --------------------------------------------------------------------------------------------> */}


    </Flex>
  </GridItem>
  <GridItem colSpan={{base:2,lg:1}} rowSpan={{base:1,lg:3}}  
  boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
  borderRadius={10}>
    <Stack>
      <Text p={2} color={"blue.500"} fontWeight={"bold"}>Your Order</Text>
      <Divider/>
      <Stack>
      { profile[0]?.cart?.map((item:ProductsTypo)=> {
        totalPrice+=item.price*item.qty
        return <Flex key={item.id} gap={5}>
          <Image src={item.images[0]} objectFit={"contain"} w={{base:"50px",md:"100px"}} h={{base:"50px",md:"100px"}} />
          <Box textAlign={"left"}>
            <Text fontWeight={"bold"}>{item.type+" "+item.category}</Text>
            <Text>Size:- {item.sizes}</Text>
            <Text>Price:- {item.price} x {item.qty}</Text>
            <Text color={"green.500"}>RS {item.price*item.qty}/-</Text> 
          </Box>
        </Flex>})}
        <Flex color={"white"} borderRadius={20} bg={"facebook.500"}  justifyContent={"center"} fontWeight={"bold"} gap={10}>
          <Text >Total Price</Text>
          <Text >RS {totalPrice}/-</Text>
        </Flex>
      </Stack>
    </Stack>
  </GridItem>
  <GridItem colSpan={2} rowSpan={1} 
  boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
  borderRadius={10} >
    <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
      <Stack>
        <Box>
          <Text fontWeight={"bold"} color={"blue.500"}>Shipping Address <CheckIcon color={"green.500"}/></Text>
          <Box w={"70%"} textAlign="left">
            {/* {/* {profile[0]?.location?.street+", "+profile[0]?.location?.city+", "+profile[0]?.location?.city */}
             {/* +", "+profile[0]?.location?.state+", "+profile[0]?.location?.country+", "+profile[0]?.location?.postal_code} */} 
          </Box>
        </Box>
      </Stack>
      <Link to={"/address"}><Button colorScheme={"blue"}>Change Address</Button></Link>
    </Flex>
  </GridItem>
  <GridItem colSpan={2} rowSpan={1} 
  boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
  borderRadius={10}>
  <Box h={10} p={2}><Text color={"blue.500"} fontWeight={"bold"}>Payment Method</Text></Box>
  <Divider  orientation="horizontal" />
  <Tabs size='md'>
  <TabList>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<BsCreditCard2FrontFill />}>
       Credit Card / Debit Card
    </Button>
    </Tab>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<Image objectFit={"contain"}
     borderRadius="10"  h={5}
     src='https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP'/>}>
       UPI
    </Button>
    </Tab>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<BsGlobe2 />}>
       Net Banking
    </Button>
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Stack p={"10"}>
      <FormLabel>Enter Card Number</FormLabel>
      <Input/>
      <HStack justifyContent={"space-between"}>
      <Box>
      <FormLabel>Valid Date</FormLabel>
      <Input
        placeholder="Select Date"
        size="md"
        type="date"/>
      </Box>
      <Box>
      <FormLabel>CVV</FormLabel>
      <Input/>
      </Box>
      </HStack>
      </Stack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>


    
    
    
  </GridItem>
</Grid>
</Box>
  )
}

export default Payment