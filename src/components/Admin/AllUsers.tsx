import { Accordion, Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import UsersAccordion from "./UsersAccordion";
import { getAllProfile } from "../../redux/actions/ProfileAction";

type Props = {};

const AllUsers = (props: Props) => {
  const { allProfiles } = useAppSelector((store) => store.profileManager);
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProfile());
  }, []);
  console.log("allProfiles:", allProfiles);

  return (
    <Box>
      <Text fontSize="25px" fontWeight={"500"}>
        Users
      </Text>

      <Accordion allowMultiple>
        {allProfiles?.map((profile) => {
          return <UsersAccordion key={profile.id} profile={profile} />;
        })}
      </Accordion>
    </Box>
  );
};

export default AllUsers;
