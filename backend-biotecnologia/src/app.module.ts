import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { DocumentosModule } from './Documentos/documentos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'biotec',
      password: 'oki31xdc!#biotec',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    DocumentosModule,
  ],
})
export class AppModule {}
