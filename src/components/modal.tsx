import {
  CloseButton,
  Dialog,
  HStack,
  Portal,
  DataList,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import type { ModalProps } from "@/types";
export const Modal = ({
  identification,
  size,
  authorisationServers,
  address,
  children,
}: ModalProps) => {
  return (
    <HStack>
      <Dialog.Root placement="center" size="lg">
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <VStack width="100%">
                  <Dialog.Title>{identification.organisationName}</Dialog.Title>
                  <Text textAlign="end" textStyle="xs">
                    {identification.legalEntityName}
                  </Text>
                </VStack>
              </Dialog.Header>
              <Dialog.Body>
                <Text textStyle="md" fontWeight="bold">
                  General
                </Text>
                <DataList.Root
                  variant="bold"
                  orientation="horizontal"
                  divideY="1px"
                  maxW="md"
                  marginBottom={6}
                >
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Created on</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {identification.createdOn}
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Registration number</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {identification.registrationNumber}
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Size</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {size ? size : "N/A"}
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
                <Text textStyle="md" fontWeight="bold">
                  Address
                </Text>
                <DataList.Root
                  variant="bold"
                  orientation="horizontal"
                  divideY="1px"
                  maxW="md"
                  marginBottom={6}
                >
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Country</DataList.ItemLabel>
                    <DataList.ItemValue>{address.country}</DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>City</DataList.ItemLabel>
                    <DataList.ItemValue>{address.city}</DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Address 1</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {address.addressLine1}
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item pt="2">
                    <DataList.ItemLabel>Address 2</DataList.ItemLabel>
                    <DataList.ItemValue>
                      {address.addressLine2}
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
                <Text textStyle="md" fontWeight="bold">
                  Authorisation Servers
                </Text>
                {authorisationServers.map((server, index) => (
                  <DataList.Root
                    key={index}
                    variant="bold"
                    orientation="horizontal"
                    divideY="1px"
                    maxW="md"
                  >
                    <Image src={server.logoUrl} width="80px" height="80px" />
                    <DataList.Item pt="2">
                      <DataList.ItemLabel>Friendly Name</DataList.ItemLabel>
                      <DataList.ItemValue>
                        {server.friendlyName}
                      </DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item pt="2">
                      <DataList.ItemLabel>Description</DataList.ItemLabel>
                      <DataList.ItemValue>
                        {server.description}
                      </DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                ))}
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  );
};
