import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProdutos1652750332499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produto",
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
                        name: "preco",
                        type: "decimal(9,2)"
                    },
                    {
                        name: "quantidade",
                        type: "int"
                    }
                ]
            })
        )
        await queryRunner.query("ALTER TABLE produto CHANGE id id INT AUTO_INCREMENT");
        await queryRunner.query("insert into produto values (0,\"Arroz\", 5.1, 15)");
        await queryRunner.query("insert into produto values (0,\"feijao\", 2.3, 12)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produto");
    }

}
