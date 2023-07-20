const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("HomePage", "/");
routes.add("ArchivePage", "/archive/:archive_id");
