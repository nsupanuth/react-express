const path = require('path')

module.exports = {
    entry : path.resolve(__dirname,'src','react','entry.js'),
    output : {
        path : path.resolve(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?$/,
                loader : 'babel-loader',
                exclude : /(node_modules)/
            },
            {
                test : /\.css?$/,
                loader : 'style-loader!css-loader'   // right to left
            }
        ]
    }
}