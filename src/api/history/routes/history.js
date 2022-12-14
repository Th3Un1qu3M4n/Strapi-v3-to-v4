// path: ./src/api/history/routes/history.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::history.history");
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/histories',
//       handler: 'history.find',
//       config: { policies: [] }
//     },
//     {
//       method: 'GET',
//       path: '/histories/:id',
//       handler: 'history.findOne',
//       config: { policies: [] }
//     },
//     {
//       method: 'POST',
//       path: '/histories',
//       handler: 'history.create',
//       config: { policies: [] }
//     },
//     {
//       method: 'PUT',
//       path: '/histories/:id',
//       handler: 'history.update',
//       config: { policies: [] }
//     },
//     {
//       method: 'DELETE',
//       path: '/histories/:id',
//       handler: 'history.delete',
//       config: { policies: [] }
//     }
//   ]
// }