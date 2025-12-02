import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.Entidade';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id },
    });

    if (!postagem) {
      throw new NotFoundException(`Postagem com ID ${id} não encontrada`);
    }

    return postagem;
  }

  async create(postagem: Postagem): Promise<Postagem> {
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
    });
  }

  // MÉTODO DELETE SEGUINDO O TUTORIAL
  async delete(id: number): Promise<DeleteResult> {
    // Primeiro verifica se a postagem existe
    await this.findById(id); // Se não existir, lança NotFoundException

    // Se existir, executa o delete
    return await this.postagemRepository.delete(id);
  }

  // Alternativa: Método delete com verificação de affected rows
  async deleteWithCheck(id: number): Promise<DeleteResult> {
    const resultado = await this.postagemRepository.delete(id);

    if (resultado.affected === 0) {
      throw new NotFoundException(`Postagem com ID ${id} não encontrada`);
    }

    return resultado;
  }
}
