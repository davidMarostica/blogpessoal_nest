import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemService } from './services/postagem.service';
import { PostagemController } from './controllers/postagem.controller';
import { Postagem } from './entities/postagem.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {}
