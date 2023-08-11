export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AbsoluteOrRelativeURL: string;
  Date: string;
  HexColor: string;
  JSON: any;
  RelativeURL: string;
  Slug: string;
  URL: string;
  UUID: string;
};

export enum AlternativePricingType {
  Membership = 'membership'
}

export type Product = {
  __typename?: 'Product';
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  relatedProducts?: Maybe<Array<Maybe<Product>>>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
};

export enum Status {
  Archived = 'archived',
  Authoring = 'authoring',
  Deleted = 'deleted',
  Draft = 'draft',
  LoginRestriction = 'loginRestriction',
  Pending = 'pending',
  Published = 'published'
}
