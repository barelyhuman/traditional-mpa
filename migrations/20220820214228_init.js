/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ideas", (table) => {
    table.increments("id").unique().primary().notNullable();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.string("source").nullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ideas");
};
