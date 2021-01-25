
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  access: Access,
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Access {
  accessGroup: string;
  accessLevel: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
