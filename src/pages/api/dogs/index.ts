import getdogs from '@lib/mongo/dogs';

const handler = async (req: any, res: any) => {
  if (req.method === 'GET') {
    try {
      const { dogs, error } = await getdogs();
      if (error) throw new Error(error);

      return res.status(200).json({ dogs });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(425).end(`Method ${req.method} is not allowed. `);
};

export default handler;
