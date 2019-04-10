import { User } from './user';

export const dataSources = (): DataSources => ({
  user: new User()
});
