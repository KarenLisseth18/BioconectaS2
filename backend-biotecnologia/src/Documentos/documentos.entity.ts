import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;   // 👈 debe existir

  @Column()
  tipo: string;     // 👈 debe existir

  @Column()
  ruta: string;     // 👈 debe existir (puede ser la URL o path del archivo)
}
