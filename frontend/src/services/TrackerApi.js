import API from './API';

class TrackerApi extends API {
  getSkills() {
    return this._request('/', {
      method: 'GET',
      headers: this._headers,
    });
  }
  editProfessionAndLevel(data) {
    return this._request(`/${data.directionID}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        user_id: {
          email: data.email,
          username: data.username,
        },
        level_id: data.level_id,
        profession: data.profession,
        level: data.level,
      }),
    });
  }
  getRecommendation(userID) {
    return this._request(`/${userID}/recommendations`, {
      method: 'GET',
      headers: this._headers,
    });
  }
}
const trackerApi = new TrackerApi({
  baseUrl: 'http://localhost:8000/api/v1/tracker',
});
export default trackerApi;
