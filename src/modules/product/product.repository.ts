import { PrismaService } from "src/prisma/config";

export class ProductRepository {
  constructor (private prismaService: PrismaService) {}
}