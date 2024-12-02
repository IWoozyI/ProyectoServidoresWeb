import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'comentario'})
export class Comentario {
  
  @PrimaryGeneratedColumn('uuid')  
  @Field(() => ID)
  id:string
  
  @Column()
  @Field(() => String)
  contenido:string

  @Column()
  @Field(() => String)
  fechayhora:string

  
}
