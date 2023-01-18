import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  totalPages: number;
  setPage: (val: number) => void;
  currentPage: number;
};

const Pagination = ({ totalPages, setPage, currentPage }: Props) => {
  return (
    <Box w="fit-content" m="auto">
      <Flex>
        <Box>
          <Button
            fontSize={{ lg: "15px", md: "14px", sm: "12px" }}
            border="1px"
            borderColor="gray.400"
            bgColor="#fff"
            isDisabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            Prev
          </Button>
        </Box>
        {[...new Array(totalPages)].map((el, i) => (
          <Box key={i * 1000}>
            <Button
              fontSize={{ lg: "15px", md: "14px", sm: "12px" }}
              border="1px"
              borderColor="gray.400"
              onClick={() => setPage(i + 1)}
              bgColor={currentPage === i + 1 ? "#000" : "#fff"}
              color={currentPage === i + 1 ? "#fff" : "gray.400"}
            >
              {i + 1}
            </Button>
          </Box>
        ))}
        <Box>
          <Button
            fontSize={{ lg: "15px", md: "14px", sm: "12px" }}
            border="1px"
            borderColor="gray.400"
            bgColor="#fff"
            isDisabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pagination;
