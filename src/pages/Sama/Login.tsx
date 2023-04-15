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
import Navbar from "../../components/Navbar/navbar";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import {
  AdminLogin,
  AdminLogout,
  UserLogin,
  UserLogout,
  getProfile,
} from "../../redux/actions/ProfileAction";

const Login = () => {
  const toast = useToast();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: any = useAppDispatch();

  // const { adminAuth, auth } = useAppSelector((store) => store.profileManager);
  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:8080/profile");
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

          navigate("/");
        }
      });
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
      navigate("/admin");
    } else {
      handleLogin();
    }
  };

  const auths = getAuth();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auths, new GoogleAuthProvider())
      .then((res: any) => {
        console.log(res.user.uid);
        navigate("/");
      })
      .catch((err: any) => {
        console.log(err);
        setAuthing(false);
      });
  };

  const handleLogout = () => {
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
        <Navbar />
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
    <div>
      <Navbar />
      <Box
        pt={"140px"}
        h="auto"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Container
          mt="5%"
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                  Log in to your account
                </Heading>
                <HStack spacing="1" justify="center">
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
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button onClick={() => handleCheck()} variant="primary">
                    Sign in
                  </Button>
                  <HStack>
                    <Divider />
                    <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                      or continue with
                    </Text>
                    <Divider />
                  </HStack>
                  <Button
                    bgColor="gold"
                    onClick={() => signInWithGoogle()}
                    width="full"
                  >
                    <GoogleIcon />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
