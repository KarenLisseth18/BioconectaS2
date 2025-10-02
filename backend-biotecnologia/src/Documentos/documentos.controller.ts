import { Controller, Post, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentosService } from './documentos.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('documentos')
export class DocumentosController {
  constructor(private documentosService: DocumentosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.documentosService.crear(file.originalname, file.path);
  }

  @Get()
  async listar() {
    return this.documentosService.listar();
  }
}
