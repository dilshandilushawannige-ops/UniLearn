import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';

const router = Router();

router.use('/auth', authRoutes);

// Future modules will be mounted here, e.g.:
// router.use('/resources', resourceRoutes);
// router.use('/requests', requestRoutes);
// router.use('/live-class', liveClassRoutes);
// router.use('/study-plan', studyPlanRoutes);

export default router;
