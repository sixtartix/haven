import express from 'express';
import { sendWebhook } from '../services/webhookService.js';
import { validateWebhookPayload } from '../middleware/validatePayload.js';

const router = express.Router();

router.post('/discord', validateWebhookPayload, async (req, res, next) => {
  try {
    await sendWebhook(req.body);
    res.status(200).json({ message: 'Webhook sent successfully' });
  } catch (error) {
    next(error);
  }
});

export { router as webhookRouter };