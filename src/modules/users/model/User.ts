import { v4 as uuidV4 } from "uuid";

class User {
  public admin: boolean;
  public id: string;
  public created_at: Date;
  public updated_at: Date;
  public name: string;
  public email: string;

  constructor(
    name: string,
    email: string,
    id?: string,
    created_at?: Date,
    updated_at?: Date
  ) {
    this.id = id || uuidV4();
    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
}

export { User };
