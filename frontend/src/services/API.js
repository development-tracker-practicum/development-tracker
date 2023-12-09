export default class API {
  constructor(config) {
    this._config = config;
    this._baseUrl = config.baseUrl;
    this._headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
  async _request(path = '', options) {
    const result = await fetch(`${this._baseUrl}${path}`, options);
    const data = await this._getResult(result);
    return data;
  }
  async _getResult(result) {
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();

      throw new Error(error?.message || result.status);
    }
  }
}
