import API from './API';

class ApiUser extends API {
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
}

const userApi = new ApiUser({
  baseUrl: 'http://localhost:8000/api/v1/users',
});
export default userApi;
