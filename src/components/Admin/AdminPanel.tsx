import { Box, Flex, Input, Text } from "@chakra-ui/react";
import Chart from "../Admin/Chart";
import React from "react";
import { GiConsoleController } from "react-icons/gi";
import DashboardCards from "./DashboardCards";

type Props = {};
 
const AdminPanel = (props: Props) => {
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Text fontWeight="600" fontSize="25px">
          Dashboard
        </Text>
        <Box>
          <Flex align="center">
            <Text>
              <input onChange={handleDate} type="week" />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <DashboardCards />
      </Box>
      <Box>
        <Box>
          <Chart />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPanel;
