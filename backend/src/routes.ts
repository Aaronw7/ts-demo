import express from 'express';
import { users } from './db/schema';
import { getUserInfo } from './index';

const router = express.Router();

router.get('/applicant', async (req, res) => {
  try {
    const data = await getUserInfo();
    console.log('this is the data: ', data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
})

export default router;