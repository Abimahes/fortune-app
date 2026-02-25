// const express = require('express');
// const cors = require('cors');

// const signupRoute = require('./routes/signup');
// // const loginRoute = require('./routes/login');

// const app = express();

// app.use(cors());
// app.use(express.json()); // 👈 frontend la irundhu data read panna

// // Routes
// app.use('/api', signupRoute);
// // app.use('/api', loginRoute);

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const fortuneRoute = require('./routes/fortune');
// const profileRoutes = require('./routes/profile');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb+srv://ilakzilakzilakz:X2KhNgNipMEb2zoj@cluster0.f91qfqz.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', signupRoute);
app.use('/api', loginRoute);
app.use('/api', fortuneRoute)
// app.use('/api', profileRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
