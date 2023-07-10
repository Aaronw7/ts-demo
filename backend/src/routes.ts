import express from 'express';
import { getApplicantInfo } from './index';

const router = express.Router();

router.get('/awesome/applicant', async (req, res) => {
  try {
    const data = await getApplicantInfo();
     res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
})

export default router;