
exports.seed = function(knex) {
  return knex('users').insert([
    {username: "prof", password: "prof", first_name: "Indiana", last_name: "Jones"},
    {username: "gandalf", password: "gandalf", first_name: "Mithrandir", last_name: "The Grey"}
  ])
};
