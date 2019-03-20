import { UserData, ResponseModel } from '../shared/models/user-model';

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
