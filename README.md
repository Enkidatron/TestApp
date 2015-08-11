# README

## Test application for integrating npm (and others) into a Rails ecosystem
I am going to be following nambrot/rails-webpack-react-flux and justin808/react-webpack-rails-tutorial. 
Anything I learn will be because of them, anything I mess up will be because of me. 

### License: 

MIT

### Command Log: 
rails new TestApp
/app/assets/npm install
rails generate controller app
npm install webpack -g
npm install webpack-dev-server -g
	currently run `webpack --config app/assets/webpack.config.js`, `rails s -b 0.0.0.0` and `webpack-dev-server --config app/assets/webpack.config.js --progress --inline`
