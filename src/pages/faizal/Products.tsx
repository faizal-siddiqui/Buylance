import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TbDiscount2, TbBrandSafari } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProducts } from "../../redux/actions/ProductAction";
import ProductsCard from "../../components/Products/ProductsCard";
import Pagination from "../../components/Products/Pagination";

type Props = {};

type FilterKey = {
  name: string | number;
  bool: boolean;
};

interface FilterObjType {
  [key: string]: FilterKey;
}

const Products = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [filterObj, setFilterObj] = useState<FilterObjType>({});
  const [filterStr, setFilterStr] = useState<string>("");

  const dispatch: any = useAppDispatch();
  const { loading, error, products } = useAppSelector(
    (store) => store.productManager
  );

  useEffect(() => {
    dispatch(getProducts(page, filterStr));
  }, [page, filterStr]);

  const filterCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("name", e.target.name);
    // console.log("value", e.target.value);
    // console.log("check", e.target.checked);

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

    setFilterObj(newObj);
    setFilterStr(newStr);
  };

  console.log("filteroibj", filterObj);
  console.log("filteroibj", filterStr);

  

  const FILTERS = [
    {
      id: 1,
      icon: <TbDiscount2 fontSize={"25px"} />,
      label: "Discount",
      childs: [
        {
          id: 20,
          name: "discount_lte",
          value: "20",
          text: "Below 20%",
          onChange: filterCheckBox,
        },
        {
          id: 21,
          name: "discount_lte",
          value: "50",
          text: "Below 50%",
          onChange: filterCheckBox,
        },
        {
          id: 22,
          name: "discount_lte",
          value: "90",
          text: "Below 90%",
          onChange: filterCheckBox,
        },
      ],
    },
    {
      id: 2,
      icon: <TbBrandSafari fontSize={"25px"} />,
      label: "Brand",
      childs: [
        {
          id: 100,
          name: "brand",
          value: "Allen Solly",
          text: "Allen Solly",
          onChange: filterCheckBox,
        },
        {
          id: 101,
          name: "brand",
          value: "HIGHLANDER",
          text: "HIGHLANDER",
          onChange: filterCheckBox,
        },
        {
          id: 102,
          name: "brand",
          value: "Louis Philippe Sport",
          text: "Louis Philippe Sport",
          onChange: filterCheckBox,
        },
        {
          id: 103,
          name: "brand",
          value: "HRX by Hrithik Roshan",
          text: "HRX by Hrithik Roshan",
          onChange: filterCheckBox,
        },
        {
          id: 104,
          name: "brand",
          value: "Huetrap",
          text: "Huetrap",
          onChange: filterCheckBox,
        },
        {
          id: 105,
          name: "brand",
          value: "Roadster",
          text: "Roadster",
          onChange: filterCheckBox,
        },
        {
          id: 106,
          name: "brand",
          value: "Urbano Fashion",
          text: "Urbano Fashion",
          onChange: filterCheckBox,
        },
        {
          id: 107,
          name: "brand",
          value: "WROGN",
          text: "WROGN",
          onChange: filterCheckBox,
        },
        {
          id: 108,
          name: "brand",
          value: "H&M",
          text: "H&M",
          onChange: filterCheckBox,
        },
        {
          id: 109,
          name: "brand",
          value: "t-base",
          text: "t-base",
          onChange: filterCheckBox,
        },
        {
          id: 110,
          name: "brand",
          value: "Bewakoof",
          text: "Bewakoof",
          onChange: filterCheckBox,
        },
        {
          id: 111,
          name: "brand",
          value: "Rodzen",
          text: "Rodzen",
          onChange: filterCheckBox,
        },
        {
          id: 112,
          name: "brand",
          value: "Nautica",
          text: "Nautica",
          onChange: filterCheckBox,
        },
      ],
    },
    {
      id: 3,
      icon: <GiTakeMyMoney fontSize={"25px"} />,
      label: "Price",
      childs: [
        {
          id: 24,
          name: "price_lte",
          value: "500",
          text: "Below 500",
          onChange: filterCheckBox,
        },
        {
          id: 25,
          name: "price_lte",
          value: "1000",
          text: "Below 1000",
          onChange: filterCheckBox,
        },
        {
          id: 26,
          name: "price_lte",
          value: "1500",
          text: "Below 1500",
          onChange: filterCheckBox,
        },
        {
          id: 27,
          name: "price_gte",
          value: "1501",
          text: "Above 1500",
          onChange: filterCheckBox,
        },
      ],
    },
    {
      id: 4,
      icon: <TbDiscount2 fontSize={"25px"} />,
      label: "Discount",
      childs: [
        {
          id: 29,
          name: "20",
          value: "20",
          text: "Below 20%",
          onChange: filterCheckBox,
        },
        {
          id: 30,
          name: "50",
          value: "50",
          text: "Below 50%",
          onChange: filterCheckBox,
        },
        {
          id: 31,
          name: "90",
          value: "90",
          text: "Below 90%",
          onChange: filterCheckBox,
        },
      ],
    },
  ];

  if (loading) return <h1>Loading .....</h1>;
  if (error) return <h1>Error .....</h1>;

  return (
    <Box>
      <Box>
        <Flex align="center">
          <Text fontSize={"25px"} fontWeight={"bold"}>
            T-Shirts for Men
          </Text>
          <Text>number</Text>
        </Flex>
        <Flex>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            T-Shirts for Men
          </Text>
          <Text>number</Text>
        </Flex>
      </Box>
      <Flex flexDir={{ lg: "row", md: "row", sm: "column" }}>
        <Box w={{ lg: "20%", md: "20%", sm: "100%" }} border="1px">
          <Accordion defaultIndex={[0]} allowMultiple>
            {FILTERS.map((filter) => (
              <AccordionItem key={filter.id}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex
                        color="grey"
                        fontSize="17px"
                        fontWeight="500"
                        align="center"
                      >
                        <Text mr="35px">{filter.icon}</Text>
                        <Text>{filter.label}</Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  {filter.childs.map((el) => (
                    <Text key={el.id} w="fit-content" ml="20px">
                      <Checkbox
                        // ml={"-100px"}
                        value={el.value}
                        name={el.name}
                        onChange={el.onChange}
                      >
                        {el.text}
                      </Checkbox>
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box
          w={{ lg: "80%", md: "80%", sm: "100%" }}
          border="1px"
          borderColor="red"
        >
          <Box>
            <Grid
              templateColumns={{
                lg: "repeat(4, 1fr)",
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
              }}
              gap={{ lg: "30px", md: "20px", sm: "10px" }}
            >
              {products?.map((prod) => (
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
        </Box>
      </Flex>
      <Box>
        <Pagination currentPage={page} setPage={setPage} totalPages={10} />
      </Box>
    </Box>
  );
};

export default Products;
