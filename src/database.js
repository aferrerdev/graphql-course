import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/graphqlcourse', {
            useNewUrlParser: true
        });
        console.log('>>> DB is connected');
    } catch(e) {
        console.log('DB Something goes wrong!');
        console.log(e);
    }
    
}