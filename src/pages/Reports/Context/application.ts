import { Product } from "./product-new";

export class Application {
  id: string;
  name: string;
  description: string;
  notes: string;
  dateCreated: string;
  state: string;
  security: string;
  partnerId: string;
  clientSecret: string;
  scopes: string[];
  redirectUris: string[];
  developerIds: string[];
  adminIds: string[];
  productIds: string[];
  products: Product[];
  type: string;
  subscriptionKeys: SubscriptionKeys;
  serviceNowProductId: string;
  groupAdminName: string;
  groupAdminEmail: string;
}

export class AccessApplication {
  id: string;
  name: string;
  type: string;
  typeLong: string;
  description: string;
  environment: string;
  productIds: string[];
}

export class NewApplication {
  name: string;
  type: string;
  description?: string;
  productIds?: string[];
}

export class UpdateApplication {
  name: string;
  type: string;
  id: string;
  description?: string;
  developerIds?: string[];
  adminIds?: string[];
  productIds?: string[];
  groupAdminName?: string;
  groupAdminEmail?: string;
}

export class SubscriptionKeys {
  primaryApiKey: string;
  secondaryApiKey: string;
}
