import { parse } from "rss-to-json";

export class ApiRssToJson {
  async get(url) {
    return await parse(url)
  }
}

export default class PotCast extends ApiRssToJson {
  constructor(url) {
    super();
    this.url = url;
  }
}

export let api = {
  install(app, options) {
    let { url } = options;
    console.log(app, url);
  }
}