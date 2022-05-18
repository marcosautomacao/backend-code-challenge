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
                    }
                ]
            })
        )
        await queryRunner.query("ALTER TABLE cliente CHANGE id id INT AUTO_INCREMENT");
        await queryRunner.query("insert into cliente values (0,\"Joao Souza\")");
        await queryRunner.query("insert into cliente values (0,\"Maria Alencar\")");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cliente");
    }
}