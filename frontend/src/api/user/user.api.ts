import { userModels } from "../../models/user/user.models";
import { Response } from "../../models/helper/helper.module";

export const RegisterUser = async ({username, password, email}: userModels.RegisterUserModel): Promise<Response<userModels.UserModel> | Response<object>> => { 
  await fetch("http://192.168.0.48:8080/api/user/register/", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "email": email,
      "password": password
    }),
    redirect: 'follow'
  })
  .then(async (res) => await res.json())
  .then((data: Response<userModels.UserModel>) => {
    return data
  })
  .catch((error) => {
    const errorResponse: Response<object> = {
      Status: false,
      Message: "Error during registration",
      Error: error,
      Data: {},
    };

    return errorResponse;
  })
  return {} as Response<object>;
};
