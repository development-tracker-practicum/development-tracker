import API from './API';

class AuthApi extends API {
  registration({ password, email, username }) {
    return this._request('/users/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
        username,
      }),
    });
  }
  authorization({ password, email }) {
    return this._request('/auth/token/login', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
      }),
    });
  }
  checkToken({ uid, token }) {
    return this._request('/users/activation/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        uid,
        token,
      }),
    });
  }
}

const apiAuth = new AuthApi({
  baseUrl: 'http://localhost:8000/api/v1',
});
export default apiAuth;
