export interface ChatQueryProps {
  inputText: string;
  isTyping: boolean;
  isSending: boolean;
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleChatCompletion: (inputText: string) => Promise<void>;
}
