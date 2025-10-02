import { Controller, Post, Get, Delete, Param, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentosService } from './documentos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';   // 👈 IMPORTAR AQUÍ
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('documentos')
@UseGuards(JwtAuthGuard, RolesGuard)   // 👈 Aplicamos guardias
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post('upload')
  @Roles('admin')   // 👈 solo admin puede subir
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.documentosService.guardarDocumento(file.originalname, file.mimetype, file.path);
  }

  @Get()
  @Roles('admin', 'usuario')   // 👈 admin y usuario pueden listar
  async listar() {
    return this.documentosService.listarDocumentos();
  }

  @Get(':id')
  @Roles('admin', 'usuario')
  async obtener(@Param('id') id: number) {
    return this.documentosService.obtenerDocumento(id);
  }

  @Delete(':id')
  @Roles('admin')   // 👈 solo admin puede borrar
  async eliminar(@Param('id') id: number) {
    return this.documentosService.eliminarDocumento(id);
  }
}