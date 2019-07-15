
// What information we can get from the GraphQL
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world with GraphQL";
        },
        greet(root, args) {
            console.log(args);
            return 'Hello!';
        }
    }
};