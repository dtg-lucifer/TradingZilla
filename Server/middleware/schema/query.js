import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        randNum(num: Int!, maxNum: Int): [Int]
    }
`);

export default schema;