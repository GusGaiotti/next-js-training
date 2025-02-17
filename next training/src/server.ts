// src/server.ts

import express from 'express';
import userRoutes from './app/4 interface/routes/UserRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
    