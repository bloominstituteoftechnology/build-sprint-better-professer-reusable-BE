const bcrypt = require('bcryptjs')


exports.seed = function(knex) {
  return knex('users').insert([
    {username: "prof", password: bcrypt.hashSync('prof', 1), first_name: "Indiana", last_name: "Jones"},
    {username: "gandalf", password: bcrypt.hashSync('gandalf', 1), first_name: "Mithrandir", last_name: "The Grey"}
  ])
};
