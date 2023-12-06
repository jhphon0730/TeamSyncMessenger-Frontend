export namespace userModels {
  export class UserModel {
    username: string;
    email: string;

    constructor(username: string, email: string) {
      this.username = username
      this.email = email
    }
  }
  
  export class LoginUserModel {
    username: string;
    password: string;

    constructor(username: string, password: string) {
      this.username = username
      this.password = password
    }
  }

  export class RegisterUserModel {
    username: string
    password: string
    password_check?: string
    email: string

    constructor(
      username: string,
      password: string,
      password_check: string,
      email: string
    ) {
      this.username = username
      this.password = password
      this.password_check = password_check
      this.email = email
    }
  }
}
