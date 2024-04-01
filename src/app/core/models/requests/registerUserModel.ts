// Current model to create account displays more props
// We need to refactor the RegisterUserModel in order 
// to display in the Swagger only the required information
// For reaching this we might user mapper. 
export class RegisterUserModel {
  fullName: string;
  email: string;
  password: string;

  constructor(fullName: string, email: string, password: string) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
}
