import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCliente1652788544511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cliente",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generatedIdentity: 'ALWAYS'
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "int"
                    }
                ]
            })
        )
        await queryRunner.query("ALTER TABLE cliente CHANGE id id INT AUTO_INCREMENT");
        await queryRunner.query("insert into cliente values (0,\"Joao Souza\", \"jose@bol.com\", 1112312312)");
        await queryRunner.query("insert into cliente values (0,\"Maria Alencar\", \"maria@bol.com\", 1143555533)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cliente");
    }
}