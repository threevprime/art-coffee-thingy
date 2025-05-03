// filepath: /home/arbion/art-coffee-thingy-1/pages/api/test-supabase.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('cart').select('*');
  console.log('Data:', data);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
}