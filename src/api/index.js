import auth from "../services/authService/auth";

const api = {
  BASE_URL: process.env.REACT_APP_API_ENDPOINT,

  string: "Ellie",

  async authFetch(url, method, body = null) {
    const options = {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    };

    if (body) {
      const stringBody = JSON.stringify(body);
      options.body = stringBody;
    }

    const response = await fetch(`${this.BASE_URL}/${url}`, options);

    const token = response.headers.get("token");
    if (token) {
      auth.accessToken = token;
      auth.authenticated = true;
    } else {
      auth.accessToken = "";
      auth.authenticated = false;
    }

    const json = await response.json();

    const returnObject = {
      error: response.error || null,
      json: json || null,
      status: response.status || null,
    };

    return returnObject;
  },

  async postLogin(body) {
    const data = this.authFetch("auth/login", "POST", body);
    return data;
  },

  async postLogout() {
    console.log("logout clicked");
    auth.authenticated = false;
    const data = this.authFetch("auth/logout", "POST");
    if (data.status === 200) return true;
  },

  async getTokens() {
    const data = await this.authFetch("auth/tokens", "GET");
    return data;
  },
};

export default api;
