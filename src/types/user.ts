// types/user.ts
export interface User {
  name: {
    name_prefix: string;
    first_name: string;
    last_name: string;
    name_suffix: string;
  };
  organization_name: string;
  password: string;
  identification: {
    type: string;
    value: string;
  }[];
  address: {
    type: string;
    label: string;
    address: string;
    city: string;
    state: string;
    country: string;
    country_code: string;
    zipcode: string;
    location: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      zone: string;
    };
    is_default: boolean;
  }[];
  contact: {
    type: string;
    label: string;
    country_code: string;
    number: string;
    is_default: boolean;
  }[];
  social_profiles: {
    label: string;
    link: string;
  }[];
  avatar: {
    large: string;
    medium: string;
    small: string;
    thumbnail: string;
  };
  meta_data: {
    gender: string;
    dob: string;
    theme_code: string;
  };
  email: string;
  username: string;
}
