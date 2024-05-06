import { isEmpty } from '@/utils/isEmpty';
import { setDocument } from '../db'

type SubscribeResult = {
  result: any,
  error: string | null
}

export async function subscribe(email: string): Promise<SubscribeResult> {
  let result = null,
    error = null;
  if(isEmpty(email)) {
    error = "Please provide email"
    return { result, error }
  }

  const timestamp = new Date();
  const day = timestamp.getDate().toString().padStart(2, '0');
  const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
  const year = timestamp.getFullYear().toString();

  const formattedDate = `${month}/${day}/${year}`;

  try {
    const data = {
      date: formattedDate,
    }
    await setDocument('subscribers', email, data);
    result = email
  } catch (e) {
    console.log("subscribe error", e);
    error = JSON.stringify(e);
  }
  return { result, error }
}
