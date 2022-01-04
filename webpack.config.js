const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // src/index.tsx` 파일을 진입점으로 설정
    entry: path.resolve(__dirname, 'src/index.tsx'),
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            }
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true // SPA를 위한 설정
    },
    plugins: [
        // index.html`에 번들링된 스크립트 파일과 스타일이 자동으로 연결
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
};