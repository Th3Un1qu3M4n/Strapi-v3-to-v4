// path: ./src/api/review/services/review.js

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::review.review", ({ strapi }) =>  ({
    // Method 1: Creating an entirely new custom service
    async average(restaurant) {
        let reviews = await strapi.query('api::review.review').findWithCount({
            select: ['note'],
            where: { restaurant: restaurant },
          });
        const numReviews = reviews[1]
        let note;
        if(numReviews===0){
            note = null
        }else if(numReviews===1){
            note = reviews[0][0].note;
        }else{
            note = reviews[0].reduce((a, b) => (a.note + b.note)) / numReviews;
        }            

        // console.log(note);
        return note;
        

    },
})
);

// module.exports = (
//   {
//     strapi
//   }
// ) => {
//   return {
//     // Get restaurant note from review's note
//     average: restaurant => {
//       return strapi
//         .query('review')
//         .model.query(function(qb) {
//           qb.avg('note as note');
//           qb.where('restaurant', '=', restaurant);
//         })
//         .fetch()
//         .then(res => res.get('note'));
//     }
//   };
// };
