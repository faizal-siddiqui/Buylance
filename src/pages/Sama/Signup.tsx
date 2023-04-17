import {
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
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordField } from "../../components/Login/PasswordField";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postProfile } from "../../redux/actions/ProfileAction";
import { AddressType } from "../../constants/ProfileTypo";
import Navbar from "../../components/Navbar/navbar";

function Signup() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();
  const dispatch: any = useAppDispatch();
  const { loading, error, auth } = useAppSelector(
    (store) => store.profileManager
  );

  const handleSubmit = () => {
    dispatch(
      postProfile({
        id: Date.now(),
        name: fname + " " + lname,
        email: email,
        isActive: false,
        isAdmin: false,
        mobile: 0,
        gender: "",
        birthDate: "",
        location: {
          street: "",
          city: "",
          state: "",
          postal_code: "",
          country: "",
          mobile: "",
          name: "",
        },
        cardDetails: "",
        password: password,
        cart: [],
        orderedProducts: [],
      })
    );
    if (!loading) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login");
    }
    if (error) {
      toast({
        title: "Signup Failed.",
        description: "",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Box>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}
          borderRadius={"20px"}
          bg={useColorModeValue("white", "gray.700")}
          p={'50px'}
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          align={"center"}
          justify={"center"}
          mt="50px"
          >
           
              <Stack align={"center"}>
              <Heading color={'teal'} size={{ base: "md",lg:"2xl" }} textAlign={"center"}>
                Sign up
              </Heading>
              <Text fontSize={{ base: "md",lg:"lg" }} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
             </Stack>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        value={fname}
                        type="text"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        value={lname}
                        type="text"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <PasswordField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={handleSubmit}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{color:"black", bgColor:"blue.300"}} 
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user? <Link to="/login">
                      <Button variant={"link"} colorScheme="blue">Login</Button></Link>
                  </Text>
                </Stack>
              </Stack>
          </Stack>
      </Box>
    </div>
  );
}

export default Signup;
