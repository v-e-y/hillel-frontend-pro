const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => {
    const isDevelopment = env.MODE === "development";

    return {
        mode: isDevelopment ? "development" : "production",
        entry: "./src/js/index.js",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
        },
        devtool: isDevelopment ? "inline-source-map" : "source-map",
        plugins: [new MiniCssExtractPlugin()],
        optimization: {
            minimize: !isDevelopment,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.sharpMinify,
                        options: {
                            encodeOptions: {
                                jpeg: {quality: 20, progressive: true},
                            },
                        },
                    }
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "images",
                            }
                        },
                    ]
                },
            ],
        },
    };
};
