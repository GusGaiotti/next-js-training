// src/app/api/users/route.ts

import express from 'express';
import { UserController } from  '../controllers/UserController';

const userController = new UserController();
const router = express.Router();

router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;
