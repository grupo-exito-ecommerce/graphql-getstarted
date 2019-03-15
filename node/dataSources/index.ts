import { SmartQuickDataSource } from './smartQuickDataSource';

export const dataSources = (): DataSources => ({
  smart: new SmartQuickDataSource()
});
