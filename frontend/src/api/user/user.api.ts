import { userModels } from "../../models/user/user.models";
import { Response } from "../../models/helper/helper.module";

export const RegisterUser = async ({username, password, email}: userModels.RegisterUserModel): Promise<Response<userModels.UserModel> | Response<object>> => {
  let myHeaders: HeadersInit = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "username": username,
    "email": email,
    "password": password
  });

  try {
    const response = await fetch("/api/user/register/", {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    });

    const result: userModels.UserModel = await response.json();
    
    const responseData: Response<userModels.UserModel> = {
      Status: true,
      Message: "Success",
      Error: null, 
      Data: result,
    };

    return responseData;
  } catch (error) {
    console.error('Error during registration:', error);

    const errorResponse: Response<object> = {
      Status: false,
      Message: "Error during registration",
      Error: error,
      Data: {},
    };

    return errorResponse;
  }
};
