import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserRepository {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id: string) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async create(name: string, email: string, password: string) {
    return await prisma.user.create({ data: { name, email, password } });
  }
}                                                                   