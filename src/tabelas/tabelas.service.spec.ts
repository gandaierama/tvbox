import { Test, TestingModule } from '@nestjs/testing';
import { TabelasService } from './tabelas.service';

describe('TabelasService', () => {
  let service: TabelasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabelasService],
    }).compile();

    service = module.get<TabelasService>(TabelasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
