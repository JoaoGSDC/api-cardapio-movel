
import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Requests', (table: any) => {
        table.increments('id').primary();
        table.string('code').notNullable();
        table.string('cpf').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Requests')
}