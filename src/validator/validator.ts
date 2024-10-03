import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Validation schema for adding a blog article
const addArticleSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
});

const updateArticleSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  content: Joi.string().min(10),
  id: Joi.string(),

});



const validateAddArticle = (req: Request, res: Response, next: NextFunction) => {
  const { error } = addArticleSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateUpdateArticle = (req: Request, res: Response, next: NextFunction) => {
  const { error } = updateArticleSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};





// Export validation functions
export {
  validateAddArticle,
  validateUpdateArticle,
};
