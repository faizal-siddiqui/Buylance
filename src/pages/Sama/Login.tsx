import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleIcon } from "../../components/Login/ProviderIcons";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "../../components/Login/PasswordField";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "firebase/auth";
import { ProfileTypo } from "../../constants/ProfileTypo";
import UpdatedNavbar from "../../components/Navbar/UpdatedNavbar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Footer from "../../components/Footer/footer/footer";

import {
  AdminLogin,
  AdminLogout,
  UserLogin,
  UserLogout,
  getProfile,
  ChangeActiveStatus,
} from "../../redux/actions/ProfileAction";


const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setauth]= useState(false);
  const dispatch: any = useAppDispatch();

  // const { adminAuth, auth } = useAppSelector((store) => store.profileManager);
  const handleLogin = async () => {
    try {
      const res = await axios.get("https://buylance-com.onrender.com/profile");
      const data = await res.data;
      console.log(data);

      data.map((el: ProfileTypo) => {
        if (el.email === email && el.password === password) {
          dispatch(UserLogin());
          toast({
            title: "Logged In.",
            description: "You're Logged in Succefully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          dispatch(getProfile(el.id));
          localStorage.setItem("id", `${el.id}`);
          // console.log(localStorage.getItem("id"));
          dispatch(ChangeActiveStatus(Number(el.id), true));
          setauth(true);
          navigate("/");
      
        }
      });
      if(!auth){
        toast({
          title: "User not found !",
          description: "Please Signup !",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Signup Failed.",
        description: `${error}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleCheck = () => {
    if (email === "faizalsid123@gmail.com" && password === "Faizal@123") {
      localStorage.setItem("adminId", `16743830916890`);
      localStorage.setItem("id", `16743830916890`);
      dispatch(AdminLogin());
      toast({
        title: "Admin Logged In",
        description: "Hello Admin",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(getProfile(16743830916890));
      dispatch(ChangeActiveStatus(16743830916890, true));
      navigate("/admin");
    } else {
      handleLogin();
    }
  };

  // const auths = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(
      ChangeActiveStatus(
        Number(JSON.parse(localStorage.getItem("id") || "")),
        false
      )
    );
    dispatch(AdminLogout());
    dispatch(UserLogout());
    localStorage.clear();

    navigate("/login");
  };

  if (localStorage.getItem("adminId") || localStorage.getItem("id")) {
    return (
      <Box
        pt={"140px"}
        h="100vh"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <UpdatedNavbar />
        <Box w="fit-content" m="auto">
          <Box
            m="auto"
            onClick={handleLogout}
            as="button"
            p={4}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            Logout
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <UpdatedNavbar />
     
        <Container
          p="5px"
          mt={"50px"}
          mb={"50px"}
          w={{base:"xs", md:"md"}}
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          borderRadius={"20px"}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "md" ,lg:"2xl" }} color={"teal"}>
                  Login
                </Heading>
                <HStack spacing="1" justify="center"
                w={{base:"xs", sm:"sm", md:"md", lg:"lg"}}>
                  <Text color="muted">Don't have an account?</Text>
                  <Link to="/signup">
                    <Button variant="link" colorScheme="blue">
                      Sign up
                    </Button>
                  </Link>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={{ base: "transparent", sm: "bg-surface" }}
              boxShadow={{ base: "none" }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Stack direction={{base:"column",md:"row"}} gap={"10px"}>
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button textAlign={"left"} variant="link" colorScheme="blue" size="sm" w={"50%"}>
                    Forgot password?
                  </Button>
                </Stack>
                <Stack spacing="6">
                  <Button
                   onClick={() => handleCheck()}
                    _hover={{color:"black", bgColor:"blue.300"}} 
                    color={"white"} 
                    bgColor={"blue.500"}>
                    Login
                  </Button>
                  
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container> 
        <Footer/>
    </Box>
  );
};

export default Login;
