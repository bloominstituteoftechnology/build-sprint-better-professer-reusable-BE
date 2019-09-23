
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()

      tbl.string('username', 128).unique().notNullable()
      tbl.string('password', 128).notNullable()
      tbl.string('first_name', 128).notNullable()
      tbl.string('last_name', 128).notNullable()
  })
  .createTable('students', tbl => {
      tbl.increments()
      
      tbl.string('student_name', 128).notNullable()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('projects', tbl => {
      tbl.increments()

      tbl.string('project_name', 128).notNullable()
      tbl.string('description', 128)
      tbl.integer('student_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('messages', tbl => {
      tbl.increments()

      tbl.text('message').notNullable()
      tbl.datetime('date_time').notNullable()
      tbl.integer('student_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('messages')
  .dropTableIfExists('projects')
  .dropTableIfExists('students')
  .dropTableIfExists('users')
};
