const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const User = require('./models/User');
const Project = require('./models/Project');
const Certificate = require('./models/Certificate');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await User.deleteMany({});
  await Project.deleteMany({});
  await Certificate.deleteMany({});

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin@12345', 10);

  await User.create({ email: process.env.ADMIN_EMAIL || 'admin@example.com', password: hashedPassword });

  await Project.create([
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online retail experience with authentication and payments.',
      technology: 'React, Node.js, MongoDB',
      githubLink: 'https://github.com/example/ecommerce',
      liveDemo: 'https://example.com/ecommerce',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      category: 'Web App',
      date: '2024-01-10'
    },
    {
      title: 'AI Dashboard',
      description: 'An analytical dashboard for visualizing AI model performance.',
      technology: 'React, Express, MongoDB',
      githubLink: 'https://github.com/example/ai-dashboard',
      liveDemo: 'https://example.com/ai-dashboard',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      category: 'AI',
      date: '2024-05-20'
    }
  ]);

  await Certificate.create([
    {
      name: 'React Professional Certificate',
      issuedBy: 'Meta',
      date: '2024-02-12',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      name: 'Node.js Backend Certificate',
      issuedBy: 'Udemy',
      date: '2024-04-18',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ]);

  console.log('Seed data created');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
