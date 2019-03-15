import { User } from './user-datasources';

export const dataSources = (): DataSources => ({
  user: new User()
});
