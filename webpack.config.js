const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    entry: path.resolve(appDirectory, "sandbox/src/Main.ts"), //path to the main .ts file
    output: {
        filename: "js/nacatamalon.js", //name for the js file that is created/compiled in memory
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "nacatamal-on": path.resolve(appDirectory, "nacatamal-on"),
        }
    },
    devServer: {
        host: "localhost",
        port: 2022, //port that we're using for local host (localhost:8080)
        static: path.resolve(appDirectory, "sandbox"), //tells webpack to serve from the public folder
        hot: true,
        open: true,
        devMiddleware: {
            publicPath: "/",
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.frag?$/,
                use: "raw-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDirectory, "sandbox/index.html"),
        })
    ],
    mode: "development",
};