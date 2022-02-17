import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontosModule } from './pontos/pontos.module';
import { ImagesModule } from './images/images.module';
import { VideosModule } from './videos/videos.module';
import { TabelasModule } from './tabelas/tabelas.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PontosModule, ImagesModule, VideosModule, TabelasModule, OfertasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
