import { defineStore } from 'pinia';
import { logIn } from '../api/auth';

export const useAuthStore = defineStore({
  id: 'auth',
  state() {
    return {
      isLoggedIn: false,
      logInLoading: false,
      logInMessage: '',
      logInError: false,
    };
  },
  actions: {
    async logIn(email: string, password: string) {
      this.logInLoading = true;
      try {
        const { data } = await logIn(email, password);
        this.isLoggedIn = data.success;
        this.logInMessage = data.message;
      } catch (e) {
        this.logInError = true;
      } finally {
        this.logInLoading = false;
      }
    },
  },
});
