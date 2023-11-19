import { PrismaService } from "src/prisma/config";
import { CreateProductDto } from "./dto/create-product.dto";

export class ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateProductDto) {
    this.prismaService.product.create({ data });
  }
}