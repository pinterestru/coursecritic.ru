import { dataSource } from "./dataSource";

export class IpApi {
  static async processIpCloudflare() {
    const res = await fetch("https://1.1.1.1/cdn-cgi/trace");
    const data = await res.text();
    let arr = data
      .trim()
      .split("\n")
      .map((e) => e.split("="));
    const obj = Object.fromEntries(arr);
    return { ip: obj.ip, countryCode: obj.loc };
  }

  static async processIpIPAPI() {
    // 1000 per day
    const obj = await dataSource("https://ipapi.co/json/");
    return { ip: obj.ip, countryCode: obj.country_code };
  }

  static async processIpIPGEOLOCATION() {
    // 1000 per day
    const obj = await dataSource(
      "https://api.ipgeolocation.io/ipgeo?apiKey=e0bda368a5d44a31acae65552c5c893c"
    );
    return { ip: obj.ip, countryCode: obj.country_code2 };
  }

  static async processIpIPWHO() {
    // 10000 per month
    const obj = await dataSource("https://ipwho.is");
    return { ip: obj.ip, countryCode: obj.country_code };
  }

  static async processIpCOUNTRYIS() {
    // unlim
    const obj = await dataSource("https://api.country.is/");
    return { ip: obj.ip, countryCode: obj.country };
  }

  static async processIpABSTRACTAPI() {
    // 25000 per month
    const obj = await dataSource(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=1d3ddf399fec42f1996db1743a73be12"
    );
    return { ip: obj.ip_address, countryCode: obj.country_code };
  }

  static async processIpIPDATACO() {
    // 1500 per day
    const obj = await dataSource(
      "https://api.ipdata.co/?api-key=1c384569a50b80721edfebe6326bb9e109db67a23c8d99d1380e712a"
    );
    return { ip: obj.ip, countryCode: obj.country_code };
  }

  static processIpMeta(options) {
    const functions = [
      this.processIpCloudflare,
      //processIpIPAPI,
      //processIpIPGEOLOCATION,
      //processIpABSTRACTAPI,
      //processIpIPDATACO
    ];
    const func = functions[Math.floor(Math.random() * functions.length)];
    return func().then((v) => {
      if (!v.ip || !v.countryCode) {
        return this.processIpCOUNTRYIS();
      }
      return v;
    });
  }

  static IpDetailsGet(options) {
    options = options || {};
    if (options.withTimeout) {
      return new Promise((resolve) => {
        setTimeout(resolve, options.timeout || 5000);
      }).then(() => this.processIpMeta(options));
    }
    return this.processIpMeta(options);
  }
}
