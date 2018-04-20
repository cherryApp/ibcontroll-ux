export class User {
  id?: string | number;
  email: string = "";
  name: string = "";
  birthDate: Date = new Date();
  eyeColor: string = "";
  livingIn: string = "";
  footSize: number = 40;

  constructor(settings: {} = {}) {
    for (let k in settings) {
      this[k] = settings[k];
    }
  }
}
