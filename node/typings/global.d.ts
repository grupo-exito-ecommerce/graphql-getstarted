import { ServiceContext } from '@vtex/api';
import { UseDataSource } from './dataSources/user';

declare global {
  interface Context extends ServiceContext {
    dataSources: DataSources;
    vtex: ServiceContext
  }

  interface DataSources {
    user: UseDataSource;
  }
}

export {};
