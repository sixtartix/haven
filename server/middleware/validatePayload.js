export function validateWebhookPayload(req, res, next) {
  const { discordUsername, currentRank, desiredRank, gameMode, options, totalPrice } = req.body;

  if (!discordUsername || !currentRank || !desiredRank || !gameMode || !options || totalPrice === undefined) {
    const error = new Error('Missing required fields');
    error.type = 'validation';
    return next(error);
  }

  if (typeof options !== 'object') {
    const error = new Error('Invalid options format');
    error.type = 'validation';
    return next(error);
  }

  next();
}