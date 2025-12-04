import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entidade';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find({
      relations: ['tema'],
      order: { data: 'DESC' },
    });
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id },
      relations: ['tema'], // CARREGA A RELAÇÃO COM TEMA
    });

    if (!postagem) {
      throw new NotFoundException(`Postagem com ID ${id} não encontrada`);
    }

    return postagem;
  }

  async create(postagem: Postagem): Promise<Postagem> {
    // Se não tiver data, define a data atual
    if (!postagem.data) {
      postagem.data = new Date();
    }
    return this.postagemRepository.save(postagem);
  }

  async update(id: number, postagem: Postagem): Promise<Postagem> {
    const existente = await this.findById(id); // garante que existe
    const atualizado = Object.assign(existente, postagem);
    return this.postagemRepository.save(atualizado);
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: ['tema'],
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    // Primeiro verifica se a postagem existe
    await this.findById(id); // Se não existir, lança NotFoundException
    // Se existir, executa o delete
    return await this.postagemRepository.delete(id);
  }
}
