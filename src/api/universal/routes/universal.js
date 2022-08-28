// path: ./src/api/universal/routes/universal.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::universal.universal");
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/universals',
//       handler: 'universal.find',
//       config: { policies: [] }
//     },
//     {
//       method: 'GET',
//       path: '/universals/:id',
//       handler: 'universal.findOne',
//       config: { policies: [] }
//     },
//     {
//       method: 'POST',
//       path: '/universals',
//       handler: 'universal.create',
//       config: { policies: [] }
//     },
//     {
//       method: 'PUT',
//       path: '/universals/:id',
//       handler: 'universal.update',
//       config: { policies: [] }
//     },
//     {
//       method: 'DELETE',
//       path: '/universals/:id',
//       handler: 'universal.delete',
//       config: { policies: [] }
//     }
//   ]
// }