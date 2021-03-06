
import { tasks } from './sample'
import User from './models/User';

// What information we can get from the GraphQL
export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world with GraphQL";
        },
        greet(root, args, ctx) {
            console.log(ctx);
            return `Hello! ${args.name}`;
        },
        tasks: () => {
            return tasks
        },
        async Users() {
            return await User.find();
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            console.log(newUser);
            return newUser;
        },
        async deleteUser(_, { _id }) {
            // Return the deleted document
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            // Return updated user
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }   
};