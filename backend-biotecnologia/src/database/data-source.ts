// src/database/data-source.ts
import { DataSource } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.etity';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '', // cámbiala si tu MySQL usa otra
  database: 'bioconecta', // asegúrate que existe en MySQL
  entities: [Usuarios],
  synchronize: true,
});

export default dataSource;
