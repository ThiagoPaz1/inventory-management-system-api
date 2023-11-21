import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { ProductRepository } from './product.repository';
import { OrderBy } from './types';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }

  async findAll(skip?: number, take?: number, orderBy?: OrderBy) {
    return await this.productRepository.getAll(skip, take, orderBy);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
