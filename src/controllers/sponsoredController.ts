import { Request, Response } from 'express';
import dbConnection from '../database.js';
import writeToFile from '../utils/writeToFile.js';

export async function getSponsoredRepos(req: Request, res: Response) {
  const sponsored = await dbConnection.query(`
    SELECT * FROM repositories
      WHERE "hasSponsorship"=true;
  `   
  );

  try {
    writeToFile(sponsored.rows);    
  } catch (error) {
    console.log(error);
    res.sendStatus(400);    
  }
  
  res.status(501).send(sponsored.rows);
}

