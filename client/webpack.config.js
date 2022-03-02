// Node.js modules
const path = require("path");

// Webpack modules
const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Webpack configuration
module.exports = {
    mode: "development",
    entry: "./client/src/index.js",
    devtool: "inline-source-map",
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
                    outputPath: "i/",
                    name: "[name].[ext]",
                    esModule: false
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    outputPath: "f/",
                    name: "f[contenthash:8].[ext]"
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
            filename: "c/game.css"
        })
    ],
    output: {
        filename: "js/game.js",
        path: path.resolve(__dirname, "build")
    }
};