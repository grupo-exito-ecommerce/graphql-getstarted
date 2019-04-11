import { UserDataSource } from './user';
export * from './user';

export const dataSources = (): DataSources => ({
  userDS: new UserDataSource()
});
