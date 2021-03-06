
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { connect } from './database';

const app = express();
connect();

app.get('/', (req, resp) => {
    resp.json({
        message: 'hola'
    })
})

app.use('/graphql', graphqlHTTP({
    // Enable GraphQL user interface
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

app.listen(3000, () => console.log('Server on port 3000'));