import { Request, Response, NextFunction } from 'express';

export const testController = (req: Request, res: Response) => {
  res.status(200).json({
    'shortUrl': 'generated url goes here'
  })
}

/**
 * Handle incoming requests to generated short urls. If valid, redirect to original URL
 * @param req
 * @param res 
 */
export const handleRequestToShortUrl = (req: Request, res: Response, next: NextFunction) => {

}

/**
 * Generate a new short URL for a given original URL
 * @param req
 * @param res 
 */
export const generateShortUrl = (req: Request, res: Response) => {

}