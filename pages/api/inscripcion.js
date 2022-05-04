import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return;
  console.log(req.body);
}
