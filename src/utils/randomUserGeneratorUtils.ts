import { faker } from '@faker-js/faker';
import { User } from '../types/user';

export const generateRandomUser = (): User => {
  return {
    name: {
      name_prefix: faker.name.prefix(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      name_suffix: faker.name.suffix(),
    },
    organization_name: faker.company.name(),
    password: faker.internet.password(),
    identification: [
      {
        type: 'SSN',
        value: faker.datatype.uuid(),
      },
      {
        type: 'Driving License',
        value: faker.datatype.uuid(),
      },
    ],
    address: [
      {
        type: 'PRIMARY',
        label: 'Home',
        address: faker.location.streetAddress({ useFullAddress: true }),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        country_code: faker.location.countryCode('alpha-2'),
        zipcode: faker.location.zipCode(),
        location: {
          latitude: `${faker.location.latitude()}`,
          longitude: `${faker.location.latitude()}`,
        },
        timezone: {
          offset: faker.location.timeZone(),
          zone: faker.location.timeZone(),
        },
        is_default: true,
      },
      {
        type: 'SECONDARY',
        label: 'Apartment',
        address: faker.location.streetAddress({ useFullAddress: true }),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        country_code: faker.location.countryCode('alpha-2'),
        zipcode: faker.location.zipCode(),
        location: {
          latitude: `${faker.location.latitude()}`,
          longitude: `${faker.location.latitude()}`,
        },
        timezone: {
          offset: faker.location.timeZone(),
          zone: faker.location.timeZone(),
        },
        is_default: false,
      },
    ],
    contact: [
      {
        type: 'PRIMARY',
        label: 'Home',
        country_code: '+01',
        number: faker.phone.number(),
        is_default: true,
      },
      {
        type: 'SECONDARY',
        label: 'Apartment',
        country_code: '+01',
        number: faker.phone.number(),
        is_default: false,
      },
    ],
    social_profiles: [
      {
        label: 'facebook',
        link: faker.internet.url(),
      },
      {
        label: 'instagream',
        link: faker.internet.url(),
      },
      {
        label: 'twitter',
        link: faker.internet.url(),
      },
      {
        label: 'linkedin',
        link: faker.internet.url(),
      },
    ],
    avatar: {
      large: faker.image.avatar(),
      medium: faker.image.avatar(),
      small: faker.image.avatar(),
      thumbnail: faker.image.avatar(),
    },
    meta_data: {
      gender: faker.person.gender(),
      dob: faker.date.past(20, new Date('2002-11-28')).toISOString().split('T')[0],
      theme_code: 'DEFAULT',
    },
    email: faker.internet.email(),
    username: faker.internet.userName(),
  };
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
