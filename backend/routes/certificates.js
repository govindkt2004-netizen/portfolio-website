const express = require('express');
const Certificate = require('../models/Certificate');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/certificates', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ date: -1 });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/certificates', auth, async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/certificates/:id', auth, async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/certificates/:id', auth, async (req, res) => {
  try {
    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certificate deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
