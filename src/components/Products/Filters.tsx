import React, { useRef } from "react";
import { TbDiscount2, TbBrandSafari } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Text,
} from "@chakra-ui/react";
type Props = {
  filterCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters = ({ filterCheckBox }: Props) => {
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
  ];

  return (
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
                  <Text fontSize={{ lg: "16px", md: "14px", sm: "13px" }}>
                    {filter.label}
                  </Text>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {filter.childs.map((el) => (
              <Text key={el.id} w="fit-content" ml="20px">
                <Checkbox
                  
                  value={el.value}
                  name={el.name}
                  onChange={el.onChange}
                >
                  <Text fontSize={{ lg: "15px", md: "13px", sm: "12px" }}>{el.text}</Text>
                </Checkbox>
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default React.memo(Filters);
