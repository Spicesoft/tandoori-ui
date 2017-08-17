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
    return [{
        entry: {
            main: "./static/js/main/App.jsx"
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
        resolve: {
            alias: {
                root: path.resolve(__dirname, "")
            }
        },
        devtool: "source-map",
        externals: getExternals(env)
    },
    {  // Style part
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
        resolve: {
            alias: {
                fonts: path.resolve(__dirname, "public/font")
            }
        },
        devtool: "source-map",
        plugins: [
            new ExtractTextPlugin({
                filename: "tui.css"
            })
        ]
    }];
};
