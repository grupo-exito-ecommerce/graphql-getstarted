export const user = (_: any, { gender }: { gender: string }, { dataSources: { userDS } }: Context) =>
  userDS.getUser(gender);
