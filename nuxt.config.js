module.exports = {
    build: {
        //实现多次重复操作只打包一次，减少最终打包文件体积
        // vendor: ['axios', 'iview']
        //Nuxt.js 使用 webpack-bundle-analyzer 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它。
        analyze: true,
        //配置是否允许 vue-devtools 调试。
        devtools: true,
        babel: {
            //一下是默认写法（官方推荐的写法），编译过程中会从项目的根目录下的 .babelrc文件中读取配置。.babelrc是一个json格式的文件。
            //babelrc: false,
            //默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。
            //cacheDirectory: undefined,
            //默认为 @nuxt/babel-preset-app 在client构建中是ie：'9'，在server构建中是node:'current'。
            presets: ['@nuxt/babel-preset-app']
        },
        loaders: [
            {
                test: /\.(scss|sass)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css'
                }]
            }
        ]
        
    },
    css: [
        // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
        'bulma',
        // 项目里要用的 CSS 文件
        '@/assets/css/main.css',
        // 项目里要使用的 SCSS 文件
        '@/assets/css/main.scss'
    ]
}