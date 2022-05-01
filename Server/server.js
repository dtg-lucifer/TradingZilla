import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors"
import schema from "./schema/query.js";
import root from "./root/root.js";
import sql from "./database/config/mysql.js";

const app = express();

app.use(cors({ origin: `http://localhost:${process.env.PORT || 3001}`}))
app.use(express.json())
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
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
        `Server : http://localhost:${process.env.PORT || 3001}\nGraphQl server : http://localhost:${process.env.PORT || 3001}/graphql`
    );
});