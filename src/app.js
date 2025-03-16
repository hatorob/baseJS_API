const AppRoutes = require("./presentation/routes");
const ServerApp = require("./presentation/server");

const main = async () => {
    const server = new ServerApp({
        port: process.env.PORT,
        routes: AppRoutes.routes
    })
   server.start();
}

( async() => {
    await main();
})();