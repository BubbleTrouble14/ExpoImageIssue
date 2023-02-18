export type RequestBody<T> = {
  url: string;
  parameters?: T;
};

//Collections

export type CollectionRequestBody = {
  interval: string;
  search?: string;
  includeZeroVolume?: boolean;
  includeVerifiedOwners?: boolean;
  includeNftCount?: boolean;
  includeFloorPrice?: boolean;
  page?: string;
  size: number;
};

export type CollectionResponse = {
  items: Array<Collection>;
  page?: string;
  size: number;
  next: string;
  previous: string;
};

export type Creator = {
  id: string;
  encoded_id?: string;
  verification_state?: number;
  name?: string;
  bio?: string;
  website?: string;
  twitter_handle?: string;
  avatar_uri?: string;
  header_uri?: string;
  discord_user?: string;
};
export type Collection = {
  id: string;
  name?: string;
  description?: string;
  thumbnail_uri?: string;
  banner_uri?: string;
  creator?: Creator;
  sensitive_content?: boolean;
  suspicious_activity_timeout_until?: number;
  volume?: number;
  trade_count?: number;
  nft_count?: number;
  verified_owners_count?: number;
  floor_price?: number;
};

//Single Collection

export type CollectionNFTResponse = {
  items: Array<CollectionNFT>;
  page?: string;
  size: number;
  next: string;
  previous: string;
};

export type CollectionNFTRequestBody = {
  collection_id?: string;
  require_owner?: boolean;
  page?: string;
  size?: number;
  sort_by?: string;
};

export type CollectionNFT = {
  id?: string;
  encoded_id?: string;
  data_type?: number;
  thumbnail_uri?: string;
  name?: string;
  description?: string;
  sensitive_content?: boolean;
  collection_id?: string;
  collection_name?: string;
  collection_sensitive_content?: boolean;
  xch_price?: number;
  creator_address_encoded_id?: string;
  owner_address_encoded_id?: string;
  timestamp?: Date;
  minted_at?: Date;
  updated_at?: Date;
  creator_id?: string;
  creator_encoded_id?: string;
  creator_avatar_uri?: string;
  creator_name?: string;
  creator_verification_state?: number;
  owner_id?: string;
  owner_encoded_id?: string;
  owner_avatar_uri?: string;
  owner_name?: string;
  owner_verification_state?: string;
};
