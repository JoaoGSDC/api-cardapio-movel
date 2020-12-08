
import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Products', (table: any) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.integer('price').notNullable();

        table.integer('id_group')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Groups')
            .onUpdate('CASCADE');
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Products')
}