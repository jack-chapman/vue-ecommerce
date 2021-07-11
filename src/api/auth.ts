import axios from 'axios';
import { apiUrl } from '../config';

type LogInResponse = {
  success: boolean;
  message: string;
};

export const logIn = async (email: string, password: string) => {
  return axios.post<LogInResponse>(apiUrl + '/login', { email, password });
};
