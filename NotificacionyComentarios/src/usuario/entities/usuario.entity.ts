import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'usuario'})
export class Usuario {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string;

  @Column()
  @Field(() => String)
  nombre:string;

  @Column()
  @Field(() => String)
  email:string;

}
