import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";
import { patchOrderedProducts } from "../../redux/actions/ProfileAction";
import { useAppDispatch } from "../../redux/store";
 
type Props = {
  profile: ProfileTypo;
};

const UsersAccordion = ({ profile }: Props) => {
  const dispatch: any = useAppDispatch();
  const toggleDeliveryStatus = (
    profileId: number,
    OrderedProductsId: number
  ) => {
    let newOrderedProducts = profile?.orderedProducts?.map((el) => {
      if (el.id === OrderedProductsId) {
        el.delivered = true;
      }
      return el;
    });

    dispatch(patchOrderedProducts(profileId, newOrderedProducts));
  };

  const totalPriceCalc = (arr: ProductsTypo[]) => {
    return arr.reduce((acc: number, el: ProductsTypo) => acc + el.price, 0);
  };

  const CircleIcon = (props: { boxSize: number; color: string }) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <AccordionItem>
      <h2>
        <AccordionButton bgColor="#fff" p="4" _expanded={{ bg: "cyan.400", color: "white" }}>
          <Box as="span" flex="1" textAlign="left">
            <Grid
              templateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
              }}
            >
              <GridItem>
                <Text>{profile.name}</Text>
              </GridItem>
              <GridItem>
                <Text>{profile.email}</Text>
              </GridItem>
              <GridItem>
                <Text>{profile.mobile}</Text>
              </GridItem>
              <GridItem>
                {/* <Text>
                  {profile.active ? (
                    <CircleIcon boxSize={8} color="green" />
                  ) : (
                    <CircleIcon boxSize={8} color="red.500" />
                  )}
                </Text> */}
              </GridItem>
            </Grid>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Tabs>
          <TabList>
            <Tab>Cart Products</Tab>
            <Tab>Ordered Products</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table variant="striped" colorScheme="cyan">
                  <Thead>
                    <Tr>
                      <Th>Image</Th>
                      <Th>Name</Th>
                      <Th>Qty</Th>
                      <Th>Size</Th>
                      <Th isNumeric>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {profile?.cart?.map((el) => {
                      return (
                        <Tr key={el.id}>
                          <Td>
                            <Image
                              w="40px"
                              src={el.images[0]}
                              alt={el.images[0]}
                            />
                          </Td>
                          <Td>{el.name}</Td>
                          <Td>{el.qty}</Td>
                          <Td>{el.sizes}</Td>
                          <Td isNumeric>₹ {el.price}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Image</Th>
                      <Th>Name</Th>
                      <Th>Qty</Th>
                      {/* <Th>Size</Th> */}
                      <Th isNumeric>Price</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {profile?.orderedProducts?.map((el) => {
                      return (
                        <Tr key={el.id}>
                          <Td>
                            <Image
                              w="40px"
                              src={el.images[0]}
                              alt={el.images[0]}
                            />
                          </Td>
                          <Td>{el.name}</Td>
                          <Td>{el.qty}</Td>
                          {/* <Td>{el.sizes}</Td> */}
                          <Td isNumeric>{el.price}</Td>
                          <Td>
                            <Button
                              isDisabled={el.delivered}
                              onClick={() =>
                                toggleDeliveryStatus(profile.id, el.id)
                              }
                              colorScheme="blue"
                              variant="outline"
                            >
                              {el.delivered ? "Delivered" : "Pending"}
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th fontSize="18px">Total Price</Th>
                      <Th></Th>
                      {/* <Th></Th> */}
                      <Th></Th>
                      <Th fontSize="18px" color="green" isNumeric>
                        ₹ {totalPriceCalc(profile?.orderedProducts)}
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default UsersAccordion;
