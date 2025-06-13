import type { NextApiRequest,NextApiResponse } from 'next'
 
const BACKEND_URL = process.env.BACKEND_URL

import { ViolationMessage } from '@/models/ViolationLogs'

export default async function getViolationLogs(
  req: NextApiRequest,
  res: NextApiResponse<ViolationMessage | { error: string }>
) {

   if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const url = `${BACKEND_URL}/get-violation-log`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = (await response.json()) as ViolationMessage
    console.log("Data: ",data)
    const result = res.status(200).json(data)
  
    return result
    
  }  catch (err: any) {
      console.error('Error in getViolations:', err)
      return res.status(500).json({ error: err.message || 'Internal Server Error' })
  }
}