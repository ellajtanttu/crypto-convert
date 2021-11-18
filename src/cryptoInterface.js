
export default class CryptoInterface {  
  static async getCryptos() {
    try {
      const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?interval=1d,30d&per-page=100&page=1&key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}