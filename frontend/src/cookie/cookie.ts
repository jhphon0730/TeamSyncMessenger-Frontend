import { Cookies } from "react-cookie";

const cookie_max_age: number = 24 * 60 * 60 * 1000
const cookies: Cookies = new Cookies();

interface IUserLoginCookies {
  id: number
  token: string
  username: string
}

export const SetUserCookie = async ({id, token, username}: IUserLoginCookies) => {
  cookies.set("id", id, {
    maxAge: cookie_max_age,
  });
  cookies.set("token", token, {
    maxAge: cookie_max_age,
  });
  cookies.set("username", username, {
    maxAge: cookie_max_age,
  });
}

export const GetUserCookie = async (): Promise<IUserLoginCookies> => {
  const { id, token, username } = await cookies.getAll();

  return { id, token, username }
}

export const RemoveUserCookie = async (): Promise<void> => {
  cookies.remove("id")
  cookies.remove("token")
  cookies.remove("username")
}