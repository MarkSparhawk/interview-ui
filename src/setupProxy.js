const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api1/",createProxyMiddleware({target: 'http://127.0.0.1:5001',changeOrigin: true,}));
  app.use('/api2/',createProxyMiddleware({target: 'http://127.0.0.1:5000',changeOrigin: true,}));

};