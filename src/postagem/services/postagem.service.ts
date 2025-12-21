import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find({
      relations: {
        tema: true,
        usuario: true,
      },
      order: { data: 'DESC' },
    });
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id },
      relations: {
        tema: true,
        usuario: true,
      },
    });

    if (!postagem) {
      throw new NotFoundException(`Postagem com ID ${id} não encontrada`);
    }

    return postagem;
  }

  async create(postagem: Postagem): Promise<Postagem> {
    if (!postagem.data) {
      postagem.data = new Date();
    }
    return this.postagemRepository.save(postagem);
  }

  async update(id: number, postagem: Postagem): Promise<Postagem> {
    const existente = await this.findById(id);
    const atualizado = this.postagemRepository.merge(existente, postagem);
    return this.postagemRepository.save(atualizado);
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        tema: true,
        usuario: true,
      },
      order: { data: 'DESC' },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.postagemRepository.delete(id);
  }
}
