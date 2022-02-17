import { Test, TestingModule } from '@nestjs/testing';
import { TabelasController } from './tabelas.controller';
import { TabelasService } from './tabelas.service';

describe('TabelasController', () => {
  let controller: TabelasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabelasController],
      providers: [TabelasService],
    }).compile();

    controller = module.get<TabelasController>(TabelasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
