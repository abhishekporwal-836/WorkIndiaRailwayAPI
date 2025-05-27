const app = require('../app'); // Import your existing Express app

module.exports = (req, res) => {
  return app(req, res); // Let Vercel invoke the app as a serverless function
};
