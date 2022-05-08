import { GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } from "graphql";
import { GraphQLObjectType } from "graphql";
import randNumResolver from "../resolvers/randNumResolver.js"

const rootQuery = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        randNum: {
            type:  new GraphQLList(GraphQLInt),
            args: {
                num: { type: new GraphQLNonNull(GraphQLInt) },
                maxNum: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: (_, args) => randNumResolver(args),
        },
    }),
});

const schema = new GraphQLSchema({ query: rootQuery });

export default schema;