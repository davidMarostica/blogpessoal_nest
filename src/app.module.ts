import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.Entidade';
import { PostagemController } from './postagem/controllers/postagem.controller';
import { PostagemService } from './postagem/services/postagem.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'generetion',
      password: '123',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Postagem]),
  ],
  controllers: [PostagemController], // 👉 registre aqui
  providers: [PostagemService], // 👉 registre aqui
})
export class AppModule {}
