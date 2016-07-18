var env = Object.assign({
  NODE_ENV: 'development',
  API_URL: '//localhost:8080',
  MONGODB_URI: 'mongodb://127.0.0.1:27017/photo-gallery',
  UPLOAD_PATH: __dirname + '/lib/uploads/',
  PORT: 8080,
}, process.env);

module.exports = env;
