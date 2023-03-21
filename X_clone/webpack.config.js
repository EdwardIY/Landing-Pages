const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =  {
    mode: 'production',
    entry: {
        global: path.resolve(__dirname, './src/js/global'),
        home: path.resolve(__dirname, './src/js/home'),
        f9: path.resolve(__dirname, './src/js/f9')
    },
    
    output : {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './prod')
    },


    module: {
        rules: [
          {  test: /\.(s(a|c)ss)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']}
        ]
    },

    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
    })]
}