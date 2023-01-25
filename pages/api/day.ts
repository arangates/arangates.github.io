import type { NextApiRequest, NextApiResponse } from 'next';
import { brahmaMuhurthaStartTime, brahmaMuhurthaEndTime }  from 'lib/sastra';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const muhurta = {start: brahmaMuhurthaStartTime, end: brahmaMuhurthaEndTime};

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ muhurta });
}
