const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://omer117:Lollol601@omer11.h9krjz7.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log('Connected')
});

const userSchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    isHeInside: Boolean,
})


const User = mongoose.model("User",userSchema);

async function run() {
    // const user = await User.create( { name: 'theFuckIKnow', age: 1 })
    User.insertMany([{name:'omer',age:23},{name:'baby',age:23},{name:'bar',age:21},{name:'guy',age:88}])
    // const user = new User({ name: 'omer', age: 12 });
    // console.log(user);
    console.log(User.find({name:'baby'}));
}
