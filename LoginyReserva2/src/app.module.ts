import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { PaqueteModule } from './paquete/paquete.module';
import { ReservaModule } from './reserva/reserva.module';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DB_SSL ==="require",
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions:{
        'graphql-ws':true
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ClienteModule, PaqueteModule, ReservaModule, RolModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
