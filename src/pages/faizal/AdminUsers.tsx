import { Box } from "@chakra-ui/react";
import React from "react";
import AllUsers from "../../components/Admin/AllUsers";
import SidebarWithHeader from "../../components/Admin/sidebar";

type Props = {};

const AdminUsers = (props: Props) => {
  return (
    <Box>
      <SidebarWithHeader children={<AllUsers />} />
    </Box>
  );
};

export default AdminUsers;
