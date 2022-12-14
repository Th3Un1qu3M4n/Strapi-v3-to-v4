// path: ./src/api/category/routes/category.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::category.category");
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/categories',
//       handler: 'Category.find',
//       config: { policies: [] }
//     },
//     {
//       method: 'GET',
//       path: '/categories/:id',
//       handler: 'Category.findOne',
//       config: { policies: [] }
//     },
//     {
//       method: 'POST',
//       path: '/categories',
//       handler: 'Category.create',
//       config: { policies: [] }
//     },
//     {
//       method: 'PUT',
//       path: '/categories/:id',
//       handler: 'Category.update',
//       config: { policies: [] }
//     },
//     {
//       method: 'DELETE',
//       path: '/categories/:id',
//       handler: 'Category.delete',
//       config: { policies: [] }
//     }
//   ]
// }