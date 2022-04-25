import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('home controller')
  // res.sender('pages/page);
};

export const dogs = (req: Request, res: Response) => {
  
  // res.sender('pages/dogs);
};

export const cats = (req: Request, res: Response) => {
  
  // res.sender('pages/cats);
};

export const fishes = (req: Request, res: Response) => {
  
  // res.sender('pages/fishes);
};