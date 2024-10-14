import express from 'express';
import { StudentControllers } from './student.controller';
import { StudentModel } from './student.model';

const router = express.Router();

// we will call a controller function
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
