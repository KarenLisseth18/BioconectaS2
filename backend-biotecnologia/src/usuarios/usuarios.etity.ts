// src/usuarios/usuarios.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  nombre: string;

  @Column()
  password: string;  // <-- Esta propiedad faltaba

  @Column({ default: 'user' })  //  Nuevo campo: 'user' o 'admin'
  rol: string;
}

