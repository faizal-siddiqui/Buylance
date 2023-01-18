import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductsCard from "../../components/Products/ProductsCard";
import Pagination from "../../components/Products/Pagination";
import Filters from "../../components/Products/Filters";

import { BsSearch } from "react-icons/bs";

import { useSearchParams } from "react-router-dom";
import { useApi } from "../../components/Hooks/useApi";
import SkeletonLoading from "../../components/Products/SkeletonLoading";

type Props = {};

type FilterKey = {
  name: string | number;
  bool: boolean;
};

interface FilterObjType {
  [key: string]: FilterKey;
}

interface QueryObjType {
  [key: string]: string;
}

const getPageNumber = (page: string | null): number => {
  if (page == null) {
    return 1;
  } else if (!page) {
    return 1;
  }

  return Number(page);
};

const Products = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    Number(getPageNumber(searchParams.get("page")))
  );
  const [filterObj, setFilterObj] = useState<FilterObjType>({});
  const [queryObj, setQueryObj] = useState<QueryObjType>({});
  const [filterStr, setFilterStr] = useState<string>("");
  const [debounceText, setDebounceText] = useState<string>("");
  const [loading, error, data, apifn] = useApi();
  const toast = useToast();

  useEffect(() => {
    setSearchParams({
      q: `${debounceText}`,
      page: `${page}`,
      limit: `10`,
      ...queryObj,
    });
  }, [page, queryObj, debounceText]);

  useEffect(() => {
    const ids = setTimeout(() => {
      apifn({
        method: "get",
        url: `http://localhost:8080/products?q=${debounceText}&_page=${page}_limit=10`,
      });
    }, 1500);

    return () => {
      clearTimeout(ids);
    };
  }, [debounceText]);

  useEffect(() => {
    apifn({
      method: "get",
      url: `http://localhost:8080/products?_limit=10&_page=${page}${filterStr}`,
    });
  }, [page, filterStr]);

  const filterCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let obj: FilterObjType = {
      ...filterObj,
      [`${e.target.value}`]: { name: e.target.name, bool: e.target.checked },
    };
    let newObj: FilterObjType = {};
    let newStr: string = "";
    for (let key in obj) {
      if (obj[key].bool) {
        newObj[key] = {
          name: obj[key].name,
          bool: obj[key].bool,
        };
        newStr += `&${obj[key].name}=${key}`;
      }
    }

    let newQueryObj: QueryObjType = {};
    for (let key in newObj) {
      if (newQueryObj[newObj[key].name]) {
        newQueryObj[newObj[key].name] =
          newQueryObj[newObj[key].name] + "," + key;
      } else {
        newQueryObj[newObj[key].name] = key;
      }
    }

    setFilterObj(newObj);
    setFilterStr(newStr);
    setQueryObj(newQueryObj);
  };

  return (
    <Box mx={{ lg: "2%", md: "3%", sm: "4%" }}>
      <Box>
        <Flex align="center">
          <Text fontSize={"25px"} fontWeight={"bold"}>
            T-Shirts for Men -
          </Text>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            {data.length}
          </Text>
        </Flex>
      </Box>
      <Flex flexDir={{ lg: "row", md: "row", sm: "column" }}>
        <Box w={{ lg: "20%", md: "20%", sm: "100%" }} border="1px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      color="grey"
                      fontSize="17px"
                      fontWeight="500"
                      align="center"
                    >
                      <Text mr="35px">
                        <BsSearch />
                      </Text>
                      <Text ml="8px">Search</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text w="fit-content" ml="20px">
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDebounceText(e.target.value)
                    }
                    value={debounceText}
                    placeholder="Seach the products"
                  />
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Filters filterCheckBox={filterCheckBox} />
        </Box>
        <Box
          w={{ lg: "80%", md: "80%", sm: "100%" }}
          border="1px"
          borderColor="red"
        >
          {loading ? (
            <SkeletonLoading numbers={10} />
          ) : error ? (
            toast({
              title: "An Error occured",
              description: "Sorry for the inconvienience Try after some time",
              status: "error",
              position: "top",
              duration: 9000,
              isClosable: true,
            })
          ) : (
            <Box>
              <Grid
                templateColumns={{
                  lg: "repeat(4, 1fr)",
                  md: "repeat(3, 1fr)",
                  sm: "repeat(2, 1fr)",
                }}
                gap={{ lg: "30px", md: "20px", sm: "10px" }}
              >
                {data?.map((prod) => (
                  <GridItem
                    _hover={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    }}
                    border="1px"
                    borderColor="gray.300"
                    key={prod.id}
                  >
                    <ProductsCard prod={prod} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Flex>
      <Box my="40px">
        <Pagination currentPage={page} setPage={setPage} totalPages={4} />
      </Box>
    </Box>
  );
};

export default Products;

{
  /* <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      color="grey"
                      fontSize="17px"
                      fontWeight="500"
                      align="center"
                    >
                      <Text mr="35px">
                        <TbDiscount2 fontSize={"25px"} />
                      </Text>
                      <Text>Discount</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="20"
                    name="discount_lte"
                    onChange={filterCheckBox}
                  >
                    Below 20%
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="50"
                    name="discount_lte"
                    onChange={filterCheckBox}
                  >
                    Below 50%
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="90"
                    name="discount_lte"
                    onChange={filterCheckBox}
                  >
                    Below 90%
                  </Checkbox>
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      color="grey"
                      fontSize="17px"
                      fontWeight="500"
                      align="center"
                    >
                      <Text mr="35px">
                        <TbBrandSafari fontSize={"25px"} />
                      </Text>
                      <Text>Brand</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="HIGHLANDER"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    HIGHLANDER
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Louis Philippe Sport"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Louis Philippe Sport
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="HRX by Hrithik Roshan"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    HRX by Hrithik Roshan
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Huetrap"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Huetrap
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Roadster"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Roadster
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Urbano Fashion"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Urbano Fashion
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="WROGN"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    WROGN
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox value="H&M" name="brand" onChange={filterCheckBox}>
                    H&M
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="t-base"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    t-base
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Bewakoof"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Bewakoof
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Rodzen"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Rodzen
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="Nautica"
                    name="brand"
                    onChange={filterCheckBox}
                  >
                    Nautica
                  </Checkbox>
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex
                      color="grey"
                      fontSize="17px"
                      fontWeight="500"
                      align="center"
                    >
                      <Text mr="35px">
                        <GiTakeMyMoney fontSize={"25px"} />
                      </Text>
                      <Text>Price</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="500"
                    name="price_lte"
                    onChange={filterCheckBox}
                  >
                    Below 500
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="1000"
                    name="price_lte"
                    onChange={filterCheckBox}
                  >
                    Below 1000
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="1500"
                    name="price_lte"
                    onChange={filterCheckBox}
                  >
                    Below 1500
                  </Checkbox>
                </Text>
                <Text w="fit-content" ml="20px">
                  <Checkbox
                    value="1501"
                    name="price_gte"
                    onChange={filterCheckBox}
                  >
                    Abovw 1500
                  </Checkbox>
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */
}
