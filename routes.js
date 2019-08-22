module.exports = exports = function(app) {
    // ROUTE
    const WelcomeHandler = require('./routes/welcome');
    const Welcome = new WelcomeHandler();
    app.get("/", Welcome.index);
    app.get("/profile", Welcome.profile);
    }