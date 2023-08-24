import openaiInstance from '../config/openai';
import dotenv from 'dotenv';
dotenv.config();

export const getChatCompletion = async (prompt: string) => {
  // store chat history
  const chatHistory: [string, string][] = [['user', prompt]];
  const userInput = prompt;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  try {
    // create chathistory construct by iterating over history
    const messages = chatHistory.map(([role, content]) => ({
      role: role === 'user' ? 'system' : 'user',
      content,
    })) as any;
    console.log('messages: ', messages);

    // add latest user message
    messages.push({ role: 'user', content: prompt });

    // call api w/userInput
    const chatCompletion = await openaiInstance.createChatCompletion(
      {
        model: 'gpt-3.5-turbo',
        messages,
        // engine: 'davinci',
      },
      { headers }
    );

    // get response from api
    const responseMsg = chatCompletion.data.choices[0]?.message;

    // add response to chat history
    if (typeof responseMsg === 'string') {
      // add response to chat history
      chatHistory.push(['assistant', responseMsg]);
      chatHistory.push(['user', userInput]);

      // return response
      return responseMsg;
    } else {
      console.log('Unexpected response format:', responseMsg);
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.log('error: ', error);
  }
};
