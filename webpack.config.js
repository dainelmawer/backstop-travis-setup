const autoprefixer = require('autoprefixer');
module.exports = [
    {
        entry: [
            './src/css/app.scss',
            './src/js/app.js'
        ],
        output: {
            filename: 'dist/js/bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'dist/css/bundle.css'
                            },
                        },
                        { 
                            loader: 'extract-loader' 
                        },
                        { 
                            loader: 'css-loader' 
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer()]
                            }
                        },
                        { 
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['./node_modules']
                            }
                        },
                    ]
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                      presets: ['es2015'],
                      plugins: ['transform-object-assign']
                    },
                  }
            ]
        }
    },
];