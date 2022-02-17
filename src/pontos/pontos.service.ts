import { Injectable } from '@nestjs/common';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';

@Injectable()
export class PontosService {
  create(createPontoDto: CreatePontoDto) {
    return 'This action adds a new ponto';
  }

  findAll() {
    return `This action returns all pontos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ponto`;
  }

  update(id: number, updatePontoDto: UpdatePontoDto) {
    return `This action updates a #${id} ponto`;
  }

  remove(id: number) {
    return `This action removes a #${id} ponto`;
  }
}
