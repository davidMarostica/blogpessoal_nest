import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from './Tema/tema.module';
import { Tema } from './Tema/entities/tema.entity';
import { PostagemModule } from './postagem/postagem.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Postagem } from './postagem/entities/postagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'generetion',
      password: '123',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
})
export class AppModule {}
