/* eslint-env node */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function getExternals(env) {
    if (env === "prod") {
        return [
            "react",
            "react-dom"
        ];
    }
    return;
}


module.exports = function (env) {
    return [
        {
            entry: {
                navbar: "./static/js/navbar/App.jsx",
                sideMenu: "./static/js/side-menu/App.jsx",
                index: "./static/js/index.js"
            },
            output: {
                path: path.resolve(__dirname, "public/js"),
                filename: "[name].dist.js",
                library: "tandooriUi"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        use: [{
                            loader: "babel-loader",
                            options: {
                                presets: ["es2015", "react"],
                                plugins: ["transform-object-rest-spread"]
                            }
                        }]
                    }
                ]
            },
            devtool: "source-map",
            externals: getExternals(env)
        },
        {
            entry: {
                tui: "./static/sass/main.scss"
            },
            output: {
                path: path.resolve(__dirname, "public/css"),
                filename: "tui.css"
            },
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ["css-loader", "sass-loader"]
                        })
                    },
                    {
                        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                        loader: "url-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, "public/font")]
                        }
                    }
                ]
            },
            plugins: [
                new ExtractTextPlugin({
                    filename: "tui.css"
                })
            ],
            devtool: "source-map"
        }
    ];
};
