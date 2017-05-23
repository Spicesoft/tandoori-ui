/* eslint-env node */
const path = require("path");


module.exports = {
    entry: "./static/js/App.jsx",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "dist.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"]
                    }
                }]
            }
        ]
    }
};
