// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::restaurant.restaurant",({ strapi }) => ({
    async find(ctx) {
            let restaurants;
            console.log("query is: ",ctx.query)
        
            if (ctx.query._q) {
              restaurants = await strapi.api.restaurant.services.restaurant.search(ctx.query);
            } else {
              restaurants = await await super.find(ctx.query);
            }
            
            // console.log(restaurants)
            restaurants = await Promise.all(
              restaurants.data.map(async (restaurant) => {
                // restaurant.note = await strapi.api.review.services.review.average(restaurant.id);
                const entity = await strapi.service('api::review.review').average(restaurant.id);
                const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
                // console.log("sanitzied entity",sanitizedEntity);
                restaurant.note =  sanitizedEntity;
                // console.log("single resturant:",restaurant);
                return restaurant;
              })
            );
        
            return restaurants;
          },
  })
);

//custom controller
// module.exports = {
//   find: async (ctx) => {
//     let restaurants;

//     if (ctx.query._q) {
//       restaurants = await strapi.api.restaurant.services.restaurant.search(ctx.query);
//     } else {
//       restaurants = await strapi.api.restaurant.services.restaurant.find(ctx.query);
//     }

//     restaurants = await Promise.all(
//       restaurants.map(async (restaurant) => {
//         restaurant.note = await strapi.api.review.services.review.average(restaurant.id);

//         return restaurant;
//       })
//     );

//     return restaurants;
//   },

//   findOne: async (ctx) => {
//     const { id } = ctx.params;
//     let restaurant = await strapi.api.restaurant.services.restaurant.findOne({ id });

//     if (!restaurant) {
//       return ctx.notFound();
//     }

//     restaurant.note = await strapi.api.review.services.review.average(restaurant.id);

//     let noteDetails = await strapi
//       .query('review')
//       .model.query(function (qb) {
//         qb.where('restaurant', '=', restaurant.id);
//         qb.groupBy('note');
//         qb.select('note');
//         qb.count();
//       })
//       .fetchAll()
//       .then((res) => res.toJSON());

//     restaurant.noteDetails = [];

//     for (let i = 5; i > 0; i--) {
//       let detail = noteDetails.find((detail) => {
//         return detail.note === i;
//       });

//       if (detail) {
//         detail = {
//           note: detail.note,
//           count: detail['count(*)'],
//         };
//       } else {
//         detail = {
//           note: i,
//           count: 0,
//         };
//       }

//       restaurant.noteDetails.push(detail);
//     }

//     return restaurant;
//   }
// };
