const mongoose = require("mongoose");

const DB =
  "mongodb+srv://190863:humcare3@cluster0.wm9dxlv.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Server Started Successfully!"))
  .catch((error) => console.log(error.message));
