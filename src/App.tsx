import { useState, useEffect } from "react";
import { getOrganizedData } from "./utils";
import { Box, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { ParticipantCard } from "./components/ui/participantCard";
import { Filter } from "./components/ui/filter";
import type { OrganizedOrgData } from "./types";

function App() {
  const [allOrgData, setAllOrgData] = useState<OrganizedOrgData[]>([]);
  const [filteredOrgs, setFilteredOrgs] = useState<OrganizedOrgData[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const data = getOrganizedData();
    setAllOrgData(data);
    setFilteredOrgs(data);
  }, []);

  useEffect(() => {
    if (!searchInput) {
      setFilteredOrgs(allOrgData);
      return;
    }
  }, [searchInput, allOrgData]);

  const handleSearch = () => {
    const search = searchInput.toLowerCase();
    const matches = allOrgData.filter((org) => {
      return (
        org.identification.organisationName.toLowerCase().includes(search) ||
        org.identification.legalEntityName.toLowerCase().includes(search) ||
        org.identification.registrationNumber.toLowerCase().includes(search)
      );
    });

    setFilteredOrgs(matches);
  };

  return (
    <Box margin={4}>
      {filteredOrgs.length > 0 && (
        <Text
          marginBottom={2}
          textAlign="left"
          fontSize="lg"
          fontWeight="normal"
        >
          Total organizations found: {filteredOrgs.length}
        </Text>
      )}

      <Filter
        userInput={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <Button mt={2} onClick={handleSearch}>
        Search
      </Button>

      <SimpleGrid gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 3 }} mt={4}>
        {filteredOrgs.map(
          ({
            identification,
            authorisationServers,
            status,
            address,
            size,
            organisationId,
          }) => (
            <ParticipantCard
              key={identification.registrationNumber}
              identification={identification}
              status={status}
              address={address}
              size={size}
              authorisationServers={authorisationServers}
              organisationId={organisationId}
            />
          )
        )}
      </SimpleGrid>
    </Box>
  );
}

export default App;
