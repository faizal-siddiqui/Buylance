import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import AdminPanel from "../../components/Admin/AdminPanel";
import SidebarWithHeader from "../../components/Admin/sidebar";
type Props = {};

const Admin = (props: Props) => {
  return (
    <Box>
      <SidebarWithHeader children={<AdminPanel />} />
      <Box></Box>
    </Box>
  );
};

export default Admin;
