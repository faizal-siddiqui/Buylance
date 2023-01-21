import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { BsCreditCard2FrontFill } from 'react-icons/bs'

type Props = {}

const Payment = (props: Props) => {
  return (
    <Box w={{base:"full",md:"70%"}} m={"auto"}  p={{base:2,md:10}} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <Grid
  templateRows={{base:"repeat(5, 1fr)", lg:'repeat(4, 1fr)'}}
  templateColumns={{base:"repeat(2, 1fr)",lg:'repeat(3, 1fr)'}}
  gap={4}
>
  <GridItem colSpan={3} rowSpan={1}><Heading color={"gray.600"}>Payment</Heading></GridItem>
  <GridItem colSpan={2} rowSpan={1} outline="1px solid gray" borderRadius={10}>
    <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
      <Stack>
        <HStack fontWeight={"bold"}><Text>Login</Text><CheckIcon color={"green.500"}/></HStack>
        <HStack><Text>Avinash</Text><Text>+91 7788994455</Text></HStack>
      </Stack>
      <Button>Change</Button>
    </Flex>
  </GridItem>
  <GridItem colSpan={{base:2,lg:1}} rowSpan={{base:1,lg:3}}  outline="1px solid gray" borderRadius={10}>
    <Stack>
      <Text fontWeight={"bold"}>Your Order</Text>
      <Divider/>
      <Box>
        <Flex gap={5}>
          <Image/>
          <Box textAlign={"left"}>
            <Text fontWeight={"bold"}>Products name</Text>
            <Text>size</Text>
            <Text>Price & qty</Text> 
          </Box>
        </Flex>
      </Box>
    </Stack>
  </GridItem>
  <GridItem colSpan={2} rowSpan={1} outline="1px solid gray" borderRadius={10} >
    <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
      <Stack>
        <Box>
          <HStack fontWeight={"bold"}><Text>Shipping Address</Text><CheckIcon color={"green.500"}/></HStack>
          <Box w={"70%"} textAlign="left">Shitalpur, Sitakund Road, Munger, Bihar, India, 811201</Box>
        </Box>
      </Stack>
      <Button>Change</Button>
    </Flex>
  </GridItem>
  <GridItem colSpan={2} rowSpan={1} outline="1px solid gray" borderRadius={10}>
  <Text fontWeight={"bold"}>Payment Method</Text>
    <Divider/>
  <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<BsCreditCard2FrontFill />}>
       Credit Card / Debit Card
    </Button>
    </Tab>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<BsCreditCard2FrontFill />}>
       Credit Card / Debit Card
    </Button>
    </Tab>
    <Tab>
    <Button colorScheme='facebook' leftIcon={<BsCreditCard2FrontFill />}>
       Credit Card / Debit Card
    </Button>
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>


    
    
    <Stack>
      <FormLabel>Enter Card Number</FormLabel>
      <Input/>
      <HStack>
      <FormLabel>Valid Date</FormLabel>
      <Input/>
      <FormLabel>CVV</FormLabel>
      <Input/>
      </HStack>
    </Stack>
  </GridItem>
</Grid>
</Box>
  )
}

export default Payment