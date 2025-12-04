import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from './Tema/tema.module';
import { Postagem } from './postagem/entities/postagem.entidade';
import { Tema } from './Tema/entities/tema.entity';
import { PostagemModule } from './postagem/entities/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'generetion',
      password: '123',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
  ],
})
export class AppModule {}
