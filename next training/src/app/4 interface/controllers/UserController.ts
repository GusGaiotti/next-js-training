import { PrismaUserRepository } from "@/app/2 business/repositories/PrismaUserRepository";
import { UserService } from "@/app/2 business/services/UserService";
import { GetUser } from "@/app/3 application/useCases/GetUser";
import { Request, Response } from "express";

const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const getUser = new GetUser(userService);


export class UserController {
    async getUserById(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const user = await getUser.execute(id);
        res.status(200).json(user);
      } catch (error) {
        if (error instanceof Error) {
          res.status(404).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    }
  }