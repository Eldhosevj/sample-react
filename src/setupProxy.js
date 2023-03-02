const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/DocumentManagement/GetLast30DaysDocumentRequests',
    createProxyMiddleware({
      target: 'https://fs-tnr-tps-dev-api.azurewebsites.net',
      changeOrigin: true,
    })
  );
};