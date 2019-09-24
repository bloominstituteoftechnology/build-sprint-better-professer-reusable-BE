
exports.seed = function(knex) {
      return knex('projects').insert([
{project_name: "Draw a Blank", deadline: "11/1/2019", description: "The sky is clear,the stars are twinkling.", student_id: 1},
{project_name: "Wild Goose Chase", deadline: "12/12/2019", description: "Futilely pursue something that will never be attainable", student_id: 1},
{project_name: "Raining Cats and Dogs", deadline: "2/1/2020", description: "Make it rain very heavily", student_id: 1},
{project_name: "Shot In the Dark", deadline: "11/25/2019", description: "Attempt something that has little chance for success", student_id: 2},
{project_name: "Jumping the Gun", deadline: "12/11/2019", description: "Start too early before preparations are ready", student_id: 2},
{project_name: "Tough it Out", deadline: "12/3/2019", description: "Remain resillient even in hard times.", student_id: 3},
{project_name: "Elephant in the room", deadline: "1/19/2020", description: "Ignore a large, obvious problem or fail to address an issue that stands out in a major way", student_id: 3}
      ]);

};
