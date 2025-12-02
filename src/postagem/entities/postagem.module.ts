import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem.Entidade';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [],
  controllers: [],
  exports: [],
})
export class PostagemModule {}
