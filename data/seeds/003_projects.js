
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(
        {
          id: 1, 
          users_projectid: 1,
          category: 'Virtual Reality',
          subcategory: 'Wellness',
          status: 'Active',
          title: 'Virtual Therapy for Veterans',
          startDate: '02/14/2020',
          endDate: '04/14/2020',
          cta: 'Taking Care of our Heros',
          desc: 'Virual therapy for veterans suffering from PTSD. Virtual Reality programs bring therapy to veterans where they are when they need it.',
          goal: '100,000',
          primaryPic: '',
        },
      );
    });
};