import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";

@Entity('')
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especie: string

  @Column()
  raza: string

  @Column()
  sexo: string

  @Column()
  fechaNacimiento: string

  @Column()
  edad: number

  @Column()
  peso: number

  @Column()
  descripcion: string

  @Column()
  foto: string
  
  @Column()
  estado: string

}