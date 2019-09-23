
exports.seed = function(knex) {
  return knex('students').insert([
    {user_id: 1, student_name: "James Jimmerson", major: "Geology"},
    {user_id: 1, student_name: "Mallory Jones", major: "History"},
    {user_id: 1, student_name: "Alice Wonderland", major: "History"},
    {user_id: 2, student_name: "Jennie Pullman", major: "History"},
    {user_id: 2, student_name: "Michael Johnson", major: "Computer Science"},
    {user_id: 2, student_name: "Usain Bolt", major: "Kineseology"},
  ])
};
