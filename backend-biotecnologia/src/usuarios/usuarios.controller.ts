// src/usuarios/usuarios.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  crear(@Body() data: CrearUsuarioDto) {
    return this.usuariosService.crear(data);
  }

  @Get()
  listar() {
    return this.usuariosService.listar();
  }
}
