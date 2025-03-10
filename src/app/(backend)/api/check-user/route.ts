import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (user) {
      return res.status(200).json(true);
    } else {
      return res.status(200).json(false);
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'utilisateur:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}