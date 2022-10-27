const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '/game-app/',
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/common.scss";`,
            },
        },
    },
})
