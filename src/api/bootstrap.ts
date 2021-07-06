import axios from 'axios';
import { apiUrl } from '../config';

export const boostrap = async () => {
  return axios.get(apiUrl + '/sanctum');
};
