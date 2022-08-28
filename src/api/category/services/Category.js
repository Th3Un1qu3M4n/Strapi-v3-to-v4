// path: ./src/api/category/category/category.js

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::category.category");

// module.exports = (
//   {
//     strapi
//   }
// ) => {
//   return {};
// };
