import { ServiceContext } from '@vtex/api';
import { SmartQuickDataSource } from './dataSources/smartQuickDataSource';

declare global {
  interface Context extends ServiceContext {
    dataSources: DataSources;
    vtex: ServiceContext
  }

  interface DataSources {
    smart: SmartQuickDataSource;
  }
}

export {};
