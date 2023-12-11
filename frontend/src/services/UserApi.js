import API from './API';

class ApiUser extends API {
  registration({ password, email, username }) {
    return this._request('/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email,
        username,
      }),
    });
  }
  validation() {
    return this._request('/activation/', {
      method: 'POST',
      headers: this._headers,
    });
  }
  getUser() {
    return this._request('/activate', {
      method: 'GET',
      headers: this._headers,
    });
  }
  checkToken({ uid, token }) {
    return this._request('/activation/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        uid,
        token,
      }),
    });
  }
}

const userApi = new ApiUser({
  baseUrl: 'http://localhost:8000/api/v1/users',
});
export default userApi;
