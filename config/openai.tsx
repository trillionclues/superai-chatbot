import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// config object
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

// create an instance of the OpenAI api class
const openaiInstance = new OpenAIApi(configuration);

export default openaiInstance;
