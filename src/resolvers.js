
import { tasks } from './sample'

// What information we can get from the GraphQL
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world with GraphQL";
        },
        greet(root, args) {
            console.log(args);
            return `Hello! ${args.name}`;
        },
        tasks: () => {
            return tasks
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }   
};