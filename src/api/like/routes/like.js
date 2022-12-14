// path: ./src/api/like/routes/like.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::like.like");
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/likes',
//       handler: 'Like.find',
//       config: { policies: [] }
//     },
//     {
//       method: 'GET',
//       path: '/likes/:id',
//       handler: 'Like.findOne',
//       config: { policies: [] }
//     },
//     {
//       method: 'POST',
//       path: '/likes',
//       handler: 'Like.create',
//       config: { policies: [] }
//     },
//     {
//       method: 'PUT',
//       path: '/likes/:id',
//       handler: 'Like.update',
//       config: { policies: [] }
//     },
//     {
//       method: 'DELETE',
//       path: '/likes/:id',
//       handler: 'Like.delete',
//       config: { policies: [] }
//     }
//   ]
// }