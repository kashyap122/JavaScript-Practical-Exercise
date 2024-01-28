const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for handling multiple file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // generate unique filenames
  }
});

const upload = multer({ storage: storage });

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle multiple file upload
app.post('/upload', upload.array('files'), (req, res) => {
  const uploadedFiles = req.files.map(file => file.filename);

  if (uploadedFiles.length === 0) {
    return res.status(400).send('No files uploaded.');
  }

  res.send(`<h2>Files Uploaded Successfully:</h2><ul>${uploadedFiles.map(file => `<li>${file}</li>`).join('')}</ul>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
