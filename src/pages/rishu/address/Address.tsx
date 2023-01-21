import Navbar from "../../../components/Navbar/navbar";
import LargeWithAppLinksAndSocial from "../../../components/Footer/footer/footer";
import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
 
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { updateAddress } from "../../../redux/actions/ProfileAction";
import { store, useAppDispatch, useAppSelector } from "../../../redux/store";
import { AddressType } from "../../../constants/ProfileTypo";
import { Link } from "react-router-dom";
type Props = {

};



const adress:AddressType={
  street: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  social:"",
  email:""
}
const Address = (props: Props) => {
  const [address, setAddress] = useState<AddressType>(adress);
  const toast = useToast();
  const [step, setStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(50);
  const {profile}= useAppSelector((store)=>store.profileManager);
  const dispatch:any= useAppDispatch();

  const addAddress = () =>{
    let id:number=2;
    //id=profile[0].id
    dispatch(updateAddress(id,address))
  }

  const handleChange = (e: { target: { value: string, name: string } }) =>{
    const {name,value}=e.target;
    setAddress({...address,[name]:value})
  }

  
  return (
    <>
      <Navbar />

      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="sm"
        maxWidth={800}
        p={6}
        m="50px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ?<> <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          User Details
        </Heading>
  
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Street address
          </FormLabel>
          <Input
            type="text"
            name="street"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleChange}
          />
        </FormControl>
  
        <Flex alignItems={"center"} gap="15px" mt={"15px"}>
          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
            <FormLabel
              htmlFor="city"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
              mt="2%"
            >
              City
            </FormLabel>
            <Input
              type="text"
              name="city"
              id="city"
              autoComplete="city"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              htmlFor="state"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
              mt="2%"
            >
              State / Province
            </FormLabel>
            <Input
              type="text"
              name="state"
              id="state"
              autoComplete="state"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
  
        <Flex alignItems={"center"} gap="15px" mt={"15px"}>
          <FormControl>
            <FormLabel
              htmlFor="postal_code"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              ZIP / Postal
            </FormLabel>
            <Input
              type="text"
              name="postal_code"
              id="postal_code"
              autoComplete="postal-code"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Country / Region
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
          </FormControl>
        </Flex>
        </>
         :
         <>
         <Heading w="100%" textAlign={"center"} fontWeight="normal">
          Social Handles
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: "gray.800",
                }}
                color="gray.500"
                rounded="md"
              >
                http://
              </InputLeftAddon>
              <Input
                name="social"
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="email" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              About
            </FormLabel>
            <Textarea
              placeholder="you@example.com"
              name="email"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: "sm", 
              }}
              onChange={handleChange}
            />
            <FormHelperText>
              Brief description for your profile. URLs are hyperlinked.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
        </>
        
        }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Link to={"/payment"}><Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  addAddress()
                }}
              >
                Submit
              </Button>
              </Link>

            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>

      <LargeWithAppLinksAndSocial />
    </>
  );
};

export default Address;
