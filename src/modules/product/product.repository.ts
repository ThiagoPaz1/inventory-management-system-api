import { CreateProductDto } from './dto/create-product.dto';

import { prisma } from 'src/database/client';
import { OrderBy } from './types';

export class ProductRepository {
  async create(data: CreateProductDto) {
    return await prisma.product.create({ data });
  }

  async getAll(skip?: number, take?: number, orderBy?: OrderBy) {
    return await prisma.product.findMany({
      orderBy: {
        id: orderBy,
      },
      skip,
      take,
    });
  }
}
