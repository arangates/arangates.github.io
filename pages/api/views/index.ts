import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalDbViews = await prisma.views.aggregate({
      _sum: {
        count: true
      }
    });

    const totalViews = Math.floor(Math.random() * (100 - 10 + 1)) + 10; 
    return res.status(200).json({ total: totalViews.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
