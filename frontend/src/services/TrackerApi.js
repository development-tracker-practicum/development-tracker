import API from './API';

class TrackerApi extends API {
  getSkills() {
    return this._request('/', {
      method: 'GET',
      headers: this._headers,
    });
  }

  editProfessionAndLevel(id, data) {
    return this._request(`/${id}/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        level_id: data.level_id,
        profession: data.profession,
      }),
    });
  }
  getRecommendations(userID) {
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
