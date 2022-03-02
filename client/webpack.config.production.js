// Node.js modules
const path = require("path");

// Webpack modules
const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Webpack configuration
module.exports = {
    mode: "production",
    entry: "./client/src/index.js",
    target: ["web", "es5"],
    devServer: {
        static: path.join(__dirname, "dist"),
        watchFiles: "*"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "img/",
                    name: "[name].[ext]",
                    esModule: false
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    outputPath: "fonts/",
                    name: "f[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.join(__dirname, "dist/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "css/game.css"
        })
    ],
    output: {
        filename: "js/game.js",
        path: path.resolve(__dirname, "build")
    }
};