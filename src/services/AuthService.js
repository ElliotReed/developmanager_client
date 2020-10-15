import axiosInstance from "services/axios";

class AuthService {
  constructor() {
    this.accessToken = "";
    this.authenticated = false;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(token) {
    this.accessToken = token;
    this.setAuthenticated(true);
  }

  setAuthenticated(boolean) {
    this.authenticated = boolean;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  async initializeTokens() {
    try {
      const response = await axiosInstance.get("auth/tokens");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postLogin(loginData) {
    try {
      const response = await axiosInstance.post("auth/login", loginData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postLogout() {
    try {
      const response = await axiosInstance.post("auth/logout");
      this.setAccessToken("");
      this.setAuthenticated(false);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
