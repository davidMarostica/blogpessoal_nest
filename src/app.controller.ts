import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Postagem } from './postagem/entities/postagem.entidade';
import { PostagemService } from './postagem/services/postagem.service';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }
}
