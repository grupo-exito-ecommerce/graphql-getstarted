export interface User {
  gender: string;
  fullName: string;
  email: string;
}

export interface Query {
  /**
   * @graphql Description
   * Retorna un usuario aleatorio, si desaea que este
   * corresponda a un genero en específico, envie
   * el parámetro "gender" con "female" o "male".
   *
   * @graphql Directives
   * @cachecontrol (scope: PUBLIC, maxAge: MEDIUM)
   *
   */
  user(gender?: string): User | null
}
