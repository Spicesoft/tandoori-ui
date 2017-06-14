/* eslint-env node */
const path = require("path");

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
    return {
        entry: {
            navbar: "./static/js/navbar/App.jsx",
            sideMenu: "./static/js/side-menu/App.jsx"
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
    };
};
