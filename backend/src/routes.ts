import express, { Request, Response } from 'express';
import { createApplicantInfo, deleteApplicantInfo, getApplicantInfo } from './index';

const router = express.Router();

router.get('/awesome/applicant', async (req: Request, res: Response) => {
  try {
    const data = await getApplicantInfo();
     res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
})

router.post('/awesome/applicant', async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, hobby, image } = req.body;
    const newUser = await createApplicantInfo(fullName, email, phone, hobby, image);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

router.delete('/awesome/applicant', async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await deleteApplicantInfo(id);
    res.status(200).json({ message: 'Applicant deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;