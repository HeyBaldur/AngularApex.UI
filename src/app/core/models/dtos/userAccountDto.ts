export class UserAccountDto {
  id: number;
  fullName: string;

  constructor(id: number, fullName: string) {
    this.id = id;
    this.fullName = fullName;
  }
}
