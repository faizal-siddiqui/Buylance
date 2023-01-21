import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Search2Icon, CheckCircleIcon } from "@chakra-ui/icons";

type Props = {};

const Pincode = (props: Props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Text>
      <Text my="20px" fontSize="25px" fontWeight={"500"}>
        PinCode
      </Text>
      <InputGroup w="30%" size="md">
        <Input pr="4.5rem" placeholder="Enter Pincode" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <CheckCircleIcon color="green" /> : <Search2Icon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Text>
  );
};

export default Pincode;
