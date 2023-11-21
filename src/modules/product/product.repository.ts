import { CreateProductDto } from './dto/create-product.dto';

import { prisma } from 'src/database/client';

export class ProductRepository {
  async create(data: CreateProductDto) {
    return await prisma.product.create({ data });
  }

  async getAll() {
    return await prisma.product.findMany();
  }
}
