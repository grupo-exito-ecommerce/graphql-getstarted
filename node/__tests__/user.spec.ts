import { Headers } from 'apollo-server-env';
import { UserDataSource } from '../dataSources';
import { ResolverError } from '../shared';
import { responseAPI, user, headers } from '../__mocks__';

const mocks = {
  get: jest.fn(),
  context: {
    vtex: {
      authToken: '<token>',
    },
  },
};

class UserDataSourceTest extends UserDataSource {
  context = <any>mocks.context;
  get = mocks.get;
  constructor() {
    super();
  }
}

const userDS = new UserDataSourceTest();

const testGenderInGetRandomUsers = async (gender: string) => {
  try {
    mocks.get.mockReturnValueOnce(responseAPI(gender));

    const res = await userDS.getRandomUsers(gender);

    expect(res[0].gender).toBe(gender);
    expect(mocks.get).toBeCalledWith(`/?gender=${gender}`);
  } catch (error) {
    console.log('Error en testGenderInGetRandomUsers:');
    console.log(error);
  }
};

const testGenderInGetUser = async (gender: string) => {
  try {
    mocks.get.mockReturnValueOnce(responseAPI(gender));

    const res = await userDS.getUser(gender);

    expect(res).toEqual(user(gender));
  } catch (error) {
    console.log('Error en testGenderInGetUser:');
    console.log(error);
  }
};

describe('[CategoryDataSource]', () => {
  it('userReducer(): should properly transforms "ResponseUserAPI" from "User".', () => {
    const res = userDS.userReducer(responseAPI('male').results[0]);
    expect(res).toEqual(user('male'));
  });

  it('getRandomUsers(): should get a list of random users.', async () => {
    mocks.get.mockReturnValueOnce(responseAPI('male')).mockReturnValueOnce(null);

    const res1 = await userDS.getRandomUsers();
    const res2 = await userDS.getRandomUsers();

    expect(res1).toEqual(responseAPI('male').results);
    expect(res2).toEqual([]);
    expect(mocks.get).toBeCalledWith('/');
    expect(mocks.get.mock.calls.length).toBe(2);
  });

  it('getRandomUsers(gender="male"): should return a list of male users.', async () => {
    await testGenderInGetRandomUsers('male');
  });

  it('getRandomUsers(gender="female"): should return a list of female users.', async () => {
    await testGenderInGetRandomUsers('female');
  });

  it('getRandomUsers(): should return controlled error using class `ResolverError`.', async () => {
    mocks.get.mockImplementation(() => {
      throw new Error('Controlled error :)');
    });
    const err = userDS.getRandomUsers();
    await expect(err).rejects.toThrowError(ResolverError);
    await expect(err).rejects.toThrowError('Ha ocurrido un error consultando el usuario.');
  });

  it('getUser(): should a random user return.', async () => {
    mocks.get.mockReturnValueOnce(responseAPI('male')).mockReturnValueOnce(null);

    const res1 = await userDS.getUser();
    const res2 = await userDS.getUser();

    expect(res1).toEqual(user('male'));
    expect(res2).toEqual(null);
  });

  it('getUser(gender="male"): should return a male user.', async () => {
    await testGenderInGetUser('male');
  });

  it('getRandomUsers(gender="female"): should return a female user.', async () => {
    await testGenderInGetUser('female');
  });

  it('willSendRequest(): should set the headers of the request.', () => {
    const req = {
      headers: new Headers(),
    };
    userDS.willSendRequest(req as any);

    expect(req.headers).toEqual(headers);
  });
});
