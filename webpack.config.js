module.exports = {
    entry: "./main",
    resolve: {
        extensions: [".js", ".ts"]
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /.ts$/,
            loader: "ts-loader"
        }]
    }
};
