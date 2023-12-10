import { Request, Response, NextFunction } from 'express';
import { verifyToken } from 'authentication/oauth2';
import User from '../models/User';

export const authenticateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token: string = req.header('Authorization').replace('Bearer ', '');
    const user = await verifyToken(token);
    
    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

export const checkProjectAccess = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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