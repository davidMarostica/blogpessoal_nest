import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O título é obrigatório!' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres!' })
  @MinLength(3, { message: 'O título deve ter no mínimo 3 caracteres!' })
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty({ message: 'O texto é obrigatório!' })
  @MaxLength(1000, { message: 'O texto deve ter no máximo 1000 caracteres!' })
  @MinLength(10, { message: 'O texto deve ter no mínimo 10 caracteres!' })
  @Column({ length: 1000, nullable: false })
  texto: string;

  @CreateDateColumn()
  data: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;

  // Opcional: Campos adicionais
  @IsOptional()
  @MaxLength(50, { message: 'O autor deve ter no máximo 50 caracteres!' })
  @Column({ length: 50, default: 'Anônimo' })
  autor: string;

  @Column({ default: true })
  ativa: boolean;
}
