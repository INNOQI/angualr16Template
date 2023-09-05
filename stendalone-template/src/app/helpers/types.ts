export interface EmbeddingRequest {
  question: string;
  embeddingEngines: string[];
  lawyer: Lawyer;
}
export interface Lawyer {
  lawyerId: string;
  lawyerName: string;
  createdAt?: Date;
  createdBy?: string;
}
export interface ErrorObject {
  error: Error;
  url: string;
}
