const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer")
const path = require("path")
const PORT = process.env.PORT || 8800


dotenv.config();
// mongoose
// const mongooseUrl
const connectMongo = () => {
  mongoose.connect("mongodb+srv://jayp_3008:jay123@cluster0.xycjrla.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  var conn = mongoose.connection;
  conn.on(
    "error",
    console.error.bind(console, "MongoDB Connection Error>> : ")
  );
  conn.once("open", function () {
    console.log("Database connection has been established successfully.");
  });
};

app.use("/images",express.static(path.join(__dirname,"public/images")));

//middleware
connectMongo()
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req, file, cb) =>{
    cb(null,"public/images")//file.originalname
  },
  filename: (req, file, cb)=>{
  cb(null, req.body.name);
  },
});
const upload = multer({storage: storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  try{
    return res.status(200).json("file uploded successfull.");

  }catch(err){
    console.log(err)
  }
})

// app.get("/",(req,res)=>{
//     res.send("wellcome to homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("wellcome to user pagre")
// })

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen({PORT}, () => {
  console.log("Backend Server is running! hello jay");
});
