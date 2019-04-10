export interface User {
  name: string
  pwd: string
}

export interface Query {
  /**
   * @graphql Description
   * Obtiene los parametros y muestra.
   *
   * @graphql Directives
   * @cachecontrol (scope: PUBLIC, maxAge: MEDIUM)
   *
   */
  user(name: string, pwd: string): User
}
