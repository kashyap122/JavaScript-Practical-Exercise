const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Use memory storage for processing images
const upload = multer({ storage: storage });

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle image compression and upload
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const originalBuffer = req.file.buffer;

  try {
    // Use sharp to compress the image
    const compressedBuffer = await sharp(originalBuffer)
      .resize({ width: 800, height: 600 }) // Adjust dimensions as needed
      .toBuffer();

    // Calculate sizes in KB
    const originalSizeKB = originalBuffer.length / 1024;
    const compressedSizeKB = compressedBuffer.length / 1024;

    // Save the compressed image to the "uploads" folder
    const filename = Date.now() + '-compressed.jpg'; // You can adjust the filename as needed
    const filePath = path.join(__dirname, 'uploads', filename);
    fs.writeFileSync(filePath, compressedBuffer);

    // Calculate compression ratio
    const compressionRatio = ((originalSizeKB - compressedSizeKB) / originalSizeKB) * 100;

    // Respond with the compression ratio and file sizes in KB
    res.send(`<h2>Compression Successful</h2>
      <p>Original Size: ${originalSizeKB.toFixed(2)} KB</p>
      <p>Compressed Size: ${compressedSizeKB.toFixed(2)} KB</p>
      <p>Compression Ratio: ${compressionRatio.toFixed(2)}%</p>
      <p>Compressed Image Saved: ${filename}</p>`);
  } catch (error) {
    console.error('Error during image compression:', error);
    res.status(500).send('Error during image compression.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
