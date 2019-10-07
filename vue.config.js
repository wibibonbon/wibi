// prettier-ignore

module.exports ={
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/variables.scss";`,
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
    
        svgRule.uses.clear();
    
        svgRule
          .use('vue-svg-loader')
          .loader('vue-svg-loader');
      },
}
