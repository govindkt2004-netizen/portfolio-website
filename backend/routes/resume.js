const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const auth = require('../middleware/auth');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post('/resume/upload', auth, upload.single('resume'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

router.get('/resume/download', (req, res) => {
  const file = path.join(__dirname, '../uploads');
  const files = fs.readdirSync(file).filter((f) => f.endsWith('.pdf') || f.endsWith('.docx'));

  if (!files.length) return res.status(404).json({ message: 'No resume uploaded' });
  res.download(path.join(file, files[0]));
});

module.exports = router;
