import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Table } from "typeorm"

@Entity()
export class Produto {
    @Column()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    quantidade: number;
    
    @Column()
    preco: number;
}
