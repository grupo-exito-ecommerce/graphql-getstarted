import { UserData, ResponseModel } from '../shared/models/UserModel';
/*
Clase que obtiene todos los metodos relacionados con las bolsas de los pedidos
que se hacen por los sitios.
*/
export class User {
  public printUser = async (
    name: string,
    pwd: string,
    ioContext: any
  ): Promise<ResponseModel> => {
    let information: UserData = {
      name: name,
      pwd: pwd,
      ioContext
    };

    console.log(information);

    return information;
  };
}
