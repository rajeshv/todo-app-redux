// var path  = require('path');
config = {
   entry: './main.js',
	
   output: {
      // path: path.join(__dirname + '/'),
      path: "/home/rveedhi/code/react_examples/todo-app-redux",
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
