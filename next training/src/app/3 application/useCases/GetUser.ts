import { NotFoundError } from "@/app/1 domain/errors/NotFoundErrors";
import { UserService } from "@/app/2 business/services/UserService";

export class GetUser {
  constructor(private userService: UserService) {}

  async execute(userId: string) {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
}
