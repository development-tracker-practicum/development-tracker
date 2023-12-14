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
<<<<<<< HEAD
<<<<<<< HEAD
    const result = await fetch(`${this._baseUrl}${path}`, options);
    const data = await this._getResult(result);
    return data;
=======
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
    try {
      const result = await fetch(`${this._baseUrl}${path}`, options);
      const data = await this._getResult(result);
      return data;
    } catch (error) {
      throw error;
    }
<<<<<<< HEAD
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
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
