import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabelasService } from './tabelas.service';
import { CreateTabelaDto } from './dto/create-tabela.dto';
import { UpdateTabelaDto } from './dto/update-tabela.dto';

@Controller('tabelas')
export class TabelasController {
  constructor(private readonly tabelasService: TabelasService) {}

  @Post()
  create(@Body() createTabelaDto: CreateTabelaDto) {
    return this.tabelasService.create(createTabelaDto);
  }

  @Get()
  findAll() {
    return this.tabelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabelasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabelaDto: UpdateTabelaDto) {
    return this.tabelasService.update(+id, updateTabelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabelasService.remove(+id);
  }
}
