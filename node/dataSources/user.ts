import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { forIn, pick, result } from 'lodash';
import { User } from '../../typedql/schema';
import { endpoints, ResolverError } from '../shared';

interface ResponseUserAPI {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}
interface ResponseAPI {
  results: ResponseUserAPI[];
}

export class UserDataSource extends RESTDataSource<Context> {
  constructor() {
    super();
    this.baseURL = endpoints.randomUser;
  }

  /**
   * Retorna un usuario aleatorio que puede ser
   * de un genero en específico.
   *
   * @param {string} [gender]
   * @returns {(Promise<User | null>)}
   * @memberof UserDataSource
   */
  async getUser(gender?: string): Promise<User | null> {
    const users = await this.getRandomUsers(gender);
    return users.length ? users.map(user => this.userReducer(user))[0] : null;
  }

  /**
   * Realiza una petición a la API de "randomuser"
   * y obtiene una lista de usuarios.
   * Usar el param "gender" para determinar el género
   * de los usuarios obtenidos.
   *
   * @param {string} [gender]
   * @returns {Promise<ResponseUserAPI[]>}
   * @memberof UserDataSource
   */
  async getRandomUsers(gender?: string): Promise<ResponseUserAPI[]> {
    try {
      const param = gender ? `?gender=${gender}` : '';
      const res = await this.get<ResponseAPI>(`/${param}`);
      const data = result<ResponseUserAPI[]>(res, 'results', []);

      return data;
    } catch (err) {
      throw new ResolverError('Ha ocurrido un error consultando el usuario.');
    }
  }

  /**
   * Toma datos en bruto de la ´respuesta de la API
   * y genera un nuevo objecto de tipo "User".
   *
   * @param {ResponseUserAPI} user
   * @returns {User}
   * @memberof UserDataSource
   */
  userReducer(user: ResponseUserAPI): User {
    const fullName = `${user.name.first} ${user.name.last}`;
    return {
      fullName,
      ...pick(user, ['gender', 'email']),
    };
  }

  /**
   * Aplica los "headers" necesarios para poder autorizar las
   * peticiones de este "dataSource" fuera de la red de vtex.
   *
   * @param {RequestOptions} req
   * @memberof UserDataSource
   */
  willSendRequest(req: RequestOptions) {
    // Si se quiere acceder al contexto de la petición
    // para obtener información de vtex, use "this.context".
    const {
      vtex: { authToken },
    } = this.context;

    forIn(
      {
        'Proxy-Authorization': authToken,
        'X-Vtex-Use-Https': 'true',
        VtexIdClientAutCookie: authToken,
        Action: 'application/json',
      },
      (value, header) => req.headers.set(header, value),
    );
  }
}
