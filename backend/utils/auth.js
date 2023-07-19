const oauth2 = require('authentication/oauth2.js');
const User = require('../models/User.js');

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = await oauth2.verifyToken(token);
    
    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

const checkProjectAccess = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const project = await user.projects.id(req.params.projectId);

    if (!project) {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(403).send({ error: 'Access denied.' });
  }
};

module.exports = {
  authenticateUser,
  checkProjectAccess
};