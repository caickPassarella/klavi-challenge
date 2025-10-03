import { Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode";

export const NavBar = () => (
  <Flex
    padding={4}
    alignItems="center"
    justifyContent="space-between"
    flexDirection="row"
    gap="4"
  >
    <Heading>OpenFinance</Heading>
    <ColorModeButton />
  </Flex>
);
