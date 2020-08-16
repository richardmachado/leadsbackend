exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
      .unique()
    table.string("username")
      .unique()
      .notNullable()
    table.string("password")
      .notNullable()
  
  })
  
  await knex.schema.createTable("leads", (table) => {
    table.increments("id")
      .unique()
    table.string("name")
      .notNullable()
    table.string("email")
      .notNullable()
    table.string("message")
  
  })
  
}
  
  exports.down = async function (knex) {

    await knex.schema.dropTableIfExists("leads")
    await knex.schema.dropTableIfExists("users")
  
  };
