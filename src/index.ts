import { a } from '@src/routes/posts';
import dotenv from 'dotenv-safe';

dotenv.config();

console.log(a);
console.log(process.env.DB_URL);
