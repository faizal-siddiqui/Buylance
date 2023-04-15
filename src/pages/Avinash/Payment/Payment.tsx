import { CheckIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsCreditCard2FrontFill, BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar";
import { ProductsTypo } from "../../../constants/ProductsTypo";
import {
  getProfile,
  patchOrderedProducts,
  updateCart,
} from "../../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

// type userDetail = {
//   firstName:string,
//   lastName:string,
//   mobile:number,
//   email:string
// }

type AccountDetails = {
  card: number;
  UPI: string;
  userName: string;
  password: string;
};

const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentLoad, setPaymentLoad] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);
  const initialRef = React.useRef(null);

  const [modalValue, setModalValue] = useState<string>("");
  // const [userDetails,setUserDetails]=useState<userDetail>({
  //   firstName:"",
  //   lastName:"",
  //   mobile:0,
  //   email:""
  // })

  let id: number = Number(JSON.parse(localStorage.getItem("id") || ""));
  const [accountDetails, setAccountDetails] = useState<AccountDetails>({
    card: 0,
    UPI: "",
    userName: "",
    password: "",
  });

  const handleModalClick = (val: string) => {
    setModalValue(val);
    onOpen();
  };

  // console.log(userDetails)
  //const [finalData,setFinalData]=useState<userDetail>();

  const dispatch: any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch]);
  let totalPrice: number = 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const triggerPayment = () => {
    setPaymentLoad(true);
    setTimeout(() => {
      setPaymentLoad(false);
      setPaymentStatus(true);
    }, 2000);
    dispatch(patchOrderedProducts(id, profile[0].cart));
    dispatch(updateCart(id, []));
    onClose();
  };

  const btnValue: string[] = ["Debit Card", "UPI", "Net Banking"];

  if (paymentStatus) {
    return (
      <>
        <Box w={{ base: "100%", md: "50%" }} m="auto">
          <Heading color={"green.500"}>Products Ordered</Heading>
          <Image
            h={100}
            w={100}
            objectFit="contain"
            src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08.gif"
          />
          <Link to={"/"}>
            <Button>Go To Home</Button>
          </Link>
        </Box>
      </>
    );
  }
  if (paymentLoad) {
    return (
      <>
        <Box w={{ base: "100%", md: "50%" }} m="auto">
          <Image
            h={100}
            w={100}
            objectFit="contain"
            src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
          />
        </Box>
      </>
    );
  }
  return (
    <Box
      w={{ base: "full", lg: "75%" }}
      m={"auto"}
      mt={"50px"}
      mb="50px"
      borderRadius={10}
    >
      <Navbar />
      <Heading borderRadius={10} bg="blue.500" p={2} color={"white"} mb={10}>
        Payment
      </Heading>

      <Grid
        templateRows={{ base: "1fr 2fr 1fr 1fr", lg: "repeat(3,1fr)" }}
        templateColumns={{ base: "100%", md: "100%", lg: "repeat(3, 1fr)" }}
        gap={2}
      >
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          rowSpan={1}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Stack p={5} color={"gray.500"}>
            <Text fontWeight={"bold"} color={"blue.500"}>
              Login <CheckIcon color={"green.500"} />
            </Text>
            <Stack>
              <Text
                color={"ActiveBorder"}
                fontWeight={"bold"}
                fontSize={"xl"}
                fontStyle={"italic"}
              >
                {profile[0]?.name}
              </Text>
              <Text>
                <EmailIcon /> {profile[0]?.email}
              </Text>
              <Text>
                <PhoneIcon /> {profile[0]?.mobile}
              </Text>
            </Stack>
          </Stack>
          {/* --------------------------------------------------------------------------------------------> */}
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 1 }}
          rowSpan={{ base: 1, lg: 3 }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Stack>
            <Text p={2} color={"blue.500"} fontWeight={"bold"}>
              Your Order
            </Text>
            <Divider />
            <Stack>
              {profile[0]?.cart?.map((item: ProductsTypo) => {
                totalPrice += item.price * item.qty;
                return (
                  <Flex key={item.id} gap={5}>
                    <Image
                      src={item.images[0]}
                      objectFit={"contain"}
                      w={{ base: "50px", md: "100px" }}
                      h={{ base: "50px", md: "100px" }}
                    />
                    <Box textAlign={"left"}>
                      <Text fontWeight={"bold"}>
                        {item.type + " " + item.category}
                      </Text>
                      <Text>Size:- {item.sizes}</Text>
                      <Text>
                        Price:- {item.price} x {item.qty}
                      </Text>
                      <Text color={"green.500"}>
                        RS {item.price * item.qty}/-
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
              <Box p={5}>
                <Flex
                  m={"auto"}
                  color={"white"}
                  borderRadius={20}
                  bg={"facebook.500"}
                  justifyContent={"center"}
                  fontWeight={"bold"}
                  gap={10}
                >
                  <Text>Total Price</Text>
                  <Text>RS {totalPrice}/-</Text>
                </Flex>
              </Box>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          rowSpan={1}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Flex color={"gray.500"} justifyContent={"space-between"} p={5}>
            <Stack>
              <Box>
                <Text fontWeight={"bold"} color={"blue.500"}>
                  Shipping Address <CheckIcon color={"green.500"} />
                </Text>
                <Box w={"70%"} textAlign="left">
                  {/* {/* {profile[0]?.location?.street+", "+profile[0]?.location?.city+", "+profile[0]?.location?.city */}
                  {/* +", "+profile[0]?.location?.state+", "+profile[0]?.location?.country+", "+profile[0]?.location?.postal_code} */}
                </Box>
              </Box>
            </Stack>
            <Link to={"/address"}>
              <Button colorScheme={"blue"}>Change Address</Button>
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          rowSpan={1}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          borderRadius={10}
        >
          <Box h={10} p={2}>
            <Text color={"blue.500"} fontWeight={"bold"}>
              Payment Method
            </Text>
          </Box>
          <Divider orientation="horizontal" />
          <Stack direction={{ sm: "column", md: "row" }}>
            {btnValue.map((val) => (
              <Button
                colorScheme="facebook"
                size={{ base: "xs", md: "sm", lg: "md" }}
                onClick={() => handleModalClick(val)}
                leftIcon={
                  val === "Debit Card" ? (
                    <BsCreditCard2FrontFill />
                  ) : val === "UPI" ? (
                    <Image
                      objectFit={"contain"}
                      borderRadius="10"
                      h={5}
                      src="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"
                    />
                  ) : (
                    <BsGlobe2 />
                  )
                }
                key={val}
                m={10}
              >
                {val}
              </Button>
            ))}
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              {modalValue === "Debit Card" && (
                <ModalContent>
                  <ModalHeader>Card Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Enter Card Number</FormLabel>
                      <Input
                        name="card"
                        onChange={handleChange}
                        ref={initialRef}
                        placeholder="Card Number"
                      />
                    </FormControl>
                    <HStack justifyContent={"space-between"}>
                      <FormControl mt={4}>
                        <FormLabel>Valid Date</FormLabel>
                        <Input
                          ref={initialRef}
                          placeholder="Select Date"
                          size="md"
                          type="date"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>CVV</FormLabel>
                        <Input ref={initialRef} />
                      </FormControl>
                    </HStack>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={triggerPayment} colorScheme="blue" mr={3}>
                      Pay {totalPrice}/-
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              )}

              {modalValue === "UPI" && (
                <ModalContent>
                  <ModalHeader>Verify UPI ID</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Enter UPI ID</FormLabel>
                      <Input
                        name="UPI"
                        onChange={handleChange}
                        ref={initialRef}
                        placeholder="Card Number"
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={onOpen} colorScheme="blue" mr={3}>
                      Verify
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              )}

              {modalValue === "Net Banking" && (
                <ModalContent>
                  <ModalHeader>Login Your Bank Account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Enter User Name</FormLabel>
                      <Input
                        name="userName"
                        onChange={handleChange}
                        ref={initialRef}
                        placeholder="User Name"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        name="password"
                        onChange={handleChange}
                        ref={initialRef}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={onOpen} colorScheme="blue" mr={3}>
                      Login
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              )}
            </Modal>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Payment;
