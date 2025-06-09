import slugify from "slugify";
import { AfterUpdate, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    slug:string;
    
    @Column({default:true})
    isActive:boolean;

    @BeforeInsert()
    @AfterUpdate()
    generateSlug(){
        const date=new Date();
        this.slug = `${slugify(this.name)}-${date.getTime()}`;
    }
}
