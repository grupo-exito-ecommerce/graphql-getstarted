import { ServiceContext, IOContext } from '@vtex/api';
import { UseDataSource } from './dataSources/user';

declare global {
  interface Context extends ServiceContext {
    dataSources: DataSources;
    vtex: IOContext
  }

  interface DataSources {
    userDS: UseDataSource;
  }
}

export {};
