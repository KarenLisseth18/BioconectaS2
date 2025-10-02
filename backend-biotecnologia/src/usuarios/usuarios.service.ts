// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuarios.etity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepo: Repository<Usuarios>,
  ) {}

  crear(data: CrearUsuarioDto) {
    const usuarios = this.usuariosRepo.create(data);
    return this.usuariosRepo.save(usuarios);
  }

  listar() {
    return this.usuariosRepo.find();
  }

  async buscarPorEmail(email: string) {
    return this.usuariosRepo.findOne({ where: { email } });
  }
}
