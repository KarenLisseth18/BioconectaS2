import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './documentos.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private documentosRepo: Repository<Documento>,
  ) {}

  async crear(nombre: string, ruta: string) {
    const doc = this.documentosRepo.create({ nombre, ruta });
    return this.documentosRepo.save(doc);
  }

  async listar() {
    return this.documentosRepo.find();
  }
}
