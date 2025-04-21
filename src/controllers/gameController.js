const { Level, GameHistory } = require('../models/gameModels');

// Controller to get all levels
exports.getLevels = async (req, res) => {
  try {
    const levels = await Level.find();
    res.json(levels);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching levels', error: err });
  }
};

// Controller to get game history by user ID
exports.getGameHistoryByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userHistory = await GameHistory.find({ userId });
    if (userHistory.length === 0) {
      return res.status(404).json({ message: 'No game history found for this user' });
    }
    res.json(userHistory);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching game history', error: err });
  }
};

// Controller to get all game history
exports.getAllGameHistory = async (req, res) => {
  try {
    const history = await GameHistory.find();
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching game history', error: err });
  }
};
