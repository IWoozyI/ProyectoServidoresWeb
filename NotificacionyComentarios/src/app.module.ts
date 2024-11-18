// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './resolver/app.resolver';  // Resolver donde definirás tus consultas y mutaciones
import { AppService } from './app.service';
import { IvehiculoModule } from './ivehiculo/ivehiculo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,  // Esto genera automáticamente el esquema GraphQL a partir de los decoradores
      playground: true,      // Habilita GraphQL Playground (interfaz gráfica para probar consultas)
    }),
    IvehiculoModule,
  ],
  providers: [AppService, AppResolver],  // Asegúrate de que tu resolver esté incluido aquí
})
export class AppModule {}
