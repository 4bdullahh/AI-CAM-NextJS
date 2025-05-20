import type { NextApiRequest,NextApiResponse } from 'next'
 
const BACKEND_URL = process.env.BACKEND_URL

import { MessageResult } from '@/models/MessageResult'

export default async function getViolations(
  req: NextApiRequest,
  res: NextApiResponse<MessageResult | { error: string }>
) {

   if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const url = `${BACKEND_URL}/get-violation-data`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = (await response.json()) as MessageResult
    const result = res.status(200).json(data)

    return result
    
  }  catch (err: any) {
      console.error('Error in getViolations:', err)
      return res.status(500).json({ error: err.message || 'Internal Server Error' })
  }
}