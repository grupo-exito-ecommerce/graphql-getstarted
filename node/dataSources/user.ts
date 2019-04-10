import { User } from '../../typedql/schema';
import { DataSource } from 'apollo-datasource';

export class UserDataSource extends DataSource<Context> {
  getUser(name: string, pwd: string): User {

    // Si se quiere acceder al contexto de la petición
    // para obtener información de vtex.
    console.log(this.context);

    return {
      name,
      pwd,
    };
  }
}
