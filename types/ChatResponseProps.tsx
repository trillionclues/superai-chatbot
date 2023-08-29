export interface ChatReponseProps {
  apiResponse: string;
  chatHistory: Array<{
    sender: string;
    message: string;
  }>;
}
