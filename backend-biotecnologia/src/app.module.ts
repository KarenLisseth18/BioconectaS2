// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { DocumentosModule } from './Documentos/documentos.module'; //NUEVO

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',   // o 'postgres'
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'bioconeecta',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
  ],
})
export class AppModule {}
