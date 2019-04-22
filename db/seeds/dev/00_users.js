const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 'd7769522-9090-4643-b3d4-2206e49d97e2',
          email: 'rytwalker@gmail.com',
          password: bcrypt.hashSync('password', 12),
          username: 'hardlyreal'
        },
        {
          id: 'a3146566-f670-457f-a888-35a9af393a65',
          email: 'mtomsa1@artisteer.com',
          password: bcrypt.hashSync('L7fu8b2lcG', 12),
          username: 'iandreuzzi1'
        },
        {
          id: '428ea7f5-fde1-49bc-a3bb-3b6213cdbc89',
          email: 'tvader2@admin.ch',
          password: bcrypt.hashSync('pK5Pgg', 12),
          username: 'hklimov2'
        },
        {
          id: '88fad792-69c1-4350-9925-5644626ff26d',
          email: 'nbowsher3@paginegialle.it',
          password: bcrypt.hashSync('zrbuxpAh', 12),
          username: 'mlasseter3'
        },
        {
          id: '29d1d4e9-13db-48ae-ae46-68d862a6de2e',
          email: 'nrollins4@netscape.com',
          password: bcrypt.hashSync('UX5dZh9M', 12),
          username: 'sscroxton4'
        },
        {
          id: '3df85fe1-f6fa-4b97-857e-81e7e1157a9e',
          email: 'cskeemor5@uiuc.edu',
          password: bcrypt.hashSync('5JdxkFRPGWa', 12),
          username: 'hvannar5'
        },
        {
          id: '64053933-802f-4e73-a4b8-5cc6df798e31',
          email: 'pwash6@ycombinator.com',
          password: bcrypt.hashSync('NvxQYp5', 12),
          username: 'sebanks6'
        },
        {
          id: '69a7b2d6-98b9-45a0-a1f2-ae26cc8dd02f',
          email: 'bmasey7@businessweek.com',
          password: bcrypt.hashSync('oVygqabT9NG', 12),
          username: 'rmilward7'
        },
        {
          id: '13098b83-0026-4b01-bf77-fcc0da5f2a83',
          email: 'npaulusch8@de.vu',
          password: bcrypt.hashSync('mvLojFcX', 12),
          username: 'amogey8'
        },
        {
          id: 'e44c9157-b89a-408a-811d-528162fbc071',
          email: 'cmcginnell9@adobe.com',
          password: bcrypt.hashSync('uVqglTi', 12),
          username: 'egentzsch9'
        }
      ]);
    });
};
