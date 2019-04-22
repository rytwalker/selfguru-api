exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: '63c4770c-5bd9-403b-902b-9820efdd0ae8',
          title: 'Polarised high-level benchmark',
          date_time_to_post: '2018-10-13T10:59:52Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '97e44364-fcea-4106-b5c2-dcb27c99fcd7',
          title: 'Optimized analyzing matrix',
          date_time_to_post: '2018-07-05T04:46:20Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '8cf7dceb-3c54-4d2d-a89b-111677c516bc',
          title: 'Innovative intermediate benchmark',
          date_time_to_post: '2018-09-27T15:32:43Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '6ffaa4e9-2193-4468-af26-2f2260934300',
          title: 'Devolved responsive software',
          date_time_to_post: '2019-03-01T01:49:57Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: 'd8f886b3-001f-45f0-a172-c438aee29f9e',
          title: 'Synergized background collaboration',
          date_time_to_post: '2018-12-29T09:55:06Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '470a71d7-e50d-423f-a0fb-45292f8acd57',
          title: 'Multi-channelled systemic analyzer',
          date_time_to_post: '2019-03-22T15:35:03Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '0c168f3a-d858-4c94-9dfe-7bb4110750bf',
          title: 'Object-based optimizing artificial intelligence',
          date_time_to_post: '2018-08-27T04:59:52Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: '4e0ce6cc-81d4-46a5-81dd-a68c9721ed4a',
          title: 'Public-key neutral local area network',
          date_time_to_post: '2018-08-15T02:52:40Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: 'e51f6a7e-845d-485e-921a-f36dd08e3035',
          title: 'Assimilated attitude-oriented Graphical User Interface',
          date_time_to_post: '2019-04-03T04:24:39Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        },
        {
          id: 'e3c26f87-c72c-487e-bd6f-e9a8d963a1bc',
          title: 'Fundamental eco-centric array',
          date_time_to_post: '2019-04-08T05:00:18Z',
          user_id: 'd7769522-9090-4643-b3d4-2206e49d97e2'
        }
      ]);
    });
};
