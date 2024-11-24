import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ActividadModule } from './Actividades/actividad.module'; 
import { PaqueteModule } from './Paquete/paquete.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST, 
      port: parseInt(process.env.DATABASE_PORT, 10), 
      username: process.env.DATABASE_USERNAME, 
      password: process.env.DATABASE_PASSWORD, 
      database: process.env.DATABASE_NAME, 
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false, 
      autoLoadEntities: true,
      synchronize: true, 
    }),

    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      playground: true, 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

  
    ActividadModule,
    PaqueteModule,
  ],
})
export class AppModule {}