export interface FaqQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface FaqData {
  [key: string]: FaqQuestion[];
}
