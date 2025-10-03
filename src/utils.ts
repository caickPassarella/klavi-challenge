import rawParticipantData from "../participantData.json";
import type { Organization, OrganizedOrgData } from "./types";
import { format } from "date-fns";

export const getOrganizedData = (): OrganizedOrgData[] => {
  const participantData: Organization[] = rawParticipantData as Organization[];
  const organizedData = participantData.map(
    ({
      OrganisationId,
      Status,
      OrganisationName,
      CreatedOn,
      LegalEntityName,
      Size,
      RegistrationNumber,
      AddressLine1,
      AddressLine2,
      City,
      Country,
      AuthorisationServers,
    }) => ({
      identification: {
        organisationName: OrganisationName,
        legalEntityName: LegalEntityName,
        registrationNumber: RegistrationNumber,
        createdOn: format(new Date(CreatedOn), "PPpp"),
      },
      status: Status,
      address: {
        country: Country,
        city: City,
        addressLine1: AddressLine1,
        addressLine2: AddressLine2,
      },
      size: Size,
      organisationId: OrganisationId,
      authorisationServers: AuthorisationServers.map((server) => ({
        logoUrl: server.CustomerFriendlyLogoUri,
        description: server.CustomerFriendlyDescription,
        friendlyName: server.CustomerFriendlyName,
        createdAt: format(new Date(server.CreatedAt), "PPpp"),
      })),
    })
  );

  return organizedData;
};
