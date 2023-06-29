const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/youtubeRegistration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`Connection successful`);
}
).catch((e) => {
    console.log(`No connection\n ${e}`);
})