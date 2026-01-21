import { Request, Response, NextFunction } from 'express';

export const testController = (req: Request, res: Response) => {
  console.log('test')
  res.status(200).json({
    'shortUrl': 'generated url goes here'
  })
}

/**
 * Handle incoming requests to generated short urls. If valid, redirect to original URL with
 * status 302 to prevent browsers from caching original url
 * @param req
 * @param res 
 */
export const handleRequestToShortUrl = (req: Request, res: Response, next: NextFunction) => {
  let originalUrl; // TODO: Look for valid original url
  res.redirect(302, `${originalUrl}`)
}

/**
 * Generate a new short URL for a given original URL
 * @param req
 * @param res 
 */
export const generateShortUrl = (req: Request, res: Response) => {
  // TODO: Generate a unique short url to associate with the original
  // TODO: Save the generated url to persistent storage
  // TODO: Respond with the shortened url if creation is successful
  res.status(201).json()
}