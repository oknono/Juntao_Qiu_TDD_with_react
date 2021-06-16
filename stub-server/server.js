const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((request, result, next) => {
  if (request.method === "DELETE" && request.query["_cleanup"]) {
    const db = router.db;
    db.set("books", []).write();
    result.sendStatus(204);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log("JSON Server is running");
});
