import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/iUserRepository";


export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(name: string, email: string, password: string): Promise<User> {
    if (!name.trim() || !email.trim() || !password.trim()) {

    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {

    }

    const user = new User('', name, email, password, new Date(), new Date());
    return this.userRepository.create(user);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}
