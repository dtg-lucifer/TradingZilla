import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors"
import schema from "./middleware/schema/query.js";
import queryResolver from "./middleware/resolvers/root.js";

const app = express();
const PORT = process.env.PORT

app.use(cors({ origin: `http://localhost:${PORT || 3001}`}))
app.use(express.json())
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: queryResolver,
        graphiql: true,
    })
);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server Running Successfully",
        status: "OK",
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log(
        `Server : http://localhost:${PORT || 3001}\nGraphQl server : http://localhost:${PORT || 3001}/graphql`
    );
});