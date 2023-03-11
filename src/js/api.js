import Axios from "axios";

export class ApiRssToJson {
  constructor() {
    this.api = "https://rss-to-json-serverless-api.vercel.app";
  }
  get(url = this.url) {
    return Axios.get(this.api + "/api?feedURL=" + url).then(e => e.data)
  }
}

export default class PotCast extends ApiRssToJson {
  constructor(url) {
    super();
    this.url = url;
  }
}