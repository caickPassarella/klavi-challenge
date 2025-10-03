import { Card, Text, Flex, Spacer, Box, Badge } from "@chakra-ui/react";
import { Modal } from "../modal";
import type { OrganizedOrgData } from "@/types";
import { memo } from "react";

export const ParticipantCard = memo(
  ({
    identification,
    status,
    size,
    authorisationServers,
    address,
    organisationId,
  }: OrganizedOrgData) => {
    return (
      <Card.Root
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "md",
        }}
        cursor="pointer"
        size="sm"
        variant="outline"
      >
        <Modal
          identification={identification}
          status={status}
          address={address}
          size={size}
          authorisationServers={authorisationServers}
          organisationId={organisationId}
        >
          <Box width="100%">
            <Flex flexDirection="row" alignItems="center">
              <Card.Body>
                <Card.Title>{identification.organisationName}</Card.Title>
                <Flex direction="row">
                  <Text>
                    Registration Number: {identification.registrationNumber}
                  </Text>
                  <Spacer />
                  <Badge
                    colorPalette={status === "Active" ? "green" : "red"}
                    fontWeight="bold"
                  >
                    {status}
                  </Badge>
                </Flex>
              </Card.Body>
            </Flex>
          </Box>
        </Modal>
      </Card.Root>
    );
  }
);
