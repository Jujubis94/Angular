export class User {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
  
    constructor(name: string, firstName: string, age: number, quote: string, photo: string) {
      this.firstName = firstName;
      this.name = name;
      this.age = age;
      this.quote = quote;
      this.photo = photo;
    }
  }
  