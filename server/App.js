require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router.js");
const port = 8003;
const multer = require('multer');
const path = require('path');
const fs = require('fs');
app.use(cors());
app.use(express.json());
const file = require("./models/file.js");
const upload = multer({ dest: 'uploads/' });
const CircularJSON = require('circular-json');

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  const { id } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // const extension = path.extname(req.file.originalname);
  // const fileName = `${id}${extension}`;
  // const filePath = path.join('uploads/', fileName);
const saveimage=new file({
  name:id,
  data :fs.readFileSync("uploads/"+req.file.filename),
  contentType:"image/png"
})
saveimage.save().then((res)=>console.log("asd"))
  // fs.rename(req.file.path, filePath, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).json({ error: 'Failed to save file' });
  //   }
  //   console.log(`File saved as ${fileName}`);
    res.json({ message: 'File uploaded successfully!' });
 
});
app.get('/file/:username', (req, res) => {
  const { username } = req.params;

  file.find({name:username}, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    console.log(data)
    res.status(200).send(data);
  });
});





// Serve static files
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(router);

app.listen(port, () => {
  console.log(`Server Started : Port Number ${port}`);
});