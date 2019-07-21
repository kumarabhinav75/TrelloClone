module.exports = {  
    
    entry: __dirname + '/src/index.js',
    output: {    
        path: __dirname + '/public',    
        publicPath: '/',    
        filename: 'bundle.js'  
    },  
    devServer: {    
        contentBase: './public',  
    }, 
    module: {    
        rules: [    
            {      
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,      
                use: ['babel-loader']    
            }    
        ]  
    },
};
