import { Column, MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrdem1652788550559 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {    
        await queryRunner.createTable(
            new Table({
                name: "ordem",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "quantidade",
                        type: "int"
                    },
                    {
                        name: "data",
                        type: "timestamp"
                    },
                    {
                        name: "id_cliente",
                        type: "int"
                    },
                    {
                        name: "id_produto",
                        type: "int"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_produto", 
                        columnNames: ["id_produto"],
                        referencedTableName: "produto",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_cliente", 
                        columnNames: ["id_cliente"],
                        referencedTableName: "cliente",
                        referencedColumnNames: ["id"]
                    }
                ]
            })            
        )
        await queryRunner.query("ALTER TABLE ordem CHANGE id id INT AUTO_INCREMENT");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ordem");
    }

}
