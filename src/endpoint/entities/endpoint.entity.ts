import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export type HttpEndpoint ='GET' | 'POST' | 'PUT' | 'DELETE';
@Entity()
export class Endpoint {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    url:string;
    @Column()
    method:HttpEndpoint;
}
