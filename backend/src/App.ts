import createServer from "./utils/server";

const port = process.env.PORT;

const app = createServer();

app.listen(port);

export default app