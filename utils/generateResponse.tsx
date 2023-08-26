const dotenv = require('dotenv');
dotenv.config();

const API_KEY = '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';
// const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
async function processMessageToChatGPT(messages: any[]) {
  let apiMessages = messages.map(
    (messageObject: { sender: string; message: any }) => {
      let role = '';
      if (messageObject.sender === 'CHATGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return {
        role: role,
        content: messageObject.message,
      };
    }
  );

  const apiRequestBody = {
    model: 'gpt-3.5-turbo',
    max_tokens: 50,
    messages: apiMessages,
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiRequestBody),
  });

  const data = await response.json();
  // console.log(data);
  return data.choices[0].message.content;
}

export default processMessageToChatGPT;

// *****************************************************************
// *****************************************************************
// TEST IMPLEMENTATION
// *****************************************************************
// *****************************************************************
// *****************************************************************

// import openaiInstance from '../openai/openai';
// // function to get chat completion from OpenAI
// async function getChatCompletion(prompt: string) {
//   // store chat history
//   const chatHistory: [string, string][] = [['user', prompt]];
//   const userPrompt = prompt;

//   // create chat construct and map through chathustory
//   try {
//     const messages = chatHistory.map(([role, content]) => ({
//       role: role === 'user' ? 'user' : 'bot',
//       content,
//     })) as any;

//     // add latest user prompt to messages
//     messages.push({ role: 'user', content: prompt });

//     // call the OpenAI api to get chat completion
//     const response = await openaiInstance.createChatCompletion({
//       max_tokens: 150,
//       temperature: 0.9,
//       model: 'gpt-3.5-turbo',
//       messages,
//     });

//     // return the response
//     const completionMsg = response.data.choices[0]?.message;

//     // update history with userinput and bot response
//     if (typeof completionMsg === 'string') {
//       chatHistory.push(['bot', completionMsg]);
//       chatHistory.push(['user', userPrompt]);

//       return completionMsg;
//     } else {
//       throw new Error('Unable to get chat completion');
//     }
//   } catch (error) {
//     console.log('error: ', error);
//     throw new Error('Unable to get chat completion');
//   }
// }

// export { getChatCompletion, openaiInstance };
