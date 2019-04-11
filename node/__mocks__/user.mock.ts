import { Headers } from 'apollo-server-env';

/**
 * Similación de datos que se obtendran de la API de RandomUser.
 */
export const responseAPI = (gender: string) => {
  const male = {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'rolf',
      last: 'hegdal',
    },
    location: {
      street: 'ljan terrasse 346',
      city: 'vear',
      state: 'rogaland',
      postcode: '3095',
      coordinates: {
        latitude: '54.8646',
        longitude: '-97.3136',
      },
      timezone: {
        offset: '-10:00',
        description: 'Hawaii',
      },
    },
    email: 'rolf.hegdal@example.com',
    login: {
      uuid: 'c4168eac-84b8-46ea-b735-c9da9bfb97fd',
      username: 'bluefrog786',
      password: 'ingrid',
      salt: 'GtRFz4NE',
      md5: '5c581c5748fc8c35bd7f16eac9efbb55',
      sha1: 'c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9',
      sha256: '684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712',
    },
    dob: {
      date: '1975-11-12T06:34:44Z',
      age: 42,
    },
    registered: {
      date: '2015-11-04T22:09:36Z',
      age: 2,
    },
    phone: '66976498',
    cell: '40652479',
    id: {
      name: 'FN',
      value: '12117533881',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/65.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/65.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    },
    nat: 'NO',
  };

  const female = {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'jana',
      last: 'van domburg',
    },
    location: {
      street: '4502 jacobijnenstraat',
      city: 'heerhugowaard',
      state: 'utrecht',
      postcode: 46050,
      coordinates: {
        latitude: '38.1818',
        longitude: '-30.0507',
      },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'jana.vandomburg@example.com',
    login: {
      uuid: 'ce3765c6-e868-4e6e-91a0-a1212334fcc0',
      username: 'redbird681',
      password: 'admin1',
      salt: '6GyH4x6h',
      md5: 'd3ee656a300e5f4f11e08bb6a7f23c84',
      sha1: '9134bef75a9481261399f78d4c95d67dcae19409',
      sha256: '1ad9eb899fa9465bb72748856cee4d96d82fbd1ab0294bda392f9b816d4cd44c',
    },
    dob: {
      date: '1950-04-12T18:20:41Z',
      age: 68,
    },
    registered: {
      date: '2004-11-30T22:14:06Z',
      age: 14,
    },
    phone: '(122)-297-7029',
    cell: '(257)-136-8499',
    id: {
      name: 'BSN',
      value: '48334066',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/11.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/11.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/11.jpg',
    },
    nat: 'NL',
  };

  const user = gender === 'male' ? male : female;

  return {
    results: [{ ...user }],
    info: {
      seed: '2da87e9305069f1d',
      results: 2,
      page: 1,
      version: '1.2',
    },
  };
};

export const user = (gender: string) => {
  const male = { gender: 'male', fullName: 'rolf hegdal', email: 'rolf.hegdal@example.com' };
  const female = { gender: 'female', fullName: 'jana van domburg', email: 'jana.vandomburg@example.com' };
  return gender === 'male' ? male : female;
};

export const headers = new Headers({
  'Proxy-Authorization': '<token>',
  'X-Vtex-Use-Https': 'true',
  VtexIdClientAutCookie: '<token>',
  Action: 'application/json',
});
