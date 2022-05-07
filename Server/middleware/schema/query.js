// import { graphql, GraphQLInt, GraphQLSchema } from "graphql";
// import { GraphQLObjectType } from "graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        randNum(num: Int!, maxNum: Int): [Int]
    }
`);

export default schema;


// const rootQuery = new GraphQLObjectType({
//     name: "Query",
//     fields: () => ({
//         randNum: { 
//             type: GraphQLInt,
//             resolve: ({ num, maxNum}) => {
//                 let output = [];
//                 for (let i = 0; i < num; i++) {
//                     output.push(1 + Math.floor(Math.random() * (maxNum || 10)));
//                 }
//                 return output;                
//             },
//         }
//     })
// }) 