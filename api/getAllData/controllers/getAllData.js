'use strict';

const getHomeData = async (ctx) => {

    try {
        const empresa = await strapi.query('empresa').find({})
        const banners = await strapi.query('banners').find({})
        const brands = await strapi.query('nuestras-marcas').find({}) 
        const allies = await strapi.query('aliados').find({})
        const identities = await strapi.query('identidades').find({})
        const app = await strapi.query('app').find({})
        const canguroInTheWorld = await strapi.query('canguro-en-el-mundo').find({})
        const blogs = await strapi.query('blog').find({_limit:4})
        return {
            empresa: empresa[0],
            banners,
            brands,
            allies,
            identities,
            app: app[0],
            canguroInTheWorld,
            blogs,
        }
    } catch (error) {
        throw error

    }

}

module.exports = {
    home: getHomeData
};
