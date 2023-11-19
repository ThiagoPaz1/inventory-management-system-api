import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
