import Navbar from "../../../components/Navbar/navbar";
import LargeWithAppLinksAndSocial from "../../../components/Footer/footer/footer";
import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import {
  updateAddress,
  getProfile,
} from "../../../redux/actions/ProfileAction";
import { store, useAppDispatch, useAppSelector } from "../../../redux/store";
import { AddressType } from "../../../constants/ProfileTypo";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

const adress: AddressType = {
  street: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  social: "",
  email: "",
};
const Address = (props: Props) => {
  const [address, setAddress] = useState<AddressType>(adress);
  const toast = useToast();
  const [step, setStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(50);
  const { profile } = useAppSelector((store) => store.profileManager);
  const profileState = useAppSelector((store) => store.profileManager);
  const dispatch: any = useAppDispatch();
  const navigate = useNavigate();
  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch]);

  const addAddress = async () => {
    //id=profile[0].id
    dispatch(updateAddress(id, address));

    setTimeout(() => {
      setLocation();
    }, 2000);
  };

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const setLocation = () => {
    if (profileState.error) {
      toast({
        title: "Server Error.",
        description: "Check Your Server.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (profileState.loading === false && profileState.error === false) {
      navigate("/payment");
    }
  };

  return (
    <>
      <Navbar />

      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="xl"
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
        {
          <>
            {" "}
            <Heading
              color="white"
              bg={"teal.500"}
              borderRadius={"20px"}
              w="100%"
              textAlign={"center"}
              fontWeight="bold"
              mb="2%"
            >
              Shipping Address
            </Heading>
            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="street_address"
                fontSize="sm"
                color="teal.500"
                fontWeight="bold"
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
                  color="teal.500"
                  fontWeight="bold"
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
                  color="teal.500"
                  fontWeight="bold"
                  _dark={{
                    color: "gray.50",
                  }}
                  mt="2%"
                >
                  Country / Region
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
                  color="teal.500"
                  fontWeight="bold"
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
                  color="teal.500"
                  fontWeight="bold"
                  htmlFor="country"
                  fontSize="sm"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  State / Province
                </FormLabel>
                <Select
                  color="blue.500"
                  fontWeight="bold"
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
                  <option>Karnatka</option>
                  <option>Maharastra</option>
                  <option>Bihar</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi</option>
                  <option>Tamil Nadu</option>
                  <option>Jharkhand</option>
                  <option>Andhra Pradesh</option>
                  <option>West Bengal</option>
                  <option>Gujrat</option>
                  <option>Assam</option>
                </Select>
              </FormControl>
            </Flex>
          </>
        }
        <Button
          isLoading={profileState.loading}
          loadingText="Submitting"
          mt="5%"
          color="white"
          fontWeight="bold"
          colorScheme="blue"
          variant="solid"
          onClick={() => {
            addAddress();
          }}
        >
          Proceed To Payment
        </Button>
      </Box>

      <LargeWithAppLinksAndSocial />
    </>
  );
};

export default Address;
