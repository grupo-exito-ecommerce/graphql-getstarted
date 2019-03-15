export const user = (
  _: any,
  { name, pwd }: { name: string; pwd: string; ioContext: any },
  { dataSources: { user }, vtex: ioContext }: Context
) => user.printUser(name, pwd, ioContext);
