export interface ApiResponseProps<T = null> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}