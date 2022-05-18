import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cliente {
    @Column()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;
}
