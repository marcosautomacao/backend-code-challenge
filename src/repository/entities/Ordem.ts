import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

@Entity()
export class Ordem {
    @Column()
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    quantidade: number;
    
    @CreateDateColumn()
    data: Date;
    
    @OneToOne(() => Cliente)
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;
    
    @OneToOne(() => Produto)
    @JoinColumn({ name: "id_produto" })
    produto: Produto;

}
