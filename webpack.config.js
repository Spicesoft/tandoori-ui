/* eslint-env node */
const path = require("path");


module.exports = {
    entry: {
        navbar: "./static/js/navbar/App.jsx",
        sideMenu: "./static/js/side-menu/App.jsx"
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].dist.js"
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
    }
};
