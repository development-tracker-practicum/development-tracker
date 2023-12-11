import API from './API';

class AuthApi extends API {

  authorization({ password, email }) {
    return this._request('/token/login', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
      }),
    });
  }
  logout() {
    return this._request('/token/logout');
  }
}

const apiAuth = new AuthApi({
  baseUrl: 'http://localhost:8000/api/v1/auth',
});
export default apiAuth;
