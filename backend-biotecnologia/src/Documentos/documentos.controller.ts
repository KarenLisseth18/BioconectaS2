import { Controller, Post, Get, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { DocumentosService } from './documentos.service';

@Controller('documentos')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      }
    }),
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(pdf|docx|xlsx|png|jpg)$/)) {
        return callback(new Error('Formato no permitido'), false);
      }
      callback(null, true);
    },
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const documento = await this.documentosService.guardarDocumento(
      file.originalname,
      file.mimetype,
      file.path,
    );

    return {
      mensaje: 'Archivo cargado y guardado en la BD',
      documento,
    };
  }

  @Get()
  listar() {
    return this.documentosService.listarDocumentos();
  }

  @Get(':id')
  obtener(@Param('id') id: number) {
    return this.documentosService.obtenerDocumento(id);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.documentosService.eliminarDocumento(id);
  }
}

