import { endpoints, ResolverError } from '../shared';
import { CategoryDataSource } from '../dataSources';
import { baseMockCategories, mockCategories, mockCategoriesResponse } from '../__mocks__';

const mocks = {
  get: jest.fn(),
  setHeader: jest.fn(),
  context: {
    vtex: {
      authToken: '<token>',
    },
  },
};

class CategoryDataSourceTest extends CategoryDataSource {
  context = <any>mocks.context;
  get = mocks.get;
  willSendRequest = (req: any) => {
    super.willSendRequest(req);
  }
}

const categoryDS = new CategoryDataSourceTest();

describe('[CategoryDataSource]', () => {
  it('categoryReducer(): should properly transforms category from navigation.', () => {
    const res = categoryDS.categoryReducer(baseMockCategories[0]);
    expect(res).toEqual(mockCategories[0]);
  });

  it('getAllCategories(): should get all the categories of the site.', async () => {
    const url = endpoints.navigation;
    mocks.get.mockReturnValueOnce(mockCategoriesResponse).mockReturnValueOnce(null);

    const res1 = await categoryDS.getAllCategories();
    const res2 = await categoryDS.getAllCategories();

    expect(res1).toEqual(mockCategories);
    expect(res2).toEqual([]);
    expect(mocks.get).toBeCalledWith(url);
  });

  it('getAllCategories(): should return controlled error using class `ResolverError`.', async () => {
    mocks.get.mockImplementation(() => {
      throw new Error('Controlled error :)');
    });
    const err = categoryDS.getAllCategories();
    await expect(err).rejects.toThrowError(ResolverError);
    await expect(err).rejects.toThrowError('Ha ocurrido un error consultando el menú de navegación.');
  });

  it('willSendRequest(): should set the headers of the request.', () => {
    const req = {
      headers: { set: mocks.setHeader },
    };
    categoryDS.willSendRequest(req);

    expect(mocks.setHeader.mock.calls.length).toBe(4);
  });
});
