import { Cookies } from "react-cookie";

const cookie_max_age: number = 24 * 60 * 60 * 1000
const cookies: Cookies = new Cookies();

interface IUserLoginCookies {
  token: string
  username: string
}

export const SetCookie = async ({token, username}: IUserLoginCookies) => {
  cookies.set("token", token, {
    maxAge: cookie_max_age,
  });
  cookies.set("username", username, {
    maxAge: cookie_max_age,
  });
}

export const GetCookie = async (): Promise<IUserLoginCookies> => {
  const { token, username } = await cookies.getAll();

  return { token, username }
}