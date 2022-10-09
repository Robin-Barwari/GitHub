const mongoose = require("mongoose")
const User = requires("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {
    const user = await User.create({ name: "Robin", age: 18})
    User.name = "Kyle"
    await user.ave()
    // const user = new User({ name: "Robin", age: 18})
    // await user.save()
    console.log(user)
}