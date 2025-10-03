import type { ReactNode } from "react";

export interface Organization {
  OrganisationId: string;
  Status: string;
  OrganisationName: string;
  CreatedOn: Date;
  LegalEntityName: string;
  CountryOfRegistration: string;
  CompanyRegister: string;
  Tags: unknown;
  Flags: Record<string, unknown>;
  Size: string;
  RegistrationNumber: string;
  RegistrationId: string;
  RegisteredName: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Postcode: string;
  Country: string;
  ParentOrganisationReference: string;
  AuthorisationServers: AuthorisationServer[];
  OrgDomainClaims: Record<string, unknown>[];
  OrgDomainRoleClaims: Record<string, unknown>[];
}

export interface AuthorisationServer {
  AutoRegistrationSupported: boolean;
  AutoRegistrationNotificationWebhook: unknown;
  CustomerFriendlyDescription: string;
  CustomerFriendlyLogoUri: string;
  CustomerFriendlyName: string;
  DeveloperPortalUri: string;
  TermsOfServiceUri: string;
  NotificationWebhook: unknown;
  OpenIDDiscoveryDocument: string;
  PayloadSigningCertLocationUri: string;
  ParentAuthorisationServerId: unknown;
  DeprecatedDate: unknown;
  RetirementDate: unknown;
  SupersededByAuthorisationServerId: unknown;
  FederationId: unknown;
  OmitFromEcosystem: unknown;
  AuthorisationServerId: string;
  OrganisationId: string;
  Issuer: string;
  FederationEndpoint: unknown;
  NotificationWebhookAddedDate: unknown;
  NotificationWebhookStatus: unknown;
  SupportsCiba: boolean;
  SupportsDCR: boolean;
  SupportsRedirect: boolean;
  CreatedAt: Date;
  Status: string;
  ApiResources: Record<string, unknown>[];
  AuthorisationServerCertifications: Record<string, unknown>[];
  Flags: Record<string, unknown>;
}

export interface OrganizedOrgData {
  identification: {
    organisationName: string;
    legalEntityName: string;
    registrationNumber: string;
    createdOn: string;
  };
  status: string;
  address: Address;
  size: string;
  organisationId: string;
  authorisationServers: OrganizedAuthorisationServers[];
}

export interface ModalProps extends OrganizedOrgData {
  children: ReactNode;
}

interface Address {
  country: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
}

interface OrganizedAuthorisationServers {
  logoUrl: string;
  description: string;
  friendlyName: string;
  createdAt: string;
}

export interface InputProps {
  userInput: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}
