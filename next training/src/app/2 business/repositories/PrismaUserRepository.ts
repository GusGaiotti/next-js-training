import { PrismaClient, User as PrismaUser } from "@prisma/client";
import { User } from "@/app/1 domain/entities/User";
import { IUserRepository } from "./iUserRepository";



const prisma = new PrismaClient();

export class PrismaUserRepository implements IUserRepository {

    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { id } });
        return user ? new User(
          user.id!, user.name!, user.email!, user.password!, user.createdAt!, user.updatedAt!
        ) : null;
      }

    async findAll(): Promise<User[]> {
        const users = await prisma.user.findMany();
        return users.map(user => new User(
          user.id!, user.name!, user.email!, user.password!, user.createdAt!, user.updatedAt!
        ));
    }   

    async create(user: User): Promise<User> {
        
        const userCreated = await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
        return new User(
            userCreated.id!, userCreated.name!, userCreated.email!, userCreated.password!, userCreated.createdAt!, userCreated.updatedAt!
        );
    }

    async update(user: User): Promise<User> {
        
        const userUpdated = await prisma.user.update({
            where: { id: user.id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
        
        return new User(
            userUpdated.id!, userUpdated.name!, userUpdated.email!, userUpdated.password!, userUpdated.createdAt!, userUpdated.updatedAt!
        );
    }

            async delete(id: string): Promise<void> {
                await prisma.user.delete({ where: { id } });
                }
}
