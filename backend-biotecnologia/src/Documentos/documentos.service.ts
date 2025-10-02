import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './documentos.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private readonly documentoRepo: Repository<Documento>,
  ) {}

  async guardarDocumento(nombre: string, tipo: string, ruta: string) {
    const nuevoDocumento = this.documentoRepo.create({ nombre, tipo, ruta });
    return await this.documentoRepo.save(nuevoDocumento);
  }

  async listarDocumentos() {
    return await this.documentoRepo.find();
  }

  async obtenerDocumento(id: number) {
    return await this.documentoRepo.findOne({ where: { id } });
  }

  async eliminarDocumento(id: number) {
    return await this.documentoRepo.delete(id);
  }
}
