import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Query {
        hello: String
    }

`;

makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})