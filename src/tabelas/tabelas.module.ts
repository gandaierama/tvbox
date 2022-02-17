import { Module } from '@nestjs/common';
import { TabelasService } from './tabelas.service';
import { TabelasController } from './tabelas.controller';

@Module({
  controllers: [TabelasController],
  providers: [TabelasService]
})
export class TabelasModule {}
