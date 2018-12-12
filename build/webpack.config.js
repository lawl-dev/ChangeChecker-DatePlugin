const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/DatePlugin.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/../dist/'),
        filename: 'change-checker-date-plugin.js',
        library: 'change-checker-date-plugin',
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: info => {
            var $filename = 'sources://change-checker-date-plugin/' + info.resourcePath;
            return $filename;
        }
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: { configFile: "../tsconfig.json" }
            }
        ]
    }
};
