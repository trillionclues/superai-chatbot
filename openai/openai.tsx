import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// config object
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY as string,
});

// create an instance of the OpenAI api class
const openaiInstance = new OpenAIApi(configuration);

export default openaiInstance;
