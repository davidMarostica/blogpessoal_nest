import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../entities/postagem.entity';
import { DeleteResult } from 'typeorm';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  // Agora funciona com GET /postagens
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  async findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findAllByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  // Agora funciona com PUT /postagens/:id
  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() postagem: Postagem,
  ): Promise<Postagem> {
    return this.postagemService.update(id, postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.postagemService.delete(id);
  }
}
