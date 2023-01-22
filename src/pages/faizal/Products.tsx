import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Products/Pagination";
import Filters from "../../components/Products/Filters";

import { BsSearch } from "react-icons/bs";

import { useSearchParams } from "react-router-dom";
import { useApi } from "../../components/Hooks/useApi";
import SkeletonLoading from "../../components/Products/SkeletonLoading";
import Navbar from "../../components/Navbar/navbar";
import LargeWithAppLinksAndSocial from "../../components/Footer/footer/footer";
import ProductsGrid from "../../components/Products/ProductsGrid";

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
    <Box>
      <Navbar />
      <Box
        my={{ lg: "150px", md: "100px", sm: "70px" }}
        mx={{ lg: "2%", md: "3%", sm: "4%" }}
      >
        <Box my="30px">
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
          <Box
            w={{ lg: "20%", md: "20%", sm: "100%" }}
            border="1px"
            borderColor="gray.300"
          >
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
            borderColor="gray.300"
            pl={{ lg: "20px", md: "15px", sm: "0px" }}
            pb="10px"
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
                <ProductsGrid data={data} />
              </Box>
            )}
          </Box>
        </Flex>
        <Box my="40px">
          <Pagination currentPage={page} setPage={setPage} totalPages={4} />
        </Box>
      </Box>
      <LargeWithAppLinksAndSocial />
    </Box>
  );
};

export default Products;
