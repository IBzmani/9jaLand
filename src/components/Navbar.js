import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  AvatarBadge,
  Avatar,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        9jaLand
      </Heading>
      <Spacer />
      <HStack spacing="20px">
        <w3m-button />
      </HStack>
    </Flex>
  );
}
