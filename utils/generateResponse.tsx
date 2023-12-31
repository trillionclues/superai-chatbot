// *****************************************************************
// const api = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
// console.log(api);
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
    messages: apiMessages,
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiRequestBody),
  });

  const data = await response.json();
  // console.log(data);
  if (data.choices && data.choices.length > 0) {
    console.log(data.choices[0]?.message.content);
    return data.choices[0]?.message.content;
  } else {
    console.log('No response content found in API response.');
    return ''; // Or handle this case accordingly
  }
}

export default processMessageToChatGPT;

// *****************************************************************
// *****************************************************************
// TEST IMPLEMENTATION
// *****************************************************************
// *****************************************************************
// *****************************************************************

//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
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
