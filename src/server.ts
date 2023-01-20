import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return "Banana";
});

app.listen({
  port: 3333,
});
