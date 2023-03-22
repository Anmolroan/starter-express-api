exports.up = knex => {
    return knex
      .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .then(() => knex.schema.hasTable("course"))
      .then(exists => {
        if (!exists) {
          return knex.schema.createTable("course", table => {
            table
              .uuid("course_id")
              .primary()
              .notNullable()
              .defaultTo(knex.raw("uuid_generate_v4()"));
            table.string("course_name");
            table.string("class_link");
            table.string("date");
            table.jsonb("topic_name");
            table.string("time");
            table.timestamp("date_created");
            table.string("mentor_name")
          });
        }
        return false;
      });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("course");
  };
  
