
import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Groups', (table: any) => {
        table.increments('id').primary();
        table.string('group').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Groups')
}