import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemService } from '../services/postagem.service'; // ← caminho correto
import { Postagem } from './postagem.entidade';
import { PostagemController } from '../../app.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController], // ← Agora vai importar o controller certo

  exports: [TypeOrmModule],
})
export class PostagemModule {}
